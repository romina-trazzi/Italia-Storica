// webpack.mix.js

let mix = require('laravel-mix');	

/* Prende Laravel Mix e lo salva all’interno della variabile mix */

mix
// .js('src/app.js', 'js') // Prende il file dalla cartella search, lo compila e mette il nuovo in dist\js
.js('src/main_vue.js', 'js')
.sass ('src/style.scss', 'css')
.sass ('src/mediaquery.scss', 'css')
.setPublicPath('public')
// npm.copy('src/img/', 'public/images/') /* Copia le immagini locali in src/img nella cartella public/images

/* Questo oggetto mix ha una serie di proprietà particolari tra cui sass */


/* Importante: disabilita la compilazione automatica degli url immagine */

.options({
    processCssUrls: false
})


