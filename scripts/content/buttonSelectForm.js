const buttonSelectForm = document.querySelector("#button_select-form");
const formPrivateServerStandalone = document.querySelector(
  "#form_private-server_standalone"
);
const formPrivateServerWebgl = document.querySelector(
  "#form_private-server_webgl"
);

function standaloneMode() {
  localStorage.setItem("mode", "standalone");
  buttonSelectForm.textContent = "I AM WEBGL";
  formPrivateServerStandalone.style.display = "flex";
  formPrivateServerWebgl.style.display = "none";
}

function webglMode() {
  localStorage.setItem("mode", "webgl");
  buttonSelectForm.textContent = "I AM STANDALONE";
  formPrivateServerStandalone.style.display = "none";
  formPrivateServerWebgl.style.display = "flex";
}

buttonSelectForm.addEventListener("click", () => {
  if (localStorage.getItem("mode") === "standalone") {
    webglMode();
  } else {
    standaloneMode();
  }
});
