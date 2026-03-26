const model = {
  app: {
    // app: document.getElementById("app"),
    adminLoggedIn: false,
    currentPage: "frontPage", // selectionPage, storeFrontPage, writeReviewPage, loginPage, adminPage,
    pages: ["frontPage", "selectionPage", "storeFrontPage", "writeReviewPage", "loginPage", "adminPage"],
    // currentUser: "",
  },

  viewState: {
    frontPage: {
      citySelection: "",
    },

    selectionPage: {
      storeType: "",
    },

    storeFrontPage: {
      storeSelection: "",
    },

    writeReviewPage: {
      userScore: 0,
      userReview: "",
      userPicture: [""],
    },

    loginPage: {
      username: "",
      userPassword: "",
    },
  },

  // data
  data: {
    credentials: [
      {
        admin: {
          name: "anita",
          password: "anita",
        },
      },
    ],

    store: [
      {
        reviews: [
          {
            name: "",
            pictures: [],
            score: 0,
            reviewText: "",
            date: "",
            likes: 0,
          },
        ],

        info: {
          city: "",
          storeName: "",
          type: "", // bakery, cafe, street stand,
          pictures: [],
          address: "",
          phone: 0,
          email: "",
          averageScore: 0,
          reviewAmount: 0,
          link: "",
        },
      },
    ],

    cities: [{ name: "Bergen" }, { name: "Hamar" }, { name: "Kirkenes" }, { name: "Lillestrøm" }, { name: "Ålesund" }],
  },
};
