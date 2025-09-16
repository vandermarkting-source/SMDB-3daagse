import { Button } from "./ui/button";
import { useState } from "react";
import { BellIcon } from "./BellIcon";

interface PlayHeroSectionProps {
  onGetStarted: () => void;
}

export function PlayHeroSection({ onGetStarted }: PlayHeroSectionProps) {

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-section {
            background: #12305B;
            width: 100%;
            padding: 6rem 0;
            position: relative;
            overflow: hidden;
          }
          .hero-gradient-1 {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(231, 122, 51, 0.2) 0%, transparent 50%, rgba(246, 189, 51, 0.1) 100%);
            animation: pulse 4s ease-in-out infinite;
          }
          .hero-gradient-2 {
            position: absolute;
            top: -50%;
            left: -25%;
            width: 75%;
            height: 100%;
            background: rgba(231, 122, 51, 0.05);
            border-radius: 50%;
            filter: blur(3rem);
          }
          .hero-gradient-3 {
            position: absolute;
            bottom: -50%;
            right: -25%;
            width: 75%;
            height: 100%;
            background: rgba(246, 189, 51, 0.08);
            border-radius: 50%;
            filter: blur(3rem);
          }
        `
      }} />
      <section className="w-full relative z-10 hero-section">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
        <div className="relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center space-y-8">
              <div>
                <h1 className="mb-6 leading-tight font-poppins text-white text-2xl sm:text-3xl lg:text-4xl">
                  Wil jij meer <span className="text-primary font-amatic text-5xl font-bold">vrijheid</span> en
                  <span className="text-accent font-amatic text-5xl font-bold">vrolijkheid</span>
                  in je leven, werk of team?
                </h1>
              </div>
              
              <div>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-poppins">
                  Ontdek de kracht van <span className="font-amatic text-3xl font-bold text-primary">spelen met de bedoeling</span> – en probeer het zelf in een<br />
                  gratis 3-daagse challenge.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={onGetStarted}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start de gratis challenge
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 pt-8">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5,6,7].map((i) => (
                    <div key={i}>
                      <BellIcon size="md" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}