
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index?: number;
}

const CategoryCard = ({ title, description, image, link, index = 0 }: CategoryCardProps) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-lg card-hover"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
        >
          <h3 className="text-xl font-playfair font-semibold text-white mb-1 group-hover:text-gold transition-colors">{title}</h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">{description}</p>
          <Link 
            to={link} 
            className="inline-flex items-center text-gold hover:text-white transition-colors"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-bottom-right after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 group-hover:after:origin-bottom-left">
              Discover
            </span> 
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
