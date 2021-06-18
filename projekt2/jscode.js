
/** Function which changes size of the website for mobile view */
function responsiveMobile() {
    var el = document.getElementById("responsive");
    if (el) {
        el.style.width = "480px";
    }
    // to adjust fixed size navbar
    document.getElementById("navigation").style.width = "480px";   

    return false;
}

/** Function which changes size of the website for computer view */
function responsivePC() {
    var el = document.getElementById("responsive");
    if (el) {
        el.style.width = "auto";
    }
    // to adjust shrinked navbar
    document.getElementById("navigation").style.width = "100%";

    return false;
}

/** To show dropdown menu and control dropdown menu */
function DropDown() {
    document.getElementById("dropdowmenu").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("dropdowmenu");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

/* All three funtions are for local navigation to show or hide content */
function changeContent() {
    var el = document.getElementById("bach")
    if (el) {
        document.getElementById("img_eduv").style.display = "block";
        document.getElementById("title_eduv").style.display = "block";
        document.getElementById("school_eduv").style.display = "block";

        document.getElementById("img_edum").style.display = "none";
        document.getElementById("title_edum").style.display = "none";
        document.getElementById("school_edum").style.display = "none";

        document.getElementById("img_educ").style.display = "none";
        document.getElementById("title_educ").style.display = "none";
        document.getElementById("school_educ").style.display = "none";
    }
}

function changeContent2() {
    var el = document.getElementById("mas")
    if (el) {
        document.getElementById("img_edum").style.display = "block";
        document.getElementById("title_edum").style.display = "block";
        document.getElementById("school_edum").style.display = "block";

        document.getElementById("img_eduv").style.display = "none";
        document.getElementById("title_eduv").style.display = "none";
        document.getElementById("school_eduv").style.display = "none";

        document.getElementById("img_educ").style.display = "none";
        document.getElementById("title_educ").style.display = "none";
        document.getElementById("school_educ").style.display = "none";
    }
}

function changeContent3() {
    var el = document.getElementById("cvu")
    if (el) {
        document.getElementById("img_edum").style.display = "none";
        document.getElementById("title_edum").style.display = "none";
        document.getElementById("school_edum").style.display = "none";

        document.getElementById("img_eduv").style.display = "none";
        document.getElementById("title_eduv").style.display = "none";
        document.getElementById("school_eduv").style.display = "none";

        document.getElementById("img_educ").style.display = "block";
        document.getElementById("title_educ").style.display = "block";
        document.getElementById("school_educ").style.display = "block";
    }
}