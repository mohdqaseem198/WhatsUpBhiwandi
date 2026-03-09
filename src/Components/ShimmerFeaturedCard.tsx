const ShimmerFeaturedCard = () => {
  return (
    <div className="mx-3 my-5 animate-pulse">
      <div className="bg-gray-300 h-48 rounded-md"></div>

      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default ShimmerFeaturedCard;