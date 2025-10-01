import { useState, useEffect } from "react";
import Head from "next/head";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ThankYouPage() {
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    // Start confetti when page loads
    setTimeout(() => {
      setConfettiActive(true);
      createConfetti();
    }, 500);

    // Repeat confetti every 15 seconds
    const interval = setInterval(createConfetti, 15000);

    return () => clearInterval(interval);
  }, []);

  const createConfetti = () => {
    const colors = ['hsl(25 95% 53%)', 'hsl(142 71% 45%)', 'hsl(43 96% 56%)', '#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1'];
    
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.position = 'fixed';
        confetti.style.width = Math.random() * 8 + 6 + 'px';
        confetti.style.height = Math.random() * 8 + 6 + 'px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confetti-fall ${Math.random() * 4 + 4}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.boxShadow = `0 0 8px ${colors[Math.floor(Math.random() * colors.length)]}`;
        confetti.style.zIndex = '1000';
        confetti.style.pointerEvents = 'none';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          if (confetti.parentNode) {
            confetti.remove();
          }
        }, 8000);
      }, i * 30);
    }
  };

  const createSparkle = () => {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.animation = 'sparkle 2s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
      sparkle.remove();
    }, 2000);
  };

  useEffect(() => {
    // Create sparkles periodically
    const sparkleInterval = setInterval(createSparkle, 3000);
    return () => clearInterval(sparkleInterval);
  }, []);

  const shareOnWhatsApp = () => {
    const message = "Kijk waar ik aan begonnen ben! 🎯 De 3-daagse spelen met de bedoeling challenge - misschien ook iets voor jou? 🚀";
    const url = "https://spelenmetdebedoeling.nl";
    const fullMessage = encodeURIComponent(`${message}\n\n${url}`);
    
    // Always try to open WhatsApp app first
    window.open(`whatsapp://send?text=${fullMessage}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Bedankt! - Spelen met de Bedoeling</title>
        <meta name="description" content="Bedankt voor je aanmelding voor de 3-daagse challenge!" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-8px); }
        }

        @keyframes glow {
          from { text-shadow: 0 0 20px rgba(255, 122, 51, 0.3); }
          to { text-shadow: 0 0 30px rgba(255, 122, 51, 0.5); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes sparkle {
          0% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
          100% { opacity: 0; transform: scale(0) rotate(360deg); }
        }

        .success-icon {
          animation: bounce 2s infinite;
        }

        .title-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }

        .slide-in {
          animation: slideInUp 0.8s ease-out;
        }

        .pulse-effect {
          animation: pulse 3s infinite;
        }

        .share-button {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .share-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .share-button:hover::before {
          left: 100%;
        }

        .share-button:hover {
          transform: translateY(-2px) scale(1.05);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="rounded-b-2xl shadow-xl border border-border/30 bg-background/90 backdrop-blur px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
              <ImageWithFallback 
                src="/images/logo%20naast%20elkaar.png" 
                alt="Spelen met de Bedoeling" 
                className="h-6 w-auto xs:h-8 sm:h-10" 
              />
                <span className="text-sm xs:text-lg sm:text-xl text-foreground hidden xs:block">Spelen met de Bedoeling</span>
              </div>
              
              <nav className="flex items-center gap-2">
                <a 
                  href="/"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-sm font-amatic font-bold"
                >
                  Naar site!
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-16">

          {/* Bedankt sectie */}
          <section className="py-16 bg-[rgba(231,122,51,0.15)] border-t border-border/50 px-1 mx-10 my-0 rounded-[35px] slide-in">
            <div className="container max-w-6xl mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <div className="success-icon text-6xl mb-6">🎉</div>
                <h1 className="font-amatic text-6xl md:text-8xl font-bold mb-6 title-glow text-foreground">
                  Te gek!
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-muted-foreground">
                  Super dat je je hebt aangemeld voor de 3-daagse challenge!
                </p>

                {/* Challenge Info in zachte merk-kleuren */}
                <div className="bg-[linear-gradient(to_right, rgba(231,122,51,0.4), rgba(246,189,51,0.4))] text-foreground p-8 rounded-2xl mb-8 pulse-effect shadow-lg">
                  <h3 className="font-amatic text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                    📱 De challenge start snel!
                  </h3>
                  <p className="text-lg md:text-xl opacity-95">
                    Je ontvangt binnenkort een bericht in WhatsApp. Veel succes met de uitdagingen die komen gaan. 🚀
                  </p>
                </div>

                {/* Share Section */}
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
                  <h3 className="font-amatic text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Deel met vrienden! 🤝
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Vertel anderen over deze geweldige challenge!
                  </p>
                  <button 
                    onClick={shareOnWhatsApp}
                    className="share-button bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg inline-flex items-center gap-3"
                  >
                    📲 Deel via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/30 bg-transparent">
          <div className="container max-w-6xl mx-auto px-6 py-12">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <img 
                  src="https://storage.googleapis.com/msgsndr/vbnNdAs4NZKZXfoz2etA/media/68c6aa6f0e58bee55f8a13cd.png" 
                  alt="Spelen met de Bedoeling" 
                  className="h-6 w-auto sm:h-8" 
                />
                <span className="text-sm sm:text-base text-foreground">Spelen met de Bedoeling</span>
              </div>
              <p className="text-sm text-muted-foreground">
                &copy; 2024 Spelen met de Bedoeling. Alle rechten voorbehouden.
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Website
                </a>
                <span className="text-muted-foreground">|</span>
                <a href="mailto:info@spelenmetdebedoeling.nl" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}