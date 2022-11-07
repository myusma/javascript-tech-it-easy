// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.

function tvInfo(inv){
            return inv.brand  + ' ' + inv.type + '-' + inv.name
}

console.log(tvInfo(inventory[0]));


// Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.

function tvPrice (inv){

        return '€' + inv.price + ',-'
}

console.log(tvPrice(inventory[0]));

// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
// 32 inch (81 cm)


function tvScreenSizes(tv){
    let screen = '';
    for(let i = 0; i < tv.availableSizes.length; i++){
        const inches = tv.availableSizes[i];
        const centimeters = inches * 2.54;
        screen = screen + (inches + " inches (" + Math.round(centimeters) + " cm)");
    }
    return screen
}

console.log(tvScreenSizes(inventory[0]));


// Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)


const total = document.getElementById('container');
total.innerHTML = `
<h3> ${tvInfo(inventory[0])} </h3>
<h3> ${tvPrice(inventory[0])}</h3>
<h3> ${tvScreenSizes(inventory[0])}</h3>
`



// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

function alltvinfo(allinfo){
    const tableField = document.getElementById('all-tv-information');
    allinfo.map((invent)=>{
        return tableField.innerHTML += `
    <tr>
        <td id="brand-type-name">${tvInfo(invent)}</td>
        <td id="price">${ tvPrice(invent)}</td>
        <td id="screen-size">${tvScreenSizes(invent)}</td>

    </tr>

    `
    });
}
// alltvinfo(inventory)




// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!


function sortPrice (){
    price(inventory)
    alltvinfo(inventory)
    console.log(inventory)
}



function sortAmbilights(){
    const ambiLights = inventory.filter((inventory) => {
        return inventory.options.ambiLight === true;

    });
    console.log(ambiLights)
    alltvinfo(ambiLights)
}


function sortSoldOut(){
    const soldOut = inventory.filter((inv) =>{
        return inv.originalStock - inv.sold === 0;
    });
    alltvinfo(soldOut)
    console.log(soldOut)
}



const sortPriceButton = document.getElementById("sort-price");
sortPriceButton.addEventListener("click", sortPrice);

const ambilightButton = document.getElementById("ambilight");
ambilightButton.addEventListener("click", sortAmbilights);
//
const soldOutButton = document.getElementById("sold-out");
soldOutButton.addEventListener("click", sortSoldOut);

