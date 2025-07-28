import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Create a simple birthday melody using Web Audio API
  useEffect(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createTone = (frequency: number, duration: number, startTime: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.1, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    const playBirthdaySong = () => {
      if (isMuted) return;
      
      const startTime = audioContext.currentTime;
      
      // Simple Happy Birthday melody (first few notes)
      const notes = [
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 261.63, duration: 0.5 }, // C
        { freq: 293.66, duration: 1.0 }, // D
        { freq: 261.63, duration: 1.0 }, // C
        { freq: 349.23, duration: 1.0 }, // F
        { freq: 329.63, duration: 2.0 }, // E
      ];
      
      let currentTime = startTime;
      notes.forEach(note => {
        createTone(note.freq, note.duration, currentTime);
        currentTime += note.duration;
      });
    };

    if (isPlaying && !isMuted) {
      playBirthdaySong();
      
      // Loop the song
      const interval = setInterval(() => {
        if (isPlaying && !isMuted) {
          playBirthdaySong();
        }
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-start music after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm shadow-soft hover:shadow-celebration transition-all duration-300"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;