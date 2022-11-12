const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
];

// Метод append()

// const listProducts = () => {

//   const container = document.createElement('div');

//   products.forEach((goods) => {

//     const nameContainer = document.createElement('h2');
//     const brandContainer = document.createElement('h3');
//     const propertiesContainer = document.createElement('ul');
    
//     nameContainer.innerText = goods.name;
//     brandContainer.innerText = goods.brand;
      
//     goods.properties.forEach((item) => {
//       const propertiesValue = document.createElement('li');
//       propertiesValue.innerText = item;
      
//       propertiesContainer.append(propertiesValue)

//     });
    
    
//     document.body.append(propertiesContainer);

//     container.append(nameContainer, brandContainer, propertiesContainer);
    
//   });

//   console.log(container)
//   document.body.append(container)

// }





// Метод innerHTML

const listProducts = () => {

  let container = document.createElement('div')

    products.forEach((goods) => {

      const containerGoods = document.createElement('div')
      
      containerGoods.innerHTML =  `
      <h2>${goods.name}</h2>
      <h3>${goods.brand}</h3>
      <ul>
        ${goods.properties.map((item) => `<li>${item}</li>`).join ('')}
      </ul>
      `

      container.append(containerGoods)
    });
  
  document.body.append(container)
  console.log(container)
  return container
  
}

listProducts(products);
