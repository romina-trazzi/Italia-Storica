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
    images: ["public/img/carousel0.jpg", "public/img/carousel1.jpg", "public/img/carousel2.jpg", "public/img/carousel3.jpg", "public/img/carousel4.jpg"],
    libri: [{
      "titolo": "Valhalla Express",
      "sottotitolo": "La storia di un nazionalista, rivoluzionario e volontario ucraino nel Battaglione «Azov»",
      "autore": "Woland",
      "pagine": "224 p., ill., Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "La prima testimonianza in assoluto edita in italiano di un membro del Battaglione (poi Reggimento) 'Azov', dalla giovinezza nell'Ucraina post 1991, tra tensioni sociali e etniche, alla militanza nelle organizzazioni nazionaliste e nei gruppi Ultras e paramilitari, sino agli scontri di Maidan a Kiev, all'entrata nel Battaglione 'Azov' e i combattimenti a Mariupol e nel Donbass del 2014. Un documento essenziale per comprendere la realtà della società ucraina e delle tensioni con la Russia dopo la caduta dell'URSS, sino al conflitto attuale. In appendice una documentazione fotografica, le linee guida del movimento 'Azov' e la cronologia delle operazioni militari del Battaglione nel 2014-2015 in un documento ufficiale del reparto, e un approfondimento sul nazionalismo radicale nell'Ucraina post-sovietica a cura di Andrea Forti. Con una introduzione di contesto di Matteo Sacchi ('Il Giornale') e una postfazione di Domenico Di Tullio.",
      "prezzo": "25,00 euro",
      "link_IBS": "https://www.ibs.it/valhalla-express-storia-di-nazionalista-libro-woland/e/9788831430210?queryId=8053636d6343d3cd98f2705733c09834"
    }, {
      "titolo": "Profeti inascoltati del Novecento",
      "sottotitolo": "Sessantasei personalità fuori dagli schemi illustrate dai disegni di Dionisio di Francescantonio e da approfondimenti di intellettuali, scrittori e critici d'arte",
      "autore": "AA. VV.",
      "pagine": "230 p., ill., Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "La rassegna 'Profeti inascoltati del Novecento' collega pensatori liberi ed eretici, conservatori di valori e non di costumi, e di integrità morale che costituisce l'unica forma possibile di pensiero, a un disegnatore che ne ha eseguito il volto, le ansie e le riflessioni, e ad altri scrittori che ne hanno interpretato lo spirito. Da Jünger a Conrad, da Pound a Borges, da Flaiano alla Campo, da Bernanos a Camus. Un Olimpo siffatto aveva illustrato, impavido, Tullio Pericoli. Oggi tocca a Dionisio di Francescantonio con il disegno e ad altri, come Stenio Solinas, con le parole. L'arte pretende quella libertà di espressione che personaggi scomodi come Louis-Ferdinand Céline, Hannah Arendt, Filippo Tommaso Marinetti, hanno coraggiosamente e diversamente testimoniato, anche divisi dalle violentissime vicende storiche del Novecento. Non posso che guardare con favore, quindi, i ritratti - accompagnati dagli approfondimenti di apprezzati pensatori e amici come Pietrangelo Buttafuoco, Gianfranco de Turris, Luigi Iannone e altri - di Dionisio di Francescantonio, così vivi ed espressivi, lucenti nel buio di un'epoca senza maestri. (dalla prefazione di Vittorio Sgarbi)",
      "prezzo": "29,00 euro",
      "link_IBS": "https://www.ibs.it/profeti-inascoltati-del-novecento-sessantasei-libro-vari/e/9788831430227?queryId=d6e83c11b35a93c4d416f6d7b7b5968a"
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
      "titolo": "Il sognatore con l'elmetto",
      "sottotitolo": "Le memorie di un giovane volontario della Divisione SS «Charlemagne» nel libro-verità che scosse la Francia",
      "autore": "Christian de La Mazière",
      "pagine": "402 p., ill., Brossura",
      "anno di pubblicazione": "2022",
      "descrizione": "Christian de La Mazière fu giornalista per 'Le Pays libre', un quotidiano minore della Collaborazione, volontario nella Divisione SS 'Charlemagne' negli ultimi combattimenti sul fronte orientale, e nel dopoguerra esperto di pubbliche relazioni del cinema internazionale e amante di Juliette Gréco e Dalida: nelle sue memorie, inedite in italiano e che alla loro uscita in Francia nel 1972 furono un vero e proprio caso letterario, il 'romanzo di formazione' di un giovane idealista dalla Parigi dell'estate 1944 al viaggio attraverso una Germania straziata dalle bombe Alleate sino al campo d'addestramento di Wildflecken, e all'invio in Pomerania contro i T-34 e Stalin sovietici dilaganti verso ovest, tra colonne di profughi e combattimenti disperati. Quindi, l'odissea nelle foreste baltiche dei superstiti stremati del suo reparto, la resa, la prigionia sovietica e il rientro in Francia, il processo per collaborazionismo e il suo trasferimento da un carcere all'altro, da Fresnes alla cupa ex abbazia di Clairvaux, un folle universo carcerario popolato da criminali comuni d'ogni sorta e detenuti politici, sino al suo rilascio nel 1948, tra i resti delle sue illusioni perdute.",
      "prezzo": "25,00 euro",
      "link_IBS": "https://www.ibs.it/sognatore-con-elmetto-memorie-di-libro-christian-de-la-maziere/e/9788831430197?queryId=4ee58d6f57910da25b14c27026fe5cd7"
    }, {
      "titolo": "VOLARE, LA MIA VITA",
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
    normalWidth: true,
    specialWidth: false,
    duoWidth: false,
    monoWidth: false,
    bookWidth: 0,
    distanceCover: 38
  },

  /* Controlla la larghezza dello schermo in modo dinamico da quando viene caricata o distrutta
  l'istanza Vue (mounted e destroyed) tramite il richiamo della funzione handleResize
  (passaggio 3) */
  mounted: function mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // Salva in una variabile l'elemento HTML che ha l'id legato agli arrow button 

    var nestPrev = document.getElementById("btn-prev-position");
    var nestNext = document.getElementById("btn-next-position");

    if (this.windowWidth < 799 || this.windowWidth >= 1200 && this.windowWidth <= 1699) {
      nestPrev.classList.remove("nested");
      nestNext.classList.remove("nested");
    }
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
      this.windowWidth = window.screen.width;
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
        column.classList.add("order-last");
        column.classList.add("order-css");
        column.classList.toggle("order-first", false);
        /* Altrimenti, se larghezza dello schermo è maggiore di 1200px aggiungi la classe order-first
        se c'è, rimuovi le classi order-last e order-css */
      } else {
        column.classList.add("order-first");
        column.classList.toggle("order-last", false);
        column.classList.toggle("order-css", false);
      } // Salva in una variabile l'elemento HTML che ha l'id legato agli arrow button 


      var nestPrev = document.getElementById("btn-prev-position");
      var nestNext = document.getElementById("btn-next-position");
      /* Se la larghezza dello schermo è inferiore a 799px togli la classe nested */

      if (this.windowWidth < 799) {
        nestPrev.classList.remove("nested");
        nestNext.classList.remove("nested");
      } else if (this.windowWidth >= 800 && this.windowWidth <= 1199) {
        nestPrev.classList.add("nested");
        nestNext.classList.add("nested");
      } else if (this.windowWidth >= 1200 && this.windowWidth <= 1699) {
        nestPrev.classList.remove("nested");
        nestNext.classList.remove("nested");
      } else if (this.windowWidth >= 1700) {
        nestPrev.classList.add("nested");
        nestNext.classList.add("nested");
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

        cardContainer[0].innerHTML += ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-book-open"></i> <hr> <h5 class="card-title"> SCARICA IL CATALOGO </h5> <hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://1drv.ms/b/s!Aso8wGv5JN2egTHUDRwYrytfCIgJ" class="btn button orange btn-lg">Scarica il catalogo in PDF</a> </div> </div> </div> ' + ' <div class="col-xl-4 col-lg-4"><div class="card"> <div class="card-body text-center"> <i class="fas fa-bookmark"> </i> <hr> <h5 class="card-title">ORDINA SU IBS</h5><hr> <p class="card-text text-center"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.ibs.it/libri/editori/italia-storica" class="btn button orange btn-lg"> Vai su IBS.it</a> </div> </div> </div> </hr>' + ' <div class="col-xl-4 col-lg-4"> <div class="card"> <div class="card-body text-center"> <i class="fas fa-swatchbook"></i> <hr> <h5 class="card-title">ORDINA DA DISTRIBUTORE</h5> <hr> <p class="card-text"> I NOSTRI LIBRI <br> STORICO-MILITARI <br>' + '<br> </p> <a href="https://www.libroco.it/servizi-per-librai-acquisto-libri-on-line.php" class="btn button orange btn-lg"> Vai su LibroCo.it</a> </div> </div> </div> ';
      } // Sezione PERSONAL
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
      } // Sezione FORM


      var map = document.getElementById("map-container");
      var form = document.getElementById("form-container");
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
var bezierValue = [0, -100, -200, -300, -400]; // loop through slides and set each slides translateX initial value property to index * 100% 

