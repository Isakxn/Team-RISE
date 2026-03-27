
            function storePage(Id){
                const storeId = model.data.cities[0].store[Id];
                const app = document.getElementById("app");   

                app.innerHTML = 
                /*HTML*/`
                        <div class="container">
                        <div class="side">
                            <h3>${storeId.info.city}</h2>
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
                                ${storeId.info.averageScore} ⭐⭐⭐⭐ (${storeId.info.reviewAmount}) Anmeldelser
                                <br>


                                </p>
                            
                            <textarea class="reviewBox"></textarea>
                            <br>
                            <button>Legg til Anmeldelser</button>
                        </div>
                        <div class="main" id="storeReviews">
                            
                        </div>
                        
                        `;
                        showStoreReviews(Id)
                    }
                    
                    
                    function showStoreReviews(Id) {
                        const storeReviews = model.data.cities[0].store[Id].reviews;
                        const storeReviewsArr = []
                        
                        for (let i = 0; i < storeReviews.length; i++) {
                            const r = storeReviews[i]
                            storeReviewsArr.push(`
                                
                                <div class="item">
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
                        storePage(1);