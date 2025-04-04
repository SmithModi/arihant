
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="bg-navy text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with our team for inquiries about our premium fabrics, tailoring services, or to schedule a visit.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-navy mb-6">
                  Reach Out to Us
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mr-4 shrink-0">
                      <MapPin size={24} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                        123 Fashion Street, Design District<br />
                        Mumbai - 400001, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mr-4 shrink-0">
                      <Mail size={24} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@arihant4man.com" className="hover:text-burgundy transition-colors">
                          info@arihant4man.com
                        </a><br />
                        <a href="mailto:support@arihant4man.com" className="hover:text-burgundy transition-colors">
                          support@arihant4man.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mr-4 shrink-0">
                      <Phone size={24} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-700">
                        <a href="tel:+919876543210" className="hover:text-burgundy transition-colors">
                          +91 98765 43210
                        </a><br />
                        <a href="tel:+919876543211" className="hover:text-burgundy transition-colors">
                          +91 98765 43211
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mr-4 shrink-0">
                      <Clock size={24} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Saturday: 10:00 AM - 8:00 PM<br />
                        Sunday: 11:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-md shadow-sm">
                <h2 className="text-2xl font-playfair font-bold text-navy mb-6">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-gray-700">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary flex items-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-playfair font-bold text-navy">
                Visit Our Store
              </h2>
              <p className="text-gray-700 mt-2">
                Experience our premium fabric collection and tailoring services in person.
              </p>
            </div>
            
            <div className="h-[400px] bg-gray-200 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160917226!2d72.74110193967961!3d19.082197839427363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1712162835722!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
