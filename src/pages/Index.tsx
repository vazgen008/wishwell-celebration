import HeroSection from '@/components/HeroSection';
import WishesSection from '@/components/WishesSection';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  // You can customize the birthday person's name here
  const birthdayPersonName = "Beautiful Soul";

  return (
    <div className="min-h-screen">
      {/* Background music player */}
      <MusicPlayer />
      
      {/* Floating decorative elements */}
      <FloatingElements />
      
      {/* Main content */}
      <HeroSection birthdayPersonName={birthdayPersonName} />
      <WishesSection />
    </div>
  );
};

export default Index;
