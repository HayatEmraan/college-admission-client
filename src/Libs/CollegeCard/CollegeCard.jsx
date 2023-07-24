import React, { useEffect } from "react";

const CollegeCard = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://college-admission-server-ten.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-medium mt-16">
        Featured Trending Colleges -{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="relative hover:translate-y-[-3px] destination-card"
              style={{
                boxShadow: "0 0 10px rgb(63 172 97)",
                transition: "all 0.3s",
              }}
            >
              <h1 className="absolute top-[8%] left-6 text-white uppercase bg-[#2aaa8a] px-3 rounded-md">
                {item.country}
              </h1>
              <img className="w-full rounded-md" src={item.coverImage} alt="" />
              <div>
                <h3 className="absolute top-[50%] text-xl text-white font-medium py-3 left-6 card-body">
                  {item.collegeName} - <br />
                  {item.location}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollegeCard;
