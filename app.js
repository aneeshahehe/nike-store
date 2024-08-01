


const products = [
    {
      id: 1,
      title: "Dunk Low",
      price: 119.99,
      colors: [
        {
          code: "red",
          img: "./img/dunk-low-2.png",
        },
        {
          code: "white",
          img: "./img/dunk-low-3.png",
        },
        {
            code: "sage",
            img: "./img/dunk-low-1.png",
        },
        {
            code: "peach",
            img: "./img/dunk-low-4.png",
        }

      ],
    },
    {
      id: 2,
      title: "Air Jordan 1",
      price: 119.99,
      colors: [
        {
          code: "white",
          img: "./img/air-jordan-1-red.png",
        },
        {
          code: "lightgray",
          img: "./img/AIRJORDAN1MID.png",
        },
        {
            code: "#e0dede",
            img: "",
        },
        {
            code: "#e0dede",
            img: "",
        }
      ],
    },
    {
      id: 3,
      title: "Air Max 1",
      price: 97.99,
      colors: [
        {
          code: "Black",
          img: "./img/air-max-black.png",
        },
        {
          code: "white",
          img: "./img/air-max-white.png",
        },
        {
            code: "#e0dede",
            img: "",
        },
        {
            code: "#e0dede",
            img: "",
        }
      ],
    },
    {
      id: 4,
      title: "Air Force 1 '07",
      price: 119.99,
      colors: [
        {
          code: "black",
          img: "./img/air-force.png",
        },
        {
            code: "#e0dede",
            img: "",
        },
        {
            code: "#e0dede",
            img: "",
        },
        {
          code: "#e0dede",
          img: "",
      }
        
      ],
    },
    {
      id: 5,
      title: "Air Zoom Spiridon Cage 2",
      price: 149.99,
      colors: [
        {
          code: "white",
          img: "./img/air-zoom-white.png",
        },
        {
          code: "black",
          img: "./img/air-zoom-black.png",
        },
        {
            code: "#e0dede",
            img: "",
        },
        {
            code: "#e0dede",
            img: "",
        }
      ],
    },
  ];

const wrapper = document.querySelector('.sliderWrapper');
const menuItem = document.querySelectorAll('.menuItem');
  
  let chosenProduct = products[0];  //initial product

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item,index) =>{
    item.addEventListener("click", () =>
    {    //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        chosenProduct = products[index];


        //change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = chosenProduct.colors[index].code;
        });

    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "#e0dede";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "#e0dede";
    });
  });



  const productBut =document.querySelector('.productButton')
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productBut.addEventListener("click",()=>
  {
    payment.style.display = "flex";
  });

  close.addEventListener("click", ()=>
  {
    payment.style.display = "none";
  })







const genderList= [
  {
    id:1,
    title: "men",
    img:"https://images.pexels.com/photos/13565123/pexels-photo-13565123.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  {
    id:2,
    title: "women",
    img:"https://images.pexels.com/photos/4753997/pexels-photo-4753997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  },
  {
    id:3,
    title: "teens",
    img:"https://images.pexels.com/photos/9634922/pexels-photo-9634922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

let genderChosen= genderList[0];

const wrapperGender = document.querySelector(".genderWrapper");
const navButton = document.querySelectorAll(".navButton");

const currentGenderImg = document.querySelector(".genderImg");
const currentGenderButton = document.querySelector(".gender-button");

navButton.forEach((button,index)=>
{
  button.addEventListener("click",()=>{
      wrapperGender.style.transform = `translateX(${-20 * index}vw)`;


      genderChosen = genderList[index];
      currentGenderImg.src = genderChosen[index].img;
      // currentGenderButton=genderChosen[index].;


    

    
    
  });
});