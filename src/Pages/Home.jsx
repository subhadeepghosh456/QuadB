import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const response = await data.json();
    setData(response);
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <h1>Home</h1>
      <div className="home-Container">
        {data?.map((item) => {
          return <Card key={item.show.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
