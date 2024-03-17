
import PropTypes from 'prop-types'
const Cooking = ({cooking}) => {
    const{recipe_name,preparing_time,calories}=cooking;
    return (
        // <div className='flex gap-10'>
         
        //            <p>{recipe_name}</p>
        //            <p>{preparing_time}</p>
        //            <p>{calories}</p>
                 
               
             
        //    </div>
        <div className=" bg-slate-100 ">
             

        <table className="table ">
          {/* head */}
          <thead>
           
             {/* row 1 */}
             <tr>
               {/* <th>{recipe_id}</th> */}
              <td>{recipe_name}</td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
              
            </tr>
          </thead>
         
        </table>
      </div>   
    );
};
Cooking.propTypes = {
    cooking:PropTypes.object
    }
export default Cooking;