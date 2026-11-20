"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"none" | "about" | "contact" | "call">("none");
  const [isClosingModal, setIsClosingModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal Open karne ka function
  const openModal = (modal: "about" | "contact" | "call") => {
    setIsClosingModal(false);
    setActiveModal(modal);
  };

  // Smooth Exit Animation ke sath Modal Close karne ka function
  const closeModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setActiveModal("none");
      setIsClosingModal(false);
    }, 300); // 300ms transition delay
  };

  const navTextClass = `font-medium text-sm transition-colors cursor-pointer ${
    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
  }`;

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md border-b border-gray-100 py-0" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[95%] xl:max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 relative">
            
            {/* 1. Text Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}>
                  Flywonder.pk
                </span>
              </Link>
            </div>

            {/* 2. Desktop Center Links */}
            <div className={`hidden lg:flex items-center space-x-6 px-8 py-2.5 rounded-full backdrop-blur-md transition-all border ${
              isScrolled ? "bg-gray-100/80 border-gray-200" : "bg-black/20 border-white/20"
            }`}>
              <Link href="/" className={navTextClass}>Home</Link>
              <Link href="/VISA-Services" className={navTextClass}>Visa</Link>
              <Link href="/UMRAH-Service" className={navTextClass}>Umrah</Link>
              <Link href="/TOUR-Services" className={navTextClass}>Tours</Link>
              <Link href="/Ziaraat" className={navTextClass}>Ziaraat</Link>
              <button onClick={() => openModal("about")} className={navTextClass}>About Us</button>
              <button onClick={() => openModal("contact")} className={navTextClass}>Contact</button>
            </div>

            {/* 3. Desktop Call Now Button */}
            <div className="flex-1 hidden lg:flex justify-end">
              <button 
                onClick={() => openModal("call")}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5 ${
                  isScrolled 
                    ? "bg-slate-900 hover:bg-blue-600 text-white" 
                    : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                }`}
              >
                CALL NOW <span>→</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center flex-1 justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none p-2 transition-colors ${isScrolled ? "text-gray-800" : "text-white"}`}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* ================= MOBILE BLUR MENU (With Smooth Up/Down Animation) ================= */}
            <div 
              className={`lg:hidden absolute top-[100%] left-0 right-0 transition-all duration-300 ease-in-out origin-top ${
                isMobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible pointer-events-none"
              }`}
            >
              <div className="mt-2 bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                <div className="px-6 py-8 flex flex-col items-center space-y-5">
                  
                  {/* Links */}
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Home</Link>
                  <Link href="/VISA-Services" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Visa Services</Link>
                  <Link href="/UMRAH-Service" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Umrah Packages</Link>
                  <Link href="/TOUR-Services" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">World Tours</Link>
                  <Link href="/Ziaraat" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Ziaraat</Link>
                  <button onClick={() => { openModal("about"); setIsMobileMenuOpen(false); }} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">About Us</button>
                  <button onClick={() => { openModal("contact"); setIsMobileMenuOpen(false); }} className="text-white text-lg font-medium hover:text-sky-400 transition-colors">Contact</button>
                  
                  {/* Divider */}
                  <div className="w-3/4 border-t border-white/20 my-2"></div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-col items-center space-y-3 text-sm text-gray-200">
                    <a href="tel:03097879999" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      0309 787 9999 / 0239 787 9999
                    </a>
                    <a href="mailto:info@flywonder.pk" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      info@flywonder.pk
                    </a>
                    <div className="flex items-center gap-2 text-center max-w-[250px] opacity-80">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      LG-28, LandMark Plaza, Jail Road, Lahore
                    </div>
                  </div>

                  {/* Social Icons (Facebook, Instagram, WhatsApp) */}
                  <div className="flex items-center gap-5 mt-4">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/flywondertravel.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/flywonder.pk/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    {/* WhatsApp */}
                    <a href="https://wa.me/923176402959" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#25D366] hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.5)]">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= PREMIUM MODALS (With Enter & Exit Animations) ================= */}
      {activeModal !== "none" && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            isClosingModal ? "opacity-0" : "opacity-100"
          }`}
        >
          
          {/* 1. NEW Premium About Us Modal */}
          {activeModal === "about" && (
            <div 
              className={`bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden relative transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              <div className="bg-gradient-to-r from-blue-700 to-sky-500 p-8 text-white relative">
                <button onClick={closeModal} className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h2 className="text-3xl font-bold mb-2 tracking-tight">Fly Wonder Travel & Tours</h2>
                <p className="text-blue-100 text-lg">Your Most Trusted Travel Partner in Pakistan</p>
              </div>
              
              <div className="p-8 text-gray-600 text-lg space-y-4 leading-relaxed bg-slate-50">
                <p>
                  Based in the heart of Lahore, we specialize in delivering premium and hassle-free travel solutions. From the sacred spiritual journeys of <strong>Umrah and Ziaraat</strong> to exciting global holiday packages, we handle every detail with absolute precision.
                </p>
                <p>
                  Our expert team is dedicated to providing top-tier visa processing, flight bookings, and luxury accommodations so you can focus on creating memories that last a lifetime.
                </p>
                
                {/* Feature Boxes (Hidden on Mobile) */}
                <div className="hidden md:grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">✓</div>
                    <div><h4 className="font-bold text-gray-900">Expert Team</h4><p className="text-sm text-gray-500">Years of Trust</p></div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                    <div><h4 className="font-bold text-gray-900">24/7 Support</h4><p className="text-sm text-gray-500">Always Available</p></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. NEW Premium Contact Us Modal (Split Card Design) */}
          {activeModal === "contact" && (
            <div 
              className={`bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              
              {/* Dark Left Column */}
              <div className="md:w-2/5 bg-slate-900 p-8 text-white relative">
                <button onClick={closeModal} className="md:hidden absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">Our friendly expert team is always here to chat and help you plan your next journey.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Call Us</p><p className="font-medium text-gray-200">0309 787 9999</p><p className="font-medium text-gray-200">0239 787 9999</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p><a href="mailto:info@flywonder.pk" className="font-medium text-gray-200 hover:text-blue-400 transition-colors">info@flywonder.pk</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p><p className="font-medium text-gray-200">LG-28, LandMark Plaza,<br/>Jail Road, Lahore</p></div>
                  </div>
                </div>
              </div>
              
              {/* Light Right Column */}
              <div className="md:w-3/5 p-8 md:p-12 relative bg-slate-50 flex flex-col justify-center">
                <button onClick={closeModal} className="hidden md:flex absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                {/* Title and description Hidden on mobile screens */}
                <h3 className="hidden md:block text-2xl font-bold text-gray-900 mb-2">Connect Instantly</h3>
                <p className="hidden md:block text-gray-500 mb-8">Skip the wait and connect directly via WhatsApp or Phone Call.</p>
                
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/923176402959" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-2xl text-lg font-bold transition-all shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Chat on WhatsApp
                  </a>
                  <a href="tel:03097879999" className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold transition-all shadow-[0_4px_15px_rgba(37,99,235,0.3)] hover:-translate-y-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    Call Now Directly
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 3. Original Small Call Modal for Nav Button */}
          {activeModal === "call" && (
            <div 
              className={`bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative text-center transition-all duration-300 transform ${
                isClosingModal ? "scale-95 opacity-0 translate-y-4" : "scale-100 opacity-100 translate-y-0"
              }`}
            >
              <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-4">Connect Instantly</h2>
              <p className="text-gray-500 mb-8">Choose an option below to reach our agents.</p>
              <div className="flex flex-col gap-4">
                <a href="tel:03097879999" className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Dial Phone Number
                </a>
                <a href="https://wa.me/923176402959" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-[#20b858] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}