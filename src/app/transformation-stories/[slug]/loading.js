// Loading component for transformation story pages matching TransformationArticle.js design
import { Clock } from 'lucide-react';

function SkeletonBox({ className = "" }) {
  return (
    <div className={`animate-pulse bg-neutral-100 rounded-md ${className}`}></div>
  );
}

export default function Loading() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="bg-white">
        <div className="section-container pt-[100px] border-b-[1.5px] border-dashed border-[#122232] pb-[100px] mb-12">
          <div className="flex flex-col gap-10 max-w-[1193px] mx-auto">
            
            {/* Logo Row Skeleton */}
            <div className="flex items-center gap-3">
              <SkeletonBox className="w-10 h-8" /> {/* AltraByte */}
              <div className="w-6 h-6 flex items-center justify-center text-neutral-300">×</div>
              <SkeletonBox className="h-10 w-40" /> {/* Client Logo */}
            </div>

            {/* Title Container Skeleton */}
            <div className="flex flex-col gap-3">
              {/* Client Info */}
              <div className="flex items-center gap-3">
                <SkeletonBox className="h-6 w-12" />
                <SkeletonBox className="h-6 w-32 bg-neutral-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                <SkeletonBox className="h-6 w-40" />
              </div>

              {/* Main Title (56px approx) */}
              <div className="space-y-4 py-2">
                <SkeletonBox className="h-14 w-full max-w-3xl bg-neutral-200 rounded-lg" />
                <SkeletonBox className="h-14 w-2/3 max-w-2xl bg-neutral-200 rounded-lg" />
              </div>
            </div>

            {/* Hero Image Skeleton */}
            <div className="relative w-full h-[480px] bg-neutral-100 rounded-xl overflow-hidden">
               <SkeletonBox className="w-full h-full" />
            </div>

            {/* Starting Point Skeleton */}
            <div className="flex flex-col gap-6 mt-10">
                <SkeletonBox className="h-8 w-60 bg-neutral-200" /> {/* "The Starting Point" */}
                
                {/* Quote Box Skeleton */}
                <div className="flex items-center px-7 py-6 gap-2.5 border-l-4 border-neutral-200 bg-neutral-50/50">
                    <SkeletonBox className="h-8 w-full max-w-2xl bg-neutral-200" />
                </div>

                {/* Body Text Skeleton */}
                <div className="space-y-3">
                    <SkeletonBox className="h-5 w-full bg-neutral-100" />
                    <SkeletonBox className="h-5 w-full bg-neutral-100" />
                    <SkeletonBox className="h-5 w-4/5 bg-neutral-100" />
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout Skeleton */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[80px]">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[120px]">
              
              {/* Sidebar Skeleton (Sticky) */}
              <div className="hidden lg:flex flex-row items-start box-border w-[280px] p-[32px] pl-[20px] gap-5 border-[1.5px] border-[#E7E9EB] rounded-xl sticky top-32 self-start">
                  {/* Progress Line */}
                  <div className="flex flex-col items-center pt-2 gap-1 h-full min-h-[200px]">
                      <div className="w-2 h-2 rounded-full border-[1.5px] border-neutral-300 bg-white z-10"></div>
                      <div className="w-[1.5px] flex-1 bg-neutral-100"></div>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex flex-col gap-6 w-full">
                      {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex flex-col gap-2">
                              <SkeletonBox className="h-5 w-3/4 bg-neutral-200" />
                          </div>
                      ))}
                  </div>
              </div>

              {/* Main Content Column Skeleton */}
              <div className="flex-1 flex flex-col w-full max-w-[800px] lg:pl-[60px]">
                  
                  {/* Content Blocks */}
                  {[1, 2, 3].map((section) => (
                      <div key={section} className="mb-16">
                          {/* Section H2 */}
                          <SkeletonBox className="h-10 w-1/2 mb-8 bg-neutral-200" />
                          
                          {/* Paragraphs */}
                          <div className="space-y-4 mb-8">
                              <SkeletonBox className="h-5 w-full" />
                              <SkeletonBox className="h-5 w-full" />
                              <SkeletonBox className="h-5 w-5/6" />
                          </div>

                          {/* Image or Callout */}
                          <div className="w-full h-64 bg-neutral-100 rounded-xl mb-8"></div>

                          {/* More Paragraphs */}
                          <div className="space-y-4">
                              <SkeletonBox className="h-5 w-full" />
                              <SkeletonBox className="h-5 w-4/5" />
                          </div>
                      </div>
                  ))}

              </div>
          </div>
      </section>
      
      {/* Loading Indicator Toast */}
      <div className="fixed bottom-8 right-8 bg-[#122232] text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 animate-pulse z-50">
        <Clock className="w-4 h-4 text-[#7863FC]" />
        <span className="text-sm font-medium">Loading story...</span>
      </div>
    </div>
  );
}