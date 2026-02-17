import{Button} from '@/components/Button';
import {AnimatedBorderButton} from '@/components/AnimatedBorderButton';
import { ArrowRight ,Download ,Github, Linkedin, TwitterIcon,ChevronDown} from 'lucide-react';


const skills = [
  "React",
  "JavaScript",
  "Python",
  // "Next.js",
  // "TypeScript",
  "Node.js",
  // "GraphQL",
  "PostgreSQL",
  "MongoDB",
  // "Redis",
  // "Docker",
  // "AWS",
  "Vercel",
  "Tailwind CSS",
  // "Prisma",
  // "Jest",
  // "Cypress",
  "Figma",
  "Git",
  "GitHub Actions",
];

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
                <AnimatedBorderButton />
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">Follow me:</span>
                {[{icon: Github, href:"https://github.com/Aditya1v"} , 
                  {icon: Linkedin , href: "https://www.linkedin.com/in/aditya1v/"},
                  {icon: TwitterIcon , href: "https://x.com/AdityaDevboy"},
                ].map((social ,idx) => (
                  <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                    {<social.icon className="w-5 h-5"/>}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column -Profile Image */}
            <div className="relative animate-fade-in animation-delay-300">

              {/* Profile Image */}
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                <div className="realtive glass rounded-3xl p-2 glow-border">
                  <img src="/profile-pic1.png" alt="Aditya Verma" className="w-full aspect-4/5  object-cover rounded-2xl"/>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Hii..👋🏻
                    </span>
                  </div>
                </div>

              </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">Technology I work with</p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills,...skills].map((skill,idx) => (
                  <div key={idx} className="shrink-0 px-8 py-4">
                    <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll button */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
    </section>
  );
};