import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import benzinGroupImage from '@/assets/benzin-group.jpg';

const BenzinSpecialEnding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStage, setAnimationStage] = useState<'idle' | 'match' | 'fire' | 'reveal'>('idle');
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Show the button after a delay or when scrolled to bottom
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const playMatchSound = () => {
    if (!audioContext) {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      setAudioContext(ctx);
      
      // Create match strike sound
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.setValueAtTime(200, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
      
      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.2);
    }
  };

  const playFireSound = () => {
    if (audioContext) {
      // Create fire crackle sound using noise
      const bufferSize = audioContext.sampleRate * 2;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.1;
      }
      
      const source = audioContext.createBufferSource();
      const filter = audioContext.createBiquadFilter();
      const gainNode = audioContext.createGain();
      
      source.buffer = buffer;
      source.loop = true;
      
      filter.type = 'lowpass';
      filter.frequency.value = 800;
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.5);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 3);
      
      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      source.start();
      setTimeout(() => source.stop(), 3000);
    }
  };

  const handleSpecialClick = async () => {
    // Stage 1: Match animation
    setAnimationStage('match');
    playMatchSound();
    
    setTimeout(() => {
      // Stage 2: Fire animation
      setAnimationStage('fire');
      playFireSound();
      
      setTimeout(() => {
        // Stage 3: Benzin reveal
        setAnimationStage('reveal');
      }, 1500);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-background to-celebration-purple/5">
      <div className="container mx-auto px-6 text-center">
        {animationStage === 'idle' && (
          <div className="animate-fade-in">
            <Button
              onClick={handleSpecialClick}
              className="text-lg px-8 py-4 bg-gradient-to-r from-celebration-orange to-celebration-purple text-white shadow-celebration hover:scale-105 transition-all duration-300"
            >
              🔥 If you've watched all the wishes, click here! 🔥
            </Button>
          </div>
        )}

        {animationStage === 'match' && (
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              {/* Matchstick */}
              <div className="w-2 h-24 bg-amber-800 rounded-t-full animate-wiggle" />
              {/* Match head */}
              <div className="w-4 h-4 bg-red-600 rounded-full absolute -top-2 -left-1 animate-glow" />
              {/* Spark */}
              <div className="absolute -top-4 left-1 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle" />
            </div>
          </div>
        )}

        {animationStage === 'fire' && (
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              {/* Fire flames */}
              <div className="fire-container">
                <div className="flame flame-1"></div>
                <div className="flame flame-2"></div>
                <div className="flame flame-3"></div>
              </div>
            </div>
          </div>
        )}

        {animationStage === 'reveal' && (
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <img
                src={benzinGroupImage}
                alt="Benzin Group"
                className="mx-auto rounded-2xl shadow-2xl max-w-2xl w-full animate-zoom-in"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-celebration-orange via-red-500 to-celebration-purple bg-clip-text text-transparent mb-4 animate-slide-in-up">
              From Benzin, with love 🔥❤️
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-in-up-delayed">
              The fire of friendship burns eternal! 🔥
            </p>
          </div>
        )}
      </div>

    </section>
  );
};

export default BenzinSpecialEnding;