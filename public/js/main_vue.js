/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main_vue.js":
/*!*************************!*\
  !*** ./src/main_vue.js ***!
  \*************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*=============================================
    =            VUE SECTION           =
=============================================*/
Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    images: ["public/img/carousel0.jpg", "public/img/carousel1.jpg", "public/img/carousel2.jpg", "public/img/carousel3.jpg", "public/img/carousel4.jpg", "public/img/carousel5.jpg", "public/img/carousel6.jpg"],
    libri: [{
      "titolo": "Kommando! ",
      "sottotitolo": "Le Forze Speciali tedesche nella Seconda guerra mondiale",
      "autore": "James Lucas",
      "pagine": "586 pagg, ill. bn e colori.",
      "anno di pubblicazione": "2023",
      "descrizione": "In questa prima edizione italiana, annotata e ampliata, del best seller dello storico militare inglese James Lucas sono ricostruite grazie a documenti d’archivio e testimonianze di veterani le operazioni delle Forze Speciali tedesche nella seconda guerra mondiale: dalle azioni commando in uniforme nemica della “Brandenburg” in Belgio, in Russia e in Nord Africa e le operazioni dei Fallschirmjäger a Eben Emael, in Tunisia e nelle Ardenne, all’attacco dei Fallschirmjäger SS al Quartier Generale del Maresciallo Tito a Drvar e le missioni dei Kommando di Otto Skorzeny. Quindi sono prese in esame le operazioni dei nuotatori d’assalto, barchini esplosivi, siluri pilotati e sommergibili tascabili delle Kleinkampfverbände della Kriegsmarine, per poi passare ai reparti aerei speciali della Luftwaffe, con le missioni segrete su ogni fronte e gli attacchi con i velivoli compositi Mistel dei piloti del Kampfgeschwader KG 200, la difesa dei cieli della Germania dei Messerschmitt Me 262 della Jagdverband JV 44 e dei caccia Rammjäger e del Sonderkommando Elbe, per terminare con le ultime, disperate azioni di guerriglia dei Werwolf e Freikorps. La coinvolgente narrazione del testo è accompagnata in questa edizione da centinaia di rare e inedite fotografie in azione dei reparti trattati, da immagini a colori di Soldbuch e Wehrpass di appartenenti alla “Brandenburg”, ai Fallschirmjäger SS e al KG 200 e altri rari documenti personali provenienti da collezioni private e da mappe, ordini di battaglia e cronologie delle operazioni.",
      "prezzo": "39,00 euro",
      "link_IBS": "https://www.ibs.it/kommando-forze-speciali-tedesche-nella-libro-james-lucas/e/9788831430302?queryId=cdcc5d0d15e21a1abb8c53a67317202f"
    }, {
      "titolo": "ACHTUNG - PANZER!",
      "sottotitolo": "Sviluppo, tattiche e potenziale operativo delle forze corazzate",
      "autore": "Heinz Guderian",
      "pagine": "286 pagg., ill. bn e colori.",
      "anno di pubblicazione": "2023",
      "descrizione": "Achtung – Panzer! è uno dei più significativi libri a carattere teorico-militare del XX secolo. Heinz Guderian raffinò le idee in esso contenute in quindici anni di studi sulla evoluzione delle tattiche di combattimento delle forze meccanizzate, a partire dalle loro origini nella prima guerra mondiale fino al 1937, anno della pubblicazione. Con questo libro, egli cercò di dimostrare che solo l’uso intelligente di formazioni corazzate avrebbe in futuro permesso alla Germania di conseguire vittorie rapide e decisive, evitando rovinose guerre d’attrito come quella combattuta nel 1914-1918. Malgrado nelle alte sfere della Wehrmacht un certo numero di Ufficiali di idee conservatrici mantenesse un atteggiamento scettico riguardo alle teorie di Guderian, allo scoppio della seconda guerra mondiale egli aveva ormai ottenuto un largo consenso. Fu così che negli anni vittoriosi tra il 1939 e il 1942 le Panzer-Division furono la punta di diamante dell’Esercito tedesco. Questa nuova edizione italiana presenta un’ampliata appendice iconografica con fotografie in bianco e nero e a colori, oltre a mappe e illustrazioni dell’edizione originale tedesca.",
      "prezzo": "32,00 euro",
      "link_IBS": "https://www.ibs.it/achtung-panzer-sviluppo-tattiche-potenziale-libro-heinz-guderian/e/9788831430272"
    }, {
      "titolo": "Il mulo",
      "sottotitolo": "L'ibrido alpino",
      "autore": "Fabio Palladini",
      "pagine": "190 p., ill., Brossura",
      "anno di pubblicazione": "2023",
      "descrizione": "«Quando ho letto il titolo del libro del Generale Fabio Palladini, ho immediatamente apprezzato l’accostamento del concetto di ibrido con la figura del mulo, per secoli supporto indispensabile per i trasporti in ambiente montano. Nello stesso tempo mi sono imbattuto in nozioni che si apprendevano principalmente in scuderia, ma anche nel cortile delle caserme delle Truppe Alpine, così come nelle marce di addestramento, durante le escursioni invernali ed estive e le scuole tiro. Condivido lo spirito con cui questo libro è stato scritto, ovvero far ritornare alla mente ricordi di vita militare, di “naja alpina”, come la definisce l’Autore, ma, soprattutto, ho colto il messaggio di fornire, a chi non ne fosse a conoscenza, un motivo di riflessione sul ruolo del mulo nei Reparti Alpini. La scuderia era scuola di vita e chi si è approcciato ai muli ha sicuramente imparato anche a conoscere meglio gli uomini. Pertanto, aldilà di un doveroso inquadramento storico sull’impiego del mulo nel Regio Esercito (il cui inizio coincide con la nascita degli Alpini nel 1872), il libro riporta le conoscenze e le tecniche che erano alla base del suo impiego nelle Batterie di Artiglieria da Montagna e nelle compagnie mortai dei Battaglioni Alpini e tratteggia con dovizia di particolari, noti solo a chi ha vissuto quella bellissima realtà, i problemi che comportava il movimento di unità someggiate in terreni vari e nelle più diverse condizioni ambientali». Dalla prefazione del Presidente Associazione Nazionale Alpini Sebastiano Favero.",
      "prezzo": "24,00 euro",
      "link_IBS": "https://www.ibs.it/mulo-ibrido-alpino-libro-fabio-palladini/e/9788831430265"
    }, {
      "titolo": "L’ultima Blitzkrieg",
      "sottotitolo": "Le Campagne della Wehrmacht nei Balcani: Jugoslavia, Grecia e Creta, aprile-maggio 1941",
      "autore": "Dr. Greiner, Generale Müller-Hillebrand, Generale von Greiffenberg",
      "pagine": "236 p., ill. con foto bn e colori e mappe, Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "Questo studio descrive le Campagne tedesche nei Balcani e la conquista di Creta entro il quadro generale della strategia politica e militare di Hitler, e si basa principalmente su documenti tedeschi originali e scritti militari postbellici del Dr. Helmut Greiner, il responsabile della compilazione del Diario di guerra della Wehrmacht, e dei Generali Burkhart Müller-Hillebrand e Hans von Greiffenberg, oltre che da materiale proveniente da fonti statunitensi e inglesi. Il testo descrive non solo le operazioni militari, ma anche le complesse manovre politiche dell’Asse, delle nazioni balcaniche e degli Alleati nel 1940-1941, e analizza la discussa questione del rapporto esistente tra le Campagne nei Balcani e l’invasione della Russia, e sulle conseguenze che ebbero sulla pianificazione e sull'esecuzione dell’Operazione Barbarossa.L’appendice iconografica presenta mappe in bianco nero e a colori, le fotografie incluse nel documento originale e una nuova sezione con numerose immagini d’archivio e dei Kriegsberichter tedeschi.",
      "prezzo": "24,00 euro",
      "link_IBS": "https://www.ibs.it/ultima-blitzkrieg-campagne-della-wehrmacht-libro-vari/e/9788831430234?queryId=42a060aa838ed9c0eef966786f4745a2"
    }, {
      "titolo": "La Divisione “Monterosa” nelle voci dei suoi Alpini",
      "sottotitolo": "Münsingen - Liguria - Garfagnana - Alpi occidentali - Coltano",
      "autore": "a cura di Davide Del Giudice",
      "pagine": "508 pagg., ill. con foto bn e mappe, Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "Questo libro contiene le memorie di guerra della Divisione Alpina “Monterosa” dell’ENR, edite nell’omonimo bollettino dei veterani della Divisione dal 1988 al 2012, anno in cui fu dato alle stampe l’ultimo numero. Il volume raccoglie queste testimonianze in presa diretta riunendole in capitoli sull’addestramento in Germania e sulle azioni nei vari fronti operativi, dalla Liguria alla Garfagnana e alle Alpi Occidentali, e raggruppandole per reparti. L’opera si conclude con i resoconti sui drammatici avvenimenti a cavallo del 25 aprile e sulla prigionia a Coltano e il ricordo degli scomparsi, ed è corredata di numerose fotografie, in parte inedite.",
      "prezzo": "35,00 euro",
      "link_IBS": "https://www.ibs.it/volare-mia-vita-memorie-della-libro-hanna-reitsch/e/9788831430340?queryId=1410537f87d7881c423956e81950fd60"
    }, {
      "titolo": "Il sognatore con l'elmetto",
      "sottotitolo": "Le memorie di un giovane volontario della Divisione SS «Charlemagne» nel libro-verità che scosse la Francia",
      "autore": "Christian de La Mazière",
      "pagine": "402 p., ill., Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "Christian de La Mazière fu giornalista per 'Le Pays libre', un quotidiano minore della Collaborazione, volontario nella Divisione SS 'Charlemagne' negli ultimi combattimenti sul fronte orientale, e nel dopoguerra esperto di pubbliche relazioni del cinema internazionale e amante di Juliette Gréco e Dalida: nelle sue memorie, inedite in italiano e che alla loro uscita in Francia nel 1972 furono un vero e proprio caso letterario, il 'romanzo di formazione' di un giovane idealista dalla Parigi dell'estate 1944 al viaggio attraverso una Germania straziata dalle bombe Alleate sino al campo d'addestramento di Wildflecken, e all'invio in Pomerania contro i T-34 e Stalin sovietici dilaganti verso ovest, tra colonne di profughi e combattimenti disperati. Quindi, l'odissea nelle foreste baltiche dei superstiti stremati del suo reparto, la resa, la prigionia sovietica e il rientro in Francia, il processo per collaborazionismo e il suo trasferimento da un carcere all'altro, da Fresnes alla cupa ex abbazia di Clairvaux, un folle universo carcerario popolato da criminali comuni d'ogni sorta e detenuti politici, sino al suo rilascio nel 1948, tra i resti delle sue illusioni perdute.",
      "prezzo": "25,00 euro",
      "link_IBS": "https://www.ibs.it/sognatore-con-elmetto-memorie-di-libro-christian-de-la-maziere/e/9788831430197?queryId=4ee58d6f57910da25b14c27026fe5cd7"
    }, {
      "titolo": "Volare, la mia vita",
      "sottotitolo": "Le memorie della famosa pilota collaudatrice della Luftwaffe",
      "autore": "Hanna Reitsch",
      "pagine": "278 p., ill., Brossura",
      "anno di pubblicazione": "2021",
      "descrizione": "Hanna Reitsch, già detentrice negli anni 1920-1930 di un gran numero di primati di volo a vela, pilotò quale pilota collaudatrice quasi tutti gli aerei militari tedeschi durante la seconda guerra mondiale, dal famoso caccia Focke-Wulf Fw 190 al gigantesco aliante da trasporto Me 321 'Gigant' al pericoloso aereo a razzo Me 163 'Komet'. Svolse inoltre un ruolo importante nello sviluppo delle V1 pilotate suicide, e di altri aerei e equipaggiamenti sperimentali della Luftwaffe, Fu poi lei quella che riuscì ad atterrare nella Berlino assediata dai sovietici nell'aprile del 1945 con il Feldmaresciallo Ritter von Greim, nominato da Adolf Hitler ultimo comandante in capo della Luftwaffe. In Germania è stata una figura leggendaria, e da ogni punto di vista è uno dei più grandi piloti che il mondo abbia mai conosciuto. Questa è la sua storia personale. È uno dei libri di guerra più illuminanti che siano usciti dalla Germania, fornendo una panoramica dei piani della Luftwaffe in molte fasi del conflitto. In appendice, un approfondimento sulle donne pilota tedesche nella seconda guerra mondiale, e più di 160 fotografie in bianco e nero e colori. Prefazione di Cristina Di Giorgi.",
      "prezzo": "26,00 euro",
      "link_IBS": "https://www.ibs.it/volare-mia-vita-memorie-della-libro-hanna-reitsch/e/9788831430340?queryId=1410537f87d7881c423956e81950fd60"
    }],
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
    bookWidth: 0
  },
  /* Controlla la larghezza dello schermo in modo dinamico da quando viene caricata o distrutta
  l'istanza Vue (mounted e destroyed) tramite il richiamo della funzione handleResize
  (passaggio 3) */
  mounted: function mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    nextImg: function nextImg() {
      this.counter++;
      if (this.counter === this.images.length) {
        this.counter = 0;
      }
    },
    prevImg: function prevImg() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = this.images.length - 1;
      }
    },
    /* Controlla la larghezza dello schermo e passa il valore alla funzione resize a mounted e destroyed.
    Il valore di width in data viene aggiornato da 0 a valore corrente.
    (passaggio 2) */
    handleResize: function handleResize() {
      this.windowWidth = window.innerWidth;
    },
    /* Controlla la gestione dei radiobutton del carosello */slideBullet: function slideBullet() {
      // Selezioniamo dal Dom i dots
      var dots = document.querySelectorAll('.carousel_bullet');
      var dotsArray = Array.from(dots);
      var currentIndex = 0;

      // Rimuoviamo la classe selected da tutti gli elementi
      slides.forEach(function (slide) {
        slide.classList.remove('selected');
      });
      for (var i = 0; i < dots.length; i++) {
        // Salviamo l'indice dell'elemento attivo --> variabile currentIndex
        // Aggiungiamo la classe selected all'elemento cliccato
        if (dots[i] === document.activeElement) {
          currentIndex = i;
          dots[currentIndex].classList.add('selected');

          // Muoviamo le slide
          slides[currentIndex].style.transform = "translateX(".concat(bezierValue[i], "%)");

          // Aggiungiamo la classe selected solo a quella con indice corrente
          slides[currentIndex].classList.add("selected");
        }
      }

      // Aggiorniamo il counter
      this.counter = currentIndex;
    }
  },
  watch: {
    // Quando il valore di windowWidth cambia, fai partire questa funzione
    windowWidth: function windowWidth() {
      // Sezione JUMBOTRON

      // Se lo schermo ha una larghezza compresa tra 625px e 999px vanno cambiati l'HTML e il top% del titolo
      var jumboTitleParent = document.getElementsByClassName('main_title');
      if (this.windowWidth >= 300 && this.windowWidth < 1000) {
        // Eliminiamo il nodo che contiene il titolo formattato male selezionando il genitore
        jumboTitleParent[0].children[1].remove();

        // Sostituiamo con l'HTML che divide il titolo in due
        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1 class="special_title"> ITALIA </h1> <br> <h1 class="special_title_second"> Storica </h1>';
      } else {
        // Ripristiniamo l'HTML originale
        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1> ITALIA Storica </h1>';
      }

      // Sezione CORE

      // Salva in una variabile l'elemento HTML che ha id book_change
      var column = document.getElementById("book_change");

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
        var divNode = document.querySelectorAll("#book_main > div");

        // Se il numero di nodi-figli di divNode è pari a 2
        if (divNode.length == 2) {
          // Aggiungiamo un div all'inizio di book_main
          var createDiv = document.createElement("div");
          var bookMain = document.getElementById("book_main");
          bookMain.prepend(createDiv);
        }
      } else if (this.windowWidth < 2001) {
        var _divNode = document.querySelectorAll("#book_main > div");

        // Se il numero di nodi-figli di divNode > 2
        if (_divNode.length > 2) {
          // Rimuoviamo il primo div (quello vuoto)
          var bookMainLong = document.querySelector("#book_main > div:nth-child(1)");
          _divNode[0].remove(bookMainLong);
        }
      }

      // Sezione ORDER

      /* Quando lo schermo è >= 2000px allora vengono eliminati div che contengono le card e le card assumono le classi card xl-4 lg-4 */

      /* Quando lo schermo è < 2000px allora vengono ripristinati i div originali e le card non hanno più le classi xl-4 e lg-4 */

      // Salva in una variabile l'elemento HTML con classe card container
      var cardContainer = document.getElementsByClassName('card-container');

      // Salva in una variabile gli elementi HTML con classe card
      var cardsPosition = document.querySelectorAll('.card');

      // Trasformiamo cardsPosition in Array
      var cardsPositionArray = Array.from(cardsPosition);

      // Cloniamo i nodi delle cards + discendenti
      var cloneNode = cardsPositionArray[0].cloneNode(true);
      var cloneNode1 = cardsPositionArray[1].cloneNode(true);
      var cloneNode2 = cardsPositionArray[2].cloneNode(true);
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
        for (var i = 0; i < cardsPositionArray.length; i++) {
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
        cardContainer[0].innerHTML += ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="public/ItaliaStoricaCatalogoIV-2022.pdf" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> ' + ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>' + ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.libroco.it/editore/ITALIA+Storica/240970" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> ';
      }

      // Sezione PERSONAL

      // Gestiamo la posizione del primo paragrafo sotto la pic
      if (this.windowWidth >= 2751) {
        // Il nodo corrispondente al paragrafo grazie al CCS sparisce (ma non viene rimosso dal DOM)

        var pic = document.getElementById("pic");

        // Cloniamo il nodo paragrafo che ci interessa e lo salviamo in una variabile
        var clonePicP = pic.children[1].cloneNode(true);

        // Selezioniamo la posizione in cui inserire il paragrafo clonato
        var gridBlock = document.getElementsByClassName("grid-block");

        // Se il numero di nodi-figli di gridBlock è < 6
        if (gridBlock[0].childElementCount < 6) {
          // Aggiungiamo il paragrafo clonato come primo figlio del div con classe gridBlock
          gridBlock[0].prepend(clonePicP);
        }
      } else {
        // Ripristiniamo il paragrafo originale
        document.querySelector("#pic > p").style.display = "block";

        // Selezioniamo la posizione in cui inserire il paragrafo clonato
        var _gridBlock = document.getElementsByClassName("grid-block");

        // Se il numero di nodi-figli di gridBlock è = 6
        if (_gridBlock[0].childElementCount >= 6) {
          // Cancelliamo il paragrafo clonato
          _gridBlock[0].children[0].remove();
        }
      }

      // Gestiamo le spaziature dei li dei libri 
      if (this.windowWidth <= 999) {
        // Selezioniamo i li delle due liste di libri
        var booklist1 = document.getElementById("list1");
        var booklist2 = document.getElementById("list2");
        var booklistElement1 = booklist1.children;
        var booklistElement2 = booklist2.children;
        var blelArray1 = Array.from(booklistElement1);
        var blelArray2 = Array.from(booklistElement2);

        // Mappiamo gli array per aggiornare con <br> la parte HTML dei li
        var mapBooklist1 = blelArray1.map(function (listItem) {
          var maphtml1 = "<li>" + listItem.textContent + "<br><br></li>";
          return maphtml1;
        });
        var mapBooklist2 = blelArray2.map(function (listItem) {
          var maphtml2 = "<li>" + listItem.textContent + "<br><br></li>";
          return maphtml2;
        });

        // Rimuoviamo l'HTML esistente
        blelArray1.forEach(function (item) {
          item.remove();
        });
        blelArray2.forEach(function (item) {
          item.remove();
        });

        // Visualizziamo il nuovo HTML mappato
        booklist1.insertAdjacentHTML("afterbegin", mapBooklist1.join(""));
        booklist2.insertAdjacentHTML("afterbegin", mapBooklist2.join(""));
      } else if (this.windowWidth > 999) {
        350;
        var _booklist = document.getElementById("list1");
        var _booklist2 = document.getElementById("list2");
        var _booklistElement = _booklist.children;
        var _booklistElement2 = _booklist2.children;
        var _blelArray = Array.from(_booklistElement);
        var _blelArray2 = Array.from(_booklistElement2);

        // Mappiamo gli array per aggiornare con <br> la parte HTML dei li
        var _mapBooklist = _blelArray.map(function (listItem) {
          var maphtml1 = "<li>" + listItem.textContent + "<br></li>";
          return maphtml1;
        });
        var _mapBooklist2 = _blelArray2.map(function (listItem) {
          var maphtml2 = "<li>" + listItem.textContent + "<br></li>";
          return maphtml2;
        });

        // Rimuoviamo l'HTML esistente
        _blelArray.forEach(function (item) {
          item.remove();
        });
        _blelArray2.forEach(function (item) {
          item.remove();
        });

        // Visualizziamo l'HTML originale
        _booklist.insertAdjacentHTML("afterbegin", _mapBooklist.join(""));
        _booklist2.insertAdjacentHTML("afterbegin", _mapBooklist2.join(""));
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
      var map = document.getElementById("map-container");
      var form = document.getElementById("form-container");

      /* Se la larghezza dello schermo è uguale o inferiore di 1650px aggiungi la classe col-lg-12 a form e map */
      if (this.windowWidth <= 1650) {
        form.classList.add("col-lg-12");
        map.classList.add("col-lg-12");

        /* Altrimenti, se larghezza dello schermo è maggiore di 1650px se c'è, rimuovi la classe col-lg-12 a entrambi */
      } else {
        form.classList.toggle("col-lg-12", false);
        map.classList.toggle("col-lg-12", false);
      }
    }
  }
});

