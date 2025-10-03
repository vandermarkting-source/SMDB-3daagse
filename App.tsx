import { useState } from "react";
import { PlayHeroSection } from "./components/PlayHeroSection";
import { NostalgicSection } from "./components/NostalgicSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ChallengeSection } from "./components/ChallengeSection";
import { ChallengeForm } from "./components/ChallengeForm";
import { FAQSection } from "./components/FAQSection";
import { SuccessPage } from "./components/SuccessPage";

interface ChallengeData {
  firstName: string;
  phone: string;
  email: string;
}

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [challengeData, setChallengeData] = useState<ChallengeData | null>(null);

  const handleGetStarted = () => {
    setShowForm(true);
    // Scroll to challenge form
    setTimeout(() => {
      const challengeSection = document.getElementById('challenge-section');
      if (challengeSection) {
        challengeSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFormComplete = (data: ChallengeData) => {
    setChallengeData(data);
    setShowSuccess(true);
    setShowForm(false);
  };

  const handleStartOver = () => {
    setShowSuccess(false);
    setShowForm(false);
    setChallengeData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(to bottom right, #FFF8E6, #FFF8E6, rgba(231, 122, 51, 0.05))` }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ backgroundColor: 'rgba(255, 248, 230, 0.8)', borderColor: 'rgba(39, 53, 84, 0.15)' }}>
        <div className="container max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <img 
                src="https://storage.googleapis.com/figma-alpha-api/images/a39a05ba-0a71-bac2-d1e3-99f125361d0e" 
                alt="Spelen met de Bedoeling" 
                className="h-6 w-auto xs:h-8 sm:h-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="h-6 w-6 xs:h-8 sm:h-10 bg-primary rounded-full hidden items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-sm xs:text-lg sm:text-xl hidden xs:block text-foreground">Spelen met de Bedoeling</span>
            </div>
            
            <nav className="flex items-center gap-2">
              <button 
                onClick={() => {
                  const element = document.getElementById('hero-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Ontdekken
              </button>
              <button 
                onClick={handleGetStarted}
                className="px-6 py-2 rounded-lg transition-colors duration-200 shadow-sm"
                style={{ backgroundColor: '#E77A33', color: '#FFFFFF' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(231, 122, 51, 0.9)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#E77A33'; }}
              >
                Meedoen
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('faq-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground"
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(245, 241, 232, 0.5)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                Vragen
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div id="hero-section">
          <PlayHeroSection onGetStarted={handleGetStarted} />
        </div>

        {/* Nostalgic Section */}
        <NostalgicSection onContinue={handleGetStarted} onGetStarted={handleGetStarted} />

        {/* Problem/Solution Section */}
        <ProblemSolutionSection onGetStarted={handleGetStarted} />

        {/* Benefits Section */}
        <BenefitsSection onGetStarted={handleGetStarted} />

        {/* Challenge Section */}
        <div 
          id="challenge-section" 
          className="py-20 px-6" 
          style={{ 
            backgroundColor: 'rgba(231,122,51,0.15)',
            borderTop: '1px solid rgba(39, 53, 84, 0.15)',
            borderRadius: '35px',
            margin: '0 40px',
            padding: '64px 24px'
          }}
        >
          <ChallengeSection />
          
          {showSuccess && challengeData ? (
            <div className="mt-16">
              <SuccessPage 
                formData={challengeData} 
                onStartOver={handleStartOver} 
              />
            </div>
          ) : showForm ? (
            <div className="mt-16">
              <ChallengeForm onComplete={handleFormComplete} />
            </div>
          ) : (
            <div className="mt-16 text-center">
              <button 
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-poppins"
              >
                Start de gratis challenge
              </button>
            </div>
          )}
        </div>

        {/* FAQ Section */}
        <div id="faq-section">
          <FAQSection onGetStarted={handleGetStarted} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-transparent" style={{ borderColor: 'rgba(39, 53, 84, 0.15)' }}>
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <img 
                src="https://storage.googleapis.com/figma-alpha-api/images/a39a05ba-0a71-bac2-d1e3-99f125361d0e" 
                alt="Spelen met de Bedoeling" 
                className="h-6 w-auto sm:h-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="h-6 w-6 sm:h-8 bg-primary rounded-full hidden items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-sm sm:text-base text-foreground">Spelen met de Bedoeling</span>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2025 Spelen met de Bedoeling. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}