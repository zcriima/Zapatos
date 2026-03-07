
const whatsappNumber="593999999999";

const products=[
{id:1,name:"Zapato Mujer 1",category:"Mujer",sizes:"35-36-37",price:"$40",image:"https://picsum.photos/500/600?1"},
{id:2,name:"Zapato Mujer 2",category:"Mujer",sizes:"36-37-38",price:"$42",image:"https://picsum.photos/500/600?2"},
{id:3,name:"Zapato Mujer 3",category:"Mujer",sizes:"37-38-39",price:"$45",image:"https://picsum.photos/500/600?3"},
{id:4,name:"Zapato Hombre 1",category:"Hombre",sizes:"39-40-41",price:"$50",image:"https://picsum.photos/500/600?4"},
{id:5,name:"Zapato Hombre 2",category:"Hombre",sizes:"40-41-42",price:"$55",image:"https://picsum.photos/500/600?5"},
{id:6,name:"Zapato Niño 1",category:"Niños",sizes:"28-29-30",price:"$30",image:"https://picsum.photos/500/600?6"}
];

const filters=["Todos","Mujer","Hombre","Niños"];
let active="Todos";

const productsContainer=document.getElementById("products");
const filtersContainer=document.getElementById("filters");

function waLink(text){
return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

document.getElementById("whatsappFloat").href=waLink("Hola quiero información");

function renderFilters(){
filters.forEach(f=>{
const btn=document.createElement("button");
btn.textContent=f;
btn.className="px-4 py-2 rounded-full border text-sm bg-white/60";
btn.onclick=()=>{active=f;renderProducts();};
filtersContainer.appendChild(btn);
});
}

function renderProducts(){
productsContainer.innerHTML="";
let list=active==="Todos"?products:products.filter(p=>p.category===active);

list.forEach(p=>{
const card=document.createElement("div");
card.className="product-card rounded-xl overflow-hidden";

card.innerHTML=`
<img src="${p.image}" class="w-full h-72 object-cover">
<div class="p-4">
<span class="text-xs bg-white/60 px-2 py-1 rounded">${p.category}</span>
<h4 class="font-semibold mt-2">${p.name}</h4>
<p class="text-sm text-gray-700">Tallas: ${p.sizes}</p>
<p class="font-bold">${p.price}</p>
<a href="${waLink('Hola me interesa '+p.name)}"
class="block text-center bg-black text-white mt-3 py-2 rounded-lg">
Consultar
</a>
</div>
`;

productsContainer.appendChild(card);
});
}

renderFilters();
renderProducts();
