import { motion } from "framer-motion";

export function ChallengeSection() {
  const challengePoints = [
    {
      title: "Dag 1: Ontdekken",
      description: "Herken speelse momenten in je dagelijkse routine"
    },
    {
      title: "Dag 2: Experimenteren", 
      description: "Probeer nieuwe manieren om uitdagingen te benaderen"
    },
    {
      title: "Dag 3: Integreren",
      description: "Maak speelsheid een natuurlijk onderdeel van je leven"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center space-y-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="font-amatic text-4xl text-primary font-bold">
            Durf jij te spelen?
          </h3>
          <p className="text-muted-foreground">
            Meld je aan voor de gratis challenge
          </p>
        </motion.div>


      </div>
    </div>
  );
}