import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 section-animate">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-gradient">
            Dexter Ellis
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl mb-6 text-gray-300 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Web3 Technical Director
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-400 opacity-0 animate-fadeIn" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          Bridging the gap between blockchain innovation and enterprise solutions
        </p>
        <div className="flex justify-center space-x-4 opacity-0 animate-fadeIn" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}
