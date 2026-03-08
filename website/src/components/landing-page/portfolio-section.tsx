const PortfolioSection = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-900 to-purple-800 py-20 md:py-28 px-8">
            <div className="max-w-6xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
                <p className="text-xl mb-12">A selection of the systems, platforms, and products I&apos;ve shipped.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Featured AI project — full width */}
                    <div className="md:col-span-2 bg-blue-900 bg-opacity-70 border border-blue-400 border-opacity-40 p-6 rounded-lg text-left">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-xs font-semibold uppercase tracking-widest text-blue-300 bg-blue-800 bg-opacity-60 px-3 py-1 rounded-full">AI Infrastructure</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">Agent Observability & Evaluation Platform</h3>
                        <p className="text-gray-200 mb-3">
                            End-to-end platform for monitoring, tracing, and evaluating AI Agents in production — powering reliability and quality assurance for LLM-based systems at scale, with real-time observability pipelines and automated evaluation frameworks.
                        </p>
                        <p className="text-sm text-blue-300 font-medium">Python · React · LLM Evaluation · Observability · Platform Engineering</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">100 Best Albums - Apple Music</h3>
                        <p>A marketing microsite for Apple&apos;s 100 Best Albums awards in 2024. <br />
                            <a href="https://100best.music.apple.com" className="text-white underline hover:text-gray-300">https://100best.music.apple.com</a>
                        </p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Apple Music on the Web</h3>
                        <p>Full web experience for Apple Music — browse, stream, and discover music across all devices globally. <br />
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
                        <p>My Orders section of India&apos;s largest ecommerce website, redesigned for all screen sizes. <br />
                            <a href="https://flipkart.com" className="text-white underline hover:text-gray-300">https://flipkart.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;
