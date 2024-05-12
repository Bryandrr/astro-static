const form = document.getElementsByClassName('uv-form')[0];
const input = document.getElementsByClassName('form__input')[0];
var section = document.getElementById('section');

if (form && input) {
    form.addEventListener('submit', async event => {
        event.preventDefault();
        window.navigator.serviceWorker.register('./sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            let url = input.value.trim();
            if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
            else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

            window.alert('If it does not work the first time click again!')
            openNewTab(window.location.origin.concat(__uv$config.prefix + __uv$config.encodeUrl(url)));
        });
    });
}

function isUrl(val = '') {
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
