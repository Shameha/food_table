import { FaRegCircleUser } from "react-icons/fa6";

const Nav = () => {
    return (
        <div className="top-0 bg-white z-2 ">
            <div className="container flex justify-between items-center p-2">
                <h1 className="text-2xl font-extrabold">Recipe Calories</h1>
                <div className=" flex justify-center items-center gap-12">
                    <p>Home</p>
                    <p>Recipes</p>
                    <p>About</p>
                    <p>Search</p>
                </div>
                <div className=" flex gap-3">
                  <input className=" bg-[#f2f3f5] border-none outline-none px-3 py-1 rounded-[30px] w-full"  type="text"  placeholder="search" />
                  <div className="py-5 bg-[#0BE58A] p-5 rounded-full"><FaRegCircleUser /></div> 
                </div>
            </div>
        </div>
    );
};

export default Nav;