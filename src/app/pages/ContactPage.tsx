import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { PageHero } from '@/app/components/shared/PageHero';
import { PageSection } from '@/app/components/shared/PageSection';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/app/utils/animations';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', reason: '', message: '' });
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: "Email",
            value: "mail.cyano@gmail.com",
            link: "mailto:support@khetibharat.org"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: "Phone",
            value: "+91 99591 21199",
            link: "tel:+911145678900"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: "Head Office",
            value: " KrishnaGiriEnclave,Tarnaka, Hyderabad-500017,Telangana.",
            link: "#"
        },
        // {
        //     icon: <Clock className="w-6 h-6" />,
        //     label: "Working Hours",
        //     value: "Monday - Saturday: 9:00 AM - 6:00 PM",
        //     link: "#"
        // }
    ];

    return (
        <>
            <Header />

            {/* Page Hero */}
            <PageHero
                title="Contact Us"
                subtitle="We're here to help. Reach out for any inquiries or support."
                breadcrumb={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact', href: '/contact' }
                ]}
                background="gradient"
            />

            {/* Main Contact Section */}
            <PageSection background="white">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                    {/* Left: Contact Information */}
                    <motion.div
                        className="lg:col-span-2"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-[#0B6B3A] mb-6"
                            variants={fadeUp}
                        >
                            Get in Touch
                        </motion.h2>

                        <motion.p
                            className="text-gray-700 leading-relaxed mb-8"
                            variants={fadeUp}
                        >
                            Whether you're a farmer seeking support, a family wanting to access safe food, or a partner interested in collaboration—we'd love to hear from you.
                        </motion.p>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-[#FFF9F1] to-white border border-gray-100"
                                    variants={fadeUp}
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-[#0B6B3A] flex items-center justify-center text-white flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-600 mb-1">
                                            {item.label}
                                        </div>
                                        <a
                                            href={item.link}
                                            className="text-gray-900 font-medium hover:text-[#0B6B3A] transition"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Support */}
                        <motion.div
                            className="mt-8 p-6 bg-[#0B6B3A]/5 rounded-xl border border-[#0B6B3A]/20"
                            variants={fadeUp}
                        >
                            <h3 className="font-bold text-gray-900 mb-2">
                                Need Immediate Assistance?
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                For urgent farmer support or technical issues, call our helpline during working hours for faster resolution.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8"
                            variants={fadeUp}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Send Us a Message
                            </h3>

                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B6B3A] focus:border-transparent outline-none transition"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B6B3A] focus:border-transparent outline-none transition"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B6B3A] focus:border-transparent outline-none transition"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    {/* Reason for Contact */}
                                    <div>
                                        <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Reason for Contact *
                                        </label>
                                        <select
                                            id="reason"
                                            name="reason"
                                            required
                                            value={formData.reason}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B6B3A] focus:border-transparent outline-none transition bg-white"
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="farmer">Farmer Registration & Support</option>
                                            <option value="family">Family/Consumer Inquiry</option>
                                            <option value="partner">Partnership Opportunity</option>
                                            <option value="media">Media & Press</option>
                                            <option value="technical">Technical Support</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0B6B3A] focus:border-transparent outline-none transition resize-none"
                                            placeholder="Tell us how we can help you..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        className="w-full bg-[#FF6A00] text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 btn-premium relative overflow-hidden"
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div
                                    className="text-center py-12"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#0B6B3A] flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Thank you for contacting KhetiBharat. Our team will respond to your inquiry within 24-48 hours.
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </PageSection>

            <Footer />
        </>
    );
}
