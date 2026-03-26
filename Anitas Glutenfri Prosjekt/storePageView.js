
    


            
            function storePage(){
                const app = document.getElementById("app");   

                app.innerHTML = 
                /*HTML*/`
                        <div class="container">
                        <div class="side">
                            <h3>${model.data.store[1].info.city}</h2>
                            <h1>${model.data.store[1].info.storeName}</h5>
                            <div ><img class="pictureInfo" src="${model.data.store[1].info.pictures}"></div>
                                <p>
                                ${model.data.store[1].info.address}
                                <br>
                                telefon: ${model.data.store[1].info.phone}
                                <br>
                                ${model.data.store[1].info.link}
                                <br>
                                ${model.data.store[1].info.email}
                                <br>
                                ${model.data.store[1].info.averageScore} ⭐⭐⭐⭐ (${model.data.store[1].info.reviewAmount}) Anmeldelser
                                <br>


                                </p>
                            
                            <textarea class="reviewBox"></textarea>
                            <br>
                            <button>Legg til Anmeldelser</button>
                        </div>
                        <div class="main" id="storeReviews">
                            
                        </div>
                        
                        `;
                    }
                    storePage();


     function showStoreReviews() {
                    const storeReviews = model.data.store[1].reviews;
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
                showStoreReviews();