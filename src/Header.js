import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    const  [{cart}, dispatch] = useStateValue();
    
    return (
        <div className="header">
            <Link to="/"> 
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
            </Link> 
            <div className="header__option0">
                        <span className="header__optionLine">Hello</span>
                        <RoomOutlinedIcon className="map" /><span className="header__optionLineTwo">Select Your Address</span>
                </div>
        <div className="header__search">
        <div className="All">
                <select className="AllCatgories">
                    <option  selected="selected" >All</option>             
                    <option >All Catgories</option>
                    <option >Deals</option>
                    <option >Alexa Skills</option>
                    <option >All</option>
                    <option >All</option>
                    <option >All</option>               
                </select>
        </div>
            <input className="header__searchInput" type="text" />
            {/* {material UI} */}
            <SearchIcon className="header__searchicon" />
        </div>  
        <img className="flag__logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/mTMSiAf/////lycAgQAAAIgAAIUAAH4AAIIAAIMAAHwAAHPi4u+kpMvz8/kAAHjn5/Lt7fXd3ey5uddPT6GZmcWDg7n6+v7Ly+HIyOJERJxlZao+PponJ5L29vy0tNbW1uggIJCfn8iGhrsYGJBNTaB2drQQEIx+fripqc5ra62QkMBXV6QiIpFfX6i+vtwyMpw6Opg1NZe0gadDAAAEvUlEQVR4nO3ba3OiSBiG4UzvdDcip8YDiAdQZAIxExP//4/btzHjZH1Nze6HpVPlc1Ul0eiH9g7Q2JKHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/+gvuPYg4BqacGjCoQmHJhyacF+hSTI5LFd7uV8tD5PE9WDEF2gSHNbaGyklpVRq5Omfh8D1kBw3qaZ6pCiGVFrr/oYc6SZ3OyinTZIpdZCeevnhNyY1jf/jRXm0vejG6S7kssnObhmeNxMbcTSiEuZIt2aeZ7eancNxOWzy7NFrn3cnI/p9pbTfcmFO3ZxaeVN3A3PWJNrS5lAEmb3d5wgvt7KgoMe2kauhuWoSPdK2QHvIwt5ZpPTtQF/p+S7tVbQNPbqK4qhJRluJ17VGZB3di2yPF/o62AxdJkzbUZRt5mZwjpo0lOTY3wrtFGMPHq/vP5N+JxJHiuLomOKmycyTXinOUewLX1IYSTmW7/cpiSjpOTMno3PSJNA049TnQ4gIae8J6cVrSkWbSNdvJvRITbOPdnJO66RJo1QzM3RjaY8YMhLVVmR+JraViGhzEZn9vZnZp7kYnosmCy31+UR180oH1a4QWWyiODJxJhqajaPTpn80oee5OM130WSlVL3pZ11hJO0daiLWITUJ12KiaM+Spn9ssamVKhyMz0GTVNsDrOi6/o5fiVKLdmVis2qFLkXl27OV/rhCh1mdDj9AB01qmoftnz+Z2ir5+Cjk08JP49RfPElxHNvdpZvao2vhyVE9/AAdNHmkOfZ8ihpK2l4m4y4fJ7ryKp2M8248oe1D7vrHDc3Z++EHOHwTmojlr9tRISciHB/beZ3v87puj+OdmMiV+fUE6WI6Hr5J6amnaFEuzptK6av8GAfrKmzDah3Ex/zR798Iik1e5tGT8srBRzh8k7lSLf1ID9NlWNF5yHLcBuugLd6KNl0H87E9N0m7p+Zgj66tUvPBRzh8k2cl/fNZRzLbxut2kczXaWFXIEdFsG6TfH6KH2fnPSb3pXoefITDN3lVanpZBTDhytd12o6kNWrTg/ZPu8vKYzRV6nXwEQ7fRErvkiSLIpNWeViovokqdnmVmii6LBJE3u8D8mCcNEmqYzhbnqT2/TiOvX37Js/e6q1Hv4l9LX8+H8IyT++mCbaTK1fHkzccTz7OO8Hveafp550mWM/vct6Zn085cH7ywe3z2JTOY9O7PY/F+50b9vS++PyiP3tfPLm398WiHv15/aTs109Wd7N+gnW2G4p/uR6b3c96rMiv1u2bT9btgztat+8/3zmY989xbn6+I+7t8x18DngLPi++YYrrChhcf3IDrlO6IdqOpCpSXM/2D/11j234yXWPwy+bXOD6WO5rXkc9vdvrqAWut78N/5dx08f/3zF/fvr/7is0+WrQhEMTDk04NOHQhHv4DtcevsE1NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMTDk04NOHQhEMT7m/cNifkUwM0UQAAAABJRU5ErkJggg==" alt="amazon"  /> 
        <ArrowDropDownOutlinedIcon className="arrow"/>
            <div className="header__nav">
                <div className="header__option">
                        <span className="header__optionLineOne">Hello, Sign in</span>
                        <span className="header__optionLineTwo">Account & Lists</span>
                </div>
                <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo"> & Order</span>
                </div>
            </div>
            <Link to="Checkout">
            <div className="Cart">
                <AddShoppingCartOutlinedIcon /> 
                <span className="header__optionLineTwo header__Bastketcart">{cart?.length}</span>
            </div>
            </Link> 
            
        </div> 
    );
    
};

export default Header
