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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      "titolo": "ACHTUNG - PANZER!",
      "sottotitolo": "Sviluppo, tattiche e potenziale operativo delle forze corazzate",
      "autore": "Heinz Guderian",
      "pagine": "286 pagg., ill. bn e col",
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
      "titolo": "1945 Germania anno zero",
      "sottotitolo": "Atrocità e crimini di guerra Alleati nel «memorandum di Darmstadt»",
      "autore": "Massimo Lucioli - Wehrmacht Research Group",
      "pagine": "542 p., ill., Brossura",
      "anno di pubblicazione": "2021",
      "descrizione": "Nel campo di internamento americano 91 a Darmstadt, nel 1946, in segreto, su richiesta del collegio di difesa di Norimberga, fu formato un comitato di lavoro di avvocati internati, davanti al quale circa 6.000 testimoni diretti fecero dichiarazioni giurate da aprile a luglio 1946 sulle violazioni delle leggi e delle regole di guerra da parte degli Alleati: dagli eccidi dei tedeschi etnici in Polonia nel 1939 alle uccisioni dei prigionieri di guerra da parte sovietica prima - spesso con casi di torture e mutilazioni - e Alleata poi, dalle violenze sessuali e brutalità contro i civili dei soldati Alleati agli stupri di gruppo e massacri di massa sovietici nelle province orientali della Germania nel 1944-1945, sino all'applicazione delle draconiane misure punitive del piano Morgenthau e della direttiva JCS-1067 statunitense contro le 'forze nemiche disarmate' tedesche nei campi di prigionia in Germania e Francia e contro la popolazione tedesca stremata dalla guerra. Per la prima volta tale raccolta viene pubblicata in italiano, assieme a una sconvolgente raccolta di immagini, molte delle quali inedite, illustrante questi crimini di guerra e contro l'umanità spesso taciuti.",
      "prezzo": "36,00 euro",
      "link_IBS": "https://www.ibs.it/1945-germania-anno-zero-atrocita-libro-massimo-lucioli-wehrmacht-research-group/e/9788831430159?queryId=f13c9fb4cbe7733518753947a94e81db"
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

    /* Controlla la gestione dei radiobutton del carosello */
    slideBullet: function slideBullet() {
      // Selezioniamo dal Dom i dots
      var dots = document.querySelectorAll('.carousel_bullet');
      var dotsArray = Array.from(dots);
      var currentIndex = 0; // Rimuoviamo la classe selected da tutti gli elementi

      slides.forEach(function (slide) {
        slide.classList.remove('selected');
      });

      for (var i = 0; i < dots.length; i++) {
        // Salviamo l'indice dell'elemento attivo --> variabile currentIndex
        // Aggiungiamo la classe selected all'elemento cliccato
        if (dots[i] === document.activeElement) {
          currentIndex = i;
          dots[currentIndex].classList.add('selected'); // Muoviamo le slide

          slides[currentIndex].style.transform = "translateX(".concat(bezierValue[i], "%)"); // Aggiungiamo la classe selected solo a quella con indice corrente

          slides[currentIndex].classList.add("selected");
        }
      } // Aggiorniamo il counter


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
        jumboTitleParent[0].children[1].remove(); // Sostituiamo con l'HTML che divide il titolo in due

        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1 class="special_title"> ITALIA </h1> <br> <h1 class="special_title_second"> Storica </h1>';
      } else {
        // Ripristiniamo l'HTML originale
        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1> ITALIA Storica </h1>';
      } // Sezione CORE
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
      } // else {
      // column.classList.add("order-first");
      // column.classList.toggle("order-last", false);
      // column.classList.toggle("order-css", false);
      // }
      // Gestiamo i div da 1200 a 2750px 
      // Aggiungiamo i div


      if (this.windowWidth >= 2001) {
        var divNode = document.querySelectorAll("#book_main > div"); // Se il numero di nodi-figli di divNode è pari a 2

        if (divNode.length == 2) {
          // Aggiungiamo un div all'inizio di book_main
          var createDiv = document.createElement("div");
          var bookMain = document.getElementById("book_main");
          bookMain.prepend(createDiv);
        }
      } else if (this.windowWidth < 2001) {
        var _divNode = document.querySelectorAll("#book_main > div"); // Se il numero di nodi-figli di divNode > 2


        if (_divNode.length > 2) {
          // Rimuoviamo il primo div (quello vuoto)
          var bookMainLong = document.querySelector("#book_main > div:nth-child(1)");

          _divNode[0].remove(bookMainLong);
        }
      } // Sezione ORDER

      /* Quando lo schermo è >= 2000px allora vengono eliminati div che contengono le card e le card assumono le classi card xl-4 lg-4 */

      /* Quando lo schermo è < 2000px allora vengono ripristinati i div originali e le card non hanno più le classi xl-4 e lg-4 */
      // Salva in una variabile l'elemento HTML con classe card container


      var cardContainer = document.getElementsByClassName('card-container'); // Salva in una variabile gli elementi HTML con classe card

      var cardsPosition = document.querySelectorAll('.card'); // Trasformiamo cardsPosition in Array

      var cardsPositionArray = Array.from(cardsPosition); // Cloniamo i nodi delle cards + discendenti

      var cloneNode = cardsPositionArray[0].cloneNode(true);
      var cloneNode1 = cardsPositionArray[1].cloneNode(true);
      var cloneNode2 = cardsPositionArray[2].cloneNode(true);

      if (this.windowWidth >= 2000) {
        // Eliminiamo i parent nodes con le card
        cardContainer[0].children[0].remove();
        cardContainer[0].children[1].remove();
        cardContainer[0].children[0].remove(); // Visualizziamo le card senza parent nodes

        cardContainer[0].appendChild(cloneNode);
        cardContainer[0].appendChild(cloneNode1);
        cardContainer[0].appendChild(cloneNode2); // Aggiungiamo le classi a tutte le card (abbiamo adesso la struttura div = "card col-xl-4 col-lg-4")

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
        cardContainer[0].children[0].remove(); // Ripristiniamo i "vecchi" parent nodes con le card copiando pari l'HTML originale (nota l'operatore +=)

        cardContainer[0].innerHTML += ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="public/ItaliaStoricaCatalogoIV-2022.pdf" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> ' + ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>' + ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.libroco.it/editore/ITALIA+Storica/240970" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> ';
      } // Sezione PERSONAL
      // Gestiamo la posizione del primo paragrafo sotto la pic


      if (this.windowWidth >= 2751) {
        // Il nodo corrispondente al paragrafo grazie al CCS sparisce (ma non viene rimosso dal DOM)
        var pic = document.getElementById("pic"); // Cloniamo il nodo paragrafo che ci interessa e lo salviamo in una variabile

        var clonePicP = pic.children[1].cloneNode(true); // Selezioniamo la posizione in cui inserire il paragrafo clonato

        var gridBlock = document.getElementsByClassName("grid-block"); // Se il numero di nodi-figli di gridBlock è < 6

        if (gridBlock[0].childElementCount < 6) {
          // Aggiungiamo il paragrafo clonato come primo figlio del div con classe gridBlock
          gridBlock[0].prepend(clonePicP);
        }
      } else {
        // Ripristiniamo il paragrafo originale
        document.querySelector("#pic > p").style.display = "block"; // Selezioniamo la posizione in cui inserire il paragrafo clonato

        var _gridBlock = document.getElementsByClassName("grid-block"); // Se il numero di nodi-figli di gridBlock è = 6


        if (_gridBlock[0].childElementCount >= 6) {
          // Cancelliamo il paragrafo clonato
          _gridBlock[0].children[0].remove();
        }
      } // Gestiamo le spaziature dei li dei libri 


      if (this.windowWidth <= 999) {
        // Selezioniamo i li delle due liste di libri
        var booklist1 = document.getElementById("list1");
        var booklist2 = document.getElementById("list2");
        var booklistElement1 = booklist1.children;
        var booklistElement2 = booklist2.children;
        var blelArray1 = Array.from(booklistElement1);
        var blelArray2 = Array.from(booklistElement2); // Mappiamo gli array per aggiornare con <br> la parte HTML dei li

        var mapBooklist1 = blelArray1.map(function (listItem) {
          var maphtml1 = "<li>" + listItem.textContent + "<br><br></li>";
          return maphtml1;
        });
        var mapBooklist2 = blelArray2.map(function (listItem) {
          var maphtml2 = "<li>" + listItem.textContent + "<br><br></li>";
          return maphtml2;
        }); // Rimuoviamo l'HTML esistente

        blelArray1.forEach(function (item) {
          item.remove();
        });
        blelArray2.forEach(function (item) {
          item.remove();
        }); // Visualizziamo il nuovo HTML mappato

        booklist1.insertAdjacentHTML("afterbegin", mapBooklist1.join(""));
        booklist2.insertAdjacentHTML("afterbegin", mapBooklist2.join(""));
      } else if (this.windowWidth > 999) {
        350;

        var _booklist = document.getElementById("list1");

        var _booklist2 = document.getElementById("list2");

        var _booklistElement = _booklist.children;
        var _booklistElement2 = _booklist2.children;

        var _blelArray = Array.from(_booklistElement);

        var _blelArray2 = Array.from(_booklistElement2); // Mappiamo gli array per aggiornare con <br> la parte HTML dei li


        var _mapBooklist = _blelArray.map(function (listItem) {
          var maphtml1 = "<li>" + listItem.textContent + "<br></li>";
          return maphtml1;
        });

        var _mapBooklist2 = _blelArray2.map(function (listItem) {
          var maphtml2 = "<li>" + listItem.textContent + "<br></li>";
          return maphtml2;
        }); // Rimuoviamo l'HTML esistente


        _blelArray.forEach(function (item) {
          item.remove();
        });

        _blelArray2.forEach(function (item) {
          item.remove();
        }); // Visualizziamo l'HTML originale


        _booklist.insertAdjacentHTML("afterbegin", _mapBooklist.join(""));

        _booklist2.insertAdjacentHTML("afterbegin", _mapBooklist2.join(""));
      } // Cambio template dei loghi


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
      } // Sezione FORM


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

