
/**
 * 
 * @author {eminent}
 */

export default function openWebgl(lang){
    const langValue = lang;

    const xhrPrototype = XMLHttpRequest.prototype;

    const originalOpenFunction = xhrPrototype.open;

    xhrPrototype.open = () => {
        const url = arguments[1];
        if (url.includes("lang=")) {
            const newUrl = url.replace(/(lang=)[^&]*/, `$1${langValue}`);
            arguments[1] = newUrl;
            console.log("URL alterada para incluir 'lang=" + langValue + "'");
        }

        originalOpenFunction.apply(this, arguments);
    };

    
}