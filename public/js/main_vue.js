/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main_vue.js":
/*!*************************!*\
  !*** ./src/main_vue.js ***!
  \*************************/
/***/ (() => {

/*=============================================
    =            VUE SECTION           =
=============================================*/
Vue.config.devtools = true;
var app = new Vue({
  el: "#app",
  data: {
    counter: 0,
    images: ["public/img/carousel0.jpg", "public/img/carousel1.jpg", "public/img/carousel2.jpg", "public/img/carousel3.jpg", "public/img/carousel4.jpg", "public/img/carousel5.jpg", "public/img/carousel6.jpg", "public/img/carousel7.jpg"],
    libri: [{
      "titolo": "I Tiger delle Waffen SS in azione",
      "sottotitolo": "Dai diari di guerra dei carristi delle Waffen-SS Ernst Streng e Heinz Trautmann. Russia 1943-1944 - Normandia 1944 -Germania 1945",
      "autore": "Wilhelm Fey",
      "pagine": "302 pagg, ill. bn e colori.",
      "anno di pubblicazione": "2024",
      "descrizione": "Queste pagine sono la testimonianza diretta di un giovanissimo equipaggio di un Tiger in tutti i punti più cruciali dei vari teatri di guerra da est a ovest nel 1943-1945, terminante nella zona dei drammatici scontri della disfatta finale intorno a Berlino. Troviamo questi stessi carristi negli attacchi fulminei contro Charkov e Bielgorod nel 1943 e nei combattimenti difensivi tra Kiev e Zhitomir dell'inverno 1943-1944; viviamo con loro l’assalto massiccio delle truppe Alleate sbarcate in Normandia e i contrattacchi dei Panzer e Grenadiere sotto la martellante supremazia numerica, aerea e d’artiglieria nemica; li ritroviamo infine nelle disperate azioni per aprire un varco alla 9ª Armata attraverso le masse dell’Esercito russo tra l'Oder e l'Elba nel 1945. Edizione riveduta di un classico storico-militare ampliata con decine di rare fotografie, profili a colori e mappe e in appendice una cronistoria delle unità protagoniste, ossia la schwere Kompanie della SS-Panzergrenadier-Division “Das Reich” e dello schwere SS-Panzer-Abteilung 102/502, ordini di battaglia e due testimonianze inedite.",
      "prezzo": "29,00 euro",
      "link_IBS": "https://www.ibs.it/tiger-delle-waffen-ss-in-libro-wilhelm-fey/e/9788831430388?inventoryId=725611650&queryId=890b5169be2dafa0e5dcb05c15b4e703"
    }, {
      "titolo": "Aprile 1945: Garfagnana addio!",
      "sottotitolo": "Gli ultimi combattimenti sulla Linea Gotica del Battaglione “Intra” della Divisione “Monterosa”",
      "autore": "Pierfelice Cantori",
      "pagine": "164 pagg, ill. bn e colori.",
      "anno di pubblicazione": "2024",
      "descrizione": "Dopo molti anni vedono finalmente la luce le memorie di Garfagnana del Capitano Pierfelice Cantori, Comandante della 12a Compagnia del Battaglione “Intra” della Divisione Alpina “Monterosa”, dattiloscritte nelle pause delle ultime vicende del fronte della Linea Gotica sulle Apuane nel 1945. Sono pagine immediate, incisive, a volte taglienti, altre velate di emozione, frenata dal suo essere Ufficiale fin nell'intimo. La narrazione si focalizza nell'ultima difesa, nel cedimento elastico del fronte, nella difficile ritirata, culminata nei dintorni di Fornovo con la resa con l'onore delle armi da parte dei soldati brasiliani della Força Expedicionária Brasileira, vecchi nemici incontrati in Garfagnana. In appendice, una cronistoria della 12a Compagnia del Battaglione “Intra”, rare immagini del Reparto e fotografie attuali dei luoghi dei combattimenti. ",
      "prezzo": "22,00 euro",
      "link_IBS": "https://www.ibs.it/aprile-1945-garfagnana-addio-ultimi-libro-pierfelice-cantori/e/9788831430357?inventoryId=736175611&queryId=d35dcd2029563a2d375d50e33c4e1c77"
    }, {
      "titolo": "Al fianco di Hitler",
      "sottotitolo": "Le Memorie dell’Aiutante della Luftwaffe di Hitler 1937-1945",
      "autore": "Nicolaus von Below",
      "pagine": "328 pagg, ill. bn.",
      "anno di pubblicazione": "2024",
      "descrizione": "Per quasi otto anni, dal 16 giugno 1937 al 29 aprile 1945, Nicolaus von Below prestò servizio come Aiutante della Luftwaffe presso il Führer, sperimentando in stretta vicinanza ad Hitler l’ascesa e la caduta della Germania nazionalsocialista. Le sue memorie, qui pubblicate per la prima volta in edizione italiana, sono un documento importante e già largamente utilizzato dagli studiosi del nazionalsocialismo, e meritano attenzione sotto diversi profili. In primo luogo esse, al pari per esempio di quelle di Albert Speer, sono significative per capire la fascinazione che Hitler riuscì ad esercitare su personaggi appartenenti non all’ambiente nazionalsocialista vero e proprio, ma piuttosto a quello conservatore. Com’era, appunto, il caso di von Below. Queste memorie offrono, inoltre, uno sguardo della vita quotidiana all’interno della cerchia di collaboratori e intimi del Führer, ma fanno capire anche l’esistenza di profonde rivalità, contrasti, giochi di potere sviluppatisi all’ombra del dittatore. Con una prefazione del Professor Francesco Perfetti. ",
      "prezzo": "26,00 euro",
      "link_IBS": "https://www.ibs.it/al-fianco-di-hitler-memorie-libro-nicolaus-von-below/e/9788831430296?inventoryId=661932557&queryId=d35dcd2029563a2d375d50e33c4e1c77"
    }, {
      "titolo": "Battaglie di Panzer",
      "sottotitolo": "I combattimenti di corazzati in Polonia, Francia, Balcani, Nordafrica, Russia e sul fronte occidentale nelle memorie di un Ufficiale di unità Panzer",
      "autore": "Friedrich Wilhelm von Mellenthin",
      "pagine": "428 pagg, ill. bn e colori.",
      "anno di pubblicazione": "2024",
      "descrizione": "«Questo libro è basato sulle mie esperienze durante la Seconda guerra mondiale. In qualità di Ufficiale di Stato Maggiore ho partecipato ad alcune delle più importanti Campagne in Africa, in Russia e sul fronte occidentale, venendo a contatto diretto con molti dei più valenti soldati tedeschi, come il Feldmaresciallo Erwin Rommel e il Generale Hermann Balck. All'esordio del conflitto ho fatto parte, in qualità di Capitano, dello Stato Maggiore del III Corpo d'Armata che invase la Polonia, e alla fine della guerra ero Maggior Generale e Capo di Stato Maggiore della 5a Panzerarmee nella sacca della Ruhr. Sono stato in servizio durante tutta la guerra e impegnato in combattimento in Polonia, Francia, Balcani, Nordafrica, Russia (nelle battaglie di Stalingrado, Kursk, Kharkov, Zhitomir, Kiev e sul Dnieper), poi di nuovo in Polonia, in Francia, e infine nelle Ardenne e in Renania. Ho partecipato a molte battaglie decisive, incontrando soldati brillanti e valorosi; ho visto carri armati in azione nei più vari contesti di guerra, dalle foreste innevate della Russia alle piane assolate e desertiche dell'Africa settentrionale» (dalla prefazione dell'autore) ",
      "prezzo": "38,00 euro",
      "link_IBS": "https://www.ibs.it/kommando-forze-speciali-tedesche-nella-libro-james-lucas/e/9788831430302?queryId=cdcc5d0d15e21a1abb8c53a67317202f"
    }, {
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
      "titolo": "Il sognatore con l'elmetto",
      "sottotitolo": "Le memorie di un giovane volontario della Divisione SS «Charlemagne» nel libro-verità che scosse la Francia",
      "autore": "Christian de La Mazière",
      "pagine": "402 p., ill., Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "Christian de La Mazière fu giornalista per 'Le Pays libre', un quotidiano minore della Collaborazione, volontario nella Divisione SS 'Charlemagne' negli ultimi combattimenti sul fronte orientale, e nel dopoguerra esperto di pubbliche relazioni del cinema internazionale e amante di Juliette Gréco e Dalida: nelle sue memorie, inedite in italiano e che alla loro uscita in Francia nel 1972 furono un vero e proprio caso letterario, il 'romanzo di formazione' di un giovane idealista dalla Parigi dell'estate 1944 al viaggio attraverso una Germania straziata dalle bombe Alleate sino al campo d'addestramento di Wildflecken, e all'invio in Pomerania contro i T-34 e Stalin sovietici dilaganti verso ovest, tra colonne di profughi e combattimenti disperati. Quindi, l'odissea nelle foreste baltiche dei superstiti stremati del suo reparto, la resa, la prigionia sovietica e il rientro in Francia, il processo per collaborazionismo e il suo trasferimento da un carcere all'altro, da Fresnes alla cupa ex abbazia di Clairvaux, un folle universo carcerario popolato da criminali comuni d'ogni sorta e detenuti politici, sino al suo rilascio nel 1948, tra i resti delle sue illusioni perdute.",
      "prezzo": "27,00 euro",
      "link_IBS": "https://www.ibs.it/sognatore-con-elmetto-memorie-di-libro-christian-de-la-maziere/e/9788831430197?queryId=4ee58d6f57910da25b14c27026fe5cd7"
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

      // Se lo schermo ha una larghezza compresa tra 300px e 999px vanno cambiati l'HTML e il top% del titolo
      var jumboTitleParent = document.getElementsByClassName('main_title');
      if (this.windowWidth < 1000) {
        // Eliminiamo il nodo che contiene il titolo formattato male selezionando il genitore
        jumboTitleParent[0].children[1].remove();

        // Sostituiamo con l'HTML che divide il titolo in due
        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1 class="special_title"> ITALIA </h1> <br> <h1 class="special_title_second"> Storica Edizioni </h1>';
      } else {
        // Ripristiniamo l'HTML originale
        jumboTitleParent[0].innerHTML = '<img src="public/img/Background.jpg" class="fadeIn at-item"> <h1 class="special_title"> ITALIA </h1> <br> <h1 class="special_title_second"> Storica Edizioni </h1>';
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
        cardContainer[0].innerHTML += ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="public/ItaliaStoricaCatalogoIII-2024.pdf" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> ' + ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica-edizioni?sortPublication_date=desc" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>' + ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.libroco.it/editore/ITALIA+Storica/240970" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> ';
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
var bezierValue = [0, -100, -200, -300, -400, -500, -600, -700];

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
  // Selezioniamo la mail inserita nel form e la salviamo in una variabile
  var name = document.getElementById('namesurname').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var mailbody = document.getElementById('mailbody').value;

  // Variabile di tipo regExp - oggetto Javascript
  // Espressione regolare per l'email (username + @ + dominio + . + estensione del dominio TLD )
  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,10})$/;
  var regEmail = regx.test(email);

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
        alert("Grazie ".concat(name, " per averci scritto. Ti risponderemo al pi\xF9 presto."));
      }
    };
    xhr.setRequestHeader("Content-type", "multipart/form-data;", "charset=UTF-8");
    xhr.onerror = function () {
      console.log(this.status, this.statusText);
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