slides.forEach(function (slide, index) {
  slide.style.transform = "translateX(".concat(index * 100, "%)");
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
      slide.style.transform = 100 + "%";
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
/* RADIOBUTTON */

var currentIndex = 0; // Selezioniamo dal Dom i dots

var dots = document.getElementsByClassName('carousel_bullet');
var dotsArray = Array.from(dots);

var _loop = function _loop(i) {
  // Event listener al click su ogni button
  dots[i].addEventListener("click", function () {
    // Togliamo a tutti i dots la classe selected
    dotsArray.forEach(function (dot) {
      dot.classList.remove('selected');
    }); // Aggiungiamo la classe selected all'elemento cliccato

    if (dots[i] === document.activeElement) {
      currentIndex = i;
      dots[currentIndex].classList.add('selected'); // Muoviamo le slide

      slides[currentIndex].style.transform = "translateX(".concat(bezierValue[i], "%)"); // Togliamo a tutte le slide la classe selected

      slides.forEach(function (slide) {
        slide.classList.remove('selected');
      }); // Aggiungiamo la classe selected solo a quella con indice corrente

      slides[currentIndex].classList.add("selected");
    }
  });
};

for (var i = 0; i < dots.length; i++) {
  _loop(i);
}
/*---------- End Subsection Carousel  ----------*/

/*----------  Subsection Card outline colors  ----------*/

/* Quando i buttons delle card sono on hover allora l'outline delle card e le icone fontawesome cambiano colore */
// Selezioniamo i buttons delle card (nodeList)


var buttons = document.querySelectorAll('.card .orange'); // Trasformiamo buttons in Array  

var buttonsArray = Array.from(buttons); // Selezioniamo gli elementi da cambiare (nodeList)

var iconsFas = document.querySelectorAll('.card .fas');
var cards = document.querySelectorAll('.card'); // Creiamo i cicli con i Listener e le funzioni per cambiare i colori

var _loop2 = function _loop2(_i) {
  buttonsArray[_i].addEventListener('mouseover', function () {
    iconsFas[_i].style.color = 'rgb(244, 124, 32)';
    cards[_i].style.outlineColor = 'rgb(244, 124, 32)';
  });
};

for (var _i = 0; _i < buttonsArray.length; _i++) {
  _loop2(_i);
}

;

var _loop3 = function _loop3(_i2) {
  buttonsArray[_i2].addEventListener('mouseleave', function () {
    iconsFas[_i2].style.color = 'rgb(250, 153, 28)';
    cards[_i2].style.outlineColor = 'rgb(250, 153, 28)';
  });
};

for (var _i2 = 0; _i2 < buttonsArray.length; _i2++) {
  _loop3(_i2);
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
  var mailbody = document.getElementById('mailbody').value; // Variabile di tipo regExp - oggetto Javascript
  // Espressione regolare per l'email (username + @ + dominio + . + estensione del dominio TLD )

  var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]{2,10})$/;
  var regEmail = regx.test(email); // Verifica l'espressione regolare.

  console.log(regEmail); // Se tutto è ok, convalida i dati e inviali alla pagina

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
        console.log("Grazie ".concat(name, " per averci scritto. Ti risponderemo al pi\xF9 presto."));
      }
    };

    xhr.setRequestHeader("Content-type", "multipart/form-data;", "charset=UTF-8");

    xhr.onerror = function () {
      console.log(this.status, this.statusText);
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