import Navbar from './components/Navbar';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img src={logo} alt="Señor Sativa LLC" className="w-64 h-64 mb-8" />
            <h1 className="text-5xl font-bold mb-4 text-brand-white">Welcome to Señor Sativa LLC</h1>
            <p className="text-xl mb-8 text-brand-white/90">Your trusted partner in cannabis consulting and education.</p>
            <a href="#consulting" className="btn-primary text-lg px-8 py-3">Get Started</a>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consulting" className="section-container">
          <h1 className="text-4xl font-bold mb-8">Consulting Services</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Hourly Consultation</h2>
              <p className="text-3xl font-bold text-brand-yellow mb-4">$70/hour</p>
              <ul className="space-y-2 mb-6 text-brand-white/80">
                <li>• One-on-one expert guidance</li>
                <li>• Flexible scheduling</li>
                <li>• Targeted problem solving</li>
              </ul>
              <button className="btn-primary w-full">Book Now</button>
            </div>
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Weekly Package</h2>
              <p className="text-3xl font-bold text-brand-yellow mb-4">$2,500/week</p>
              <ul className="space-y-2 mb-6 text-brand-white/80">
                <li>• Comprehensive support</li>
                <li>• Daily check-ins</li>
                <li>• Strategic planning</li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Monthly Retainer</h2>
              <p className="text-3xl font-bold text-brand-yellow mb-4">$8,000/month</p>
              <ul className="space-y-2 mb-6 text-brand-white/80">
                <li>• Full-service consulting</li>
                <li>• Priority support</li>
                <li>• Business development</li>
              </ul>
              <button className="btn-primary w-full">Contact Us</button>
            </div>
          </div>
        </section>

        {/* Merchandise Section */}
        <section id="merchandise" className="section-container">
          <h1 className="text-4xl font-bold mb-8">Premium Merchandise</h1>
          <p className="text-xl mb-8 text-brand-white/90">Coming Soon! Our exclusive line of high-quality cannabis accessories and branded merchandise.</p>
        </section>

        {/* Education Section */}
        <section id="education" className="section-container">
          <h1 className="text-4xl font-bold mb-8">Educational Growing Series</h1>
          <p className="text-xl mb-8 text-brand-white/90">Learn the art and science of cannabis cultivation from industry experts.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Beginner's Guide</h2>
              <p className="text-brand-white/80 mb-4">Master the fundamentals of cannabis cultivation.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Advanced Techniques</h2>
              <p className="text-brand-white/80 mb-4">Optimize your growing operation with expert strategies.</p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">Business Operations</h2>
              <p className="text-brand-white/80 mb-4">Scale your cultivation business effectively.</p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
