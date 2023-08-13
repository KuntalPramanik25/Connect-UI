let load = document.querySelector(".loading");

setTimeout(() =>{
    load.classList.add('hide-load');
},2500)

let settingsMenu = document.querySelector(".settings-menu")

function settingsMenuToggle()
{
    settingsMenu.classList.toggle("settings-menu-height")
}


let darkButton = document.getElementById("dark-button")

darkButton.onclick = function(){
    darkButton.classList.toggle("dark-button-on")
    document.body.classList.toggle("dark-theme")

    if (localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark")
    }
    else
    {
        localStorage.setItem("theme", "light")
    }
}


if (localStorage.getItem("theme") == "light")
{
    darkButton.classList.remove("dark-button-on")
    document.body.classList.remove("dark-theme")
}
else if (localStorage.getItem("theme") == "dark")
{
    darkButton.classList.add("dark-button-on")
    document.body.classList.add("dark-theme")
}
else
{
    localStorage.setItem("theme", "light")
}