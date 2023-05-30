const Shimmer = () => {
   return(
    <div className="flex rounded-lg flex-wrap justify-items-center  ">
    {Array(12)
      .fill("")
      .map((a,index) => ( <div key = {index} className="bg-slate-300 w-72 h-80 p-3 m-4"></div> ))}
      </div>
   );
}

export default Shimmer;