import './styles.css'; // Import the CSS file

export function Youtube({ videoId }: { videoId: string }) {
    return (
        <div className="tv-container relative max-w-3xl w-full aspect-video">
            <div className="tv-frame absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="tv-screen absolute inset-8 bg-black rounded-2xl overflow-hidden">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="tv-speaker absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-200 rounded-full"></div>
                <div className="tv-stand absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-white rounded-b-3xl shadow-md"></div>
                <div className="tv-antenna-left absolute -top-12 left-8 w-1 h-16 bg-gray-400 transform -rotate-15"></div>
                <div className="tv-antenna-right absolute -top-12 right-8 w-1 h-16 bg-gray-400 transform rotate-15"></div>
                <div className="tv-button absolute top-4 right-4 w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
        </div>
    )
};