document.getElementById('change-style-btn').addEventListener('click', function() {
    var link = document.getElementById('theme-stylesheet');
    if (link.getAttribute('href') === 'style.css') {
        link.setAttribute('href', 'style2.css');
    } else {
        link.setAttribute('href', 'style.css');
    }
});
