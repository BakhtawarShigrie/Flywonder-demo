"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Fly Wonder Travel & Tours</h3>
          <p className="text-gray-400 mb-4">
            Making your travel dreams a reality with top-tier ticketing, visas, and holiday packages.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/VISA-Services" className="hover:text-blue-400 transition-colors">Visa Services</Link></li>
            <li><Link href="/UMRAH-Service" className="hover:text-blue-400 transition-colors">Umrah Packages</Link></li>
            <li><Link href="/TOUR-Services" className="hover:text-blue-400 transition-colors">International Tours</Link></li>
            <li><Link href="/Ziaraat" className="hover:text-blue-400 transition-colors">Ziaraat (Iran & Iraq)</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold text-white">Address:</span> 
              Office Number LG-28, LandMark Plaza, Jail Road, Lahore
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-white">Phone 1:</span> 0309 787 9999
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-white">Phone 2:</span> 0239 787 9999
            </li>
            <li className="flex items-center gap-2">
              <span className="font-bold text-white">Email:</span> info@flywonder.pk
            </li>
          </ul>
        </div>
        
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        <span suppressHydrationWarning>
          © {new Date().getFullYear()} Fly Wonder Travel & Tours. All rights reserved.
        </span>
      </div>
    </footer>
  );
}