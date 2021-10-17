import React from 'react'
import './SecondHeader.css'
import MenuIcon from '@mui/icons-material/Menu';
function SecondHeader() {
    return (
        <div className="second__header">
        <div className="second__headerfirst">
         <MenuIcon className="menu" /><p className="all">All</p>
           <p>Mobiles</p>
           <p>Best Seller</p>
           <p>Fashion</p>
           <p>Customer Service</p>
           <p>Electronic</p>
           <p>Prime</p>
           <p>Today's Deals</p>
           <p>Amazon Pay</p>
           <p>Computers</p>
           {/* <img className="Image" src="" alr="" /> */}
        </div>
       

        </div>
    )
}

export default SecondHeader
