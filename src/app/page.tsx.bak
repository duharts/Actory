import Logo from '../components/Logo';
import FeatureCard from '../components/FeatureCard';
import Accordion from '../components/Accordion';
import UseCaseCard from '../components/UseCaseCard';
import LottieAnimation from '../components/LottieAnimation';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actory.ai — The World\'s First Fully Autonomous Software QA Tester',
  description: 'Actory.ai provides hands-off QA testing for websites using intelligent AI agents',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-indigo-600 transition">Benefits</a>
              <a href="#use-cases" className="text-gray-600 hover:text-indigo-600 transition">Use Cases</a>
              <a href="#waitlist" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Join Waitlist
              </a>
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu button */}
              <button className="text-gray-600">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                Fully autonomous software QA tester
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Introducing Actory.ai — the world's first fully autonomous software QA tester
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Provides hands-off QA testing for websites using intelligent AI agents. Our mission: To transform how teams approach quality assurance through comprehensive automation.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#waitlist" className="px-6 py-3 bg-indigo-600 text-white rounded-md text-center font-medium hover:bg-indigo-700 transition">
                  Join the Waitlist
                </a>
                <a href="#how-it-works" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md text-center font-medium hover:bg-gray-50 transition">
                  Learn More
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white p-4 rounded-lg shadow-xl">
                  <LottieAnimation 
                    animationUrl="/animations/security-camera.json" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Tags */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">Fast Testing</div>
              <div className="text-gray-600">98% QA Time Reduction</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">Smart Detection</div>
              <div className="text-gray-600">60% Cost Reduction in QA</div>
            </div>
            <div className="p-4 text-center">
              <div className="text-2xl font-bold text-indigo-600 mb-1">AI Powered</div>
              <div className="text-gray-600">40% Faster Release Cycle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intelligent AI agents provide comprehensive QA testing with minimal human intervention
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>}
              title="State-of-the-Art LLMs"
              description="Sophisticated functional tests adapt to your website's structure and behavior"
            />
            <FeatureCard
              icon={<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              title="Real-Time Detection"
              description="Issues are identified instantly, reducing risk and speeding up development"
            />
            <FeatureCard
              icon={<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>}
              title="Self-Healing Scripts"
              description="Tests automatically adapt to UI changes, reducing maintenance needs"
            />
            <FeatureCard
              icon={<svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              title="Session Memory"
              description="AI remembers past tests and improves over time"
            />
          </div>

          {/* Feature Details Accordion */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Accordion title="1. State-of-the-Art Large Language Models (LLMs)">
              <p className="text-gray-600 mb-4">
                Actory.ai leverages advanced LLMs (like GPT-class models) to generate intelligent, context-aware test cases. Rather than relying on rigid, manually written scripts, the AI:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Analyzes your site's structure (DOM, navigation flow, form behaviors)</li>
                <li>Automatically determines what functionality should be tested</li>
                <li>Adapts test logic based on the type of application (e-commerce, SaaS, CMS, etc.)</li>
                <li>Scales test creation quickly — even on large, dynamic websites</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This makes the QA process smarter and more flexible, reducing the need for detailed developer input.
              </p>
            </Accordion>

            <Accordion title="2. Real-Time Detection">
              <p className="text-gray-600 mb-4">
                The AI agent continuously scans the application during usage or deployment to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Detect UI errors, broken links, and failed JavaScript functions instantly</li>
                <li>Flag unexpected changes or regressions before they reach production</li>
                <li>Feed real-time results to developers or QA leads via dashboards or alerts</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Because it's fully autonomous and always on, this enables continuous testing — catching issues as they happen, not days later in staging.
              </p>
            </Accordion>

            <Accordion title="3. Self-Healing Test Scripts">
              <p className="text-gray-600 mb-4">
                Most automated tests break when the UI changes — for example, a button label changes or a layout shifts. Actory.ai avoids this by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Dynamically adjusting selectors and test flows using LLM-driven reasoning</li>
                <li>Monitoring context around elements (like text, visual placement, and function) rather than relying on static IDs or class names</li>
                <li>Updating its own test scripts in response to changes — with no manual rewrite needed</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This results in less brittle automation, fewer false positives, and more uptime for your test suite.
              </p>
            </Accordion>

            <Accordion title="4. Session Memory">
              <p className="text-gray-600 mb-4">
                The AI agents aren't stateless — they retain historical data such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>What was tested previously</li>
                <li>What passed or failed</li>
                <li>What pages or flows are most critical (e.g., checkout, login, data entry)</li>
                <li>How your site has evolved over time</li>
              </ul>
              <p className="text-gray-600 mt-4">
                This allows the AI to prioritize important paths for re-testing, automatically create regression test plans, and detect patterns in failures or behavior changes across deployments.
              </p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* The QA Bottleneck Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The QA Bottleneck</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Traditional QA processes can't keep up with modern development speeds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-semibold mb-2">LLM Complexity</div>
              <p className="text-gray-600">Modern AI-powered apps evolve fast. Testing them manually is no longer scalable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-semibold mb-2">Manual QA Fatigue</div>
              <p className="text-gray-600">Traditional testing is slow, tedious, and error-prone.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 font-semibold mb-2">Coverage Gaps</div>
              <p className="text-gray-600">Limited resources = incomplete test coverage and rising risk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Actory.ai Works: Three-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our three-step process delivers comprehensive testing with minimal setup
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Crawl & Map</h3>
              <p className="text-gray-600">AI agents explore and map the site structure, identifying critical flows and errors</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Detect Issues</h3>
              <p className="text-gray-600">Automatically finds broken links, UI issues, and functional defects</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Remember & Retest</h3>
              <p className="text-gray-600">Actory.ai remembers critical paths and ensures continued stability over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* One-Click Testing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">One-Click AI Testing</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Instant Start</h3>
                    <p className="text-gray-600">Launch autonomous testing with a single click.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">24/7 Coverage</h3>
                    <p className="text-gray-600">Uninterrupted, round-the-clock QA — no humans required.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">98% Time Savings</h3>
                    <p className="text-gray-600">Cut QA cycles dramatically and ship faster.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Developer-First</h3>
                    <p className="text-gray-600">Free your team from QA drudgery. Focus on building.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <LottieAnimation 
                  animationUrl="C:\Users\Duhar\OneDrive\Desktop\Actory.ai\security-camera.json" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your QA process and deliver better software, faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">90%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Reduction in Critical Bugs in Production</h3>
              <p className="text-gray-600">Dramatically reduce bugs that make it to production with continuous AI testing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">99.9%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Website Uptime</h3>
              <p className="text-gray-600">Catch critical issues before deployment to ensure maximum availability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">60%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Cost Reduction in QA</h3>
              <p className="text-gray-600">Significantly lower your quality assurance costs while improving results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">3x</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Faster Time-to-Resolution (TTR)</h3>
              <p className="text-gray-600">Instant alerts and detailed reports reduce time spent debugging.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">30%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Increase in Developer Productivity</h3>
              <p className="text-gray-600">Engineers spend less time writing and maintaining tests.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">70%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Less Time Spent on Regression Testing</h3>
              <p className="text-gray-600">Self-healing scripts and memory-based revalidation reduce repetitive work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2"></div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Annual Savings for Mid-Size Engineering Teams</h3>
              <p className="text-gray-600">Based on average costs of manual QA personnel, downtime, and defect leakage.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">95%+</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Accuracy in UI Bug Detection</h3>
              <p className="text-gray-600">High precision in identifying layout, element, and interaction issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-indigo-600 mb-2">100%</div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">Compliance-Ready Reports</h3>
              <p className="text-gray-600">Auto-generated test logs for ISO, SOC2, HIPAA, and PCI audits, coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI testing works across many industries and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <UseCaseCard
              icon={<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>}
              title="E-commerce"
              description="Validates checkout flows and product displays"
            />
            <UseCaseCard
              icon={<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>}
              title="SaaS Platforms"
              description="Verifies user flows and feature interactions"
            />
            <UseCaseCard
              icon={<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>}
              title="Content Sites"
              description="Tests media and link reliability across large volumes"
            />
            <UseCaseCard
              icon={<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
              title="Financial Services"
              description="Confirms transaction security and proper data handling"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-1 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Early Access & Beta Program</h2>
              <p className="text-gray-600 mb-6">
                Get Early Access to our limited beta for innovative teams. Receive premium support, influence product direction, and get special launch pricing.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Acme Inc."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
                >
                  Request Early Access
                </button>
              </form>
            </div>
            <div className="hidden md:block md:flex-1 bg-indigo-600">
              <div className="h-full flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Transform your QA process</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-200 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cut testing time by 98%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-200 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reduce QA costs by 60%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-200 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Release 40% faster</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-indigo-200 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Premium support included</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400">
                Revolutionizing website QA with intelligent AI agents
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2025 Actory.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



