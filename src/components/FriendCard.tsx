import { Card } from '@/components/ui/card';

interface FriendCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const FriendCard = ({ name, image, onClick }: FriendCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group cursor-pointer bg-gradient-card border-0 shadow-card hover:shadow-celebration transition-all duration-500 hover:scale-105 transform-gpu will-change-transform overflow-hidden"
    >
      <div className="relative p-6">
        {/* Friend photo */}
        <div className="relative mb-4">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-white/50 shadow-soft">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Floating heart on hover */}
          <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-heart-beat">
            💕
          </div>
        </div>

        {/* Friend name */}
        <h3 className="text-xl font-semibold text-center text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        
        <p className="text-sm text-muted-foreground text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to see their message! 🎥
        </p>

        {/* Decorative elements */}
        <div className="absolute top-2 left-2 text-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300">
          ✨
        </div>
        <div className="absolute bottom-2 right-2 text-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300">
          🎉
        </div>
      </div>
    </Card>
  );
};

export default FriendCard;