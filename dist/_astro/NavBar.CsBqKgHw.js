import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r}from"./index.DhYZZe0J.js";import o from"./Button.CROkmozF.js";import{m as s}from"./proxy.DCv0zgYW.js";const l=({href:t,children:a})=>e.jsx("a",{href:t,className:"navLink w-max px-6 py-2 bg-transparent text-text-nav-link font-truculenta font-bold text-2xl md:text-base cursor-pointer hover:text-text-nav-link-hover hover:bg-background-nav-link-hover transition-transform duration-300",children:a}),m=[{name:"Accueil",href:"/"},{name:"Mes projets",href:"/projets/"},{name:"Mes photos",href:"/photos/"},{name:"Mes vidéos",href:"/videos/"}],h=()=>{const[t,a]=r.useState(!1),i=()=>{a(!t)};return e.jsxs("nav",{className:"flex items-center  md:justify-center bg-black justify-between px-5 py-2 gap-5 md:fixed  md:top-0  md:left-1/2  md:transform  md:-translate-x-1/2 rounded-b-2xl ",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"md:hidden relative",children:e.jsxs("button",{onClick:i,className:` flex flex-col items-center justify-center z-20  transition-all duration-300 ${t?"fixed":"relative"}`,children:[e.jsx(s.div,{initial:{rotate:0,y:0},animate:{rotate:t?45:0,y:t?6:0},transition:{duration:.3},className:"w-6 h-0.5 bg-white mb-1"}),e.jsx(s.div,{initial:{opacity:1},animate:{opacity:t?0:1},transition:{duration:.3},className:"w-6 h-0.5 bg-white mb-1"}),e.jsx(s.div,{initial:{rotate:0,y:0},animate:{rotate:t?-45:0,y:t?-7:0},transition:{duration:.3},className:"w-6 h-0.5 bg-white"})]})}),t&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-10",onClick:i}),e.jsx("ul",{className:`fixed top-16 left-0 w-full h-full bg-background-nav-bar transition-transform duration-300 z-50 ${t?"translate-x-0":"-translate-x-full"} md:static md:flex md:translate-x-0 md:w-max md:bg-black`,children:m.map(n=>e.jsx("li",{className:"p-4",children:e.jsx(l,{href:n.href,children:n.name})},n.href))})]}),e.jsx(o,{"client:load":!0,color:"red",size:"medium",href:"/contact",children:"Contact"})]})};export{h as default};
