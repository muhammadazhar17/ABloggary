import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-semibold">ABloggary</h2>
          <p className="text-sm opacity-75">Sharing insights, ideas, and knowledge.</p>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a href="https://github.com/muhammadazhar17" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm opacity-75">
        &copy; {new Date().getFullYear()} ABloggary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
