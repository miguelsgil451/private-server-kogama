import openStandalone from './scripts/background/openStandalone.js';

console.log("PRIVATE SERVER KOGAMA EXTENSION");

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const [actualTab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  console.log(request)
  switch(request.action){
    case "formPrivateServerStandaloneSubmission":
      const {profileID, planetID, lang: langStandalone} = request.data;
      chrome.scripting.executeScript({
        target: {
          tabId: actualTab.id
        },
        func: openStandalone,
        args: [
          profileID,
          planetID,
          langStandalone
        ]
      });
      break;
  }
});
