import {
  Coffee,
  Clock,
  MapPin,
  Menu as MenuIcon,
  Users,
  Image,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Menambahkan style slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  // Pengaturan slider untuk ukuran layar kecil (≤ 425px)
  const settings = {
    dots: true, // Untuk menampilkan pagination dots
    infinite: true, // Loop tak terbatas
    speed: 500, // Kecepatan transisi
    slidesToShow: 1, // Menampilkan 1 slide per waktu
    slidesToScroll: 1, // Gulir 1 slide per transisi
    arrows: true, // Menampilkan tombol panah untuk navigasi
  };

  return (
    <div className="min-h-screen bg-coffee-dark font-hanken-grotesk">
      {/* Hero Section */}
      <section className="min-h-[80vh] sm:min-h-screen flex items-center justify-start relative overflow-hidden">
        <div className="absolute inset-0 bg-coffee-dark"></div>
        <div className="absolute inset-0 right-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-80"></div>
        <div className="absolute inset-0 left-0 bg-gradient-to-r from-coffee-dark/90 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-start">
          <div className="max-w-2xl text-left animate-fade-up">
            <h1 className="text-6xl sm:text-8xl font-extrabold mb-4 sm:mb-8 leading-tight tracking-tight">
              RodGronn <span className="text-coffee-accent">Coffee</span>Lab
              <span className="inline-block w-3 h-3 ml-2 bg-coffee-accent"></span>
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-10 text-foreground/90 leading-relaxed px-2 font-semibold">
              Nikmati pengalaman kopi terbaik yang kami hadirkan, dengan cita
              rasa yang tak tertandingi.
            </p>
            <a
              href="https://wa.me/6289647643221"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-center w-48 rounded-2xl h-12 relative text-black text-xl font-semibold group"
                type="button"
              >
                <div className="bg-coffee-medium rounded-xl h-10 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="20px"
                    width="20px"
                    className="transform rotate-180"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#ffffff"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#ffffff"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-6 text-lg">Reserve Now</p>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-32 bg-white relative">
        <div className="container mx-auto px-6 relative z-10">
          {/* Menggunakan Slider hanya pada layar ≤ 425px */}
          <div className="hidden md:block">
            {/* Menampilkan fitur secara biasa */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
              {[
                {
                  icon: Coffee,
                  title: "Special Coffee Beans",
                  description:
                    "Kacang kopi pilihan, dipanggang dengan teliti untuk menghasilkan rasa yang kaya dan sempurna.",
                },
                {
                  icon: Clock,
                  title: "Freshly Roasted",
                  description:
                    "Setiap hari kami memanggang kopi dalam jumlah terbatas untuk memastikan kualitas dan kesegarannya.",
                },
                {
                  icon: MapPin,
                  title: "Ideal Location",
                  description:
                    "Terletak di pusat kota, kami menawarkan suasana yang nyaman untuk menikmati kopi dengan tenang.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <feature.icon className="w-16 h-16 mx-auto text-coffee-accent group-hover:text-coffee-dark transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-coffee-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-coffee-dark leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Menampilkan slider hanya pada layar ≤ 425px */}
          <div className="md:hidden">
            <Slider {...settings}>
              {[
                {
                  icon: Coffee,
                  title: "Special Coffee Beans",
                  description:
                    "Kacang kopi pilihan, dipanggang dengan teliti untuk menghasilkan rasa yang kaya dan sempurna.",
                },
                {
                  icon: Clock,
                  title: "Freshly Roasted",
                  description:
                    "Setiap hari kami memanggang kopi dalam jumlah terbatas untuk memastikan kualitas dan kesegarannya.",
                },
                {
                  icon: MapPin,
                  title: "Ideal Location",
                  description:
                    "Terletak di pusat kota, kami menawarkan suasana yang nyaman untuk menikmati kopi dengan tenang.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center space-y-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <feature.icon className="w-16 h-16 mx-auto text-coffee-accent group-hover:text-coffee-dark transition-colors duration-300" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-coffee-dark">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-coffee-dark leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </Slider>
            <div className="text-center absolute left-1/2 transform -translate-x-1/2 translate-y-[25px] text-black font-semibold">
              Swipe
            </div>
          </div>
        </div>
      </section>

      {/* Sections Summary */}
      <section className="py-8 sm:py-16 md:py-32 bg-coffee-dark relative">
        <div className="absolute inset-0 bg-coffee-accent/30 bg-[url('/coffee.svg')] opacity-30 bg-cover bg-center mix-blend-screen] w-full h-full"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-center mb-6 sm:mb-10 md:mb-20 text-coffee-cream">
            Discover Our World
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-8">
            {[
              {
                icon: MenuIcon,
                title: "Menu Kami",
                description:
                  "Koleksi menu kopi kami, disiapkan dengan penuh perhatian untuk memberikan pengalaman unik.",
                link: "/menu",
              },
              {
                icon: Users,
                title: "Tentang Kami",
                description:
                  "Kami berkomitmen untuk memberikan pengalaman kopi yang tak hanya sekedar minuman, tetapi juga kebersamaan.",
                link: "/about",
              },
              {
                icon: Image,
                title: "Galeri",
                description:
                  "Tenggelamkan diri Anda dalam visualisasi perjalanan kopi kami yang memukau.",
                link: "/gallery",
              },
              {
                icon: MapPin,
                title: "Lokasi",
                description:
                  "Temukan kami di lokasi yang mudah diakses, dengan suasana yang mendukung momen santai Anda.",
                link: "/location",
              },
              {
                icon: Mail,
                title: "Kontak",
                description:
                  "Kami selalu siap untuk berinteraksi dan mendengar pendapat Anda, jangan ragu untuk menghubungi kami.",
                link: "/contact",
              },
              {
                icon: Coffee,
                title: "Reservasi",
                description:
                  "Amankan tempat Anda dan nikmati kopi terbaik di tempat kami.",
                link: "/contact#reserve",
              },
            ].map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className="glass-card border border-coffee-accent bg-white p-3 sm:p-6 md:p-8 hover-lift group transition-all duration-300 flex flex-col justify-between md:min-h-[194px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Ikon dan Teks pada perangkat kecil tampil horizontal */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <section.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-coffee-dark group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold text-coffee-dark group-hover:text-coffee-accent transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>
                {/* Deskripsi hanya muncul pada ukuran layar medium dan lebih besar */}
                <p className="hidden md:block text-xs sm:text-sm md:text-base text-coffee-dark leading-relaxed">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* See More Gallery Button */}
      <div className="absolute bottom-4 right-4 z-10">
        <Link to="/gallery">
          <a
            href="#"
            className="text-coffee-secondary text-xl hover:underline group"
          >
            See More Our Gallery
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="20px"
              width="20px"
              className="transform rotate-180 inline-block ml-3 group-hover:scale-150"
            >
              <path
                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                fill="#ffffff"
              ></path>
              <path
                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Index;
