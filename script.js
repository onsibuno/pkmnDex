let total = 151;
let boxPKMN = "";
let premierPKMN = 1;

const contactApi = async () => {
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

        boxPKMN = '<div class="pokemon"><p><img src="./images/3869.png"> ' + dataTransformed.name + '<br>' + nomType + '</p>' + '<img src=' + dataTransformed.sprites.front_default + ' class="sprite"><p class="description">' + pkmnDescription + '</p></div>';
        document.getElementById("liste").innerHTML += boxPKMN;   
        // console.log(dataTransformed.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default)
    }
}


    contactApi();

