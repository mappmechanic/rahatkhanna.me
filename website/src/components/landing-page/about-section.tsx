const AboutSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 flex items-center justify-center p-8">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-4xl font-bold mb-6">About Rahat Khanna</h2>
                <p className="text-xl mb-8">
                    Passionate about personal development, creativity, and innovation. I help individuals and organizations unlock their full potential and achieve extraordinary results.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Personal Growth</h3>
                        <p>Empowering individuals to overcome limitations and reach new heights.</p>
                    </div>
                    <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Creative Solutions</h3>
                        <p>Fostering innovative thinking to solve complex problems.</p>
                    </div>
                    <div className="bg-purple-800 bg-opacity-50 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">Transformative Impact</h3>
                        <p>Driving meaningful change in individuals and organizations.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export the component
export default AboutSection;