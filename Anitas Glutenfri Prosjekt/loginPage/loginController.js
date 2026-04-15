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
        model.viewState.loginPage.loginInvalid = "Feil brukernavn!";
        // document.getElementById("app").innerHTML += `<div class="inputLoginFail">Feil brukernavn!</div>`;
        updateView();
        return;
    }
    if (model.viewState.loginPage.userPassword !== model.data.credentials[0].admin.password)
    {
        model.viewState.loginPage.loginInvalid = "Feil passord!";
        updateView();
        return;
    }

    model.viewState.loginPage.loginInvalid = "";
    model.app.adminLoggedIn = true;
    model.app.currentPage = "frontPage";
    updateView();
}


function buttonLogout()
{
    model.viewState.loginPage.loginInvalid = "";
    model.app.adminLoggedIn = false;
    model.app.currentPage = "frontPage";
    updateView();
}