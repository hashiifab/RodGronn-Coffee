import { FaInstagram, FaWhatsapp, FaStore } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-coffee-medium/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" width={35} alt="Logo" />
              <span className="text-xl font-bold text-coffee-cream">
                RodGronn
              </span>
            </Link>
            <p className="text-sm text-foreground/70">
              "Kami percaya, kopi bukan hanya tentang rasa, tapi juga tentang
              cerita di balik setiap cangkirnya."
            </p>
          </div>

          {/* Quick Links: Menggunakan Grid dan 2 Kolom */}
          <div className="space-y-4">
            <h3 className="text-coffee-cream font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-1">
              {["Menu", "About", "Gallery", "Location", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="text-foreground/70 hover:text-coffee-accent transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-coffee-cream font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>MON-THURS: 10.00 - 22.00 WIB</li>
              <li>FRI-SUN: 10.00 - 23.00 WIB</li>
            </ul>
          </div>

          <div>
            <h3 className="text-coffee-cream font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/rodgronn",
                },
                { icon: FaWhatsapp, href: "https://wa.me/6281234567890" },
                { icon: FaStore, href: "https://www.tokopedia.com/rodgronn" },
                { icon: SiThreads, href: "https://www.threads.com/@rodgronn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-foreground/70 hover:text-coffee-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-coffee-accent/20 mt-8 pt-8 text-center text-sm text-foreground/50">
          © {new Date().getFullYear()} RodGronn CoffeeLab. All rights reserved.
          Developed by{" "}
          <a
            href="https://www.instagram.com/temankami"
            className="text-coffee-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teman Kami
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
