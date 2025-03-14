import React from 'react';
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Facebook, Star, ChevronRight } from 'lucide-react';
import { TestimonialsSection } from './components/blocks/testimonials-with-marquee';

const services = [
  { name: 'Klassischer Haarschnitt', nameEn: 'Classic Haircut', price: '€25', description: 'Traditioneller Schnitt mit modernem Styling', descriptionEn: 'Traditional cut with modern styling' },
  { name: 'Bart Trimmen', nameEn: 'Beard Trim', price: '€15', description: 'Bart in Form bringen und pflegen', descriptionEn: 'Shape and maintain your beard' },
  { name: 'Rasur mit heißem Handtuch', nameEn: 'Hot Towel Shave', price: '€30', description: 'Klassische Rasur mit scharfem Messer', descriptionEn: 'Classic straight razor shave' },
  { name: 'Haar & Bart Kombi', nameEn: 'Hair & Beard Combo', price: '€35', description: 'Komplettes Pflegepaket', descriptionEn: 'Complete grooming package' },
];

const testimonials = [
  {
    author: {
      name: "Yunus Ciklasahin",
      handle: "vor 8 Monaten"
    },
    text: "Ich hatte das Vergnügen, diesen Friseursalon zu besuchen, und ich bin absolut begeistert. Der Laden ist äußerst sauber und gepflegt.",
  },
  {
    author: {
      name: "Christian Knorr",
      handle: "vor 2 Monaten"
    },
    text: "Immer gute Stimmung. Bin meistens mit dem Schnitt zufrieden, man muss halt seine Leute kennen. Top Schnelligkeit, selbst kurz vor Weihnachten.",
  },
  {
    author: {
      name: "Norbert Lenssen",
      handle: "vor 1 Jahr"
    },
    text: "Tolles gemischtes Team aus Alt und Jung. Immer freundlich und respektvoll der Kundschaft gegenüber. Auf Kundenwünsche wird voll eingegangen.",
  },
  {
    author: {
      name: "Dirk Beckhaus",
      handle: "vor 9 Monaten"
    },
    text: "War das erste mal da und werde auf jeden Fall wieder dort hingehen. Bin zu 100% zufrieden, hat alles gepasst!",
  }
];

const hours = [
  { day: 'Montag - Freitag', dayEn: 'Monday - Friday', hours: '9:00 - 20:00' },
  { day: 'Samstag', dayEn: 'Saturday', hours: '8:00 - 18:00' },
  { day: 'Sonntag', dayEn: 'Sunday', hours: 'Geschlossen | Closed' },
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2574&q=80"
            alt="Barbershop Interieur"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <Scissors className="w-16 h-16 mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Sandro's Barbershop</h1>
          <p className="text-3xl md:text-4xl font-bold mb-6 text-amber-500">Kein Termin nötig – Einfach vorbeikommen!</p>
          <p className="max-w-2xl text-lg mb-8">
            Bei Sandro's Barbershop brauchen Sie keinen Termin im Voraus — kommen Sie einfach vorbei und lassen Sie sich von unseren 
            erfahrenen Profis einen großartigen Haarschnitt verpassen. Schnell, freundlich und immer erstklassige Qualität.
          </p>
          <a
            href="#location"
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 
            transition-colors duration-300 flex items-center gap-2"
          >
            Besuchen Sie uns <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Unsere Dienstleistungen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.name} className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-700 transition-colors duration-300">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-amber-500 text-2xl font-bold mb-2">{service.price}</p>
                <p className="text-zinc-400">{service.description}</p>
                <p className="text-zinc-500 text-sm mt-2">{service.nameEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Was unsere Kunden sagen"
        description="Werden Sie Teil unserer zufriedenen Kundengemeinschaft"
        testimonials={testimonials}
        className="bg-zinc-900"
      />

      {/* Info Section */}
      <section id="location" className="py-20 px-4 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center animate-spin-in">Besuchen Sie uns</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-scale-in">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-amber-500" /> Öffnungszeiten
              </h3>
              {hours.map((item, index) => (
                <div 
                  key={item.day} 
                  className="mb-4 opacity-0 animate-pop-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <p className="font-bold">{item.day}</p>
                  <p className="text-zinc-400">{item.hours}</p>
                  <p className="text-zinc-500 text-sm">{item.dayEn}</p>
                </div>
              ))}
              
              <div className="mt-8 opacity-0 animate-scale-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold mb-6">Kontakt</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    Hauptstraße 123, 41236 Mönchengladbach
                  </p>
                  <p className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                    <Phone className="w-5 h-5 text-amber-500" />
                    0123 456789
                  </p>
                  <p className="flex items-center gap-2 hover:text-amber-500 transition-all duration-300 hover:translate-x-2">
                    <Mail className="w-5 h-5 text-amber-500" />
                    info@sandros-barbershop.de
                  </p>
                </div>
                <div className="mt-6 flex gap-4">
                  <a href="#" className="text-amber-500 hover:text-amber-400 transition-all duration-300 hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-amber-500 hover:text-amber-400 transition-all duration-300 hover:scale-110">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.960371095821!2d6.431944776891793!3d51.19597623948236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8a9c3d1c0b925%3A0x27d44b4b6ac41247!2sM%C3%B6nchengladbach%2C%20Germany!5e0!3m2!1sen!2sus!4v1709251799744!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8 px-4 text-center">
        <p className="text-zinc-500">© 2025 Sandro's Barbershop</p>
      </footer>
    </div>
  );
}

export default App;