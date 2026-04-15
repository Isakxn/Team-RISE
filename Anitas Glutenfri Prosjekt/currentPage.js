
function updateView()
{
    viewCurrentPage();
    
}


function viewCurrentPage()
{
    if (model.app.currentPage === "frontPage")
    {
        frontPage();
    }
    else if (model.app.currentPage === "selectionPage")
    {
        return selectionPage();
    }
    else if (model.app.currentPage === "storePage")
    {
        return storePage(0, 0);
    }
    else if (model.app.currentPage === "loginPage")
    {
        return viewLoginPage();
    }
}

function goBack (){
    if (model.app.currentPage === "frontPage")
    {
        model.app.currentPage = "loginPage";
        updateView();
    }
    else if (model.app.currentPage === "storePage")
    {
        model.app.currentPage = "frontPage"
        updateView();
    }
    else if (model.app.currentPage === "loginPage")
    {
        model.app.currentPage = "frontPage"
        updateView();
    }
    else if (model.app.currentPage === "writeReviewPage")
    {
        model.app.currentPage = "storePage"
        updateView();
    }

}

function goForward() {
       if (model.app.currentPage === "frontPage")
    {
        model.app.currentPage = "storePage";
        updateView();
    }
    else if (model.app.currentPage === "storePage")
    {
        model.app.currentPage = "writeReviewPage"
        updateView();
    }
    else if (model.app.currentPage === "loginPage")
    {
        model.app.currentPage = "frontPage"
        updateView();
    }

}

