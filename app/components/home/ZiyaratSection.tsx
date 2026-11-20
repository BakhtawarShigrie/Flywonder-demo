import Link from "next/link";
import Image from "next/image";

export default function ZiyaratSection() {
  return (
    <section className="py-20 bg-slate-900 px-4 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Sacred Ziaraat to Iran & Iraq</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Join us for a peaceful and well-organized spiritual journey to the holy sites.</p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        {/* Iraq */}
        <div className="relative h-[300px] rounded-xl overflow-hidden group">
           <Image 
             src="https://images.unsplash.com/photo-1588726593976-5b4d45af2c2c?q=80&w=2070&auto=format&fit=crop" 
             alt="Iraq Ziaraat" fill className="object-cover group-hover:scale-105 transition-transform duration-500" 
           />
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h3 className="text-3xl font-bold">Iraq Ziaraat</h3>
           </div>
        </div>
        {/* Iran */}
        <div className="relative h-[300px] rounded-xl overflow-hidden group">
           <Image 
             src="https://images.unsplash.com/photo-1605001221765-a81d4a3b8da4?q=80&w=2062&auto=format&fit=crop" 
             alt="Iran Ziaraat" fill className="object-cover group-hover:scale-105 transition-transform duration-500" 
           />
           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <h3 className="text-3xl font-bold">Iran Ziaraat</h3>
           </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/Ziaraat" 
          className="border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full text-lg font-medium transition-all"
        >
          More Details
        </Link>
      </div>
    </section>
  );
}