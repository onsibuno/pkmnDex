let total = 151;
let boxPKMN = "";
let premierPKMN = 1;
let spriteGen = "";

let boutonKanto = document.getElementById('kantoBtn');


/* if (heartgold = true) {
    document.querySelector('h1').innerText = 'Johto's Regional Pokédex';
    document.getElementById('footer').setAttribute("class", "Heartgold");
    spriteGen = "dataTransformed.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default";
    document.querySelector('img').style.width = '80px';
    document.querySelector('img').style.height = '80px';
    total = 251;
    premierPKMN = 152;

} else {
    document.querySelector('h1').innerText = 'Kanto's Regional Pokédex';
    spriteGen = dataTransformed.sprites.front_default;
    total = 151;
    premierPKMN = 1;

} */



const contactApi = async (clear = false) => {
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

        boxPKMN = '<div class="pokemon"><p class="pkmnInfos"><img src="./images/3869.png"> ' + dataTransformed.name + '<br>' + nomType + '</p>' + '<img src=' + dataTransformed.sprites.front_default + ' class="sprite"><div class="spriteBackground"></div><p class="description">' + pkmnDescription + '</p></div>';
        
        document.getElementById("pokemons").innerHTML += boxPKMN;   
        // console.log()
    }
    document.getElementById('placeholder').style.display = 'none';
    
}


    contactApi();


    
