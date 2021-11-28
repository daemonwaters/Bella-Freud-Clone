import { useState,useEffect, useRef } from 'react';
import BlackFriday from './components/BlackFriday';
import Footer from './components/Footer';
import GiftHero from './components/GiftHero';
import Header from './components/Header';
import Instagram from './components/Instagram';
import Modal from './components/Modal';
import NewIn from './components/NewIn';
import NewSZN from './components/NewSZN';
import Products from './components/Products';
import Search from './components/Search';
import ToggleSearch from './components/ToggleSearch';
import './styles/App.css';

function App() {

  const [toggle,setToggle] = useState(false);
  const [open,setOpen] = useState(false);
  const [toggleSearch,setToggleSearch] = useState(false);
  const [modal,setModal] = useState(false);
  const gift = useRef();
  const products = useRef();
  const newin = useRef();

  const handleClick = ()=>{
    setOpen(!open);
  }
  
  window.onresize = ()=>{
    window.innerWidth < 1000 ? setToggle(true) : setToggle(false);
  }


  window.onload = ()=>{
    window.innerWidth < 1000 && setToggle(true);
  }
  
  return (
    <div className="wrapper">
      <ToggleSearch toggleSearch={toggleSearch}/>
      <Header setModal={setModal} modal={modal} toggleSearch={toggleSearch} setToggleSearch={setToggleSearch} handleClick={handleClick} toggle={toggle}/>
      <Search setOpen={setOpen} open={open}/>
      <Modal setModal={setModal} modal={modal}/>
      <BlackFriday/>
      <GiftHero gift={gift}/>
      <Products products={products}/>
      <NewSZN/>
      <NewIn newin={newin}/>
      <Instagram/>
      <Footer/>
    </div>
  );
}

export default App;


export function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}
