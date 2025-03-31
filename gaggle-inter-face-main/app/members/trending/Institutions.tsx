type TrendingInstitution = {
  name: string;
  location: string;
  type: string;
};

const trendingInstitutions: TrendingInstitution[] = [
  {
    name: "Harvard University",
    location: "Cambridge, MA, USA",
    type: "University",
  },
  {
    name: "Oxford University",
    location: "Oxford, UK",
    type: "University",
  },
  {
    name: "Massachusetts Institute of Technology (MIT)",
    location: "Cambridge, MA, USA",
    type: "University",
  },
];

const getRankingSuffix = (index: number): string => {
  if (index === 0) return "1st";
  if (index === 1) return "2nd";
  if (index === 2) return "3rd";
  return `${index + 1}th`;
};

const TrendingInstitutions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="members-subtitle">🏛️ Trending Libraries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingInstitutions.map((institution, index) => {
          const ranking = getRankingSuffix(index);
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
            >
              <div className="w-full h-16 flex items-center justify-center mb-4">
                <span className="text-6xl font-serif text-primary">
                  {ranking}
                </span>
              </div>

              <h2 className="text-xl text-black font-bold mb-2">
                {institution.name}
              </h2>
              <p className="text-sm text-gray-600">{institution.location}</p>
              <p className="text-sm text-gray-600">{institution.type}</p>

              <div className="mt-auto">
                <button className="mt-4 bg-primary text-white py-2 px-4 rounded-full cursor-pointer hover:bg-primary-dark transition">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingInstitutions;
