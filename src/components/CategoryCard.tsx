
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryCard = ({ title, description, image, link }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-md">
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-playfair font-semibold text-white mb-1">{title}</h3>
        <p className="text-white/80 text-sm mb-3">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-gold hover:text-white transition-colors"
        >
          Discover <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
