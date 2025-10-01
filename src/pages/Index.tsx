import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <FeatureSection 
        title="Customize Your Legend"
        description="Choose from over 100 unique heroes, each with their own playstyle, abilities, and customization options. Build the perfect warrior and dominate the battlefield with your signature style. Unlock legendary skins, weapons, and effects as you progress through the ranks."
        image={feature1}
      />

      <FeatureSection 
        title="Epic Real-Time Battles"
        description="Engage in intense 5v5 multiplayer battles with players from around the world. Master strategic team compositions, coordinate with your squad, and execute perfectly timed combos to claim victory. Rise through the ranks and prove you're the ultimate champion."
        image={feature2}
        reverse
      />

      <FeatureSection 
        title="Join Forces with Friends"
        description="Form powerful guilds, participate in guild wars, and climb the leaderboards together. Voice chat integration, clan tournaments, and exclusive guild rewards await. Team up, strategize, and conquer as one unstoppable force in the ultimate social gaming experience."
        image={feature3}
      />

      {/* Footer */}
      <footer className="relative py-20 border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="absolute inset-0 diagonal-stripes opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-black mb-4 uppercase text-white">Ready to Begin Your Journey?</h3>
          <p className="text-gray-300 mb-8 font-semibold">Pre-register now and get exclusive launch rewards!</p>
          
          <div className="flex gap-6 justify-center mb-12">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-sm hover:drop-shadow-[0_0_10px_rgba(184,255,0,0.8)]">
              Discord
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-sm hover:drop-shadow-[0_0_10px_rgba(184,255,0,0.8)]">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-sm hover:drop-shadow-[0_0_10px_rgba(184,255,0,0.8)]">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors font-bold uppercase text-sm hover:drop-shadow-[0_0_10px_rgba(184,255,0,0.8)]">
              YouTube
            </a>
          </div>
          
          <p className="text-sm text-gray-500 font-semibold">
            © 2025 Your Gamesssss Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
