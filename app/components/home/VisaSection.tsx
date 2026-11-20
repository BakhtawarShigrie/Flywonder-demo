import Link from "next/link";

export default function VisaSection() {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Hassle-Free Visa Services</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Planning your next trip? We offer fast, reliable, and expert visa assistance for destinations worldwide. Skip the paperwork stress and let our experts handle your application from start to finish.
        </p>
        <Link 
          href="/VISA-Services" 
          className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all"
        >
          Explore Visa Services
        </Link>
      </div>
    </section>
  );
}