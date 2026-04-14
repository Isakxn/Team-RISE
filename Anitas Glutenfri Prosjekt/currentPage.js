
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

