
function frontPage()
{
    let main = "<div class='cssMain'>";
    let cityList = addCityList();
    app.innerHTML = /*HTML*/`
        <div class="container_frontPage_all">
            <h3 class="logo_frontPage">Anitas Glutenfrie Prosjekt</h3>
            <div class="container_frontPage_header">
                ${viewLoginButton()}
            </div>
            <div class="container_frontPage">
                ${cityList}
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
        </div>
        `;
    return tempString;
}



function viewLoginButton()
{
    return `
        <button class="iconLogin" onclick="goBack()">
            <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/login.svg">
        </button>
    `;
}
