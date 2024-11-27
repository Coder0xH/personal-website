import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}
