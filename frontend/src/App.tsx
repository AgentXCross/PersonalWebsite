import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SkillDock from "./components/SkillDock";
import FirefliesBackground from "./components/FirefliesBackground";
import FireworksBackground from "./components/FireworksBackground";
import HexagonBackground from "./components/HexagonBackground";
import NeonBackground from "./components/NeonBackground";
import { CardContainer, CardBody, CardItem } from "./components/3DCard";

/* Image Imports */
import profileImg from "./assets/profile.png";
import wingLeft from "./assets/wing_left.png";
import wingRight from "./assets/wing_right.png";
import bibsImg from "./assets/bibs.jpg";
import sickKids from "./assets/sickkids.jpg";
import watai from "./assets/watai.png";
import utc from "./assets/utc.png";
import arxtract from "./assets/arxtract.png";
import hydraNet from "./assets/HydraLA-Net.png";
import sickKidsHospital from "./assets/sickkidshospital.jpg";
import wataiImage from "./assets/wataiimage.avif";
import utcImage from "./assets/utcimage.jpg";
import waterlooSeal from "./assets/uwaterloo_seel.svg";
import bcss from "./assets/bcss.png";
import bcssImage from "./assets/bcssimage.avif";
import waterlooimage from "./assets/waterlooimage.avif";
import warriorHelm from "./assets/warrior_helm.png";
import xcteam from "./assets/xcteam.jpg";
import torontoTrack from "./assets/uoft.png";
import tennisCanada from "./assets/tenniscanada.svg";
import uttcTeam from "./assets/uoftteam.jpg";
import avivaCentre from "./assets/avivacentre.jpg";

