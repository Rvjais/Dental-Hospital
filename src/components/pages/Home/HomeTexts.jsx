import React from "react";

const HomeTexts = () => {
  return (
    <>
      {/* Assuming this component is part of a hero section with a dark background */}
      <div className="main text-center text-primary bg-secondary py-16 px-4">
        <div className="texts max-w-4xl mx-auto">
          <h1 className="large text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Smile Bright, Live Confident – Your Dental Care Starts Here
          </h1>
          <p className="small text-lg md:text-xl text-gray-300 mb-8">
            Your Perfect Smile Starts Here in Hyderabad
          </p>
          <div className="buttons flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-secondary font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Book Appointment
            </button>
            <button className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-secondary transition-all duration-300">
              View Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTexts;
