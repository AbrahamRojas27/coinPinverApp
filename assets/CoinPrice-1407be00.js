import{j as e,r as i,f as a}from"./index-47c30e8d.js";function t(c){return e.jsxs("div",{className:"coin-price-card",children:[e.jsxs("h2",{className:"coin-price-title",children:[e.jsx("span",{className:"coin-name",children:c.coin}),"/USD"]}),e.jsx("p",{className:"coin-price-price",children:c.coinPrice})]})}const o="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";function l(){const[c,n]=i.useState([]);return i.useEffect(()=>{(async()=>{const r=await a(o);n(r)})()},[]),e.jsx("section",{className:"coin-price-container",children:e.jsx("article",{className:"coin-price-slide",children:c.map(s=>e.jsx(t,{coin:s.name,coinPrice:`$${s.current_price}`},s.id))})})}export{l as default};
