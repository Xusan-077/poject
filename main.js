let ellist = document.querySelector(".car__list");
let elbtn = document.querySelector(".car__btns");

let array = [];

cars.forEach((car) => {
  if (!array.includes(car.category)) {
    array.push(car.category);
  }
});

elbtn.innerHTML = `
  <button class="car__btn">All</button>
  `;

array.forEach((el) => {
  elbtn.innerHTML += `
    <button class="car__btn">${el}</button>
  `;
});

function domga(array, nodlist) {
  nodlist.innerHTML = "";
  array.forEach((el) => {
    nodlist.innerHTML += `
           <li class="car__item">
              <img src="${el.img}" alt="" class="car__item-img">

              <div class="car__item-text">
                <h2 class="car__item-title">${el.name}</h2>
  
                <div class="car__item-speed">
                  <h2 class="car__item-benzin">${el.fuel}</h2>
                  <h2 class="car__item-lc">${el.power}</h2>
                </div>
  
                <hr>
  
                <div class="car__item-active">
                  <a href="./second.html?id=${el.id}" class="page-btn page-btn--active">Ko’rib chiqish</a>
                  <h1 class="car__item-active-h1"><span class="car__item-span">от</span> ${el.price} <span class="car__item-span">руб/сут</span></h1>
                </div>
              </div>
            </li>
`;
  });
}

domga(cars, ellist);

elbtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("car__btn")) {
    document
      .querySelectorAll(".car__btn")
      .forEach((btn) => btn.classList.remove("active"));

    e.target.classList.add("active");

    let category = e.target.textContent;

    if (category === "All") {
      domga(cars, ellist);
    } else {
      let filter = cars.filter((car) => car.category === category);
      domga(filter, ellist);
    }
  }
});

let elheaderclick = document.querySelector(".header__click");
let elburger = document.querySelector(".header__burger");

elheaderclick.addEventListener("click", () => {
  elburger.classList.toggle("flex");
});
