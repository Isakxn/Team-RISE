const model =
{
    app:
    {
        admin: "",
        password: "",
        adminLoggedIn: false,
        currentPage: frontPage,          // selectionPage, storeFrontPage, writeReviewPage, loginPage, adminPage, 
    },

    viewState:
    {
        frontPage:
        {
            citySelection: "",

        },

        selectionPage:
        {
            storeType : "",

        },

        storeFrontPage: {

            storeSelection: "",
            
        },

        writeReviewPage: {
            userScore: 0,
            userReview: "",
            userPicture: ["",],
         },

         loginPage: {
            username: "",
            userPassword: "",
         },

    },

    city: [],

    establishment:
    [ 
      {
          reviews:
           [
              {
                name: "",
                pictures: [],
                score: 0,
                reviewText: "",
                date: "",
                likes: 0,
               }
           ],

         info:
         {
              storeName: "",
              type: "",       // bakery, cafe, street stand, 
              pictures: [],
               address: "",
               phone: 0,
               email: "",
               averageScore: 0,
               reviewAmount: 0,
               link: ""
         }
        }
    ]
};