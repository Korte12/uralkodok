const th1Uralkodo = "Uralkodó"//Értékadás
const th2Esemeny = "Esemény"//Értékadás
const th3Evszam = "Évszám"//Értékadás

const uralkodoNev1 = "I. István";//Értékadás
const uralkodoNev2 = "IV. Béla";//Értékadás
const uralkodoNev3 = "Mátyás király";//Értékadás
const uralkodoNev4 = "II. Rákóczi Ferenc";//Értékadás
//

const esemeny1_1 = "Koronázás";//Értékadás
const esemeny1_2 = "Pannonhalmi apátság megalapítása";//Értékadás

const esemeny2_1 = "Tatarjárás";//Értékadás

const esemeny3_1 = "Bécs elfoglalása";//Értékadás
const esemeny3_2 = "Kenyérmezei csata";//Értékadás


const esemeny4_1 = "A szabadságharc kezdete";//Értékadás
const esemeny4_2 = "A szabadságharc vége";//Értékadás
//

const evszam1_1 = "1000";//Értékadás
const evszam1_2 = "1001";//Értékadás

const evszam2_1 = "1241-1242";//Értékadás

const evszam3_1 = "1485";//Értékadás
const evszam3_2 = "1479";//Értékadás


const evszam4_1 = "1703";//Értékadás
const evszam4_2 = "1711";//Értékadás




const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = th1Uralkodo; //Megadom az értékét
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = th2Esemeny;//Megadom az értékét
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = th3Evszam;//Megadom az értékét
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez

const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz
const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = uralkodoNev1;//Megadom az értékét
cell1_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát
const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = esemeny1_1;//Megadom az értékét
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát
const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = evszam1_1;//Megadom az értékét
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát

const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz
const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = esemeny1_2;//Megadom az értékét
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát
const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = evszam1_2;//Megadom az értékét
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát

const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz
const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = uralkodoNev2;//Megadom az értékét
row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát
const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = esemeny2_1;//Megadom az értékét
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát
const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = evszam2_1;//Megadom az értékét
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát

const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz
const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = uralkodoNev3;//Megadom az értékét
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát
cell4_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = esemeny3_1;//Megadom az értékét
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát
const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = evszam3_1;//Megadom az értékét
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát

const row5 = document.createElement('tr');//Létrehozom az ötödik sort
tbody.appendChild(row5);// Hozzá appendelem a tbody-hoz
const cell5_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_1.innerHTML = esemeny3_2;//Megadom az értékét
row5.appendChild(cell5_1);//Hozzá appendelem a sorhoz a cellát
const cell5_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_2.innerHTML = evszam3_2;//Megadom az értékét
row5.appendChild(cell5_2);//Hozzá appendelem a sorhoz a cellát

const row6 = document.createElement('tr');//Létrehozom hatodik sort
tbody.appendChild(row6);// Hozzá appendelem a tbody-hoz
const cell6_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_1.innerHTML = uralkodoNev4;//Megadom az értékét
cell6_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row6.appendChild(cell6_1);//Hozzá appendelem a sorhoz a cellát
const cell6_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_2.innerHTML = esemeny4_1;//Megadom az értékét
row6.appendChild(cell6_2);//Hozzá appendelem a sorhoz a cellát
const cell6_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_3.innerHTML = evszam4_1;//Megadom az értékét
row6.appendChild(cell6_3);//Hozzá appendelem a sorhoz a cellát

const row7 = document.createElement('tr');//Létrehozom a hetedik sort
tbody.appendChild(row7);// Hozzá appendelem a tbody-hoz
const cell7_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_1.innerHTML = esemeny4_2;//Megadom az értékét
row7.appendChild(cell7_1);//Hozzá appendelem a sorhoz a cellát
const cell7_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_2.innerHTML = evszam4_2;//Megadom az értékét
row7.appendChild(cell7_2);//Hozzá appendelem a sorhoz a cellát