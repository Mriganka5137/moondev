import { HowToSteps } from "./HowToSteps";

export const WelcomeSection = () => (
  <div className="text-center space-y-8 my-20">
    <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-200">
      Welcome to Social AI
    </h1>
    <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
      Generate engaging social media posts with the power of AI. Simply enter a
      prompt below, and watch as our AI creates tailored content for your social
      platforms.
    </p>
    <FeatureList />
    <HowToSteps />
  </div>
);

const FeatureList = () => (
  <ul className="text-center max-w-md mx-auto text-zinc-600 dark:text-zinc-400 font-light">
    <li>✓ Platform-specific content</li>
    <li>✓ Engaging and shareable posts</li>
    <li>✓ Hashtag and emoji suggestions</li>
    <li>✓ Customizable for your brand voice</li>
  </ul>
);
