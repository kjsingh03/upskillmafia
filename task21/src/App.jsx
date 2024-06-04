import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const [cards, setCards] = useState([{ image: 'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=', name: 'card1', desc: 'this is description of card1' }, { image: 'https://cdn.britannica.com/60/95760-050-899F8959/River-Landscape-canvas-oil-Adriaen-van-de-1663.jpg', name: 'card2', desc: 'this is description of card2' }, { image: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', name: 'card3', desc: 'this is description of card3' }, { image: 'https://img.freepik.com/free-photo/beautiful-natural-view-landscape_23-2150787996.jpg', name: 'card4', desc: 'this is description of card4' }, { image: 'https://cdn.shopify.com/s/files/1/0163/6622/files/Landscape_Photo_Tips.jpg?v=1660006499', name: 'card5', desc: 'this is description of card5' }, { image: 'https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg', name: 'card6', desc: 'this is description of card6' }, { image: 'https://cdn.pixabay.com/photo/2023/12/15/22/37/mountains-8451480_1280.jpg', name: 'card7', desc: 'this is description of card7' }, { image: 'https://cdn.naturettl.com/wp-content/uploads/2020/04/25152036/how-to-find-great-locations-for-landscape-photography-11.jpg', name: 'card8', desc: 'this is description of card8' }, { image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', name: 'card9', desc: 'this is description of card9' }, { image: 'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg', name: 'card10', desc: 'this is description of card10' }, { image: 'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg', name: 'card11', desc: 'this is description of card11' }, { image: 'https://img.freepik.com/free-photo/view-spectacular-nature-landscape_23-2150763636.jpg', name: 'card12', desc: 'this is description of card12' },])

  useEffect(() => {

  }, [])

  return (
    <div className='w-[80%] mx-auto flex flex-col text-white justify-between gap-16 py-16'>
      <div className="w-full">
        <h1 className='text-center text-2xl text-[#847bfa] font-bold'>All cards here</h1>
      </div>
      <div className="grid grid-cols-3 gap-12 place-items-center">
        {
          cards.map((card, index) => (
            <Card key={index} card={card} />
          ))
        }
      </div>
    </div>
  )
}

export default App
