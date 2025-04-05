
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';
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
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Message from Website*%0A
*Name:* ${formData.name}%0A
*Email:* ${formData.email}%0A
*Phone:* ${formData.phone}%0A
*Subject:* ${formData.subject}%0A
*Message:* ${formData.message}`;
    
    // Open WhatsApp with the prepared message
    window.open(`https://wa.me/916352711793?text=${whatsappMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: "Message prepared!",
      description: "Opening WhatsApp to send your message.",
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
        <section className="bg-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get in touch with our team for inquiries about our premium fabrics, tailoring services, or to schedule a visit.
            </p>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-playfair font-bold text-navy mb-6">
                  Reach Out to Us
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-beige flex items-center justify-center mr-4 shrink-0">
                      <MapPin size={24} className="text-navy" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-700">
                        1st Floor, City Center, 105-108, Divanpara Main Rd,<br />
                        opp. old khadpith, Gujari Bazar, Diwanpara,<br />
                        Rajkot, Gujarat 360005
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
                        <a href="tel:+919913323064" className="hover:text-burgundy transition-colors">
                          +91 99133 23064
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
                        Open daily<br />
                        Closes at 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-6 md:p-8 rounded-md shadow-sm">
                <h2 className="text-2xl font-playfair font-bold text-navy mb-5">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-1.5 text-gray-700">
                        Your Name*
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
                      <label htmlFor="email" className="block mb-1.5 text-gray-700">
                        Email Address*
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
                  
                    <div>
                      <label htmlFor="phone" className="block mb-1.5 text-gray-700">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-1.5 text-gray-700">
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
                  
                    <div>
                      <label htmlFor="message" className="block mb-1.5 text-gray-700">
                        Your Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-300 w-full justify-center mt-2"
                  >
                    Send via WhatsApp <MessageSquare size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-playfair font-bold text-navy">
                Visit Our Store
              </h2>
              <p className="text-gray-700 mt-2">
                Experience our premium fabric collection and tailoring services in person.
              </p>
            </div>
            
            <div className="h-[350px] bg-gray-200 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6729582377546!2d70.8046933!3d22.2915053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2a681ce1cd%3A0xd23ee33d03e7d7f6!2sCity%20Center%2C%20Divanpara%20Main%20Rd%2C%20Diwanpara%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1713897574866!5m2!1sen!2sin"
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
