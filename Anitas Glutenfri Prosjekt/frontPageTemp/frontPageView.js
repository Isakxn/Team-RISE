
function frontPage()
{
    let main = "<div class='cssMain'>";
    let cityList = addCityList();
    let newestReviews = addNewestReviews();
    app.innerHTML = /*HTML*/`
        <div class="container_frontPage_all">
            <h3 class="hacky_hacky">Anitas Glutenfrie Prosjekt</h3>
            <div class="container_frontPage_header_alt">
                ${viewLoginButton()}
            </div>
            <div class="container_frontPage">
                ${cityList}
<!--               ${newestReviews}-->
            </div>
        </div>
    `;
}

function addCityList()
{
    let tempString = /*HTML*/ `
        <div class="topside_frontPage">
            <h2 class="headerSearch">Velg by:</h2>
            <br>
            <div class="searchElements">
                <div class="cityList_dropdown">
                    <button class="cityList_btn">${model.data.cities[model.viewState.storeFrontPage.selectedCity].name}</button>
                    <div class="cityList_content">
        `;
    for (let c = 0; c < model.data.cities.length; c++)
    {
        tempString += `<a onclick="changeCity(${c}); updateView()">${model.data.cities[c].name}</a>`;
    }
    tempString += /*HTML*/ `
                    </div>
                </div>
                <button class="buttonSearch" onclick="goForward()">Søk</button>
            </div>
            <br>
<!--            <img class="imgCity" src="https://www.svgrepo.com/show/12439/street-map.svg"> -->
        </div>
        `;
    return tempString;
}

{/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> */}

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
    let returnString = `<div class="bottomside_frontPage">`;
    for (let s = 1; s < all.length; s++) {
        returnString += /*HTML*/
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
