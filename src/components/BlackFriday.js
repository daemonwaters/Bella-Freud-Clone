import React from 'react'
import FridayVid from '../media/blackFridayVid.mp4'
import Button from '../components/Button'

function BlackFriday() {
    return (
        <div className="friday-sec">
            <video autoPlay loop muted src={FridayVid}></video>
            <div className="hero-content">
                <h2>
                    Black friday
                </h2>
                <Button cls="btn-hero">
                    unlock to shop
                </Button>
            </div>
        </div>
    )
}

export default BlackFriday
