import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import feature1 from "@/assets/feature-1.jpg";
import feature2 from "@/assets/feature-2.jpg";
import feature3 from "@/assets/feature-3.jpg";

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
      <footer className="relative py-20 border-t border-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
          <p className="text-muted-foreground mb-8">Pre-register now and get exclusive launch rewards!</p>
          
          <div className="flex gap-4 justify-center mb-12">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Discord
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              YouTube
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Your Game Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
