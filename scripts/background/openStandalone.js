
/**
 * @author {eminent}
 */ 

export default function openStandalone(profileID, planetID, lang) {
  console.log("Gerando URL...");

  return fetch(
    `https://kogama.com.br/locator/session/?objectID=${planetID}&profileID=${profileID}&lang=${lang}&type=local-play`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Ocorreu um erro ao acessar as informações: " + response.statusText
        );
      }
      return response.json();
    })
    .then((data) => {
      const { id, sessionToken } = data;

      const newUrl = `https://kogama.com.br/locator/session/${id}/?token=${encodeURIComponent(
        sessionToken
      )}&plugin=STANDALONE&ssl=1&unityPacket=1`;

      const base64Url = btoa(newUrl);

      const finalUrl = `kogama2-br:kogamaPackage:${base64Url}`;

      console.log("URL GERADA!");

      console.log(finalUrl);

      location.href = finalUrl;
    })
    .catch((error) => {
      console.error("Houve um problema com a operação de busca:", error);
      throw error;
    });
}