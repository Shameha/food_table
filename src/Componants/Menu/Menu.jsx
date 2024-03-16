import PropTypes from 'prop-types';
import { LuTimer } from "react-icons/lu";
import { BsFire } from "react-icons/bs";

const Menu = ({menu ,wantCook}) => {
    const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=menu
    
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="p-5 rounded-3xl" src={recipe_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{short_description}</p>
    <p>Ingredients:{ingredients.length}</p>
    <p>
        {
            ingredients.map((ing,idx) =><span className='flex items-center' key={idx}><a href="">{ing}</a></span> )
        }
    </p>
    <div className='flex gap-5'>
        <div className='flex items-center'>
        <LuTimer />
        <p>{preparing_time}</p>
        </div>
        <div className='flex items-center'>
        <BsFire />
        <p>{calories}</p>
        </div>
    </div>
    <div className="card-actions justify-start">
    <button onClick={()=>wantCook(menu)} className="btn btn-success text-black rounded-full">Want to Cook</button>
    </div>
  </div>
</div>            
        </div>
    );
};

Menu.propTypes ={
    menu:PropTypes.object.isRequired,
    wantCook:PropTypes.func
}


export default Menu;