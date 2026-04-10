
            function writeReviewPage(Id, cityId){
                const storeId = model.data.cities[cityId].store[Id];
                const app = document.getElementById("app");   

                app.innerHTML = 
                /*HTML*/`
                        <div class="container">
                        <div class="leftside">
                        <img class="backbutton" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/corner/corner.svg">
                        <a href="/Anitas%20Glutenfri%20Prosjekt/index.html">
                           <img class="backbuttonarrow" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/corner/arrowback.svg" >
                           </a>
                            <select id="citySelectId"></select>
                            <img class="hometab" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/hometab/hometabv2.svg">
                            <a href="/Anitas%20Glutenfri%20Prosjekt/index.html">
                            <img class="hometabimg" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/hometab/homeimg.svg">
                            </a>
                            <h1>${storeId.info.storeName}</h5>
                            <div ><img class="pictureInfo" src="${storeId.info.pictures}"></div>
                                <p>
                                ${storeId.info.address}
                                <br>
                                telefon: ${storeId.info.phone}
                                <br>
                                ${storeId.info.link}
                                <br>
                                ${storeId.info.email}
                                <br>
                                </p>
                        </div>
                        <div class="main" id="storeReviews">
                            
                        </div>
                        
                        `;
                        showWriteReview()
                        selectCity(cityId)
                    }
                    
                    
                         function showWriteReview() {
                           const writeReview = document.getElementById("storeReviews");
                           writeReview.innerHTML= 
                            /*HTML*/`
                           <p>Write your review</p>
                           <div class="starcontainer">
                           <div class="star-rating" style="--size: 2rem; --val: 4;"></div>
                           </div>
                           <div class="darkborder">
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/bakery/bakery.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/cafe/coffee.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/restaurant/restaurant.svg"></div>
                           <div><img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/pastryshop/pastry.svg"></div>
                           </div>
                           <div> <textarea placeholder="Skriv her"class="userReviewBox"></textarea> </div>
                           <br>

                           <div class="reviewbtn">Legg til Anmeldelser</div>
                           `;
                        }
                        


                        function selectCity(selectedCityIndex){
                            const city = model.data.cities;
                            const cityArray = [];

                            for (let index = 0; index < city.length; index++) {
                                cityArray.push(`
                                    <option value="${index}" ${index === selectedCityIndex ? 'selected' : ''} onclick="storePage(0,${index})">${city[index].name}</option>

                                    `)
                                
                            }
                            
                            document.getElementById("citySelectId").innerHTML = cityArray.join('');


                        }
                        
                        writeReviewPage(1, 1)