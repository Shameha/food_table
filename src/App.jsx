
import './App.css'
import Banner from './Componants/Banner/Banner'
import Menus from './Componants/Menus/Menus'
import Nav from './Componants/Nav_bar/Nav'
import Our_products from './Componants/Our_products/Our_products'
import Want_cook from './Componants/Want_cook/Want_cook'

function App() {
  

  return (
    <>
    
     <Nav></Nav>
     <Banner></Banner>
     <Our_products></Our_products>
     <div className='flex gap-10'>
      <div className='col-span-2'>

     <Menus></Menus>
      </div>
      <div className='col-span-2'>

     <Want_cook></Want_cook>
      </div>
     </div>
    </>
  )
}

export default App
