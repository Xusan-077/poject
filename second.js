let ellist = document.querySelector(".list");

let id = new URLSearchParams(window.location.search).get("id");

let find = cars.find((el) => {
  return el.id == id;
});

ellist.innerHTML = `
  <li class="item">
        <img src="${find.img}" alt="" class="item__img" />
        <div class="item__text">
          <h1 class="item__title">${find.name}</h1>

          <div class="item__subtitles">
            <h2 class="item__subtitle-h2">
              Avtomobil yetkazib berish sgeolakatsiya bo’yicha
            </h2>
            <h2 class="item__subtitle-h2">
              Barcha qulayliklar asosida xarid qila olish
            </h2>
          </div>
          <p class="item__active">
            Mutlaqo noyob. Juda ajoyib. X2 o'zining sport ambitsiyalarini
            birinchi qarashda juda aniq qiladi. O'zining Jasur atletizmi tufayli
            u ushbu sinfda tengsiz bo'lgan dinamik va tezkor ishlashni
            ta'minlaydi. Yuqori sifatli interyer va ko'plab innovatsion
            texnologiyalar bilan birgalikda u yangi davrning ekstrovert
            qahramoni hisoblanadi Uning extroverted dizayni va to'ntarish va
            to'ntarish xarakteri bilan X2 ko'chadagi ajoyib sport ko'rinishini
            qayta belgilaydi
          </p>
          <div class="car__item-speed">
            <h2 class="car__item-benzin">${find.fuel}</h2>
            <h2 class="car__item-lc">${find.power}</h2>
          </div>
            <a href="./index.html" class="page-btn page-btn--active-2">Ko’rib chiqish</a>

        </div>
      </li>
`;

let elsecondlist = document.querySelector(".second-list");

let filter = cars.filter((el) => el.id != id);

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

domga(filter, elsecondlist);

let elheaderclick = document.querySelector(".header__click");
let elburger = document.querySelector(".header__burger");

elheaderclick.addEventListener("click", () => {
  elburger.classList.toggle("flex");
});

let elmodalbtn = document.querySelector(".page-btn--active-2");


