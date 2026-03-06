
const whatsappNumber = "593999999999";

const products = [
{ id:1, name:"Zapato Mujer 1", category:"Mujer", price:"$40", image:"images/mujer1.jpg"},
{ id:2, name:"Zapato Mujer 2", category:"Mujer", price:"$42", image:"images/mujer2.jpg"},
{ id:3, name:"Zapato Hombre 1", category:"Hombre", price:"$50", image:"images/hombre1.jpg"},
{ id:4, name:"Zapato Hombre 2", category:"Hombre", price:"$55", image:"images/hombre2.jpg"},
{ id:5, name:"Zapato Niño 1", category:"Niños", price:"$30", image:"images/nino1.jpg"},
{ id:6, name:"Zapato Niño 2", category:"Niños", price:"$28", image:"images/nino2.jpg"}
];

const filters = ["Todos","Mujer","Hombre","Niños"];
let active = "Todos";

const productsContainer = document.getElementById("products");
const filtersContainer = document.getElementById("filters");

function waLink(text){
return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

document.getElementById("whatsappFloat").href = waLink("Hola, quiero información sobre los zapatos");

function renderFilters(){

filters.forEach(f=>{

const btn = document.createElement("button");
btn.textContent = f;

btn.className = "px-4 py-2 rounded-full border text-sm hover:bg-gray-100";

btn.onclick = ()=>{
active = f;
renderProducts();
};

filtersContainer.appendChild(btn);

});

}

function renderProducts(){

productsContainer.innerHTML = "";

let list = active==="Todos"
? products
: products.filter(p=>p.category===active);

list.forEach(p=>{

const card = document.createElement("div");

card.className="bg-white border rounded-xl overflow-hidden shadow-sm";

card.innerHTML = `
<img src="${p.image}" class="w-full h-64 object-cover">
<div class="p-4">
<span class="text-xs bg-gray-100 px-2 py-1 rounded">${p.category}</span>
<h4 class="font-semibold mt-2">${p.name}</h4>
<p class="font-bold">${p.price}</p>
<a href="${waLink('Hola me interesa: '+p.name)}"
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