/*=====  End of VUE SECTION block  ======*/

/*=================================================
=            VANILLA JAVASCRIPT SECTION           =
==================================================*/

/*---------- Subsection Carousel  ----------*/

// Select all slides
var slides = document.querySelectorAll(".slide");

// current slide counter
var curSlide = 0;

// Maximum number of slides
var maxSlide = slides.length - 1;
var bezierValue = [0, -100, -200, -300, -400, -500, -600];

// Loop through slides and set each slides translateX initial value property to index * 100%
slides.forEach(function (slide, index) {
  slide.style.transform = "translateX(".concat(index * -100, "%)");
});

// ARROWS E MOVIMENTO DEL CAROSELLO

/* FRECCIA DESTRA */

// select next slide button
var nextArrow = document.querySelector(".btn-next");

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
  if (slides[curSlide - 1] !== undefined) {
    slides[curSlide - 1].classList.remove("selected");
  }

  // se sia l'elemento 0 che l'elemento massimo dell'array hanno la classe selected, toglila all'elemento massimo
  if (curSlide == 0 && slides[maxSlide].classList.contains("selected")) {
    slides[maxSlide].classList.remove("selected");
  }

  // move slide
  slides.forEach(function (slide, index) {
    slide.style.transform = "translateX(".concat(bezierValue[index], "%)");
    if ("translateX(".concat(bezierValue[index], "%)") == 0) {
      slide.style.transform = "translateX(100%)";
    }
  });
});

