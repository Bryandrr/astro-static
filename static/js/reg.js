  function activate(value) {
  let iframe = document.querySelector("#iframeId");

  window.navigator.serviceWorker
    .register("/static/sw.js", {
       sessionStorage.setItem("ur", __uv$config.prefix + __uv$config.encodeUrl(url))
      scope: __uv$config.prefix,
    })
    .then(() => {
      let url = value.trim();
      if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
      else if (!(url.startsWith("https://") || url.startsWith("http://")))
        url = "https://" + url;

      // Pass the encoded url to the second page
         sessionStorage.setItem("ur", __uv$config.prefix + __uv$config.encodeUrl(url))
      location.href = "/static/go.html";
    });
}

function isUrl(str = "") {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}
