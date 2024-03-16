

const Want_cook = () => {
    return (
        <div>
          <h3 className="text-2xl font-bold items-center">Want to cook: </h3>  
          <div className="overflow-x-auto bg-slate-300">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
       {/* row 1 */}
       <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
    </thead>
   
  </table>
</div>
        </div>
    );
};

export default Want_cook;