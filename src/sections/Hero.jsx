import{Button} from '@/components/Button';
import {AnimatedBorderButton} from '@/components/AnimatedBorderButton';
import { ArrowRight ,Download} from 'lucide-react';

export const Hero= () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Bg */}
      <div className="absolute inset-0">
        <img  src="/hero-bg-1.jpg" alt="Hero-image" className="w-full h-full object-cover opacity-50"/>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background"/>

      {/* Blue Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_,i) => (
          <div 
            className="absolute w-2 h-2 rounded-full opacit-60 blur-xs"
            style={{
              backgroundColor:"#2f73da",
              left: `${Math.random()* 100}%`,
              top: `${Math.random()* 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column -Text Content */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                  Web Developer • Frontend Specialist
                </span>
              </div>
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Making <span className="text-primary glow-text"> Ideas</span>
                  <br />
                  to be <span className="font-serif italic font-normal text-white"> happen.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                  Hi, I'm Aditya Verma - a web developer specializing in Frontend technology. I build scalable, performant web applications that users love.
                </p>
              </div>
              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button size="lg">
                  Contact Me<ArrowRight className="w-5 h-5"/>
                </Button>
                <AnimatedBorderButton>
                  
                </AnimatedBorderButton>
              </div>
            </div>
            {/* Right Column -Profile Image */}
          </div>
        </div>
    </section>
  );
};