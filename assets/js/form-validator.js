const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const modal = document.querySelector(".contact__success");
const closeBtn = document.querySelector(".contact__success--icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

closeBtn.addEventListener("click", closeModal);

function checkInput() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const subjectValue = subject.value;
  const messageValue = message.value;

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
    console.log(email.value);
    sendEmail();
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

function sendEmail() {
  Email.send({
    SecureToken: "947c40f0-44ca-4a39-ba91-692de84b387a",

    To: "henriquefelixcontato@gmail.com",
    From: "henriquefelixsite@gmail.com",
    Subject: "Nova mensagem recebida! | Portfolio",
    Body: `<strong>Nome:</strong> ${username.value} <hr>
                 <strong>Email:</strong> ${email.value} <hr>
                 <strong>Subject:</strong> ${subject.value} <hr>
                 <strong>Message:</strong> ${message.value}`,
  }).then(showSuccessModal(username.value));
}

function clearInputs() {
  username.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}

function showSuccessModal(name) {
  clearInputs();
  const title = document.querySelector(".contact__success--title");
  const description = document.querySelector(".contact__success--description");

  title.innerHTML = `Obrigado pelo contato, ${name}!`;
  description.innerHTML = `Sua mensagem já foi recebida e retornarei o mais rápido possível
              😉.`;

  modal.classList.add("show__modal");
}

function closeModal() {
  modal.classList.remove("show__modal");
}
