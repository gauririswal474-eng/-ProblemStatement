import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="hero">
        <span className="eyebrow">WELCOME</span>
        <h1>Make your next move<br /><span>with confidence.</span></h1>
        <p>
          A clean, responsive navigation experience that adapts beautifully
          to desktop, tablet and mobile screens.
        </p>
        <a className="hero-link" href="#features">Explore the features <span aria-hidden="true">→</span></a>
      </main>
      <section className="features" id="features">
        <div><span>01</span><h2>Simple</h2><p>Clear navigation with the links you need.</p></div>
        <div><span>02</span><h2>Responsive</h2><p>A layout designed for every screen size.</p></div>
        <div><span>03</span><h2>Accessible</h2><p>Keyboard-friendly controls and clear labels.</p></div>
      </section>
      <footer>© 2026 Responsive Navbar Demo</footer>
    </div>
  )
}