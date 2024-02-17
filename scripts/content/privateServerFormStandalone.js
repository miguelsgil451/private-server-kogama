const formPrivateServer = document.querySelector("#form_private-server_standalone");

const profileID = document.querySelector(
  "#form_private-server_field_profileID_standalone"
);
const planetID = document.querySelector("#form_private-server_field_planetID_standalone");
const lang1 = document.querySelector("#form_private-server_field_lang1_standalone");
const lang2 = document.querySelector("#form_private-server_field_lang2_standalone");

chrome.runtime.sendMessage({
  action: "getDefaultFieldsValues"
}, (defaultFieldValues) => {
  
});

profileID.value = localStorage.getItem("profileID") || "";
planetID.value = localStorage.getItem("planetID") || "";
lang1.value = localStorage.getItem("lang1") || "";
lang2.value = localStorage.getItem("lang2") || "";

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
    action: "formPrivateServerSubmission",
    data: {
      profileID: profileID.value,
      planetID: planetID.value,
      lang1: lang1.value,
      lang2: lang2.value,
    },
  });
});
