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

    function createTableHeader(table) {//Elkezdem megirni a függvényt
        const thead = document.createElement('thead'); // Létrehozok egy thead elemet
        table.appendChild(thead); //Hozzá appendelem a táblázathoz
    
        const tr = document.createElement('tr'); //Létrehozok egy sor elemet
        thead.appendChild(tr);//Hozzá appendelem a táblázathoz
    
        const uralkodo_nev = document.createElement('th');//Létrehozok egy th elemet
        uralkodo_nev.innerHTML = "Uralkodó"; //Megadom az értékét
        tr.appendChild(uralkodo_nev);//Hozzá appendelem a sorhoz
    
        const esemeny = document.createElement('th');
        esemeny.innerHTML = "Esemény";//Megadom az értékét
        tr.appendChild(esemeny);//Hozzá appendelem a sorhoz
    
        const evszam = document.createElement('th');
        evszam.innerHTML = "Évszám";//Megadom az értékét
        tr.appendChild(evszam);//Hozzá appendelem a sorhoz
    }
    createTableHeader(table); // Meghívom a függvényt hogy létrehozza a táblázat fejlécét

    const tbody = document.createElement('tbody'); // Létrehozok egy tbody elemet
    table.appendChild(tbody); // Hozzá appendelem a table-höz



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

    const container = document.createElement("div"); // Létrehozok egy div-et
    document.body.appendChild(container); // Hozzá appendelem a body-hoz

    const form = document.createElement("form"); // Létrehozok egy form elemet
    container.appendChild(form); // Hozzá appendelem a container-hez

    const label1 = document.createElement("label"); // Létrehozok egy label elemet
    label1.setAttribute("for", "uralkodo_nev"); // Tulajdonságot adok
    label1.innerHTML = 'Uralkodó neve:'; //Megadom mi legyen a kiirt szöveg
    form.appendChild(label1);//Hozzá appendelem a formhoz

    const input1 = document.createElement("input"); ////Létrehozok egy inputot
    input1.type = "text";//Megadom a tipusát
    input1.id = "uralkodo_nev";//Megadom az id-t
    form.appendChild(input1); // Hozzá appendelem a formhoz

    const error1 = document.createElement("div"); ;//Létrehozok egy div-et
    error1.className = "error";//Megcsinálom hogy pirossal jelenjen meg az error
    form.appendChild(error1); // Hozzá appendelem a formhoz

    const label2 = document.createElement("label");//Létrehozok egy labelt
    label2.setAttribute("for", "esemeny1"); // Tulajdonságot adok
    label2.innerHTML = "Első esemény:";//Megadom hogy mit irjon ki
    form.appendChild(label2); // Hozzá appendelem a formhoz

    const input2 = document.createElement("input");//Létrehozok egy inputot
    input2.type = "text";//Megadom a tipusát
    input2.id = "esemeny1";//Megadom az id-t
    form.appendChild(input2); // Hozzá appendelem a formhoz

    const error2 = document.createElement("div");;//Létrehozok egy div-et
    error2.className = "error";//Megcsinálom hogy pirossal jelenjen meg az error
    form.appendChild(error2); // Hozzá appendelem a formhoz

    const label3 = document.createElement("label");//Létrehozok egy labelt
    label3.setAttribute("for", "evszam1"); // Tulajdonságot adok
    label3.innerHTML = "Első esemény évszáma:";//Megadom mit irjon ki
    form.appendChild(label3); // Hozzá appendelem a formhoz

    const input3 = document.createElement("input");//Létrehozok egy inputot
    input3.type = "text";//Megadom a tipusát
    input3.id = "evszam1";//Megadom az id-t
    form.appendChild(input3); // Hozzá appendelem a formhoz

    const error3 = document.createElement("div");;//Létrehozok egy div-et
    error3.className = "error";//Megcsinálom hogy pirossal jelenjen meg az error
    form.appendChild(error3); // Hozzá appendelem a formhoz

    const label4 = document.createElement("label");//Létrehozok egy labelt
    label4.setAttribute("for", "esemeny2"); // Tulajdonságot adok
    label4.innerHTML = "Második esemény:";
    form.appendChild(label4); // Hozzá appendelem a formhoz

    const input4 = document.createElement("input");//Létrehozok egy inputot
    input4.type = "text";//Megadom a tipusát
    input4.id = "esemeny2";//Megadom az id-t
    form.appendChild(input4);//Hozzá appendelem a formhoz

    const error4 = document.createElement("div");;//Létrehozok egy div-et
    error4.className = "error";//Megcsinálom hogy pirossal jelenjen meg az error
    form.appendChild(error4);//Hozzá appendelem a formhoz

    const label5 = document.createElement("label");//Létrehozok egy labelt
    label5.setAttribute("for", "evszam2");// Tulajdonságot adok
    label5.innerHTML = "Második esemény évszáma:";// Megadom hogy mit irjon ki
    form.appendChild(label5);//Hozzá appendelem a formhoz

    const input5 = document.createElement("input");//Létrehozok egy inputot
    input5.type = "text";//Megadom a tipusát
    input5.id = "evszam2";//Megadom az id-t
    form.appendChild(input5);//Hozzá appendelem a formhoz

    const error5 = document.createElement("div");//Létrehozok egy div-et
    error5.className = "error";//Megcsinálom hogy pirossal jelenjen meg az error
    form.appendChild(error5);//Hozzá appendelem a formhoz

    // Hozzáadás gomb
    const button = document.createElement("button"); //Létrehozok egy gombot
    button.innerHTML = "Hozzáadás";//Megadom hogy mit irjon ki
    form.appendChild(button);//Hozzá appendelem a formhoz

