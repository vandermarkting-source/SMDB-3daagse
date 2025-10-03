import { useState } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
  onGetStarted: () => void;
}

export function FAQSection({ onGetStarted }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Moet ik creatief zijn om dit te kunnen?",
      answer: "Nee hoor. Spelen zit in iedereen. Je hoeft alleen nieuwsgierig te zijn."
    },
    {
      question: "Is dit geschikt voor mijn werk of team?",
      answer: "Zeker. De challenge kun je individueel doen, maar ook samen. Het traject kan zelfs op maat worden ingezet voor teams, organisaties of groepen."
    },
    {
      question: "Wat krijg ik tijdens de challenge?",
      answer: "Drie dagen lang ontvang je inspirerende opdrachten en lichte oefeningen – direct toepasbaar, waar je ook bent."
    },
    {
      question: "Wat levert dit mij op?",
      answer: "Meer vrijheid, vrolijkheid, lichtheid en lucht in je dagelijks leven. En vaak… een lach op je gezicht."
    },
    {
      question: "Kan ik ook iemand meenemen?",
      answer: "Graag zelfs! Spelen werkt nóg beter samen. Stuur deze pagina door en vraag: 'Doe jij mee?'"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-8 font-amatic text-4xl font-bold text-foreground">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-poppins">
            Heb je nog vragen over de challenge? Hier vind je de antwoorden op de meest gestelde vragen.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/30 rounded-xl transition-colors duration-300"
              >
                <h4 className="text-foreground font-poppins pr-4">
                  {faq.question}
                </h4>
                <motion.svg
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground font-poppins">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-4 text-primary font-amatic text-3xl font-bold">
            Klaar om te beginnen?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto font-poppins">
            Sluit je aan bij honderden anderen die al ontdekt hebben hoe speelsheid 
            hun leven lichter en vrolijker heeft gemaakt.
          </p>
          <Button 
            size="lg"
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] px-8 py-3 font-amatic font-bold"
          >
            Meld je aan
          </Button>
        </motion.div>
      </div>
    </div>
  );
}