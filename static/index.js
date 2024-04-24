"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

function help() {
    document.getElementById('address').value = __protocoller$config.protocol+__protocoller$config.suffix+__protocoller$config.helpURI;
    test()
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    var minEng = address.value.replace("https://www.google.com/search?q=%s", '')
    console.log('address.value:', address.value);
    console.log('minEng:', minEng);
    if (address.value.includes(__protocoller$config.protocol+__protocoller$config.suffix)) {
        test()
    } else {
        try {
            await registerSW();
        } catch (err) {
            alert("Failed to register service worker.\n"+err.toString()+"|<button onclick=\"location.reload()\">return</button>")
            throw err;
        }

        const url = search(address.value, searchEngine.value);
        sessionStorage.setItem("ur", __uv$config.prefix + __uv$config.encodeUrl(url))
        location.href = "go.html"
    }
});
