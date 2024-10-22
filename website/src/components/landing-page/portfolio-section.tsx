const PortfolioSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 flex items-center justify-center  p-8 pt-24 md:pt-12"> {/* Increased bottom padding */}
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
                <p className="text-xl mb-12">Showcasing my top projects and achievements.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">100 Best Albums - Apple Music</h3>
                        <p>A marketing microsite for Apple's 100 Best Albums awards in 2024. <br />
                            <a href="https://100best.music.apple.com" className="text-white underline hover:text-gray-300">https://100best.music.apple.com</a>
                        </p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Apple Music on the Web</h3>
                        <p>Interactive sessions designed to inspire and equip you with practical tools for success. <br />
                            <a href="https://music.apple.com" className="text-white underline hover:text-gray-300">https://music.apple.com</a>
                        </p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Apple Podcasts Connect</h3>
                        <p>Dashboard for Podcasters on Apple Podcast to manage their content and pricing for their shows. <br />
                            <a href="https://podcastsconnect.apple.com" className="text-white underline hover:text-gray-300">https://podcastsconnect.apple.com</a>
                        </p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Flipkart My Orders</h3>
                        <p>My Orders section of the India's largest ecommerce website for all screen sizes. <br />
                            <a href="https://flipkart.com" className="text-white underline hover:text-gray-300">https://flipkart.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;
