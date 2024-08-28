import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Food from './src/Food/Food.jsx'
import { useEffect } from 'react';

function App() {
  const [food, setFood] = useState(["Quarter Pounder", "French Fries", "Fried Rice", "Panda express", "Ramen", "Chocolate", "Pizza", "Hot Wings", "Cafe Latte"]);

  return (
    <>
      <Food pikachu = {food} />
    </>
  )
}

export default App
