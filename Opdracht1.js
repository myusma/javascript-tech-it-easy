//Opdracht 1 - Array Methoden

//opdracht 1a :Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.


let types = [];

for (let i = 0; i < inventory.length; i++) {
    types.push(inventory[i].type)
}

console.log(types)

//Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const soldOut = inventory.filter((inv) =>{
    return inv.originalStock - inv.sold === 0;
});

console.log(soldOut);



//Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.


const ambiLights = inventory.filter((inventory) => {
    return inventory.options.ambiLight === true;


});

console.log(ambiLights);



//Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.


function price (pr){
    pr.sort((a,b)  => {
        return a.price - b.price;
    });
    console.log(pr)
}
price(inventory)

