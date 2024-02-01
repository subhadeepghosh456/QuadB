import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <img src={data?.show?.image?.medium} alt={data?.show?.name} />
      <h3>{data?.show?.name}</h3>
      <h6>Languege:{data?.show?.language}</h6>
      <Link to={`/${data?.show?.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Card;
