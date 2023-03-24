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
            "public/img/carousel4.jpg",
            "public/img/carousel5.jpg",
            "public/img/carousel6.jpg",
        ],

        libri: [
            {
                "titolo": "ACHTUNG - PANZER!",
                "sottotitolo": "Sviluppo, tattiche e potenziale operativo delle forze corazzate",
                "autore": "Heinz Guderian",
                "pagine": "286 pagg., ill. bn e col",
                "anno di pubblicazione": "2023",
                "descrizione": "Achtung – Panzer! è uno dei più significativi libri a carattere teorico-militare del XX secolo. Heinz Guderian raffinò le idee in esso contenute in quindici anni di studi sulla evoluzione delle tattiche di combattimento delle forze meccanizzate, a partire dalle loro origini nella prima guerra mondiale fino al 1937, anno della pubblicazione. Con questo libro, egli cercò di dimostrare che solo l’uso intelligente di formazioni corazzate avrebbe in futuro permesso alla Germania di conseguire vittorie rapide e decisive, evitando rovinose guerre d’attrito come quella combattuta nel 1914-1918. Malgrado nelle alte sfere della Wehrmacht un certo numero di Ufficiali di idee conservatrici mantenesse un atteggiamento scettico riguardo alle teorie di Guderian, allo scoppio della seconda guerra mondiale egli aveva ormai ottenuto un largo consenso. Fu così che negli anni vittoriosi tra il 1939 e il 1942 le Panzer-Division furono la punta di diamante dell’Esercito tedesco. Questa nuova edizione italiana presenta un’ampliata appendice iconografica con fotografie in bianco e nero e a colori, oltre a mappe e illustrazioni dell’edizione originale tedesca.",
                "prezzo": "32,00 euro",
                "link_IBS": "https://www.ibs.it/achtung-panzer-sviluppo-tattiche-potenziale-libro-heinz-guderian/e/9788831430272"
            },

            {
                "titolo": "Il mulo",
                "sottotitolo": "L'ibrido alpino",
                "autore": "Fabio Palladini",
                "pagine": "190 p., ill., Brossura",
                "anno di pubblicazione": "2023",
                "descrizione": "«Quando ho letto il titolo del libro del Generale Fabio Palladini, ho immediatamente apprezzato l’accostamento del concetto di ibrido con la figura del mulo, per secoli supporto indispensabile per i trasporti in ambiente montano. Nello stesso tempo mi sono imbattuto in nozioni che si apprendevano principalmente in scuderia, ma anche nel cortile delle caserme delle Truppe Alpine, così come nelle marce di addestramento, durante le escursioni invernali ed estive e le scuole tiro. Condivido lo spirito con cui questo libro è stato scritto, ovvero far ritornare alla mente ricordi di vita militare, di “naja alpina”, come la definisce l’Autore, ma, soprattutto, ho colto il messaggio di fornire, a chi non ne fosse a conoscenza, un motivo di riflessione sul ruolo del mulo nei Reparti Alpini. La scuderia era scuola di vita e chi si è approcciato ai muli ha sicuramente imparato anche a conoscere meglio gli uomini. Pertanto, aldilà di un doveroso inquadramento storico sull’impiego del mulo nel Regio Esercito (il cui inizio coincide con la nascita degli Alpini nel 1872), il libro riporta le conoscenze e le tecniche che erano alla base del suo impiego nelle Batterie di Artiglieria da Montagna e nelle compagnie mortai dei Battaglioni Alpini e tratteggia con dovizia di particolari, noti solo a chi ha vissuto quella bellissima realtà, i problemi che comportava il movimento di unità someggiate in terreni vari e nelle più diverse condizioni ambientali». Dalla prefazione del Presidente Associazione Nazionale Alpini Sebastiano Favero.",
                "prezzo": "24,00 euro",
                "link_IBS": "https://www.ibs.it/mulo-ibrido-alpino-libro-fabio-palladini/e/9788831430265"
            },

            {
                "titolo": "L’ultima Blitzkrieg",
                "sottotitolo": "Le Campagne della Wehrmacht nei Balcani: Jugoslavia, Grecia e Creta, aprile-maggio 1941",
                "autore": "Dr. Greiner, Generale Müller-Hillebrand, Generale von Greiffenberg",
                "pagine": "236 p., ill. con foto bn e colori e mappe, Brossura", 
                "anno di pubblicazione": "2022",
                "descrizione": "Questo studio descrive le Campagne tedesche nei Balcani e la conquista di Creta entro il quadro generale della strategia politica e militare di Hitler, e si basa principalmente su documenti tedeschi originali e scritti militari postbellici del Dr. Helmut Greiner, il responsabile della compilazione del Diario di guerra della Wehrmacht, e dei Generali Burkhart Müller-Hillebrand e Hans von Greiffenberg, oltre che da materiale proveniente da fonti statunitensi e inglesi. Il testo descrive non solo le operazioni militari, ma anche le complesse manovre politiche dell’Asse, delle nazioni balcaniche e degli Alleati nel 1940-1941, e analizza la discussa questione del rapporto esistente tra le Campagne nei Balcani e l’invasione della Russia, e sulle conseguenze che ebbero sulla pianificazione e sull'esecuzione dell’Operazione Barbarossa.L’appendice iconografica presenta mappe in bianco nero e a colori, le fotografie incluse nel documento originale e una nuova sezione con numerose immagini d’archivio e dei Kriegsberichter tedeschi.",
                "prezzo": "24,00 euro",
                "link_IBS": "https://www.ibs.it/ultima-blitzkrieg-campagne-della-wehrmacht-libro-vari/e/9788831430234?queryId=42a060aa838ed9c0eef966786f4745a2"
            },

            {
                "titolo": "La Divisione “Monterosa” nelle voci dei suoi Alpini",
                "sottotitolo": "Münsingen - Liguria - Garfagnana - Alpi occidentali - Coltano",
                "autore": "a cura di Davide Del Giudice",
                "pagine": "508 pagg., ill. con foto bn e mappe, Brossura",
                "anno di pubblicazione": "2022",
                "descrizione": "Questo libro contiene le memorie di guerra della Divisione Alpina “Monterosa” dell’ENR, edite nell’omonimo bollettino dei veterani della Divisione dal 1988 al 2012, anno in cui fu dato alle stampe l’ultimo numero. Il volume raccoglie queste testimonianze in presa diretta riunendole in capitoli sull’addestramento in Germania e sulle azioni nei vari fronti operativi, dalla Liguria alla Garfagnana e alle Alpi Occidentali, e raggruppandole per reparti. L’opera si conclude con i resoconti sui drammatici avvenimenti a cavallo del 25 aprile e sulla prigionia a Coltano e il ricordo degli scomparsi, ed è corredata di numerose fotografie, in parte inedite.",
                "prezzo": "35,00 euro",
                "link_IBS": "https://www.ibs.it/volare-mia-vita-memorie-della-libro-hanna-reitsch/e/9788831430340?queryId=1410537f87d7881c423956e81950fd60"
            },     
            
            {
                "titolo": "Il sognatore con l'elmetto",
                "sottotitolo": "Le memorie di un giovane volontario della Divisione SS «Charlemagne» nel libro-verità che scosse la Francia",
                "autore": "Christian de La Mazière",
                "pagine": "402 p., ill., Brossura",
                "anno di pubblicazione": "2022",
                "descrizione": "Christian de La Mazière fu giornalista per 'Le Pays libre', un quotidiano minore della Collaborazione, volontario nella Divisione SS 'Charlemagne' negli ultimi combattimenti sul fronte orientale, e nel dopoguerra esperto di pubbliche relazioni del cinema internazionale e amante di Juliette Gréco e Dalida: nelle sue memorie, inedite in italiano e che alla loro uscita in Francia nel 1972 furono un vero e proprio caso letterario, il 'romanzo di formazione' di un giovane idealista dalla Parigi dell'estate 1944 al viaggio attraverso una Germania straziata dalle bombe Alleate sino al campo d'addestramento di Wildflecken, e all'invio in Pomerania contro i T-34 e Stalin sovietici dilaganti verso ovest, tra colonne di profughi e combattimenti disperati. Quindi, l'odissea nelle foreste baltiche dei superstiti stremati del suo reparto, la resa, la prigionia sovietica e il rientro in Francia, il processo per collaborazionismo e il suo trasferimento da un carcere all'altro, da Fresnes alla cupa ex abbazia di Clairvaux, un folle universo carcerario popolato da criminali comuni d'ogni sorta e detenuti politici, sino al suo rilascio nel 1948, tra i resti delle sue illusioni perdute.",
                "prezzo": "25,00 euro",
                "link_IBS": "https://www.ibs.it/sognatore-con-elmetto-memorie-di-libro-christian-de-la-maziere/e/9788831430197?queryId=4ee58d6f57910da25b14c27026fe5cd7"
            },
            
            {
                "titolo": "1945 Germania anno zero",
                "sottotitolo": "Atrocità e crimini di guerra Alleati nel «memorandum di Darmstadt»",
                "autore": "Massimo Lucioli - Wehrmacht Research Group",
                "pagine": "542 p., ill., Brossura",
                "anno di pubblicazione": "2021",
                "descrizione": "Nel campo di internamento americano 91 a Darmstadt, nel 1946, in segreto, su richiesta del collegio di difesa di Norimberga, fu formato un comitato di lavoro di avvocati internati, davanti al quale circa 6.000 testimoni diretti fecero dichiarazioni giurate da aprile a luglio 1946 sulle violazioni delle leggi e delle regole di guerra da parte degli Alleati: dagli eccidi dei tedeschi etnici in Polonia nel 1939 alle uccisioni dei prigionieri di guerra da parte sovietica prima - spesso con casi di torture e mutilazioni - e Alleata poi, dalle violenze sessuali e brutalità contro i civili dei soldati Alleati agli stupri di gruppo e massacri di massa sovietici nelle province orientali della Germania nel 1944-1945, sino all'applicazione delle draconiane misure punitive del piano Morgenthau e della direttiva JCS-1067 statunitense contro le 'forze nemiche disarmate' tedesche nei campi di prigionia in Germania e Francia e contro la popolazione tedesca stremata dalla guerra. Per la prima volta tale raccolta viene pubblicata in italiano, assieme a una sconvolgente raccolta di immagini, molte delle quali inedite, illustrante questi crimini di guerra e contro l'umanità spesso taciuti.",
                "prezzo": "36,00 euro",
                "link_IBS": "https://www.ibs.it/1945-germania-anno-zero-atrocita-libro-massimo-lucioli-wehrmacht-research-group/e/9788831430159?queryId=f13c9fb4cbe7733518753947a94e81db"
            },

            {
                "titolo": "Volare, la mia vita",
                "sottotitolo": "Le memorie della famosa pilota collaudatrice della Luftwaffe",
                "autore": "Hanna Reitsch",
                "pagine": "278 p., ill., Brossura",
                "anno di pubblicazione": "2021",
                "descrizione": "Hanna Reitsch, già detentrice negli anni 1920-1930 di un gran numero di primati di volo a vela, pilotò quale pilota collaudatrice quasi tutti gli aerei militari tedeschi durante la seconda guerra mondiale, dal famoso caccia Focke-Wulf Fw 190 al gigantesco aliante da trasporto Me 321 'Gigant' al pericoloso aereo a razzo Me 163 'Komet'. Svolse inoltre un ruolo importante nello sviluppo delle V1 pilotate suicide, e di altri aerei e equipaggiamenti sperimentali della Luftwaffe, Fu poi lei quella che riuscì ad atterrare nella Berlino assediata dai sovietici nell'aprile del 1945 con il Feldmaresciallo Ritter von Greim, nominato da Adolf Hitler ultimo comandante in capo della Luftwaffe. In Germania è stata una figura leggendaria, e da ogni punto di vista è uno dei più grandi piloti che il mondo abbia mai conosciuto. Questa è la sua storia personale. È uno dei libri di guerra più illuminanti che siano usciti dalla Germania, fornendo una panoramica dei piani della Luftwaffe in molte fasi del conflitto. In appendice, un approfondimento sulle donne pilota tedesche nella seconda guerra mondiale, e più di 160 fotografie in bianco e nero e colori. Prefazione di Cristina Di Giorgi.",
                "prezzo": "26,00 euro",
                "link_IBS": "https://www.ibs.it/volare-mia-vita-memorie-della-libro-hanna-reitsch/e/9788831430340?queryId=1410537f87d7881c423956e81950fd60"
            }

        ],

        // Proprietà windowWidth per salvare la dimensione dello schermo (passaggio 1)
        windowWidth: 0,

        /* Se fosse stato un oggetto con altezza e larghezza:
        window: {
            width: 0,
            height: 0

        } */

        normalWidth: false,
        specialWidth: false,
        duoWidth: false,
        monoWidth: false,
        bookWidth: 0,
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

        /* Controlla la larghezza dello schermo e passa il valore alla funzione resize a mounted e destroyed.
        Il valore di width in data viene aggiornato da 0 a valore corrente.
        (passaggio 2) */
        handleResize() {
            this.windowWidth = window.innerWidth;
        },

        /* Controlla la gestione dei radiobutton del carosello */
        slideBullet() {

            // Selezioniamo dal Dom i dots
            let dots = document.querySelectorAll('.carousel_bullet');
            let dotsArray = Array.from(dots);

            let currentIndex = 0;

            // Rimuoviamo la classe selected da tutti gli elementi
            slides.forEach(function (slide)  {
                slide.classList.remove('selected');
            });

            for (let i = 0; i < dots.length; i++) {

                // Salviamo l'indice dell'elemento attivo --> variabile currentIndex
                // Aggiungiamo la classe selected all'elemento cliccato
                if (dots[i] === document.activeElement) {
                    currentIndex = i;
                    dots[currentIndex].classList.add('selected');

                    // Muoviamo le slide
                    slides[currentIndex].style.transform = `translateX(${bezierValue[i]}%)`;

                    // Aggiungiamo la classe selected solo a quella con indice corrente
                    slides[currentIndex].classList.add("selected");
                }

            }

            // Aggiorniamo il counter
            this.counter = currentIndex;


        },

       

    },

    watch: {
        // Quando il valore di windowWidth cambia, fai partire questa funzione
        windowWidth: function () {

            // Sezione JUMBOTRON

            // Se lo schermo ha una larghezza compresa tra 625px e 999px vanno cambiati l'HTML e il top% del titolo
            let jumboTitleParent = document.getElementsByClassName('main_title');

            if (this.windowWidth >= 300 && this.windowWidth < 1000) {

                // Eliminiamo il nodo che contiene il titolo formattato male selezionando il genitore
                jumboTitleParent[0].children[1].remove();

                // Sostituiamo con l'HTML che divide il titolo in due
                jumboTitleParent[0].innerHTML =

                '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1 class="special_title"> ITALIA </h1> <br> <h1 class="special_title_second"> Storica </h1>';

            } else {

                // Ripristiniamo l'HTML originale
                jumboTitleParent[0].innerHTML =

                '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1> ITALIA Storica </h1>'
            }

            // Sezione CORE

            // Salva in una variabile l'elemento HTML che ha id book_change
            let column = document.getElementById("book_change");

            /* Se la larghezza dello schermo è uguale o inferiore di 1200px aggiungi le classi order-last e order-css
            se c'è, rimuovi la classe order-first */
            if (this.windowWidth < 1200) {
                // column.classList.toggle("order-first", false);
                // column.classList.add("order-last");
                column.classList.add("order-css");

            /* Altrimenti, se larghezza dello schermo è maggiore di 1200px aggiungi la classe order-first
            se c'è, rimuovi le classi order-last e order-css */
            } 
            
            // else {
                // column.classList.add("order-first");
                // column.classList.toggle("order-last", false);
                // column.classList.toggle("order-css", false);
            // }

            // Gestiamo i div da 1200 a 2750px 

            // Aggiungiamo i div
            if (this.windowWidth >= 2001) {

                let divNode = document.querySelectorAll("#book_main > div");
                
                // Se il numero di nodi-figli di divNode è pari a 2
                if (divNode.length == 2) {

                    // Aggiungiamo un div all'inizio di book_main
                    const createDiv = document.createElement("div");
                    let bookMain = document.getElementById("book_main");
                    bookMain.prepend(createDiv);

                }  
            } else if (this.windowWidth < 2001) {

                let divNode = document.querySelectorAll("#book_main > div");

                // Se il numero di nodi-figli di divNode > 2
                if (divNode.length > 2) {

                    // Rimuoviamo il primo div (quello vuoto)
                    let bookMainLong = document.querySelector("#book_main > div:nth-child(1)");
                    
                    divNode[0].remove(bookMainLong);

                }  
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

                // Ripristiniamo i "vecchi" parent nodes con le card copiando pari l'HTML originale (nota l'operatore +=)
                cardContainer[0].innerHTML +=

                ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>'
                + '<br> </p> <a href="public/ItaliaStoricaCatalogoIV-2022.pdf" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> '

                +

                ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>'
                + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>'

                +

                ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>'
                + '<br> </p> <a href="https://www.libroco.it/editore/ITALIA+Storica/240970" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> '

            }

            // Sezione PERSONAL
            
            // Gestiamo la posizione del primo paragrafo sotto la pic
            if (this.windowWidth >= 2751) {
                
               // Il nodo corrispondente al paragrafo grazie al CCS sparisce (ma non viene rimosso dal DOM)
                
               let pic = document.getElementById("pic");
               
               // Cloniamo il nodo paragrafo che ci interessa e lo salviamo in una variabile
               let clonePicP = pic.children[1].cloneNode(true);
               
               // Selezioniamo la posizione in cui inserire il paragrafo clonato
               let gridBlock = document.getElementsByClassName("grid-block");

               // Se il numero di nodi-figli di gridBlock è < 6
               if (gridBlock[0].childElementCount < 6) {

                    // Aggiungiamo il paragrafo clonato come primo figlio del div con classe gridBlock
                    gridBlock[0].prepend(clonePicP);
                }

            }  else  {

                // Ripristiniamo il paragrafo originale
                document.querySelector("#pic > p").style.display = "block";

                // Selezioniamo la posizione in cui inserire il paragrafo clonato
                let gridBlock = document.getElementsByClassName("grid-block");

                // Se il numero di nodi-figli di gridBlock è = 6
                if (gridBlock[0].childElementCount >= 6) {
                    // Cancelliamo il paragrafo clonato
                    gridBlock[0].children[0].remove();
                }
            }

            // Gestiamo le spaziature dei li dei libri 
            if (this.windowWidth <= 999) {

                // Selezioniamo i li delle due liste di libri
                let booklist1 = document.getElementById("list1");
                let booklist2 = document.getElementById("list2");

                let booklistElement1 = booklist1.children;
                let booklistElement2 = booklist2.children;

                let blelArray1 = Array.from(booklistElement1);
                let blelArray2 = Array.from(booklistElement2);


                // Mappiamo gli array per aggiornare con <br> la parte HTML dei li
                let mapBooklist1 = blelArray1.map(listItem => {
                    let maphtml1 = "<li>" + listItem.textContent + "<br><br></li>";

                    return maphtml1

                });

                let mapBooklist2 = blelArray2.map(listItem => {
                    let maphtml2 = "<li>" + listItem.textContent + "<br><br></li>";

                    return maphtml2
                });

                // Rimuoviamo l'HTML esistente
                blelArray1.forEach((item) => {
                    item.remove();

                });

                blelArray2.forEach((item) => {
                   item.remove();
                });

                // Visualizziamo il nuovo HTML mappato
                booklist1.insertAdjacentHTML("afterbegin", mapBooklist1.join(""));
                booklist2.insertAdjacentHTML("afterbegin", mapBooklist2.join(""));

            } else if (this.windowWidth > 999) {350

                let booklist1 = document.getElementById("list1");
                let booklist2 = document.getElementById("list2");

                let booklistElement1 = booklist1.children;
                let booklistElement2 = booklist2.children;

                let blelArray1 = Array.from(booklistElement1);
                let blelArray2 = Array.from(booklistElement2);


                // Mappiamo gli array per aggiornare con <br> la parte HTML dei li
                let mapBooklist1 = blelArray1.map(listItem => {
                    let maphtml1 = "<li>" + listItem.textContent + "<br></li>";

                    return maphtml1

                });

                let mapBooklist2 = blelArray2.map(listItem => {
                    let maphtml2 = "<li>" + listItem.textContent + "<br></li>";

                    return maphtml2
                });

                 // Rimuoviamo l'HTML esistente
                 blelArray1.forEach((item) => {
                    item.remove();

                });

                blelArray2.forEach((item) => {
                   item.remove();
                });

                // Visualizziamo l'HTML originale
                booklist1.insertAdjacentHTML("afterbegin", mapBooklist1.join(""));
                booklist2.insertAdjacentHTML("afterbegin", mapBooklist2.join(""));
            }

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

            /* Se la larghezza dello schermo è uguale o inferiore di 1650px aggiungi la classe col-lg-12 a form e map */
            if (this.windowWidth <= 1650) {
                form.classList.add("col-lg-12");                
                map.classList.add("col-lg-12");

            /* Altrimenti, se larghezza dello schermo è maggiore di 1650px se c'è, rimuovi la classe col-lg-12 a entrambi */

            } else {
                form.classList.toggle("col-lg-12", false);
                map.classList.toggle("col-lg-12", false);
            }

        },
    }

})

