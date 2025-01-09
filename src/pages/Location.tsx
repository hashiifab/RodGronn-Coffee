import { MapPin, Clock, Phone } from "lucide-react";
import { FaMapPin } from "react-icons/fa";

const Location = () => {
  return (
    <div className="min-h-screen bg-coffee-dark pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-coffee-cream mb-12 text-center flex items-center justify-center animate-fade-down">
            <FaMapPin className="mr-3 w-6 h-6 text-coffee-accent" />{" "}
            {/* Icon dengan margin kanan */}
            Visit Us
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 animate-fade-up">
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-coffee-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-cream mb-2">
                      Address
                    </h3>
                    <p className="text-foreground/70">
                      Jl. Adityawarman No.3 Basement, Kepanjen, Kec. Jombang,
                      <br />
                      Kabupaten Jombang, Jawa Timur 61419
                    </p>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-coffee-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-cream mb-2">
                      Operational Hours
                    </h3>
                    <p className="text-foreground/70">
                      MON-THURS: 10.00 - 22.00 WIB
                      <br />
                      FRI-SUN: 10.00 - 23.00 WIB
                    </p>
                  </div>
                </div>

                {/* Contact Number */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-coffee-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-cream mb-2">
                      Contact
                    </h3>
                    <p className="text-foreground/70">
                      Phone: ‪+62 896‑4764‑3221
                    </p>
                  </div>
                </div>

                {/* Find Us Online */}
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 text-coffee-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-cream mb-2">
                      Find Us Online
                    </h3>
                    <p className="text-foreground/70">
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/rodgronn/?hl=en"
                        target="_blank"
                        className="text-coffee-accent"
                      >
                        rodgronn
                      </a>
                      <br />
                      Tokopedia:{" "}
                      <a
                        href="https://www.tokopedia.com/rodgronn"
                        target="_blank"
                        className="text-coffee-accent"
                      >
                        rodgronn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card overflow-hidden animate-fade-up h-[400px]">
              {/* Map */}
              <div className="w-full h-full bg-coffee-medium flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909.78883135975!2d112.16812185869139!3d-7.586470400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e786bac5a522bab:0xab996db546d58936!2sRodgronn%20Coffee%20Shop!5e0!3m2!1sid!2sid!4v1736132899259!5m2!1sid!2sid"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image below the map */}
      <div className="w-full flex justify-center mt-8 overflow-hidden">
        <img
          src="/coffes.svg"
          alt="coffee"
          className=" h-auto object-cover opacity-50"
        />
      </div>
    </div>
  );
};

export default Location;
