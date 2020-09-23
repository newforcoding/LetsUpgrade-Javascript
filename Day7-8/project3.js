let products = [{
    name:"Chudidar salwar suit",
    size:"XL",
    color:"white",
    price:1200,
    image:"white.jpg",
    description:"Cotton net white salwar suit"
},
{
     name:"Palazo suit",
     size:"M",
     color:"Golden White",
     price:1300,
     image:"whitegolden.jpg",
     description:"Seffon net white golden palazo suit"
},
{
     name:"Chudiddar salwar suit",
     size:"M",
     color:"Organe White",
     price:1000,
     image:"organewhite.jpg",
     description:"Cotten seffon white organe design"
},
{
     name:"Kurti",
     size:"S",
     color:"Neon Green",
     price:1400,
     image:"neongreen.jpg",
     description:"Cotten plan green kurti"
    },
{
    name:"Mexy",
    size:"M",
    color:"Navy Blue",
    price:900,
    image:"navyblue.jpg",
    description:"Cotten navy blue mexy"
   },
   {
    name:"Salwar suit",
    size:"XL",
    color:"Multi Color",
    price:650,
    image:"multicolor.jpg",
    description:"Long kurti with cotten duptta and 3/4 sleaves"
   },
   {
    name:"Long Kurti",
    size:"M",
    color:" Light Blue and Red",
    price:1500,
    image:"lightblue.jpg",
    description:"Cotten blue kurti with design duptta and botton heavy border"
   },
   {
    name:"Palazo Kurti",
    size:"L",
    color:"Peach White",
    price:1100,
    image:"peach.jpg",
    description:"Full Palazo with light embroidary on kurti and silk duptta"
   },
   {
    name:"Polka Shorts",
    size:"L",
    color:"Dark Brownish Red",
    price:1100,
    image:"dark brownish red.jpg",
    description:"Cotten short dress with white polka dots"
   },
   {
    name:"Long Ethic Kurti",
    size:"M",
    color:"Dark White",
    price:980,
    image:"darkpink.jpg",
    description:"3/4 short dark pink with white pech work design"
   },
   {
    name:"Black Indian Grown",
    size:"XL",
    color:"Black Grey",
    price:2000,
    image:"greyblack.jpg",
    description:"Goergot Black and grey combo with full sleavs and printed soft duptta"
   },
   {
    name:"Palazo Kurti",
    size:"L",
    color:"Pink Light Blue",
    price:1500,
    image:"pinkblue.jpg",
    description:"Full Palazo with light embroidary on kurtiand border"
   },
        
]

document.querySelector(".product-quantity"),
      emptyCartEl = 



cart = []

if(localStorage.getItem("cart")==null){
    localStorage.setItem("cart",JSON.stringify(products))
}

function displayProducts(productData, who = "productwrapper"){
    let productsString=" "

    productData.forEach(function(product,index){
        let {name,image,color,description,price,size} = product
        // let productString = JSON.stringify(product);

        if(who=='productwrapper'){
        productsString += `<div class="product">
                      <div class="prodimg">
                      <img src='public/${image}' width="100%"/>
                      </div>
                      <h3>${name}</h3>
                      <p>Price: ${price}$</p>
                      <p>Size:  ${size}</p>
                      <p>Color: ${color}</p>
                      <p>Description: ${description}</p>
                      <p><button onclick='addToCart(${index})'>Add to cart</button></p>
                      </div>`
        }
        else if(who=="cart"){
            productsString += `<div class="product">
            <div class="prodimg">
            <img src='public/${image}' width="100%"/>
            </div>
            <h3>${name}</h3>
            <p>Price: ${price}$</p>
            <p>Size:  ${size}</p>
            <p>Color: ${color}</p>
            <p>Description: ${description}</p>
            <p><button onclick='removeFromCart(${index})'>Remove from cart</button></p>
            </div>`
        }
       
    })
    document.getElementById(who).innerHTML = productsString;              
}
displayProducts(products)                

function searchProduct(searchValue){  
    //   let searchValue=document.getElementById('searchProduct').value;
    //   console.log(searchValue)
    
    let searchProducts=products.filter(function(product,index){
       
        let searchString = products.name+ " "+product.color+" "+product.description 
        

        return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    })
    displayProducts(searchProducts)
}

function searchProductMin(){
    let searchMin = products.filter(function(min){
      return (min.price >= 500 && min.price <= 1000)
    })
displayProducts(searchMin)
}

function searchProductMax(){
    let searchMax = products.filter(function(max){
      return (max.price >= 1100 && max.price <= 2000)
    })
displayProducts(searchMax)
}

function addToCart(index){
    cart.push(products[index])
    displayProducts(cart,"cart") 
}
function removeFromCart(index){
    cart.splice(index,1);
    displayProducts(cart,"cart")
}

// function Carts(){
//     let count=0
//     cart.forEach(function(carts){
//        if(carts[index]===products[index]){
//             alert("Already Added")
//             return count++
//         }
//     })
//     displayProducts()
// }
