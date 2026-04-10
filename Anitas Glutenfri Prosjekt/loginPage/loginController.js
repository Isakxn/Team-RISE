function updateUsername(userInput)
{
    model.viewState.loginPage.username = userInput;
}

function updatePassword(userInput)
{
    model.viewState.loginPage.userPassword = userInput;
}


function buttonLogin()
{
    if (model.viewState.loginPage.username !== model.data.credentials[0].admin.name)
    {
        model.app.viewState.loginPage.loginInvalid = "Feil brukernavn!";
        updateView();
        return;
    }
    if (model.viewState.loginPage.userPassword !== model.data.credentials[0].admin.password)
    {
        model.app.viewState.loginPage.loginInvalid = "Feil passord!";
        updateView();
        return;
    }

    model.app.viewState.loginPage.loginInvalid = "";
    model.app.adminLoggedIn = true;
    model.app.currentPage = "frontPage";
    updateView();
}

