import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { BellIcon } from "../components/BellIcon";
import Head from "next/head";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { useRef, useState } from "react";

export default function Ag1Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const shareOnWhatsApp = () => {
    const message = "Kijk waar ik aan begonnen ben! 🎯 De 3-daagse spelen met de bedoeling challenge - misschien ook iets voor jou? 🚀";
    const url = "https://spelenmetdebedoeling.nl";
    const fullMessage = encodeURIComponent(`${message}\n\n${url}`);
    window.open(`whatsapp://send?text=${fullMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Head>
        <title>Dag 1 – Challenge</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero (zoals op index, zonder CTA, met hoedje/titel/belletjes) */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-section {
            background: #12305B;
            width: 100%;
            padding: 7rem 0 3.5rem 0;
            position: relative;
            overflow: hidden;
          }
          @media (min-width: 1024px) {
            .hero-section { padding: 6rem 0 2rem 0; }
          }
          .hero-gradient-1 { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(231, 122, 51, 0.12) 0%, transparent 50%, rgba(246, 189, 51, 0.06) 100%);} 
          .hero-gradient-2 { position: absolute; top: -50%; left: -25%; width: 75%; height: 100%; background: rgba(231, 122, 51, 0.03); border-radius: 50%; filter: blur(3rem);} 
          .hero-gradient-3 { position: absolute; bottom: -50%; right: -25%; width: 75%; height: 100%; background: rgba(246, 189, 51, 0.04); border-radius: 50%; filter: blur(3rem);} 
          .amatic { font-family: "Amatic SC", cursive; font-weight: 700; }
        `
      }} />
      <section className="w-full relative z-10 hero-section">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <ImageWithFallback 
                  src="/images/Muts_SmdB_transparante_achtergrond-1-removebg-preview.png"
                  alt="Spelen met de Bedoeling"
                  className="h-12 sm:h-14 w-auto mx-auto"
                />
              </div>
              <div>
                <h1 className="amatic mb-2 leading-snug text-white text-3xl sm:text-4xl lg:text-5xl">
                  Welkom bij Dag 1
                </h1>
              </div>
              <div className="pt-1">
                <div className="mt-3 flex flex-wrap items-center justify-center gap-1">
                  <BellIcon size="sm" />
                  <BellIcon size="sm" />
                  <BellIcon size="sm" />
                  <BellIcon size="sm" />
                  <BellIcon size="sm" />
                  <BellIcon size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header (gecentreerd logo, geen CTA) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-b-2xl shadow-xl border border-border/30 bg-background/90 backdrop-blur px-6 py-3 sm:py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <ImageWithFallback
                  src="/images/Logo%20alleen%20tekst.png"
                  alt="Spelen met de Bedoeling"
                  className="h-8 w-auto sm:h-10"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="py-12">
          <div className="container max-w-4xl mx-auto px-6">
            {/* Video onder de hero - vierkant met play-overlay en geluid */}
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-md">
              <AspectRatio ratio={1}>
                <video
                  ref={videoRef}
                  src="/Dag 1 Challenge SmdB.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full rounded-2xl border border-border/30 bg-black"
                  onPlay={() => setShowOverlay(false)}
                />
                {showOverlay && (
                  <button
                    type="button"
                    onClick={() => videoRef.current?.play()}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Speel video"
                  >
                    <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg px-8 py-8 text-xl font-bold">
                      ▶︎ Play
                    </span>
                  </button>
                )}
              </AspectRatio>
            </div>

            {/* Share knop onder de video */}
            <div className="mt-8 text-center">
              <button 
                onClick={shareOnWhatsApp}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
              >
                Deel via WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-transparent">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <ImageWithFallback
                src="/images/Logo%20alleen%20tekst.png"
                alt="Spelen met de Bedoeling"
                className="h-6 w-auto sm:h-8"
              />
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