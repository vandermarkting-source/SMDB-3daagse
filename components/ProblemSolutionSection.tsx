import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, Clock, Frown, Lightbulb, Target, Zap, Heart, Users, ChevronDown, Sparkles } from "lucide-react";

interface ProblemSolutionSectionProps {
  onGetStarted: () => void;
}

export function ProblemSolutionSection({ onGetStarted }: ProblemSolutionSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const problemSteps = [
    {
      icon: Brain,
      title: "Je hoofd vol",
      titleClassName: "font-amatic text-3xl",
      description: "Eindeloze to-do lijsten, alles dat moet blijft malen, geen ruimte voor iets nieuws.",
      symptoms: ["Slecht slapen", "Irritaties", "Dodelijke ernst"]
    },
    {
      icon: Clock,
      title: "Je dagen vol",
      titleClassName: "font-amatic text-3xl",
      description: "Van afspraak naar deadline. Dag in dag uit. Geen tijd voor spontaniteit of speelse momenten.",
      symptoms: ["Stress", "Haast", "Druk", "Broodje achter je scherm"]
    },
    {
      icon: Frown,
      title: "Het plezier is weg",
      titleClassName: "font-amatic text-3xl",
      description: "Dingen die moeten gaan voor. Werk is serieus. Thuis is serieus. Alles is serieus. Alles is ernstig.",
      symptoms: ["Futloos", "Vermoeidheid", "Spanning", "Verveling"]
    }
  ];

  const solutionSteps = [
    {
      icon: Lightbulb,
      question: "Wat als het lichter kan?",
      questionClassName: "font-amatic text-3xl",
      answer: "Niet alles hoeft perfect. Goed genoeg is goed genoeg.",
      visual: Lightbulb
    },
    {
      icon: Target,
      question: "Wat als je mag spelen met de bedoeling?",
      questionClassName: "font-amatic text-3xl",
      answer: "Dat iets moois ontstaat, zonder druk, zonder plan!",
      visual: Target
    },
    {
      icon: Zap,
      question: "Wat als je energie krijgt van energie geven?",
      questionClassName: "font-amatic text-3xl",
      answer: "Zonder oordeel. Gewoon gáán, uit nieuwsgierigheid!",
      visual: Zap
    }
  ];

  return (
    <div className="py-12 bg-transparent">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Problem Section - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          {/* Left: Problem title and emotional appeal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: 'rgba(231, 122, 51, 0.03)', borderColor: 'rgba(231, 122, 51, 0.15)' }}>
              <h2 className="mb-6 text-primary font-amatic text-4xl font-bold">
                Welke herken je het meest?
              </h2>
              
              {/* Interactive element */}
              <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                <div className="flex gap-2">
                  {problemSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted hover:bg-primary/20'
                      }`}
                    >
                      <step.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive problem breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {problemSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer group ${
                  activeStep === index
                    ? 'shadow-xl scale-[1.02]'
                : 'hover:shadow-lg hover:scale-[1.01]'
                }`}
                style={{
                  backgroundColor: activeStep === index ? 'rgba(231, 122, 51, 0.08)' : 'rgba(231, 122, 51, 0.03)',
                  borderColor: activeStep === index ? 'rgba(231, 122, 51, 0.25)' : 'rgba(231, 122, 51, 0.15)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-primary mb-2 font-amatic text-2xl font-bold">{step.title}</h4>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    
                    {/* Chips met ‘woordjes’ verwijderd voor rustiger uitstraling */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Solution Section - Centered */}
        <div className="text-center md:mb-24" style={{ marginTop: '0', marginBottom: '40px' }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-poppins text-2xl mb-8" style={{ color: '#0094C7' }}>
              Wil jij <span className="font-amatic text-4xl font-bold" style={{ color: '#0094C7' }}>ontdekken</span> hoe het anders kan?
            </h2>
            
            <div className="space-y-6">
              {solutionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-center gap-4 p-6 rounded-xl transition-all duration-300" style={{ backgroundColor: 'rgba(0, 148, 199, 0.05)' }}>
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.visual className="w-6 h-6" style={{ color: '#0094C7' }} />
                    </div>
                    <div className="text-center">
                      <p className="text-2xl text-foreground mb-2 transition-colors duration-300 font-amatic font-bold" style={{ color: '#0094C7' }}>
                        {step.question}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {step.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <button 
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md font-amatic font-bold"
              >
                Meld je aan voor de gratis challenge
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Playful visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder for visualization */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
