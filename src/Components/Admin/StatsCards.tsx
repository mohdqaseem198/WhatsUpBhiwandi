const StatsCards = ({analytics}) => {

  console.log('stats analytics', analytics);

  const Total = analytics?.reduce((acc, curr) => acc + curr.views , 0)
  const Today = analytics?.filter((single) => single?.date == new Date().toISOString().split('T')[0])[0].views;
  
  const maxItem = analytics?.reduce((acc, curr) => {
    return curr.views > acc.views ? curr : acc;
  }, analytics[0]);

  const formattedDate = new Date(maxItem?.date)?.toLocaleDateString("en-GB", {
    day : 'numeric',
    month : 'short'
  });


  return (
    <div className="grid grid-cols-3 gap-4 mb-6">

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Total Views</p>
        <h3 className="text-2xl font-semibold">{Total}</h3>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Views Today</p>
        <h3 className="text-2xl font-semibold">{Today}</h3>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Best Day</p>
        <h3 className="text-2xl font-semibold">{formattedDate}</h3>
      </div>

    </div>
  );
};

export default StatsCards;
