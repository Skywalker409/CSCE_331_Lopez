function ChangeTheme(){
    
        var link = document.getElementById('theme-stylesheet');
        if (link.getAttribute('href') === 'style.css') {
            link.setAttribute('href', 'style2.css');
            localStorage.setItem("StyleChosen", "style2.css")
        } else {
            localStorage.setItem("StyleChosen", "style.css")
            link.setAttribute('href', 'style.css');
        }
    
}
function FindTheme(){
    document.getElementById("theme-stylesheet").setAttribute("href" , localStorage.getItem("StyleChosen"))
}

