// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let soldTvs = 0

for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold

}
console.log(soldTvs);


// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const totalSoldGreen = document.getElementById('total-sold');
totalSoldGreen.textContent = soldTvs;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let purchased = 0

for (let i = 0; i < inventory.length; i++) {
    purchased = inventory[i].originalStock

}

console.log(purchased);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const bought = document.getElementById('purchased');
bought.textContent = purchased;

// Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

let tvLeft = 0
for (let i = 0; i < inventory.length; i++) {
    tvLeft = soldTvs - purchased

}
console.log(tvLeft);

const leftTv = document.getElementById('left');
leftTv.textContent = tvLeft;