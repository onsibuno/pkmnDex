let listePokemon = document.querySelector;

const contactApi = async () => {

    const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
    // console.log(data);
    const dataTransformed = await data.json();
    // console.log(dataTransformed);

    listePokemon.innerText = dataTransformed;

    let text = "";
    let lienImage = "";
    let nomType = "";
    let lienDescription ="";
    let pkmnDescription ="";

    for (const element of dataTransformed.results){
        console.log(element.name);

        lienImage = element.url ;
        const dataImage = await fetch(lienImage);
        // console.log(dataImage);
        const dataImageTransformed = await dataImage.json();
        // console.log(dataImageTransformed);
        // console.log(dataImageTransformed.sprites.back_default);

        lienDescription = dataImageTransformed.species.url;
        const dataPkmn = await fetch(lienDescription);
        const dataPkmnTransformed = await dataPkmn.json();
        // console.log(dataPkmnTransformed);
        pkmnDescription = dataPkmnTransformed.flavor_text_entries[3].flavor_text ;

        for (const pkmnType of dataImageTransformed.types) {
            nomType += '<img src="./images/' + pkmnType.type.name + '.png"> ' ;
        }
        
        text += '<div class="pokemon"><p><img src="./images/3869.png"> ' + element.name +'<br>'+ nomType +'</p>' + '<img src=' + dataImageTransformed.sprites.front_default + ' class="sprite"><p class="description">' + pkmnDescription +  '</p></div>';
        nomType = "";
    }
    document.getElementById("liste").innerHTML = text;
}



contactApi();
