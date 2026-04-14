
function updateView()
{
    app.innerHTML = viewCurrentPage();
    
}


function viewCurrentPage()
{
    if (model.app.currentPage === "frontPage")
    {
        let main = "<div class='cssMain'>";
        let cityList = addCityList();
        let newestReviews = addNewestReviews();
        return `
            <div class="container_frontPage" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/cafeFolder/Cafe (7) dark.jpg');">
                ${cityList}
                ${newestReviews}
                ${viewLoginButton()}
            </div>
        `;
    }

    else if (model.app.currentPage === "storePage")
    {
        return storePage(0,0);
    }
    else if (model.app.currentPage === "loginPage")
    {
        return viewLoginPage();
    }
}

