function adminControl(){
    if(adminLoggedIn === true){
      return {

      }
    }
}

function adminStorePage(){
    /*html*/ `
      <button onclick="adminDeleteRewview()"></button>`;
    }
    
// <button onclick="adminDeleteStore()"></button>




function adminDeleteRewview(){
}


function adminDeleteStore(){
  model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore]
  
}