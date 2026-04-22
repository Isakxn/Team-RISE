
function viewRegisterUserPage()
{
    app.innerHTML = `
        <div class="containerLogin" style="background-image: url('/Anitas%20Glutenfri%20Prosjekt/media/background/background.jpg');">

            <button type="button" class="loginBackButton" onclick="model.app.currentPage='frontPage'; updateView();">
                <img src="/Anitas%20Glutenfri%20Prosjekt/media/icons/login/arrow_back_ios_new.svg" alt="" width="16" height="16" aria-hidden="true">
           </button>
        <div>
    `;
}

