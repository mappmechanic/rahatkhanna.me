const ContactSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-800 to-indigo-900 flex items-center justify-center p-8">
            <div className="max-w-md w-full bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-md">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">Get in Touch</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-purple-200">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-purple-100 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-purple-200">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-purple-100 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-purple-200">Message</label>
                        <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-purple-100 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactSection;