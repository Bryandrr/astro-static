function openNewTab(url, unblock) {
    // Ensure URL has proper protocol
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
        url = 'https://' + url;
    }

    // Apply custom URL encoding if unblock is true
    if (unblock) {
        url = window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(url);
    }

    // Open a new tab
    let newTab = window.open('about:blank', '_blank');

    if (!newTab) {
        // Handle popup blocker
        window.alert('Popups Blocked...\nPlease allow popups!');
    } else {
        // Configure the new tab
        const { document, location } = newTab;
        document.body.style.margin = '0';
        document.body.style.height = '100vh';
        document.title = 'Home';

        // Create and configure an iframe
        let iframe = document.createElement('iframe');
        iframe.style.cssText = 'border: none; width: 100vw; height: 100vh; margin: 0; overflow: hidden;';
        iframe.referrerPolicy = 'no-referrer';
        iframe.allowFullscreen = true;
        iframe.src = url;
        iframe.id = 'PlayIframe';

        // Set favicon for the new tab
        let favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = '/Images/GoogleClassroom.png';

        // Append iframe and favicon to the new tab
        document.head.appendChild(favicon);
        document.body.appendChild(iframe);
    }

    return newTab;
}
