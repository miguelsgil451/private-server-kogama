import getDefaultFieldsValues from "./scripts/background/getDefaultFieldsValues.js";
import openStandalone from "./scripts/background/openStandalone.js";
import openWebgl from "./scripts/background/openWebgl.js";

console.log("PRIVATE SERVER KOGAMA EXTENSION");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const actualTab = tabs[0];

    switch (request.action) {
      case "getDefaultFieldsValues":
        chrome.scripting.executeScript(
          {
            target: { tabId: actualTab.id },
            func: getDefaultFieldsValues,
          },
          ([fieldsValues]) => {
            sendResponse(fieldsValues.result);
          }
        );
        break;
      case "formPrivateServerStandaloneSubmission":
        const { profileID, planetID, lang: langStandalone } = request.data;
        chrome.scripting.executeScript({
          target: { tabId: actualTab.id },
          func: openStandalone,
          args: [profileID, planetID, langStandalone],
        });
        break;
      case "formPrivateServerWebglSubmission":
        const { lang: langWebgl } = request.data;
        chrome.scripting.executeScript({
          target: { tabId: actualTab.id },
          func: openWebgl,
          args: [langWebgl],
        });
        break;
      default:
        console.error("Ação não reconhecida:", request.action);
    }
  });

  return true;
});
