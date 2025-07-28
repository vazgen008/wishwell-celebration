import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles } from 'lucide-react';
import FireworksAnimation from './FireworksAnimation';
import birthdayPersonImage from '@/assets/birthday-person.jpg';

interface HeroSectionProps {
  birthdayPersonName: string;
}

const HeroSection = ({ birthdayPersonName }: HeroSectionProps) => {
  const [showFireworks, setShowFireworks] = useState(true);

  const handleReplayFireworks = () => {
    setShowFireworks(false);
    setTimeout(() => setShowFireworks(true), 100);
  };

  const scrollToWishes = () => {
    document.getElementById('wishes-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-sparkle opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Fireworks Animation */}
      <FireworksAnimation trigger={showFireworks} />

      {/* Main content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        {/* Birthday person photo */}
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <img
              src={birthdayPersonImage}
              alt={birthdayPersonName}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-celebration border-8 border-white"
            />
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce-gentle">
              🎉
            </div>
            <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              🎂
            </div>
          </div>
        </div>

        {/* Birthday message */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Happy Birthday
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-light text-white/90 mb-8">
            {birthdayPersonName}! 🎈
          </h2>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Today is all about celebrating the amazing person you are! 
            Your friends have something special to share with you...
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center mt-12">
          <Button
            onClick={handleReplayFireworks}
            className="bg-white/20 text-white border-2 border-white/30 hover:bg-white/30 backdrop-blur-sm px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Replay Fireworks
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToWishes}
          className="text-white/80 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 animate-bounce-gentle"
        >
          <span className="text-sm font-medium">See messages from friends</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;