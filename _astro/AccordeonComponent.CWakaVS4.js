import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";const x=({title:a,data:o,contentType:r})=>{const[s,i]=n.useState(null);return e.jsxs("div",{className:"border-2 border-light-cream rounded-2xl ",children:[e.jsx("h1",{className:"text-light-cream text-4xl font-bold font-truculenta text-center",children:a}),o[r]?.nodes.map((l,t)=>e.jsxs("div",{className:"border-b  last:border-none cursor-pointer  ",onClick:()=>i(s===t?null:t),children:[e.jsxs("div",{className:"flex items-center justify-between p-4",children:[e.jsx("h3",{className:"text-base sm:text-xl font-bold font-truculenta text-light-cream",children:l[r]?.titre}),e.jsx("span",{className:"text-xl font-truculenta text-light-cream",children:s===t?"↑":"↓"})]}),e.jsx("div",{className:`transition-all duration-300 ease-in-out overflow-hidden  ${s===t?"max-h-96 opacity-100":"max-h-0 opacity-0"}`,style:{visibility:s===t?"visible":"hidden"},children:e.jsx("a",{href:`/${r}/${l.id}`,target:"_blank",rel:"noopener noreferrer",className:"block relative",children:e.jsx("img",{src:l[r]?.miniature?.node?.sourceUrl,alt:l[r]?.miniature?.node?.altText,className:"w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 overflow-hidden last:rounded-b-2xl"})})})]},t))]})};export{x as default};
