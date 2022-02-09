import {
    data
} from './data.js';
export function categories() {
    document.body.style.backgroundColor = "#edf2f7";
    let choose;
    document.querySelectorAll(".chooserlist a").forEach(function (item) {
        item.addEventListener("click", function (event) {
            choose = event.target.textContent;
            show(choose);
        })
    })

    function show(choose) {
        let list = document.querySelector(".show");
        list.innerHTML = ``;
        let platform, genre;
        let showitem;
        data.forEach(game => {
            showitem = false;
            game.platform.forEach(kat1 => {
                if (kat1 == choose) {
                    showitem = true;
                }
            });
            game.genre.forEach(kat2 => {
                if (kat2 == choose) {
                    showitem = true;
                }
            });
            if (showitem) {
                platform = ``;
                genre = ``;
                game.platform.forEach(plat => {
                    platform += `<p class="platform">${plat}</p>`;
                });
                game.genre.forEach(gen => {
                    genre += `<p class="genre">${gen}</p>`
                });
                list.innerHTML += `
                <div class = "cardlist">
                    <img class="cover-game" src="${game.cover}" alt="${game.alt}">
                    <div class="detail-game">
                        <div>
                            <h1 class="title-game">${game.title}</h1>
                        </div>
                        <span class="dev-game">Developer: ${game.Developer} <br>
                            Publisher: ${game.Publisher} <br>
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
            }
        });
    }
}