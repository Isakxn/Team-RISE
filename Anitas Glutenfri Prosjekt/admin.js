// ISAK
function adminControl(){
    if(model.app.adminLoggedIn === true){
      model.viewState.storeFrontPage.adminReview = "X";
      model.viewState.storeFrontPage.adminStore = "Slett meg"; 
    }
}

function adminDeleteReview(index){
  const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
  storeId.reviews.splice(index, 1)
  updateView()
  
}


function adminDeleteStore(){
  const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store.splice(model.viewState.storeFrontPage.selectedStore, 1);
  updateView()
}