function App() {
  const fullText = "MICHAEL L.";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 140);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="text-white" style={{ backgroundColor: '#01030a' }}>
      <NavBar />
      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-start px-16 pt-24 pb-16 relative overflow-hidden">
        <HexagonBackground />
        <h1
          className="relative z-20 leading-none"
          style={{
            fontFamily: "'Klein Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "12rem",
            letterSpacing: "-0.02em"
          }}
        >
          {/* Invisible text for Placeholder */}
          <span className="invisible absolute">
            MICHAEL L.
          </span>

          {/* Visible Typed Title Text */}
          <span>
            {typedText}
          </span>

          {isTyping && (
            <span className="relative inline-block w-3">
              <span className="absolute left-0 top-0 h-full w-1 bg-white blink" />
            </span>
          )}
        </h1>
        <div className="relative z-10 mt-4 flex items-center justify-center">
          <img
            src={wingLeft}
            alt=""
            className="absolute object-contain mix-blend-screen"
            style={{ height: '475px', maxWidth: 'none', maxHeight: 'none', right: '-50%', top: '20%', transform: 'translateY(-50%) translateX(20%)' }}
          />
          <img src={profileImg} alt="Michael L." className="h-80 rounded-full relative z-10" />
          <img
            src={wingRight}
            alt=""
            className="absolute object-contain mix-blend-screen"
            style={{ height: '475px', maxWidth: 'none', maxHeight: 'none', left: '-50%', top: '20%', transform: 'translateY(-50%) translateX(-20%)' }}
          />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="fade-in-section flex flex-col items-start justify-start px-25 py-12 relative overflow-hidden">
        <FirefliesBackground count={40} speed={1} glowIntensity={1} />
        <CardContainer className="relative z-10 w-full" containerClassName="py-0 w-full">
          <CardBody className="w-full">
            <CardItem translateZ={20} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-8">
              <CardItem translateZ={10} className="w-full">
                <h2
                  className="text-white leading-none mb-8"
                  style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
                >
                  ABOUT ME
                </h2>
              </CardItem>
              <div className="flex gap-12 items-start w-full">
                <div
                  className="text-white/80 text-base leading-relaxed flex-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p>
                    Hi, I’m Michael! I'm a 1B Honours Mathematics student at the University of Waterloo 
                    with an intended major in Data Science. This summer, I’ll be joining the Hospital 
                    for Sick Children as an ML Research Assistant.
                  </p>
                  <p className="mt-3">
                    I'm currently part of a WAT.ai
                    Design Team, where my team is focused on
                    improving the semantic segmentation of small, low contrast
                    retinal lesions in fundus imaging through preprocessing and training strategies. 
                    I'm also co-authoring a research paper
                    detailing our methodology and results, to be released in late February 2026!
                  </p>
                  <p className="mt-3">
                    Outside academics, I have over four years of experience coaching tennis and 
                    compete as a Varsity Cross-Country athlete for the University of Waterloo.
                  </p>
                </div>
                <CardItem translateZ={30} className="flex-shrink-0 about-img">
                  <img src={bibsImg} alt="" className="w-96 rounded-4xl object-cover" />
                </CardItem>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </section>

      {/* Work Experience */}
      <section id="experience" className="fade-in-section flex flex-col items-start justify-start px-25 py-12">
        <h2
          className="text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          WORK EXPERIENCE
        </h2>

        <div className="relative w-full">
          {/* Vertical dotted line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Item 1 - Left */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-card w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 justify-end">
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Machine Learning Research Assistant</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>The Hospital for Sick Children</p>
                        </div>
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={sickKids} alt="sick-kids" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Incoming Spring/Summer 2026</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Machine Learning for Drug Discovery
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-img w-1/2 pl-12">
                <img src={sickKidsHospital} alt="SickKids Hospital" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

            {/* Item 2 - Right */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-img w-1/2 pr-12">
                <img src={wataiImage} alt="WAT.ai" className="w-full rounded-2xl object-cover h-48" />
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-card timeline-card-right w-1/2 pl-12">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3">
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={watai} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Machine Learning Engineer</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>WAT.ai</p>
                        </div>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Sept 2025 - Current</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Semantic Segmentation of Retinal Lesions in Fundus Imaging
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            {/* Item 3 - Left */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-card w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 justify-end">
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Tennis Instructor</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Unionville Tennis Club</p>
                        </div>
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={utc} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Apr 2022 - Aug 2025</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        TPA Certified Instructor | 500+ Hours On-Court
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-img w-1/2 pl-12">
                <img src={utcImage} alt="Unionville Tennis Club" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="fade-in-section flex flex-col items-start justify-start px-25 py-12 relative overflow-hidden">
        <HexagonBackground />
        <div className="relative z-10 w-full border border-white/50 rounded-2xl pt-10 pb-6 px-6">
          <h2
            className="skills-title absolute -top-7 left-8 text-white leading-none px-4"
            style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem', backgroundColor: '#01030a' }}
          >
            TECHNICAL SKILLS
          </h2>
          <SkillDock />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="fade-in-section flex flex-col items-start justify-start px-25 py-12">
        <h2
          className="text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          PROJECTS
        </h2>

        <div className="grid grid-cols-2 gap-8 w-full">
          {/* Project 1 */}
          <CardContainer className="w-full" containerClassName="py-0 w-full">
            <CardBody className="w-full">
              <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl overflow-hidden">
                <CardItem translateZ={30} className="w-full">
                  <img src={hydraNet} alt="HydraLA-Net" className="w-full h-56 object-contain" />
                </CardItem>
                <div className="p-6">
                  <h3 className="text-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Progressive Optimization of HydraLA-Net for Microaneursym Segmentation</h3>
                  <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Sept 2025 - Current</p>
                  <ul className="text-white/80 text-sm mt-3 leading-relaxed list-disc list-outside ml-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li>Designed and trained (via SSH) HydraLA-Net (U-Net Variation) models for the semantic segmentation of
                        microaneurysms, hemorrhage, soft and hard exudates from scratch in PyTorch.</li>
                    <li>Wrote task-specific loss functions (e.g. Focal Tversky) to address class imbalance.</li>
                    <li>Conducting ablation studies on applications of contrast enchancement preprocessing and loss function
                      selection to improve small-lesion segmentation performance.</li>
                    <li>Research Paper Releasing End of Febuary 2026!!!</li>
                  </ul>
                  <a href="https://github.com/jessicayuan1/fundus-image-segmentation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                  </a>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>

          {/* Project 2 */}
          <CardContainer className="w-full" containerClassName="py-0 w-full">
            <CardBody className="w-full">
              <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl overflow-hidden">
                <CardItem translateZ={30} className="w-full">
                  <img src={arxtract} alt="Arxtract" className="w-full h-56 object-contain" />
                </CardItem>
                <div className="p-6">
                  <h3 className="text-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>ArXtract: AI Search Engine for ML Research</h3>
                  <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Feb 2026</p>
                  <ul className="text-white/80 text-sm mt-3 leading-relaxed list-disc list-outside ml-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <li>Full-stack research tool (React + TypeScript frontend, FastAPI backend) for analyzing machine
                        learning papers through user prompts and arXiv inputs.</li>
                    <li>Built a retrieval-augmented chatbot that answers research questions by ranking paper chunks using embed-
                        ding similarity and responding using the top-scoring sections.</li>
                    <li>Engineered structured extraction of key ML fields (task type, problem, contribution, datasets) to standardize
                        paper summaries.</li>
                  </ul>
                  <a href="https://arxtract-cxc.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-white/60 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Visit the App
                  </a>
                </div>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="fade-in-section relative flex flex-col items-start justify-start px-25 py-12 overflow-hidden">
        {/* Background image — adjust opacity here */}
        <img src={warriorHelm} alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0" style={{ opacity: 0.25 }} />
        <h2
          className="relative z-10 text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          EDUCATION
        </h2>

        <div className="relative w-full">
          {/* Vertical dotted line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Item 1 - Left */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-card w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 justify-end">
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>University of Waterloo</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>BMath in Mathematics (Undeclared)</p>
                        </div>
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={waterlooSeal} alt="waterloo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                      </div>
                      <p className="text-white/40 text-sm mt-2 text-left" style={{ fontFamily: "'Inter', sans-serif" }}>Sept 2025 - Current</p>
                      <ul className="text-white/80 text-base mt-3 leading-relaxed text-left list-disc list-outside ml-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Major Average: 94% | Cumulative Average: 93%</li>
                        <li>Hershel and Mary Anne Harris Scholarship, President's Scholarship of Distinction</li>
                        <li>Coursework: Linear Algebra, Functional Programming, Imperative Programming, Calculus, Probability</li>
                        <li>Varsity XC, WAT.ai Design Team</li>
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-img w-1/2 pl-12">
                <img src={waterlooimage} alt="waterloo" className="w-full rounded-2xl object-cover h-48" />
              </div>
              </div>

            {/* Item 2 - Right */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-img w-1/2 pr-12">
                <img src={bcssImage} alt="bcss" className="w-full h-48 object-cover rounded-2xl" />
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-card timeline-card-right w-1/2 pl-12">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3">
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={bcss} alt="waterloo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Bill Crothers Secondary School</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Ontario Secondary School Diploma</p>
                        </div>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Aug 2021 - Jun 2025</p>
                      <ul className="text-white/80 text-base mt-3 leading-relaxed list-disc list-outside ml-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Graduated 2nd in the Class of 2025 with 99.167% Top 6 Gr 12 Average</li>
                        <li>Academic Accomplishment Award, Excellence in Mathematics Award, Ontario Scholar, Honour Roll</li>
                        <li>8x UWaterloo Math Contest School Champion + Certificate of Distinction</li>
                        <li>4x OFSAA Track/XC</li>
                        <li>Subject Awards: Calculus & Vectors, English, Gym Leadership, Chemistry, Physics</li>
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section id="extracurriculars" className="fade-in-section flex flex-col items-start justify-start px-25 py-12 relative overflow-hidden">
        <NeonBackground />
        <h2
          className="relative z-10 text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          EXTRACURRICULARS
        </h2>

        <div className="relative z-10 w-full">
          {/* Vertical dotted line */}
          <div className="timeline-line absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Item 1 - Left */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-card w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 justify-end">
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Varsity XC Athlete</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>University of Waterloo</p>
                        </div>
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={warriorHelm} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Sept 2025 - Current</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Varsity XC
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-img w-1/2 pl-12">
                <img src={xcteam} alt="Placeholder" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

            {/* Item 2 - Right */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-img w-1/2 pr-12">
                <img src={uttcTeam} alt="Placeholder" className="w-full rounded-2xl object-cover h-48" />
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-card timeline-card-right w-1/2 pl-12">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3">
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={torontoTrack} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>XC & Track Athlete</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>University of Toronto Track Club</p>
                        </div>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>July 2022 - August 2025</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        1:22:16 Toronto Half Marathon
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>

            {/* Item 3 - Left */}
            <div className="timeline-item relative flex items-center">
              <div className="timeline-card w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl p-6">
                      <div className="flex items-center gap-3 justify-end">
                        <div>
                          <h3 className="text-3xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Tennis Athlete</h3>
                          <p className="text-white/60 text-base mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>Tennis Canada</p>
                        </div>
                        <CardItem translateZ={80} className="flex-shrink-0">
                          <img src={tennisCanada} alt="logo" className="w-22 h-22 rounded-lg object-contain bg-white/10 p-1" />
                        </CardItem>
                      </div>
                      <p className="text-white/40 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Mar 2018 - June 2022</p>
                      <p className="text-white/80 text-base mt-3 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Career Peek Rankings: 48th in Canadian Singles, 25th in Canadian Doubles
                      </p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="timeline-img w-1/2 pl-12">
                <img src={avivaCentre} alt="Placeholder" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="fade-in-section flex flex-col items-start justify-start px-25 py-12 relative overflow-hidden">
        <FireworksBackground />
        <h2
          className="relative z-10 text-white leading-none mb-8"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          CONTACT
        </h2>
        <div className="relative z-10 flex flex-col gap-2 text-white/80 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>Academic Email: m529liu@uwaterloo.ca</p>
          <p>Personal Email: liumichaeler@gmail.com</p>
          <p>Cell Phone: (289)-943-5743</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-end px-25 py-8 border-t border-white/10">
        <h2
          className="leading-none"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#d0ff00' }}
        >
          &middot; BUILT BY MICHAEL LIU &middot;
        </h2>
      </footer>
    </div>
  );
}

export default App;
