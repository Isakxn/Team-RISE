
            function writeReviewPage(){
                        storeFront()
                        showWriteReview()
                        selectCity()
                    }
                    
                    
                         function showWriteReview() {
                           const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
                           const writeReview = document.getElementById("storeReviews");
                           writeReview.innerHTML= 
                            /*HTML*/`
                           <h1>${storeId.info.storeName}</h1>
                           <div class="darkborder">
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/bakery/bakery.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/cafe/coffee.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/restaurant/restaurant.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/pastryshop/pastry.svg"></div>
                           </div>
                           <div> <textarea placeholder="Skriv her"class="userReviewBox"></textarea> </div>
                           <br>
                            <div class="starcontainer">
                           <input 
                            type="range"
                            min="0.5"
                            max="5"
                            step="0.5"
                            value="2.5"
                            class="user-rating"
                            style="--val: 2.5"
                            oninput="this.style.setProperty('--val', this.value)"
                            >
                           </div>
                           <br>
                           <div class="reviewbtn">Legg til Anmeldelser</div>
                           <br>
                           <p>Legg til bilder<p>
                          <input   type="file" accept="image/*"  onchange="handleImageUpload(this.files)">
                           `;
                        }
                        
                        writeReviewPage()