import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Mengatur scroll ke atas setiap kali lokasi berubah
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
