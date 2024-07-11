let total = 3;
let boxPKMN = "";
let premierPKMN = 1;

let boutonKanto = document.getElementById('kantoHover');
boutonKanto.addEventListener('click', () => {
    console.log("click bouton kanto")
    document.querySelector('h1').innerText = 'Kanto\'s Regional Pokedex';
    document.querySelector('footer').setAttribute("class", "FireRed");
    total = 151;
    premierPKMN = 1;
    contactApi('firered','96px', 'translateX(-10px)');
});
let boutonJohto = document.getElementById('johtoHover');
boutonJohto.addEventListener('click', () => {
    console.log("click bouton johto");
    document.querySelector('h1').innerText = 'Johto\'s Regional Pokedex';
    document.querySelector('footer').setAttribute("class", "Heartgold");
    total = 251;
    premierPKMN = 152;
    contactApi('heartgold','80px', 'translateY(-5px)');
w});

const contactApi = async (gen, taille, translate) => {
    document.getElementById("pokemons").innerHTML = ""; 
    document.getElementById('placeholder').style.display = 'block';

    for (let offset = premierPKMN; offset <= total; offset++) {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+offset);
        console.log(data);
        const dataTransformed = await data.json();
        console.log(dataTransformed);

        let nomType = "";
        let lienDescription = "";
        let pkmnDescription = "";

        nomType = "";
        console.log(dataTransformed.name);

        lienDescription = dataTransformed.species.url;
        const dataPkmn = await fetch(lienDescription);
        const dataPkmnTransformed = await dataPkmn.json();
        // console.log(dataPkmnTransformed);
        pkmnDescription = dataPkmnTransformed.flavor_text_entries[8].flavor_text;

        for (const pkmnType of dataTransformed.types) {
            nomType += '<img src="./images/' + pkmnType.type.name + '.png"> ';
        }
        if(gen == 'firered'){
            boxPKMN = '<div class="pokemon"><p class="pkmnInfos"><img src="./images/3869.png"> ' + dataTransformed.name + '<br>' + nomType + '</p>' + '<img src="' + dataTransformed.sprites.front_default + '" class="sprite"><div class="spriteBackground"></div><p class="description">' + pkmnDescription + '</p></div>';
        } else if(gen == 'heartgold'){
            boxPKMN = '<div class="pokemon"><p class="pkmnInfos"><img src="./images/3869.png"> ' + dataTransformed.name + '<br>' + nomType + '</p>' + '<img src="' + dataTransformed.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default + '" class="sprite"><div class="spriteBackground"></div><p class="description">' + pkmnDescription + '</p></div>';
        }
        
        document.getElementById("pokemons").innerHTML += boxPKMN;   
        // console.log()
    }
    document.getElementById('placeholder').style.display = 'none';
    let sprites = document.getElementsByClassName("sprite");
    for (let sprite of sprites) {
        sprite.style.width = taille;
        sprite.style.height = taille;
        sprite.style.transform = translate;
    }
    let spritesBackgrounds = document.getElementsByClassName("spriteBackground");
    for (let spriteBackground of spritesBackgrounds) {
        spriteBackground.style.width = taille;
        spriteBackground.style.height = taille;
        spriteBackground.style.transform = translate;
    }
}


    


    
