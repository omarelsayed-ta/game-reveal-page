import { Button } from "@/components/ui/button";
import { MobileMockup } from "./MobileMockup";
import { ArrowRight, Bell } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

export const HeroSection = () => {
   const [open, setOpen] = useState(false);

  const handlePreRegisterClick = () => {
    // 1) Track TikTok event
    window.ttq?.track("ClickButton", { button_name: "Pre-Register" });

    // 2) Open the modal with the Google Form
    setOpen(true);
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Diagonal Stripes */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]">
        {/* Diagonal Stripes Overlay */}
       <div className="absolute inset-0 diagonal-stripes opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
          
          {/* Additional neon accents */}
          <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Logo Space */}
        <div className="flex justify-center mb-8 md:mb-12">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-background/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        <img
          src={logo}   // 👈 replace with your image path
          alt="شعار اللعبة"
          className="object-contain w-full h-full"
        />
        </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-right space-y-6 md:space-y-8" dir='rtl'>
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/30 border-2 border-primary text-sm font-white text-white uppercase tracking-wider backdrop-blur-sm shadow-[var(--glow-primary)]" >
                قريبا في الأسواق 2025
              </span>
            </div>

           <h1
              dir="rtl"
              className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tight text-right">
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] font-kufam">
                سجل الآن في لعبة
              </span>
              <br />
              <span className="text-primary drop-shadow-[0_0_50px_rgba(184,255,0,0.8)] animate-pulse font-kufam">
                سوبر بلوت
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] font-kufam">
                والعبها قبل الجميع
              </span>
            </h1>

            <p
              dir="rtl"
              className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 font-semibold font-cairo text-right">
              سوبر بلوت هي أسرع لعبة بلوت سعودية أونلاين،
              تلعبها مع خويك أو ضد محترفين من كل المملكة.
              كل فوز يقربك من دوري النخبة،
              ومع نظام عادل يمنع الغش بتعيش أجواء تحدي أصيلة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-kufam">
              <Button
                variant="hero"
                size="lg"
                className="group font-kufam"
                onClick={handlePreRegisterClick}
              >
                <Bell className="mr-2 h-5 w-5"  />
                سجل الآن!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8">
              <div className="relative">
                <div className="text-3xl font-black text-primary drop-shadow-[0_0_20px_rgba(184,255,0,0.6)]">50K+</div>
                <div className="text-sm text-gray-400 font-bold uppercase font-kufam">عدد المسجلين</div>
              </div>
              <div className="relative">
                <div className="text-3xl font-black text-primary drop-shadow-[0_0_20px_rgba(184,255,0,0.6)]">4.9★</div>
                <div className="text-sm text-gray-400 font-bold uppercase font-kufam">التقييم المتوقع</div>
              </div>
              <div className="relative">
                <div className="text-3xl font-black text-primary drop-shadow-[0_0_20px_rgba(184,255,0,0.6)]">62</div>
                <div className="text-sm text-gray-400 font-bold uppercase font-kufam">الأيام المتبقية</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <MobileMockup className="animate-float" />
          </div>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
