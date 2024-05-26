import NewsletterForm from "./newsletter-form";

export function LandingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 space-y-6">
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
      <div className="w-full max-w-md space-y-2">
        
      </div>
    </main>
  );
}
