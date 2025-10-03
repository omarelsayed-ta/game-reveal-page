import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export const FeatureSection = ({ title, description, image, reverse }: FeatureSectionProps) => {
  const [open, setOpen] = useState(false);
  
    const handlePreRegisterClick = () => {
      // 1) Track TikTok event
      window.ttq?.track("Download", { button_name: "Pre-Register" });
  
      // 2) Open the modal with the Google Form
      setOpen(true);
    };
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 diagonal-stripes opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Portrait Image - Always on left on desktop */}
          <div className="relative group lg:w-[320px] flex-shrink-0">
            <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300 border-2 border-primary/30">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
              />
              
            </div>
            
            {/* Intense Glow Effect */}
            <div className="absolute -inset-4 bg-primary/30 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content - Always beside image */}
          <div className="space-y-6 flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] font-kufam">
              {title}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed font-medium font-cairo">
              {description}
            </p>

            <div className="flex gap-4 pt-4">
              <div className="flex-1 p-4 rounded-lg bg-card border-2 border-primary/40 shadow-[0_0_20px_rgba(184,255,0,0.2)]"  onClick={handlePreRegisterClick}>
                <div className="text-2xl font-black text-primary drop-shadow-[0_0_10px_rgba(184,255,0,0.8)] font-kufam">سجل الآن!</div>
                <div className="text-sm text-gray-400 font-bold uppercase font-kufam" >لتحصل عليها قبل الجميع</div>
              </div>
             
            </div>
               {/* Modal with embedded Google Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl h-[90vh] p-0">
          <DialogHeader>
            <DialogTitle className="p-4 font-kufam">سجل الآن!</DialogTitle>
          </DialogHeader>
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfer-oe8mOWszZ8dAIXPCy6VTOxEHV9JFj9jbgGHhSwV0lxUw/viewform?embedded=true" 
            width="100%"
            height="100%"
            style={{ border: "none" }}>

            </iframe>
        </DialogContent>
      </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
