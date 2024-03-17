
import PropTypes from 'prop-types';
import Cooking from '../Cooking/Cooking';
//import Cooking from '../Cooking/Cooking';
//import Cooking from '../Cooking/Cooking';

const Current_cookings = ({cart}) => {

    return (
        <div className="py-10">
            <p className="text-2xl font-bold">Currently cooking:{cart.length}</p>
            <div className="flex gap-20">
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
            </div>
            {
                cart.map(cooking => <Cooking key={cooking.id} cooking={cooking}></Cooking>)
            }
            
            
            </div>
    );
};
Current_cookings.propTypes ={
    cart:PropTypes.array,
   addToCart :PropTypes.func
}

export default Current_cookings;