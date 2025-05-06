// webpack.mix.js

let mix = require('laravel-mix');	
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

/* Prende Laravel Mix e lo salva all’interno della variabile mix */

mix
// .js('src/app.js', 'js') // Prende il file dalla cartella search, lo compila e mette il nuovo in dist\js
.js('src/main_vue.js', 'js').vue({ version: 2 })
.sass ('src/style.scss', 'css')
.sass ('src/mediaquery.scss', 'css')
.setPublicPath('public')
// npm.copy('src/img/', 'public/images/') /* Copia le immagini locali in src/img nella cartella public/images

/* Questo oggetto mix ha una serie di proprietà particolari tra cui sass */

.webpackConfig({
    plugins: [
      new BrowserSyncPlugin({
        server: {
          baseDir:'./'
        },
        port: 3000,
        files: [
          'public/**/*.*',
          'src/**/*.js',
          'src/**/*.vue',
          'src/**/*.scss'
        ]
      })
    ]
  })

/* Importante: disabilita la compilazione automatica degli url immagine */
.options({
    processCssUrls: false
})