/* FRECCIA SINISTRA */

// select prev slide button
var prevArrow = document.querySelector(".btn-prev");

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
  slides.forEach(function (slide, index) {
    slide.style.transform = "translateX(".concat(bezierValue[index], "%)");
  });
});

/*---------- End Subsection Carousel  ----------*/

/*----------  Subsection Card outline colors  ----------*/

/* Quando i buttons delle card sono on hover allora l'outline delle card e le icone fontawesome cambiano colore */

// Selezioniamo i buttons delle card (nodeList)
var buttons = document.querySelectorAll('.card .orange');

// Trasformiamo buttons in Array
var buttonsArray = Array.from(buttons);

// Selezioniamo gli elementi da cambiare (nodeList)
var iconsFas = document.querySelectorAll('.card .fas');
var cards = document.querySelectorAll('.card');

// Creiamo i cicli con i Listener e le funzioni per cambiare i colori
var _loop = function _loop(i) {
  buttonsArray[i].addEventListener('mouseover', function () {
    iconsFas[i].style.color = 'rgb(244, 124, 32)';
    cards[i].style.outlineColor = 'rgb(244, 124, 32)';
  });
};
for (var i = 0; i < buttonsArray.length; i++) {
  _loop(i);
}
;
var _loop2 = function _loop2(_i) {
  buttonsArray[_i].addEventListener('mouseleave', function () {
    iconsFas[_i].style.color = 'rgb(250, 153, 28)';
    cards[_i].style.outlineColor = 'rgb(250, 153, 28)';
  });
};
for (var _i = 0; _i < buttonsArray.length; _i++) {
  _loop2(_i);
}
;

/*---------- End Subsection Card outline colors  ----------*/

/*----------  Subsection Validation Form  ----------*/

// Validation test + Invio mail
function controlloForm() {
  var _console;
  // Selezioniamo la mail inserita nel form e la salviamo in una variabile
  var name = document.getElementById('namesurname').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var mailbody = document.getElementById('mailbody').value;

  // Variabile di tipo regExp - oggetto Javascript
  // Espressione regolare per l'email (username + @ + dominio + . + estensione del dominio TLD )
  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,10})$/;
  var regEmail = regx.test(email);

  // Verifica l'espressione regolare.
  /* eslint-disable */
  (_console = console).log.apply(_console, _toConsumableArray(oo_oo("645912832_0", regEmail)));

  // Se tutto è ok, convalida i dati e inviali alla pagina
  if (regEmail) {
    // Costruiamo l'oggetto che conterrà i dati da inviare
    var formdata = {};
    formdata = {
      name: name,
      email: email,
      subject: subject,
      message: mailbody
    };

    // Trasformiamo formdata in un oggetto Json
    var jason = JSON.stringify(formdata).serializeArray();

    // Chiamata AJAX al server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var _console2;
        /* eslint-disable */(_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("645912832_1", "Grazie ".concat(name, " per averci scritto. Ti risponderemo al pi\xF9 presto."))));
      }
    };
    xhr.setRequestHeader("Content-type", "multipart/form-data;", "charset=UTF-8");
    xhr.onerror = function () {
      var _console3;
      /* eslint-disable */(_console3 = console).log.apply(_console3, _toConsumableArray(oo_oo("645912832_2", this.status, this.statusText)));
    };
    xhr.send(jason);

    // Se falso l'indirizzo mail è scritto sbagliato
  } else {
    // Selezioniamo il div con il messaggio di errore (displayNone)
    var invalidEmail = document.querySelector('.error');

    // Rendiamo visibile il div
    invalidEmail.setAttribute('style', 'display:inline-block !important');

    // Impostiamo l'outline color di errore
    var invalidInput = document.getElementById('email');
    invalidInput.style.outline = "thin solid rgb(244, 124, 32)";

    // Usciamo dalla funzione senza inviare il file
    return false;
  }
}

/*---------- End Subsection Validation Form  ----------*/

/*=====  End of VANILLA JAVASCRIPT SECTION ======*/

