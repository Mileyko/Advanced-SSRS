function addScript(url, callback) {
    var head = document.getElementsByTagName('head')[0];
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onreadystatechange = callback;
    script.onload = callback;

    head.appendChild(script);
}

function addLink(url, callback) {
    var head = document.getElementsByTagName('head')[0];

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    link.onreadystatechange = callback;
    link.onload = callback;

    head.appendChild(link);
}

addScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', function () {
    addScript('http://github.hubspot.com/vex/js/vex.js', function () {
        addScript('http://github.hubspot.com/vex/js/vex.dialog.js', function () {
            addLink('http://github.hubspot.com/vex/css/vex.css', function () {
                addLink('http://github.hubspot.com/vex/css/vex-theme-default.css', function () {
                    vex.defaultOptions.className = 'vex-theme-default'
                    vex.dialog.alert('Thanks for checking out Vex!');
                })
            })
        });
    });
});

