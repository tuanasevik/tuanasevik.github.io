'use client';

import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTravel, setCurrentTravel] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const travelRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [heroRef, aboutRef, projectsRef, travelRef, contactRef];

  // Project data for slideshow
  const projects = [
    {
      title: "Whisper of the Woods - Deep Space Game",
      description: "Interactive game, constructed for the Ars Electronica Center's Deep Space, where the players have to save a magical tree. To gain energy points they have to collect the objects on the ground all together. This project was showcased at the PANIC Festival 2025 in Linz, Austria.",
      image: "/img/projects-page/DeepSpace.mp4",
      tech: ["Unity", "C#", "Pharus Tracking", "Cinema4D"],
      gradient: "from-primary/80 to-primary/50"
    },
    {
      title: "Pepper Robot Games for the elderly",
      description: "A software dedicated to the elderly to play games with the humanoid robot Pepper. A collection of different games to keep them engaged and active in the elderly home. Pepper engages with the people while playing, by talking and showcasing different gestures.",
      image: "/img/projects-page/Pepper.jpeg",
      tech: ["Kotlin", "Softbank Pepper Humanoid Robot", "Softbank Robotics Software"],
      gradient: "from-primary/50 to-primary/30"
    },
    {
      title: "Eco Home - VR Game",
      description: "A sustainable living game, where the player learns how to seperate waste, reduce energy consumption and water usage. This is realized in a virtual reality home, by clearing different rooms the player can finish the game and win - win the knowledge on how to save our planet.",
      image: "/img/projects-page/eco-home.mp4",
      tech: ["Unity", "C#", "Virtual Reality", "Cinema4D"],
      gradient: "from-primary to-primary/70"
    },
      {
        title: "Roomie - Video Chat App",
        description: "Roomie is a video chat app, where users can create their own rooms with an unique name and password, then share these so friends can join. When inside the room, you can video/audio call and text with each other. Your created rooms will be saved and the texts inside as well. Connecting with your friends all over the world in just a few seconds, registration not even required.",
        image: "/img/projects-page/roomie.png",
        tech: ["Agora RTC", "Next.js", "Node.js", "PostgreSQL", "Docker"],
        gradient: "from-primary/60 to-primary/40"
      },
      {
        title: "Sketches - Mixed Media Project",
        description: "An innovative mixed media project combining digital and traditional art, interactive elements, and creative storytelling. It is a collection of different sketches, that are combined to create a story that carries emotion by using different art mediums in a creative way.",
        image: "/img/projects-page/MixedMedia.mp4",
        tech: ["After Effects", "Premiere Pro", "Photoshop", "Creative Suite"],
        gradient: "from-primary/50 to-primary/30"
      },
      {
        title: "Collabo Rhythm - Music with friends",
        description: "Collaborative music streaming platform, on which users can create playlists together and listen to them in real-time. A fusion of music streaming services and social media platforms, to combine what unites us the most: music. Invite your friends and the listening party can begin!",
        image: "/img/projects-page/Collabo_Rythm.png",
        tech: ["PHP", "MySQL", "Node.js", "Docker"],
        gradient: "from-primary/30 to-primary/10"
      }
  ];

  // Travel data for slideshow (24 images total, show 3 at a time)
  const travelDestinations = [
    { name: "London", image: "/img/travel-page/london.JPG" },
    { name: "Amsterdam", image: "/img/travel-page/amsterdam.JPG" },
    { name: "Paris", image: "/img/travel-page/paris.JPG" },
    { name: "Barcelona", image: "/img/travel-page/barcelona.JPG" },
    { name: "Cappadocia", image: "/img/travel-page/kapadokya.jpg" },
    { name: "Berlin", image: "/img/travel-page/berlin.jpg" },
    { name: "Lisbon", image: "/img/travel-page/lissabon.jpg" },
    { name: "Tunis", image: "/img/travel-page/tunis.jpg" },
    { name: "Vienna", image: "/img/travel-page/vienna.jpg" },
    { name: "Pisa", image: "/img/travel-page/pisa.jpg" },
    { name: "Monaco", image: "/img/travel-page/monaco.jpg" },
    { name: "Alanya", image: "/img/travel-page/alanya.jpg" },
    { name: "Naples", image: "/img/travel-page/naples.jpg" },
    { name: "Marseille", image: "/img/travel-page/marseille.jpg" },
    { name: "Prague", image: "/img/travel-page/prague.jpg" },
    { name: "Antalya", image: "/img/travel-page/antalya.jpg" },
    { name: "Florence", image: "/img/travel-page/florenz.jpg" },
    { name: "Avanos", image: "/img/travel-page/avanos.jpg" },
    { name: "Genoa", image: "/img/travel-page/genoa.jpg" },
    { name: "Milan", image: "/img/travel-page/mailand.jpg" },
    { name: "Portofino", image: "/img/travel-page/portofino.jpg" },
    { name: "Munich", image: "/img/travel-page/munich.JPG" },
    { name: "Nice", image: "/img/travel-page/nice.jpg" },
    { name: "Palermo", image: "/img/travel-page/palermo.jpg" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine current section based on scroll position
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  // Custom cursor effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (index: number) => {
    const targetSection = sections[index];
    if (targetSection.current) {
      targetSection.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    // Dynamically import ScrollReveal to avoid SSR issues
    const initScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      
      const sr = ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 400,
        reset: false,
        easing: 'ease-in-out'
      });

    // Hero section animations
    if (heroRef.current) {
      const h1 = heroRef.current.querySelector('h1');
      const textContent = heroRef.current.querySelector('.space-y-4');
      const buttons = heroRef.current.querySelectorAll('button');
      
      if (h1) sr.reveal(h1, { delay: 100, origin: 'left', scale: 0.9 });
      if (textContent) sr.reveal(textContent as HTMLElement, { delay: 200, origin: 'left' });
      if (buttons.length) sr.reveal(buttons as NodeListOf<HTMLElement>, { delay: 300, origin: 'left', interval: 100 });
    }

    // About section animations
    if (aboutRef.current) {
      const h2 = aboutRef.current.querySelector('h2');
      const paragraphs = aboutRef.current.querySelectorAll('p');
      const skills = aboutRef.current.querySelector('.skills');
      const skillTags = aboutRef.current.querySelectorAll('.skills span');
      const imageContainer = aboutRef.current.querySelector('.relative');
      
      if (h2) sr.reveal(h2, { delay: 100, origin: 'left', scale: 0.9 });
      if (paragraphs.length) sr.reveal(paragraphs, { delay: 200, origin: 'left', interval: 100 });
      if (skills) sr.reveal(skills as HTMLElement, { delay: 300, origin: 'left' });
      if (skillTags.length) sr.reveal(skillTags as NodeListOf<HTMLElement>, { delay: 400, origin: 'bottom', interval: 50, scale: 0.9 });
      if (imageContainer) sr.reveal(imageContainer as HTMLElement, { delay: 500, origin: 'right', scale: 0.9 });
    }

    // Projects section animations
    if (projectsRef.current) {
      const h2 = projectsRef.current.querySelector('h2');
      const description = projectsRef.current.querySelector('p');
      const projectCard = projectsRef.current.querySelector('.relative');
      const navArrows = projectsRef.current.querySelectorAll('button');
      const dots = projectsRef.current.querySelectorAll('.flex.justify-center button');
      
      if (h2) sr.reveal(h2, { delay: 100, origin: 'top', scale: 0.9 });
      if (description) sr.reveal(description, { delay: 200, origin: 'top' });
      if (projectCard) sr.reveal(projectCard as HTMLElement, { delay: 300, origin: 'bottom', scale: 0.9 });
      if (navArrows.length) sr.reveal(navArrows as NodeListOf<HTMLElement>, { delay: 400, origin: 'left', interval: 100 });
      if (dots.length) sr.reveal(dots as NodeListOf<HTMLElement>, { delay: 500, origin: 'bottom', interval: 50 });
    }

    // Travel section animations
    if (travelRef.current) {
      const h2 = travelRef.current.querySelector('h2');
      const description = travelRef.current.querySelector('p');
      const slideshow = travelRef.current.querySelector('.relative');
      const navArrows = travelRef.current.querySelectorAll('button');
      const dots = travelRef.current.querySelectorAll('.flex.justify-center button');
      const stats = travelRef.current.querySelectorAll('.grid > div');
      
      if (h2) sr.reveal(h2, { delay: 100, origin: 'top', scale: 0.9 });
      if (description) sr.reveal(description, { delay: 200, origin: 'top' });
      if (slideshow) sr.reveal(slideshow as HTMLElement, { delay: 300, origin: 'bottom', scale: 0.9 });
      if (navArrows.length) sr.reveal(navArrows as NodeListOf<HTMLElement>, { delay: 400, origin: 'left', interval: 100 });
      if (dots.length) sr.reveal(dots as NodeListOf<HTMLElement>, { delay: 500, origin: 'bottom', interval: 50 });
      if (stats.length) sr.reveal(stats as NodeListOf<HTMLElement>, { delay: 600, origin: 'bottom', interval: 75, scale: 0.9 });
    }

    // Contact section animations
    if (contactRef.current) {
      const h2 = contactRef.current.querySelector('h2');
      const description = contactRef.current.querySelector('p');
      const contactInfo = contactRef.current.querySelector('.contact-info');
      const buttons = contactRef.current.querySelectorAll('.contact-info button');
      const footerText = contactRef.current.querySelector('.text-muted');
      
      if (h2) sr.reveal(h2, { delay: 100, origin: 'top', scale: 0.8 });
      if (description) sr.reveal(description, { delay: 200, origin: 'top' });
      if (contactInfo) sr.reveal(contactInfo as HTMLElement, { delay: 300, origin: 'bottom' });
      if (buttons.length) sr.reveal(buttons as NodeListOf<HTMLElement>, { delay: 400, origin: 'bottom', interval: 100, scale: 0.9 });
      if (footerText) sr.reveal(footerText as HTMLElement, { delay: 500, origin: 'top' });
    }

      return () => {
        sr.destroy();
      };
    };

    initScrollReveal();
  }, []);

  return (
    <div className="bg-background">
      {/* Earth Aura Background Effects - Global */}
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      <div className="earth-aura"></div>
      
      {/* Custom Cursor */}
      <div 
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        style={{ 
          left: cursorPosition.x - 4, 
          top: cursorPosition.y - 4 
        }}
      />
      <div 
        className={`cursor-outline ${isHovering ? 'hover' : ''}`}
        style={{ 
          left: cursorPosition.x - 20, 
          top: cursorPosition.y - 20 
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto" style={{ padding: '1rem 0' }}>
          <div className="flex items-center justify-between" style={{ padding: '0 3rem' }}>
            <button 
              onClick={() => scrollToSection(0)}
              className="text-2xl font-normal gradient-text interactive-element earth-accent-text"
            >
              {currentSection === 0 ? 'Portfolio' : 'Tuana Sevik'}
            </button>
            <div className="hidden md:flex" style={{ gap: '3rem', marginRight: '4rem' }}>
              {['About', 'Projects', 'Travel', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index + 1)}
                  className={`text-foreground hover:text-primary transition-colors hover-slide interactive-element`}
                  style={currentSection === index + 1 ? { color: 'var(--accent)' } : {}}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden text-foreground interactive-element earth-accent-text" style={{ marginRight: '4rem' }}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Earth accent line under header */}
        <div className="earth-accent-line"></div>
      </nav>

      {/* Hero Section - Modern Portfolio Layout */}
      <section ref={heroRef} className="fullscreen-section bg-gradient-to-br from-primary/5 to-background paper-texture relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center space-y-8 items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold gradient-text heading-font leading-tight" style={{ letterSpacing: '0.05em' }}>
                  Tuana Sevik
                </h1>
                <p className="text-xl text-muted font-light">
                  Creative Software Developer & Artist
                </p>
                <p className="text-base text-muted/80 max-w-lg">
                  Based in Austria • Bringing ideas to life through code and creativity
                </p>
              </div>
              
              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4" style={{ paddingTop: '1rem' }}>
                <button 
                  onClick={() => scrollToSection(2)}
                  className="bg-primary text-background rounded-full font-semibold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-xl"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Explore My Work
                </button>
                <button 
                  onClick={() => scrollToSection(4)}
                  className="border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-xl"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Vertical Moving Photo Gallery */}
            <div className="relative h-full min-h-[600px] w-full overflow-hidden flex justify-center">
              <div className="flex gap-8 w-full max-w-4xl">
                {/* Left Column - Moving Down */}
                <div className="w-1/3 overflow-hidden">
                  <div className="flex flex-col gap-8 w-full moving-column-1">
                    {/* Duplicate images for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/RealFlare_Sevik.webp" 
                          alt="Tuana Sevik - Creative Work" 
                          className="w-full h-full rounded-2xl"
                          priority={true}
                          quality={80}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/HDR_Sevik.webp" 
                          alt="HDR Photography" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/fokus_stacking_sevik.webp" 
                          alt="Focus Stacking Photography" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload2SS_04.webp" 
                          alt="Workload Screenshot 2" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/RealFlare_Sevik.webp" 
                          alt="Tuana Sevik - Creative Work" 
                          className="w-full h-full rounded-2xl"
                          priority={true}
                          quality={80}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/HDR_Sevik.webp" 
                          alt="HDR Photography" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/fokus_stacking_sevik.webp" 
                          alt="Focus Stacking Photography" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload2SS_04.webp" 
                          alt="Workload Screenshot 2" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Middle Column - Moving Up */}
                <div className="w-1/3 overflow-hidden">
                  <div className="flex flex-col gap-8 w-full moving-column-2">
                    {/* Duplicate images for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload1SS_01.webp" 
                          alt="Workload Screenshot 1" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_6.webp" 
                          alt="Best of Photography" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_8.webp" 
                          alt="Best of Photography 2" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload2SS_05.webp" 
                          alt="Workload Screenshot 4" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload1SS_01.webp" 
                          alt="Workload Screenshot 1" 
                          className="w-full h-full rounded-2xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_6.webp" 
                          alt="Best of Photography" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_8.webp" 
                          alt="Best of Photography 2" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload2SS_05.webp" 
                          alt="Workload Screenshot 4" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Moving Down */}
                <div className="w-1/3 overflow-hidden">
                  <div className="flex flex-col gap-8 w-full moving-column-3">
                    {/* Duplicate images for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload3SS_01.webp" 
                          alt="Workload Screenshot 3" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload3SS_02.webp" 
                          alt="Workload Screenshot 5" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/RenderedFlare_Sevik.webp" 
                          alt="Rendered Flare" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_9.webp" 
                          alt="Best of Photography 3" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                    {/* Duplicate for seamless loop */}
                    <div className="flex flex-col gap-8 w-full">
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload3SS_01.webp" 
                          alt="Workload Screenshot 3" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/Sevik_Workload3SS_02.webp" 
                          alt="Workload Screenshot 5" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/RenderedFlare_Sevik.webp" 
                          alt="Rendered Flare" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                      <div className="w-full h-64 gallery-image">
                        <OptimizedImage 
                          src="/img-optimized/hero-page/bestof_9.webp" 
                          alt="Best of Photography 3" 
                          className="w-full h-full rounded-xl"
                          quality={75}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="fullscreen-section bg-gradient-to-br from-primary/5 to-background paper-texture">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold gradient-text heading-font" style={{ marginBottom: '1.5rem' }}>About Me</h2>
            <p className="text-base text-muted leading-relaxed" style={{ marginBottom: '0.75rem' }}>
            I&apos;m a creative software developer who loves blending logic with imagination to bring 
            ideas to life. With a strong background in IT-Mediatechnology (HTL Leonding, graduated 2025) and experience in areas from robotics to game development, and I&apos;m always eager to explore the latest tech trends.
            </p>
            <p className="text-base text-muted leading-relaxed" style={{ marginBottom: '1.5rem' }}>
            I enjoy challenges like the Advent of Code, and outside of coding I find inspiration in 
            music, reading, drawing, and my love for nature and animals. Open-minded and curious, 
            I strive to combine professionalism with creativity in everything I do.
            </p>
            <div className="skills flex flex-wrap gap-2" style={{ marginTop: '0.25rem' }}>
              <span 
                className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg" 
                style={{ padding: '0.375rem 0.75rem' }}
              >
                Software & Game Developer
              </span>
              <span 
                className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg" 
                style={{ padding: '0.375rem 0.75rem' }}
              >
                Web & Mobile Apps
              </span>
              <span 
                className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg" 
                style={{ padding: '0.375rem 0.75rem' }}
              >
                Robotics
              </span>
              <span 
                className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg" 
                style={{ padding: '0.375rem 0.75rem' }}
              >
                Creative Media & Design
              </span>
              <span 
                className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg" 
                style={{ padding: '0.375rem 0.75rem' }}
              >
                Databases
              </span>
            </div>
          </div>
          <div className="relative">
            <OptimizedImage 
              src="/img-optimized/about-page/about2.webp" 
              alt="Tuana Sevik" 
              className="w-full h-96 rounded-3xl shadow-2xl hover-glow interactive-element"
              quality={85}
            />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg flex items-center justify-center hover-scale interactive-element">
              <span className="text-4xl">🌿</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="fullscreen-section bg-gradient-to-br from-primary/5 to-background paper-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text heading-font text-center">Featured Projects</h2>
          </div>

          {/* Project Slideshow */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 earth-accent-border" style={{ padding: '0 2rem 2rem 2rem' }}>
              {/* Project Image/Video */}
              <div className="w-full h-80 rounded-2xl mb-6 overflow-hidden bg-background/20 flex items-center justify-center relative">
                {projects[currentProject].image.endsWith('.mp4') ? (
                  <video
                    src={projects[currentProject].image}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                ) : (
                  <OptimizedImage
                    src={projects[currentProject].image.replace('/img/', '/img-optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    alt={projects[currentProject].title}
                    className="w-full h-full"
                    quality={85}
                  />
                )}
                
                {/* Navigation arrows */}
                <button
                  onClick={() => setCurrentProject((prev) => prev === 0 ? projects.length - 1 : prev - 1)}
                  className="absolute left-4 w-16 h-16 bg-primary text-background rounded-full transition-all duration-300 hover:-translate-x-1 hover:bg-accent interactive-element flex items-center justify-center earth-accent-shadow text-xl font-bold"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentProject((prev) => prev === projects.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 w-16 h-16 bg-primary text-background rounded-full transition-all duration-300 hover:translate-x-1 hover:bg-accent interactive-element flex items-center justify-center earth-accent-shadow text-xl font-bold"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                >
                  →
                </button>
              </div>
              
              <div style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 className="text-2xl font-bold gradient-text" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>{projects[currentProject].title}</h3>
                  <p className="text-muted text-base leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2" style={{ marginTop: '1.5rem' }}>
                {projects[currentProject].tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/10 text-primary rounded-full text-sm font-semibold interactive-element earth-accent-border transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-lg"
                    style={{ padding: '0.375rem 0.75rem' }}
                  >
                    {tech}
                  </span>
                ))}
                </div>
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-3" style={{ marginTop: '1rem' }}>
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-primary/70 ${
                    index === currentProject ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Section */}
      <section ref={travelRef} className="fullscreen-section bg-gradient-to-br from-primary/5 to-background paper-texture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text heading-font" style={{ marginBottom: '1.5rem' }}>Travel Adventures</h2>
            <div className="flex justify-center">
              <p className="text-lg text-muted max-w-3xl leading-relaxed" style={{ textAlign: 'center' }}>
                Exploring the world, one destination at a time. Here are some of my favorite memories.
              </p>
            </div>
          </div>

          {/* Travel Slideshow - Show 3 objects, slide by 3 */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out gap-6 justify-center">
                {travelDestinations.slice(currentTravel * 3, currentTravel * 3 + 3).map((destination, index) => (
                  <div key={index}>
                    <div>
                           <div className="rounded-lg shadow-2xl" style={{ padding: '1rem 1rem 2rem 1rem', height: '420px', width: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f5f1e8' }}>
                        <div className="w-full h-80 overflow-hidden rounded-sm mb-3">
                          <OptimizedImage
                            src={destination.image.replace('/img/', '/img-optimized/').replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                            alt={destination.name}
                            className="w-full h-full hover:scale-110 transition-transform duration-300"
                            quality={80}
                          />
                        </div>
                             <h3 className="text-4xl font-semibold text-gray-800 text-center" style={{ fontFamily: 'var(--font-permanent-marker)', fontStyle: 'italic', marginTop: 'auto' }}>{destination.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={() => setCurrentTravel((prev) => prev === 0 ? 7 : prev - 1)}
              className="absolute -left-20 w-16 h-16 bg-primary text-background rounded-full transition-all duration-300 hover:-translate-x-1 hover:bg-accent interactive-element flex items-center justify-center earth-accent-shadow text-xl font-bold"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              ←
            </button>
            <button 
              onClick={() => setCurrentTravel((prev) => prev === 7 ? 0 : prev + 1)}
              className="absolute -right-20 w-16 h-16 bg-primary text-background rounded-full transition-all duration-300 hover:translate-x-1 hover:bg-accent interactive-element flex items-center justify-center earth-accent-shadow text-xl font-bold"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              →
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center space-x-3" style={{ marginTop: '1rem' }}>
              {Array.from({ length: Math.ceil(travelDestinations.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTravel(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 hover:shadow-xl hover:bg-primary/70 ${
                    index === currentTravel ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Travel Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center" style={{ marginTop: '2.5rem' }}>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted text-sm">Cities Explored</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted text-sm">Countries Visited</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">3</div>
              <div className="text-muted text-sm">Continents</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">∞</div>
              <div className="text-muted text-sm">Memories Made</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="fullscreen-section bg-gradient-to-br from-primary/5 to-background paper-texture">
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col">
          {/* Main Content - Centered */}
          <div className="flex-1 flex flex-col justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text heading-font" style={{ marginBottom: '3rem' }}>Let&apos;s Connect</h2>
              <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed" style={{ marginBottom: '3rem' }}>
                Ready to discuss exciting projects and opportunities. Let&apos;s connect and explore how we can work together to create something meaningful.
              </p>
            
            <div className="contact-buttons flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:tuanasevik@icloud.com" 
                 className="flex items-center gap-4 border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-xl"
                 style={{ padding: '0.5rem 1rem' }}>
                <span className="text-3xl">📧</span>
                <span>Email Me</span>
              </a>
              
              <a href="https://www.linkedin.com/in/tuana-sevik-8502aa383?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIhlixgUBSV2IJcyAMDeEeQ%3D%3D" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-4 border-2 border-primary text-primary rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-background hover:scale-105 hover:shadow-xl"
                 style={{ padding: '0.5rem 1rem' }}>
                <span className="text-3xl">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Bottom Section - Footer */}
          <div style={{ paddingBottom: '1.5rem' }}>

            {/* Footer */}
            <div className="border-t border-primary/20" style={{ paddingTop: '1.5rem' }}>
              <div className="text-center text-sm text-muted">
                <p>© 2025 Tuana Sevik. All rights reserved.</p>
                <p className="mt-1">All photos and videos are my own work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

