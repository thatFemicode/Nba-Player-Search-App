import { createGlobalStyle } from "styled-components";
// import bg from "../src/img/bg.svg";
const GlobalStyle = createGlobalStyle`
:root{
    /* --neutral-light: #F2F6FF;
    --clr-primary-4: hsl(205, 63%, 48%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-white: #fff;
   --clr-white: #fff;
    --max-width: 1170px;
    --fixed-width: 620px;
    --transition: all 0.3s ease-in;
    --clr-grey-1: hsl(209, 61%, 16%);
    --radius: 0.25rem;
    --tw-space-x-reverse: 0;
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --tw-bg-opacity: 0;
  --tw-text-opacity: 1; */
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
}
body{
height: 100vh;
  overflow: hidden;
    /* background-color: #000; */
    /* color: #222260; */
    color:#292524;    

    @media screen and (max-width:540px){
      overflow-y:scroll
    }
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
}
li{
    list-style: none
}
.player-option {
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  /* height: 200px; */
  /* justify-content: space-between; */
  /* overflow: scroll; */
}

.player-options {
  
}
.scroll {
  overflow-y: scroll;
  height: 150px;
}
.player-option-image {
  height: 32px;
}
/* .no-scroll{
  height:100vh;
  overflow:hidden;
} */
/* .load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
} */
/* .active-btn{
   transform: scale(1.1);
} */
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    117.76deg,
    rgba(255, 255, 255, 0.7) -7.21%,
    rgba(255, 255, 255, 0.5) 118.08%
  );
  backdrop-filter: blur(9px);
  /* background-color: #fff; */
  width: 0%;
  height: 100%;
}


input{
  padding: 0.55rem 0.4rem;
  border: 2px solid rgb(184, 196, 194);
  border-radius: 4px;
  font-size: 14px;
  outline: none;
  transition: all 150ms ease-in-out 0s;
  width: 85%;
  background: #fff;
  margin-bottom:1rem;

  &::placeholder{
    color: #b1b1b1;
  width: 100%;
 
  }

  &:hover{
    border-color:#dcdddd
  }
  &:focus, &:active{
    border-color:#1d428a;
  }
 
}
/* .load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #fff;
  width: 100%;
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
} */
/* .load-screen2 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #ce1141;
  width: 100%;
  height: 0%;
} */
/* .load-screen3 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #552583;
  width: 0%;
  height: 100%;
} */
/* .svg{
  @media (max-width: 520px) {
     width:50%;
    }
} */
/* .logo{
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: dash 5s linear alternate infinite;
} */


/* @keyframes dash {
  from {
    stroke-dashoffset: 1500;
 }
 to {
    stroke-dashoffset: 0;
 }
} */
/* .Headd {
  opacity: 0;
  pointer-events: none;
} */
/* .active-btn{
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
} */
`;
export default GlobalStyle;
