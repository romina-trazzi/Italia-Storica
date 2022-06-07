
/*=============================================
    =            VUE SECTION           =
=============================================*/
Vue.config.devtools = true;

let app = new Vue ({
    el: "#app",
    data: {
        counter: 0,
        images: [
            "public/img/carousel0.jpg",
            "public/img/carousel1.jpg",
            "public/img/carousel2.jpg",
            "public/img/carousel3.jpg",
            "public/img/carousel4.jpg"
        ],

        libri: [
            {
                "titolo": "Il calderone delle streghe",
                "sottotitolo": "La battaglia della sacca di Cherkassy, gennaio-febbraio 1944",
                "autore": "Günther Jahnke, Bernd Lerch",
                "pagine": "492 p., ill. , Brossura",
                "anno di pubblicazione": "2021",
                "descrizione": "Il presente studio sulla 'Sacca di Cherkassy' è un'analisi operazionale e tattica. Vi sono descritte la sequenza degli avvenimenti e lo sviluppo della situazione militare del fronte tedesco a sud di Cherkassy dal 28 gennaio al 17 febbraio 1944. Viene anche data un'ampia panoramica del quadro generale di ciò che avvenne tra la fine del 1943 e l'inizio del 1944 sul fronte dell'Heeresgruppe Süd, per assicurare una migliore comprensione del contesto della battaglia, che si distinse per drammaticità e svolgimento tattico dal resto degli eventi del fronte orientale. Il presente lavoro si sforza di dare una rappresentazione fattuale e quanto più esauriente possibile, grazie alla consultazione di una vasta mole di documenti d'archivio e fonti secondarie tedesche e sovietiche, diari di guerra delle unità coinvolte e testimonianze dirette di veterani. In appendice, numerose fotografie rare e inedite della battaglia, e la riproduzione delle mappe originali tedesche delle operazioni nella sacca.",
                "prezzo": "34,20 euro",
                "link_IBS": "https://www.ibs.it/calderone-delle-streghe-battaglia-della-libro-gunther-jahnke-bernd-lerch/e/9788831430128"
            },

            {
                "titolo": "La caduta di Berlino",
                "sottotitolo": "L'ultima battaglia di Hitler",
                "autore": "Werner Haupt",
                "pagine": "278 p., ill. , Brossura",
                "anno di pubblicazione": "2020",
                "descrizione": "Un classico della storia militare, coniugante l'accuratezza della documentata ricostruzione storica degli ultimi combattimenti per Berlino dell'aprile-maggio 1945, dallo sfondamento sovietico sull'Oder sino alla battaglia di Seelow e la difesa finale della capitale del III Reich, e l'avvincente narrazione delle vicende di un pugno di carristi della Panzer-Division 'Müncheberg' e volontari francesi dell'SS-Sturmbataillon 'Charlemagne', tra gli ultimi difensori di Berlino. Questa edizione presenta una traduzione rivista e annotata a cura del Wehrmacht Research Group, ed è integrata da nuove dettagliate mappe delle operazioni, drammatiche fotografie in azione dell'epoca, immagini attuali dei luoghi dei combattimenti e di illustrazioni a colori.",
                "prezzo": "23,75 euro",
                "link_IBS": "https://www.ibs.it/caduta-di-berlino-ultima-battaglia-libro-werner-haupt/e/9788831430012"
            },

            {
                "titolo": "Il gladiatore di Hitler",
                "sottotitolo": "Vita e battaglie del Generale d'armata SS Sepp Dietrich",
                "autore": "Charles Messenger",
                "pagine": "492 p., ill. , Brossura",
                "anno di pubblicazione": "2021",
                "descrizione": "Veterano della prima guerra mondiale, dove servì nei primi reparti corazzati imperiali su Tank di preda bellica, e combattente nei Freikorps nei turbolenti anni della repubblica di Weimar, Josef 'Sepp' Dietrich fu uno dei primi sostenitori del Nazionalsocialismo tedesco, legando indissolubilmente la sua vita ad Adolf Hitler e la sua carriera militare alla guida dell'élite delle SS, la Leibstandarte SS Adolf Hitler, dirigendone la formazione e le attività nella Germania degli anni '30 e quindi guidandola in guerra nelle campagne di Polonia, Francia, Grecia e nei durissimi combattimenti sul fronte russo nel 1941-1943, per poi prendere il comando di Armate Panzer SS negli scontri finali in Normandia, Ardenne e Ungheria. Incensato dalla propaganda tedesca e diffamato da quella Alleata, condannato quale criminale di guerra, Sepp Dietrich fu un comandante devoto ai suoi uomini e li guidò in alcuni dei combattimenti più feroci della guerra. In questa prima edizione italiana, ampiamente illustrata, lo storico militare inglese Charles Messenger fornisce un resoconto obiettivo delle battaglie di Sepp Dietrich e delle sue Waffen-SS.",
                "prezzo": "27,55 euro",
                "link_IBS": "https://www.ibs.it/gladiatore-di-hitler-vita-battaglie-libro-charles-messenger/e/9788831430135"
            },

            {
                "titolo": "Il vero volto del soldato tedesco",
                "sottotitolo": "",
                "autore": "Fritz Kempe",
                "pagine": "102 p., ill. , Brossura",
                "anno di pubblicazione": "2016",
                "descrizione": "Questo libro fotografico dedicato al Volto del soldato tedesco nella seconda guerra mondiale, curato dal fotografo Fritz Kempe (1909-1988) per conto dell'Oberkommando della Wehrmacht, il comando supremo delle forze armate, e pubblicato nel 1943, rappresentò, per qualità tecnica delle fotografie riprodotte e per la sua 'visione', il punto più alto raggiunto dalla già monumentale opera di propaganda fotografica dei Bildberichter, i fotografi di guerra tedeschi. Le fotografie, selezionate tra migliaia di scatti, rappresentano non solo una eccezionale testimonianza storica e estetica dei militari tedeschi della Heer, delle Waffen-SS, della Kriegsmarine e della Luftwaffe impegnati su tutti i fronti e delle loro gesta, ma anche una precisa indagine, tramite un profondo sguardo fotografico sugli 'occhi specchio dell'anima' di questi uomini in guerra, sulle radici identitarie dell'Uomo e del Soldato tedesco, come membro scelto di una coesa comunità nazionale e politica, impegnato nella difesa dei valori culturali tedeschi ed europei minacciati dal bolscevismo dell'Unione Sovietica da una parte, e dal capitalismo angloamericano dall'altra.",
                "prezzo": "22,80 euro",
                "link_IBS": "https://www.ibs.it/vero-volto-del-soldato-tedesco-libro-fritz-kempe/e/9788894226522"
            },

            {
                "titolo": "La caduta di Berlino",
                "sottotitolo": "L'ultima battaglia di Hitler",
                "autore": "Werner Haupt",
                "pagine": "278 p., ill. , Brossura",
                "anno di pubblicazione": "2020",
                "descrizione": "Un classico della storia militare, coniugante l'accuratezza della documentata ricostruzione storica degli ultimi combattimenti per Berlino dell'aprile-maggio 1945, dallo sfondamento sovietico sull'Oder sino alla battaglia di Seelow e la difesa finale della capitale del III Reich, e l'avvincente narrazione delle vicende di un pugno di carristi della Panzer-Division 'Müncheberg' e volontari francesi dell'SS-Sturmbataillon 'Charlemagne', tra gli ultimi difensori di Berlino. Questa edizione presenta una traduzione rivista e annotata a cura del Wehrmacht Research Group, ed è integrata da nuove dettagliate mappe delle operazioni, drammatiche fotografie in azione dell'epoca, immagini attuali dei luoghi dei combattimenti e di illustrazioni a colori.",
                "prezzo": "23,75 euro",
                "link_IBS": "https://www.ibs.it/caduta-di-berlino-ultima-battaglia-libro-werner-haupt/e/9788831430012"
            }

        ],

        // Proprietà windowWidth per salvare la dimensione dello schermo (passaggio 1)
        windowWidth: 0,

        /* Se fosse stato un oggetto con altezza e larghezza:
        window: {
            width: 0,
            height: 0

        } */

        normalWidth: true,
        specialWidth: false,
        duoWidth: false,
        monoWidth: false,

        // Proprietà larghezza bookDetails
        bookDetails: 0,

    },

    /* Controlla la larghezza dello schermo in modo dinamico da quando viene caricata o distrutta
    l'istanza Vue (mounted e destroyed) tramite il richiamo della funzione handleResize
    (passaggio 3) */
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        window.addEventListener('resize', this.bookDetailsResize);
        this.bookDetailsResize();

    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        nextImg() {
            this.counter++;
            if(this.counter === this.images.length) {
                this.counter = 0;
            }
        },

        prevImg() {
            if (this.counter > 0) {
                this.counter--;
            } else {
                this.counter = this.images.length -1;
            }

        },

        slideBullet() {

            // Selezioniamo dal Dom i dots
            let dots = document.querySelectorAll('.glide__bullet');

            // Rimuoviamo la classe selected da tutti gli elementi
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('selected');
            }

            let currentIndex = 0;

            // Salviamo l'indice dell'elemento attivo --> variabile currentIndex
            dots.forEach(function (element, index) {
                if (element === document.activeElement) {
                    currentIndex = index;
                }
            });

            // Aggiungiamo la classe selected all'elemento attivo
            dots[currentIndex].classList.add('selected');

            // Aggiorniamo il counter
            this.counter = currentIndex;
        },

        /* Controlla la larghezza dello schermo e passa il valore alla funzione resize a mounted e destroyed.
        Il valore di width in data viene aggiornato da 0 a valore corrente.
        (passaggio 2) */

        handleResize () {
            this.windowWidth = window.screen.width;
        },

        // Salva il valore di larghezza della classe bookDetails
        bookDetailsResize () {
            let bd = document.getElementById('book_details');
            let bdWidth = bd.getBoundingClientRect().width;
            this.bookDetails = bdWidth;
        },

    },

    watch: {

        // Quando il valore di windowWidth cambia, fai partire questa funzione
        windowWidth: function () {

            // Sezione CORE

            // Salva in una variabile l'elemento HTML che ha id book_change
            let column = document.getElementById("book_change");

            /* Se la larghezza dello schermo è uguale o inferiore di 1200px aggiungi le classi order-last e order-css
            se c'è, rimuovi la classe order-first */
            if (this.windowWidth < 1200) {
                column.classList.add("order-last");
                column.classList.add("order-css");
                column.classList.toggle("order-first", false);

            /* Altrimenti, se larghezza dello schermo è maggiore di 1200px aggiungi la classe order-first
            se c'è, rimuovi le classi order-last e order-css */
            } else {
                column.classList.add("order-first");
                column.classList.toggle("order-last", false);
                column.classList.toggle("order-css", false);
            }


            // Sezione ORDER

            /* Quando lo schermo è >= 2000px allora vengono eliminati div che contengono le card e le card assumono le classi card xl-4 lg-4 */

            /* Quando lo schermo è < 2000px allora vengono ripristinati i div originali e le card non hanno più le classi xl-4 e lg-4 */

            // Salva in una variabile l'elemento HTML con classe card container
            let cardContainer = document.getElementsByClassName('card-container');

            // Salva in una variabile gli elementi HTML con classe card
            let cardsPosition = document.querySelectorAll('.card');

            // Trasformiamo cardsPosition in Array
            let cardsPositionArray = Array.from(cardsPosition);

            // Cloniamo i nodi delle cards + discendenti   
            let cloneNode = cardsPositionArray[0].cloneNode(true);
            let cloneNode1 = cardsPositionArray[1].cloneNode(true);
            let cloneNode2 = cardsPositionArray[2].cloneNode(true);

            if (this.windowWidth >= 2000) {

                // Eliminiamo i parent nodes con le card
                cardContainer[0].children[0].remove();
                cardContainer[0].children[1].remove();
                cardContainer[0].children[0].remove();

                // Visualizziamo le card senza parent nodes
                cardContainer[0].appendChild(cloneNode);
                cardContainer[0].appendChild(cloneNode1);
                cardContainer[0].appendChild(cloneNode2);

                // Aggiungiamo le classi a tutte le card (abbiamo adesso la struttura div = "card col-xl-4 col-lg-4")
                for (let i = 0; i < cardsPositionArray.length; i++) {
                    cloneNode.classList.add("col-xl-4");
                    cloneNode.classList.add("col-lg-4");
                    cloneNode1.classList.add("col-xl-4");
                    cloneNode1.classList.add("col-lg-4");
                    cloneNode2.classList.add("col-xl-4");
                    cloneNode2.classList.add("col-lg-4");
                }
            
            } else if (this.windowWidth < 2000) {

                // Elimina tutto il codice html delle card 
                cardContainer[0].children[0].remove();
                cardContainer[0].children[1].remove();
                cardContainer[0].children[0].remove();
                
                // // Ripristiniamo i "vecchi" parent nodes con le card copiando pari l'HTML originale (nota l'operatore +=)
                cardContainer[0].innerHTML += 

                ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>'
                + '<br> </p> <a href="https://1drv.ms/b/s!Aso8wGv5JN2egTHUDRwYrytfCIgJ" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> '

                +

                ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' 
                + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>'

                +

                ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>'
                + '<br> </p> <a href="https://www.libroco.it/servizi-per-librai-acquisto-libri-on-line.php" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> '
                
            }
            
            // Sezione PERSONAL

            // Cambio template dei loghi
            if (this.windowWidth >= 992 && this.windowWidth <= 1550) {
                this.specialWidth = true;
                this.normalWidth = false;
                this.duoWidth = false;
                this.monoWidth = false;
            } else if (this.windowWidth >= 650 && this.windowWidth <= 991) {
                this.duoWidth = true;
                this.specialWidth = false;
                this.normalWidth = false;
                this.monoWidth = false;
            } else if (this.windowWidth <= 649) {
                this.monowidth = true;
                this.normalWidth = false;
                this.specialWidth = false;
                this.duoWidth = false;
            } else {
                this.normalWidth = true;
                this.specialWidth = false;
                this.duoWidth = false;
                this.monoWidth = false;
            }

            // Sezione FORM
            let map = document.getElementById("map-container");
            let form = document.getElementById("form-container");

            /* Se la larghezza dello schermo è uguale o inferiore di 1650px aggiungi la classe col-lg-12 a form e map
            se c'è, rimuovi la classe col-lg-8 da form e classe col-lg-4 da map */
            if (this.windowWidth <= 1650) {
                form.classList.add("col-lg-12");
                form.classList.toggle("col-lg-8", false);
                map.classList.add("col-lg-12");
                map.classList.toggle("col-lg-4", false);

            /* Altrimenti, se larghezza dello schermo è maggiore di 1650px aggiungi le classi col-lg-8 a form e col-lg-4 a map
            se c'è, rimuovi la classe col-lg-12 a entrambi */

            } else {
                form.classList.add("col-lg-8");
                form.classList.toggle("col-lg-12", false);
                map.classList.add("col-lg-4");
                map.classList.toggle("col-lg-12", false);
            }

            //Trova la copertina attiva
            if (this.windowWidth >= 800 && this.windowWidth <= 1199) {

                // Selezioniamo la distanza fra il lato sinistro (left) dell'immagine di copertina attiva e il bordo della pagina
                let cover = document.getElementsByClassName("glide__slide--active");
                let coverChild = cover[0].childNodes;
                let coverArray = Array.from(coverChild);

                const distanceCover = Math.ceil(coverArray[0].getBoundingClientRect().left); // 193

                console.log(distanceCover);

                // Selezioniamo la distanza fra il lato destro (right) del glideArrow left e il bordo della pagina
                let gal = document.querySelector('.glide__arrow--left');
                const distanceGal = Math.ceil(gal.getBoundingClientRect().right); // 162

                console.log(distanceGal);

                const distanceWin = distanceCover - distanceGal;

                console.log(distanceWin); // circa 26-31 px

                if (distanceWin !== 31) {
                    distanceWin = 31;
                }

            }

        },

        // Quando il valore di bookDetails (larghezza) cambia, fai partire questa funzione e aggiorna il valore di altezza delle copertine
        bookDetails: function() {

            // Seleziona l'altezza dell'immagine di copertina
            let cover = document.querySelector('.glide__slide--active');
            let coverHeight = cover.getBoundingClientRect().height;

            // Seleziona l'altezza di bookDetails
            let bd = document.getElementById('book_details');
            let bdHeight = bd.getBoundingClientRect().height;

            // Cambia l'altezza corrente con l'altezza di bookDetails
            if (bdHeight !== coverHeight) {
                bdHeight == coverHeight;
            };

        },

        // Quando il valore del counter (che gestisce i radiobutton e le copertine) cambia, fai partire questa funzione e aggiorna la posizione dei radiobutton
        counter: function() {

            /* Dobbiamo tenere fixed la posizione dei radiobutton del carosello (vedi glide.theme.scss) modificando la proprietà bottom */

            // Salviamo tramite id il div controllore di tutti i radiobutton (variabile allRadiobuttons)
            let allRadiobuttons = document.getElementById('radiobuttonController');

            // Selezioniamo i valori posizionali dei radiobutton

            let valuesB = allRadiobuttons.getBoundingClientRect().bottom;
            let valuesT = allRadiobuttons.getBoundingClientRect().top;
            let valuesY = allRadiobuttons.getBoundingClientRect().y;

            let allValues = allRadiobuttons.getBoundingClientRect();

            // console.log(allValues);

            // Queste sono i valori pozionali dei radiobutton quando counter = 0 (costanti)
            // const rdbB = 596.8333129882812;
            // const rdbT = 581.8333129882812;
            const rdbY = 596.8333129882812;


            // if (valuesB != rdbB && valuesT != rdbT) {
            if (valuesY != rdbY) {
                valuesY == rdbY;
            }

            // console.log (fixedValuesB, rdbB, fixedValuesT, rdbT);

        }
    }

});

