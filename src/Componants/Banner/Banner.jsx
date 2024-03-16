import image from '../../assets/image/chef2.jpg'
const Banner = () => {
    return (
      
<div className="hero min-h-screen rounded-xl" style={{backgroundImage:`url(${(image)})`}}>
  <div className="hero-overlay rounded-xl bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md ">
      <h1 className="mb-4 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      
      <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      <div className='flex gap-20'>
      <button className="btn btn-success text-black border-2 rounded-full text-xl ">Explore Now</button>
      <button className="btn btn-outline text-white border-2 rounded-full text-xl ">Our Feedback</button>
     
    </div>
  </div>
  </div>
</div>


    );
};

export default Banner;