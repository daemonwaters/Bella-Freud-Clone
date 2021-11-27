import React, { forwardRef, useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useOnScreen } from '../App'
import C1p1 from '../media/col1p1.jpeg'
import C1p2 from '../media/col1p2.jpeg'
import C2p1 from '../media/col2p1.jpeg'
import C2p2 from '../media/col2p2.jpeg'
import C3p1 from '../media/col3p1.jpeg'
import C3p2 from '../media/col3p2.jpeg'
import C4p1 from '../media/col4p1.jpeg'
import C4p2 from '../media/col4p2.jpeg'

function Products({products}) {
    const [cols,setCols] = useState(false);
    const [hover,setHover] = useState(false);
    const [hover1,setHover1] = useState(false);
    const [hover2,setHover2] = useState(false);
    const [hover3,setHover3] = useState(false);
    window.addEventListener('resize',()=>{
        window.innerWidth < 760 ? setCols(true):setCols(false);
    })

    const onScreen = useOnScreen(products,'-35px');
    const [firstTime,setFirstTime] = useState(false);

    useEffect(()=>{
        onScreen && setFirstTime(true);
    })

    return (
        <div ref={products} className={onScreen|| firstTime ? 'products up':'products'}>
            <div className="head">
                <h2>gifting</h2>
                <h2>shop now</h2>
            </div>
            <div className="grid">
                <div className="card" onMouseOut={()=>setHover(false)} onMouseOver={()=>setHover(true)}>
                    <div className="card-pic">
                        <img className={hover ? 'scale':null} src={hover ? C1p2 : C1p1}/>
                        <span>
                            <FaHeart/>
                        </span>
                    </div>
                    <div className="card-info">
                        <h3>christmas gift box</h3>
                        <p>£145.00</p>
                    </div>
                </div>
                <div className="card" onMouseOut={()=>setHover1(false)} onMouseOver={()=>setHover1(true)}>
                    <div className="card-pic">
                    <img className={hover1 ? 'scale':null} src={hover1 ? C2p2 : C2p1}/>
                       <span>
                            <FaHeart/>
                        </span>
                    </div>
                    <div className="card-info">
                        <h3>oh wow cushion</h3>
                        <p>£180.00</p>
                    </div>
                </div>
                {
                    !cols ? <>
                    
                    <div className="card" onMouseOut={()=>setHover2(false)} onMouseOver={()=>setHover2(true)}>
                    <div className="card-pic">
                    <img className={hover2 ? 'scale':null} src={hover2 ? C3p2 : C3p1}/>
                        <span>
                            <FaHeart/>
                        </span>
                        <div className={hover2? 'sizes opacity':'sizes'}>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>1970 sparkle jumper</h3>
                        <p>$310.00</p>
                    </div>
                </div>
                <div className="card" onMouseOut={()=>setHover3(false)} onMouseOver={()=>setHover3(true)}>
                    <div className="card-pic">
                    <img className={hover3 ? 'scale':null} src={hover3 ? C4p2 : C4p1}/>
                        <span>
                            <FaHeart/>
                        </span>
                    </div>
                    <div className="card-info">
                        <h3>fairytale of new york candle</h3>
                        <p>£50.00</p>
                    </div>
                </div>
                    </> : null
                }
            </div>
        </div>
    )
}

const forwardedProducts = forwardRef(Products)
export default forwardedProducts;
