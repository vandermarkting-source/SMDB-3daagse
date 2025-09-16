import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ChallengeData {
  firstName: string;
  phone: string;
  email: string;
}

interface SuccessPageProps {
  formData: ChallengeData;
  onStartOver: () => void;
}

export function SuccessPage({ formData, onStartOver }: SuccessPageProps) {
  return (
    <div className="max-w-lg mx-auto text-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 flex items-center justify-center mx-auto mb-8"
      >
        <img 
          src="https://storage.googleapis.com/figma-alpha-api/images/a39a05ba-0a71-bac2-d1e3-99f125361d0e" 
          alt="Bedankt" 
          className="w-16 h-16 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        <div className="w-16 h-16 bg-primary rounded-full hidden items-center justify-center">
          <span className="text-white font-bold text-xl">S</span>
        </div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl mb-6 font-poppins text-foreground"
      >
        Bedankt {formData.firstName}
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-4 mb-8 font-poppins"
      >
        <p className="text-muted-foreground">
          Je challenge begint morgen via WhatsApp
        </p>
        <div className="bg-muted/30 p-4 rounded-lg space-y-2">
          <p className="text-sm text-muted-foreground">WhatsApp: {formData.phone}</p>
          <p className="text-sm text-muted-foreground">Updates: {formData.email}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button 
          onClick={onStartOver} 
          variant="outline"
          className="border-border hover:bg-muted/50 font-poppins"
        >
          Nieuwe aanmelding
        </Button>
      </motion.div>
    </div>
  );
}