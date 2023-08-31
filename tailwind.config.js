/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      animation: {
        amir: 'movopaicaty 3s ease-out 1',
        amir300: 'movopaicaty 3s ease-out 1 300ms',
        amir500: 'movopaicaty 3s ease-out 1 500ms',
        amir750: 'movopaicaty 3s ease-out 1 750ms',
        amir1000: 'movopaicaty 3s ease-out 1 1000ms',
      }
      
    },  keyframes: {
      movopaicaty: {
        '0%': { transform: "translateY(200px)" ,opacity:"0.1" },
        '50%': { transform: 'translateY(85px)' ,opacity:"0.3"},
        '75%':{ transform: 'translateY(-30px)' ,opacity:"0.5"},
        '100%':{transform: 'translateY(0px)' ,opacity:"1"}
       }
      }

  
  },
  plugins: [],
}

