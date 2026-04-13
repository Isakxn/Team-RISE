
function addCityList() {
    let tempString = /*HTML*/ `
        <div class="leftside">
            <h2 class="headerSearch">Hvor vil du søke?</h2>
            <select class="cssCityList">
        `;
    for (let c = 0; c < model.data.cities.length; c++) {
        tempString += `<option>${model.data.cities[c].name}</option>`;
    }
    tempString += /*HTML*/ `
            </select>
            <button class="buttonSearch">Søk</button>
            <img class="imgCity" src="https://media.istockphoto.com/id/586924460/vector/city-map-with-various-buildings.jpg?s=170667a&w=0&k=20&c=byybSCRNdSffgm4i8PRjUV4rrz6NgKkK8J8otiXRgqc=">
        </div>
        `;
    return tempString;
}


function addNewestReviews() {
    let all = [];       // temp array to store newest reviews across stores
    for (let c = 0; c < model.data.cities.length; c++) {
        let stores = model.data.cities[c].store;

        for (let i = 0; i < stores.length; i++) {
            let reviews = stores[i].reviews;
            if (Array.isArray(reviews)) {
                for (var j = 0; j < reviews.length; j++) {
                    all.push(reviews[j]);
                }
            }
        }
    }

    // sort combined list newest-first
    all.sort(
        function (a, b) {
            return new Date(b.date) - new Date(a.date);
        }
    );

    // 
    let returnString = `<div class="main">`;
    for (let s = 1; s < all.length; s++) {
        returnString += 
        `
            <div class="reviewBox">
                <h2>${all[s].name}</h2>
                <h5>${all[s].date}</h5>
                <p>${all[s].reviewText}</p>
                ${all[s].score} Stjerner.
                <br>
                (${all[s].likes})<button>Liker</button>
            </div>
        `;
    }
    returnString += `</div>`;
    return returnString;
}


function viewLoginButton()
{
    return `
        <button>
            <img class="loginButton" src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/login.svg">
        </button>
    `;
}
