const CoachingSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 flex items-center justify-center p-8 pt-24 md:pt-12">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Speaking/Coaching</h2>
                <p className="text-lg md:text-xl mb-12">Discover how we can work together to unlock your potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">One-on-One Coaching</h3>
                        <p className="text-sm md:text-base">Personalized guidance to help you overcome obstacles and achieve your goals. I’ve mentored 20-30 professionals, providing career direction and advice, with testimonials available on <a href="https://topmate.io/rahat_khanna" className="underline text-gray-300">my Topmate profile.</a></p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Workshops & Seminars</h3>
                        <p className="text-sm md:text-base">Interactive sessions designed to inspire and equip you with practical tools for success. Past events include specialized workshops for technology teams and leadership development.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Startup Growth Advisory</h3>
                        <p className="text-sm md:text-base">Tailored advisory programs to help startups scale, refine processes, and foster innovation. I’ve helped several startups grow by connecting them to VCs and important tech founders, ensuring they have the strategic support needed to thrive.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Speaking Engagements</h3>
                        <p className="text-sm md:text-base">Inspiring talks that motivate audiences to embrace change and pursue excellence. Topics range from emerging AI trends to building resilient career and startup strategies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachingSection;
