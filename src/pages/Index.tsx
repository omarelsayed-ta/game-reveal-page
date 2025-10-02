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
        title="اربح أكثر لين توصل دوري النخبة"
        description="كل فوز يقربك خطوة من القمة، ارفع رُتبك واثبت إنك تستاهل مكانك بين نخبة لاعبين البلوت"
        image={feature1}
      />

      <FeatureSection 
        title="توزيع عادل وما في غش"
        description="توزيع الورق يعتمد على نظام ذكي يمنع أي تلاعب ويضمن إن كل جولة عادلة وتنافسية %100"
        image={feature2}
        reverse
      />

      <FeatureSection 
        title="استخدم كروت المخاطرة  لتضاعف مكاسبك"
        description="جازف باستخدام كروت المخاطرة، وإذا لعبتها صح راح تكبر أرباحك وتضاعف نقاطك"
        image={feature3}
      />

      <FeatureSection 
        title="أسرع رتم بلوت جرّبته بحياتك"
        description="استمتع بجولات سريعة ومليانة حماس، تلعب أكثر بوقت أقل وتفوز أسرع من أي لعبة ثانية"
        image={feature3}
      />

      <FeatureSection  
        title="تواصل مع خويك بسهولة"
        description="لا تحتاج مايك ولا كتابة، بنقرة وحدة ترسل إشارة وتفهم خويك فورًا داخل اللعب"
        image={feature3}
      />

      {/* Footer */}
      <footer className="relative py-20 border-t border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5" />
        <div className="absolute inset-0 diagonal-stripes opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-black mb-4 uppercase text-white font-kufam">مستعد للمنافسة في دوري النخبة؟</h3>
          <p className="text-gray-300 mb-8 font-semibold font-kufam">سجل في سوبر بلوت الآن واستعد للمنافسة الأقوى</p>
          
         
          
          <p className="text-sm text-gray-500 font-semibold">
            © 2025 Kingdom Games. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
