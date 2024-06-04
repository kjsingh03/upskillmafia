import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
      name: "AIR Jordan",
      price: 120,
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/I/51DzKxbdN6L._AC_UY1000_.jpg",
      name: "Leather Shoes",
      price: 60,
    },
    {
      id: 3,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg",
      name: "White Shoes",
      price: 500,
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/I/71VGf+sQJdL._AC_UY300_.jpg",
      name: "Gym Shoes",
      price: 300,
    },
    {
      id: 5,
      image:
        "https://images-cdn.ubuy.co.in/65bc97288768097125372edb-kids-led-light-up-shoes-boys-girls-fiber.jpg",
      name: "Neon Shoes",
      price: 50,
    },
    {
      id: 6,
      image:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23484790/2023/5/31/14fc49d0-6ce3-4410-9e8c-147f57c539d91685518426707HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
      name: "HRX Shoes",
      price: 75,
    },
  ]);

  let [cart, setCart] = useState([])
  let [amount, setamount] = useState(0)

  useEffect(() => {
    let newAmount=0
      cart.forEach(prod=>{
        newAmount+=prod.quantity*prod.price
      })
      setamount(newAmount)
  }, [cart]);

  const decrease = (id) => {
    if (cart.find(prod => prod.id === id).quantity > 1)
      cart.find(prod => prod.id === id).quantity -= 1
    else {
      cart.find(prod => prod.id === id).quantity = 0
      cart.splice(cart.indexOf(cart.find(prod => prod.id === id)), 1)
    }
    setCart([...cart])
  }

  const increase = (id) => {
    cart.find(prod => prod.id === id).quantity += 1
    setCart([...cart])
  }

  const add = (id) => {
    let prod = cards.find(prod => prod.id === id)

    if (!cart.find(prod => prod.id === id)) {
      setCart(p => [...p, { ...prod, quantity: 1 }])
    }
    else {
      cart.find(prod => prod.id === id).quantity += 1
      setCart([...cart])
    }
  }

  return (
    <>
      <nav className="fixed w-full text-white bg-yellow-800">
        <div className="w-[80%] py-3 border-b border-b-slate-600 mx-auto flex justify-between items-center">
          <ul className="flex gap-12">
            <li className="cursor-pointer hover:text-slate-300">Home</li>
            <li className="cursor-pointer hover:text-slate-300">Products</li>
            <li className="cursor-pointer hover:text-slate-300">Contact</li>
          </ul>
          <div className="flex gap-4 items-center">
            <p className="cursor-pointer hover:text-slate-300">Cart</p>
            <p className="cursor-pointer hover:text-slate-300">User</p>
          </div>
        </div>
      </nav>
    <div className="w-[80%] pt-32 mx-auto flex justify-between gap-16">
      <div className="grid grid-cols-2 w-[70%]">

        {
          cards.map((card, index) => (
            <Card card={card} add={add} key={index} />
          ))
        }

      </div>
      <div className="flex flex-col gap-4 w-[30%]">
        <h1>Cart</h1>
        <div className="grid grid-cols-1 ">
          {
            cart.map((prod, index) => (
              <div className="flex gap-4" key={index}>
                <div className="w-24 h-24">
                  <img src={prod.image} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                  <p>{prod.name}</p>
                  <div className="flex gap-3 items-center">
                    <p onClick={() => decrease(prod.id)} className="text-white bg-yellow-800 cursor-pointer px-2 font-bold">-</p>
                    <p className=" font-semibold">{prod.quantity || 1}</p>
                    <p onClick={() => increase(prod.id)} className="text-white bg-yellow-800 cursor-pointer px-2 font-bold">+</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          cart.length >0 &&
        <div className="flex justify-between">
          <p>Total amount</p>
          <p>${amount}</p>
        </div>
        }
      </div>
    </div>
    </>
  );
}

export default App;
