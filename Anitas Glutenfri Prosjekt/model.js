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
              pictures: ["../media/cafeFolder/Cafe (1).jpg"],
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
              pictures: ["../media/cafeFolder/Cafe (3).jpg"],
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
              pictures: ["../media/cafeFolder/Cafe (2).jpg"],
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
              pictures: ["../media/cafeFolder/Cafe (5).jpg"],
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
              pictures: ["../media/cafeFolder/Cafe (8).jpg"],
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

   
   
      {   name:   "Bergen",
    
    
        store: [
          {
            reviews: [
              {
                name: "Maria L.",
                pictures: [],
                score: 5,
                reviewText: "Fantastiske boller og hyggelig personale!",
                date: "2026-02-12",
                likes: 3,
              },
              {
                name: "Jonas K.",
                pictures: [],
                score: 4,
                reviewText: "God kaffe, litt travelt.",
                date: "2026-01-20",
                likes: 1,
              },
              {
                name: "Ingrid S.",
                pictures: [],
                score: 5,
                reviewText: "Elsker croissantene her!",
                date: "2026-03-02",
                likes: 4,
              },
              {
                name: "Per H.",
                pictures: [],
                score: 4,
                reviewText: "Koselig sted og gode priser.",
                date: "2026-02-25",
                likes: 2,
              },
            ],
            info: {
              city: "Bergen",
              storeName: "Solglimt Bakeri",
              type: "bakery",
              pictures: ["../media/cafeFolder/Cafe (7).jpg"],
              address: "Bryggen 12",
              phone: 55512345,
              email: "post@solglimt.no",
              averageScore: 4.5,
              reviewAmount: 4,
              link: "https://solglimt.no",
            },
          },

          {
            reviews: [
              {
                name: "Anne T.",
                pictures: [],
                score: 5,
                reviewText: "Beste cappuccino i byen.",
                date: "2026-03-01",
                likes: 5,
              },
              {
                name: "Lars E.",
                pictures: [],
                score: 4,
                reviewText: "Veldig bra atmosfære.",
                date: "2026-02-14",
                likes: 2,
              },
              {
                name: "Kari N.",
                pictures: [],
                score: 4,
                reviewText: "Hyggelig betjening.",
                date: "2026-01-30",
                likes: 1,
              },
              {
                name: "Ole M.",
                pictures: [],
                score: 5,
                reviewText: "Perfekt sted å jobbe fra.",
                date: "2026-02-18",
                likes: 3,
              },
            ],
            info: {
              city: "Bergen",
              storeName: "Fjellro Kafé",
              type: "cafe",
              pictures: ["../media/cafeFolder/Cafe (9).jpg"],
              address: "Torgallmenningen 5",
              phone: 55567890,
              email: "hei@fjellro.no",
              averageScore: 4.5,
              reviewAmount: 4,
              link: "https://fjellro.no",
            },
          },

          {
            reviews: [
              {
                name: "Sofie B.",
                pictures: [],
                score: 5,
                reviewText: "Utrolig god pizza!",
                date: "2026-03-03",
                likes: 6,
              },
              {
                name: "Daniel W.",
                pictures: [],
                score: 4,
                reviewText: "God mat, litt lang ventetid.",
                date: "2026-02-27",
                likes: 2,
              },
              {
                name: "Emma R.",
                pictures: [],
                score: 5,
                reviewText: "Fantastisk service.",
                date: "2026-02-10",
                likes: 4,
              },
              {
                name: "Henrik J.",
                pictures: [],
                score: 4,
                reviewText: "Hyggelig atmosfære.",
                date: "2026-01-22",
                likes: 1,
              },
            ],
            info: {
              city: "Bergen",
              storeName: "Bryggen Restaurant",
              type: "restaurant",
              pictures: ["../media/cafeFolder/Cafe (10).jpg"],
              address: "Bryggen 25",
              phone: 55511223,
              email: "booking@bryggenrest.no",
              averageScore: 4.5,
              reviewAmount: 4,
              link: "https://bryggenrest.no",
            },
          },

          {
            reviews: [
              {
                name: "Mats O.",
                pictures: [],
                score: 4,
                reviewText: "Veldig gode kaker.",
                date: "2026-02-05",
                likes: 2,
              },
              {
                name: "Elise V.",
                pictures: [],
                score: 5,
                reviewText: "Beste bakeriet i Bergen!",
                date: "2026-03-04",
                likes: 5,
              },
              {
                name: "Thomas G.",
                pictures: [],
                score: 4,
                reviewText: "God kvalitet, litt dyrt.",
                date: "2026-02-19",
                likes: 1,
              },
              {
                name: "Nora P.",
                pictures: [],
                score: 5,
                reviewText: "Elsker utvalget her.",
                date: "2026-01-28",
                likes: 3,
              },
            ],
            info: {
              city: "Bergen",
              storeName: "Bybakeriet",
              type: "bakery",
              pictures: ["../media/cafeFolder/Cafe (11).jpg"],
              address: "Marken 8",
              phone: 55533445,
              email: "kontakt@bybakeriet.no",
              averageScore: 4.5,
              reviewAmount: 4,
              link: "https://bybakeriet.no",
            },
          },

          {
            reviews: [
              {
                name: "Fredrik L.",
                pictures: [],
                score: 5,
                reviewText: "Fantastisk burger!",
                date: "2026-03-06",
                likes: 4,
              },
              {
                name: "Sara D.",
                pictures: [],
                score: 4,
                reviewText: "God mat og hyggelig sted.",
                date: "2026-02-16",
                likes: 2,
              },
              {
                name: "Kristian F.",
                pictures: [],
                score: 4,
                reviewText: "Bra service.",
                date: "2026-01-19",
                likes: 1,
              },
              {
                name: "Julie A.",
                pictures: [],
                score: 5,
                reviewText: "Kommer definitivt tilbake.",
                date: "2026-02-28",
                likes: 3,
              },
            ],
            info: {
              city: "Bergen",
              storeName: "Vestkanten Grill",
              type: "restaurant",
              pictures: ["../media/cafeFolder/Cafe (12).jpg"],
              address: "Vestkanten 3",
              phone: 55566778,
              email: "post@vestkantengrill.no",
              averageScore: 4.5,
              reviewAmount: 4,
              link: "https://vestkantengrill.no",
            },
          },
        ],

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





