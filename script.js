const whatsappNumber = "593999999999";
const baseMessage = "Hola, quiero información sobre los zapatos disponibles";

const products = [
  {
    id: 1,
    name: "Zapato Casual Mujer",
    category: "Mujer",
    price: "$40",
    image: "images/mujer1.jpg",
    badge: "Nuevo"
  },
  {
    id: 2,
    name: "Tacón Elegante",
    category: "Mujer",
    price: "$48",
    image: "images/mujer2.jpg",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Tenis Urbano Hombre",
    category: "Hombre",
    price: "$52",
    image: "images/hombre1.jpg",
    badge: "Top ventas"
  },
  {
    id: 4,
    name: "Zapato Formal Hombre",
    category: "Hombre",
    price: "$58",
    image: "images/hombre2.jpg",
    badge: "Clásico"
  },
  {
    id: 5,
    name: "Zapato Deportivo Niño",
    category: "Niños",
    price: "$31",
    image: "images/nino1.jpg",
    badge: "Cómodo"
  },
  {
    id: 6,
    name: "Zapato Escolar Niño",
    category: "Niños",
    price: "$29",
    image: "images/nino2.jpg",
    badge: "Resistente"
  }
];

const filters = ["Todos", "Mujer", "Hombre", "Niños"];
let activeFilter = "Todos";

const productsGrid = document.getElementById("productsGrid");
const resultsText = document.getElementById("resultsText");
const mobileFilters = document.getElementById("mobileFilters");
const topFilters = document.querySelectorAll(".top-filter");

function buildWaLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function applyWhatsAppLinks() {
  document.getElementById("whatsappHeader").href = buildWaLink(baseMessage);
  document.getElementById("heroWhatsapp").href = buildWaLink(baseMessage);
  document.getElementById("whatsappFloat").href = buildWaLink(baseMessage);
}

function setActiveFilter(filter) {
  activeFilter = filter;
  renderProducts();
  paintFilterStates();
}

function paintFilterStates() {
  topFilters.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.className = isActive
      ? "top-filter rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      : "top-filter rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100";
  });

  [...mobileFilters.querySelectorAll("button")].forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.className = isActive
      ? "rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
      : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700";
  });
}

function renderMobileFilters() {
  mobileFilters.innerHTML = "";
  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.dataset.filter = filter;
    button.textContent = filter;
    button.className = "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700";
    button.addEventListener("click", () => setActiveFilter(filter));
    mobileFilters.appendChild(button);
  });
}

function renderProducts() {
  const visibleProducts = activeFilter === "Todos"
    ? products
    : products.filter((product) => product.category === activeFilter);

  productsGrid.innerHTML = "";

  if (activeFilter === "Todos") {
    resultsText.textContent = `Mostrando ${visibleProducts.length} productos disponibles.`;
  } else {
    resultsText.textContent = `Mostrando ${visibleProducts.length} productos en ${activeFilter}.`;
  }

  visibleProducts.forEach((product) => {
    const article = document.createElement("article");
    article.className = "group overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl";

    article.innerHTML = `
      <div class="relative overflow-hidden">
        <img src="${product.image}" alt="${product.name}" class="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80">
        <span class="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow">
          ${product.badge}
        </span>
      </div>

      <div class="space-y-3 p-5">
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              ${product.category}
            </span>
            <h4 class="mt-3 text-lg font-bold sm:text-xl">${product.name}</h4>
          </div>
          <p class="text-lg font-bold text-slate-900">${product.price}</p>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <a href="${buildWaLink("Hola, me interesa el producto: " + product.name)}"
             target="_blank"
             class="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:opacity-90">
            Comprar
          </a>

          <a href="${product.image}"
             target="_blank"
             class="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Ver foto
          </a>
        </div>
      </div>
    `;

    productsGrid.appendChild(article);
  });
}

function bindTopFilters() {
  topFilters.forEach((button) => {
    button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
  });
}

applyWhatsAppLinks();
renderMobileFilters();
bindTopFilters();
renderProducts();
paintFilterStates();
