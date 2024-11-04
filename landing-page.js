import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Feature from '../components/Feature';
import Step from '../components/Step';
import GradientBackground from '../components/GradientBackground';

const MidasLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-blue-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-32">
        <GradientBackground />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-6xl font-bold text-center mb-6">Midas</h1>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Revolutionizing Financial Approvals with AI-Powered Automation
          </p>
          <div className="text-center">
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-colors">
              <span>Join Now</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Midas?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Feature 
              title="Automated Policy Checks"
              description="Ensure every submission complies with your financial policies before it reaches an approver."
            />
            <Feature 
              title="Seamless ERP Integration"
              description="Works with your existing systems like SAP and NetSuite"
            />
            <Feature 
              title="AI-Powered Validation"
              description="AI checks compliance instantly, ensuring accuracy and consistency."
            />
            <Feature 
              title="Automate and Grow"
              description="Eliminate busywork by automating repetitive administrative tasks."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Step 
              icon="✍️"
              title="Submit Expenses"
              description="Anyone in the organization can submit detailed expense requests"
            />
            <Step 
              icon="🤖"
              title="AI-Powered Validation"
              description="AI checks compliance instantly."
            />
            <Step 
              icon="✅"
              title="Approval & Feedback"
              description="Approvals are standardized, and users get instant feedback."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <GradientBackground />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Approvals?</h2>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-colors">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>© 2024 Midas AI. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MidasLandingPage;
