

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`



* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

:root {

  --primary-color:#F01C21;
  --secoundary-color:#fdddde;
  --bg-color: #091431;
  --para: #454749;

  --phone:#17C434;
  --gray:#F1F5FA;
  //--shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  --shadow: 0 2px 8px #00000026;
  --info-color:#F33232;


}

/* spacing 
desktop = 4.8rem */

html {
  font-size: 62.5%;
  font-family: "Work Sans", sans-serif;
  /* overflow-x: hidden; */
  scroll-behavior: smooth;
}

body {
  background-color: #f8f8f8;
  /* overflow-x: hidden; */
}

.body::-webkit-scrollbar {
  display: none;
}


p{
  font-family:'Poppins',sans-serif;
  font-weight: 500;
}

h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
}

h2{
  font-weight:500;
}


a {
  text-decoration: none;
}

li {
  list-style: none;
}




/*==============================================
              Reuseable code 
================================================ */

.section {
  position: relative;
  padding: 3rem 0rem;
}



.container {
  max-width: 100rem;
  margin: auto;
  /* margin: 1rem; */
  padding: 1rem;
}



//Responsive

@media (max-width:1000px) {


  .container {
    max-width: 90rem;
  }
  
}
@media (max-width:800px) {

  html {
    font-size: 50.5%;
  }
  .container {
    max-width: 80rem;
  }
  
}
@media (max-width:600px) {
  
  html {
    font-size: 47.5%;
    
  }
  
  .container {
    max-width: 60rem;
  }
}
`