import { useState } from "react";
import { PlayHeroSection } from "../components/PlayHeroSection";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { NostalgicSection } from "../components/NostalgicSection";
import { ProblemSolutionSection } from "../components/ProblemSolutionSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { ChallengeSection } from "../components/ChallengeSection";
import { FAQSection } from "../components/FAQSection";
import { ChallengeForm } from "../components/ChallengeForm";
import { SuccessPage } from "../components/SuccessPage";
import { FunnelForm } from "../components/FunnelForm";
import { FunnelProgress } from "../components/FunnelProgress";
import { BellIcon } from "../components/BellIcon";

interface ChallengeData {
  firstName: string;
  phone: string;
  email: string;
}

export default function HomePage() {
  const [submittedData, setSubmittedData] = useState<ChallengeData | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [funnelStep, setFunnelStep] = useState(1);

  const handleChallengeComplete = (data: ChallengeData) => {
    setSubmittedData(data);
    setShowSuccess(true);
    
    // Hier zou je de data naar je backend sturen
    console.log("Challenge signup:", data);
  };

  const handleStartOver = () => {
    setShowSuccess(false);
    setSubmittedData(null);
    // Scroll naar top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  const handleFunnelStepChange = (step: number) => {
    setFunnelStep(step);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'challenge') {
      // Scroll direct naar het formulier
      const formElement = document.getElementById('challenge-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-4 z-50 bg-transparent">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl shadow-xl border border-border/30 bg-background/90 backdrop-blur px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <ImageWithFallback
                  src="/images/logo%20naast%20elkaar.png"
                  alt="Spelen met de Bedoeling"
                  className="h-8 w-auto sm:h-10"
                />
                <span className="text-sm sm:text-lg text-foreground hidden md:block">Spelen met de Bedoeling</span>
              </div>
              
              <nav className="flex items-center gap-2">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hidden md:inline-flex text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-all duration-200 font-amatic"
                >
                Ontdekken!
                </button>
                <button
                  onClick={() => scrollToSection('challenge')}
                  className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm font-amatic"
                >
                Meld je aan!
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hidden md:inline-flex text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg hover:bg-muted/50 transition-all duration-200 font-amatic"
                >
                Vragen!
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section - Full Width with Shadow */}
        <section id="hero" className="w-full relative z-10 -mt-4" style={{ backgroundColor: '#12305B' }}>
          <div className="absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-black/30 via-black/15 to-transparent pointer-events-none z-20"></div>
          <div className="absolute inset-x-0 -bottom-12 h-12 bg-gradient-to-b from-black/10 to-transparent pointer-events-none z-10"></div>
          <PlayHeroSection onGetStarted={() => scrollToSection('challenge')} />
        </section>
        

        

        
        {/* Nostalgic Section */}
        <section id="nostalgic" className="py-12 bg-transparent pt-[48px] pr-[0px] pb-[0px] pl-[0px]">
          <div className="container max-w-6xl mx-auto px-6">
            <NostalgicSection 
              onContinue={() => scrollToSection('problem')} 
              onGetStarted={() => scrollToSection('challenge')}
            />
          </div>
        </section>
        
        {/* Problem/Solution Section */}
        <section id="problem" className="py-12 bg-muted/10 pt-[0px] pr-[0px] pb-[48px] pl-[0px]">
          <div className="container max-w-6xl mx-auto px-6">
            <ProblemSolutionSection onGetStarted={() => scrollToSection('challenge')} />
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="py-12 bg-transparent">
          <div className="container max-w-6xl mx-auto px-6">
            <BenefitsSection onGetStarted={() => scrollToSection('challenge')} />
          </div>
        </section>
        
        {/* Challenge Section */}
        <section id="challenge" className="py-16 bg-primary/5 border-t border-border/50 px-[4px] py-[64px] mx-[40px] my-[0px] rounded-[35px] bg-[rgba(231,122,51,0.15)]">
          <div className="container max-w-6xl mx-auto px-6">
            <ChallengeSection />
            
            {/* GHL Form Embed */}
            <div className="mt-8">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/form/KduoNtYSzHvxndgd2x9j" 
                style={{width: '100%', height: '100%', border: 'none', borderRadius: '3px', overflow: 'auto'}} 
                scrolling="yes"
                id="inline-KduoNtYSzHvxndgd2x9j" 
                data-layout="{'id':'INLINE'}" 
                data-trigger-type="alwaysShow" 
                data-trigger-value="" 
                data-activation-type="alwaysActivated" 
                data-activation-value="" 
                data-deactivation-type="neverDeactivate" 
                data-deactivation-value="" 
                data-form-name="Form 0" 
                data-height="432" 
                data-layout-iframe-id="inline-KduoNtYSzHvxndgd2x9j" 
                data-form-id="KduoNtYSzHvxndgd2x9j" 
                title="Form 0"
              />
              <script src="https://link.msgsndr.com/js/form_embed.js"></script>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-12 bg-transparent">
          <div className="container max-w-6xl mx-auto px-6">
            <FAQSection onGetStarted={() => scrollToSection('challenge')} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-transparent">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <ImageWithFallback
                src="/images/logo%20naast%20elkaar.png"
                alt="Spelen met de Bedoeling"
                className="h-6 w-auto sm:h-8"
              />
              <span className="text-sm sm:text-base text-foreground">Spelen met de Bedoeling</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Spelen met de Bedoeling. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}