form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
    const uralkodo_nev = document.getElementById("uralkodo_nev")//Lekérem a html form id-ját
    const esemeny1 = document.getElementById("esemeny1")//Lekérem a html form id-ját
    const esemeny2 = document.getElementById("esemeny2")//Lekérem a html form id-ját
    const evszam1 = document.getElementById("evszam1")//Lekérem a html form id-ját
    const evszam2 = document.getElementById("evszam2")//Lekérem a html form id-ját


    const thisForm = e.currentTarget; //Eltárolom egy változóban az értéket
    const errorElements = thisForm.querySelectorAll(".error"); // A formon belüli összes error classal rendelkező elemet kiválasztjuk
    for(const errorElement of errorElements){ // Végig megyünk az összes visszakapott elemen
        errorElement.innerHTML = ''; // Töröljük az elem tartalmát
    }

    const NonEmpty = getNonEmpty(esemeny1, esemeny2) //Eltárolom egy változóban az eseményeket

    const NonEmpty2 = getNonEmpty2(evszam1, evszam2) //Eltárolom egy változóban az évszámokat

    const uralkodo_nevvalue = uralkodo_nev.value ///Eltárolom egy változóban az értéket
    const esemeny1value = esemeny1.value///Eltárolom egy változóban az értéket
    const esemeny2value = esemeny2.value///Eltárolom egy változóban az értéket
    const evszam1value = evszam1.value///Eltárolom egy változóban az értéket
    const evszam2value = evszam2.value//Eltárolom egy változóban az értéket

    if(simpleValid(uralkodo_nev, NonEmpty, esemeny2, NonEmpty2, evszam2)) {//Ha valid
        const new_person = { //Létrehozok egy új elemet
            uralkodo_nev: uralkodo_nevvalue, //Értéket adok
            esemeny1: esemeny1value,//Értéket adok
            esemeny2: esemeny2value,//Értéket adok
            evszam1: evszam1value,//Értéket adok
            evszam2: evszam2value//Értéket adok
        }
        array.push(new_person)//Hozzárakom az arrayhez az új elemet
        render();//Meghivom a render függvényt mégegyszer
        thisForm.reset(); // visszaallitjuk a formunkat az alapallapotba
    }
})

function getNonEmpty(esemeny1, esemeny2) { //Elkezdem megirni a fucntiont
    return (esemeny1.value === "" && esemeny2.value !== "") ? esemeny2 : esemeny1; //Ellenőrzöm hogy üres e az érték 
} 
function getNonEmpty2(evszam1, evszam2) { //Elkezdem megirni a fucntiont
    return (evszam1.value === "" && evszam2.value !== "") ? evszam2 : evszam1; //Ellenőrzöm hogy üres e az érték 
}

function simpleValid(uralkodo_nevinput, esemeny1input, esemeny2input, evszam1input, evszam2input) { //Megirom a validációs függvényt

    let valid = true;

    if(!ValidateField(uralkodo_nevinput, "Az uralkodó név megadása kötelező")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(esemeny1input, "Az esemény megadása kötelező")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(!ValidateField(esemeny2input, "Az esemény megadása kötelező")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(!ValidateField(evszam1input, "Az évszám megadása kötelező")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    if(!ValidateField(evszam2input, "Az évszám megadása kötelező")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false;//A valid értéke hamis lesz
    }

    return valid; //Visszatérek a valid-ra akkor hamis ha nem ment át a validáción egyéb esetben igaz
}

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
    return valid; //Visszatérek a valid-ra akkor hamis ha nem ment át a validáción egyéb esetben igaz
}

