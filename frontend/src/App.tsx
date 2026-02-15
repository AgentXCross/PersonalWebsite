import "./App.css";
import NavBar from "./components/NavBar";
import SkillDock from "./components/SkillDock";
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


function App() {
  return (
    <div className="text-white" style={{ backgroundColor: '#01030a' }}>
      <NavBar />
      {/* Hero */}
      <section id="hero" className="flex flex-col items-center justify-start px-16 pt-24 pb-16 relative overflow-hidden">
        <h1
          className="relative z-20 text-white leading-none"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '12rem', letterSpacing: '-0.02em' }}
        >
          MICHAEL L.
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
      <section id="about" className="flex flex-col items-start justify-start px-25 py-12">
        <div className="relative w-full border border-white/50 rounded-2xl pt-12 pb-8 px-10">
          <h2
            className="absolute -top-7 left-8 text-white leading-none px-4"
            style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem', backgroundColor: '#01030a' }}
          >
            ABOUT ME
          </h2>
          <div className="flex gap-12 items-start w-full">
            <div
              className="text-white text-lg leading-relaxed flex-1"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 15}}
            >
              <p>
                I'm a 1B Honours Mathematics student at the University of Waterloo,
                with an intended major in Data Science. Excited to be joining
                the Hospital for Sick Children this Summer as an ML Research Assistant!
              </p>
              <p className="mt-3">
                I'm currently part of a WAT.ai
                Design Team, where my team develops and evaluates preprocessing and training
                techniques to improve the semantic segmentation of small, low contrast
                retinal lesions in fundus imaging. I'm also co-authoring a research paper
                detailing our methodology and results, releasing in February 2026!
              </p>
              <p className="mt-3">
                Outside of academics, I have over four years of experience coaching tennis at Unionville
                Tennis Club and Premier Racquet Clubs Markham, and I compete as a
                Varsity Cross-Country athlete for the University of Waterloo.
              </p>
            </div>
            <img src={bibsImg} alt="" className="w-96 rounded-4xl object-cover flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="flex flex-col items-start justify-start px-25 py-12">
        <h2
          className="text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          WORK EXPERIENCE
        </h2>

        <div className="relative w-full">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Item 1 - Left */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12 text-right">
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
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
                <img src={sickKidsHospital} alt="SickKids Hospital" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

            {/* Item 2 - Right */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12">
                <img src={wataiImage} alt="WAT.ai" className="w-full rounded-2xl object-cover h-48" />
              </div>
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
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
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12 text-right">
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
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
                <img src={utcImage} alt="Unionville Tennis Club" className="w-full rounded-2xl object-cover h-48" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="flex flex-col items-start justify-start px-25 py-12">
        <div className="relative w-full border border-white/50 rounded-2xl pt-10 pb-6 px-6">
          <h2
            className="absolute -top-7 left-8 text-white leading-none px-4"
            style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem', backgroundColor: '#01030a' }}
          >
            TECHNICAL SKILLS
          </h2>
          <SkillDock />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="flex flex-col items-start justify-start px-25 py-12">
        <h2
          className="text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          PROJECTS
        </h2>

        <div className="relative w-full">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Project 1 - Left */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12 text-right">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl overflow-hidden">
                      <CardItem translateZ={30} className="w-full">
                        <img src={hydraNet} alt="HydraLA-Net" className="w-full h-56 object-contain" />
                      </CardItem>
                      <div className="p-6">
                        <h3 className="text-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>Progressive Optimization of HydraLA-Net for Microaneursym Segmentation</h3>
                        <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Sept 2025 - Current</p>
                        <ul className="text-white/80 text-sm mt-3 leading-relaxed text-left list-disc list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
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
              </div>
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2" />
            </div>

            {/* Project 2 - Right */}
            <div className="relative flex items-center">
              <div className="w-1/2" />
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
                <CardContainer className="w-full" containerClassName="py-0 w-full">
                  <CardBody className="w-full">
                    <CardItem translateZ={50} className="w-full bg-[#1c1c1e] border border-white/10 rounded-2xl overflow-hidden">
                      <CardItem translateZ={30} className="w-full">
                        <img src={arxtract} alt="Arxtract" className="w-full h-56 object-contain" />
                      </CardItem>
                      <div className="p-6">
                        <h3 className="text-2xl" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800 }}>ArXtract: AI Search Engine for ML Research</h3>
                        <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Feb 2026</p>
                        <ul className="text-white/80 text-sm mt-3 leading-relaxed list-disc list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
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
            </div>

          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="flex flex-col items-start justify-start px-25 py-12">
        <h2
          className="text-white leading-none mb-16"
          style={{ fontFamily: "'Klein Condensed', sans-serif", fontWeight: 800, fontSize: '4rem' }}
        >
          EDUCATION
        </h2>

        <div className="relative w-full">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 top-0 bottom-0 border-l-6 border-dotted border-white/50 -translate-x-1/2" />

          {/* Timeline items */}
          <div className="flex flex-col gap-16">

            {/* Item 1 - Left */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12 text-right">
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
                      <ul className="text-white/80 text-base mt-3 leading-relaxed text-left list-disc list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li>Major Average: 94% | Cumulative Average: 93%</li>
                        <li>Varsity XC, WAT.ai</li>
                      </ul>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
                <img src={waterlooimage} alt="waterloo" className="w-full rounded-2xl object-cover h-48" />
              </div>
              </div>

            {/* Item 2 - Right */}
            <div className="relative flex items-center">
              <div className="w-1/2 pr-12">
                <img src={bcssImage} alt="bcss" className="w-full h-48 object-cover rounded-2xl" />
              </div>
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d0ff00] z-10" />
              <div className="w-1/2 pl-12">
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
                      <ul className="text-white/80 text-base mt-3 leading-relaxed list-disc list-inside" style={{ fontFamily: "'Inter', sans-serif" }}>
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
      <section id="extracurriculars" className="flex items-center justify-center px-25 py-12">
      </section>

      {/* Contact */}
      <section id="contact" className="flex items-center justify-center px-25 py-12">
      </section>
    </div>
  );
}

export default App;
