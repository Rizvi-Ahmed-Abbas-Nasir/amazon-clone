import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
           <img  className="home__wallpaper" src="https://m.media-amazon.com/images/I/71SucN7bTXL._SX3000_.jpg" alt="wallpaper" />

           <div className="home__row">
           <Product 
                id ="01"
                title="The Witcher 3: Wild Hunt"
                price={5000}
                image="https://m.media-amazon.com/images/I/51FdXnfNj6L.jpg"

           />
            <Product 
                id ="02"
                title="God Of War"
                price={100}
                image="https://m.media-amazon.com/images/I/81YBJ4RWDOL._SX522_.jpg"

           />
            <Product 
                id ="03"
                title="Red Dead Redemption - 2 (PS4) "
                price={50000}
                image="https://m.media-amazon.com/images/I/51xDl3CQB1L.jpg"

           />
          
            </div>
            <div className="home__row">
            <Product 
                id ="03"
                title="Red Dead Redemption - 2 (PS4) "
                price={1720.00}
                image="https://m.media-amazon.com/images/I/81XEnkqC6KL._SX522_.jpg"

           />
             <Product 
                id ="03"
                title="Red Dead Redemption - 2 (PS4) "
                price={20000}
                image="https://m.media-amazon.com/images/I/51xDl3CQB1L.jpg"

           />
            <Product 
                id ="03"
                title="Red Dead Redemption - 2 (PS4) "
                price={70000}
                image="https://m.media-amazon.com/images/I/51xDl3CQB1L.jpg"

           />
            </div>
            <div className="home__row">
            <Product />
            </div>
           </div>
        </div>
    )
}

export default Home
