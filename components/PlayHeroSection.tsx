import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";
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
            padding: 12rem 0 5rem 0; /* nog meer bovenruimte zodat het hoedje volledig zichtbaar is */
            position: relative;
            overflow: hidden;
          }
          .hero-gradient-1 {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(231, 122, 51, 0.12) 0%, transparent 50%, rgba(246, 189, 51, 0.06) 100%);
          }
          .hero-gradient-2 {
            position: absolute;
            top: -50%;
            left: -25%;
            width: 75%;
            height: 100%;
            background: rgba(231, 122, 51, 0.03);
            border-radius: 50%;
            filter: blur(3rem);
          }
          .hero-gradient-3 {
            position: absolute;
            bottom: -50%;
            right: -25%;
            width: 75%;
            height: 100%;
            background: rgba(246, 189, 51, 0.04);
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
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Image 
                  src="/images/Muts_SmdB_transparante_achtergrond-1-removebg-preview.png"
                  alt="Spelen met de Bedoeling"
                  width={160}
                  height={160}
                  className="h-12 sm:h-14 w-auto mx-auto"
                />
              </div>
              <div>
                <h1 className="mb-4 leading-snug font-poppins text-white text-2xl sm:text-3xl lg:text-4xl">
                  Wil jij meer vrijheid en lichtheid in je leven, werk of team?
                </h1>
              </div>
              
              <div>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-snug font-poppins">
                  Ontdek de kracht van <span className="font-amatic text-3xl font-bold text-primary">Spelen met de Bedoeling</span><br />
                  <span className="inline-block mt-2">Meld je aan voor de gratis 3-daagse challenge</span>
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={onGetStarted}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-amatic"
                >
                  Meld je aan voor de gratis challenge!
                </Button>
                {/* Rinkelende belletjes onder de CTA */}
                <div className="mt-1 flex flex-wrap items-center justify-center gap-1">
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
    </>
  );
}