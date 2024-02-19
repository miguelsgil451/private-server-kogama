
function getProfileID() {
  const metaProfileID = document.querySelector("meta[name='Notify-Token']");

  if (!metaProfileID) {
    return null;
  }

  const profileID = metaProfileID.content.split(".")[0];
  return profileID;
}

function getPlanetID() {
  const url = window.location.href;

  const regex = /\/play\/(\d+)/;
  const match = url.match(regex);

  const planetID = match ? match[1] : null;

  return planetID;
}

function getLang(){
  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  
  const lang = urlParams.get("lang");

  if(!lang){
    return null;
  }

  const lang1 = lang.split("_")[0];
  const lang2 = lang.split("_")[1];

  return [lang1, lang2];
}

export default function getDefaultFieldsValues() {
  const profileID = getProfileID();
  const planetID = getPlanetID();
  const lang = getLang();

  return {
    profileID,
    planetID,
    lang
  };
}
