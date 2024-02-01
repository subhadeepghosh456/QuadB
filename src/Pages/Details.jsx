import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../Components/Form";

const Details = () => {
  const [obj, setObj] = useState({});
  const [show, setShow] = useState(false);
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();
  console.log(id);

  const fetchDetails = async () => {
    const data = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const json = await data.json();
    console.log(json);
    setObj(json);
  };

  function HtmlToPlainText(htmlContent) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    return tempDiv.textContent || tempDiv.innerText || "";
  }

  const plainTextContent = HtmlToPlainText(obj?.summary);

  const handleClick = () => {
    setShow(true);
  };

  const handleCross = () => {
    setShow(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <h1>Details</h1>
      <div className="details_page">
        <div className="imgae_container">
          <img src={obj?.image?.original} alt="" />
        </div>
        <div className="info-container">
          <h1 className="info-name">{obj?.name}</h1>
          <p>Language: {obj?.language}</p>
          <p>Premiered:{obj?.premiered}</p>
          <p>Average Run Time:{obj?.averageRuntime} Min</p>
          <p>Ended:{obj?.ended}</p>
          <p>Genres:{obj?.genres?.join(",")}</p>
          <p>Summary:{plainTextContent}</p>
          <p>Rating:{obj?.rating?.average}</p>
          <p>Type:{obj?.type}</p>
          <button onClick={handleClick}>Book The Show</button>
        </div>
      </div>
      {
        <Form
          name={obj?.name}
          language={obj?.language}
          show={show}
          handleCross={handleCross}
          setBookings={setBookings}
        />
      }
    </>
  );
};

export default Details;
