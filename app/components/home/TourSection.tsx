import Link from "next/link";
import Image from "next/image";

const tours = [
  { id: 1, title: "Explore Skardu", image: "https://images.unsplash.com/photo-1627896157734-4bc1bf0f7ed4?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Baku, Azerbaijan", image: "https://images.unsplash.com/photo-1583095111306-031e670ca322?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Tashkent, Uzbekistan", image: "https://images.unsplash.com/photo-1601222830869-7ee7933b9340?q=80&w=2070&auto=format&fit=crop" },
];

export default function TourSection() {
  return (
    <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Exclusive Tour Packages</h2>
        
        {/* Horizontal Scroll Slider */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
          {tours.map((tour) => (
            <div key={tour.id} className="min-w-[300px] md:min-w-[400px] snap-center relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg flex-shrink-0">
              <Image 
                src={tour.image} 
                alt={tour.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white">{tour.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/TOUR-Services" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-md"
          >
            Explore More Packages
          </Link>
        </div>
      </div>
    </section>
  );
}