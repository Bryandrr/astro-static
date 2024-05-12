const form = document.getElementsByClassName('uv-form')[0];
const input = document.getElementsByClassName('uv-address')[0];

if (form && input) {
    let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
    openNewTab(window.location.origin.concat(__uv$config.prefix + __uv$config.encodeUrl(url)));
}
