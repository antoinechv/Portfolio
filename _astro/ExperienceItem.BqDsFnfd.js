import{j as t}from"./jsx-runtime.7faW4zRM.js";import{r as s}from"./index.DhYZZe0J.js";import{m as c}from"./proxy.DCv0zgYW.js";const b=({title:i,description:n})=>{const[a,r]=s.useState(!1),e=s.useRef(null);return s.useEffect(()=>{const o=new IntersectionObserver(([l])=>{l.isIntersecting?r(!0):r(!1)},{threshold:.1});return e.current&&o.observe(e.current),()=>{o.disconnect()}},[]),t.jsxs(c.li,{ref:e,className:"flex flex-col border-b-2 border-black pb-4 mb-4",initial:{opacity:0,y:20},animate:a?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5},children:[t.jsx("h2",{className:"font-bold text-2xl font-truculenta",children:i}),t.jsx("p",{className:"font-bold text-base font-truculenta",children:n})]})};export{b as default};
