import openStandalone from './scripts/background/openStandalone.js';

console.log("PRIVATE SERVER KOGAMA EXTENSION");

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const [actualTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  switch(request.action){
    case "getDefaultFieldsValues":
      chrome.tabs.executeScript(actualTab.id, { file: './scripts/background/getDefaultFieldValues.js' });
      break;
    case "formPrivateServerSubmission":
      const {profileID, planetID, lang} = request.data;
      chrome.tabs.executeScript(actualTab.id, {
        code: `(${openStandalone.toString()})(${profileID}, ${planetID}, '${lang}')`
      });
      break;
  }
});