/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x4b60(){var _0x196f76=['current','noFunctions','console','symbol','609173cQQurh','_setNodeExpandableState','_treeNodePropertiesBeforeFullValue','replace','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','timeStamp','getPrototypeOf','serialize','location','_Symbol','_blacklistedProperty','hasOwnProperty','8NMdrok','_disposeWebsocket','_reconnectTimeout','unknown','stack','_console_ninja_session','positiveInfinity','then','_addObjectProperty','Number','process','concat','path','WebSocket','nodeModules','...','Set','valueOf','reduceLimits','root_exp_id','cappedProps','_console_ninja','allStrLength','autoExpandMaxDepth','_connectAttemptCount','pathToFileURL','[object\\x20Array]','catch','_addProperty','bigint','parent','_regExpToString','time','capped','error','parse','message','pop','array','sort','_isPrimitiveWrapperType','557826VquQio','substr','timeEnd','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','1.0.0','root_exp','1698708162568','_ws','_numberRegExp','_addLoadNode','funcName','_p_name','length','string','versions','method','isArray','getter','null','node','_sortProps','next.js','_setNodePermissions','_socket','set','getOwnPropertyDescriptor','autoExpandLimit','_setNodeLabel','coverage','hits','isExpressionToEvaluate','level','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','6292896zxURhf','_isPrimitiveType','remix','boolean','get','setter','forEach','_getOwnPropertyDescriptor','_connectToHostNow','_dateToString','_cleanNode','nan','stringify','_connected','global','close','function','trace','49985','POSITIVE_INFINITY','send','disabledTrace','_consoleNinjaAllowedToStart','1','split','_capIfString','env','onmessage','NEXT_RUNTIME','test','url','log','7oZkYbW','now','ws/index.js','145321zbkwEb','8122230HcAhpi','275vwHfCG','_webSocketErrorDocsLink','totalStrLength','getWebSocketClass','_WebSocket','_HTMLAllCollection','','toLowerCase','value','127.0.0.1','object','10023096PEmEDI','dockerizedApp','_treeNodePropertiesAfterFullValue','count','onclose','_inBrowser','_allowedToSend','hrtime','expId','number','_addFunctionsNode','toString','_processTreeNodeResult','ws://','match','strLength','join','Buffer','_keyStrRegExp','host','unshift','_p_','_isSet','_quotedRegExp','push',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-AFCIIDK\",\"192.168.246.144\"],'unref','performance','indexOf','_getOwnPropertyNames','undefined','_attemptToReconnectShortly','_undefined','port','_connecting','_hasSetOnItsPath','_isMap','map','[object\\x20Map]','data','props','autoExpandPropertyCount','depth','_p_length','sortProps','onerror','name','defineProperty','_objectToString','resolveGetters','onopen','elapsed','_additionalMetadata','edge','_maxConnectAttemptCount','autoExpand','getOwnPropertySymbols','includes','Error','_setNodeQueryPath','reload','elements','Symbol','index','Map','_sendErrorMessage','warn','_setNodeExpressionPath','prototype','String','hostname','_WebSocketClass','type','date','_allowedToConnectOnSend','_type','1360mgMCzb','51112cLVaCj','HTMLAllCollection','stackTraceLimit','expressionsToEvaluate','Boolean','slice','_isNegativeZero','_setNodeId','perf_hooks','_property','getOwnPropertyNames','_propertyName','call','readyState','nuxt','constructor','autoExpandPreviousObjects'];_0x4b60=function(){return _0x196f76;};return _0x4b60();}var _0x40415b=_0x20e3;(function(_0x5b2c0d,_0x3b4a5e){var _0x11c9ad=_0x20e3,_0x44a48b=_0x5b2c0d();while(!![]){try{var _0x495357=parseInt(_0x11c9ad(0xf5))/0x1+-parseInt(_0x11c9ad(0x101))/0x2*(-parseInt(_0x11c9ad(0x12a))/0x3)+-parseInt(_0x11c9ad(0xe0))/0x4*(-parseInt(_0x11c9ad(0x88))/0x5)+-parseInt(_0x11c9ad(0x14b))/0x6+parseInt(_0x11c9ad(0x83))/0x7*(-parseInt(_0x11c9ad(0x93))/0x8)+-parseInt(_0x11c9ad(0x87))/0x9+parseInt(_0x11c9ad(0xdf))/0xa*(parseInt(_0x11c9ad(0x86))/0xb);if(_0x495357===_0x3b4a5e)break;else _0x44a48b['push'](_0x44a48b['shift']());}catch(_0x412b79){_0x44a48b['push'](_0x44a48b['shift']());}}}(_0x4b60,0x9e43e));function _0x20e3(_0x49e479,_0x4c553c){var _0x4b6028=_0x4b60();return _0x20e3=function(_0x20e32e,_0x505f84){_0x20e32e=_0x20e32e-0x6b;var _0xb84ac8=_0x4b6028[_0x20e32e];return _0xb84ac8;},_0x20e3(_0x49e479,_0x4c553c);}var j=Object['create'],H=Object[_0x40415b(0xc2)],G=Object[_0x40415b(0x143)],ee=Object['getOwnPropertyNames'],te=Object[_0x40415b(0xfb)],ne=Object[_0x40415b(0xd7)][_0x40415b(0x100)],re=(_0x778885,_0x376950,_0x1ec5f8,_0x4e2808)=>{var _0x1ac875=_0x40415b;if(_0x376950&&typeof _0x376950=='object'||typeof _0x376950==_0x1ac875(0x73)){for(let _0x38fcd4 of ee(_0x376950))!ne[_0x1ac875(0xec)](_0x778885,_0x38fcd4)&&_0x38fcd4!==_0x1ec5f8&&H(_0x778885,_0x38fcd4,{'get':()=>_0x376950[_0x38fcd4],'enumerable':!(_0x4e2808=G(_0x376950,_0x38fcd4))||_0x4e2808['enumerable']});}return _0x778885;},x=(_0x31f025,_0x437417,_0x87b55f)=>(_0x87b55f=_0x31f025!=null?j(te(_0x31f025)):{},re(_0x437417||!_0x31f025||!_0x31f025['__es'+'Module']?H(_0x87b55f,'default',{'value':_0x31f025,'enumerable':!0x0}):_0x87b55f,_0x31f025)),X=class{constructor(_0x36440a,_0x5b04fc,_0x7fc8a,_0xf16e27,_0x3c2068){var _0x5063d1=_0x40415b;this[_0x5063d1(0x71)]=_0x36440a,this[_0x5063d1(0xa6)]=_0x5b04fc,this['port']=_0x7fc8a,this[_0x5063d1(0x10f)]=_0xf16e27,this[_0x5063d1(0x94)]=_0x3c2068,this[_0x5063d1(0x99)]=!0x0,this[_0x5063d1(0xdd)]=!0x0,this[_0x5063d1(0x70)]=!0x1,this[_0x5063d1(0xb5)]=!0x1,this['_inNextEdge']=_0x36440a[_0x5063d1(0x10b)]?.[_0x5063d1(0x7d)]?.[_0x5063d1(0x7f)]===_0x5063d1(0xc8),this['_inBrowser']=!this[_0x5063d1(0x71)][_0x5063d1(0x10b)]?.['versions']?.[_0x5063d1(0x13d)]&&!this['_inNextEdge'],this[_0x5063d1(0xda)]=null,this[_0x5063d1(0x119)]=0x0,this[_0x5063d1(0xc9)]=0x14,this[_0x5063d1(0x89)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this['_inBrowser']?_0x5063d1(0x14a):_0x5063d1(0xf9))+this['_webSocketErrorDocsLink'];}async[_0x40415b(0x8b)](){var _0x5189ef=_0x40415b;if(this[_0x5189ef(0xda)])return this[_0x5189ef(0xda)];let _0x1ad85d;if(this[_0x5189ef(0x98)]||this['_inNextEdge'])_0x1ad85d=this[_0x5189ef(0x71)][_0x5189ef(0x10e)];else{if(this[_0x5189ef(0x71)][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)])_0x1ad85d=this['global'][_0x5189ef(0x10b)]?.[_0x5189ef(0x8c)];else try{let _0x20504a=await import(_0x5189ef(0x10d));_0x1ad85d=(await import((await import(_0x5189ef(0x81)))[_0x5189ef(0x11a)](_0x20504a[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],_0x5189ef(0x85)))['toString']()))['default'];}catch{try{_0x1ad85d=require(require('path')[_0x5189ef(0xa3)](this[_0x5189ef(0x10f)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x5189ef(0xda)]=_0x1ad85d,_0x1ad85d;}[_0x40415b(0x6b)](){var _0x17ea5b=_0x40415b;this['_connecting']||this['_connected']||this['_connectAttemptCount']>=this[_0x17ea5b(0xc9)]||(this['_allowedToConnectOnSend']=!0x1,this['_connecting']=!0x0,this['_connectAttemptCount']++,this[_0x17ea5b(0x131)]=new Promise((_0x231b5c,_0x296a72)=>{var _0x2ce99e=_0x17ea5b;this[_0x2ce99e(0x8b)]()[_0x2ce99e(0x108)](_0x31e338=>{var _0x4a8719=_0x2ce99e;let _0x4cf85c=new _0x31e338(_0x4a8719(0xa0)+(!this['_inBrowser']&&this[_0x4a8719(0x94)]?'gateway.docker.internal':this[_0x4a8719(0xa6)])+':'+this[_0x4a8719(0xb4)]);_0x4cf85c[_0x4a8719(0xc0)]=()=>{var _0x5aae9b=_0x4a8719;this[_0x5aae9b(0x99)]=!0x1,this['_disposeWebsocket'](_0x4cf85c),this['_attemptToReconnectShortly'](),_0x296a72(new Error('logger\\x20websocket\\x20error'));},_0x4cf85c['onopen']=()=>{var _0x1ed07d=_0x4a8719;this['_inBrowser']||_0x4cf85c[_0x1ed07d(0x141)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)]&&_0x4cf85c[_0x1ed07d(0x141)][_0x1ed07d(0xad)](),_0x231b5c(_0x4cf85c);},_0x4cf85c[_0x4a8719(0x97)]=()=>{var _0x29ad5a=_0x4a8719;this[_0x29ad5a(0xdd)]=!0x0,this[_0x29ad5a(0x102)](_0x4cf85c),this[_0x29ad5a(0xb2)]();},_0x4cf85c[_0x4a8719(0x7e)]=_0x5779a6=>{var _0x5518ba=_0x4a8719;try{_0x5779a6&&_0x5779a6['data']&&this['_inBrowser']&&JSON[_0x5518ba(0x124)](_0x5779a6[_0x5518ba(0xba)])[_0x5518ba(0x139)]===_0x5518ba(0xcf)&&this[_0x5518ba(0x71)][_0x5518ba(0xfd)][_0x5518ba(0xcf)]();}catch{}};})[_0x2ce99e(0x108)](_0x34e299=>(this[_0x2ce99e(0x70)]=!0x0,this[_0x2ce99e(0xb5)]=!0x1,this['_allowedToConnectOnSend']=!0x1,this['_allowedToSend']=!0x0,this[_0x2ce99e(0x119)]=0x0,_0x34e299))[_0x2ce99e(0x11c)](_0x513b46=>(this[_0x2ce99e(0x70)]=!0x1,this[_0x2ce99e(0xb5)]=!0x1,console[_0x2ce99e(0xd5)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x296a72(new Error(_0x2ce99e(0x12d)+(_0x513b46&&_0x513b46[_0x2ce99e(0x125)])))));}));}[_0x40415b(0x102)](_0x41867d){var _0xf2c3e=_0x40415b;this[_0xf2c3e(0x70)]=!0x1,this[_0xf2c3e(0xb5)]=!0x1;try{_0x41867d['onclose']=null,_0x41867d[_0xf2c3e(0xc0)]=null,_0x41867d[_0xf2c3e(0xc5)]=null;}catch{}try{_0x41867d[_0xf2c3e(0xed)]<0x2&&_0x41867d[_0xf2c3e(0x72)]();}catch{}}[_0x40415b(0xb2)](){var _0x39d4ee=_0x40415b;clearTimeout(this[_0x39d4ee(0x103)]),!(this['_connectAttemptCount']>=this[_0x39d4ee(0xc9)])&&(this[_0x39d4ee(0x103)]=setTimeout(()=>{var _0x58ff05=_0x39d4ee;this[_0x58ff05(0x70)]||this[_0x58ff05(0xb5)]||(this[_0x58ff05(0x6b)](),this[_0x58ff05(0x131)]?.[_0x58ff05(0x11c)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x39d4ee(0x103)]['unref']&&this[_0x39d4ee(0x103)]['unref']());}async[_0x40415b(0x77)](_0x188a27){var _0x1e9159=_0x40415b;try{if(!this[_0x1e9159(0x99)])return;this[_0x1e9159(0xdd)]&&this[_0x1e9159(0x6b)](),(await this[_0x1e9159(0x131)])['send'](JSON[_0x1e9159(0x6f)](_0x188a27));}catch(_0x1d15cb){console[_0x1e9159(0xd5)](this[_0x1e9159(0xd4)]+':\\x20'+(_0x1d15cb&&_0x1d15cb[_0x1e9159(0x125)])),this[_0x1e9159(0x99)]=!0x1,this[_0x1e9159(0xb2)]();}}};function b(_0x2ef3cc,_0x4a69c3,_0x1a1173,_0x1a0f67,_0x59c00d,_0x2c1510){var _0x44b4eb=_0x40415b;let _0x27d642=_0x1a1173[_0x44b4eb(0x7b)](',')[_0x44b4eb(0xb8)](_0x4afd24=>{var _0xcdfa54=_0x44b4eb;try{_0x2ef3cc[_0xcdfa54(0x106)]||((_0x59c00d===_0xcdfa54(0x13f)||_0x59c00d===_0xcdfa54(0x14d)||_0x59c00d==='astro')&&(_0x59c00d+=!_0x2ef3cc[_0xcdfa54(0x10b)]?.['versions']?.['node']&&_0x2ef3cc[_0xcdfa54(0x10b)]?.[_0xcdfa54(0x7d)]?.[_0xcdfa54(0x7f)]!==_0xcdfa54(0xc8)?'\\x20browser':'\\x20server'),_0x2ef3cc[_0xcdfa54(0x106)]={'id':+new Date(),'tool':_0x59c00d});let _0x175a68=new X(_0x2ef3cc,_0x4a69c3,_0x4afd24,_0x1a0f67,_0x2c1510);return _0x175a68['send']['bind'](_0x175a68);}catch(_0x41c0e8){return console['warn']('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x41c0e8&&_0x41c0e8[_0xcdfa54(0x125)]),()=>{};}});return _0x2aac68=>_0x27d642[_0x44b4eb(0x151)](_0x3ca368=>_0x3ca368(_0x2aac68));}function W(_0x3d3739){var _0x35859c=_0x40415b;let _0x4a9e8a=function(_0xaaa4d2,_0x301da6){return _0x301da6-_0xaaa4d2;},_0x588820;if(_0x3d3739[_0x35859c(0xae)])_0x588820=function(){var _0x5ec935=_0x35859c;return _0x3d3739[_0x5ec935(0xae)]['now']();};else{if(_0x3d3739[_0x35859c(0x10b)]&&_0x3d3739[_0x35859c(0x10b)]['hrtime']&&_0x3d3739['process']?.[_0x35859c(0x7d)]?.[_0x35859c(0x7f)]!==_0x35859c(0xc8))_0x588820=function(){var _0x23387c=_0x35859c;return _0x3d3739[_0x23387c(0x10b)][_0x23387c(0x9a)]();},_0x4a9e8a=function(_0x207667,_0x17106c){return 0x3e8*(_0x17106c[0x0]-_0x207667[0x0])+(_0x17106c[0x1]-_0x207667[0x1])/0xf4240;};else try{let {performance:_0x53da7e}=require(_0x35859c(0xe8));_0x588820=function(){return _0x53da7e['now']();};}catch{_0x588820=function(){return+new Date();};}}return{'elapsed':_0x4a9e8a,'timeStamp':_0x588820,'now':()=>Date[_0x35859c(0x84)]()};}function J(_0x162065,_0x23c759,_0x2d2911){var _0xbad7fb=_0x40415b;if(_0x162065[_0xbad7fb(0x79)]!==void 0x0)return _0x162065['_consoleNinjaAllowedToStart'];let _0x2bf15a=_0x162065[_0xbad7fb(0x10b)]?.[_0xbad7fb(0x138)]?.[_0xbad7fb(0x13d)]||_0x162065['process']?.['env']?.[_0xbad7fb(0x7f)]===_0xbad7fb(0xc8);return _0x2bf15a&&_0x2d2911===_0xbad7fb(0xee)?_0x162065[_0xbad7fb(0x79)]=!0x1:_0x162065[_0xbad7fb(0x79)]=_0x2bf15a||!_0x23c759||_0x162065[_0xbad7fb(0xfd)]?.['hostname']&&_0x23c759[_0xbad7fb(0xcc)](_0x162065[_0xbad7fb(0xfd)][_0xbad7fb(0xd9)]),_0x162065[_0xbad7fb(0x79)];}function Y(_0x59f420,_0x187f00,_0x332c05,_0x42bea6){var _0x5e4536=_0x40415b;_0x59f420=_0x59f420,_0x187f00=_0x187f00,_0x332c05=_0x332c05,_0x42bea6=_0x42bea6;let _0x53b9a3=W(_0x59f420),_0x150150=_0x53b9a3[_0x5e4536(0xc6)],_0x376512=_0x53b9a3[_0x5e4536(0xfa)];class _0x3b9973{constructor(){var _0x5d89da=_0x5e4536;this[_0x5d89da(0xa5)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5d89da(0x132)]=/^(0|[1-9][0-9]*)$/,this[_0x5d89da(0xaa)]=/'([^\\\\']|\\\\')*'/,this[_0x5d89da(0xb3)]=_0x59f420[_0x5d89da(0xb1)],this['_HTMLAllCollection']=_0x59f420[_0x5d89da(0xe1)],this[_0x5d89da(0x152)]=Object[_0x5d89da(0x143)],this['_getOwnPropertyNames']=Object[_0x5d89da(0xea)],this[_0x5d89da(0xfe)]=_0x59f420[_0x5d89da(0xd1)],this[_0x5d89da(0x120)]=RegExp[_0x5d89da(0xd7)]['toString'],this['_dateToString']=Date['prototype']['toString'];}[_0x5e4536(0xfc)](_0x538a98,_0x3a5f1b,_0x3458e4,_0x512db2){var _0x53c68c=_0x5e4536,_0x2ecfec=this,_0x588f86=_0x3458e4[_0x53c68c(0xca)];function _0x2f9ca4(_0x18f361,_0x547fff,_0x57634c){var _0x58d432=_0x53c68c;_0x547fff[_0x58d432(0xdb)]=_0x58d432(0x104),_0x547fff[_0x58d432(0x123)]=_0x18f361['message'],_0x5bdfe9=_0x57634c[_0x58d432(0x13d)]['current'],_0x57634c['node'][_0x58d432(0xf1)]=_0x547fff,_0x2ecfec[_0x58d432(0xf7)](_0x547fff,_0x57634c);}try{_0x3458e4[_0x53c68c(0x149)]++,_0x3458e4['autoExpand']&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0xab)](_0x3a5f1b);var _0x508204,_0x3a69da,_0x2b7da5,_0x26db58,_0x97db10=[],_0x5c5724=[],_0x448e3a,_0x92c91f=this[_0x53c68c(0xde)](_0x3a5f1b),_0x199e4a=_0x92c91f==='array',_0x340375=!0x1,_0x37e860=_0x92c91f===_0x53c68c(0x73),_0x489933=this['_isPrimitiveType'](_0x92c91f),_0x27fc75=this[_0x53c68c(0x129)](_0x92c91f),_0xe8da08=_0x489933||_0x27fc75,_0xe09379={},_0x5d300d=0x0,_0x2b3628=!0x1,_0x5bdfe9,_0xf3f6dc=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x3458e4['depth']){if(_0x199e4a){if(_0x3a69da=_0x3a5f1b['length'],_0x3a69da>_0x3458e4['elements']){for(_0x2b7da5=0x0,_0x26db58=_0x3458e4['elements'],_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724['push'](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));_0x538a98['cappedElements']=!0x0;}else{for(_0x2b7da5=0x0,_0x26db58=_0x3a69da,_0x508204=_0x2b7da5;_0x508204<_0x26db58;_0x508204++)_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x11d)](_0x97db10,_0x3a5f1b,_0x92c91f,_0x508204,_0x3458e4));}_0x3458e4[_0x53c68c(0xbc)]+=_0x5c5724[_0x53c68c(0x136)];}if(!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&!_0x489933&&_0x92c91f!==_0x53c68c(0xd8)&&_0x92c91f!==_0x53c68c(0xa4)&&_0x92c91f!==_0x53c68c(0x11e)){var _0x5d75d6=_0x512db2[_0x53c68c(0xbb)]||_0x3458e4[_0x53c68c(0xbb)];if(this[_0x53c68c(0xa9)](_0x3a5f1b)?(_0x508204=0x0,_0x3a5f1b['forEach'](function(_0x580b73){var _0x5897cf=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5897cf(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4['isExpressionToEvaluate']&&_0x3458e4[_0x5897cf(0xca)]&&_0x3458e4[_0x5897cf(0xbc)]>_0x3458e4[_0x5897cf(0x144)]){_0x2b3628=!0x0;return;}_0x5c5724[_0x5897cf(0xab)](_0x2ecfec[_0x5897cf(0x11d)](_0x97db10,_0x3a5f1b,_0x5897cf(0x111),_0x508204++,_0x3458e4,function(_0x4df36d){return function(){return _0x4df36d;};}(_0x580b73)));})):this['_isMap'](_0x3a5f1b)&&_0x3a5f1b['forEach'](function(_0x40f558,_0x49685f){var _0x5bde0f=_0x53c68c;if(_0x5d300d++,_0x3458e4[_0x5bde0f(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;return;}if(!_0x3458e4[_0x5bde0f(0x148)]&&_0x3458e4[_0x5bde0f(0xca)]&&_0x3458e4[_0x5bde0f(0xbc)]>_0x3458e4[_0x5bde0f(0x144)]){_0x2b3628=!0x0;return;}var _0x2a024c=_0x49685f['toString']();_0x2a024c['length']>0x64&&(_0x2a024c=_0x2a024c[_0x5bde0f(0xe5)](0x0,0x64)+_0x5bde0f(0x110)),_0x5c5724['push'](_0x2ecfec['_addProperty'](_0x97db10,_0x3a5f1b,_0x5bde0f(0xd3),_0x2a024c,_0x3458e4,function(_0x3f9861){return function(){return _0x3f9861;};}(_0x40f558)));}),!_0x340375){try{for(_0x448e3a in _0x3a5f1b)if(!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724['push'](_0x2ecfec['_addObjectProperty'](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}catch{}if(_0xe09379[_0x53c68c(0xbe)]=!0x0,_0x37e860&&(_0xe09379[_0x53c68c(0x135)]=!0x0),!_0x2b3628){var _0x259ac2=[][_0x53c68c(0x10c)](this[_0x53c68c(0xb0)](_0x3a5f1b))[_0x53c68c(0x10c)](this['_getOwnPropertySymbols'](_0x3a5f1b));for(_0x508204=0x0,_0x3a69da=_0x259ac2[_0x53c68c(0x136)];_0x508204<_0x3a69da;_0x508204++)if(_0x448e3a=_0x259ac2[_0x508204],!(_0x199e4a&&_0xf3f6dc[_0x53c68c(0x80)](_0x448e3a['toString']()))&&!this[_0x53c68c(0xff)](_0x3a5f1b,_0x448e3a,_0x3458e4)&&!_0xe09379[_0x53c68c(0xa8)+_0x448e3a['toString']()]){if(_0x5d300d++,_0x3458e4[_0x53c68c(0xbc)]++,_0x5d300d>_0x5d75d6){_0x2b3628=!0x0;break;}if(!_0x3458e4[_0x53c68c(0x148)]&&_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4['autoExpandPropertyCount']>_0x3458e4[_0x53c68c(0x144)]){_0x2b3628=!0x0;break;}_0x5c5724[_0x53c68c(0xab)](_0x2ecfec[_0x53c68c(0x109)](_0x97db10,_0xe09379,_0x3a5f1b,_0x92c91f,_0x448e3a,_0x3458e4));}}}}}if(_0x538a98['type']=_0x92c91f,_0xe8da08?(_0x538a98['value']=_0x3a5f1b[_0x53c68c(0x112)](),this[_0x53c68c(0x7c)](_0x92c91f,_0x538a98,_0x3458e4,_0x512db2)):_0x92c91f===_0x53c68c(0xdc)?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0x6c)][_0x53c68c(0xec)](_0x3a5f1b):_0x92c91f===_0x53c68c(0x11e)?_0x538a98[_0x53c68c(0x90)]=_0x3a5f1b['toString']():_0x92c91f==='RegExp'?_0x538a98[_0x53c68c(0x90)]=this['_regExpToString']['call'](_0x3a5f1b):_0x92c91f===_0x53c68c(0xf4)&&this['_Symbol']?_0x538a98[_0x53c68c(0x90)]=this[_0x53c68c(0xfe)][_0x53c68c(0xd7)][_0x53c68c(0x9e)][_0x53c68c(0xec)](_0x3a5f1b):!_0x3458e4['depth']&&!(_0x92c91f===_0x53c68c(0x13c)||_0x92c91f===_0x53c68c(0xb1))&&(delete _0x538a98[_0x53c68c(0x90)],_0x538a98[_0x53c68c(0x122)]=!0x0),_0x2b3628&&(_0x538a98[_0x53c68c(0x115)]=!0x0),_0x5bdfe9=_0x3458e4[_0x53c68c(0x13d)]['current'],_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x538a98,this['_treeNodePropertiesBeforeFullValue'](_0x538a98,_0x3458e4),_0x5c5724['length']){for(_0x508204=0x0,_0x3a69da=_0x5c5724['length'];_0x508204<_0x3a69da;_0x508204++)_0x5c5724[_0x508204](_0x508204);}_0x97db10['length']&&(_0x538a98[_0x53c68c(0xbb)]=_0x97db10);}catch(_0x14580a){_0x2f9ca4(_0x14580a,_0x538a98,_0x3458e4);}return this[_0x53c68c(0xc7)](_0x3a5f1b,_0x538a98),this[_0x53c68c(0x95)](_0x538a98,_0x3458e4),_0x3458e4[_0x53c68c(0x13d)][_0x53c68c(0xf1)]=_0x5bdfe9,_0x3458e4[_0x53c68c(0x149)]--,_0x3458e4[_0x53c68c(0xca)]=_0x588f86,_0x3458e4[_0x53c68c(0xca)]&&_0x3458e4[_0x53c68c(0xf0)][_0x53c68c(0x126)](),_0x538a98;}['_getOwnPropertySymbols'](_0x25bdbb){var _0x5993f8=_0x5e4536;return Object[_0x5993f8(0xcb)]?Object[_0x5993f8(0xcb)](_0x25bdbb):[];}['_isSet'](_0x46a5f7){var _0x1cd231=_0x5e4536;return!!(_0x46a5f7&&_0x59f420[_0x1cd231(0x111)]&&this['_objectToString'](_0x46a5f7)==='[object\\x20Set]'&&_0x46a5f7[_0x1cd231(0x151)]);}['_blacklistedProperty'](_0x2d4c66,_0x5a9dd5,_0x376420){var _0x5e5392=_0x5e4536;return _0x376420['noFunctions']?typeof _0x2d4c66[_0x5a9dd5]==_0x5e5392(0x73):!0x1;}['_type'](_0x2bbe33){var _0xb850e8=_0x5e4536,_0x1689f3='';return _0x1689f3=typeof _0x2bbe33,_0x1689f3===_0xb850e8(0x92)?this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Array]'?_0x1689f3='array':this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20Date]'?_0x1689f3=_0xb850e8(0xdc):this[_0xb850e8(0xc3)](_0x2bbe33)==='[object\\x20BigInt]'?_0x1689f3=_0xb850e8(0x11e):_0x2bbe33===null?_0x1689f3=_0xb850e8(0x13c):_0x2bbe33[_0xb850e8(0xef)]&&(_0x1689f3=_0x2bbe33[_0xb850e8(0xef)][_0xb850e8(0xc1)]||_0x1689f3):_0x1689f3===_0xb850e8(0xb1)&&this[_0xb850e8(0x8d)]&&_0x2bbe33 instanceof this[_0xb850e8(0x8d)]&&(_0x1689f3=_0xb850e8(0xe1)),_0x1689f3;}[_0x5e4536(0xc3)](_0x5dd4b0){var _0x1632ad=_0x5e4536;return Object[_0x1632ad(0xd7)]['toString'][_0x1632ad(0xec)](_0x5dd4b0);}['_isPrimitiveType'](_0x1f5a22){var _0x3dee54=_0x5e4536;return _0x1f5a22===_0x3dee54(0x14e)||_0x1f5a22===_0x3dee54(0x137)||_0x1f5a22===_0x3dee54(0x9c);}['_isPrimitiveWrapperType'](_0x4586a0){var _0x40e278=_0x5e4536;return _0x4586a0===_0x40e278(0xe4)||_0x4586a0===_0x40e278(0xd8)||_0x4586a0===_0x40e278(0x10a);}[_0x5e4536(0x11d)](_0xe4027,_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9){var _0x3aac20=this;return function(_0x13ded6){var _0x36766e=_0x20e3,_0x1ce93a=_0x2d9806['node'][_0x36766e(0xf1)],_0x557935=_0x2d9806['node']['index'],_0x38730b=_0x2d9806[_0x36766e(0x13d)]['parent'];_0x2d9806['node'][_0x36766e(0x11f)]=_0x1ce93a,_0x2d9806[_0x36766e(0x13d)]['index']=typeof _0xc38f3c=='number'?_0xc38f3c:_0x13ded6,_0xe4027[_0x36766e(0xab)](_0x3aac20['_property'](_0x3cdb7a,_0x54a03a,_0xc38f3c,_0x2d9806,_0x35eae9)),_0x2d9806['node'][_0x36766e(0x11f)]=_0x38730b,_0x2d9806[_0x36766e(0x13d)]['index']=_0x557935;};}[_0x5e4536(0x109)](_0x206818,_0x2fa3d1,_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548){var _0x15ed0a=_0x5e4536,_0x5ce9b2=this;return _0x2fa3d1[_0x15ed0a(0xa8)+_0x2a75ed[_0x15ed0a(0x9e)]()]=!0x0,function(_0x2d064d){var _0x1dfd28=_0x15ed0a,_0x49845f=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xf1)],_0x10138b=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)],_0x95a110=_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)];_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x49845f,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x2d064d,_0x206818['push'](_0x5ce9b2[_0x1dfd28(0xe9)](_0x4a693e,_0x110a3a,_0x2a75ed,_0x35a66c,_0x296548)),_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0x11f)]=_0x95a110,_0x35a66c[_0x1dfd28(0x13d)][_0x1dfd28(0xd2)]=_0x10138b;};}[_0x5e4536(0xe9)](_0x704d65,_0x3bfada,_0x20bf0e,_0xeaf73d,_0x1364ce){var _0x32ff7f=_0x5e4536,_0x5b199d=this;_0x1364ce||(_0x1364ce=function(_0x349eaa,_0x321bf8){return _0x349eaa[_0x321bf8];});var _0x17302b=_0x20bf0e[_0x32ff7f(0x9e)](),_0x243f44=_0xeaf73d[_0x32ff7f(0xe3)]||{},_0x4b7b20=_0xeaf73d[_0x32ff7f(0xbd)],_0xa4413a=_0xeaf73d[_0x32ff7f(0x148)];try{var _0x53d4d8=this[_0x32ff7f(0xb7)](_0x704d65),_0x772690=_0x17302b;_0x53d4d8&&_0x772690[0x0]==='\\x27'&&(_0x772690=_0x772690['substr'](0x1,_0x772690['length']-0x2));var _0x11d7ca=_0xeaf73d[_0x32ff7f(0xe3)]=_0x243f44[_0x32ff7f(0xa8)+_0x772690];_0x11d7ca&&(_0xeaf73d['depth']=_0xeaf73d[_0x32ff7f(0xbd)]+0x1),_0xeaf73d[_0x32ff7f(0x148)]=!!_0x11d7ca;var _0x413db1=typeof _0x20bf0e==_0x32ff7f(0xf4),_0x2f2c56={'name':_0x413db1||_0x53d4d8?_0x17302b:this['_propertyName'](_0x17302b)};if(_0x413db1&&(_0x2f2c56[_0x32ff7f(0xf4)]=!0x0),!(_0x3bfada==='array'||_0x3bfada===_0x32ff7f(0xcd))){var _0x16ee46=this[_0x32ff7f(0x152)](_0x704d65,_0x20bf0e);if(_0x16ee46&&(_0x16ee46[_0x32ff7f(0x142)]&&(_0x2f2c56[_0x32ff7f(0x150)]=!0x0),_0x16ee46[_0x32ff7f(0x14f)]&&!_0x11d7ca&&!_0xeaf73d[_0x32ff7f(0xc4)]))return _0x2f2c56[_0x32ff7f(0x13b)]=!0x0,this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x5b10c1;try{_0x5b10c1=_0x1364ce(_0x704d65,_0x20bf0e);}catch(_0x305588){return _0x2f2c56={'name':_0x17302b,'type':'unknown','error':_0x305588[_0x32ff7f(0x125)]},this['_processTreeNodeResult'](_0x2f2c56,_0xeaf73d),_0x2f2c56;}var _0x438b29=this[_0x32ff7f(0xde)](_0x5b10c1),_0x320df6=this[_0x32ff7f(0x14c)](_0x438b29);if(_0x2f2c56[_0x32ff7f(0xdb)]=_0x438b29,_0x320df6)this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x3ca8c8=_0x32ff7f;_0x2f2c56[_0x3ca8c8(0x90)]=_0x5b10c1[_0x3ca8c8(0x112)](),!_0x11d7ca&&_0x5b199d[_0x3ca8c8(0x7c)](_0x438b29,_0x2f2c56,_0xeaf73d,{});});else{var _0x24d613=_0xeaf73d[_0x32ff7f(0xca)]&&_0xeaf73d[_0x32ff7f(0x149)]<_0xeaf73d[_0x32ff7f(0x118)]&&_0xeaf73d[_0x32ff7f(0xf0)][_0x32ff7f(0xaf)](_0x5b10c1)<0x0&&_0x438b29!=='function'&&_0xeaf73d[_0x32ff7f(0xbc)]<_0xeaf73d['autoExpandLimit'];_0x24d613||_0xeaf73d['level']<_0x4b7b20||_0x11d7ca?(this[_0x32ff7f(0xfc)](_0x2f2c56,_0x5b10c1,_0xeaf73d,_0x11d7ca||{}),this[_0x32ff7f(0xc7)](_0x5b10c1,_0x2f2c56)):this[_0x32ff7f(0x9f)](_0x2f2c56,_0xeaf73d,_0x5b10c1,function(){var _0x1b0798=_0x32ff7f;_0x438b29===_0x1b0798(0x13c)||_0x438b29===_0x1b0798(0xb1)||(delete _0x2f2c56[_0x1b0798(0x90)],_0x2f2c56[_0x1b0798(0x122)]=!0x0);});}return _0x2f2c56;}finally{_0xeaf73d['expressionsToEvaluate']=_0x243f44,_0xeaf73d[_0x32ff7f(0xbd)]=_0x4b7b20,_0xeaf73d['isExpressionToEvaluate']=_0xa4413a;}}[_0x5e4536(0x7c)](_0xb536a2,_0x2db91d,_0x51b067,_0xba2856){var _0x109452=_0x5e4536,_0x5de578=_0xba2856['strLength']||_0x51b067[_0x109452(0xa2)];if((_0xb536a2===_0x109452(0x137)||_0xb536a2===_0x109452(0xd8))&&_0x2db91d[_0x109452(0x90)]){let _0x2c3611=_0x2db91d[_0x109452(0x90)][_0x109452(0x136)];_0x51b067[_0x109452(0x117)]+=_0x2c3611,_0x51b067[_0x109452(0x117)]>_0x51b067[_0x109452(0x8a)]?(_0x2db91d[_0x109452(0x122)]='',delete _0x2db91d['value']):_0x2c3611>_0x5de578&&(_0x2db91d[_0x109452(0x122)]=_0x2db91d[_0x109452(0x90)][_0x109452(0x12b)](0x0,_0x5de578),delete _0x2db91d[_0x109452(0x90)]);}}['_isMap'](_0x51eead){var _0x238a60=_0x5e4536;return!!(_0x51eead&&_0x59f420[_0x238a60(0xd3)]&&this[_0x238a60(0xc3)](_0x51eead)===_0x238a60(0xb9)&&_0x51eead['forEach']);}[_0x5e4536(0xeb)](_0x365158){var _0x4218fa=_0x5e4536;if(_0x365158['match'](/^\\d+$/))return _0x365158;var _0x2bcf77;try{_0x2bcf77=JSON[_0x4218fa(0x6f)](''+_0x365158);}catch{_0x2bcf77='\\x22'+this[_0x4218fa(0xc3)](_0x365158)+'\\x22';}return _0x2bcf77[_0x4218fa(0xa1)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2bcf77=_0x2bcf77[_0x4218fa(0x12b)](0x1,_0x2bcf77[_0x4218fa(0x136)]-0x2):_0x2bcf77=_0x2bcf77[_0x4218fa(0xf8)](/'/g,'\\x5c\\x27')[_0x4218fa(0xf8)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x2bcf77;}['_processTreeNodeResult'](_0x3baede,_0x5d8960,_0x2f812e,_0x5c898d){var _0x53d175=_0x5e4536;this['_treeNodePropertiesBeforeFullValue'](_0x3baede,_0x5d8960),_0x5c898d&&_0x5c898d(),this[_0x53d175(0xc7)](_0x2f812e,_0x3baede),this['_treeNodePropertiesAfterFullValue'](_0x3baede,_0x5d8960);}['_treeNodePropertiesBeforeFullValue'](_0x2c7139,_0x1ccbe1){var _0x33d856=_0x5e4536;this[_0x33d856(0xe7)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xce)](_0x2c7139,_0x1ccbe1),this[_0x33d856(0xd6)](_0x2c7139,_0x1ccbe1),this['_setNodePermissions'](_0x2c7139,_0x1ccbe1);}[_0x5e4536(0xe7)](_0xbbbc64,_0x576727){}['_setNodeQueryPath'](_0x2ef019,_0x6bdaa7){}['_setNodeLabel'](_0x4e653b,_0x18ec71){}['_isUndefined'](_0x2304ca){return _0x2304ca===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x12c9a4,_0x1eca4b){var _0x87d4fc=_0x5e4536;this[_0x87d4fc(0x145)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0xf6)](_0x12c9a4),_0x1eca4b['sortProps']&&this['_sortProps'](_0x12c9a4),this[_0x87d4fc(0x9d)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x133)](_0x12c9a4,_0x1eca4b),this[_0x87d4fc(0x6d)](_0x12c9a4);}['_additionalMetadata'](_0x46f001,_0x48d304){var _0x312fe7=_0x5e4536;let _0x444c4d;try{_0x59f420['console']&&(_0x444c4d=_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)],_0x59f420[_0x312fe7(0xf3)]['error']=function(){}),_0x46f001&&typeof _0x46f001['length']==_0x312fe7(0x9c)&&(_0x48d304['length']=_0x46f001[_0x312fe7(0x136)]);}catch{}finally{_0x444c4d&&(_0x59f420[_0x312fe7(0xf3)][_0x312fe7(0x123)]=_0x444c4d);}if(_0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x9c)||_0x48d304[_0x312fe7(0xdb)]==='Number'){if(isNaN(_0x48d304['value']))_0x48d304[_0x312fe7(0x6e)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];else switch(_0x48d304[_0x312fe7(0x90)]){case Number[_0x312fe7(0x76)]:_0x48d304[_0x312fe7(0x107)]=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case Number['NEGATIVE_INFINITY']:_0x48d304['negativeInfinity']=!0x0,delete _0x48d304[_0x312fe7(0x90)];break;case 0x0:this[_0x312fe7(0xe6)](_0x48d304[_0x312fe7(0x90)])&&(_0x48d304['negativeZero']=!0x0);break;}}else _0x48d304[_0x312fe7(0xdb)]===_0x312fe7(0x73)&&typeof _0x46f001[_0x312fe7(0xc1)]==_0x312fe7(0x137)&&_0x46f001[_0x312fe7(0xc1)]&&_0x48d304['name']&&_0x46f001[_0x312fe7(0xc1)]!==_0x48d304[_0x312fe7(0xc1)]&&(_0x48d304[_0x312fe7(0x134)]=_0x46f001[_0x312fe7(0xc1)]);}[_0x5e4536(0xe6)](_0xea8dd4){return 0x1/_0xea8dd4===Number['NEGATIVE_INFINITY'];}[_0x5e4536(0x13e)](_0x8c64a1){var _0x21f19d=_0x5e4536;!_0x8c64a1[_0x21f19d(0xbb)]||!_0x8c64a1['props']['length']||_0x8c64a1['type']===_0x21f19d(0x127)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0xd3)||_0x8c64a1[_0x21f19d(0xdb)]===_0x21f19d(0x111)||_0x8c64a1['props'][_0x21f19d(0x128)](function(_0x5e2f8b,_0x226a5b){var _0x2d5732=_0x21f19d,_0x4da0fc=_0x5e2f8b[_0x2d5732(0xc1)][_0x2d5732(0x8f)](),_0x29afb7=_0x226a5b[_0x2d5732(0xc1)]['toLowerCase']();return _0x4da0fc<_0x29afb7?-0x1:_0x4da0fc>_0x29afb7?0x1:0x0;});}['_addFunctionsNode'](_0x3fbedf,_0x27c343){var _0x8cc86e=_0x5e4536;if(!(_0x27c343[_0x8cc86e(0xf2)]||!_0x3fbedf[_0x8cc86e(0xbb)]||!_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)])){for(var _0x31fc60=[],_0x32f0f6=[],_0x180ca1=0x0,_0x54a446=_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0x136)];_0x180ca1<_0x54a446;_0x180ca1++){var _0x2c3adc=_0x3fbedf[_0x8cc86e(0xbb)][_0x180ca1];_0x2c3adc[_0x8cc86e(0xdb)]==='function'?_0x31fc60[_0x8cc86e(0xab)](_0x2c3adc):_0x32f0f6['push'](_0x2c3adc);}if(!(!_0x32f0f6[_0x8cc86e(0x136)]||_0x31fc60['length']<=0x1)){_0x3fbedf['props']=_0x32f0f6;var _0x526a94={'functionsNode':!0x0,'props':_0x31fc60};this[_0x8cc86e(0xe7)](_0x526a94,_0x27c343),this[_0x8cc86e(0x145)](_0x526a94,_0x27c343),this[_0x8cc86e(0xf6)](_0x526a94),this[_0x8cc86e(0x140)](_0x526a94,_0x27c343),_0x526a94['id']+='\\x20f',_0x3fbedf[_0x8cc86e(0xbb)][_0x8cc86e(0xa7)](_0x526a94);}}}['_addLoadNode'](_0x2cd35c,_0x3c2256){}[_0x5e4536(0xf6)](_0x5071a6){}['_isArray'](_0x201500){var _0x59e4d0=_0x5e4536;return Array[_0x59e4d0(0x13a)](_0x201500)||typeof _0x201500==_0x59e4d0(0x92)&&this[_0x59e4d0(0xc3)](_0x201500)===_0x59e4d0(0x11b);}[_0x5e4536(0x140)](_0x3f2c0a,_0x7450b9){}['_cleanNode'](_0x2e62ee){var _0x43cee3=_0x5e4536;delete _0x2e62ee['_hasSymbolPropertyOnItsPath'],delete _0x2e62ee[_0x43cee3(0xb6)],delete _0x2e62ee['_hasMapOnItsPath'];}['_setNodeExpressionPath'](_0x6525a9,_0x40549){}}let _0x5a92e0=new _0x3b9973(),_0x1d487d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x14fde1={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x40b2e7(_0x5130bb,_0x498a31,_0xbe04b7,_0x3de39f,_0x4121eb,_0x551e16){var _0x2a0f0b=_0x5e4536;let _0x16c88b,_0x243190;try{_0x243190=_0x376512(),_0x16c88b=_0x332c05[_0x498a31],!_0x16c88b||_0x243190-_0x16c88b['ts']>0x1f4&&_0x16c88b['count']&&_0x16c88b[_0x2a0f0b(0x121)]/_0x16c88b[_0x2a0f0b(0x96)]<0x64?(_0x332c05[_0x498a31]=_0x16c88b={'count':0x0,'time':0x0,'ts':_0x243190},_0x332c05[_0x2a0f0b(0x147)]={}):_0x243190-_0x332c05[_0x2a0f0b(0x147)]['ts']>0x32&&_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]&&_0x332c05['hits'][_0x2a0f0b(0x121)]/_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]<0x64&&(_0x332c05[_0x2a0f0b(0x147)]={});let _0x2d2538=[],_0x423652=_0x16c88b[_0x2a0f0b(0x113)]||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]?_0x14fde1:_0x1d487d,_0x53cd5b=_0x5a350e=>{var _0x52ca0f=_0x2a0f0b;let _0x1664a3={};return _0x1664a3['props']=_0x5a350e[_0x52ca0f(0xbb)],_0x1664a3[_0x52ca0f(0xd0)]=_0x5a350e[_0x52ca0f(0xd0)],_0x1664a3[_0x52ca0f(0xa2)]=_0x5a350e[_0x52ca0f(0xa2)],_0x1664a3[_0x52ca0f(0x8a)]=_0x5a350e[_0x52ca0f(0x8a)],_0x1664a3['autoExpandLimit']=_0x5a350e['autoExpandLimit'],_0x1664a3[_0x52ca0f(0x118)]=_0x5a350e[_0x52ca0f(0x118)],_0x1664a3[_0x52ca0f(0xbf)]=!0x1,_0x1664a3[_0x52ca0f(0xf2)]=!_0x187f00,_0x1664a3[_0x52ca0f(0xbd)]=0x1,_0x1664a3[_0x52ca0f(0x149)]=0x0,_0x1664a3[_0x52ca0f(0x9b)]=_0x52ca0f(0x114),_0x1664a3['rootExpression']=_0x52ca0f(0x12f),_0x1664a3['autoExpand']=!0x0,_0x1664a3['autoExpandPreviousObjects']=[],_0x1664a3[_0x52ca0f(0xbc)]=0x0,_0x1664a3[_0x52ca0f(0xc4)]=!0x0,_0x1664a3[_0x52ca0f(0x117)]=0x0,_0x1664a3[_0x52ca0f(0x13d)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1664a3;};for(var _0x35cfbf=0x0;_0x35cfbf<_0x4121eb[_0x2a0f0b(0x136)];_0x35cfbf++)_0x2d2538[_0x2a0f0b(0xab)](_0x5a92e0[_0x2a0f0b(0xfc)]({'timeNode':_0x5130bb==='time'||void 0x0},_0x4121eb[_0x35cfbf],_0x53cd5b(_0x423652),{}));if(_0x5130bb===_0x2a0f0b(0x74)){let _0x414286=Error[_0x2a0f0b(0xe2)];try{Error[_0x2a0f0b(0xe2)]=0x1/0x0,_0x2d2538['push'](_0x5a92e0['serialize']({'stackNode':!0x0},new Error()[_0x2a0f0b(0x105)],_0x53cd5b(_0x423652),{'strLength':0x1/0x0}));}finally{Error[_0x2a0f0b(0xe2)]=_0x414286;}}return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':_0x2d2538,'id':_0x498a31,'context':_0x551e16}]};}catch(_0x220553){return{'method':_0x2a0f0b(0x82),'version':_0x42bea6,'args':[{'ts':_0xbe04b7,'session':_0x3de39f,'args':[{'type':'unknown','error':_0x220553&&_0x220553[_0x2a0f0b(0x125)]}],'id':_0x498a31,'context':_0x551e16}]};}finally{try{if(_0x16c88b&&_0x243190){let _0x5ba0ff=_0x376512();_0x16c88b['count']++,_0x16c88b[_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x16c88b['ts']=_0x5ba0ff,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]++,_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]+=_0x150150(_0x243190,_0x5ba0ff),_0x332c05[_0x2a0f0b(0x147)]['ts']=_0x5ba0ff,(_0x16c88b['count']>0x32||_0x16c88b[_0x2a0f0b(0x121)]>0x64)&&(_0x16c88b[_0x2a0f0b(0x113)]=!0x0),(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x96)]>0x3e8||_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x121)]>0x12c)&&(_0x332c05[_0x2a0f0b(0x147)][_0x2a0f0b(0x113)]=!0x0);}}catch{}}}return _0x40b2e7;}((_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x33a8db,_0x27feac,_0x2310b,_0x2e77ad,_0x4c8059)=>{var _0x4cbce5=_0x40415b;if(_0x1736d1['_console_ninja'])return _0x1736d1[_0x4cbce5(0x116)];if(!J(_0x1736d1,_0x2310b,_0x29646c))return _0x1736d1[_0x4cbce5(0x116)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x1736d1['_console_ninja'];let _0x151cd0=W(_0x1736d1),_0xef5bf9=_0x151cd0[_0x4cbce5(0xc6)],_0x1688fe=_0x151cd0['timeStamp'],_0x4f14e6=_0x151cd0[_0x4cbce5(0x84)],_0x1baceb={'hits':{},'ts':{}},_0x314e00=Y(_0x1736d1,_0x2e77ad,_0x1baceb,_0x33a8db),_0x24315a=_0x5715b2=>{_0x1baceb['ts'][_0x5715b2]=_0x1688fe();},_0x44ac7c=(_0x505b4b,_0x42578e)=>{var _0x339ca0=_0x4cbce5;let _0xc4bb15=_0x1baceb['ts'][_0x42578e];if(delete _0x1baceb['ts'][_0x42578e],_0xc4bb15){let _0x5a72a8=_0xef5bf9(_0xc4bb15,_0x1688fe());_0x30913b(_0x314e00(_0x339ca0(0x121),_0x505b4b,_0x4f14e6(),_0x42b2e6,[_0x5a72a8],_0x42578e));}},_0xf224fe=_0x1dd9a3=>_0x2f9a6d=>{var _0x33fb3d=_0x4cbce5;try{_0x24315a(_0x2f9a6d),_0x1dd9a3(_0x2f9a6d);}finally{_0x1736d1['console'][_0x33fb3d(0x121)]=_0x1dd9a3;}},_0x37a34e=_0x4d8f53=>_0x62c773=>{var _0x2bb2f8=_0x4cbce5;try{let [_0x2138fe,_0x2665b0]=_0x62c773['split'](':logPointId:');_0x44ac7c(_0x2665b0,_0x2138fe),_0x4d8f53(_0x2138fe);}finally{_0x1736d1[_0x2bb2f8(0xf3)][_0x2bb2f8(0x12c)]=_0x4d8f53;}};_0x1736d1[_0x4cbce5(0x116)]={'consoleLog':(_0x5c1676,_0x1fc79d)=>{var _0xaa988d=_0x4cbce5;_0x1736d1[_0xaa988d(0xf3)]['log']['name']!=='disabledLog'&&_0x30913b(_0x314e00(_0xaa988d(0x82),_0x5c1676,_0x4f14e6(),_0x42b2e6,_0x1fc79d));},'consoleTrace':(_0x19003f,_0xdf40de)=>{var _0x46ecdb=_0x4cbce5;_0x1736d1['console'][_0x46ecdb(0x82)][_0x46ecdb(0xc1)]!==_0x46ecdb(0x78)&&_0x30913b(_0x314e00(_0x46ecdb(0x74),_0x19003f,_0x4f14e6(),_0x42b2e6,_0xdf40de));},'consoleTime':()=>{var _0x32a4f3=_0x4cbce5;_0x1736d1[_0x32a4f3(0xf3)]['time']=_0xf224fe(_0x1736d1['console'][_0x32a4f3(0x121)]);},'consoleTimeEnd':()=>{var _0xcc7eae=_0x4cbce5;_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]=_0x37a34e(_0x1736d1[_0xcc7eae(0xf3)][_0xcc7eae(0x12c)]);},'autoLog':(_0x52a395,_0xa2c9f3)=>{var _0x46acf6=_0x4cbce5;_0x30913b(_0x314e00(_0x46acf6(0x82),_0xa2c9f3,_0x4f14e6(),_0x42b2e6,[_0x52a395]));},'autoLogMany':(_0xb1c044,_0x31827c)=>{var _0xe19820=_0x4cbce5;_0x30913b(_0x314e00(_0xe19820(0x82),_0xb1c044,_0x4f14e6(),_0x42b2e6,_0x31827c));},'autoTrace':(_0x2502c8,_0x141673)=>{var _0x13b592=_0x4cbce5;_0x30913b(_0x314e00(_0x13b592(0x74),_0x141673,_0x4f14e6(),_0x42b2e6,[_0x2502c8]));},'autoTraceMany':(_0x3dcf65,_0x54d89d)=>{_0x30913b(_0x314e00('trace',_0x3dcf65,_0x4f14e6(),_0x42b2e6,_0x54d89d));},'autoTime':(_0x2cdd34,_0x5e0404,_0x318624)=>{_0x24315a(_0x318624);},'autoTimeEnd':(_0x12728b,_0x47f3f3,_0x2acb07)=>{_0x44ac7c(_0x47f3f3,_0x2acb07);},'coverage':_0x214d75=>{var _0x47fb9e=_0x4cbce5;_0x30913b({'method':_0x47fb9e(0x146),'version':_0x33a8db,'args':[{'id':_0x214d75}]});}};let _0x30913b=b(_0x1736d1,_0x121bc3,_0x97b8d5,_0x555de5,_0x29646c,_0x4c8059),_0x42b2e6=_0x1736d1[_0x4cbce5(0x106)];return _0x1736d1[_0x4cbce5(0x116)];})(globalThis,_0x40415b(0x91),_0x40415b(0x75),\"c:\\\\Users\\\\Romina Pc\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.241\\\\node_modules\",'webpack',_0x40415b(0x12e),_0x40415b(0x130),_0x40415b(0xac),_0x40415b(0x7a),_0x40415b(0x8e));");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/mediaquery.scss":
/*!*****************************!*\
  !*** ./src/mediaquery.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main_vue": 0,
/******/ 			"css/style": 0,
/******/ 			"css/mediaquery": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmyapp"] = self["webpackChunkmyapp"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style","css/mediaquery"], () => (__webpack_require__("./src/main_vue.js")))
/******/ 	__webpack_require__.O(undefined, ["css/style","css/mediaquery"], () => (__webpack_require__("./src/style.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style","css/mediaquery"], () => (__webpack_require__("./src/mediaquery.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;