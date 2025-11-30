"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Icon1 = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6662 28.0048V13.1026C14.6661 12.3951 14.3849 11.7167 13.8846 11.2165L9.33067 6.6626L4.77678 11.2165C4.27644 11.7167 3.99527 12.3951 3.99512 13.1026V28.0048" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33076 16V26.6711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.23657 11.9985H14.4235" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33076 3.99561V6.66338" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.668 28.0054V14.7572C18.6681 14.3199 18.8827 13.9104 19.2422 13.6613C19.6017 13.4122 20.0605 13.3552 20.4701 13.5087L27.1395 16.0097C27.66 16.2049 28.005 16.7024 28.0052 17.2583V28.0054" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.3389 28.0048H2.66113" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.0027 20.0014H24.6705" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.0027 24.0034H24.6705" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon2 = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.99697 6.6626H10.6648C11.4014 6.6626 11.9986 7.2598 11.9986 7.99649V10.6643H6.66309V7.99649C6.66309 7.2598 7.26029 6.6626 7.99697 6.6626Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.33076 3.99561V6.66338" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.99512 28.0051V11.9984C3.99512 11.2618 4.59232 10.6646 5.32901 10.6646H13.3323C14.069 10.6646 14.6662 11.2618 14.6662 11.9984V16.0001" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.668 16.0002V6.66299C18.6681 6.22562 18.8827 5.81612 19.2422 5.56704C19.6017 5.31796 20.0605 5.26095 20.4701 5.41447L27.1395 7.91551C27.6605 8.1108 28.0055 8.60897 28.0052 9.16536V28.0052" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6648 28.005V17.3339C10.6648 16.5972 11.262 16 11.9987 16H20.002C20.7387 16 21.3359 16.5972 21.3359 17.3339V28.005" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.9993 23.603H18.0009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.9993 20.0014H18.0009" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.3389 28.0048H2.66113" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon3 = () => (
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.6744 10.6709V5.33535C18.6746 4.89798 18.8892 4.48848 19.2487 4.2394C19.6082 3.99032 20.067 3.93331 20.4765 4.08683L27.146 6.58787C27.667 6.78316 28.012 7.28133 28.0117 7.83772V28.0115" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.2718 10.6709H19.7416C20.6256 10.6709 21.3423 11.3875 21.3423 12.2716V28.0115H10.6711V12.2716C10.6711 11.3875 11.3878 10.6709 12.2718 10.6709Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.6728 10.6711V8.00332C14.6728 7.26664 14.0756 6.66943 13.3389 6.66943H8.00332C7.26664 6.66943 6.66943 7.26664 6.66943 8.00332V14.6728" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6711 4.00146V6.66924" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M29.3455 28.0117H2.66772" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.0059 18.2744H18.0075" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.0059 14.6728H18.0075" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.0059 21.8759H18.0075" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.00171 28.0117V16.0067C4.00171 15.2701 4.59891 14.6729 5.3356 14.6729H10.6712" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const journeys = [
  {
    title: "Startup/Growing Business",
    description: "Foundation building from scratch",
    icon: Icon1,
  },
  {
    title: "Established Company",
    description: "System integration and optimization",
    icon: Icon2,
  },
  {
    title: "Scale-Ready Business",
    description: "Advanced automation and intelligence",
    icon: Icon3,
  },
];

const TransformationStoriesJourneys = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const headerRef = useRef(null);
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    const containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContainerVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    return () => containerObserver.disconnect();
  }, []);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
      }
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => footerObserver.disconnect();
  }, []);

  return (
    <section className="border-b border-dashed border-neutral-500 px-4 py-20">
      <div className="section-container flex flex-col items-center gap-16">
        <header
          ref={headerRef}
          className={`flex max-w-[590px] flex-col items-center gap-3 text-center transition-all duration-700 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-[32px] font-medium leading-[1.28] tracking-[-0.01em] text-neutral-500 md:text-[36px]">
            Your Transformation Starts Here
          </h2>
          <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[18px]">
            Which Journey Matches Yours?
          </p>
        </header>

        <div
          ref={containerRef}
          className={`flex w-full max-w-[1200px] flex-col items-center gap-7 transition-all duration-700 ${
            isContainerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex w-full flex-col overflow-hidden rounded-[12px] border-[1.5px] border-primary-100">
            <div className="flex flex-col bg-primary-50 lg:flex-row">
              {journeys.map((journey, idx) => {
                const Icon = journey.icon;
                return (
                  <div
                    key={journey.title}
                    className={`group flex flex-1 cursor-pointer items-center gap-5 px-5 py-5 transition-all duration-300 hover:bg-primary-100 ${
                      idx < journeys.length - 1
                        ? "border-b border-dashed border-neutral-500 lg:border-b-0 lg:border-r"
                        : ""
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-[9.33px] bg-primary-500 text-white transition-transform duration-300 group-hover:scale-110">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-medium leading-[1.5] tracking-[-0.01em] text-neutral-500 transition-colors duration-300 group-hover:text-primary-500">
                        {journey.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-px w-full border-t-[1.5px] border-dashed border-neutral-500" />

            <div className="flex flex-col lg:flex-row">
              {journeys.map((journey, idx) => (
                <div
                  key={journey.title}
                  className={`flex-1 bg-white px-5 py-5 text-[15px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[16px] ${
                    idx < journeys.length - 1
                      ? "border-b border-dashed border-neutral-500 lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  {journey.description}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={footerRef}
            className={`flex flex-col items-center gap-3 text-center transition-all duration-700 md:flex-row md:gap-3 ${
              isFooterVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <ArrowRight className="h-6 w-6 text-primary-500 md:h-8 md:w-8" strokeWidth={2} />
            <p className="text-[16px] font-normal leading-[1.5] tracking-[-0.01em] text-neutral-400 md:text-[18px]">
              The next step is the same for everyone:{" "}
              <span className="font-medium text-neutral-500">Foundation Audit</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStoriesJourneys;
