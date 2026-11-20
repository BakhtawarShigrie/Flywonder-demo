import Link from "next/link";
import Image from "next/image";

export default function UmrahSection() {
  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1565552643982-2735703f8f10?q=80&w=2072&auto=format&fit=crop" 
            alt="Makkah Umrah" 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Premium Umrah Packages</h2>
          <p className="text-lg text-gray-600 mb-6">
            Experience a spiritually uplifting journey with our carefully crafted Umrah packages. We provide 5-star accommodations near the Haram, comfortable transport, and dedicated guidance for your peace of mind.
          </p>
          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center">✓ Direct Flights & Luxury Transit</li>
            <li className="flex items-center">✓ VIP & Economy Packages Available</li>
            <li className="flex items-center">✓ 24/7 Ground Support</li>
          </ul>
          <Link 
            href="/UMRAH-Service" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-md"
          >
            View Umrah Details
          </Link>
        </div>
      </div>
    </section>
  );
}