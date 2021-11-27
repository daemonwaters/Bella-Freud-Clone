import React from 'react'
import NewSznVid from '../media/newSznVid.mp4'
import Button from './Button'

function NewSZN() {
    return (
        <div className="szn">
            <video loop muted autoPlay src={NewSznVid}/>
            <div className="hero-content">
                <h3>heartbeat</h3>
                <h2>new season</h2>
                <Button cls="btn-hero">
                    shop the collection
                </Button>
            </div>
        </div>
    )
}

export default NewSZN
