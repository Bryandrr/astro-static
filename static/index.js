const form = = document.getElementById("uv-form");
const uvaddress = = document.getElementById("uv-address");

if (form && input) {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        window.alert('If it does not work the first time click again!')
        openNewTab(window.location.origin.concat(__uv$config.prefix + __uv$config.encodeUrl(url)));
    });
}}
