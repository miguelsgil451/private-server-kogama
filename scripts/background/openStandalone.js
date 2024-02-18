export default async function openStandalone(profileID, planetID, lang) {
  try {
    console.log("Gerando URL...");

    console.log(`API URL: https://kogama.com.br/locator/session/?objectID=${planetID}&profileID=${profileID}&lang=${lang}&type=local-play`);

    const response = await fetch(`https://kogama.com.br/locator/session/?objectID=${planetID}&profileID=${profileID}&lang=${lang}&type=local-play`);

    if (!response.ok) {
      throw new Error("Ocorreu um erro ao acessar as informações: " + response.statusText);
    }

    const data = await response.json();
    const { id, sessionToken } = data;

    const newUrl = `https://kogama.com.br/locator/session/${id}/?token=${encodeURIComponent(sessionToken)}&plugin=STANDALONE&ssl=1&unityPacket=1`;

    const base64Url = btoa(newUrl);
    const finalUrl = `kogama2-br:kogamaPackage:${base64Url}`;

    console.log("URL GERADA!");
    console.log(finalUrl);

    location.href = finalUrl;
  } catch (error) {
    console.error("Houve um problema com a operação de busca:", error);
    throw error;
  }
}
