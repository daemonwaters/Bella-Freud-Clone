import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import RowSpan from '../media/rowspan.jpeg';
import instaPic1 from '../media/insta1.jpeg';
import instaPic2 from '../media/insta2.jpeg';
import instaPic3 from '../media/insta3.jpeg';
import instaPic4 from '../media/insta4.jpeg';
import instaPic5 from '../media/insta5.jpeg';
import instaPic6 from '../media/insta6.jpeg';

function Instagram() {
    return (
        <div className="insta">
            <div className="insta-head">
                <h2>instagram</h2>
                <span>
                    <FaInstagram/>
                    @bella-freud
                </span>
            </div>
            <div className="insta-container">
                <div><img src={RowSpan} alt="instapic1"/></div>
                <div><img src={instaPic1} alt="instapic2"/></div>
                <div><img src={instaPic2} alt="instapic3"/></div>
                <div><img src={instaPic3} alt="instapic4"/></div>
                <div><img src={instaPic4} alt="instapic5"/></div>
                <div><img src={instaPic5} alt="instapic6"/></div>
                <div><img src={instaPic6} alt="instapic7"/></div>
            </div>
        </div>
    )
}

export default Instagram
