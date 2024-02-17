const formPrivateServer = document.querySelector("#form_private-server_webgl");

const lang1 = document.querySelector("#form_private-server_field_lang1_webgl");
const lang2 = document.querySelector("#form_private-server_field_lang2_webgl");

lang1.value = localStorage.getItem("lang1") || "";
lang2.value = localStorage.getItem("lang2") || "";

lang1.addEventListener("change", (event) =>
  localStorage.setItem("lang1", event.target.value.toLowerCase())
);
lang2.addEventListener("change", (event) =>
  localStorage.setItem("lang2", event.target.value.toUpperCase())
);

formPrivateServer.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!lang1.value || !lang2.value) {
    alert("Preencha todos os campos!");
    return;
  }

  chrome.runtime.sendMessage({
    action: "formPrivateServerWebgl",
    data: {
      lang: `${lang1.value}_${lang2.value}`
    },
  });
});
