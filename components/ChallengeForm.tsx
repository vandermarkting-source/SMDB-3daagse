import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface ChallengeData {
  firstName: string;
  phone: string;
  email: string;
}

interface ChallengeFormProps {
  onComplete: (data: ChallengeData) => void;
}

export function ChallengeForm({ onComplete }: ChallengeFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ChallengeData>({
    firstName: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onComplete(formData);
    setIsSubmitting(false);
  };

  const updateFormData = (field: keyof ChallengeData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim().length > 0;
      case 2:
        return formData.phone.trim().length >= 8;
      case 3:
        return formData.email.trim().length > 0 && formData.email.includes('@');
      default:
        return false;
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Simple Progress */}
      <div className="mb-8">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground font-poppins">Stap {currentStep} van 3</span>
        </div>
        <div className="w-full bg-muted/50 rounded-full h-1">
          <div
            className="bg-foreground h-1 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-card p-8 rounded-lg border border-border/50">        

        {/* Step 1: Name */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="mb-3 text-foreground font-poppins">
                Hoe mogen we je noemen?
              </h3>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="firstName" className="font-poppins text-muted-foreground">Voornaam</Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => updateFormData('firstName', e.target.value)}
                placeholder="Voornaam"
                className="border-border bg-background focus:border-foreground font-poppins"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Step 2: Phone */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="mb-3 text-foreground font-poppins">
                Telefoonnummer voor je challenge
              </h3>
              <p className="text-sm text-muted-foreground font-poppins">
                Je ontvangt 3 dagen een WhatsApp bericht
              </p>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="phone" className="font-poppins text-muted-foreground">Telefoonnummer</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="06 12345678"
                className="border-border bg-background focus:border-foreground font-poppins"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Step 3: Email */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="mb-3 text-foreground font-poppins">
                E-mailadres voor updates
              </h3>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="email" className="font-poppins text-muted-foreground">E-mailadres</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                placeholder="naam@email.nl"
                className="border-border bg-background focus:border-foreground font-poppins"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-border hover:bg-muted/50 font-poppins"
          >
            Vorige
          </Button>

          {currentStep < 3 ? (
            <Button
              onClick={handleNext}
              disabled={!isStepValid()}
              className="bg-foreground text-background hover:bg-foreground/90 font-poppins disabled:opacity-50"
            >
              Volgende
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isSubmitting}
              className="bg-foreground text-background hover:bg-foreground/90 font-poppins disabled:opacity-50"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Aanmelden...
                </div>
              ) : (
                "Start challenge"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}