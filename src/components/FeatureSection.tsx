import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export const FeatureSection = ({ title, description, image, reverse }: FeatureSectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Portrait Image - Always on left on desktop */}
          <div className="relative group lg:w-[320px] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content - Always beside image */}
          <div className="space-y-6 flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {title}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 p-4 rounded-lg bg-card border border-primary/20">
                <div className="text-2xl font-bold text-primary">60 FPS</div>
                <div className="text-sm text-muted-foreground">Smooth Gameplay</div>
              </div>
              <div className="flex-1 p-4 rounded-lg bg-card border border-secondary/20">
                <div className="text-2xl font-bold text-secondary">HD</div>
                <div className="text-sm text-muted-foreground">Graphics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
