import { useEffect, useState } from 'react';

interface FloatingElement {
  id: string;
  type: 'balloon' | 'confetti' | 'heart';
  x: number;
  size: number;
  color: string;
  duration: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const balloonColors = [
    'hsl(var(--primary))',
    'hsl(var(--celebration-blue))',
    'hsl(var(--celebration-green))',
    'hsl(var(--celebration-orange))',
    'hsl(var(--celebration-purple))',
    'hsl(var(--accent))'
  ];

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      
      // Create floating balloons and confetti
      for (let i = 0; i < 6; i++) {
        newElements.push({
          id: `element-${i}-${Date.now()}`,
          type: Math.random() > 0.5 ? 'balloon' : 'confetti',
          x: Math.random() * 100,
          size: 10 + Math.random() * 15,
          color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
          duration: 8 + Math.random() * 4
        });
      }

      setElements(newElements);
    };

    createElements();
    
    // Recreate elements periodically
    const interval = setInterval(createElements, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute animate-float ${
            element.type === 'balloon' ? 'rounded-full' : 'rounded-sm'
          }`}
          style={{
            left: `${element.x}%`,
            width: `${element.size}px`,
            height: element.type === 'balloon' ? `${element.size * 1.2}px` : `${element.size}px`,
            backgroundColor: element.color,
            animationDuration: `${element.duration}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.7,
            filter: 'blur(0.5px)',
          }}
        >
          {element.type === 'balloon' && (
            <div
              className="absolute bottom-0 left-1/2 w-px bg-gray-400"
              style={{
                height: `${element.size * 0.8}px`,
                transform: 'translateX(-50%)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;