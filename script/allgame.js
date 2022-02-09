import {
    data
} from './data.js';
export function allgame() {
    document.body.style.backgroundColor = "#edf2f7";
    let list = document.querySelector(".allgame");
    list.innerHTML = ``;
    let platform, genre;
    data.forEach(game => {
        platform = ``;
        genre = ``;
        game.platform.forEach(plat => {
            platform += `<p class="platform">${plat}</p>`;
        });
        game.genre.forEach(gen => {
            genre += `<p class="genre">${gen}</p>`
        })
        list.innerHTML += `
        <div class = "cardlist">
        <img class="cover-game" src="${game.cover}" alt="${game.alt}">
        <div class="detail-game">
            <div>
                <h1 class="title-game">${game.title}</h1>
            </div>
            <span class="dev-game">Developer: ${game.Developer} <br>
                Publisher: ${game.Publisher}  <br>
                Release: ${game.release}</span>
            <div class="subdetail">
                <p class="label">
                    Genre:
                </p>
                <div class="sublabel">
                    ${genre}
                </div>
            </div>
            <div class="subdetail">
                <p class="label">
                    Platform:
                </p>
                <div class="sublabel">
                    ${platform}
                </div>
            </div>
        </div>
    </div>
        `;
    });
}