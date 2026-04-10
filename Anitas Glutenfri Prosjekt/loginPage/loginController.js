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
        loginInvalid = "Feil brukernavn!";
        return;
    }
    if (model.viewState.loginPage.userPassword !== model.data.credentials[0].admin.password)
    {
        loginInvalid = "Feil passord!";
        return;
    }

    loginInvalid = "";
    model.app.currentPage = "frontPage";
    updateView();
}

