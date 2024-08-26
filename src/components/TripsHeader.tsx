const TripsHeader = () => {
  return (
    <div className="fixed top-0 left-0 p-8 w-full container bg-slate-100">
      <h1 className="font-semibold text-2xl ">Trips</h1>
      <div className="tabs mx-auto rounded-md bg-slate-300 w-fit">
        <div className="flex items-center justify-center">
          <div className="tab bg-white rounded-md font-semibold px-4 py-1 text-indigo-800">
            Upcoming
          </div>
          <div className="tab  px-4">Past</div>
        </div>
      </div>
    </div>
  );
};

export default TripsHeader;
