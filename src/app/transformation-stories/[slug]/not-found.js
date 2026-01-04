// Not found page for transformation stories
import Link from 'next/link';
import { ArrowLeft, Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-6">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
            <Search className="w-12 h-12 text-primary-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-700 mb-4">
            Story Not Found
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed mb-6">
            The transformation story you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-neutral-400">
            Don't worry, there are plenty of other success stories to explore!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/transformation-stories"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            View All Stories
          </Link>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border-2 border-neutral-300 text-neutral-600 font-semibold rounded-lg hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go Home
          </Link>
        </div>

        {/* Suggested Stories */}
        <div className="mt-12 p-6 bg-neutral-50 rounded-xl">
          <h3 className="text-lg font-semibold text-neutral-700 mb-4">
            Explore Other Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <Link
              href="/transformation-stories/retail"
              className="p-3 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <div className="font-medium text-neutral-700">Rose All Day Cosmetics</div>
              <div className="text-neutral-500">From Spreadsheets to Systems</div>
            </Link>
            <Link
              href="/transformation-stories/fintech"
              className="p-3 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <div className="font-medium text-neutral-700">Amser</div>
              <div className="text-neutral-500">From Chaos to Clarity</div>
            </Link>
            <Link
              href="/transformation-stories/marketplace"
              className="p-3 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <div className="font-medium text-neutral-700">Paragon</div>
              <div className="text-neutral-500">From Manual to Automated</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}