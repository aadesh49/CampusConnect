import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-10">
        {/* About CampusConnect */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About CampusConnect</h2>
          <p className="mb-4 text-sm leading-relaxed">
            CampusConnect is a student-driven platform designed to raise, track, and support important college issues and events. Empowering students to voice their concerns and stay connected with campus life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/issues" className="hover:text-white transition duration-300">
                Issues
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white transition duration-300">
                Events
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-white transition duration-300">
              <FaFacebookF className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-white transition duration-300">
              <FaTwitter className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-white transition duration-300">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="/" className="hover:text-white transition duration-300">
              <FaGithub className="text-xl" />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">📍 CampusConnect, Pune</p>
          <p className="text-sm">📧 support@campusconnect.in</p>
          <p className="text-sm">📞 (999) 123-4567</p>
        </div>
      </div>

      <p className="text-center text-xs pt-8 border-t border-gray-700 mt-8">
        © {new Date().getFullYear()} CampusConnect. All rights reserved.
      </p>
    </footer>
  );
}
