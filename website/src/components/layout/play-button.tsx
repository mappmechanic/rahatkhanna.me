import { motion } from "framer-motion"
import { Play } from "lucide-react"

interface PlayButtonProps {
    onPlay: () => void
}

export default function PlayButton({ onPlay }: PlayButtonProps) {
    return (
        <div>
            <motion.div
                className="absolute top-0 left-0 w-full h-full"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <motion.div
                    className="absolute top-0 left-1/2 w-12 h-1 -ml-6 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                    animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
            <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center text-white/80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            >
                <motion.div
                    whileHover={{ scale: 1.1, opacity: 1 }}
                    whileTap={{ scale: 0.9, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    onClick={onPlay}
                    role="button"
                    tabIndex={0}
                >
                    <Play className="w-16 h-16 fill-current" aria-hidden="true" />
                </motion.div>
                <motion.p
                    className="mt-2 text-lg sm:text-xl font-semibold"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.8 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                >
                    Watch My Career
                </motion.p>
            </motion.div>
        </div>
    )
}
