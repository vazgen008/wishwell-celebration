import { useState } from 'react';
import FriendCard from './FriendCard';
import VideoModal from './VideoModal';

// Import friend images
import armenImage from '@/assets/friend-armen.jpg';
import liloImage from '@/assets/friend-lilo.jpg';
import susoImage from '@/assets/friend-suso.jpg';
import dinaImage from '@/assets/friend-dina.jpg';
import hrachImage from '@/assets/friend-hrach.jpg';
import milenImage from '@/assets/friend-milen.jpg';

interface Friend {
  name: string;
  image: string;
  videoUrl?: string;
}

const friends: Friend[] = [
  { name: 'Armen', image: armenImage },
  { name: 'Lilo', image: liloImage },
  { name: 'Suso', image: susoImage },
  { name: 'Dina', image: dinaImage },
  { name: 'Hrach', image: hrachImage },
  { name: 'Milen', image: milenImage },
];

const WishesSection = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFriendClick = (friend: Friend) => {
    setSelectedFriend(friend);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFriend(null);
  };

  return (
    <section id="wishes-section" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Wishes from Friends ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your amazing friends have recorded special video messages just for you! 
            Click on each card to watch their heartfelt birthday wishes. 💕
          </p>
        </div>

        {/* Friends grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {friends.map((friend, index) => (
            <div
              key={friend.name}
              className="animate-float"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${3 + index * 0.2}s`,
              }}
            >
              <FriendCard
                name={friend.name}
                image={friend.image}
                onClick={() => handleFriendClick(friend)}
              />
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16 gap-8 text-4xl">
          {['🎈', '🎉', '🎂', '🎁', '✨', '💕'].map((emoji, index) => (
            <span
              key={index}
              className="animate-bounce-gentle opacity-60"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedFriend && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          friendName={selectedFriend.name}
          videoUrl={selectedFriend.videoUrl}
        />
      )}
    </section>
  );
};

export default WishesSection;