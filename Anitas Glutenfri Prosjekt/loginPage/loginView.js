

function viewLoginPage() 
{
    const correctLogin = loggedInUser();
    const correctUsername = checkUsername();
    const correctPassword = checkUserPassword();
    return `
        <div class="containerLogin" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/cafeFolder/congAdmin.png');">

            <button type="button" class="loginBackButton" onclick="model.app.currentPage='frontPage'; updateView();">
                <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/arrow_back_ios_new.svg" alt="" width="16" height="16" aria-hidden="true">
           </button>

           <br>
            <div style="color: #feffa6;">Brukernavn:</div>
            <input class="inputLogin" oninput="updateUsername(this.value)" onkeydown="if(event.key==='Enter'){ buttonLogin(); }">

            <div style="color: #feffa6;">Passord:</div>
            <input class="inputLogin" type="password" oninput="updatePassword(this.value)" onkeydown="if(event.key==='Enter'){ buttonLogin(); }">

            <br>
            <button class="buttonLogin" onclick="buttonLogin()">Logg inn</button>

            <div class="inputLoginFail">
                ${model.viewState.loginPage.loginInvalid}
            </div>
        </div>
    `;
}

