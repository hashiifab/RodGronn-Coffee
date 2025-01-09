import { Coffee, Award, Users } from "lucide-react";
import { FaBookOpen } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-coffee-dark pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-coffee-cream mb-12 text-center flex items-center justify-center animate-fade-down">
            <FaBookOpen className="mr-3 w-6 h-6 text-coffee-accent" />{" "}
            {/* Icon dengan margin kanan */}
            Our Story
          </h1>

          {/* Bagian Cerita Kami */}
          <div className="glass-card p-8 mb-12 animate-fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  RodGronn CoffeeLab lahir dari kecintaan pada kopi yang luar
                  biasa dan keinginan untuk menghadirkan pengalaman unik bagi
                  setiap penikmat kopi. Kami berkomitmen untuk menyajikan rasa
                  terbaik melalui perpaduan bahan berkualitas dan perhatian
                  penuh pada setiap detail.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Kami percaya bahwa setiap cangkir kopi memiliki cerita. Dengan
                  sentuhan kreativitas dan dedikasi, kami ingin memberikan momen
                  istimewa yang bisa dinikmati siapa saja, kapan saja.
                </p>
              </div>

              {/* SVG Gambar untuk "Want to Know More About Us?" */}
              <div className="flex justify-center items-center">
                <img src="/about.svg" alt="Our Caffee Lab" />
              </div>
            </div>
            <a
              className="hover:underline"
              href="https://www.instagram.com/rodgronn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-xl text-center text-coffee-cream mt-6">
                Want to know more about us?
              </p>
            </a>
          </div>

          {/* Ikon dan Fitur */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "Craft Coffee",
                description:
                  "Every cup is expertly roasted and brewed to perfection.",
              },
              {
                icon: Award,
                title: "Top Quality",
                description:
                  "We use only the finest beans to provide an exceptional experience.",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "We are committed to building lasting relationships through coffee culture.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-coffee-accent" />
                <h3 className="text-2xl font-semibold mb-3 text-coffee-cream">
                  {feature.title}
                </h3>
                <p className="text-lg text-foreground/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
