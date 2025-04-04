
import { Scissors, Ruler, Award, Clock } from 'lucide-react';

const highlights = [
  {
    title: "Master Craftsmanship",
    description: "Expert tailors with decades of experience creating perfect fits.",
    icon: Scissors,
  },
  {
    title: "Premium Fabrics",
    description: "Curated selection of luxurious fabrics from around the world.",
    icon: Ruler,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control for exceptional durability and finish.",
    icon: Award,
  },
  {
    title: "Timely Delivery",
    description: "Committed to deliver your orders within the promised timeline.",
    icon: Clock,
  },
];

const CompanyHighlights = () => {
  return (
    <section className="py-20 bg-beige fabric-texture">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-burgundy font-medium">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy mt-1 mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="text-gray-700">
            At Arihant 4Man, we pride ourselves on delivering exceptional quality and service that has made us a trusted name since 1987.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={item.title}
              className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <item.icon size={24} className="text-navy" />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-navy">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;
