import React, { forwardRef, useEffect, useState } from 'react'
import { useOnScreen } from '../App';
import desktopHero from '../media/heroDesktop.jpeg'
import mobileHero from '../media/heroMobile.jpeg'
import Button from './Button'

function GiftHero({gift}) {

    const [breakPoint,setBreakPoint] = useState(false);
    const onScreen = useOnScreen(gift,'-45px');
    const [firstTime,setFirstTime] = useState(false);

    window.addEventListener('resize',()=>{
        window.innerWidth < 750 ? setBreakPoint(true): setBreakPoint(false);
        //used to change the background image based on view width
    })

    useEffect(()=>{
        onScreen && setFirstTime(true);
        /* to prevent the animations start again when the element isn't onscreen
        basically if the user already saw the animations they're off until page reloads
        */
    })


    return (
        <div ref={gift} className={onScreen || firstTime ? 'gift-hero up':'gift-hero'}>
            <img src={breakPoint ? mobileHero : desktopHero} alt="gift"/>
            <div className="hero-content">
                <h3>new in</h3>
                <h2>christmas gifting</h2>
                <Button cls="btn-hero">
                    shop collection
                </Button>
            </div>
        </div>
    )
}

const ForwardedGiftHero = forwardRef(GiftHero)

export default ForwardedGiftHero
