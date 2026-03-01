const CoachingSection = () => {
    return (
        <div className="bg-gradient-to-b from-indigo-900 to-purple-800 py-20 md:py-28 px-8">
            <div className="max-w-6xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Speaking / Coaching</h2>
                <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                    Helping engineers, founders, and teams navigate the shift to AI-first careers and products.
                </p>

                {/* Social proof strip */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 md:mb-16 text-sm">
                    <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
                        <span className="text-yellow-300 font-bold">40+</span>
                        <span className="text-purple-200">Engineers &amp; Professionals Mentored</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
                        <span className="text-yellow-300 font-bold">★ 5.0</span>
                        <span className="text-purple-200">on Topmate</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full">
                        <span className="text-yellow-300 font-bold">AI · Startups · Career Growth</span>
                        <span className="text-purple-200">Topics</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">One-on-One Coaching</h3>
                        <p className="text-sm md:text-base text-gray-200">Personalized guidance for engineers navigating the AI era — career pivots, technical growth, and leadership transitions. 40+ professionals coached, with reviews on <a href="https://topmate.io/rahat_khanna" className="underline text-purple-300 hover:text-white">my Topmate profile.</a></p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Workshops &amp; Seminars</h3>
                        <p className="text-sm md:text-base text-gray-200">Hands-on sessions for technology teams on AI tooling, engineering velocity, and building with LLMs. Covers practical patterns from real production systems — not just theory.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Startup Growth Advisory</h3>
                        <p className="text-sm md:text-base text-gray-200">Tactical advisory for early-stage startups: architecture, hiring, VC positioning, and product–market fit. I&apos;ve connected founders to VCs and key networks across the AI ecosystem.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Speaking Engagements</h3>
                        <p className="text-sm md:text-base text-gray-200">Talks on AI infrastructure, the future of engineering, and building resilient tech careers in the post-AI era. Available for conferences, company all-hands, and university events.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12">
                    <a
                        href="https://topmate.io/rahat_khanna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-purple-500 hover:bg-purple-400 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
                    >
                        Book a Session →
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CoachingSection;
