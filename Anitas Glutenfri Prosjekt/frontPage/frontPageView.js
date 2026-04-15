
function frontPage()
{
    let main = "<div class='cssMain'>";
    let cityList = addCityList();
    let newestReviews = addNewestReviews();
    app.innerHTML = `
        <div class="container_frontPage_all">
            <div class="container_frontPage_header">
                <h3>Anitas Glutenfrie Prosjekt</h3>
                ${viewLoginButton()}
            </div>
            <div class="container_frontPage">
                ${cityList}
                ${newestReviews}
            </div>
        </div>
    `;
}

function addCityList()
{
    let tempString = /*HTML*/ `
        <div class="leftside_frontPage">
            <h2 class="headerSearch">Hvor vil du søke?</h2>
            <br>
            <div class="searchElements">
                <select class="cssCityList">
        `;
    for (let c = 0; c < model.data.cities.length; c++)
    {
        tempString += `<option onclick="changeCity(${c})">${model.data.cities[c].name}</option>`;
    }
    tempString += /*HTML*/ `
                </select>
                <button class="buttonSearch" onclick="goForward()">Søk</button>
            </div>
            <br>
            <img class="imgCity" src="https://www.svgrepo.com/show/12439/street-map.svg">
        </div>
        `;
    return tempString;
}


function addNewestReviews()
{
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
    let returnString = `<div class="middleSection_frontPage">`;
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
        <button class="iconLogin" onclick="goBack()">
            <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/login.svg">
        </button>
    `;
}
