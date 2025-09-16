import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { FunnelProgress } from "./FunnelProgress";
import { motion } from "framer-motion";

interface FormData {
  firstName: string;
  email: string;
  company: string;
  industry: string;
  revenue: string;
  challenge: string;
  goal: string;
}

interface FunnelFormProps {
  onComplete: (data: FormData) => void;
}

export function FunnelForm({ onComplete }: FunnelFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    email: "",
    company: "",
    industry: "",
    revenue: "",
    challenge: "",
    goal: "",
  });

  const totalSteps = 4;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.company.trim() !== "" && formData.industry !== "";
      case 3:
        return formData.revenue !== "";
      case 4:
        return formData.challenge.trim() !== "" && formData.goal.trim() !== "";
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2">Laten we kennismaken! 👋</h2>
              <p className="text-muted-foreground">
                Vertel ons wie je bent, zodat we je de juiste strategie kunnen geven.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="firstName">Wat is je voornaam?</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Je voornaam"
                  className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Wat is je e-mailadres?</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="je@email.com"
                  className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  We gebruiken dit alleen om je persoonlijke strategie te sturen.
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2">Vertel over je business 🏢</h2>
              <p className="text-muted-foreground">
                Zo kunnen we je de meest relevante groeistrategieën geven.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="company">Wat is de naam van je bedrijf?</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => updateFormData("company", e.target.value)}
                  placeholder="Je bedrijfsnaam"
                  className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">In welke branche ben je actief?</Label>
                <Select 
                  value={formData.industry} 
                  onValueChange={(value) => updateFormData("industry", value)}
                >
                  <SelectTrigger className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <SelectValue placeholder="Selecteer je branche" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="saas">SaaS/Software</SelectItem>
                    <SelectItem value="consulting">Consulting/Dienstverlening</SelectItem>
                    <SelectItem value="retail">Retail/Winkel</SelectItem>
                    <SelectItem value="marketing">Marketing/Reclame</SelectItem>
                    <SelectItem value="health">Gezondheid/Fitness</SelectItem>
                    <SelectItem value="education">Onderwijs/Training</SelectItem>
                    <SelectItem value="finance">Financiën/Verzekeringen</SelectItem>
                    <SelectItem value="other">Anders</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2">Waar sta je nu? 📊</h2>
              <p className="text-muted-foreground">
                Dit helpt ons de juiste groeistrategieën voor jouw fase te bepalen.
              </p>
            </div>
            
            <div>
              <Label>Wat is je huidige maandomzet?</Label>
              <RadioGroup 
                value={formData.revenue} 
                onValueChange={(value) => updateFormData("revenue", value)}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="0-5k" id="0-5k" />
                  <Label htmlFor="0-5k">€0 - €5.000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5-15k" id="5-15k" />
                  <Label htmlFor="5-15k">€5.000 - €15.000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15-50k" id="15-50k" />
                  <Label htmlFor="15-50k">€15.000 - €50.000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="50-100k" id="50-100k" />
                  <Label htmlFor="50-100k">€50.000 - €100.000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="100k+" id="100k+" />
                  <Label htmlFor="100k+">€100.000+</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-2">Laatste stap! 🎯</h2>
              <p className="text-muted-foreground">
                Vertel ons waar je naartoe wilt, zodat we je de perfecte roadmap kunnen geven.
              </p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="challenge">Wat is je grootste uitdaging op dit moment?</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => updateFormData("challenge", e.target.value)}
                  placeholder="Bijvoorbeeld: te weinig klanten, lage conversie, geen tijd voor marketing..."
                  className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="goal">Wat wil je bereiken in de komende 90 dagen?</Label>
                <Textarea
                  id="goal"
                  value={formData.goal}
                  onChange={(e) => updateFormData("goal", e.target.value)}
                  placeholder="Bijvoorbeeld: omzet verdubbelen, 100 nieuwe klanten, automatiseren van processen..."
                  className="mt-1 transition-all duration-200 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FunnelProgress currentStep={currentStep} totalSteps={totalSteps} />
      
      <motion.div 
        className="bg-card border rounded-xl p-8 shadow-xl transition-all duration-200 hover:shadow-2xl hover:border-primary/20"
        layout
      >
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>
        
        <div className="flex gap-3 mt-8">
          {currentStep > 1 && (
            <Button
              onClick={handleBack}
              variant="outline"
              className="flex-1 transition-all duration-200 hover:scale-[1.02] hover:border-primary/30"
            >
              Vorige
            </Button>
          )}
          
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {currentStep === totalSteps ? "Krijg mijn strategie →" : "Volgende"}
          </Button>
        </div>
        
        {currentStep === 1 && (
          <motion.p 
            className="text-center text-xs text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Door door te gaan ga je akkoord met onze voorwaarden en privacybeleid.
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}