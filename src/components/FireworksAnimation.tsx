import { useEffect, useState } from 'react';

interface Firework {
  id: string;
  x: number;
  y: number;
  color: string;
  delay: number;
}

interface FireworksAnimationProps {
  trigger: boolean;
  onComplete?: () => void;
}

const FireworksAnimation = ({ trigger, onComplete }: FireworksAnimationProps) => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  const colors = [
    'hsl(var(--primary))',
    'hsl(var(--celebration-blue))',
    'hsl(var(--celebration-green))',
    'hsl(var(--celebration-orange))',
    'hsl(var(--celebration-purple))',
    'hsl(var(--accent))'
  ];

  useEffect(() => {
    if (!trigger) return;

    const newFireworks: Firework[] = [];
    
    // Create 12 fireworks at random positions
    for (let i = 0; i < 12; i++) {
      newFireworks.push({
        id: `firework-${i}-${Date.now()}`,
        x: Math.random() * 100,
        y: 20 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2000
      });
    }

    setFireworks(newFireworks);

    // Clear fireworks and call onComplete after animation
    const timer = setTimeout(() => {
      setFireworks([]);
      onComplete?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [trigger, onComplete]);

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute w-4 h-4 rounded-full animate-firework"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
            backgroundColor: firework.color,
            animationDelay: `${firework.delay}ms`,
            boxShadow: `0 0 20px ${firework.color}`,
          }}
        >
          {/* Sparkle particles around each firework */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-current rounded-full animate-sparkle"
              style={{
                left: `${(i * 45)}deg`,
                top: `${(i * 45)}deg`,
                transform: `rotate(${i * 45}deg) translateX(15px)`,
                animationDelay: `${firework.delay + 500}ms`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FireworksAnimation;