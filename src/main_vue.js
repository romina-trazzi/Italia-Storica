
/*=============================================
    =            VUE SECTION           =
=============================================*/

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

    },

    /* Controlla la larghezza dello schermo in modo dinamico da quando viene caricata o distrutta 
    l'istanza Vue (mounted e destroyed) tramite il richiamo della funzione handleResize
    (passaggio 3) */
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
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
    },

    watch: {
        
        // Quando il valore di windowWidth cambia fai partire questa funzione
        windowWidth: function () {

            // Salva in una variabile l'elemento HTML che ha id book_change
            let column = document.getElementById("book_change");

            /* Se la larghezza dello schermo è uguale o inferiore di 1200px
            aggiungi le classi order-last e order-css
            se c'è, rimuovi la classe order-first
            */
            if (this.windowWidth <= 1199) {
                column.classList.add("order-last");
                column.classList.add("order-css");
                column.classList.toggle("order-first", false);
            
            /* Altrimenti, se larghezza dello schermo è maggiore di 1200px
            aggiungi la classe order-first
            se c'è, rimuovi le classi order-last e order-css
            */
            } else {
                column.classList.add("order-first");
                column.classList.toggle("order-last", false);
                column.classList.toggle("order-css", false);
            }

            // Salva in una variabile la HTML collection con classe card-text > .button orange 
            // let column = document.get

            
        },

      
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
    let valid_email = /^([a-zA-Z0-9_.-]) +@ (([a-zA-Z0-9-]{2,})+.)+([a-zA-Z0-9]{2,})+ $/;

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

    // Se tutto apposto invia la email
    } else {
        location.href = "mailto:" + email + "?Subject=" + subject + "&Body=" + messaggio;

    }
}


/*=====  End of VANILLA JAVASCRIPT SECTION ======*/

























