import React, { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-coffee-dark pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12 justify-center animate-fade-down">
          <ImageIcon className="w-6 h-6 text-coffee-accent" />
          <h1 className="text-4xl font-bold text-coffee-cream">Our Gallery</h1>
        </div>

        {/* Loading Screen */}
        {isLoading && (
          <div className="flex justify-center items-center min-h-[800px]">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-coffee-cream border-coffee-accent rounded-full animate-spin mb-4"></div>
              <p className="text-lg font-medium text-coffee-cream">
                Loading gallery, please wait...
              </p>
            </div>
          </div>
        )}

        {/* Instagram Embed */}
        <div className={`flex justify-center ${isLoading ? "hidden" : ""}`}>
          <iframe
            src="https://www.instagram.com/rodgronn/embed"
            width="100%"
            height="800"
            frameBorder="0"
            scrolling="yes"
            allow="encrypted-media"
            title="Instagram Feed"
            onLoad={() => setIsLoading(false)} // Set loading state to false after iframe loads
            className="rounded-lg shadow-lg border border-coffee-accent overflow-auto md:w-[100%] md:h-[800px] h-[400px] overflow-y-auto"
          ></iframe>
        </div>

        {/* Link to Instagram */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/rodgronn/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coffee-accent font-semibold text-lg underline hover:text-coffee-cream"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
