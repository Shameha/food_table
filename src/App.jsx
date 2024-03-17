
import { useState } from 'react'
import './App.css'
import Banner from './Componants/Banner/Banner'
import Menus from './Componants/Menus/Menus'
import Nav from './Componants/Nav_bar/Nav'
import Our_products from './Componants/Our_products/Our_products'
import Want_cook from './Componants/Want_cook/Want_cook'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
 import Current_cookings from './Componants/Current_cookings/Current_cookings'


function App() {

  const[wanttocook,setWantCook]=useState([]);
  
const[cart,addCart] = useState([]);
  const wantCook = (menu) =>{
    const isExist = wanttocook.find((pd) => pd.recipe_id == menu.recipe_id);
    if(!isExist){
      
   setWantCook([...wanttocook,menu]);
    }
    else{
      toast("Added Already");
    }
  }


const addToCart = mark =>{
// const newAdd = [...cart,mark]
// addCart(newAdd);
const isExist = cart.find((pd) => pd.recipe_id == mark.recipe_id);
if(!isExist){
  
addCart([...cart,mark]);
}
else{
  toast("Your delicious food are cooking...");
}
}
  

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <Our_products></Our_products>
     <div className='flex gap-30 justify-between '>
      <div className='col-span-3'>

     <Menus wantCook={wantCook}></Menus>
      </div>
      <div className='col-span-3'>

     <Want_cook wanttocook={wanttocook} addToCart={addToCart} ></Want_cook>
     <Current_cookings cart={cart} ></Current_cookings>
      </div>
      <ToastContainer/>
     </div>
     
    </>
  )
}

export default App
