import NewsletterForm from "./newsletter-form";
// Update the path if necessary
import { Youtube } from "./youtube/youtube";

export function LandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 space-y-6">
      <div className="w-full space-y-2">
        <div className="flex justify-center">
          <Youtube videoId="2RwvQwjTNhs" />
        </div>
      </div>
      <div className="text-center space-y-2">
        <h1 className="text-3.2xl md:text-4.8xl font-bold tracking-tighter text-white">
          <span>Ready to</span>
          {""}
          <span className="block text-6xl md:text-7xl lg:text-8xl font-extrabold">
            Unleash your Potential with AI
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Subscribe to the newsletter
        </p>
        <NewsletterForm />
      </div>
    </main>
  );
}
