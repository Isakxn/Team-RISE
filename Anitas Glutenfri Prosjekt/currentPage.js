
function updateView()
{
    html = viewCurrentPage();
    app.innerHTML = html;
}


function viewCurrentPage()
{
    if (model.app.currentPage === "frontPage")
    {
        let main = "<div class='cssMain'>";
        let cityList = addCityList();
        let newestReviews = addNewestReviews();
        return `
            <div class="container">
                ${cityList}
                ${newestReviews}
            </div>
        `;
    }

    else if (model.app.currentPage === "loginPage")
    {
        return viewLoginPage();
    }
}

