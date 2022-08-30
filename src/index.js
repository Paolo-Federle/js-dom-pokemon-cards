//You can start simple and just render a single 
//pokemon card from the first element


const cards = document.querySelector(".cards");

for (let i = 0; data.length; i++) {
    const card = document.createElement("li")
    card.setAttribute("class", "card")
    card.style.listStyle= "none"
    // card.setAttribute("style", "list-style-type: none;")
    // card.cards.toggle("list-style-type: none")

    const pkmName = document.createElement("h2")
    pkmName.setAttribute("class", "card--title")
    pkmName.innerText = data[i].name[0].toUpperCase() + data[i].name.slice(1);

    const pkmImg = document.createElement("img")
    pkmImg.setAttribute("class", "card--img")
    pkmImg.setAttribute("width", "256")
    pkmImg.setAttribute("src", data[i].sprites.other["official-artwork"].front_default)
    document.body.append(pkmImg)

    const pkmText = document.createElement("ul")
    pkmText.setAttribute("class", "card--text")
    pkmText.style.listStyle= "none"

    // pkmText.setAttribute("style", "list-style-type: none;")

    for (let j = 0; j < 6; j++) {
        const stats = document.createElement("li");
        stats.innerText = data[i].stats[j].stat.name.toUpperCase() + ": " + data[i].stats[j].base_stat;
        pkmText.append(stats)
    }

    card.append(pkmName, pkmImg, pkmText)

    cards.append(card);
}


