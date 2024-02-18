
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

export default function getDefaultFieldsValues() {
  const profileID = getProfileID();
  const planetID = getPlanetID();

  return {
    profileID,
    planetID,
  };
}
