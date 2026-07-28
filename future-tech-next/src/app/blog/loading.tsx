export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col h-full overflow-hidden animate-pulse">
            {/* Image Skeleton */}
            <div className="h-56 bg-gray-200 w-full"></div>
            
            {/* Content Skeleton */}
            <div className="p-8 flex-1 flex flex-col space-y-4">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-8 bg-gray-300 rounded w-full"></div>
              <div className="h-8 bg-gray-300 rounded w-4/5"></div>
              
              <div className="space-y-2 pt-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              
              {/* Button Skeleton */}
              <div className="h-10 bg-blue-100 rounded-xl w-32 mt-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