var slides = document.querySelectorAll(".slide"); // current slide counter

var curSlide = 0; // Maximum number of slides

var maxSlide = slides.length - 1;
var bezierValue = [0, -100, -200, -300, -400, -500, -600]; // Loop through slides and set each slides translateX initial value property to index * 100%

slides.forEach(function (slide, index) {
  slide.style.transform = "translateX(".concat(index * -100, "%)");
}); // ARROWS E MOVIMENTO DEL CAROSELLO

/* FRECCIA DESTRA */
// select next slide button

var nextArrow = document.querySelector(".btn-next"); // add event listener and navigation functionality

nextArrow.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  } // gestione classe selected


  slides[curSlide].classList.add("selected");

  if (slides[curSlide - 1] !== undefined) {
    slides[curSlide - 1].classList.remove("selected");
  } // se sia l'elemento 0 che l'elemento massimo dell'array hanno la classe selected, toglila all'elemento massimo


  if (curSlide == 0 && slides[maxSlide].classList.contains("selected")) {
    slides[maxSlide].classList.remove("selected");
  } // move slide


  slides.forEach(function (slide, index) {
    slide.style.transform = "translateX(".concat(bezierValue[index], "%)");

    if ("translateX(".concat(bezierValue[index], "%)") == 0) {
      slide.style.transform = "translateX(100%)";
    }
  });
});
/* FRECCIA SINISTRA */
// select prev slide button

var prevArrow = document.querySelector(".btn-prev"); // add event listener and navigation functionality

prevArrow.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  } // gestione classe selected


  slides[curSlide].classList.add("selected");

  if (slides[curSlide + 1] !== undefined) {
    slides[curSlide + 1].classList.remove("selected");
  } // se sia l'elemento 0 che l'elemento massimo dell'array hanno la classe selected, toglila all'elemento 0


  if (curSlide == maxSlide && slides[0].classList.contains("selected")) {
    slides[0].classList.remove("selected");
  } // move slide


  slides.forEach(function (slide, index) {
    slide.style.transform = "translateX(".concat(bezierValue[index], "%)");
  });
});
/*---------- End Subsection Carousel  ----------*/

/*----------  Subsection Card outline colors  ----------*/

/* Quando i buttons delle card sono on hover allora l'outline delle card e le icone fontawesome cambiano colore */
// Selezioniamo i buttons delle card (nodeList)

var buttons = document.querySelectorAll('.card .orange'); // Trasformiamo buttons in Array

var buttonsArray = Array.from(buttons); // Selezioniamo gli elementi da cambiare (nodeList)

var iconsFas = document.querySelectorAll('.card .fas');
var cards = document.querySelectorAll('.card'); // Creiamo i cicli con i Listener e le funzioni per cambiare i colori

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
  var mailbody = document.getElementById('mailbody').value; // Variabile di tipo regExp - oggetto Javascript
  // Espressione regolare per l'email (username + @ + dominio + . + estensione del dominio TLD )

  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,10})$/;
  var regEmail = regx.test(email); // Verifica l'espressione regolare.

  /* eslint-disable */

  (_console = console).log.apply(_console, _toConsumableArray(oo_oo("98523dd_0", regEmail))); // Se tutto è ok, convalida i dati e inviali alla pagina


  if (regEmail) {
    // Costruiamo l'oggetto che conterrà i dati da inviare
    var formdata = {};
    formdata = {
      name: name,
      email: email,
      subject: subject,
      message: mailbody
    }; // Trasformiamo formdata in un oggetto Json

    var jason = JSON.stringify(formdata).serializeArray(); // Chiamata AJAX al server

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);

    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var _console2;

        /* eslint-disable */
        (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("98523dd_1", "Grazie ".concat(name, " per averci scritto. Ti risponderemo al pi\xF9 presto."))));
      }
    };

    xhr.setRequestHeader("Content-type", "multipart/form-data;", "charset=UTF-8");

    xhr.onerror = function () {
      var _console3;

      /* eslint-disable */
      (_console3 = console).log.apply(_console3, _toConsumableArray(oo_oo("98523dd_2", this.status, this.statusText)));
    };

    xhr.send(jason); // Se falso l'indirizzo mail è scritto sbagliato
  } else {
    // Selezioniamo il div con il messaggio di errore (displayNone)
    var invalidEmail = document.querySelector('.error'); // Rendiamo visibile il div

    invalidEmail.setAttribute('style', 'display:inline-block !important'); // Impostiamo l'outline color di errore

    var invalidInput = document.getElementById('email');
    invalidInput.style.outline = "thin solid rgb(244, 124, 32)"; // Usciamo dalla funzione senza inviare il file

    return false;
  }
}
/*---------- End Subsection Validation Form  ----------*/

/*=====  End of VANILLA JAVASCRIPT SECTION ======*/

/* eslint-disable */


;

