const header = { //header objektum létrehozása
    elso: "Uralkodó", // értékadás a tulajdonságnak
    masodik: "Esemény",// értékadás a tulajdonságnak
    harmadik : "Évszám"// értékadás a tulajdonságnak
};

const uralkodo1 = { //uralkodo1 objektum létrehozása
    nev : "I. István",// értékadás a tulajdonságnak
    esemeny1 : "Koronázás",// értékadás a tulajdonságnak
    esemeny2 : "Pannonhalmi apátság megalapítása",// értékadás a tulajdonságnak
    evszam1 : "1000",// értékadás a tulajdonságnak
    evszam2 : "1001"// értékadás a tulajdonságnak
};

const uralkodo2 = {//uralkodo2 objektum létrehozása
    uralkodo_nev : "IV. Béla",// értékadás a tulajdonságnak
    esemeny1 : "tatárjárás",// értékadás a tulajdonságnak
    evszam1 : "1241-1242"// értékadás a tulajdonságnak
};

const uralkodo3 = {//uralkodo3 objektum létrehozása
    nev : "Mátyás király",// értékadás a tulajdonságnak
    esemeny1 : "Bécs elfoglalása",// értékadás a tulajdonságnak
    esemeny2 : "Kenyérmezei csata",// értékadás a tulajdonságnak
    evszam1 : "1485",// értékadás a tulajdonságnak
    evszam2 : "1479"// értékadás a tulajdonságnak
};
const uralkodo4 = {//uralkodo4 objektum létrehozása
    nev : "II. Rákóczi Ferenc",// értékadás a tulajdonságnak
    esemeny1 : "A szabadságharc kezdete",// értékadás a tulajdonságnak
    esemeny2 : "A szabadságharc vége",// értékadás a tulajdonságnak
    evszam1 : "1703",// értékadás a tulajdonságnak
    evszam2 : "1711"// értékadás a tulajdonságnak
}






const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = header.elso; //Megadom az értékét
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = header.masodik;//Megadom az értékét
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = header.harmadik;//Megadom az értékét
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez

//

const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz
const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = uralkodo1.nev;//Megadom az értékét
cell1_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát
const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = uralkodo1.esemeny1;//Megadom az értékét
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát
const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = uralkodo1.evszam1;//Megadom az értékét
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát

const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz
const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = uralkodo1.esemeny2;//Megadom az értékét
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát
const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = uralkodo1.evszam2;//Megadom az értékét
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát

//

const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz
const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = uralkodo2.nev;//Megadom az értékét
row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát
const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = uralkodo2.esemeny1;//Megadom az értékét
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát
const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = uralkodo2.evszam1;//Megadom az értékét
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát

//

const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz
const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = uralkodo3.nev;//Megadom az értékét
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát
cell4_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = uralkodo3.esemeny1;//Megadom az értékét
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát
const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = uralkodo3.evszam1;//Megadom az értékét
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát

const row5 = document.createElement('tr');//Létrehozom az ötödik sort
tbody.appendChild(row5);// Hozzá appendelem a tbody-hoz
const cell5_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_1.innerHTML = uralkodo3.esemeny2;//Megadom az értékét
row5.appendChild(cell5_1);//Hozzá appendelem a sorhoz a cellát
const cell5_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_2.innerHTML = uralkodo3.evszam2;//Megadom az értékét
row5.appendChild(cell5_2);//Hozzá appendelem a sorhoz a cellát

//

const row6 = document.createElement('tr');//Létrehozom hatodik sort
tbody.appendChild(row6);// Hozzá appendelem a tbody-hoz
const cell6_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_1.innerHTML = uralkodo4.nev;//Megadom az értékét
cell6_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row6.appendChild(cell6_1);//Hozzá appendelem a sorhoz a cellát
const cell6_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_2.innerHTML = uralkodo4.esemeny1;//Megadom az értékét
row6.appendChild(cell6_2);//Hozzá appendelem a sorhoz a cellát
const cell6_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_3.innerHTML = uralkodo4.evszam1;//Megadom az értékét
row6.appendChild(cell6_3);//Hozzá appendelem a sorhoz a cellát

const row7 = document.createElement('tr');//Létrehozom a hetedik sort
tbody.appendChild(row7);// Hozzá appendelem a tbody-hoz
const cell7_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_1.innerHTML = uralkodo4.esemeny2;//Megadom az értékét
row7.appendChild(cell7_1);//Hozzá appendelem a sorhoz a cellát
const cell7_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_2.innerHTML = uralkodo4.evszam2;//Megadom az értékét
row7.appendChild(cell7_2);//Hozzá appendelem a sorhoz a cellát

//