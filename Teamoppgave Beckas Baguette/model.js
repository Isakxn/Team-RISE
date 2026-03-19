const model = {
  app: {
    currentPage: "frontPage",

    shoppingCart: {
        cartList: [],
        totalPrice: 0,
      },
  },

  viewState: {
    frontPage: {
        selectedCategory: "",
        searchInput:""
    },

    productPage: {
      product: "",
      id: Number,
      amount: 0,
      modifications: [],
      totalPrice: 0,
    },

    cakePage: {
      product: "",
      id: Number,
      modifications: [],
      specialInstructions: "",
      totalPrice: 0,
    },

    checkoutPage: {},
      
    },
    
    product: {
      kaffe: [
        {
          id: 1,
          name: "Latte",
          price: 30,
        },
        {
          id: 2,
          name: "Espresso",
          price: 25,
        },
        {
          id: 3,
          name: "Macchiato",
          price: 35,
        },
      ],
      baguette: [
        {
          id: 4,
          name: "Grov baguette",
          price: 40,
        },

        {
          id: 5,
          name: "Fin baguette",
          price: 45,
        },
        {
          id: 6,
          name: "Loff baguette",
          price: 35,
        },
      ],

      kakeStykke: [
        { id: 7, name: "Oste Kake", price: 20 },
        { id: 8, name: "Oreo Kake", price: 25 },
        { id: 9, name: "Sjokolade Kake", price: 30 },
        { id: 10, name: "Marsipan Kake", price: 10 },
      ],

      bestillingsKake: [
        { id: 11, name: "Oste Kake", price: 200 },
        { id: 12, name: "Oreo Kake", price: 250 },
        { id: 13, name: "Sjokolade Kake", price: 300 },
        { id: 14, name: "Marsipan Kake", price: 100 },
      ],
    },

    modifications: {
      kaffeModifications: [
        {
          name: "Uten melk",
          price: 0,
        },
        {
          name: "Ekstra melk",
          price: 5,
        },
        {
          name: "Uten sukker",
          price: 0,
        },
        {
          name: "Ekstra sukker",
          price: 5,
        },
      ],

      baguetteModifications: [
        {
          name: "Uten løk",
          price: 0,
        },
        {
          name: "Ekstra skinke",
          price: 5,
        },
        {
          name: "Ekstra ost",
          price: 5,
        },
        {
          name: "Uten salat",
          price: 0,
        },
        {
          name: "Ekstra salat",
          price: 5,
        },
      ],
    },
};


const model2 = {
  app: {
    currentPage: "frontPage",
    shoppingCart: {
      items: [],
      totalPrice: 0,
    },
  },

  viewState: {
    productPage: {
      selectedProductId: null,
      amount: 1,
      optionsInput:""
    },

    cakePage: {
      selectedProductId: null,
      specialInstructions: "",
    },
  },

  data: {
    products: {
      kaffe: [
        {
          id:1,
          name:"Cappucino",
          price:35,
          options:""
        },
      ],
      baguette: [],
      kakeStykke: [],
      bestillingsKake: [],
    },
  }
};



function createModel() {
    model.app.innerHTML = "<div> model.products.kaffe </div>";
    

  //onclick => model.app.viewState.selectedCategory = "Kaffe"
  //onclick => model.app.viewState.selectedCategory = "Kake"
  //onclick => tegn ved å bruke =>  model.app.viewState.products.coffee 
}