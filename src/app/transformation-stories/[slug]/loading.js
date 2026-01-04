// Loading component for transformation story pages
import { Clock } from 'lucide-react';

function SkeletonBox({ className = "" }) {
  return (
    <div className={`animate-pulse bg-neutral-200 rounded ${className}`}></div>
  );
}

function SkeletonText({ className = "", lines = 1 }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox key={i} className="h-4 w-full" />
      ))}
    </div>
  );
}

export default function Loading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative bg-white overflow-hidden">
        <div className="section-container pt-8">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center space-x-2 mb-8">
            <SkeletonBox className="h-4 w-12" />
            <SkeletonBox className="h-4 w-4" />
            <SkeletonBox className="h-4 w-32" />
            <SkeletonBox className="h-4 w-4" />
            <SkeletonBox className="h-4 w-20" />
          </div>

          {/* Client Info Skeleton */}
          <div className="flex items-center space-x-4 mb-8 p-4 bg-primary-50 rounded-lg border border-primary-100">
            <SkeletonBox className="w-12 h-12 rounded" />
            <div className="space-y-2">
              <SkeletonBox className="h-5 w-32" />
              <SkeletonBox className="h-4 w-24" />
            </div>
          </div>

          {/* Title Skeleton */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="space-y-4 mb-6">
              <SkeletonBox className="h-12 w-3/4 mx-auto" />
              <SkeletonBox className="h-12 w-1/2 mx-auto" />
            </div>
            <div className="max-w-2xl mx-auto space-y-2">
              <SkeletonBox className="h-6 w-full" />
              <SkeletonBox className="h-6 w-3/4 mx-auto" />
            </div>
          </div>

          {/* Hero Image Skeleton */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-16">
            <SkeletonBox className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Starting Point Section Skeleton */}
      <section className="section bg-neutral-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <SkeletonBox className="h-10 w-64 mx-auto" />
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-neutral-100 mb-8">
              <div className="space-y-4 mb-6">
                <SkeletonBox className="h-6 w-full" />
                <SkeletonBox className="h-6 w-5/6" />
                <SkeletonBox className="h-6 w-4/5" />
              </div>
              <div className="flex items-center">
                <SkeletonBox className="w-12 h-12 rounded-full" />
                <div className="ml-4 space-y-2">
                  <SkeletonBox className="h-5 w-24" />
                  <SkeletonBox className="h-4 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="section">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Skeleton */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm">
                <SkeletonBox className="h-6 w-20 mb-6" />
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center space-x-3 p-3">
                      <SkeletonBox className="w-8 h-8 rounded-full" />
                      <SkeletonBox className="h-5 w-16" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content Skeleton */}
            <div className="lg:col-span-3 space-y-16">
              {/* Challenges Section */}
              <div>
                <SkeletonBox className="h-8 w-40 mb-8" />
                <div className="grid gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-start space-x-4 p-6 bg-white border border-neutral-200 rounded-xl">
                      <SkeletonBox className="w-8 h-8" />
                      <div className="flex-1 space-y-3">
                        <SkeletonBox className="h-6 w-3/4" />
                        <SkeletonText lines={2} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Section */}
              <div>
                <SkeletonBox className="h-8 w-32 mb-8" />
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start space-x-6">
                      <SkeletonBox className="w-12 h-12 rounded-full flex-shrink-0" />
                      <div className="flex-1 bg-white p-6 border border-neutral-200 rounded-xl">
                        <SkeletonBox className="h-4 w-20 mb-2" />
                        <SkeletonBox className="h-6 w-3/4 mb-3" />
                        <SkeletonText lines={2} className="mb-4" />
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3].map((j) => (
                            <SkeletonBox key={j} className="h-6 w-20 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 animate-pulse">
        <Clock className="w-5 h-5" />
        <span className="text-sm font-medium">Loading transformation story...</span>
      </div>
    </div>
  );
}