/*=====  End of VUE SECTION block  ======*/


/*=================================================
=            VANILLA JAVASCRIPT SECTION           =
==================================================*/


/*---------- Subsection Carousel  ----------*/

// Select all slides
const slides = document.querySelectorAll(".slide");

// current slide counter
let curSlide = 0;

// Maximum number of slides
let maxSlide = slides.length - 1;

let bezierValue = [0, -100, -200, -300, -400, -500, -600];

// Loop through slides and set each slides translateX initial value property to index * 100%
slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * (-100)}%)`;
});


// ARROWS E MOVIMENTO DEL CAROSELLO

/* FRECCIA DESTRA */

// select next slide button
const nextArrow = document.querySelector(".btn-next");

// add event listener and navigation functionality
nextArrow.addEventListener("click", function () {

    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    // gestione classe selected
    slides[curSlide].classList.add("selected");

    if (slides[curSlide -1] !== undefined) {
        slides[curSlide -1].classList.remove("selected");
    }

    // se sia l'elemento 0 che l'elemento massimo dell'array hanno la classe selected, toglila all'elemento massimo
    if (curSlide == 0 && slides[maxSlide].classList.contains("selected")) {
        slides[maxSlide].classList.remove("selected");
    }


    // move slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${bezierValue[index]}%)`;

        if (`translateX(${bezierValue[index]}%)` == 0) {
            slide.style.transform = `translateX(100%)`;
        }
    });

});


