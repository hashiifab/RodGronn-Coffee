import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";

const Menu = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-coffee-dark to-coffee-accent/50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-coffee-cream mb-8 flex items-center justify-center">
          <FaUtensils className="mr-3 w-6 h-6 text-coffee-accent" />{" "}
          {/* Icon dengan margin kanan */}
          Our Menu
        </h1>

        {/* More Menu Link */}
        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/rodgronn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-accent font-semibold text-lg underline hover:text-coffee-cream"
          >
            More Menu
          </a>
        </div>

        {/* Loading Screen */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-[800px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-coffee-cream border-coffee-accent rounded-full animate-spin mb-4"></div>
              <p className="text-lg font-medium text-coffee-cream">
                Loading menu, please wait...
              </p>
            </div>
          </div>
        )}

        {/* Embed Flipbook */}
        <div
          className={`flex justify-center ${isLoading ? "hidden" : ""}`}
          style={{ height: "100vh" }}
        >
          <iframe
            src="https://heyzine.com/flip-book/ac01aacf95.html"
            width="100%" // Lebar diperkecil menjadi 80% dari container
            height="75%" // Tinggi diperkecil menjadi 80% dari container
            frameBorder="0"
            title="Menu Flipbook"
            onLoad={() => setIsLoading(false)}
            className="transform sm:scale-90 sm:w-[80%] sm:h-[85%]" // Skala iframe diperkecil menjadi 90%
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Menu;
