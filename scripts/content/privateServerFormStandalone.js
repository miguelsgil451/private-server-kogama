const formPrivateServer = document.querySelector(
  "#form_private-server_standalone"
);

const profileID = document.querySelector(
  "#form_private-server_field_profileID_standalone"
);
const planetID = document.querySelector(
  "#form_private-server_field_planetID_standalone"
);
const lang1 = document.querySelector(
  "#form_private-server_field_lang1_standalone"
);
const lang2 = document.querySelector(
  "#form_private-server_field_lang2_standalone"
);

chrome.runtime.sendMessage({ action: "getDefaultFieldsValues" })
  .then((fieldsValues) => {
    if(fieldsValues){
      localStorage.setItem(
        "profileID",
        fieldsValues.profileID || localStorage.getItem("profileID")
      );
      localStorage.setItem(
        "planetID",
        fieldsValues.planetID || localStorage.getItem("planetID")
      );
    }

    profileID.value = localStorage.getItem("profileID") || "";
    planetID.value = localStorage.getItem("planetID") || "";
    lang1.value = localStorage.getItem("lang1") || "";
    lang2.value = localStorage.getItem("lang2") || "";
  })
  .catch((error) => {
    console.error("Erro ao enviar mensagem:", error);
  });

profileID.addEventListener("change", (event) =>
  localStorage.setItem("profileID", event.target.value)
);
planetID.addEventListener("change", (event) =>
  localStorage.setItem("planetID", event.target.value)
);
lang1.addEventListener("change", (event) =>
  localStorage.setItem("lang1", event.target.value.toLowerCase())
);
lang2.addEventListener("change", (event) =>
  localStorage.setItem("lang2", event.target.value.toUpperCase())
);

formPrivateServer.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  if (!profileID.value || !planetID.value || !lang1.value || !lang2.value) {
    alert("Preencha todos os campos!");
    return;
  }

  chrome.runtime.sendMessage({
    action: "formPrivateServerStandaloneSubmission",
    data: {
      profileID: profileID.value,
      planetID: planetID.value,
      lang: `${lang1.value.toLowerCase()}_${lang2.value.toUpperCase()}`,
    },
  });
});
