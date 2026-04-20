// ISAK
function userText(textInput) {
    model.viewState.writeReviewPage.userReview = textInput;

}
function userReviewName(textInput) {
    model.viewState.writeReviewPage.userName = textInput;

}
function userScore(input) {
    model.viewState.writeReviewPage.userScore = input;
}
function sendReview() {
    const d = new Date();
    let newDate =`${d.getFullYear()} - ${d.getDate()} - ${d.getMonth()}`
    const storeId = model.data.cities[model.viewState.storeFrontPage.selectedCity].store[model.viewState.storeFrontPage.selectedStore];
    let tempObj = {
        name: model.viewState.writeReviewPage.userName,
        pictures: [],
        score: 5,
        reviewText: "Fantastisk kaffe og hyggelig atmosfære!",
        date: newDate,
        likes: 0,


    }
    console.log(tempObj)
    storeId.reviews.push(tempObj)

    const m = model = model.viewState.writeReviewPage;
      m.userScore = 0;
      m.userReview = "";
      m.userName = "";
      m.userPicture = [];
    goBack()
 
}