export default function getDefaultFieldsValues() {
  /**
   * @type {HTMLMetaElement}
   */
  const metaProfileID = document.querySelector("meta[name='Notify-Token']");
  const profileID = metaProfileID.content.split(".")[0];

  const url = window.location.href;

  const regex = /\/play\/(\d+)/;

  const match = url.match(regex);

  const planetID = match ? match[1] : null;

  return {
    profileID,
    planetID: planetID,
  };
}
