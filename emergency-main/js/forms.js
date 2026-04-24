const form = document.querySelector("form");

const outputFirst = document.querySelector("#first_output");
const outputLast = document.querySelector("#last_output");
const outputEmail = document.querySelector("#email_output");
const outputPass = document.querySelector("#pass_output");
const outputAntal = document.querySelector("#antal_output");
const outputMåned = document.querySelector("#måned_output");
const outputTerms = document.querySelector("#terms_output");

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  outputFirst.textContent = formData.get("first_name");
  outputLast.textContent = formData.get("last_name");
  outputEmail.textContent = formData.get("email");
  outputPass.textContent = formData.get("password");
  outputAntal.textContent = formData.get("antal");
  outputMåned.textContent = formData.get("måned");
  outputTerms.textContent = formData.get("accept_terms");

  form.reset();
}
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

{
  form.addEventListener("invalid", cancelPopup, true);

  form.reset();
}
