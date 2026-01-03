import React, { useState, useEffect } from 'react';
import honey from "../img/Premium_Honey.png";

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 29,
    hours: 21,
    minutes: 45,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value.toString().padStart(2, '0');
  };

  const countdownItems = [
    { value: formatTime(timeLeft.days), label: 'DAYS' },
    { value: formatTime(timeLeft.hours), label: 'HOURS' },
    { value: formatTime(timeLeft.minutes), label: 'MINUTES' },
    { value: formatTime(timeLeft.seconds), label: 'SECONDS' },
  ];

  return (
    <section id="deals" className="py-12 lg:py-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center bg-white rounded-2xl p-6 md:p-8 lg:p-12 xl:p-16 shadow-sm">
          {/* Left Image Section */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-full max-w-md">
              <div className="relative bg-[#FAF9F6] rounded-2xl p-6 md:p-8 lg:p-10">
                <div className="bg-transparent rounded-xl flex items-center justify-center relative overflow-visible">
                  <img
                    src={honey}
                    alt="Original Stock Honey Combo Package - Today's Hot Deal at GreenBasket | Premium Honey Products"
                    className="w-full h-auto object-contain drop-shadow-lg"
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="order-1 md:order-2">
            {/* Deal Badge */}
            <div className="mb-4 md:mb-6">
              <span className="text-green-600 text-sm md:text-base font-bold tracking-wider uppercase">
                // Todays Hot Deals
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
              <span className="block mb-1">ORIGINAL STOCK</span>
              <span className="block">HONEY COMBO PACKAGE</span>
            </h2>

            {/* Countdown Timer - Matching reference exactly */}
            <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5 mb-6 md:mb-8">
              {countdownItems.map((item, index) => (
                <div key={index} className="text-center flex-shrink-0">
                  <div className="bg-white border-2 border-gray-200 rounded-full w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 flex flex-col items-center justify-center mb-2">
                    <div className="text-xl md:text-2xl lg:text-2xl font-bold text-gray-900 leading-none">
                      {item.value}
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-lg font-bold text-sm md:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
