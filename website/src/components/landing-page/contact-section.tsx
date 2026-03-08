import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage(data.message);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitMessage(data.error || 'An error occurred. Please try again.');
            }
        } catch (error) {
            setSubmitMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-gradient-to-b from-purple-800 to-indigo-900 py-20 md:py-28 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                    {/* Left — newsletter value props */}
                    <div className="text-white">
                        <h2 className="text-4xl font-bold mb-6">Unleash Newsletter</h2>
                        <p className="text-lg text-purple-200 mb-8">
                            Real-world AI strategies, engineering insights, and career moves — from the frontier of AI-native systems. No fluff.
                        </p>
                        <ul className="space-y-4 text-purple-100">
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 mt-0.5 text-lg">→</span>
                                <span>Practical AI tooling and workflow tips from real production systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 mt-0.5 text-lg">→</span>
                                <span>Career growth insights for engineers navigating the AI era</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 mt-0.5 text-lg">→</span>
                                <span>Lessons from 13+ years across big tech, startups, and my own ventures</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-yellow-300 mt-0.5 text-lg">→</span>
                                <span>Honest takes on the future of software engineering</span>
                            </li>
                        </ul>

                        {/* Social links */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="https://linkedin.com/in/rahatkhanna" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-full text-sm text-white transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://topmate.io/rahat_khanna" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-full text-sm text-white transition-colors">
                                Topmate
                            </a>
                            <a href="https://github.com/mappmechanic" target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded-full text-sm text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Right — signup form */}
                    <div className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-md">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-purple-200">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-purple-100 border-transparent text-gray-700 focus:border-purple-500 focus:bg-white focus:ring-0"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-purple-200">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-purple-100 border-transparent text-gray-700 focus:border-purple-500 focus:bg-white focus:ring-0"
                                    required
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Please enter a valid email address."
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-purple-200">What brings you here? <span className="text-xs">(optional)</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md bg-purple-100 border-transparent text-gray-700 focus:border-purple-500 focus:bg-white focus:ring-0"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Subscribe →'}
                                </button>
                            </div>
                            {submitMessage && (
                                <div className={`text-center ${submitMessage.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;
