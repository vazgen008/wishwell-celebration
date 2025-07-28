import { useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendName: string;
  videoUrl?: string;
}

const VideoModal = ({ isOpen, onClose, friendName, videoUrl }: VideoModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-auto bg-gradient-card border-0 shadow-celebration p-0 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-celebration p-6 text-white">
          <h2 className="text-2xl font-bold text-center">
            Birthday Message from {friendName} 🎬
          </h2>
          
          <DialogClose className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
        </div>

        {/* Video content */}
        <div className="p-6">
          {videoUrl ? (
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-soft">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
                onError={() => {
                  console.log('Video failed to load');
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            // Placeholder when no video is provided
            <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center text-center p-8">
              <div className="space-y-4">
                <div className="text-6xl">🎥</div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {friendName}'s Video Message
                </h3>
                <p className="text-muted-foreground max-w-md">
                  This is where {friendName}'s personalized birthday video would play! 
                  For now, imagine their warm birthday wishes and happy memories you've shared together. 🎂✨
                </p>
                <div className="flex justify-center gap-2 text-3xl mt-6">
                  <span className="animate-bounce">🎉</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎈</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎁</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🍰</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer message */}
        <div className="bg-muted/30 p-4 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Wishing you the happiest of birthdays! 🎂" - {friendName}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;