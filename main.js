const headerarray = [ // A tömb létehozása
   { // A tömb első elemét létrehozom
    elso: "Uralkodó", //Értékadás
    masodik: "Esemény",//Értékadás
    harmadik : "Évszám"//Értékadás
   }
];

const array = [// A tömb létehozása
    {// A tömb első elemét létrehozom
        nev : "I. István",//Értékadás
        esemeny1 : "Koronázás",//Értékadás
        esemeny2 : "Pannonhalmi apátság megalapítása",//Értékadás
        evszam1 : "1000",//Értékadás
        evszam2 : "1001"//Értékadás
    },
    {// A tömb második elemét létrehozom
        nev : "IV. Béla",//Értékadás
        esemeny1 : "tatárjárás",//Értékadás
        evszam1 : "1241-1242"//Értékadás
    },
    {// A tömb harmadik elemét létrehozom
        nev : "Mátyás király",//Értékadás
        esemeny1 : "Bécs elfoglalása",//Értékadás
        esemeny2 : "Kenyérmezei csata",//Értékadás
        evszam1 : "1485",//Értékadás
        evszam2 : "1479"//Értékadás
    },
    {// A tömb negyedik elemét létrehozom
        nev : "II. Rákóczi Ferenc",//Értékadás
        esemeny1 : "A szabadságharc kezdete",//Értékadás
        esemeny2 : "A szabadságharc vége",//Értékadás
        evszam1 : "1703",//Értékadás
        evszam2 : "1711"//Értékadás
    }
];


const table = document.createElement('table'); // Létrehozom a table-t
document.body.appendChild(table); // Hozzá appendelem a body-hoz

const thead = document.createElement('thead'); // Létrehozom a thead-et
table.appendChild(thead); // Hozzá appendelem a table-hez

const tr = document.createElement('tr'); // Létrehozom a tr-t
thead.appendChild(tr); // Hozzá appendelem a thead-hez

// Fejléc kitöltése
for (let element in headerarray[0]) {//Elkezdem a for ciklust, értéketadok
  const th = document.createElement('th'); // Létrehozom a th-t
  th.innerHTML = headerarray[0][element]; // Megadom az értéket a headerarray-ből
  tr.appendChild(th); // Hozzá appendelem a sorhoz
}

const tbody = document.createElement('tbody'); // Létrehozom a tbody-t
table.appendChild(tbody); // Hozzá appendelem a table-hez

// Sorok kitöltése
for (let i = 0; i < array.length; i++) {
  const row1 = document.createElement('tr'); // Első sor az adott névhez
  tbody.appendChild(row1); // Hozzá appendelem a tbody-hoz

  const cell1 = document.createElement('td'); // Név cella
  cell1.innerHTML = array[i].nev;//Megadom hogy mi legyen a cella értéke
  cell1.rowSpan = 2; // Két sort fed le
  row1.appendChild(cell1); // Hozzá appendelem a sorhoz

  const cell2 = document.createElement('td'); // Első esemény cella
  cell2.innerHTML = array[i].esemeny1;//Megadom hogy mi legyen a cella értéke
  row1.appendChild(cell2);// Hozzá appendelem a sorhoz

  const cell3 = document.createElement('td'); // Első évszám cella
  cell3.innerHTML = array[i].evszam1;//Megadom hogy mi legyen a cella értéke
  row1.appendChild(cell3);// Hozzá appendelem a sorhoz

  const row2 = document.createElement('tr'); // Második sor az eseményhez
  tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz

  const cell4 = document.createElement('td'); // Második esemény cella
  cell4.innerHTML = array[i].esemeny2;//Megadom hogy mi legyen a cella értéke
  row2.appendChild(cell4);// Hozzá appendelem a sorhoz

  const cell5 = document.createElement('td'); // Második évszám cella
  cell5.innerHTML = array[i].evszam2;//Megadom hogy mi legyen a cella értéke
  row2.appendChild(cell5);// Hozzá appendelem a sorhoz
}

//