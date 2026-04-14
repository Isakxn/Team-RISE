//Remy


function selectionPage(){
  const app = document.getElementById("app");
  const showCityName = model.data.cities[1].name;
  
  app.innerHTML = /*html*/ `
  <div class="selectionPageMain">
  
      <div class="citySelectionHeader">
        <h2>${showCityName}<h2>
      </div>
  
      <div class="mealContainer">

          <div class="bakeryButn">
              <button onclick="">
                <img src="Media/icons/bakery/bakery.svg">
              </button>
          </div>
      
          <div class="lunchButn">
              <button onclick="">
                <img src="Media/icons/cafe/lunch.svg">
              </button>
          </div>
      
          <div class="dinnerButn">
              <button onclick="">
                <img src="Media/icons/restaurant/restaurant.svg">
              </button>
          </div>
      
          <div class="dessertButn">
              <button onclick="">
                <img src="Media/icons/pastryshop/pastry.svg">
              </button>
          </div>

      </div>
  </div>
  `;
}
