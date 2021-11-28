import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Hp1 from '../media/happeningPic1.png';
import Hp2 from '../media/happeningPic2.jpeg';
import Hp3 from '../media/happeningPic3.jpeg';
import Hp4 from '../media/happeningPic4.jpeg';

function Modal({modal,setModal}) {
    const [side,setSide] = useState(false);
    const [side1,setSide1] = useState(false);
    const [side2,setSide2] = useState(false);
    const [side3,setSide3] = useState(false);
    //states to show and unshow each item's content

    const handleBack = ()=>{
        setSide(false)
        setSide1(false)
        setSide2(false)
        setSide3(false)
        //used to go back to the initial modal
    }

    const handleX = ()=>{
        if(side||side1||side2||side3){
            setSide(false)
            setSide1(false)
            setSide2(false)
            setSide3(false)
        }

        setModal(false);
    }

    if(!modal) return null
    return createPortal(
        <div  className={side3? 'modal overflow':'modal'}>
            <span onClick={handleX}>X</span>
            {side || side1 || side2 || side3 ?<span onClick={handleBack} className="back-btn"><FaAngleLeft/></span>:null}
            <ul className="modal-items">
                <li>
                    black friday
                    <FaAngleRight/>
                </li>
                <li onClick={()=> setSide(true)}>
                    women
                    <FaAngleRight/>
                    <div className={side ? 'modal-item-content right':'modal-item-content'}>
                        <div className="top-sec">
                            <span>women</span>
                        </div>
                        <div className="bot-sec">
                                 <span>view ALL</span>
                                <span>knitwear</span>
                                <span>classic</span>
                                <span>T-shirt & sweatshirts</span>
                                <span>tailoring</span>
                                <span>dresses</span>
                                <span>accessories</span>
                        </div>
                    </div>
                </li>
                <li onClick={()=> setSide1(true)}>
                    men
                    <FaAngleRight/>
                    <div className={side1 ? 'modal-item-content right':'modal-item-content'}>
                        <div className="top-sec">
                            <span>men</span>
                        </div>
                        <div className="bot-sec">
                                 <span>view ALL</span>
                                <span>knitwear</span>
                                <span>classic</span>
                                <span>T-shirt & sweatshirts</span>
                                <span>track</span>
                                <span>accessories</span>
                        </div>
                    </div>
                </li>
                <li onClick={()=> setSide2(true)}>
                    home
                    <FaAngleRight/>
                    <div className={side2 ? 'modal-item-content right':'modal-item-content'}>
                        <div className="top-sec">
                            <span>home</span>
                        </div>
                        <div className="bot-sec">
                                 <span>view ALL</span>
                                <span>cancles</span>
                                <span>parfum</span>
                                <span>homeware</span>
                                <span>cushions</span>
                                <span>bella ferued x 007</span>
                        </div>
                    </div>
                </li>
                <li>
                    gifting
                    <FaAngleRight/>
                </li>
                <li onClick={()=> setSide3(true)}>
                    happening
                    <FaAngleRight/>
                    <div className={side3? 'modal-item-content right':'modal-item-content'}>
                        <div className="top-sec">
                            <span>happenings</span>
                        </div>
                        <div className="modal-item-pics">
                            <div><img src={Hp1} alt="pic1"/>
                                <h3>
                                        bella freud x 007
                                </h3>
                            </div>
                            <div><img src={Hp2} alt="pic2"/>
                                <h3>
                                        happenings
                                </h3>
                            </div>
                            <div><img src={Hp3} alt="pic3"/>
                                <h3>
                                        biography
                                </h3>
                            </div>
                            <div><img src={Hp4} alt="pic4"/>
                                <h3>
                                        films
                                </h3>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>,document.getElementById('portal'))
}

export default Modal
