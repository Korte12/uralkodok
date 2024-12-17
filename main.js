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


const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = headerarray[0].elso; //Megadom hogy a headerarray hanyadik tömbjéből melyik elem legyen
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = headerarray[0].masodik;//Megadom hogy a headerarray hanyadik tömbjéből melyik elem legyen
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = headerarray[0].harmadik;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez

//

const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz
const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = array[0].nev;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
cell1_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát
const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = array[0].esemeny1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát
const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = array[0].evszam1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát

const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz
const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = array[0].esemeny2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát
const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = array[0].evszam2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát

//

const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz
const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = array[1].nev;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát
const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = array[1].esemeny1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát
const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = array[1].evszam1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát

//

const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz
const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = array[2].nev;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát
cell4_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = array[2].esemeny1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát
const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = array[2].evszam1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát

const row5 = document.createElement('tr');//Létrehozom az ötödik sort
tbody.appendChild(row5);// Hozzá appendelem a tbody-hoz
const cell5_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_1.innerHTML = array[2].esemeny2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row5.appendChild(cell5_1);//Hozzá appendelem a sorhoz a cellát
const cell5_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_2.innerHTML = array[2].evszam2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row5.appendChild(cell5_2);//Hozzá appendelem a sorhoz a cellát

//

const row6 = document.createElement('tr');//Létrehozom hatodik sort
tbody.appendChild(row6);// Hozzá appendelem a tbody-hoz
const cell6_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_1.innerHTML = array[3].nev;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
cell6_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row6.appendChild(cell6_1);//Hozzá appendelem a sorhoz a cellát
const cell6_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_2.innerHTML = array[3].esemeny1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row6.appendChild(cell6_2);//Hozzá appendelem a sorhoz a cellát
const cell6_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_3.innerHTML = array[3].evszam1;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row6.appendChild(cell6_3);//Hozzá appendelem a sorhoz a cellát

const row7 = document.createElement('tr');//Létrehozom a hetedik sort
tbody.appendChild(row7);// Hozzá appendelem a tbody-hoz
const cell7_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_1.innerHTML = array[3].esemeny2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row7.appendChild(cell7_1);//Hozzá appendelem a sorhoz a cellát
const cell7_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_2.innerHTML = array[3].evszam2;//Megadom hogy az array hanyadik tömbjéből melyik elem legyen
row7.appendChild(cell7_2);//Hozzá appendelem a sorhoz a cellát

//