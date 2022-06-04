import {useState}   from 'react';
import img1 from 'assets/images/shirt.jpg';
import './ExampleProducts.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaHeart} from 'react-icons/fa'
import ProductQuickView from '../ProductQuickView';
const ExampleProducts = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    return (
        <>
             <div className = "wrapper">
        <div className = "container mx-auto my-10">
              <div className = "flex gap-6">
                    <div className = "item-img shadow-md border border-slate-300 h-auto">
                       <div className="">
                       <img className='w-60 h-auto' src = {img1} alt = "" />
                       </div>
                        <div className = "item-action">
                            
                                <button onClick={handleOpen} className = "view">

                                
                                <span>
                                    <AiOutlineShoppingCart  />
                                </span>
                                </button>
                            <button  className = "buy">
                                <span>
                                    <FaHeart />
                                </span>
                            </button>
                           
                        </div>
                        <div className = "item-details">
                        
                        <p className = "price">$ 188.00</p>
                        <p className = "name">clothing name here</p>
                    </div>
                    </div>
                    <div className = "item-img shadow-sm border border-slate-300 h-96">
                        <img className='w-60 h-auto' src = {img1} alt = "" />
                        <div className = "item-action">
                            <button onClick={handleOpen} className = "view">
                                <span>
                                    <AiOutlineShoppingCart />
                                </span>
                            </button>
                            <button className = "buy">
                                <span>
                                   <FaHeart />
                                </span>
                            </button>
                            
                        </div>
                        <div className = "item-details">
                        
                        <p className = "price">$ 188.00</p>
                        <p className = "name">clothing name here</p>
                    </div>
                    </div>
                    <div className = "item-img shadow-sm border border-slate-300 h-96">
                        <img className='w-60 h-auto' src = {img1} alt = "" />
                        <div className = "item-action">
                            <button onClick={handleOpen} className = "view">
                                <span>
                                    <AiOutlineShoppingCart />
                                </span>
                            </button>
                            <button className = "buy">
                                <span>
                                    <FaHeart />
                                </span>
                            </button>
                          
                        </div>
                        <div className = "item-details">
                        
                        <p className = "price">$ 188.00</p>
                        <p className = "name">clothing name here</p>
                    </div>
                    </div>
                    <div className = "item-img shadow-sm border border-slate-300 h-96">
                        <img className='w-60 h-auto' src = {img1} alt = "" />
                        <div className = "item-action">
                            <button onClick={handleOpen} className = "view">
                                <span>
                                    <AiOutlineShoppingCart />
                                </span>
                            </button>
                            <button className = "buy">
                                <span>
                                   <FaHeart />
                                </span>
                            </button>
                            
                        </div>
                        <div className = "item-details">
                        
                        <p className = "price">$ 188.00</p>
                        <p className = "name">clothing name here</p>
                    </div>
                    </div>
                    <div className = "item-img shadow-sm border border-slate-300 h-96">
                        <img className='w-60 h-auto' src = {img1} alt = "" />
                        <div className = "item-action">
                            <button onClick={handleOpen} className = "view">
                                <span>
                                    <AiOutlineShoppingCart />
                                </span>
                            </button>
                            <button className = "buy">
                                <span>
                                   <FaHeart />
                                </span>
                            </button>
                            
                        </div>
                        <div className = "item-details">
                        
                        <p className = "price">$ 188.00</p>
                        <p className = "name">clothing name here</p>
                    </div>
                    </div>

                   
                </div>
                </div>
      
    </div>
    <ProductQuickView open={open} handleClose={handleClose} />
        </>
    );
};

export default ExampleProducts;