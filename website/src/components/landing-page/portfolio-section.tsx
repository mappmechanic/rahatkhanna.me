const CoachingSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 flex items-center justify-center p-8">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Services</h2>
                <p className="text-xl mb-12">Discover how we can work together to unlock your potential.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">One-on-One Coaching</h3>
                        <p>Personalized guidance to help you overcome obstacles and achieve your goals.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Workshops & Seminars</h3>
                        <p>Interactive sessions designed to inspire and equip you with practical tools for success.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Corporate Training</h3>
                        <p>Tailored programs to enhance team performance and foster a culture of innovation.</p>
                    </div>
                    <div className="bg-indigo-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Speaking Engagements</h3>
                        <p>Inspiring talks that motivate audiences to embrace change and pursue excellence.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoachingSection;