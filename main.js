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