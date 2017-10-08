/* ----- Menu ----- */

function openMenu() {
    document.getElementById("menu").style.width = "100%";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0%";
}


/* ----- BAck to top Btn ----- */

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}