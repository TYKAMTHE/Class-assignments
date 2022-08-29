const toggler = document.getElementById("menu-toggler");
const sublistToggler = document.getElementById("menu-list");
const container = document.getElementsByClassName("container")[0];
let flag = false;

// [...sublistToggler.children].forEach((element) => element.addEventListener("click", (e) => submenuToggle(e)));
// toggler.addEventListener("click", () => menuToggle());

const sublistToggle = (e) => {
    if (window.visualViewport.width<800)  {
    const clickedItemClasslist = e.path[0].children[1].classList
    
    // COLLAPSE IF EXPANDED
    if (clickedItemClasslist.contains('open')) {clickedItemClasslist.remove("open"); return;}
    // ACCORDION
    for (let i = 0; i < sublistToggler.children.length; i++) {sublistToggler.children[i].children[1].classList.remove("open")}
    // EXPAND
    console.log(e.target.children[1])
    if (e.target.children[1]) {
    e.target.children[1].classList.toggle("open");
    flag = e.target.children[1].classList.contains("open") ? true : false;
    container.classList.add("newHeight");
  }

    // clickedItemClasslist.toggle("open");
    }
  };

const listToggle = () => {
     toggler.classList.toggle("open");
  if (!toggler.classList.contains("open") && container.classList.contains("newHeight")) {container.classList.remove("newHeight"); }
//   if (toggler.classList.contains("open") && flag) {container.classList.add("newHeight"); }
    for (let i = 0; i < sublistToggler.children.length; i++) {sublistToggler.children[i].children[1].classList.remove("open")}
}

sublistToggler.addEventListener("click", (e) => sublistToggle(e));
toggler.addEventListener("click", () => listToggle());

// CLOSE EXPANDED IF RESIZED UP
const closeExpanded = () => {
      if (window.visualViewport.width>799) {
        toggler.classList.remove("open");
    for (let i = 0; i < sublistToggler.children.length; i++) {sublistToggler.children[i].children[1].classList.remove("open")}
         }
   }
window.addEventListener('resize', closeExpanded);

(function () {
  const classes = document.body.classList;
  let timer = null;
  window.addEventListener('resize', function () {
    if (timer){
      clearTimeout(timer);
      timer = null;
    } else {
      classes.add('stop-transition');
    }
    timer = setTimeout(() => {
      classes.remove('stop-transition');
      timer = null;
    }, 100);
  });
})();

<div class="container ">
      <header>
          <nav class="menu-container">
            <div class="menu-toggler" id="menu-toggler">
              <div class="hamburger"></div>
            </div>
            <ul class="menu-list menu-list1 " id="menu-list">
              <li><a href="#">Shop</a>
                <div class="submenu-container">
                  <div>
                    <h4>Phones</h4>
                    <ul class="menu-sublist">
                      <li><a href="#"> Phones</a></li>
                      <li><a href="#">Upgrades</a></li>
                      <li><a href="#"> Apple iPhone</a></li>
                      <li><a href="#">Samsung Galaxy Z Fold4</a></li>
                      <li><a href="#"> Android phones</a></li>
                      <li><a href="#">Refurbished phones</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4> Tablets, laptops & dongles</h4>
                    <ul class="menu-sublist">
                      <li><a href="#">Tablets</a></li>
                      <li><a href="#">Apple iPad</a></li>
                      <li><a href="#">Android tablets</a></li>
                      <li><a href="#">Laptops</a></li>
                      <li><a href="#">Dongles and mobile wifi</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4> Sims and Tariffs</h4>
                    <ul class="menu-sublist">
                      <li><a href="#">Pay Monthly sims</a></li>
                      <li><a href="#">Pay As You Go sims</a></li>
                      <li><a href="#">Tariffs</a></li>
                      <li><a href="#">International</a></li>
                      <li><a href="#">Top-up</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4> Tablets, laptops & dongles</h4>
                    <ul class="menu-sublist">
                      <li><a href="#">Tablets</a></li>
                      <li><a href="#">Apple iPad</a></li>
                      <li><a href="#">Android tablets</a></li>
                      <li><a href="#">Laptops</a></li>
                      <li><a href="#">Dongles and mobile wifi</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4> 
                      Accessories and more
                    </h4>
                    <ul class="menu-sublist">
                      <li><a href="#">
                        Tech and accessories
                      </a></li>
                      <li><a href="#">
                        Apple Watch
                      </a></li>
                      <li><a href="#">Smartwatches</a></li>
                      <li><a href="#">AirPods/wireless accessories</a></li>
                      <li><a href="#">Great deals</a></li>
                      <li><a href="#">Coming soon</a></li>
                    </ul>
                  </div>
                </div>
              </li>