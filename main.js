const header = { //Egy objektum létrehozása amiben a headert eltárolom
    uralkodo_nev: "Uralkodó",//Értékadás
    esemeny: "Esemény",//Értékadás
    évszám: "Évszám"//Értékadás
}

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
]

const table = document.createElement('table'); //Létrehozok egy table elemet ami a táblázatom lesz
document.body.appendChild(table); //Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody');//Létrehozok egy tbody elemet
table.appendChild(tbody)//Hozzá appendelem a table-höz

generateHeader() //Meghivom a függvényt

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

render();//Meghivom a render függvényt

function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk

    let valid = true;//A valid értéke igaz

    if(inputElement.value === ""){//Ha az inputElement üres

        const parentElement = inputElement.parentElement //Értéket adunk

        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error

        if(error != "") { // Ha találtunk ilyen mezőt akkor -->
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }

    return valid //Valid értékkel térek vissza
}

function ValidateField2(firstElement, secondElement, ErrorMessage){ //Függvényt definiálunk

    let valid = true //A valid értéke igaz

    if(firstElement.value != "" && !ValidateField(secondElement, ErrorMessage)){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false //A valid értéke hamis
    }

    if(secondElement.value != "" && !ValidateField(firstElement, ErrorMessage)){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false //A valid értéke hamis
    }

    return valid //A valid értékkel térünk vissza
}

function generateHeader(){ //Függvényt definiálunk
const thead = document.createElement('thead'); //Létrehozok egy thead elemet
table.appendChild(thead);//Hozzá appendelem a táblázathoz

const tr = document.createElement('tr');//Létrehozok egy sor elemet
thead.appendChild(tr);//Hozzá appendelem a fej részhez
    for(const i in header){ //Végig iterálok a header objektumon
        const th = document.createElement('th') //Létrehozok egy th elemet
        th.innerHTML = header[i] //A th tartalma a header objektumban eltárolt értékek lesznek
        tr.appendChild(th) //Hozzá appendeljük a sorhoz a th-t
    }
 
}

const form = document.getElementById("form") //Lekérem a html form id-ját

form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
    const uralkodo_nevH = document.getElementById("uralkodo_nev")//Lekérem a html form id-ját
    const esemeny1H = document.getElementById("esemeny1")//Lekérem a html form id-ját
    const esemeny2H = document.getElementById("esemeny2")//Lekérem a html form id-ját
    const evszam1H = document.getElementById("evszam1")//Lekérem a html form id-ját
    const evszam2H = document.getElementById("evszam2")//Lekérem a html form id-ját

    const uralkodo_V = uralkodo_nevH.value ///Eltárolom egy változóban az értéket
    const esemeny1_V = esemeny1H.value///Eltárolom egy változóban az értéket
    const esemeny2_V = esemeny2H.value///Eltárolom egy változóban az értéket
    const evszam1_V = evszam1H.value///Eltárolom egy változóban az értéket
    const evszam2_V = evszam2H.value//Eltárolom egy változóban az értéket

    const thisForm = e.currentTarget //Az aktuális form
    const errorElements = thisForm.querySelectorAll('.error') //Errorokat eltárolom egy változóban

    for(const i of errorElements){ //Végigmegyek az errorokon és "" ra állitom az értéküket
        i.innerHTML = ""
    }
   
    let valid = true; // A valid változó értéke igaz

    if(!ValidateField(uralkodo_nevH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(esemeny1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(!ValidateField(evszam1H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(!ValidateField2(esemeny2H, evszam2H, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(valid){ //Ha valid
        if(esemeny2_V == "" && evszam2_V == ""){ //Ha az esemeny2 és az evszam2 üres akkor
            const new_person =  { //Létrehozok egy új objektumot
                uralkodo_nev: uralkodo_V, //Értéket adok
                esemeny1: esemeny1_V,//Értéket adok
                evszam1: evszam1_V,//Értéket adok
            }
            array.push(new_person)//Hozzárakom az arrayhez az új elemet
        }
        else { 
            const new_person = { //Létrehozok egy új elemet
                uralkodo_nev: uralkodo_V, //Értéket adok
                esemeny1: esemeny1_V,//Értéket adok
                esemeny2: esemeny2_V,//Értéket adok
                evszam1: evszam1_V,//Értéket adok
                evszam2: evszam2_V//Értéket adok
            }
        array.push(new_person)//Hozzárakom az arrayhez az új elemet
        }
    }
    render();//Meghivom a render függvényt mégegyszer
    thisForm.reset(); // Visszaállitom a formot alap állapotba
    
})
