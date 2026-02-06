"use client";


export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-light">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    Get in Touch
                </h2>
                <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                    Ready to bring your ideas to life? I specialize in Python, AI, and web development solutions tailored to your specific business needs.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Information with Map */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8">
                            Contact Information
                        </h3>
                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="text-accent text-2xl">📞</div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                                    <a
                                        href="tel:+919724268523"
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        +91 78029 27428
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-accent text-2xl">✉️</div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Email</h4>
                                    <a
                                        href="mailto:akshay.markitup@gmail.com"
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        akshay.markitup@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-accent text-2xl">📍</div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Address</h4>
                                    <p className="text-gray-400">Ahmedabad, India</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-accent text-2xl">💼</div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                                    <a
                                        href="https://linkedin.com/in/devjayesh"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-accent transition-colors"
                                    >
                                        Professional Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-dark rounded-lg border border-gray-800 overflow-hidden">
                            <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <span className="text-gray-600 text-sm">Map View</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Let&apos;s Work Together
                        </h3>
                        <p className="text-gray-400 mb-8">
                            I&lsquo;m always open to new collaborations and exciting projects. Let&lsquo;s discuss how we can work together to bring your ideas to life.
                        </p>

                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent-dark transition-colors font-medium"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Thank you for your message! I'll get back to you soon.");
                                }}
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
