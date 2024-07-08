let total = 151;
let text = "";

const contactApi = async () => {
    for (let offset = 1; offset <= total; offset++) {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/"+offset);
        console.log(data);
        const dataTransformed = await data.json();
        console.log(dataTransformed);

        let nomType = "";
        let lienDescription = "";
        let pkmnDescription = "";

        // for (const element of dataTransformed.results) {
            nomType = "";
            console.log(dataTransformed.name);

            lienDescription = dataTransformed.species.url;
            const dataPkmn = await fetch(lienDescription);
            const dataPkmnTransformed = await dataPkmn.json();
            // console.log(dataPkmnTransformed);
            pkmnDescription = dataPkmnTransformed.flavor_text_entries[3].flavor_text;

            for (const pkmnType of dataTransformed.types) {
                nomType += '<img src="./images/' + pkmnType.type.name + '.png"> ';
            }
            text = '<div class="pokemon"><p><img src="./images/3869.png"> ' + dataTransformed.name + '<br>' + nomType + '</p>' + '<img src=' + dataTransformed.sprites.front_default + ' class="sprite"><p class="description">' + pkmnDescription + '</p></div>';
        // }
        document.getElementById("liste").innerHTML += text;
    }
}


    contactApi();

