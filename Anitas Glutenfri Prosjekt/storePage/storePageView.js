
            function storePage(){

                storeFront()
                showStoreReviews()
                showStoreSelections()
                selectCity()
            
            }
            
            function storeFront(){
                const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
                const app = document.getElementById("app");   

                app.innerHTML = 
                /*HTML*/`
                        <div class="container">
                        <div class="leftside">
                        <img class="backbutton" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/corner/corner.svg">
                        <a onclick="goBack()">
                           <img class="backbuttonarrow" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/corner/arrowback.svg" >
                           </a>
                            <select id="citySelectId"></select>
                            <img class="hometab" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/hometab/hometabv2.svg">
                            <a onclick="goHome()">
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
                                ${writeReviewBtn()}
                        </div>
                        <div class="main" id="storeReviews">
                            
                        </div>

                        <div class="rightside" id="storeSelection">
                            
                        </div>
                        </div>
                        
                        `;
                    }
                    
                    
                         function showStoreReviews() {
                            const storeReviews = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore].reviews;
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
                        
                        function showStoreSelections() {
                            
                            const globalCityStore = model.data.cities[model.viewState.storeFrontPage.selectedCity].store;
                            const cityStore = [...globalCityStore];
                            const storeSelectionArr = [];
                            
                            
                            cityStore.sort((a, b) => b.info.averageScore - a.info.averageScore)
                            
                            
                            
                            for (let index = 0; index < cityStore.length; index++) {
                                const s = cityStore[index];
                                const g = globalCityStore.indexOf(s);
                                storeSelectionArr.push(`
                                <div class="storeBox" onclick="changeStore(${g}); storePage();">
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



                        function selectCity(){
                            const city = model.data.cities;
                            const cityArray = [];

                            for (let index = 0; index < city.length; index++) {
                                cityArray.push(`
                                    <option value="${index}" ${index === model.viewState.storeFrontPage.selectedCity ? 'selected' : ''} onclick="changeCity(${index}); storePage();" >${city[index].name}</option>

                                    `)
                                
                            }
                            
                            document.getElementById("citySelectId").innerHTML = cityArray.join('');


                        }
                        function writeReviewBtn(){
                            if (model.app.currentPage === "storePage")
                            {return `
                            <div onclick="goForward()">
                            <textarea class="userReviewBox"></textarea>
                            <br>
                            <button>Legg til Anmeldelser</button>
                            </div>
                            `}
                            return "";
                            
                        }


                        