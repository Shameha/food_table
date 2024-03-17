
import PropTypes from 'prop-types'
const Mark = ({mark,addToCart}) => {
    const{recipe_name,preparing_time,calories}=mark;
    return (
        <div>
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
        <td><button onClick={() => addToCart(mark)} 
        className="btn btn-accent rounded-full p-1 m-1">Prepering</button></td>
      </tr>
    </thead>
   
  </table>
</div>            
        </div>
    );
};
Mark.propTypes = {
mark:PropTypes.object,
addToCart:PropTypes.object,
cooking:PropTypes.object
}
export default Mark;