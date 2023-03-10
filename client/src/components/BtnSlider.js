import React from "react";
import "../styles/Slider.css";
import leftArrow from "../components/Slider/Icons/left-arrow.svg";
import rightArrow from "../components/Slider/Icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
