/**
 * Megcsinálja a táblázatunkat
 * 
 * @param {Object} data - A megjelenítendő adatok tömbje
 * @param {string} uralkodo_nev - Az uralkodó neve
 * @param {string} esemeny1 - Az első esemény
 * @param {string} evszam1 - Az első esemény évszámá
 * @param {string} esemeny2 - A második esemény ha van
 * @param {string} evszam2 - A második esemény évszáma ha van
 */

function render(data){//Elkezdem megirni a render függvényt data paraméterrel
    const tablebody = tbody;//Létrehozok egy tablebody-t aminek az értéke tbody
    tbody.innerHTML = ''; // tbody innerHtml-je üres string

    for (element of data) {//Elkezdem a for ciklust. Kiválasztom az element data-ját
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

/**
 * Ellenőrzihogy egy adott input mező üres e és ha igen hibaüzenetet jelenít meg
 * 
 * @param {HTMLElement} inputElement - Az input mező amit validálni kell
 * @param {string} ErrorMessage - A hibaüzenet szövege amit akkor jelenít meg ha a mező üres
 * @returns {boolean} - Igaz ha a mező nem üres egyéb esetben hamis
 */
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

/**
 * Ellenőrzi két mező értékét és ha bármelyik üres hibaüzenetet jelenít meg
 * 
 * @param {HTMLElement} firstElement - Az első elem amit validálni kell
 * @param {HTMLElement} secondElement - A második elem amit validálni kell
 * @param {string} ErrorMessage - A hibaüzenet szövege amit akkor jelenít meg ha a mező üres
 * @returns {boolean} -  Igaz ha a mező nem üres egyéb esetben hamis
 */

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

/**
 * Létrehozza a táblázatunk fejlécét
 * 
 * @param {string} header - A fejléc szövegeit tartalmazó tömb
 */

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

/**
 * Létrehozza a formunkat
 * 
 * @param {Object} form1 - Az objektum tömbje ami tartalmazza a form adatait
 * @param {string} label - A formon belüli tartalom szövege
 * @param {string} id - A formon belüli tartalom azonositoja
 */

function generateForm(){  //Függvényt definiálunk
    const form = document.createElement('form') //Létrehozom a formot
    document.body.appendChild(form) //Hozzá appendelem a body-hoz
    form.id = "form" //A form id-ja form
    form.action = "#" //A form action-je #

    for(let i = 0; i < form1.length; i++ ){  //A form összes elemén végig megyünk egy ciklussal
        const div =  document.createElement('div') //Létrehozok egy div elemet
        form.appendChild(div) //Hozzá appendelem a formhoz
        
        const label = document.createElement('label') //Létrehozok egy label elemet
        div.appendChild(label) //Hozzá appendelem a div-hez

        label.innerHTML = form1[i].label //A label innerHTML értéke a form1 objektumban eltárolt label lesz

        const br = document.createElement('br') //Sortörést hozok létre
        div.appendChild(br) //Hozzá appendelem a div-hez

        const input = document.createElement('input') //Inputot hozok létre
        div.appendChild(input)//Hozzá appendelem a div-hez
        input.type = "text" //Input tipusa text
        input.id = form1[i].id //Input id megegyezik az objektumban eltárolt id-val
        input.name = form1[i].id //Input name megegyezik az objektumban eltárolt id-val

        const br2 = document.createElement('br') //Sortörést hozok létre
        div.appendChild(br2) //Hozzá appendelem a div-hez

        const span = document.createElement('span') //Spant hozok létre
        div.appendChild(span) //Hozzá appendelem a div-hez
        span.className = "error" //A span classa az error lesz
         
        const br3 = document.createElement('br') //Sortörést hozok létre
        div.appendChild(br3) //Hozzá appendelem a div-hez
        
    }

    const button = document.createElement('button') //Létrehozok egy gombot
    button.innerHTML = "Hozzáadás" //A gomb értéke a "Hozzáadás" szöveg lesz
    form.appendChild(button) //Hozzá appendelem a formhoz a gombot
}