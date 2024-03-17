import PropTypes from 'prop-types';
import Mark from '../Mark/Mark';

const Want_cook = ({wanttocook,addToCart}) => {
    return (
        <div>
          <h3 className="text-2xl font-bold items-center">Want to cook:{wanttocook.length} </h3>  
          <div className='flex gap-10'>
                <p>name</p>
                <p>time</p>
                <p>calories</p>
             </div>     
       
       {
        wanttocook.map(mark => <Mark key={mark.id}
           
            mark={mark}
            addToCart={addToCart}
            ></Mark>)
       }
        </div>
    );
};
Want_cook.propTypes ={
    wanttocook:PropTypes.array,
    addToCart:PropTypes.array

  
}

export default Want_cook;