/*=====  End of VUE SECTION block  ======*/



/*=============================================
=            GLIDE SECTION           =
=============================================*/

const glideConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    keyboard: false,
    swipeThresold: false,
    dragThreshold: false,
    breakpoints: {
        1200: {
            perView: 1,
        },

        992: {
        perView: 1,

        },

        480: {
            perView: 1,
        }
    },

}

let glide = new Glide('.glide', glideConfig).mount();



/*=====  End of GLIDE SECTION block  ======*/



/*=================================================
=            VANILLA JAVASCRIPT SECTION           =
==================================================*/


/*----------  Subsection Card outline colors  ----------*/


/* Quando i buttons delle card sono on hover allora l'outline delle card e le icone fontawesome cambiano colore */

// Selezioniamo i buttons delle card (nodeList)
let buttons = document.querySelectorAll('.card .orange');

// Trasformiamo buttons in Array
let buttonsArray = Array.from(buttons);

// Selezioniamo gli elementi da cambiare (nodeList)
let iconsFas = document.querySelectorAll('.card .fas');
let cards =  document.querySelectorAll('.card');


// Creiamo i cicli con i Listener e le funzioni per cambiare i colori
for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('mouseover', function() {
        iconsFas[i].style.color = 'rgb(244, 124, 32)';
        cards[i].style.outlineColor = 'rgb(244, 124, 32)';
    });

};

