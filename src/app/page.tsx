export const metadata = {
  title: "Actory.ai — The World's First Fully Autonomous Software QA Tester",
  description: "Actory.ai provides hands-off QA testing for websites using intelligent AI agents",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Actory.ai</h1>
        <p className="text-lg text-gray-600 mt-4">
          The world's first fully autonomous software QA tester powered by AI.
        </p>
        <a href="#waitlist" className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Join the Waitlist
        </a>
      </div>
    </div>
  );
}