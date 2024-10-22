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
        <div className="min-h-screen bg-gradient-to-b from-purple-800 to-indigo-900 flex flex-col items-center justify-center p-8 pt-24 md:pt-12">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Unleash Newsletter</h2>
                <p className="text-xl mb-12">Subscribe to Unleash for motivational insights, productivity hacks, and the latest in AI tools and tips. I’ll be sharing real-world strategies and systems that I’ve personally used to grow in the fast-evolving tech landscape. Let’s unlock your full potential together!</p>
            </div>
            <div className="max-w-md w-full bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md">
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
                        <label htmlFor="message" className="block text-sm font-medium text-purple-200">What motivates you to subscribe? <span className="text-xs">(optional)</span></label>
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
                            {isSubmitting ? 'Sending...' : 'Send Message'}
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
    )
}

export default ContactSection;