function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcfe134=_0x1b19;(function(_0x4468fb,_0x2551f7){var _0x274ac8=_0x1b19,_0xb2e1e8=_0x4468fb();while(!![]){try{var _0x42c2b5=parseInt(_0x274ac8(0x26f))/0x1+-parseInt(_0x274ac8(0x216))/0x2*(parseInt(_0x274ac8(0x26b))/0x3)+parseInt(_0x274ac8(0x222))/0x4+-parseInt(_0x274ac8(0x20c))/0x5+-parseInt(_0x274ac8(0x24f))/0x6+-parseInt(_0x274ac8(0x282))/0x7*(-parseInt(_0x274ac8(0x1e9))/0x8)+parseInt(_0x274ac8(0x1ec))/0x9;if(_0x42c2b5===_0x2551f7)break;else _0xb2e1e8['push'](_0xb2e1e8['shift']());}catch(_0x276208){_0xb2e1e8['push'](_0xb2e1e8['shift']());}}}(_0x5a50,0xeef3d));var ue=Object['create'],te=Object[_0xcfe134(0x244)],he=Object[_0xcfe134(0x225)],le=Object['getOwnPropertyNames'],fe=Object[_0xcfe134(0x28e)],_e=Object['prototype'][_0xcfe134(0x224)],pe=(_0x3c3faa,_0x31c49d,_0x218496,_0x34692c)=>{var _0x16cdf5=_0xcfe134;if(_0x31c49d&&typeof _0x31c49d==_0x16cdf5(0x259)||typeof _0x31c49d==_0x16cdf5(0x24d)){for(let _0x549f6c of le(_0x31c49d))!_e['call'](_0x3c3faa,_0x549f6c)&&_0x549f6c!==_0x218496&&te(_0x3c3faa,_0x549f6c,{'get':()=>_0x31c49d[_0x549f6c],'enumerable':!(_0x34692c=he(_0x31c49d,_0x549f6c))||_0x34692c[_0x16cdf5(0x203)]});}return _0x3c3faa;},ne=(_0x49fcba,_0x3ff966,_0x295a8e)=>(_0x295a8e=_0x49fcba!=null?ue(fe(_0x49fcba)):{},pe(_0x3ff966||!_0x49fcba||!_0x49fcba[_0xcfe134(0x2af)]?te(_0x295a8e,'default',{'value':_0x49fcba,'enumerable':!0x0}):_0x295a8e,_0x49fcba)),Y=class{constructor(_0x155a1f,_0xc47347,_0x1d3337,_0x59c137){var _0x13383d=_0xcfe134;this[_0x13383d(0x2ad)]=_0x155a1f,this[_0x13383d(0x2a0)]=_0xc47347,this[_0x13383d(0x2a1)]=_0x1d3337,this[_0x13383d(0x265)]=_0x59c137,this[_0x13383d(0x2b0)]=!0x0,this[_0x13383d(0x238)]=!0x0,this[_0x13383d(0x2a3)]=!0x1,this[_0x13383d(0x243)]=[],this[_0x13383d(0x235)]=!0x1,this['_connecting']=!0x1,this[_0x13383d(0x23c)]=!!this[_0x13383d(0x2ad)][_0x13383d(0x288)],this[_0x13383d(0x25a)]=null,this[_0x13383d(0x24b)]=0x0,this[_0x13383d(0x267)]=0x14,this[_0x13383d(0x1f2)]=0x0,this[_0x13383d(0x271)]=0x3e8,this[_0x13383d(0x20b)]=this['_inBrowser']?_0x13383d(0x240):_0x13383d(0x2bf);}async[_0xcfe134(0x28c)](){var _0x162c9a=_0xcfe134;if(this[_0x162c9a(0x25a)])return this[_0x162c9a(0x25a)];let _0x55dba7;if(this[_0x162c9a(0x23c)])_0x55dba7=this[_0x162c9a(0x2ad)]['WebSocket'];else{if(this['global'][_0x162c9a(0x21b)]?.[_0x162c9a(0x27c)])_0x55dba7=this[_0x162c9a(0x2ad)][_0x162c9a(0x21b)]?.[_0x162c9a(0x27c)];else try{let _0x253161=await import(_0x162c9a(0x27f));_0x55dba7=(await import((await import(_0x162c9a(0x204)))['pathToFileURL'](_0x253161['join'](this['nodeModules'],'ws/index.js'))[_0x162c9a(0x2b3)]()))['default'];}catch{try{_0x55dba7=require(require(_0x162c9a(0x27f))[_0x162c9a(0x1f8)](this[_0x162c9a(0x265)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this['_WebSocketClass']=_0x55dba7,_0x55dba7;}[_0xcfe134(0x20e)](){var _0x105dea=_0xcfe134;this[_0x105dea(0x263)]||this[_0x105dea(0x235)]||this[_0x105dea(0x24b)]>=this[_0x105dea(0x267)]||(this[_0x105dea(0x238)]=!0x1,this[_0x105dea(0x263)]=!0x0,this[_0x105dea(0x24b)]++,this[_0x105dea(0x24a)]=new Promise((_0x3f18e1,_0x174b80)=>{var _0x36b3fe=_0x105dea;this[_0x36b3fe(0x28c)]()[_0x36b3fe(0x2c7)](_0x35ba34=>{var _0x16520f=_0x36b3fe;let _0x5a9399=new _0x35ba34(_0x16520f(0x236)+this[_0x16520f(0x2a0)]+':'+this[_0x16520f(0x2a1)]);_0x5a9399[_0x16520f(0x25b)]=()=>{var _0x217167=_0x16520f;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5a9399),this[_0x217167(0x28d)](),_0x174b80(new Error('logger\\x20websocket\\x20error'));},_0x5a9399[_0x16520f(0x233)]=()=>{var _0x2bbe79=_0x16520f;this[_0x2bbe79(0x23c)]||_0x5a9399[_0x2bbe79(0x2a6)]&&_0x5a9399[_0x2bbe79(0x2a6)][_0x2bbe79(0x215)]&&_0x5a9399[_0x2bbe79(0x2a6)]['unref'](),_0x3f18e1(_0x5a9399);},_0x5a9399['onclose']=()=>{var _0x12f410=_0x16520f;this[_0x12f410(0x238)]=!0x0,this['_disposeWebsocket'](_0x5a9399),this[_0x12f410(0x28d)]();},_0x5a9399[_0x16520f(0x206)]=_0x1f1d28=>{var _0x58a958=_0x16520f;try{_0x1f1d28&&_0x1f1d28[_0x58a958(0x2ab)]&&this[_0x58a958(0x23c)]&&JSON[_0x58a958(0x23e)](_0x1f1d28[_0x58a958(0x2ab)])[_0x58a958(0x2ca)]==='reload'&&this['global']['location']['reload']();}catch{}};})[_0x36b3fe(0x2c7)](_0xf301af=>(this[_0x36b3fe(0x235)]=!0x0,this['_connecting']=!0x1,this[_0x36b3fe(0x238)]=!0x1,this['_allowedToSend']=!0x0,this[_0x36b3fe(0x2a3)]=!0x1,this['_activeConnectionMessageCount']=0x0,this[_0x36b3fe(0x24b)]=0x0,_0xf301af))['catch'](_0x1a115c=>(this[_0x36b3fe(0x235)]=!0x1,this['_connecting']=!0x1,_0x174b80(new Error(_0x36b3fe(0x250)+(_0x1a115c&&_0x1a115c['message'])))));}));}['_disposeWebsocket'](_0x31a71f){var _0x4f37e8=_0xcfe134;this['_connected']=!0x1,this[_0x4f37e8(0x263)]=!0x1;try{_0x31a71f[_0x4f37e8(0x1ed)]=null,_0x31a71f[_0x4f37e8(0x25b)]=null,_0x31a71f['onopen']=null;}catch{}try{_0x31a71f[_0x4f37e8(0x2b4)]<0x2&&_0x31a71f[_0x4f37e8(0x277)]();}catch{}}['_attemptToReconnectShortly'](){var _0x597ad3=_0xcfe134;clearTimeout(this[_0x597ad3(0x242)]),!(this[_0x597ad3(0x24b)]>=this['_maxConnectAttemptCount'])&&(this[_0x597ad3(0x242)]=setTimeout(()=>{var _0x8d7425=_0x597ad3;this['_connected']||this[_0x8d7425(0x263)]||(this['_connectToHostNow'](),this[_0x8d7425(0x24a)]?.[_0x8d7425(0x281)](()=>this[_0x8d7425(0x28d)]()));},0x1f4),this[_0x597ad3(0x242)][_0x597ad3(0x215)]&&this['_reconnectTimeout'][_0x597ad3(0x215)]());}async[_0xcfe134(0x1f0)](_0x5f1fde){var _0x3f01ff=_0xcfe134;try{if(!this[_0x3f01ff(0x2b0)])return;if(this[_0x3f01ff(0x2a3)]){this[_0x3f01ff(0x243)][_0x3f01ff(0x23d)](_0x5f1fde);return;}this['_allowedToConnectOnSend']&&this[_0x3f01ff(0x20e)](),this['_activeConnectionMessageCount']++;let _0x17c2fd=this[_0x3f01ff(0x1f2)]>=this[_0x3f01ff(0x271)];_0x17c2fd&&(this['_delayMessageSending']=!0x0);let _0x265dce=await this[_0x3f01ff(0x24a)];_0x265dce['send'](JSON[_0x3f01ff(0x28a)](_0x5f1fde)),this[_0x3f01ff(0x235)]&&_0x17c2fd&&(this[_0x3f01ff(0x238)]=!0x1,this[_0x3f01ff(0x26d)](_0x265dce),this['_connectToHostNow'](),this[_0x3f01ff(0x24a)]?.['then'](()=>{var _0x48c1c5=_0x3f01ff;if(this['_messageQueue'][_0x48c1c5(0x1f7)]){let _0x15c0e3=this['_messageQueue'][_0x48c1c5(0x22f)](0x0,this[_0x48c1c5(0x271)]);for(let _0x526480=0x0;_0x526480<_0x15c0e3[_0x48c1c5(0x1f7)];_0x526480++)this['send'](_0x15c0e3[_0x526480]);}}));}catch(_0x4c9bb5){console[_0x3f01ff(0x2a7)](this['_sendErrorMessage']+':\\x20'+(_0x4c9bb5&&_0x4c9bb5[_0x3f01ff(0x24e)])),this[_0x3f01ff(0x2b0)]=!0x1,this[_0x3f01ff(0x28d)]();}}};function H(_0x2cbef7,_0xafb9c0,_0x1bd161,_0x262bfb,_0x253f19){var _0x3c52cd=_0xcfe134;let _0x207e6b=_0x1bd161[_0x3c52cd(0x260)](',')[_0x3c52cd(0x211)](_0x12e809=>{var _0x2d2980=_0x3c52cd;try{_0x2cbef7[_0x2d2980(0x25c)]||((_0x253f19==='next.js'||_0x253f19===_0x2d2980(0x285))&&(_0x253f19+=_0x2cbef7['process']?.[_0x2d2980(0x28f)]?.[_0x2d2980(0x249)]?'\\x20server':_0x2d2980(0x28b)),_0x2cbef7[_0x2d2980(0x25c)]={'id':+new Date(),'tool':_0x253f19});let _0x791650=new Y(_0x2cbef7,_0xafb9c0,_0x12e809,_0x262bfb);return _0x791650[_0x2d2980(0x1f0)][_0x2d2980(0x25f)](_0x791650);}catch(_0x29e9aa){return console[_0x2d2980(0x2a7)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x29e9aa&&_0x29e9aa[_0x2d2980(0x24e)]),()=>{};}});return _0x56ba36=>_0x207e6b['forEach'](_0x2a62ec=>_0x2a62ec(_0x56ba36));}function V(_0x54e590){var _0x6c5e26=_0xcfe134;let _0x17ecfc=function(_0x23e9bb,_0x57fea6){return _0x57fea6-_0x23e9bb;},_0x2d9d93;if(_0x54e590['performance'])_0x2d9d93=function(){var _0x4f1ee6=_0x1b19;return _0x54e590[_0x4f1ee6(0x29c)]['now']();};else{if(_0x54e590[_0x6c5e26(0x21b)]&&_0x54e590['process'][_0x6c5e26(0x24c)])_0x2d9d93=function(){var _0x37ace4=_0x6c5e26;return _0x54e590[_0x37ace4(0x21b)][_0x37ace4(0x24c)]();},_0x17ecfc=function(_0x3857d3,_0x25e9de){return 0x3e8*(_0x25e9de[0x0]-_0x3857d3[0x0])+(_0x25e9de[0x1]-_0x3857d3[0x1])/0xf4240;};else try{let {performance:_0x10816d}=require('perf_hooks');_0x2d9d93=function(){var _0x5a764d=_0x6c5e26;return _0x10816d[_0x5a764d(0x2b8)]();};}catch{_0x2d9d93=function(){return+new Date();};}}return{'elapsed':_0x17ecfc,'timeStamp':_0x2d9d93,'now':()=>Date[_0x6c5e26(0x2b8)]()};}function _0x1b19(_0x2700a6,_0x201957){var _0x5a5002=_0x5a50();return _0x1b19=function(_0x1b19aa,_0x1ce59a){_0x1b19aa=_0x1b19aa-0x1e4;var _0x4b57a7=_0x5a5002[_0x1b19aa];return _0x4b57a7;},_0x1b19(_0x2700a6,_0x201957);}function _0x5a50(){var _0x971926=['_messageQueue','defineProperty','timeEnd','root_exp_id','1.0.0','_setNodePermissions','node','_ws','_connectAttemptCount','hrtime','function','message','2190384pooyOE','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_objectToString','value','name','_console_ninja','51004','_p_length','resolveGetters','_type','object','_WebSocketClass','onerror','_console_ninja_session','setter','log','bind','split','HTMLAllCollection','_getOwnPropertySymbols','_connecting','funcName','nodeModules','_capIfString','_maxConnectAttemptCount','parent','RegExp','Buffer','19566OOwhvP','String','_disposeWebsocket','_setNodeId','143352rReNBD','symbol','_maxActiveConnectionMessageCount','get','_setNodeExpandableState','_additionalMetadata','_isArray','isArray','close','Number','pop','level','autoExpandMaxDepth','_WebSocket','_setNodeExpressionPath','stackTraceLimit','path','unshift','catch','201257BHXaAs','allStrLength','_setNodeQueryPath','remix','_quotedRegExp','NEGATIVE_INFINITY','WebSocket','time','stringify','\\x20browser','getWebSocketClass','_attemptToReconnectShortly','getPrototypeOf','versions','_getOwnPropertyDescriptor','_addProperty','_treeNodePropertiesAfterFullValue','_HTMLAllCollection','...','stack','props','array','[object\\x20Map]','undefined','capped','type','performance','_propertyAccessor','sortProps','_treeNodePropertiesBeforeFullValue','host','port','_getOwnPropertyNames','_delayMessageSending','_isNegativeZero','_cleanNode','_socket','warn','bigint','rootExpression','_property','data','Set','global','_consoleNinjaAllowedToStart','__es'+'Module','_allowedToSend','_keyStrRegExp','expId','toString','readyState','negativeZero','Error','current','now','cappedElements','autoExpandLimit','call','replace','negativeInfinity','_hasMapOnItsPath','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help','127.0.0.1','count','test','totalStrLength','_numberRegExp','_sortProps','autoExpand','then','number','expressionsToEvaluate','method','_dateToString','getOwnPropertySymbols',':logPointId:','valueOf','disabledLog','104PfkITC','string','match','6012126jwWzhA','onclose','date','isExpressionToEvaluate','send','_Symbol','_activeConnectionMessageCount','noFunctions','prototype','unknown','_isMap','length','join','hits','webpack','getter','slice','includes','elapsed','nuxt','[object\\x20Array]','_setNodeLabel','root_exp','enumerable','url','1679617091586','onmessage','_isPrimitiveWrapperType','concat','cappedProps','constructor','_sendErrorMessage','3297340vhtbSB','argumentResolutionError','_connectToHostNow','trace','_p_','map','[object\\x20Set]','hostname','index','unref','154xkszED','location','serialize','reduceLimits','elements','process','autoExpandPropertyCount','_propertyName',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-AFCIIDK\",\"192.168.122.144\"],\"c:\\\\Users\\\\Romina Pc\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.88\\\\node_modules\",'toLowerCase','null','5281384WZiWPo','autoExpandPreviousObjects','hasOwnProperty','getOwnPropertyDescriptor','indexOf','_addFunctionsNode','_addLoadNode','strLength','forEach','Map','depth','_regExpToString','boolean','splice','nan','substr','sort','onopen','_blacklistedProperty','_connected','ws://','timeStamp','_allowedToConnectOnSend','console','_isPrimitiveType','_p_name','_inBrowser','push','parse','_isSet','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help','_processTreeNodeResult','_reconnectTimeout'];_0x5a50=function(){return _0x971926;};return _0x5a50();}function X(_0x403454,_0x3f5a4a,_0x2f12f0){var _0x4e24a3=_0xcfe134;if(_0x403454[_0x4e24a3(0x2ae)]!==void 0x0)return _0x403454[_0x4e24a3(0x2ae)];let _0x24acfe=_0x403454[_0x4e24a3(0x21b)]?.[_0x4e24a3(0x28f)]?.[_0x4e24a3(0x249)];return _0x24acfe&&_0x2f12f0===_0x4e24a3(0x1ff)?_0x403454[_0x4e24a3(0x2ae)]=!0x1:_0x403454[_0x4e24a3(0x2ae)]=_0x24acfe||!_0x3f5a4a||_0x403454[_0x4e24a3(0x217)]?.[_0x4e24a3(0x213)]&&_0x3f5a4a[_0x4e24a3(0x1fd)](_0x403454['location'][_0x4e24a3(0x213)]),_0x403454['_consoleNinjaAllowedToStart'];}((_0x58d5fd,_0x1caf36,_0x2004a7,_0x3efeb5,_0x29fe8e,_0x40a438,_0x263f51,_0x4d59b2,_0x145245)=>{var _0x11fb96=_0xcfe134;if(_0x58d5fd['_console_ninja'])return _0x58d5fd[_0x11fb96(0x254)];if(!X(_0x58d5fd,_0x4d59b2,_0x29fe8e))return _0x58d5fd['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x58d5fd[_0x11fb96(0x254)];let _0x122644={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x58f852={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x5b6b8e=V(_0x58d5fd),_0x2e5026=_0x5b6b8e[_0x11fb96(0x1fe)],_0x36201f=_0x5b6b8e[_0x11fb96(0x237)],_0x13c198=_0x5b6b8e[_0x11fb96(0x2b8)],_0x23da4b={'hits':{},'ts':{}},_0x293fc5=_0x113f6f=>{_0x23da4b['ts'][_0x113f6f]=_0x36201f();},_0x43d794=(_0x374ad1,_0x2f930a)=>{var _0x3f5518=_0x11fb96;let _0x46d279=_0x23da4b['ts'][_0x2f930a];if(delete _0x23da4b['ts'][_0x2f930a],_0x46d279){let _0xfbe456=_0x2e5026(_0x46d279,_0x36201f());_0x14369a(_0x3025de(_0x3f5518(0x289),_0x374ad1,_0x13c198(),_0x42608f,[_0xfbe456],_0x2f930a));}},_0x37742e=_0x1311da=>_0x5bf9e0=>{var _0x20c19f=_0x11fb96;try{_0x293fc5(_0x5bf9e0),_0x1311da(_0x5bf9e0);}finally{_0x58d5fd[_0x20c19f(0x239)][_0x20c19f(0x289)]=_0x1311da;}},_0x3aa1a5=_0x4dc052=>_0xba253a=>{var _0x3b4f2a=_0x11fb96;try{let [_0x91ec10,_0x815b35]=_0xba253a['split'](_0x3b4f2a(0x1e6));_0x43d794(_0x815b35,_0x91ec10),_0x4dc052(_0x91ec10);}finally{_0x58d5fd[_0x3b4f2a(0x239)]['timeEnd']=_0x4dc052;}};_0x58d5fd[_0x11fb96(0x254)]={'consoleLog':(_0x4398b3,_0x35d8b6)=>{var _0x369005=_0x11fb96;_0x58d5fd[_0x369005(0x239)][_0x369005(0x25e)][_0x369005(0x253)]!==_0x369005(0x1e8)&&_0x14369a(_0x3025de(_0x369005(0x25e),_0x4398b3,_0x13c198(),_0x42608f,_0x35d8b6));},'consoleTrace':(_0x3ed296,_0x267192)=>{var _0xff51c2=_0x11fb96;_0x58d5fd[_0xff51c2(0x239)][_0xff51c2(0x25e)][_0xff51c2(0x253)]!=='disabledTrace'&&_0x14369a(_0x3025de('trace',_0x3ed296,_0x13c198(),_0x42608f,_0x267192));},'consoleTime':()=>{var _0x54a542=_0x11fb96;_0x58d5fd[_0x54a542(0x239)][_0x54a542(0x289)]=_0x37742e(_0x58d5fd['console'][_0x54a542(0x289)]);},'consoleTimeEnd':()=>{var _0x1f00ca=_0x11fb96;_0x58d5fd['console']['timeEnd']=_0x3aa1a5(_0x58d5fd[_0x1f00ca(0x239)][_0x1f00ca(0x245)]);},'autoLog':(_0x31d937,_0x312743)=>{_0x14369a(_0x3025de('log',_0x312743,_0x13c198(),_0x42608f,[_0x31d937]));},'autoTrace':(_0x520406,_0x524f3f)=>{var _0x2301af=_0x11fb96;_0x14369a(_0x3025de(_0x2301af(0x20f),_0x524f3f,_0x13c198(),_0x42608f,[_0x520406]));},'autoTime':(_0x39939b,_0x2d2cdb,_0x276ac9)=>{_0x293fc5(_0x276ac9);},'autoTimeEnd':(_0x3292cc,_0xeb9c1d,_0x27fffc)=>{_0x43d794(_0xeb9c1d,_0x27fffc);}};let _0x14369a=H(_0x58d5fd,_0x1caf36,_0x2004a7,_0x3efeb5,_0x29fe8e),_0x42608f=_0x58d5fd[_0x11fb96(0x25c)];class _0x3dcd9c{constructor(){var _0x382f91=_0x11fb96;this[_0x382f91(0x2b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x382f91(0x286)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x58d5fd['undefined'],this[_0x382f91(0x293)]=_0x58d5fd[_0x382f91(0x261)],this[_0x382f91(0x290)]=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object['getOwnPropertyNames'],this['_Symbol']=_0x58d5fd['Symbol'],this[_0x382f91(0x22d)]=RegExp[_0x382f91(0x1f4)]['toString'],this[_0x382f91(0x1e4)]=Date['prototype'][_0x382f91(0x2b3)];}['serialize'](_0x533de0,_0x18acc6,_0x549ef7,_0x43e9df){var _0x1b3372=_0x11fb96,_0x8593c7=this,_0x1573f2=_0x549ef7[_0x1b3372(0x2c6)];function _0x47d09e(_0x5cc4e4,_0x4f930a,_0x973c9){var _0x2c19c9=_0x1b3372;_0x4f930a['type']=_0x2c19c9(0x1f5),_0x4f930a['error']=_0x5cc4e4[_0x2c19c9(0x24e)],_0x17e6f7=_0x973c9[_0x2c19c9(0x249)][_0x2c19c9(0x2b7)],_0x973c9[_0x2c19c9(0x249)]['current']=_0x4f930a,_0x8593c7['_treeNodePropertiesBeforeFullValue'](_0x4f930a,_0x973c9);}if(_0x18acc6&&_0x18acc6[_0x1b3372(0x20d)])_0x47d09e(_0x18acc6,_0x533de0,_0x549ef7);else try{_0x549ef7['level']++,_0x549ef7[_0x1b3372(0x2c6)]&&_0x549ef7[_0x1b3372(0x223)][_0x1b3372(0x23d)](_0x18acc6);var _0x1eb918,_0x20ef2f,_0x555bf8,_0x4c82ac,_0x307815=[],_0x9175ec=[],_0x498f4e,_0x5b0f0d=this[_0x1b3372(0x258)](_0x18acc6),_0x3e6898=_0x5b0f0d==='array',_0x305f87=!0x1,_0x51c53d=_0x5b0f0d===_0x1b3372(0x24d),_0x243d72=this[_0x1b3372(0x23a)](_0x5b0f0d),_0x4c478a=this['_isPrimitiveWrapperType'](_0x5b0f0d),_0x1bcc55=_0x243d72||_0x4c478a,_0x418698={},_0x3bcb43=0x0,_0x14201d=!0x1,_0x17e6f7,_0x341cac=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x549ef7[_0x1b3372(0x22c)]){if(_0x3e6898){if(_0x20ef2f=_0x18acc6[_0x1b3372(0x1f7)],_0x20ef2f>_0x549ef7[_0x1b3372(0x21a)]){for(_0x555bf8=0x0,_0x4c82ac=_0x549ef7[_0x1b3372(0x21a)],_0x1eb918=_0x555bf8;_0x1eb918<_0x4c82ac;_0x1eb918++)_0x9175ec[_0x1b3372(0x23d)](_0x8593c7[_0x1b3372(0x291)](_0x307815,_0x18acc6,_0x5b0f0d,_0x1eb918,_0x549ef7));_0x533de0[_0x1b3372(0x2b9)]=!0x0;}else{for(_0x555bf8=0x0,_0x4c82ac=_0x20ef2f,_0x1eb918=_0x555bf8;_0x1eb918<_0x4c82ac;_0x1eb918++)_0x9175ec[_0x1b3372(0x23d)](_0x8593c7[_0x1b3372(0x291)](_0x307815,_0x18acc6,_0x5b0f0d,_0x1eb918,_0x549ef7));}_0x549ef7[_0x1b3372(0x21c)]+=_0x9175ec['length'];}if(!(_0x5b0f0d===_0x1b3372(0x221)||_0x5b0f0d===_0x1b3372(0x299))&&!_0x243d72&&_0x5b0f0d!=='String'&&_0x5b0f0d!==_0x1b3372(0x26a)&&_0x5b0f0d!==_0x1b3372(0x2a8)){var _0x581592=_0x43e9df[_0x1b3372(0x296)]||_0x549ef7[_0x1b3372(0x296)];if(this[_0x1b3372(0x23f)](_0x18acc6)?(_0x1eb918=0x0,_0x18acc6[_0x1b3372(0x22a)](function(_0x3eda5d){var _0x3f019b=_0x1b3372;if(_0x3bcb43++,_0x549ef7[_0x3f019b(0x21c)]++,_0x3bcb43>_0x581592){_0x14201d=!0x0;return;}if(!_0x549ef7[_0x3f019b(0x1ef)]&&_0x549ef7[_0x3f019b(0x2c6)]&&_0x549ef7[_0x3f019b(0x21c)]>_0x549ef7['autoExpandLimit']){_0x14201d=!0x0;return;}_0x9175ec['push'](_0x8593c7['_addProperty'](_0x307815,_0x18acc6,'Set',_0x1eb918++,_0x549ef7,function(_0x4e9c34){return function(){return _0x4e9c34;};}(_0x3eda5d)));})):this['_isMap'](_0x18acc6)&&_0x18acc6[_0x1b3372(0x22a)](function(_0x19a9ba,_0xe85f8f){var _0x4263e1=_0x1b3372;if(_0x3bcb43++,_0x549ef7[_0x4263e1(0x21c)]++,_0x3bcb43>_0x581592){_0x14201d=!0x0;return;}if(!_0x549ef7[_0x4263e1(0x1ef)]&&_0x549ef7[_0x4263e1(0x2c6)]&&_0x549ef7[_0x4263e1(0x21c)]>_0x549ef7['autoExpandLimit']){_0x14201d=!0x0;return;}var _0x1535b4=_0xe85f8f[_0x4263e1(0x2b3)]();_0x1535b4[_0x4263e1(0x1f7)]>0x64&&(_0x1535b4=_0x1535b4[_0x4263e1(0x1fc)](0x0,0x64)+_0x4263e1(0x294)),_0x9175ec[_0x4263e1(0x23d)](_0x8593c7[_0x4263e1(0x291)](_0x307815,_0x18acc6,'Map',_0x1535b4,_0x549ef7,function(_0x1dbb7f){return function(){return _0x1dbb7f;};}(_0x19a9ba)));}),!_0x305f87){try{for(_0x498f4e in _0x18acc6)if(!(_0x3e6898&&_0x341cac[_0x1b3372(0x2c2)](_0x498f4e))&&!this[_0x1b3372(0x234)](_0x18acc6,_0x498f4e,_0x549ef7)){if(_0x3bcb43++,_0x549ef7[_0x1b3372(0x21c)]++,_0x3bcb43>_0x581592){_0x14201d=!0x0;break;}if(!_0x549ef7[_0x1b3372(0x1ef)]&&_0x549ef7[_0x1b3372(0x2c6)]&&_0x549ef7[_0x1b3372(0x21c)]>_0x549ef7[_0x1b3372(0x2ba)]){_0x14201d=!0x0;break;}_0x9175ec['push'](_0x8593c7['_addObjectProperty'](_0x307815,_0x418698,_0x18acc6,_0x5b0f0d,_0x498f4e,_0x549ef7));}}catch{}if(_0x418698[_0x1b3372(0x256)]=!0x0,_0x51c53d&&(_0x418698[_0x1b3372(0x23b)]=!0x0),!_0x14201d){var _0x581b72=[][_0x1b3372(0x208)](this[_0x1b3372(0x2a2)](_0x18acc6))[_0x1b3372(0x208)](this['_getOwnPropertySymbols'](_0x18acc6));for(_0x1eb918=0x0,_0x20ef2f=_0x581b72[_0x1b3372(0x1f7)];_0x1eb918<_0x20ef2f;_0x1eb918++)if(_0x498f4e=_0x581b72[_0x1eb918],!(_0x3e6898&&_0x341cac[_0x1b3372(0x2c2)](_0x498f4e[_0x1b3372(0x2b3)]()))&&!this[_0x1b3372(0x234)](_0x18acc6,_0x498f4e,_0x549ef7)&&!_0x418698[_0x1b3372(0x210)+_0x498f4e['toString']()]){if(_0x3bcb43++,_0x549ef7[_0x1b3372(0x21c)]++,_0x3bcb43>_0x581592){_0x14201d=!0x0;break;}if(!_0x549ef7[_0x1b3372(0x1ef)]&&_0x549ef7[_0x1b3372(0x2c6)]&&_0x549ef7[_0x1b3372(0x21c)]>_0x549ef7['autoExpandLimit']){_0x14201d=!0x0;break;}_0x9175ec[_0x1b3372(0x23d)](_0x8593c7['_addObjectProperty'](_0x307815,_0x418698,_0x18acc6,_0x5b0f0d,_0x498f4e,_0x549ef7));}}}}}if(_0x533de0[_0x1b3372(0x29b)]=_0x5b0f0d,_0x1bcc55?(_0x533de0[_0x1b3372(0x252)]=_0x18acc6[_0x1b3372(0x1e7)](),this['_capIfString'](_0x5b0f0d,_0x533de0,_0x549ef7,_0x43e9df)):_0x5b0f0d===_0x1b3372(0x1ee)?_0x533de0[_0x1b3372(0x252)]=this[_0x1b3372(0x1e4)][_0x1b3372(0x2bb)](_0x18acc6):_0x5b0f0d===_0x1b3372(0x269)?_0x533de0['value']=this[_0x1b3372(0x22d)]['call'](_0x18acc6):_0x5b0f0d===_0x1b3372(0x270)&&this[_0x1b3372(0x1f1)]?_0x533de0['value']=this[_0x1b3372(0x1f1)]['prototype'][_0x1b3372(0x2b3)][_0x1b3372(0x2bb)](_0x18acc6):!_0x549ef7[_0x1b3372(0x22c)]&&!(_0x5b0f0d===_0x1b3372(0x221)||_0x5b0f0d===_0x1b3372(0x299))&&(delete _0x533de0['value'],_0x533de0[_0x1b3372(0x29a)]=!0x0),_0x14201d&&(_0x533de0[_0x1b3372(0x209)]=!0x0),_0x17e6f7=_0x549ef7[_0x1b3372(0x249)]['current'],_0x549ef7[_0x1b3372(0x249)][_0x1b3372(0x2b7)]=_0x533de0,this['_treeNodePropertiesBeforeFullValue'](_0x533de0,_0x549ef7),_0x9175ec[_0x1b3372(0x1f7)]){for(_0x1eb918=0x0,_0x20ef2f=_0x9175ec[_0x1b3372(0x1f7)];_0x1eb918<_0x20ef2f;_0x1eb918++)_0x9175ec[_0x1eb918](_0x1eb918);}_0x307815[_0x1b3372(0x1f7)]&&(_0x533de0[_0x1b3372(0x296)]=_0x307815);}catch(_0x5c525a){_0x47d09e(_0x5c525a,_0x533de0,_0x549ef7);}return this[_0x1b3372(0x274)](_0x18acc6,_0x533de0),this[_0x1b3372(0x292)](_0x533de0,_0x549ef7),_0x549ef7[_0x1b3372(0x249)][_0x1b3372(0x2b7)]=_0x17e6f7,_0x549ef7['level']--,_0x549ef7[_0x1b3372(0x2c6)]=_0x1573f2,_0x549ef7[_0x1b3372(0x2c6)]&&_0x549ef7[_0x1b3372(0x223)][_0x1b3372(0x279)](),_0x533de0;}[_0x11fb96(0x262)](_0xe367fc){var _0x45b138=_0x11fb96;return Object[_0x45b138(0x1e5)]?Object[_0x45b138(0x1e5)](_0xe367fc):[];}[_0x11fb96(0x23f)](_0x18f915){var _0x546cf1=_0x11fb96;return!!(_0x18f915&&_0x58d5fd[_0x546cf1(0x2ac)]&&this[_0x546cf1(0x251)](_0x18f915)===_0x546cf1(0x212)&&_0x18f915[_0x546cf1(0x22a)]);}['_blacklistedProperty'](_0x4214f8,_0x125d02,_0x24f7ee){var _0x22cbce=_0x11fb96;return _0x24f7ee['noFunctions']?typeof _0x4214f8[_0x125d02]==_0x22cbce(0x24d):!0x1;}[_0x11fb96(0x258)](_0x1a8bbd){var _0x1da751=_0x11fb96,_0x3a7ba2='';return _0x3a7ba2=typeof _0x1a8bbd,_0x3a7ba2===_0x1da751(0x259)?this[_0x1da751(0x251)](_0x1a8bbd)===_0x1da751(0x200)?_0x3a7ba2=_0x1da751(0x297):this[_0x1da751(0x251)](_0x1a8bbd)==='[object\\x20Date]'?_0x3a7ba2=_0x1da751(0x1ee):_0x1a8bbd===null?_0x3a7ba2=_0x1da751(0x221):_0x1a8bbd['constructor']&&(_0x3a7ba2=_0x1a8bbd[_0x1da751(0x20a)]['name']||_0x3a7ba2):_0x3a7ba2===_0x1da751(0x299)&&this[_0x1da751(0x293)]&&_0x1a8bbd instanceof this[_0x1da751(0x293)]&&(_0x3a7ba2='HTMLAllCollection'),_0x3a7ba2;}['_objectToString'](_0x4bddc1){var _0x383399=_0x11fb96;return Object[_0x383399(0x1f4)][_0x383399(0x2b3)][_0x383399(0x2bb)](_0x4bddc1);}[_0x11fb96(0x23a)](_0x5176b5){var _0x198d81=_0x11fb96;return _0x5176b5===_0x198d81(0x22e)||_0x5176b5==='string'||_0x5176b5===_0x198d81(0x2c8);}[_0x11fb96(0x207)](_0x18ad5e){var _0x112d40=_0x11fb96;return _0x18ad5e==='Boolean'||_0x18ad5e===_0x112d40(0x26c)||_0x18ad5e===_0x112d40(0x278);}['_addProperty'](_0x5e40d4,_0x21caed,_0x6091f0,_0x4d0f2e,_0x4efe56,_0x58c1b4){var _0x4b328a=this;return function(_0x2715c5){var _0x4418b1=_0x1b19,_0x57316b=_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x2b7)],_0x43afed=_0x4efe56['node'][_0x4418b1(0x214)],_0x3d2070=_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x268)];_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x268)]=_0x57316b,_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x214)]=typeof _0x4d0f2e=='number'?_0x4d0f2e:_0x2715c5,_0x5e40d4[_0x4418b1(0x23d)](_0x4b328a[_0x4418b1(0x2aa)](_0x21caed,_0x6091f0,_0x4d0f2e,_0x4efe56,_0x58c1b4)),_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x268)]=_0x3d2070,_0x4efe56[_0x4418b1(0x249)][_0x4418b1(0x214)]=_0x43afed;};}['_addObjectProperty'](_0x249b45,_0x40bf62,_0x42ce45,_0x3cc296,_0x137f6d,_0x920515,_0x3e11cc){var _0x95f19c=_0x11fb96,_0x18b1da=this;return _0x40bf62['_p_'+_0x137f6d[_0x95f19c(0x2b3)]()]=!0x0,function(_0x4dda55){var _0x3ecb41=_0x95f19c,_0x117acb=_0x920515['node'][_0x3ecb41(0x2b7)],_0x15a29e=_0x920515[_0x3ecb41(0x249)][_0x3ecb41(0x214)],_0x1e0271=_0x920515[_0x3ecb41(0x249)][_0x3ecb41(0x268)];_0x920515[_0x3ecb41(0x249)][_0x3ecb41(0x268)]=_0x117acb,_0x920515['node'][_0x3ecb41(0x214)]=_0x4dda55,_0x249b45['push'](_0x18b1da[_0x3ecb41(0x2aa)](_0x42ce45,_0x3cc296,_0x137f6d,_0x920515,_0x3e11cc)),_0x920515['node'][_0x3ecb41(0x268)]=_0x1e0271,_0x920515[_0x3ecb41(0x249)][_0x3ecb41(0x214)]=_0x15a29e;};}[_0x11fb96(0x2aa)](_0x13e4ee,_0x305bf2,_0x4447c1,_0x5cfaee,_0x47534d){var _0x339a15=_0x11fb96,_0x3b7056=this;_0x47534d||(_0x47534d=function(_0x58b8b1,_0x55651b){return _0x58b8b1[_0x55651b];});var _0x2638ab=_0x4447c1[_0x339a15(0x2b3)](),_0xdf5493=_0x5cfaee['expressionsToEvaluate']||{},_0x4aea60=_0x5cfaee[_0x339a15(0x22c)],_0x5d9c9e=_0x5cfaee['isExpressionToEvaluate'];try{var _0x1014f6=this[_0x339a15(0x1f6)](_0x13e4ee),_0xa1a11=_0x2638ab;_0x1014f6&&_0xa1a11[0x0]==='\\x27'&&(_0xa1a11=_0xa1a11[_0x339a15(0x231)](0x1,_0xa1a11['length']-0x2));var _0x3c010e=_0x5cfaee[_0x339a15(0x2c9)]=_0xdf5493['_p_'+_0xa1a11];_0x3c010e&&(_0x5cfaee[_0x339a15(0x22c)]=_0x5cfaee[_0x339a15(0x22c)]+0x1),_0x5cfaee[_0x339a15(0x1ef)]=!!_0x3c010e;var _0x440ed0=typeof _0x4447c1=='symbol',_0x1a9841={'name':_0x440ed0||_0x1014f6?_0x2638ab:this[_0x339a15(0x21d)](_0x2638ab)};if(_0x440ed0&&(_0x1a9841[_0x339a15(0x270)]=!0x0),!(_0x305bf2==='array'||_0x305bf2===_0x339a15(0x2b6))){var _0x9ac71c=this[_0x339a15(0x290)](_0x13e4ee,_0x4447c1);if(_0x9ac71c&&(_0x9ac71c['set']&&(_0x1a9841[_0x339a15(0x25d)]=!0x0),_0x9ac71c[_0x339a15(0x272)]&&!_0x3c010e&&!_0x5cfaee[_0x339a15(0x257)]))return _0x1a9841[_0x339a15(0x1fb)]=!0x0,this[_0x339a15(0x241)](_0x1a9841,_0x5cfaee),_0x1a9841;}var _0x49cda7;try{_0x49cda7=_0x47534d(_0x13e4ee,_0x4447c1);}catch(_0x48af81){return _0x1a9841={'name':_0x2638ab,'type':_0x339a15(0x1f5),'error':_0x48af81['message']},this['_processTreeNodeResult'](_0x1a9841,_0x5cfaee),_0x1a9841;}var _0x4c5e5d=this[_0x339a15(0x258)](_0x49cda7),_0x4bae1e=this[_0x339a15(0x23a)](_0x4c5e5d);if(_0x1a9841['type']=_0x4c5e5d,_0x4bae1e)this[_0x339a15(0x241)](_0x1a9841,_0x5cfaee,_0x49cda7,function(){var _0x3ce40a=_0x339a15;_0x1a9841[_0x3ce40a(0x252)]=_0x49cda7[_0x3ce40a(0x1e7)](),!_0x3c010e&&_0x3b7056['_capIfString'](_0x4c5e5d,_0x1a9841,_0x5cfaee,{});});else{var _0x4eb4b6=_0x5cfaee[_0x339a15(0x2c6)]&&_0x5cfaee[_0x339a15(0x27a)]<_0x5cfaee[_0x339a15(0x27b)]&&_0x5cfaee[_0x339a15(0x223)][_0x339a15(0x226)](_0x49cda7)<0x0&&_0x4c5e5d!==_0x339a15(0x24d)&&_0x5cfaee[_0x339a15(0x21c)]<_0x5cfaee[_0x339a15(0x2ba)];_0x4eb4b6||_0x5cfaee[_0x339a15(0x27a)]<_0x4aea60||_0x3c010e?(this['serialize'](_0x1a9841,_0x49cda7,_0x5cfaee,_0x3c010e||{}),this[_0x339a15(0x274)](_0x49cda7,_0x1a9841)):this['_processTreeNodeResult'](_0x1a9841,_0x5cfaee,_0x49cda7,function(){var _0x394baa=_0x339a15;_0x4c5e5d===_0x394baa(0x221)||_0x4c5e5d==='undefined'||(delete _0x1a9841[_0x394baa(0x252)],_0x1a9841[_0x394baa(0x29a)]=!0x0);});}return _0x1a9841;}finally{_0x5cfaee[_0x339a15(0x2c9)]=_0xdf5493,_0x5cfaee[_0x339a15(0x22c)]=_0x4aea60,_0x5cfaee['isExpressionToEvaluate']=_0x5d9c9e;}}[_0x11fb96(0x266)](_0x2b0347,_0x4202bc,_0x165710,_0x2a93fc){var _0x12c211=_0x11fb96,_0x5c639b=_0x2a93fc[_0x12c211(0x229)]||_0x165710[_0x12c211(0x229)];if((_0x2b0347==='string'||_0x2b0347===_0x12c211(0x26c))&&_0x4202bc[_0x12c211(0x252)]){let _0x5249b0=_0x4202bc['value']['length'];_0x165710['allStrLength']+=_0x5249b0,_0x165710[_0x12c211(0x283)]>_0x165710[_0x12c211(0x2c3)]?(_0x4202bc[_0x12c211(0x29a)]='',delete _0x4202bc[_0x12c211(0x252)]):_0x5249b0>_0x5c639b&&(_0x4202bc['capped']=_0x4202bc[_0x12c211(0x252)][_0x12c211(0x231)](0x0,_0x5c639b),delete _0x4202bc['value']);}}[_0x11fb96(0x1f6)](_0x48efee){var _0x2138e9=_0x11fb96;return!!(_0x48efee&&_0x58d5fd[_0x2138e9(0x22b)]&&this['_objectToString'](_0x48efee)===_0x2138e9(0x298)&&_0x48efee[_0x2138e9(0x22a)]);}[_0x11fb96(0x21d)](_0x1b1fe3){var _0x49b2d5=_0x11fb96;if(_0x1b1fe3[_0x49b2d5(0x1eb)](/^\\d+$/))return _0x1b1fe3;var _0x52d2ce;try{_0x52d2ce=JSON[_0x49b2d5(0x28a)](''+_0x1b1fe3);}catch{_0x52d2ce='\\x22'+this['_objectToString'](_0x1b1fe3)+'\\x22';}return _0x52d2ce[_0x49b2d5(0x1eb)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x52d2ce=_0x52d2ce[_0x49b2d5(0x231)](0x1,_0x52d2ce['length']-0x2):_0x52d2ce=_0x52d2ce[_0x49b2d5(0x2bc)](/'/g,'\\x5c\\x27')[_0x49b2d5(0x2bc)](/\\\\\"/g,'\\x22')[_0x49b2d5(0x2bc)](/(^\"|\"$)/g,'\\x27'),_0x52d2ce;}[_0x11fb96(0x241)](_0x553c96,_0x4f630b,_0x286765,_0x23d54a){var _0x59def0=_0x11fb96;this[_0x59def0(0x29f)](_0x553c96,_0x4f630b),_0x23d54a&&_0x23d54a(),this['_additionalMetadata'](_0x286765,_0x553c96),this[_0x59def0(0x292)](_0x553c96,_0x4f630b);}[_0x11fb96(0x29f)](_0x396620,_0x2e6dc5){var _0x2bea75=_0x11fb96;this['_setNodeId'](_0x396620,_0x2e6dc5),this[_0x2bea75(0x284)](_0x396620,_0x2e6dc5),this[_0x2bea75(0x27d)](_0x396620,_0x2e6dc5),this[_0x2bea75(0x248)](_0x396620,_0x2e6dc5);}[_0x11fb96(0x26e)](_0x1762fc,_0x329356){}[_0x11fb96(0x284)](_0x57c0e3,_0xf4cea1){}[_0x11fb96(0x201)](_0x24a2df,_0xe1b02){}['_isUndefined'](_0x38c12a){return _0x38c12a===this['_undefined'];}['_treeNodePropertiesAfterFullValue'](_0x38d9e0,_0x2c61ed){var _0x93817=_0x11fb96;this[_0x93817(0x201)](_0x38d9e0,_0x2c61ed),this[_0x93817(0x273)](_0x38d9e0),_0x2c61ed[_0x93817(0x29e)]&&this[_0x93817(0x2c5)](_0x38d9e0),this[_0x93817(0x227)](_0x38d9e0,_0x2c61ed),this[_0x93817(0x228)](_0x38d9e0,_0x2c61ed),this[_0x93817(0x2a5)](_0x38d9e0);}['_additionalMetadata'](_0x46554f,_0x4b46e9){var _0x242999=_0x11fb96;try{_0x46554f&&typeof _0x46554f[_0x242999(0x1f7)]==_0x242999(0x2c8)&&(_0x4b46e9[_0x242999(0x1f7)]=_0x46554f['length']);}catch{}if(_0x4b46e9[_0x242999(0x29b)]==='number'||_0x4b46e9[_0x242999(0x29b)]===_0x242999(0x278)){if(isNaN(_0x4b46e9[_0x242999(0x252)]))_0x4b46e9[_0x242999(0x230)]=!0x0,delete _0x4b46e9['value'];else switch(_0x4b46e9['value']){case Number['POSITIVE_INFINITY']:_0x4b46e9['positiveInfinity']=!0x0,delete _0x4b46e9[_0x242999(0x252)];break;case Number[_0x242999(0x287)]:_0x4b46e9[_0x242999(0x2bd)]=!0x0,delete _0x4b46e9[_0x242999(0x252)];break;case 0x0:this[_0x242999(0x2a4)](_0x4b46e9[_0x242999(0x252)])&&(_0x4b46e9[_0x242999(0x2b5)]=!0x0);break;}}else _0x4b46e9[_0x242999(0x29b)]===_0x242999(0x24d)&&typeof _0x46554f[_0x242999(0x253)]==_0x242999(0x1ea)&&_0x46554f[_0x242999(0x253)]&&_0x4b46e9[_0x242999(0x253)]&&_0x46554f[_0x242999(0x253)]!==_0x4b46e9[_0x242999(0x253)]&&(_0x4b46e9[_0x242999(0x264)]=_0x46554f[_0x242999(0x253)]);}[_0x11fb96(0x2a4)](_0x4cbbf6){var _0x194acc=_0x11fb96;return 0x1/_0x4cbbf6===Number[_0x194acc(0x287)];}[_0x11fb96(0x2c5)](_0x11e796){var _0x21794e=_0x11fb96;!_0x11e796[_0x21794e(0x296)]||!_0x11e796[_0x21794e(0x296)][_0x21794e(0x1f7)]||_0x11e796[_0x21794e(0x29b)]===_0x21794e(0x297)||_0x11e796[_0x21794e(0x29b)]==='Map'||_0x11e796['type']===_0x21794e(0x2ac)||_0x11e796[_0x21794e(0x296)][_0x21794e(0x232)](function(_0x17f1a0,_0x1ccc47){var _0x110b4e=_0x21794e,_0x4b2891=_0x17f1a0['name'][_0x110b4e(0x220)](),_0x1a9871=_0x1ccc47[_0x110b4e(0x253)][_0x110b4e(0x220)]();return _0x4b2891<_0x1a9871?-0x1:_0x4b2891>_0x1a9871?0x1:0x0;});}[_0x11fb96(0x227)](_0x37681a,_0x4e90a0){var _0x46f1c0=_0x11fb96;if(!(_0x4e90a0[_0x46f1c0(0x1f3)]||!_0x37681a['props']||!_0x37681a[_0x46f1c0(0x296)]['length'])){for(var _0x107f97=[],_0x53a87b=[],_0x5243b0=0x0,_0x55ca92=_0x37681a['props'][_0x46f1c0(0x1f7)];_0x5243b0<_0x55ca92;_0x5243b0++){var _0x78471a=_0x37681a[_0x46f1c0(0x296)][_0x5243b0];_0x78471a[_0x46f1c0(0x29b)]===_0x46f1c0(0x24d)?_0x107f97['push'](_0x78471a):_0x53a87b[_0x46f1c0(0x23d)](_0x78471a);}if(!(!_0x53a87b['length']||_0x107f97['length']<=0x1)){_0x37681a[_0x46f1c0(0x296)]=_0x53a87b;var _0x1e8218={'functionsNode':!0x0,'props':_0x107f97};this['_setNodeId'](_0x1e8218,_0x4e90a0),this[_0x46f1c0(0x201)](_0x1e8218,_0x4e90a0),this[_0x46f1c0(0x273)](_0x1e8218),this[_0x46f1c0(0x248)](_0x1e8218,_0x4e90a0),_0x1e8218['id']+='\\x20f',_0x37681a[_0x46f1c0(0x296)][_0x46f1c0(0x280)](_0x1e8218);}}}[_0x11fb96(0x228)](_0x279875,_0x1d5955){}[_0x11fb96(0x273)](_0x5ec97c){}[_0x11fb96(0x275)](_0x525896){var _0x275635=_0x11fb96;return Array[_0x275635(0x276)](_0x525896)||typeof _0x525896=='object'&&this[_0x275635(0x251)](_0x525896)===_0x275635(0x200);}['_setNodePermissions'](_0x196851,_0x12ea1e){}[_0x11fb96(0x2a5)](_0x1fdfc5){var _0x59deb8=_0x11fb96;delete _0x1fdfc5['_hasSymbolPropertyOnItsPath'],delete _0x1fdfc5['_hasSetOnItsPath'],delete _0x1fdfc5[_0x59deb8(0x2be)];}['_setNodeExpressionPath'](_0x3818a1,_0x50cc59){}[_0x11fb96(0x29d)](_0x29c38a){var _0x2b7781=_0x11fb96;return _0x29c38a?_0x29c38a['match'](this[_0x2b7781(0x2c4)])?'['+_0x29c38a+']':_0x29c38a[_0x2b7781(0x1eb)](this['_keyStrRegExp'])?'.'+_0x29c38a:_0x29c38a[_0x2b7781(0x1eb)](this['_quotedRegExp'])?'['+_0x29c38a+']':'[\\x27'+_0x29c38a+'\\x27]':'';}}let _0x1cc0a2=new _0x3dcd9c();function _0x3025de(_0x35935d,_0x7bbed2,_0x4d91e5,_0x475c6b,_0x15dedb,_0x5bda63){var _0x4f22fc=_0x11fb96;let _0xda6e75,_0x25c95e;try{_0x25c95e=_0x36201f(),_0xda6e75=_0x23da4b[_0x7bbed2],!_0xda6e75||_0x25c95e-_0xda6e75['ts']>0x1f4&&_0xda6e75[_0x4f22fc(0x2c1)]&&_0xda6e75[_0x4f22fc(0x289)]/_0xda6e75[_0x4f22fc(0x2c1)]<0x64?(_0x23da4b[_0x7bbed2]=_0xda6e75={'count':0x0,'time':0x0,'ts':_0x25c95e},_0x23da4b['hits']={}):_0x25c95e-_0x23da4b[_0x4f22fc(0x1f9)]['ts']>0x32&&_0x23da4b[_0x4f22fc(0x1f9)][_0x4f22fc(0x2c1)]&&_0x23da4b[_0x4f22fc(0x1f9)][_0x4f22fc(0x289)]/_0x23da4b[_0x4f22fc(0x1f9)]['count']<0x64&&(_0x23da4b[_0x4f22fc(0x1f9)]={});let _0x265d7f=[],_0x4b3c56=_0xda6e75['reduceLimits']||_0x23da4b['hits']['reduceLimits']?_0x58f852:_0x122644,_0x4006f0=_0x495224=>{var _0x216b10=_0x4f22fc;let _0x1fe7cd={};return _0x1fe7cd[_0x216b10(0x296)]=_0x495224['props'],_0x1fe7cd[_0x216b10(0x21a)]=_0x495224['elements'],_0x1fe7cd['strLength']=_0x495224[_0x216b10(0x229)],_0x1fe7cd[_0x216b10(0x2c3)]=_0x495224['totalStrLength'],_0x1fe7cd[_0x216b10(0x2ba)]=_0x495224[_0x216b10(0x2ba)],_0x1fe7cd['autoExpandMaxDepth']=_0x495224[_0x216b10(0x27b)],_0x1fe7cd[_0x216b10(0x29e)]=!0x1,_0x1fe7cd[_0x216b10(0x1f3)]=!_0x145245,_0x1fe7cd[_0x216b10(0x22c)]=0x1,_0x1fe7cd['level']=0x0,_0x1fe7cd[_0x216b10(0x2b2)]=_0x216b10(0x246),_0x1fe7cd[_0x216b10(0x2a9)]=_0x216b10(0x202),_0x1fe7cd['autoExpand']=!0x0,_0x1fe7cd[_0x216b10(0x223)]=[],_0x1fe7cd[_0x216b10(0x21c)]=0x0,_0x1fe7cd[_0x216b10(0x257)]=!0x0,_0x1fe7cd['allStrLength']=0x0,_0x1fe7cd[_0x216b10(0x249)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1fe7cd;};for(var _0x5511a4=0x0;_0x5511a4<_0x15dedb[_0x4f22fc(0x1f7)];_0x5511a4++)_0x265d7f[_0x4f22fc(0x23d)](_0x1cc0a2['serialize']({'timeNode':_0x35935d===_0x4f22fc(0x289)||void 0x0},_0x15dedb[_0x5511a4],_0x4006f0(_0x4b3c56),{}));if(_0x35935d==='trace'){let _0x251935=Error[_0x4f22fc(0x27e)];try{Error['stackTraceLimit']=0x1/0x0,_0x265d7f[_0x4f22fc(0x23d)](_0x1cc0a2[_0x4f22fc(0x218)]({'stackNode':!0x0},new Error()[_0x4f22fc(0x295)],_0x4006f0(_0x4b3c56),{'strLength':0x1/0x0}));}finally{Error[_0x4f22fc(0x27e)]=_0x251935;}}return{'method':_0x4f22fc(0x25e),'version':_0x40a438,'args':[{'id':_0x7bbed2,'ts':_0x4d91e5,'args':_0x265d7f,'context':_0x5bda63,'session':_0x475c6b}]};}catch(_0x2e17b2){return{'method':'log','version':_0x40a438,'args':[{'id':_0x7bbed2,'ts':_0x4d91e5,'args':[{'type':_0x4f22fc(0x1f5),'error':_0x2e17b2&&_0x2e17b2[_0x4f22fc(0x24e)],'context':_0x5bda63,'session':_0x475c6b}]}]};}finally{try{if(_0xda6e75&&_0x25c95e){let _0x557615=_0x36201f();_0xda6e75[_0x4f22fc(0x2c1)]++,_0xda6e75['time']+=_0x2e5026(_0x25c95e,_0x557615),_0xda6e75['ts']=_0x557615,_0x23da4b[_0x4f22fc(0x1f9)][_0x4f22fc(0x2c1)]++,_0x23da4b['hits']['time']+=_0x2e5026(_0x25c95e,_0x557615),_0x23da4b[_0x4f22fc(0x1f9)]['ts']=_0x557615,(_0xda6e75['count']>0x32||_0xda6e75[_0x4f22fc(0x289)]>0x64)&&(_0xda6e75['reduceLimits']=!0x0),(_0x23da4b['hits'][_0x4f22fc(0x2c1)]>0x3e8||_0x23da4b[_0x4f22fc(0x1f9)][_0x4f22fc(0x289)]>0x12c)&&(_0x23da4b[_0x4f22fc(0x1f9)][_0x4f22fc(0x219)]=!0x0);}}catch{}}}return _0x58d5fd[_0x11fb96(0x254)];})(globalThis,_0xcfe134(0x2c0),_0xcfe134(0x255),_0xcfe134(0x21f),_0xcfe134(0x1fa),_0xcfe134(0x247),_0xcfe134(0x205),_0xcfe134(0x21e),'1');");
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

;
/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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