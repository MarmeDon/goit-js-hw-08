import throttle from "lodash.throttle";

const refs = {
   form: document.querySelector(".feedback-form")
}

refs.form.addEventListener('input', throttle(onFormInput, 500));

refs.form.addEventListener('submit', onFormSubmit);

const formData = localStorage.getItem("feedback-form-state") ? JSON.parse(localStorage.getItem("feedback-form-state")) : {};

function onFormInput({ target }) {
   formData[target.name] = target.value;
   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function setFormValues() {
   const savedValues = localStorage.getItem("feedback-form-state");
   if (savedValues) {
      const data = JSON.parse(savedValues);
      if (data.email) {
         refs.form.elements.email.value = data.email;
      }
      if (data.message) {
         refs.form.elements.message.value = data.message;
      }
   }
}

setFormValues();


function onFormSubmit(e) {
   e.preventDefault();
   const storageValues = JSON.parse(localStorage.getItem("feedback-form-state"))
   console.log(storageValues);
   e.currentTarget.reset();
   localStorage.removeItem("feedback-form-state");
   
}