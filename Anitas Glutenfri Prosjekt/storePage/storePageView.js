
            function storePage(Id, cityId){
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
                               <div class="star-rating" style="--size: 2rem; --val: ${storeId.info.averageScore};"></div> (${storeId.info.reviewAmount}) Anmeldelser
                                </p>
                            
                            <textarea class="userReviewBox"></textarea>
                            <br>
                            <button>Legg til Anmeldelser</button>
                        </div>
                        <div class="main" id="storeReviews">
                            
                        </div>

                        <div class="rightside" id="storeSelection">
                            
                        </div>
                        </div>
                        
                        `;
                        showStoreReviews(Id, cityId)
                        showStoreSelections(cityId)
                        selectCity(cityId)
                    }
                    
                    
                         function showStoreReviews(Id, cityId) {
                            const storeReviews = model.data.cities[cityId].store[Id].reviews;
                            const storeReviewsArr = [];
                        
                        for (let i = 0; i < storeReviews.length; i++) {
                            const r = storeReviews[i]
                            storeReviewsArr.push(`
                                
                                <div class="reviewBox">
                                <h2>${r.name}</h2>
                                <h5>${r.date}</h5>
                                <p>${r.reviewText}</p>
                                ${r.score} Stjerner.
                                <br>
                                (${r.likes})<button>Liker</button>
                                </div>
                                
                                `);
                            }
                            document.getElementById("storeReviews").innerHTML = storeReviewsArr.join('')
                        }
                        
                        function showStoreSelections(cityId) {
                            
                            const globalCityStore = model.data.cities[cityId].store;
                            const cityStore = [...globalCityStore];
                            const storeSelectionArr = [];
                            
                            
                            cityStore.sort((a, b) => b.info.averageScore - a.info.averageScore)
                            
                            
                            
                            for (let index = 0; index < cityStore.length; index++) {
                                const s = cityStore[index];
                                const g = globalCityStore.indexOf(s);
                                storeSelectionArr.push(`
                                <div class="storeBox" onclick="storePage(${g},${cityId})">
                                <div class="storeBoxName">
                                ${s.info.storeName} 
                                <br>
                                <div class="star-rating" style="--val: ${s.info.averageScore};"></div>
                                </div>
                                
                                <img class= "pictureSelect" src="${s.info.pictures}">
                                </div>
                                `);
                            };
                             document.getElementById("storeSelection").innerHTML = storeSelectionArr.join('')
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
                        
                        storePage(1, 1);