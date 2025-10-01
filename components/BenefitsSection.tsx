import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";

interface BenefitsSectionProps {
  onGetStarted: () => void;
}

export function BenefitsSection({ onGetStarted }: BenefitsSectionProps) {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const rippleEffects = [
    { 
      title: "Vrijer denken", 
      description: "Leer nieuwe perspectieven kennen",
      back: "Door te spelen breek je uit vaste denkpatronen. Je kijkt met frisse ogen naar uitdagingen en vindt creatieve oplossingen.",
      frontImg: "/images/4.png",
      backImg: "/images/Opdracht.png",
      fallback: "from-blue-400 to-purple-500"
    },
    { 
      title: "Lichter leven", 
      description: "In werk en privé",
      back: "Spel brengt speelsheid in je werk. Taken voelen minder zwaar aan en je vindt meer vreugde in wat je doet.",
      frontImg: "/images/5.png",
      backImg: "/images/Opdracht (2).png",
      fallback: "from-orange-400 to-red-500"
    },
    { 
      title: "Meer genieten", 
      description: "Van grote en kleine dingen",
      back: "Samen spelen schept verbinding. Het doorbreekt barrières en zorgt voor meer openheid en vertrouwen met anderen.",
      frontImg: "/images/6.png",
      backImg: "/images/Opdracht (3).png",
      fallback: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .flip-card {
            perspective: 1000px;
            width: 200px;
            height: 150px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.7s;
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 10px 25px -3px rgb(0 0 0 / 0.2), 0 4px 6px -2px rgb(0 0 0 / 0.1);
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
          .flip-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `
      }} />
      <div className="container max-w-6xl mx-auto px-6">
        {/* Wat is het eigenlijk sectie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="mb-8">
            <Image 
              src="/images/Logo%20alleen%20tekst.png" 
              alt="Spelen met de Bedoeling"
              width={480}
              height={140}
              className="h-16 sm:h-20 w-auto mx-auto"
            />
          </h2>
          
          <div className="space-y-4 text-lg text-foreground font-poppins leading-relaxed">
            <p>
              Spelen met de bedoeling is een speelse manier om naar jezelf en wereld te kijken.
            </p>
            <p>
              Niet zweverig of kinderachtig. Wel nieuwsgierig, licht en opgewekt.
            </p>
            <p>
              Je leven, je werk, je team, je organisatie worden plezieriger, opgwekt en vrijer.
            </p>
            <p>
              Als je leert spelen met de bedoeling, leer je hoe je kleine momenten van spel kunt toelaten in je dag. Thuis, op je werk, in gesprekken of gewoon in je eigen hoofd.
            </p>
          </div>
        </motion.div>

        {/* Ripple effect section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl text-foreground mb-4 font-poppins">
              Ik zou er <span className="font-amatic text-3xl font-bold text-primary">NIET</span> aan beginnen...
            </h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            {rippleEffects.map((card, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    {imageErrors[`front-${index}`] ? (
                      <div className={`w-full h-full bg-gradient-to-br ${card.fallback} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{card.title}</span>
                      </div>
                    ) : (
                      <img 
                        src={card.frontImg} 
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(`front-${index}`)}
                      />
                    )}
                  </div>
                  <div className="flip-card-back">
                    {imageErrors[`back-${index}`] ? (
                      <div className={`w-full h-full bg-gradient-to-br ${card.fallback} flex items-center justify-center p-4`}>
                        <span className="text-white text-sm text-center">{card.back}</span>
                      </div>
                    ) : (
                      <img 
                        src={card.backImg} 
                        alt={`${card.title} - achterkant`}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(`back-${index}`)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
