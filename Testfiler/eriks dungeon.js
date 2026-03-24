
const model3 = 
{
  app: 
  {
    currentPage: "frontPage",
    shoppingCart: 
    {
      items: [],
      totalPrice: 0,
    },
  },

  viewState: 
  {
    category: ["cKake", "cSalat", "cBaguette", "cDrikke", "cKaffe"],

    productPage: 
    {
    },

    cakePage: 
    {
      selectedProductId: null,
      specialInstructions: "",
    },
  },

  data: 
  {
    products: 
    {
      kaffe: 
      [
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


function meinFunksjon()
{
  let html = "";
  html = `
  <button onclick="clickCategory(${btn})">Kake</button>
  `;
}


function pickCategory(_category)
{
}