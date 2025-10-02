import { cn } from "@/lib/utils";
import gameHero from "@/assets/game-hero.png";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MobileMockupProps {
  className?: string;
}

export const MobileMockup = ({ className }: MobileMockupProps) => {
  const [open, setOpen] = useState(false);

  const handlePreRegisterClick = () => {
    // 1) Track TikTok event
    window.ttq?.track("ClickButton", { button_name: "Pre-Register" });

    // 2) Open the modal with the Google Form
    setOpen(true);
  };
  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className="relative mx-auto w-[280px] h-[570px] bg-black rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-10" />
        
        {/* Screen Content - Video Placeholder */}
        <div className="absolute inset-0 p-3 pt-8">
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-green-900 to-green-600">
            {/* Game Screenshot as Video Placeholder */}
            <img 
              src={gameHero} 
              alt="Game preview" 
              className="w-full h-full object-cover animate-pulse"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center shadow-lg hover:scale-111 transition-transform cursor-pointer"  onClick={handlePreRegisterClick}>
                <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
      </div>

       {/* Modal with embedded Google Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl h-[90vh] p-0">
          <DialogHeader>
            <DialogTitle className="font-kufam">!سجل الآن</DialogTitle>
          </DialogHeader>
         <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfer-oe8mOWszZ8dAIXPCy6VTOxEHV9JFj9jbgGHhSwV0lxUw/viewform?embedded=true" 
            width="100%"
            height="100%"
            style={{ border: "none" }}>

            </iframe>
        </DialogContent>
      </Dialog>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
        <div className="absolute top-1/4 left-0 w-full h-1/2 bg-gradient-to-r from-primary to-secondary animate-pulse" />
      </div>
    </div>
  );
};
