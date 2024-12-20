const array = [// A tömb létehozása
    {// A tömb első elemét létrehozom
        uralkodo_nev : "I. István",//Értékadás
        esemeny1 : "Koronázás",//Értékadás
        esemeny2 : "Pannonhalmi apátság megalapítása",//Értékadás
        evszam1 : "1000",//Értékadás
        evszam2 : "1001"//Értékadás
    },
    {// A tömb második elemét létrehozom
        uralkodo_nev : "IV. Béla",//Értékadás
        esemeny1 : "tatárjárás",//Értékadás
        evszam1 : "1241-1242"//Értékadás
    },
    {// A tömb harmadik elemét létrehozom
        uralkodo_nev : "Mátyás király",//Értékadás
        esemeny1 : "Bécs elfoglalása",//Értékadás
        esemeny2 : "Kenyérmezei csata",//Értékadás
        evszam1 : "1485",//Értékadás
        evszam2 : "1479"//Értékadás
    },
    {// A tömb negyedik elemét létrehozom
        uralkodo_nev : "II. Rákóczi Ferenc",//Értékadás
        esemeny1 : "A szabadságharc kezdete",//Értékadás
        esemeny2 : "A szabadságharc vége",//Értékadás
        evszam1 : "1703",//Értékadás
        evszam2 : "1711"//Értékadás
    }
];


const table = document.createElement('table'); //Létrehozok egy table elemet ami a táblázatom lesz
document.body.appendChild(table); //Hozzá appendelem a body-hoz

const thead = document.createElement('thead'); //Létrehozok egy thead elemet
table.appendChild(thead);//Hozzá appendelem a táblázathoz

const tr = document.createElement('tr');//Létrehozok egy sor elemet
thead.appendChild(tr);//Hozzá appendelem a fej részhez

const tbody = document.createElement('tbody');//Létrehozok egy tbody elemet
table.appendChild(tbody)//Hozzá appendelem a table-höz

const uralkodo_nev = document.createElement('th')//Létrehozok egy th elemet
uralkodo_nev.innerHTML = "Uralkodo" //Megadom az értékét
tr.appendChild(uralkodo_nev);//Hozzá appendelem a sorhoz

const esemeny = document.createElement('th')//Létrehozok egy th elemet
esemeny.innerHTML = "Esemeny"//Megadom az értékét
tr.appendChild(esemeny)//Hozzá appendelem a sorhoz

const evszam = document.createElement('th');//Létrehozok egy th elemet
evszam.innerHTML = "Evszam"//Megadom az értékét
tr.appendChild(evszam)//Hozzá appendelem a sorhoz

render();//Meghivom a render függvényt

const form = document.getElementById("form") //Lekérem a html form id-ját

form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    const uralkodo_nev = document.getElementById("uralkodo_nev")//Lekérem a html form id-ját
    const esemeny1 = document.getElementById("esemeny1")//Lekérem a html form id-ját
    const esemeny2 = document.getElementById("esemeny2")//Lekérem a html form id-ját
    const evszam1 = document.getElementById("evszam1")//Lekérem a html form id-ját
    const evszam2 = document.getElementById("evszam2")//Lekérem a html form id-ját

    const uralkodo_nevvalue = uralkodo_nev.value ///Eltárolom egy változóban az értéket
    const esemeny1value = esemeny1.value///Eltárolom egy változóban az értéket
    const esemeny2value = esemeny2.value///Eltárolom egy változóban az értéket
    const evszam1value = evszam1.value///Eltárolom egy változóban az értéket
    const evszam2value = evszam2.value//Eltárolom egy változóban az értéket

    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson

    const new_person = { //Létrehozok egy új elemet
        uralkodo_nev: uralkodo_nevvalue, //Értéket adok
        esemeny1: esemeny1value,//Értéket adok
        esemeny2: esemeny2value,//Értéket adok
        evszam1: evszam1value,//Értéket adok
        evszam2: evszam2value//Értéket adok
    }

    array.push(new_person)//Hozzárakom az arrayhez az új elemet
    table.innerHTML = ''//Üres string-et használok törlődik a táblázat
    render();//Meghivom a render függvényt mégegyszer

})

function render(){//Elkezdem megirni a render függvényt
    const tablebody = tbody;//Létrehozok egy tablebody-t aminek az értéke tbody
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for (element of array) {//Elkezdem a for ciklust. Kiválasztom az array ,,element"-jét
        let row = document.createElement('tr');//Létrehozok egy tr-t

        const uralkodoCell = document.createElement('td'); //Létrehozok egy td-t
        uralkodoCell.innerHTML = element.uralkodo_nev; //Megadom az innerHTML értékét
        uralkodoCell.rowSpan = element.esemeny2 ? 2 : 1; // rowSpan-t vezetek be a megfelelő elrendezés érdekében
        row.appendChild(uralkodoCell);//Hozzá appendelem a sorhoz

        const esemeny1 = document.createElement('td');//Létrehozok egy td-t
        esemeny1.innerHTML = element.esemeny1;//Megadom az innerHTML értékét
        row.appendChild(esemeny1);//Hozzá appendelem a sorhoz

        const evszam1 = document.createElement('td');//Létrehozok egy td-t
        evszam1.innerHTML = element.evszam1;//Megadom az innerHTML értékét
        row.appendChild(evszam1);//Hozzá appendelem a sorhoz

        tablebody.appendChild(row); //Hozzá appendelem a sort

        if (element.esemeny2 && element.evszam2) {//If elágazás létrehozása
            const row1 = document.createElement('tr');//Létrehozok egy tr-t

            const esemeny2 = document.createElement('td');//Létrehozok egy td-t
            esemeny2.innerHTML = element.esemeny2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(esemeny2);//Hozzá appendelem a sorhoz

            const evszam2 = document.createElement('td');//Létrehozok egy td-t
            evszam2.innerHTML = element.evszam2;//Megadom hogy mi legyen a cella értéke
            row1.appendChild(evszam2);//Hozzá appendelem a sorhoz
            tablebody.appendChild(row1); //Hozzá appendelem a tablebody-hoz
        }
    }
}