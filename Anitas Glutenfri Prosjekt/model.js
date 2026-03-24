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
            reviews: []

        },

        selectionPage:
        {
            city: "",
            establishmentSelection: [],

        },

        storeFrontPage: {
            city: "",
            establishment: {},
            reviews: [],

        },

        writeReviewPage: {
            city: "",
            userScore: 0,
            userReview: "",
            userPicture: ["",],

            establishmentName: "",      // sjekk med Kenneth om vi burde
                                        //  lage en viewState-kopi for ikke å endre på datasettet

         },

         loginPage: {
            username: "",
            userPassword: "",
         },

    },

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