// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
      head:{
        link:[
          {
            rel:'preconnect',
            href:'https://fonts.googleapis.com',
          },
          {
            rel:'preconnect',
            href:'https://fonts.gstatic.com',
            crossorigin:''
          },
          {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap'
          }
        ],
        style:[
          {
            children:'body{background-color:#DBE7F2;} .ar { font-family:Scheherazade New}', 
           // type:'text/css'
          }
        ]
      }
    },
    modules: [
        '@nuxtjs/tailwindcss'
      ]

      
})

