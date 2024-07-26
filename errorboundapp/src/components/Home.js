import React from 'react'
import './Home.css'
function Home({heroName}) {
    if(heroName==='joker'){
        throw new Error("Not a hero");
    }
  return (
    <div className="home-container">
      <h1 className='hero-name'>
        {heroName}
        </h1>
    </div>
  )
}

export default Home