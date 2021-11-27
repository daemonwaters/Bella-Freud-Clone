import React, { useState } from 'react'
import Logo from '../media/mainLogo.png';
import {FaBars, FaSearch, FaUser} from 'react-icons/fa'
import {GiShoppingBag as ShopLogo} from 'react-icons/gi';
import WomenDropDown from '../media/womenNavPic.jpeg';
import MenDropDown from '../media/menNavPic.jpeg';
import HomeDropDown from '../media/homeNavPic.jpeg';
import Hp1 from '../media/happeningPic1.png';
import Hp2 from '../media/happeningPic2.jpeg';
import Hp3 from '../media/happeningPic3.jpeg';
import Hp4 from '../media/happeningPic4.jpeg';


function Header({toggle,handleClick,setToggleSearch,toggleSearch,modal,setModal}) {
    const[on1,setOn1] = useState(false)
    const[on2,setOn2] = useState(false)
    const[on3,setOn3] = useState(false)
    const[on4,setOn4] = useState(false)

    return (
        <header className={toggle ? 'p-y' : null}>
            <nav className="left">
                {toggle ? <div className="toggle-on">
                    <FaBars onClick={()=> setModal(!modal)}/>
                    <FaSearch onClick={()=> setToggleSearch(!toggleSearch)}/>
                </div> : <ul>
                    <li>black friday
                    </li>
                    <li onClick={()=>{
                        setOn2(false)
                        setOn3(false)
                        setOn4(false)
                        setOn1(!on1)
                    }}>women
                        <div className={on1? 'drop-content on':'drop-content'}>
                            <div className="links">
                                <span>view ALL</span>
                                <span>knitwear</span>
                                <span>classic</span>
                                <span>T-shirt & sweatshirts</span>
                                <span>tailoring</span>
                                <span>dresses</span>
                                <span>accessories</span>
                            </div>
                            <div className="drop-pic">
                                <img src={WomenDropDown} alt="women"/>
                                <div className="drop-pic-content">
                                    <p>
                                        New collection
                                    </p>
                                    <h2>
                                        heartbeat
                                    </h2>
                                    <button>
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li onClick={()=>{
                        setOn1(false)
                        setOn3(false)
                        setOn4(false)
                        setOn2(!on2);
                    }}>men
                    <div className={on2 ? 'drop-content on':'drop-content'}>
                            <div className="links">
                                <span>view ALL</span>
                                <span>knitwear</span>
                                <span>classic</span>
                                <span>T-shirt & sweatshirts</span>
                                <span>track</span>
                                <span>accessories</span>
                            </div>
                            <div className="drop-pic">
                                <img src={MenDropDown} alt="men"/>
                                <div className="drop-pic-content">
                                    <p>
                                        discover more
                                    </p>
                                    <h2>
                                        men collection
                                    </h2>
                                    <button>
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li onClick={()=>{
                        setOn1(false)
                        setOn2(false)
                        setOn4(false)
                        setOn3(!on3);
                    }}>home
                    <div className={on3 ? 'drop-content on':'drop-content'}>
                            <div className="links">
                                <span>view ALL</span>
                                <span>Candles</span>
                                <span>Parfum</span>
                                <span>Homeware</span>
                                <span>Cushions</span>
                                <span>Bella Freud x 007</span>
                            </div>
                            <div className="drop-pic">
                                <img src={HomeDropDown} alt="home"/>
                                <div className="drop-pic-content">
                                    <p>
                                        discover more
                                    </p>
                                    <h2>
                                        classic candle collection
                                    </h2>
                                    <button>
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>gifting</li>
                    <li onClick={()=>{
                        setOn1(false)
                        setOn2(false)
                        setOn3(false)
                        setOn4(!on4);
                    }}>happening
                        <div className={on4 ? 'drop-content on':'drop-content'} id="height">
                            <div className="happening-pics">
                                <div><img src={Hp1} alt="bella"/>
                                    <h3>
                                    Bella Freud x 007
                                    </h3>
                                </div>
                                <div><img src={Hp2} alt="happening"/>
                                <h3>
                                        happening
                                </h3>
                                </div>
                                <div><img src={Hp3} alt="bio"/>
                                <h3>
                                      biography  
                                </h3>
                                </div>
                                <div><img src={Hp4} alt="films"/>
                                <h3>
                                      films  
                                </h3>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>}
            </nav>
            <div className="logo">
                <img src={Logo} alt="main-logo"/>
            </div>
            <nav className="right">
                <ul className="toggle-on-ul">
                    {toggle ? <FaUser style={{
                        cursor:'pointer'
                    }}/>:
                    <>
                    <li onClick={handleClick}>
                        <FaSearch/>
                        search
                    </li>
                    <li>
                        wishlist
                    </li>
                    <li>login</li>
                    </>
                    }
                    <li>
                        <ShopLogo/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
