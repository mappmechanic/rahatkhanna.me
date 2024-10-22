'use client'

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
    const [mounted, setMounted] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        if (isOpen && iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src
        }

        setMounted(true);
    }, [isOpen]);

    // Only render the portal once mounted
    if (!mounted) {
        return null;
    }

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="absolute inset-2 md:inset-4 lg:inset-8 bg-white rounded-lg shadow-xl overflow-hidden"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 300,
                            duration: 0.3
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                                onClick={onClose}
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                ref={iframeRef}
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/2RwvQwjTNhs?autoplay=1"
                                title="My Career Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

    return ReactDOM.createPortal(
        modalContent,
        document.body
    )
}
