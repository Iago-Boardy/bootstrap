document.addEventListener("DOMContentLoaded", function () {
    function createAnimeCard(title, imageUrl, description) {
        const card = document.createElement("div");
        card.classList.add("anime-card");

        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = title;
        image.style.width = "100%";
        image.style.height = "auto";

        const animeTitle = document.createElement("h2");
        animeTitle.textContent = title;


        const animeDescription = document.createElement("p");
        animeDescription.textContent = description;

        card.appendChild(image);
        card.appendChild(animeTitle);
        card.appendChild(animeDescription);

        return card;
    }

    function populateAnimeList(animeData) {
        const animeList = document.querySelector(".anime-list");

        animeData.forEach((anime) => {
            const animeCard = createAnimeCard(anime.title, anime.imageUrl, anime.description);
            animeList.appendChild(animeCard);
        });
    }
const animeData = [
        {
            title: "Prefeito Lewis",
            imageUrl: "img/Lewis.png",
            description: "Prefeito de Pelican Town.",
        },
        {
            title: "Haley",
            imageUrl: "img/Haley.png",
            description: "Modelo fotográfica com afinidade por moda.",
        },
        {
            title: "Pierre",
            imageUrl: "img/Pierre.png",
            description: "Dono da mercearia local.",
        },
        {
            title: "Sebastian",
            imageUrl: "img/Sebastian.png",
            description: "Artista introspectivo e apaixonado por motocicletas.",
        },
        {
            title: "Pam",
            imageUrl: "img/Pam.png",
            description: "Motorista de ônibus mal-humorada e amiga de Penny,",
        },
        {
            title: "Sam",
            imageUrl: "img/Sam.png",
            description: "Músico talentoso e amante da pizza.",
        },
        {
            title: "Abigail",
            imageUrl: "img/Abigail.png",
            description: "Aventureira amante dos minerais e da música.",
        },
        {
            title: "Leah",
            imageUrl: "img/Leah.png",
            description: "Artista que ama a natureza e a comida orgânica.",
        },
    ];

    populateAnimeList(animeData);
    });

    