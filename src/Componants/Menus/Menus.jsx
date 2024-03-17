import { useEffect, useState } from "react";
import Menu from "../Menu/Menu";
import PropTypes from 'prop-types';

const Menus = ({wantCook}) => {
    const[menus,setMenus] = useState([]);

    useEffect( () =>{
        fetch('recipi.json')
        .then(res=> res.json())
        .then(data=> setMenus(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-10">
            {
                menus.map(menu =><Menu key={menu.id}
                    wantCook={wantCook}
                    
                     menu={menu}></Menu> )
            }
                    
                   
        </div>
    );
};
Menus.propTypes ={
    wantCook:PropTypes.func,
    addToCart:PropTypes.func
}

export default Menus;