const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(username);
  console.log(email);
  console.log(subject);
  console.log(message);

  checkInput();
});

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const subjectValue = subject.value;
  const messageValue = message.value;

  console.log(usernameValue);
  console.log(emailValue);
  console.log(subjectValue);
  console.log(messageValue);

  if (usernameValue === "") {
    setErrorFor(username, "Por favor, insira seu nome.");
  } else {
    setSuccessrFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Por favor, insira seu email.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Este email não é valido :/");
  } else {
    setSuccessrFor(email);
  }

  if (subjectValue === "") {
    setErrorFor(subject, "Insira um assunto por favor.");
  } else {
    setSuccessrFor(subject);
  }

  if (messageValue === "") {
    setErrorFor(message, "Ops! O campo de mensagem está vazio.");
  } else {
    setSuccessrFor(message);
  }

  const formControls = form.querySelectorAll(".contact__content");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "contact__content success";
  });

  if (formIsValid) {
    console.log("Form is valid!");
  }
}

function setErrorFor(input, msg) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = msg;
  formControl.className = "contact__content error";
}

function setSuccessrFor(input) {
  const formControl = input.parentElement;

  formControl.className = "contact__content success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