for (let i = 0; i < buttonsArray.length; i++) {
    buttonsArray[i].addEventListener('mouseleave', function() {
        iconsFas[i].style.color = 'rgb(250, 153, 28)';
        cards[i].style.outlineColor = 'rgb(250, 153, 28)';
    });
};


/*---------- End Subsection Card outline colors  ----------*/




/*----------  Subsection Validation Form  ----------*/


// Validation test + Invio mail
function controlloForm() {

    // Selezioniamo i dati del form e li salviamo in variabili
    let nome = document.sendemail.from.value;
    let email = document.sendemail.email.value;
    let subject = document.sendemail.subject.value;
    let body = document.sendemail.body.value;

    console.log(nome, email, subject, body);

    // Espressione regolare per l'email
    let valid_email = /^([a-zA-Z0-9_.-]) + @ (([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+ $/;

    // Se i campi sono vuoti o undefined manda alert
    if (nome == "" || email == "" || subject == "" || body == "" ||
        nome == "undefined" || email == "undefined" || subject == "undefined" || body == "undefined") {
        alert("Per inviare la email compila i campi vuoti o undefined");
        return false;

    // Verifica correttezza indirizzo mail ed eventualmente manda alert
    } else if (email.indexOf("@") == (-1) || email.indexOf(".") == false || !valid_email.test(email) ) {
        alert("Controlla l'indirizzo email");
        document.invio.email.focus();
        return false;
    } else {
        return true;
    }
}


/*=====  End of VANILLA JAVASCRIPT SECTION ======*/

























