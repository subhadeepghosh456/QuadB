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
    // Create a temporary div element
    const tempDiv = document.createElement("div");
    // Set the HTML content to the innerHTML property of the temporary div
    tempDiv.innerHTML = htmlContent;
    // Extract the text content from the div and return it
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

  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings");

    if (storedBookings) {
      try {
        setBookings(JSON.parse(storedBookings));
      } catch (error) {
        console.error("Error parsing bookings from local storage:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (newBooking) => {
    setBookings([...bookings, newBooking]);
  };
  console.log(bookings);

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
          // bookings={bookings}
          addBooking={addBooking}
        />
      }
    </>
  );
};

export default Details;
