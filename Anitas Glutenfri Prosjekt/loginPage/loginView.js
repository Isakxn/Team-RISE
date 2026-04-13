
function viewLoginPage() 
{
    return `
        <div class="containerLogin" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/cafeFolder/congAdmin.png');">
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

