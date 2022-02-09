import {
    home
} from './home.js';
import {
    allgame
} from './allgame.js';
import {
    categories
} from './categories.js';

document.addEventListener("DOMContentLoaded", function () {
    // Activate sidebar nav
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();

    function loadNav() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status != 200) return;

                // Muat daftar tautan menu
                document.querySelectorAll(".topnav, .sidenav").forEach(function (elm) {
                    elm.innerHTML = xhttp.responseText;
                });

                // Dafterkan event linstener untuk setiap tautan menu
                document.querySelectorAll(".sidenav a, .topnav a").forEach(function (elm) {
                    elm.addEventListener("click", function (event) {
                        // Tutup sidenav
                        var sidenav = document.querySelector(".sidenav");
                        M.Sidenav.getInstance(sidenav).close();

                        // Meuat konten halamat yang dipanggil
                        page = event.target.getAttribute("href").substr(1);
                        loadPage(page)
                    })
                })

                const logo = document.querySelector("nav>div>a");
                logo.addEventListener("click", function (event) {
                    page = logo.getAttribute("href").substr(1);
                    loadPage(page)
                })
            }
        };
        xhttp.open("GET", "nav.html", true);
        xhttp.send();
    }

    // Load Page cotent
    var page = window.location.hash.substr(1);
    if (page == "") page = "home";
    loadPage(page);

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                var content = document.querySelector(".body-content");
                if (this.status == 200) {
                    content.innerHTML = xhttp.responseText;
                    if (page == "home") {
                        home();
                    } else if (page == "allgame") {
                        allgame();
                    } else if (page == "categories") {
                        categories();
                    } else {
                        document.body.style.backgroundColor = "#edf2f7";
                    }
                } else if (this.status == 404) {
                    content.innerHTML = "<h1>Halaman tidak di temukan.</h1>";
                } else {
                    content.innerHTML = "<h1>Ups... halaman tidak dapat diakses.</h1>";
                }
            }
        }
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }
});