/* FRECCIA SINISTRA */

// select prev slide button
const prevArrow = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevArrow.addEventListener("click", function () {

    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    // gestione classe selected
    slides[curSlide].classList.add("selected");

    if (slides[curSlide + 1] !== undefined) {
        slides[curSlide + 1].classList.remove("selected");
    }

    // se sia l'elemento 0 che l'elemento massimo dell'array hanno la classe selected, toglila all'elemento 0
    if (curSlide == maxSlide && slides[0].classList.contains("selected")) {
        slides[0].classList.remove("selected");
    }

    // move slide
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${bezierValue[index]}%)`;
    });


});


/*---------- End Subsection Carousel  ----------*/


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

    // Selezioniamo la mail inserita nel form e la salviamo in una variabile
    let name = document.getElementById('namesurname').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let mailbody = document.getElementById('mailbody').value;

    // Variabile di tipo regExp - oggetto Javascript
    // Espressione regolare per l'email (username + @ + dominio + . + estensione del dominio TLD )
    let regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,10})$/;

    let regEmail = regx.test(email);

    // Verifica l'espressione regolare.
    console.log(regEmail);

    // Se tutto è ok, convalida i dati e inviali alla pagina
    if (regEmail) {

        // Costruiamo l'oggetto che conterrà i dati da inviare
        let formdata = {};

        formdata = {
            name: name,
            email: email,
            subject: subject,
            message: mailbody
        }

        // Trasformiamo formdata in un oggetto Json
        let jason = JSON.stringify(formdata).serializeArray();

        // Chiamata AJAX al server
        let xhr = new XMLHttpRequest();

        xhr.open( "POST", "form.php", true);

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {

                console.log(`Grazie ${name} per averci scritto. Ti risponderemo al più presto.`);

            }
        }

        xhr.setRequestHeader("Content-type", "multipart/form-data;", "charset=UTF-8");

        xhr.onerror = function () {
            console.log(this.status, this.statusText);
        }

        xhr.send(jason);

    // Se falso l'indirizzo mail è scritto sbagliato
    } else {

        // Selezioniamo il div con il messaggio di errore (displayNone)
        let invalidEmail = document.querySelector('.error');

        // Rendiamo visibile il div
        invalidEmail.setAttribute('style', 'display:inline-block !important');

        // Impostiamo l'outline color di errore
        let invalidInput = document.getElementById('email');

        invalidInput.style.outline = "thin solid rgb(244, 124, 32)";

        // Usciamo dalla funzione senza inviare il file
        return false;
    }

}

/*---------- End Subsection Validation Form  ----------*/


/*=====  End of VANILLA JAVASCRIPT SECTION ======*/





