/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      linear1:'#FAFAFA',
      linear2:'#FCFCFC',
      light:'#FFF', 
      dark:'#000',
      sectext:'#555555',
      errorbg:'#F63B3B',
      primary:'#39DB4A',
      primarygradient:'#39DB4A80',
      lightash:'#EFEFEF',
      darkash:'#6F6E6E',
      navtext:'#807E7E',
      iconbg:'#EDFFEF',
      secondary:'#4A4A4A'


    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
