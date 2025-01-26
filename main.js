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

const form1 = [// A tömb létehozása
    {// A tömb első elemét létrehozom
        label: "Uralkodó neve:",//Értékadás
        id: "uralkodo_nev",//Értékadás
    },
    {// A tömb második elemét létrehozom
        label: "Első esemény:",//Értékadás
        id: "esemeny1",//Értékadás
    },
    {// A tömb harmadik elemét létrehozom
        label: "Első esemény évszáma:",//Értékadás
        id: "evszam1"//Értékadás

    },
    {// A tömb negyedik elemét létrehozom
        label: "Második esemény:",//Értékadás
        id: "esemeny2",//Értékadás
    },
    {// A tömb ötödik elemét létrehozom
        label: "Második esemény évszáma:",//Értékadás
        id: "evszam2"//Értékadás

    }   
]

generateForm(form1) //Meghivom a függvényt

const table = document.createElement('table'); //Létrehozok egy table elemet ami a táblázatom lesz
document.body.appendChild(table); //Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody');//Létrehozok egy tbody elemet
table.appendChild(tbody)//Hozzá appendelem a table-höz

generateHeader(header) //Meghivom a függvényt

render(array);//Meghivom a render függvényt és az array paramétert kapja

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
        i.innerHTML = "" //Az i értéke üres
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
    render(array);//Meghivom a render függvényt mégegyszer és az array paramétert kapja
    thisForm.reset(); // Visszaállitom a formot alap állapotba
    
})
