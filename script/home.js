import {
    data
} from './data.js';
export function home() {
    document.body.style.backgroundColor = "#24262c";
    let coming = document.getElementById("coming");
    coming.innerHTML =
        `<h1 class="subhome">Up Coming Game</h1>`;
    let comingItem = ``;
    data.forEach(game => {
        if (game.voted == "none") comingItem += `
            <div class="item carditem">
                <div>
                    <img class="imgitem" src="${game.cover}" alt="${game.alt}">
                    <h5 class="gamehome">${game.title}</h5>
                </div>
                <div class="clear-right"></div>
            </div>`;
    });
    coming.innerHTML += `
            <div class="groupitem">
                ${comingItem}
            </div>`;
    let best = document.getElementById("best");
    best.innerHTML =
        `<h1 class="subhome">Top Game Voted</h1>`;
    let n = 1;
    let star, unstar, item = ``;
    data.forEach(game => {
        star = ``;
        unstar = ``;
        if (game.voted == "yes") {
            for (let i = 0; i < game.star; i++) {
                star += ` <img src="./img/star.png" alt="star">`;
            };
            if (game.star < 5) {
                for (let i = 0; i < 5 - game.star; i++) {
                    unstar += `<img src="./img/unstar.png" alt="star">`;
                };
            };
            item += `
                <div class="item carditem">
                        <div>
                            <img class="imgitem" src="${game.cover}" alt="${game.alt}">
                            <h1 class="gamehome"> ${game.title} </h1>
                            <span class="rank">#${n}</span>
                            <div class="star">
                                ${star}
                                ${unstar}
                            </div>
                        </div>
                </div>`;
            n++;
        }
    });
    best.innerHTML += `
        <div class = "groupitem" style = "background: linear-gradient(#24262c, blue, #24262c);">
            ${item}
        </div>`;
}