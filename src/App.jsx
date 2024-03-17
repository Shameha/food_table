
import { useState } from 'react'
import './App.css'
import Banner from './Componants/Banner/Banner'
import Menus from './Componants/Menus/Menus'
import Nav from './Componants/Nav_bar/Nav'
import Our_products from './Componants/Our_products/Our_products'
import Want_cook from './Componants/Want_cook/Want_cook'

function App() {
  const[wanttocook,setWantCook]=useState([]);
  const wantCook = (menu) =>{
    const isExist = wanttocook.find((pd) => pd.recipe_id == menu.recipe_id);
    if(!isExist){
   setWantCook([...wanttocook,menu]);
    }
  }

    

  

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <Our_products></Our_products>
     <div className='flex gap-10'>
      <div className='col-span-2'>

     <Menus wantCook={wantCook}></Menus>
      </div>
      <div className='col-span-2'>

     <Want_cook wanttocook={wanttocook} ></Want_cook>
      </div>
     </div>
    </>
  )
}

export default App
