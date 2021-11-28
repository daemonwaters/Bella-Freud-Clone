import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { useOnScreen } from '../App';
import N11 from '../media/new11.jpeg';
import N12 from '../media/new12.jpeg';
import N21 from '../media/new21.jpeg';
import N22 from '../media/new22.jpeg';
import N3 from '../media/new3.jpeg';
import N41 from '../media/new41.jpeg';
import N42 from '../media/new42.jpeg';

function NewIn({newin}) {

    const [cols,setCols] = useState(false);
    const [hover,setHover] = useState(false);
    const [hover1,setHover1] = useState(false);
    const [hover2,setHover2] = useState(false);
    const [hover3,setHover3] = useState(false);
    //states used to handle the the hover effect on each card

    window.addEventListener('resize',()=>{
        window.innerWidth < 760 ? setCols(true):setCols(false);
        //on small screen sizes the number of cards is reduced to only 2 card
        //so if the screen width hits that point the two extra cards will be removed
    })

    const onScreen = useOnScreen(newin,'-35px');
    const [firstTime,setFirstTime] = useState(false);

    useEffect(()=>{
        onScreen && setFirstTime(true);
    })
    return (
        <div ref={newin} className={onScreen || firstTime ? 'products up':'products'}>
             <div className="head">
                <h2>new IN</h2>
                <h2>show all new in</h2>
            </div>
            <div className="grid">
                <div className="card" onMouseOut={()=>setHover(false)} onMouseOver={()=>setHover(true)}>
                    <div className="card-pic">
                        <img className={hover ? 'scale':null} src={hover ? N12 : N11}/>
                        <span>
                            <FaHeart/>
                        </span>
                        <div className={hover? 'sizes opacity':'sizes'}>
                            <span>6</span>
                            <span>8</span>
                            <span>10</span>
                            <span>12</span>
                            <span>14</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>velvet bianca jacket</h3>
                        <p>£790.00</p>
                    </div>
                </div>
                <div className="card" onMouseOut={()=>setHover1(false)} onMouseOver={()=>setHover1(true)}>
                    <div className="card-pic">
                    <img className={hover1 ? 'scale':null} src={hover1 ? N22 : N21}/>
                       <span>
                            <FaHeart/>
                        </span>
                        <div className={hover1? 'sizes opacity':'sizes'}>
                            <span>6</span>
                            <span>8</span>
                            <span>10</span>
                            <span>12</span>
                            <span>14</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>velvet 1976 trouser</h3>
                        <p>£390.00</p>
                    </div>
                </div>
                {
                    !cols ? <>
                    
                    <div className="card" onMouseOut={()=>setHover2(false)} onMouseOver={()=>setHover2(true)}>
                    <div className="card-pic">
                    <img className={hover2 ? 'scale':null} src={N3}/>
                        <span>
                            <FaHeart/>
                        </span>
                        <div className={hover2? 'sizes opacity':'sizes'}>
                            <span>6</span>
                            <span>8</span>
                            <span>10</span>
                            <span>12</span>
                            <span>14</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>velvet bianca trouser</h3>
                        <p>$410.00</p>
                    </div>
                </div>
                <div className="card" onMouseOut={()=>setHover3(false)} onMouseOver={()=>setHover3(true)}>
                    <div className="card-pic">
                    <img className={hover3 ? 'scale':null} src={hover3 ? N42 : N41}/>
                        <span>
                            <FaHeart/>
                        </span>
                        <div className={hover3? 'sizes opacity':'sizes'}>
                            <span>XS</span>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>
                    </div>
                    <div className="card-info">
                        <h3>hello cunty unisex t-shirt</h3>
                        <p>£95.00</p>
                    </div>
                </div>
                    </> : null
                }
            </div>
        </div>
    )
}
const forwardedNewIn = forwardRef(NewIn)
export default forwardedNewIn;
