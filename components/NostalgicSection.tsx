import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, Home, ChevronDown } from "lucide-react";

interface NostalgicSectionProps {
  onContinue: () => void;
  onGetStarted: () => void;
}

export function NostalgicSection({ onContinue, onGetStarted }: NostalgicSectionProps) {
  const [hoveredMemory, setHoveredMemory] = useState<number | null>(null);

  const memories = [
    {
      icon: Home,
      title: "Je eigen wereld maken",
      description: "Kastelen bouwen van kussens, fantasieën die werkelijker waren dan de werkelijkheid",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Sparkles,
      title: "Zonder doel beginnen",
      description: "En ineens ontstond er iets moois. Zonder plan, zonder druk, gewoon uit nieuwsgierigheid",
      color: "from-blue-400 to-green-400"
    },
    {
      icon: Heart,
      title: "Alles voelde licht",
      description: "Vrij. Vrolijk. Alsof alles mogelijk was en niets te zwaar om te dragen",
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <div className="py-8 px-4 md:px-6 relative overflow-hidden px-[16px] py-[0px]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200/30 to-green-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Gecentreerde tekst sectie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl mb-8 font-poppins text-foreground">
            Weet je nog hoe het was om gewoon te <span className="font-amatic text-5xl font-bold text-primary">spelen</span>?
          </h2>
          
          <div className="space-y-4 text-lg text-foreground font-poppins leading-relaxed">
            <p>
              Dat warme gevoel wanneer je helemaal opging in het moment. 
              Wanneer tijd niet bestond en alles mogelijk was.
            </p>
            <p>
                Dat gevoel van <span className="font-amatic text-3xl font-bold text-primary">spelen</span> is er nog steeds.
              </p>
            <p>
              Maar het raakt vaak ondergesneeuwd door moeten, door druk, door serieuze dingen.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column - Memories showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-primary mb-6 font-amatic text-3xl font-bold">
                Herinner je je nog...
              </h3>
              <div className="space-y-3">
                {memories.map((memory, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredMemory(index)}
                    onMouseLeave={() => setHoveredMemory(null)}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <memory.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground group-hover:text-primary transition-colors duration-300 font-amatic text-2xl font-bold">
                        {memory.title}
                      </p>
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: hoveredMemory === index ? "auto" : 0,
                          opacity: hoveredMemory === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted-foreground mt-2 font-poppins">
                          {memory.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column - Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Video container */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
              src="https://storage.googleapis.com/msgsndr/vbnNdAs4NZKZXfoz2etA/media/68c6c093024cf85d35d68c0a.mp4"
            >
              <p className="text-muted-foreground text-center font-poppins">
                Je browser ondersteunt geen video afspelen.
              </p>
            </video>
            

          </motion.div>
        </div>
        
        {/* Continue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          
        </motion.div>
      </div>
    </div>
  );
}