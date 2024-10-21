/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        productWidth: "53%",
        countWidth: "32%",
        sect:"95%"
      },
      colors: { 
        fpriceColor: "#FF003C", 
        buttonColor: "#F3F3F3",
        linet: "#F3F3F3",
        bgColor:"#F9F9F9",
        gaain:"#DCDCDC"
      },
      height:{
        screen: "29rem"
      },
      backgroundColor:{
        bckground: "background: linear-gradient(rgb(0,0,00.5),rgb(0,0,0,0.5));"
      }
    },
  },
  plugins: [],
}