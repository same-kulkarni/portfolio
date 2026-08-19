// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Your Name</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">PRODUCT DESIGNER</p>

          <h1>
            I design digital
            <br />
            experiences that matter.
          </h1>

          <p className="hero-description">
            I’m a product designer focused on creating simple,
            intuitive and meaningful digital experiences.
          </p>

          <a href="#work" className="primary-button">
            View my work →
          </a>
        </div>
      </section>


      {/* About */}
      <section className="section" id="about">
        <p className="section-label">01 — ABOUT</p>

        <div className="about-content">
          <h2>
            Designing with purpose,
            <br />
            not just aesthetics.
          </h2>

          <p>
            I'm a designer who enjoys solving complex problems through
            thoughtful user experiences and clean visual design.
            I work across research, UX, UI and product strategy.
          </p>
        </div>
      </section>


      {/* Work */}
      <section className="section" id="work">
        <p className="section-label">02 — SELECTED WORK</p>

        <div className="projects">

          <div className="project">
            <div className="project-image">
              Project 01
            </div>

            <div className="project-info">
              <h3>ERP Dashboard</h3>
              <p>
                Designing an enterprise dashboard to simplify
                complex manufacturing data.
              </p>
              <span>UX / UI / Product Design</span>
            </div>
          </div>


          <div className="project">
            <div className="project-image">
              Project 02
            </div>

            <div className="project-info">
              <h3>Mobile Application</h3>
              <p>
                Creating a simple and intuitive workflow for
                tablet users.
              </p>
              <span>UX / UI Design</span>
            </div>
          </div>


          <div className="project">
            <div className="project-image">
              Project 03
            </div>

            <div className="project-info">
              <h3>Web Experience</h3>
              <p>
                Designing a modern digital experience focused
                on clarity and conversion.
              </p>
              <span>Web Design / Development</span>
            </div>
          </div>

        </div>
      </section>


      {/* Contact */}
      <section className="contact" id="contact">
        <p className="section-label">03 — CONTACT</p>

        <h2>
          Have a project
          <br />
          in mind?
        </h2>

        <a href="mailto:hello@example.com" className="primary-button">
          Let's talk →
        </a>
      </section>


      {/* Footer */}
      <footer>
        <p>© 2026 Your Name</p>

        <div>
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
          <a href="#">Instagram</a>
        </div>
      </footer>

    </div>
  );
}

export default App;