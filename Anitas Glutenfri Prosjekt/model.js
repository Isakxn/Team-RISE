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

    cities: [

      {   name: "Oslo",  
      
          store: 
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
                  },
                ],
                
                info: 
                {
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

              {
                reviews: 
              [
                {
                  name: "Anna Hansen",
                  pictures: [],
                  score: 5,
                  reviewText: "Fantastisk kaffe og hyggelig atmosfære!",
                  date: "2026-02-14",
                  likes: 12,
                },
                {
                  name: "Jonas Berg",
                  pictures: [],
                  score: 4,
                  reviewText: "God cappuccino, men litt dyrt.",
                  date: "2026-02-10",
                  likes: 5,
                },
              ],
              
              info: 
              {
                city: "Oslo",
                storeName: "Nordlys Kafé",
                type: "cafe",
                pictures: ["../media/cafeFolder/Cafe.jpg"],
                address: "Karl Johans gate 15",
                phone: 22334455,
                email: "kontakt@nordlyskafe.no",
                averageScore: 4.5,
                reviewAmount: 120,
                link: "https://nordlyskafe.no",
              },
            },

            {
            reviews: 
            [
              {
                name: "Maria Olsen",
                pictures: [],
                score: 5,
                reviewText: "Beste kanelboller i byen!",
                date: "2026-01-20",
                likes: 20,
              },
            ],
            
            info: 
            {
              city: "Oslo",
              storeName: "Fjell Bakeri",
              type: "bakery",
              pictures: [],
              address: "Bryggen 8",
              phone: 55667788,
              email: "post@fjellbakeri.no",
              averageScore: 4.8,
              reviewAmount: 85,
              link: "https://fjellbakeri.no",
            },
          },

          {
            reviews: 
            [
              {
                name: "Erik Johansen",
                pictures: [],
                score: 3,
                reviewText: "Greit sted, men pizzaen var litt tørr.",
                date: "2026-03-01",
                likes: 2,
              },
              {
                name: "Lise Nilsen",
                pictures: [],
                score: 4,
                reviewText: "God service og hyggelig personale.",
                date: "2026-03-03",
                likes: 4,
              },
            ],
            
            info: 
            {
              city: "Oslo",
              storeName: "PizzaHjørnet",
              type: "restaurant",
              pictures: [],
              address: "Munkegata 12",
              phone: 77889900,
              email: "hei@pizzahjornet.no",
              averageScore: 3.8,
              reviewAmount: 200,
              link: "https://pizzahjornet.no",
            },
          },

          {
            reviews: 
            [
              {
                name: "Sofie Larsen",
                pictures: [],
                score: 5,
                reviewText: "Utrolig gode kaker og flott presentasjon!",
                date: "2026-02-25",
                likes: 15,
              },
            ],
            
            info: 
            {
              city: "Oslo",
              storeName: "Arktisk Søtt",
              type: "bakery",
              pictures: ["cakeshop.jpg"],
              address: "Storgata 22",
              phone: 99887766,
              email: "kontakt@arktisksott.no",
              averageScore: 4.9,
              reviewAmount: 60,
              link: "https://arktisksott.no",
            },
          },
          
          {
            reviews: 
            [
              {
                name: "Daniel Pedersen",
                pictures: [],
                score: 4,
                reviewText: "Veldig bra burger og fries!",
                date: "2026-03-10",
                likes: 6,
              },
            ],
            
            info: 
            {
              city: "Oslo",
              storeName: "BurgerBua",
              type: "restaurant",
              pictures: ["burger.jpg"],
              address: "Øvre Holmegate 5",
              phone: 66778899,
              email: "post@burgerbua.no",
              averageScore: 4.2,
              reviewAmount: 140,
              link: "https://burgerbua.no",
            },
          },
          
          {
            reviews: 
            [
              {
                name: "Henrik Solberg",
                pictures: [],
                score: 5,
                reviewText: "Perfekt sted for å jobbe og slappe av.",
                date: "2026-03-15",
                likes: 9,
              },
            ],
            
            info: 
            {
              city: "Oslo",
              storeName: "Nord Kaffe",
              type: "cafe",
              pictures: ["alta_cafe.jpg"],
              address: "Markedsgata 3",
              phone: 11223344,
              email: "hei@nordkaffe.no",
              averageScore: 4.7,
              reviewAmount: 45,
              link: "https://nordkaffe.no",
            },
          },
        ], 
      },

    { name: "Bergen",
      store: []

    }, 
    { name: "Trondheim",
      store: []
    },
    { name: "Tromsø",
      store: []
    }, 
    { name: "Stavanger",
      store: []
    }, 
    { name: "Alta",
      store: []
    }, 
    ],
  },
};





