import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home--img"
          src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg"
          alt="bg"
        />

        <div className="home--row">
          <Product
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={44}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id="05"
            title="realme Buds Q2 Active Noise Cancellation (ANC)"
            price={19}
            image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
          />
          <Product
            id="02"
            title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
            price={27}
            image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
          />
          <Product
            id="11"
            title="Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS"
            price={80}
            image="https://m.media-amazon.com/images/I/71umlOrdukL._SX679_.jpg"
          />
          <Product
            id="02"
            title="Noise ColorFit Pro 2 Full Touch Control Smart Watch"
            price={27}
            image="https://m.media-amazon.com/images/I/61xzuXWWozS._SL1200_.jpg"
          />
          <Product
            id="07"
            title="Infinix Hot 10 Play"
            price={8999.0}
            image="https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
          />
          <Product
            id="08"
            title="Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS"
            price={88990.0}
            image="https://m.media-amazon.com/images/I/71umlOrdukL._SX679_.jpg"
          />
          <Product
            id="05"
            title="realme Buds Q2 Active Noise Cancellation (ANC)"
            price={1999}
            image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
          />
          <Product
            id="10"
            title="Infinix Hot 10 Play"
            price={8999.0}
            image="https://m.media-amazon.com/images/I/21tF2nSBsbL.jpg"
          />
          <Product
            id="11"
            title="Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS"
            price={88990.0}
            image="https://m.media-amazon.com/images/I/71umlOrdukL._SX679_.jpg"
          />
          <Product
            id="12"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4424.56}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id="05"
            title="realme Buds Q2 Active Noise Cancellation (ANC)"
            price={1999}
            image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
