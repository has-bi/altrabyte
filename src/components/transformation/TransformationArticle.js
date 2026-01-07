"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, CheckCircle, Clock, Trophy, BarChart3, ArrowRight } from 'lucide-react';
import TransformationStoriesCTA from './TransformationStoriesCTA';

// [Modified] Article Hero Section Component - Matching exact Figma specs
function ArticleHero({ story }) {
  return (
    <section className="bg-white">
      {/* Container with top padding and bottom border as per design */}
      <div className="section-container pt-[100px] border-b-[1.5px] border-dashed border-[#122232] pb-[100px] mb-12">
        
        {/* Header Content Container - Gap 40px */}
        <div className="flex flex-col gap-10 max-w-[1193px] mx-auto">
            
            {/* Logo Container - Order 0 */}
            <div className="flex items-center gap-3">
                {/* AltraByte Logo (Placeholder for 'Full Logo - Black 1') */}
                <div className="w-10 h-8 relative">
                   <Image src="/images/logogram-purple.png" alt="AltraByte" fill className="object-contain" /> 
                </div>
                
                {/* X Icon */}
                <div className="w-6 h-6 flex items-center justify-center text-[#9299A1]">
                    <span className="text-xl leading-none">×</span>
                </div>

                {/* Client Logo */}
                <div className="relative h-10 w-[158px]">
                   <Image 
                      src={story.client.logo} 
                      alt={story.client.name} 
                      fill 
                      className="object-contain object-left" 
                   />
                </div>
            </div>

            {/* Title Container - Order 1 */}
            <div className="flex flex-col gap-3">
                {/* Client Info Container */}
                <div className="flex items-center gap-3 text-[18px] leading-[150%]">
                    <span className="text-[#414E5B] font-normal">Client</span>
                    <span className="text-[#122232] font-medium">{story.client.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B6BABF]" />
                    <span className="text-[#414E5B] font-normal">{story.client.description || "Industry Leader"}</span>
                </div>

                {/* Main Title - Plus Jakarta Sans Display 1 56px Bold */}
                <h1 className="text-[56px] leading-[128%] font-medium text-[#122232] tracking-[-0.01em]">
                    {story.title}
                </h1>
            </div>

            {/* Hero Image - Frame 80 - Order 2 */}
            <div className="relative w-full h-[480px] bg-[#F2EFFF] rounded-xl overflow-hidden">
               {story.image && (
                  <Image
                    src={story.image}
                    alt={`${story.client.name} transformation`}
                    fill
                    className="object-cover"
                    priority
                  />
               )}
            </div>

            {/* Starting Point Container - Order 3 */}
            <div className="flex flex-col gap-6 mt-10">
                <h2 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
                    The Starting Point
                </h2>
                
                {/* Quote Box */}
                <div className="flex items-center px-7 py-3 gap-2.5 bg-gradient-to-r from-[#F2EFFF] to-transparent border-l-4 border-[#7863FC]">
                    <p className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
                        {story.sections?.find(s => s.label.includes('Challenge'))?.value || 'Initial business challenges...'}
                    </p>
                </div>

                {/* Body Text */}
                <p className="text-[20px] leading-[150%] font-normal text-[#414E5B] tracking-[-0.01em]">
                    {story.description || `Before AltraByte, ${story.client.name} was facing significant operational hurdles...`}
                </p>
            </div>

        </div>
      </div>
    </section>
  );
}

// Starting Point Section - Figma: Starting Point Container


// Sidebar Progress Indicator - Figma: Sidebar Container
// [Modified] Sidebar Progress Indicator - Matches Figma "Sidebar Container"
// [Modified] Sidebar Progress Indicator - Matches Figma "Sidebar Container"
function ProgressSidebar({ activeSection, onSectionClick, sections = [] }) {
  // If no dynamic sections provided (fallback), use hardcoded defaults
  const displaySections = sections.length > 0 ? sections : [
    { id: 'challenge', label: 'Key Challenges' },
    { id: 'solution', label: 'Our Solution' },
    { id: 'timeline', label: 'Transformation Timeline' },
    { id: 'results', label: 'Quantifiable Results' },
  ];

  return (
    // Sidebar Container: w-[280px], border: 1.5px solid #E7E9EB, radius: 12px, padding: 32px 32px 32px 20px, gap: 20px
    <div className="hidden lg:flex flex-row items-start box-border w-[280px] p-[32px] pl-[20px] gap-5 border-[1.5px] border-[#E7E9EB] rounded-xl">
      
      {/* Sidebar Indicator Container: w-[3px] */}
      <div className="relative w-[3px] h-[170px] flex-none">
          {/* Background Grey Line */}
          <div className="absolute left-0 top-0 w-[3px] h-full bg-[#D7D0FF] rounded-full opacity-30"></div>
          
          {/* Active Indicator Line (Animated) */}
           {/* Calculate top/height based on active index. Approximating heights for simplicity: 4 items distributed. */}
           {/* Calculate top/height based on active index. Approximating heights for simplicity. */}
          <div 
             className="absolute left-0 w-[3px] bg-[#7863FC] transition-all duration-300 ease-in-out rounded-full shadow-[0_0_10px_rgba(120,99,252,0.5)]"
             style={{
                height: `${100 / displaySections.length}%`, 
                top: `${displaySections.findIndex(s => s.id === activeSection) * (100 / displaySections.length)}%`
             }}
          />
      </div>

      {/* Content Container: gap 20px */}
      <div className="flex flex-col gap-5 flex-1">
        {displaySections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className={`text-left w-full transition-colors duration-300 text-[16px] leading-[140%] ${
                  isActive 
                  ? 'font-medium text-[#7863FC]' // Active: Bold/Medium Purple
                  : 'font-normal text-[#122232] hover:text-[#414E5B]' // Inactive: Regular Black
              }`}
            >
              {section.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Key Challenges Section - Figma: Key Challenges Container
// [Modified] Key Challenges Section - Matches "Key Challenges Container" & "Path Details Item"
function KeyChallenges({ story }) {
  const challengeText = story.sections?.find(s => s.label.includes('Challenge'))?.value || '';
  const challenges = challengeText.split('\n').filter(line => line.trim().length > 0);

  return (
    <div id="challenge" className="flex flex-col gap-6 w-full mb-10 scroll-mt-32">
       {/* Title: Heading 4/24/Bold */}
      <h3 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
          Key Challenges
      </h3>
      
      <div className="flex flex-col gap-2">
        {challenges.length > 0 ? (
          challenges.map((challenge, index) => (
            // Path Details Item Container: gap 12px
            <div key={index} className="flex flex-row items-start gap-3">
               {/* Path Indicator: 8x8px square, radius 2.3px */}
               <div className="flex items-center h-[27px]"> {/* Vertically center indicator to text line-height */}
                  <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
               </div>
               
               {/* Text: Body 2/18 */}
               <p className="text-[18px] leading-[150%] text-[#122232] font-medium tracking-[-0.01em]">
                  {challenge.replace(/^[•-]\s*/, '')}
               </p>
            </div>
          ))
        ) : (
          <p className="text-[18px] text-[#414E5B]">Challenge details not available.</p>
        )}
      </div>

       {/* Separator Vector: Dashed Border */}
       <div className="w-full h-px border-t border-dashed border-[#122232] mt-6"></div>
    </div>
  );
}

// Solution Section - Figma: Solution Container
// [Modified] Solution Section - Matches "Solution Container"
function SolutionSection({ story }) {
  const solutionText = story.sections?.find(s => s.label.includes('Journey'))?.value || '';
  const phases = solutionText.split('\n').filter(line => line.trim().length > 0);

  return (
    <div id="solution" className="flex flex-col gap-6 w-full mb-10 scroll-mt-32">
      <h3 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
          Our Foundation-First Solution
      </h3>
      
      {/* Solution Details Container: bg #F2EFFF, radius 12px, padding 40px, gap 24px */}
      <div className="bg-[#F2EFFF] rounded-xl p-[40px] flex flex-col gap-6">
         
         {/* Title inside box? No, design shows list of items styling directly */}
         {/* "Path Details Column" inside Solution */}

         {phases.length > 0 ? (
            phases.map((phase, index) => (
               // Path Details Item
               <div key={index} className="flex flex-row items-start gap-3">
                  {/* Path Indicator */}
                  <div className="flex items-center h-[27px]">
                      <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-[18px] leading-[150%] text-[#414E5B] tracking-[-0.01em]">
                     {phase.replace(/^[•-]\s*/, '').replace(/Phase \d+:/, '').trim()}
                  </p>
               </div>
            ))
         ) : (
             <p className="text-[18px] text-[#414E5B]">Solution details not available.</p>
         )}
      </div>
       
      {/* Separator Vector */}
      <div className="w-full h-px border-t border-dashed border-[#122232] mt-6"></div>
    </div>
  );
}

// Timeline Section - Figma: Timeline Container
// [Modified] Timeline Section - Matches "Timeline Container"
function TimelineSection({ story }) {
  return (
    <div id="timeline" className="flex flex-col gap-6 w-full mb-10 scroll-mt-32">
       <h3 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
           Transformation Timeline
       </h3>
       
       {/* Timeline Details Container: gap 8px */}
       <div className="flex flex-col gap-2">
            
            {/* Timeline Item 1 */}
            <div className="flex flex-row items-start gap-3">
                 <div className="flex items-center h-[27px]">
                    <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
                 </div>
                 <div className="flex gap-3 text-[18px] leading-[150%] tracking-[-0.01em]">
                    <span className="text-[#414E5B] w-[120px] shrink-0">Week 1-2</span>
                    <span className="text-[#122232] font-medium">Foundation audit and data consolidation</span>
                 </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex flex-row items-start gap-3">
                 <div className="flex items-center h-[27px]">
                    <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
                 </div>
                 <div className="flex gap-3 text-[18px] leading-[150%] tracking-[-0.01em]">
                    <span className="text-[#414E5B] w-[120px] shrink-0">Week 3-6</span>
                    <span className="text-[#122232] font-medium">Cloud infrastructure setup & data pipeline</span>
                 </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex flex-row items-start gap-3">
                 <div className="flex items-center h-[27px]">
                    <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
                 </div>
                 <div className="flex gap-3 text-[18px] leading-[150%] tracking-[-0.01em]">
                    <span className="text-[#414E5B] w-[120px] shrink-0">Week 7-8</span>
                    <span className="text-[#122232] font-medium">Dashboard build and handover workshop</span>
                 </div>
            </div>
       </div>

       {/* Separator Vector */}
       <div className="w-full h-px border-t border-dashed border-[#122232] mt-6"></div>
    </div>
  );
}

// Results Section - Figma: Results Container
// [Modified] Results Section - Matches "Results Container"
// [Modified] Results Section - Matches "Results Container" with "Journey Options"
function ResultsSection({ story }) {
  const outcomeText = story.sections?.find(s => s.label.includes('Outcome'))?.value || '';
  const outcomes = outcomeText.split('\n').filter(line => line.trim().length > 0);
  
  // Also get Journey phases for the table if needed, or just use outcomes. 
  // The CSS name "Journey Options" suggests it might display the Journey phases.
  // Given constraints, I will display Outcomes in this table format as it is inside Results Container.

  return (
    <div id="results" className="flex flex-col gap-6 w-full mb-10 scroll-mt-32">
      <h3 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
          Quantifiable Results
      </h3>
      
      {/* Path Details Column - gap 16px */}
      <div className="flex flex-col gap-4">
         {/* Subhead: Body 1/20 Bold */}
         <h4 className="text-[20px] leading-[150%] font-medium text-[#122232] tracking-[-0.01em]">
            Impact Overview
         </h4>

         <div className="flex flex-col gap-2">
            {outcomes.map((outcome, index) => (
                <div key={index} className="flex flex-row items-start gap-3">
                     <div className="flex items-center h-[27px]">
                        <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
                     </div>
                     <p className="text-[18px] leading-[150%] text-[#414E5B] tracking-[-0.01em]">
                        {outcome.replace(/^[•-]\s*/, '')}
                     </p>
                </div>
            ))}
         </div>
      </div>

      {/* [New] Journey Options / Descriptions Table */}
      {/* Container: 1.5px solid #D5CFFE, radius 12px */}
      <div className="mt-8 flex flex-col w-full border-[1.5px] border-[#D5CFFE] rounded-xl overflow-hidden">
          {/* Header Row: Journey Options */}
          {/* bg #F2EFFF, border-bottom 1.5px solid #D5CFFE */}
          <div className="flex flex-row w-full bg-[#F2EFFF] border-b-[1.5px] border-[#D5CFFE]">
              {outcomes.slice(0, 4).map((_, index) => (
                  <div key={index} className="flex-1 p-[12px_16px] flex items-center gap-5 border-r-[1.5px] border-[#D5CFFE] last:border-r-0">
                      <span className="text-[16px] font-medium text-[#122232] leading-[140%] tracking-[-0.01em]">
                          Result {index + 1}
                      </span>
                  </div>
              ))}
          </div>

          {/* Content Row: Journey Descriptions */}
          {/* bg White (default) */}
          <div className="flex flex-row w-full">
              {outcomes.slice(0, 4).map((outcome, index) => (
                  <div key={index} className="flex-1 p-[12px_16px] flex items-start gap-5 border-r-[1.5px] border-[#D5CFFE] last:border-r-0">
                      <span className="text-[16px] font-normal text-[#414E5B] leading-[140%] tracking-[-0.01em]">
                         {outcome.replace(/^[•-]\s*/, '')}
                      </span>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}





// Related Stories Section - Figma: You may also be interested in
function RelatedStories() {
  // Hardcoded for display as requested by design reference
  const stories = [
      {
          title: "From Chaos to Clarity",
          client: "Greenways",
          description: "Greenways was a growing distribution company with multiple data sources but zero intelligence.",
          link: "/transformation-stories/greenways", 
          theme: "#EBF8FF", // Light Blue
          logo: "/images/client/greenways.png" // Placeholder
      },
      {
          title: "From Manual to Automated",
          client: "Paragon Corp",
          description: "Paragon was an established beauty retailer with multiple platforms and systems, but most processes were manual.",
          link: "/transformation-stories/paragon",
          theme: "#F0FFF4", // Light Green
          logo: "/images/client/paragon.png" // Placeholder
      }
  ];

  return (
    <section className="section bg-[#F9F3F2] py-24">
        <div className="section-container">
            <h2 className="text-3xl font-bold text-center text-neutral-700 mb-16">You may also be interested in</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {stories.map((story, index) => (
                    <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex flex-col h-full">
                       <div className="mb-6">
                          {/* Placeholder Logo Area */}
                          <div className="h-8 w-auto flex items-center font-bold text-neutral-800">
                             {/* Mock Logo */}
                             {index === 0 ? (
                                <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-blue-500 rounded-md"></div><span>GreenWays</span></div>
                             ) : (
                                <div className="flex items-center space-x-2"><div className="w-8 h-8 bg-teal-500 rounded-md"></div><span>PARAGONCORP</span></div>
                             )}
                          </div>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-neutral-800 mb-4">{story.title}</h3>
                       <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                          {story.description}
                       </p>
                       
                       <Link href={story.link} className="flex items-center text-primary-600 font-semibold hover:text-primary-700 group">
                           Read full story 
                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

// [Modified] Dynamic Block Renderer to match Figma Specs
const BlockRenderer = ({ block }) => {
  const { type, id } = block;
  const value = block[type];

  if (!value) return null;

  switch (type) {
    case 'heading_2':
      const text = value.rich_text?.[0]?.plain_text || '';
      const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return (
        <div id={slug} className="flex flex-col gap-6 w-full mb-10 scroll-mt-32 pt-8">
           <h3 className="text-[24px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
               {text}
           </h3>
           <div className="w-full h-px border-t border-dashed border-[#122232] mt-6 hidden"></div> {/* Separator if needed, handled by container */}
        </div>
      );

    case 'bulleted_list_item':
      return (
        <div className="flex flex-row items-start gap-3 mb-2">
            <div className="flex items-center h-[27px]">
                <div className="w-2 h-2 bg-[#7863FC] rounded-[2px] flex-none"></div>
            </div>
            <div className="text-[18px] leading-[150%] text-[#122232] font-medium tracking-[-0.01em]">
                {value.rich_text.map((t, i) => (
                    <span key={i} className={t.annotations.bold ? "font-bold" : ""}>{t.plain_text}</span>
                ))}
            </div>
        </div>
      );

    case 'paragraph':
        if (!value.rich_text.length) return <div className="h-4" />;
        return (
            <p className="text-[18px] leading-[150%] text-[#414E5B] tracking-[-0.01em] mb-4">
                {value.rich_text.map((t, i) => (
                    <span key={i} className={t.annotations.bold ? "font-bold text-[#122232]" : ""}>{t.plain_text}</span>
                ))}
            </p>
        );

    case 'callout':
        // Figma: Solution Container style (Purple background)
        return (
            <div className="bg-[#F2EFFF] rounded-xl p-[40px] flex flex-col gap-4 mb-8">
                 <div className="text-[18px] leading-[150%] text-[#414E5B] tracking-[-0.01em]">
                    {value.rich_text.map((t, i) => (
                         <span key={i} className={t.annotations.bold ? "font-bold text-[#122232]" : ""}>{t.plain_text}</span>
                    ))}
                 </div>
                 {/* Render children/content inside callout if any - Notion API nests children */}
                 {/* For now, we assume flattened list items usually follow or are inside. 
                     If the callout has text content, we render it. */}
            </div>
        );
        
    case 'quote':
         // Design had a gradient quote box in Hero, but if used in content:
        return (
            <div className="flex items-center px-7 py-3 gap-2.5 bg-gradient-to-r from-[#F2EFFF] to-transparent border-l-4 border-[#7863FC] mb-8">
                <p className="text-[20px] leading-[160%] font-medium text-[#122232] tracking-[-0.01em]">
                    {value.rich_text.map(t => t.plain_text).join('')}
                </p>
            </div>
        );

    case 'table':
         // Render as the "Journey Options" table style
         // We need to fetch children for table rows. 
         // NOTE: `story.content` from `getProjectContent` should contain children recursively if implemented correctly.
         // If `block.children` exists (from our recursive fetch), we map rows.
         
         if (!block.children) return null;
         
         // Assuming first row is header
         const [headerRow, ...bodyRows] = block.children;
         
         return (
            <div className="mt-8 flex flex-col w-full border-[1.5px] border-[#D5CFFE] rounded-xl overflow-hidden mb-8">
                {/* Header Row */}
                {headerRow && (
                    <div className="flex flex-row w-full bg-[#F2EFFF] border-b-[1.5px] border-[#D5CFFE]">
                        {headerRow.table_row.cells.map((cell, i) => (
                            <div key={i} className="flex-1 p-[12px_16px] flex items-center gap-5 border-r-[1.5px] border-[#D5CFFE] last:border-r-0">
                                <span className="text-[16px] font-medium text-[#122232] leading-[140%] tracking-[-0.01em]">
                                    {cell.map(t => t.plain_text).join('')}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
                
                {/* Body Rows */}
                 <div className="flex flex-col w-full">
                    {bodyRows.map((row, rI) => (
                        <div key={rI} className="flex flex-row w-full border-b-[1.5px] border-[#D5CFFE] last:border-b-0">
                             {row.table_row.cells.map((cell, cI) => (
                                <div key={cI} className="flex-1 p-[12px_16px] flex items-start gap-5 border-r-[1.5px] border-[#D5CFFE] last:border-r-0">
                                    <span className="text-[16px] font-normal text-[#414E5B] leading-[140%] tracking-[-0.01em]">
                                        {cell.map(t => t.plain_text).join('')}
                                    </span>
                                </div>
                             ))}
                        </div>
                    ))}
                 </div>
            </div>
         );

    case 'image':
         const url = value.type === 'external' ? value.external.url : value.file.url;
         return (
             <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
                 <Image src={url} alt="Article Image" fill className="object-cover" />
             </div>
         );

    default:
      return null;
  }
};


// [Modified] Main Content Area to render blocks
function DynamicContent({ blocks }) {
  // Group bullet lists to handle them if needed, but for now simple mapping works 
  // as the styling is per-item container.
  
  // We need to handle nested children for some blocks like Callouts if they have bullets inside them in Notion
  // The current `getProjectContent` recursion attaches `children`.
  
  const renderBlock = (block) => {
      if (block.type === 'callout' && block.children) {
          // Special handling for Callout with nested list items (Phase description + bullets)
          const { value } = block.callout;
           return (
            <div key={block.id} className="bg-[#F2EFFF] rounded-xl p-[40px] flex flex-col gap-4 mb-8">
                 {block.callout.rich_text.length > 0 && (
                     <div className="text-[18px] leading-[150%] text-[#122232] font-medium tracking-[-0.01em] mb-2">
                        {block.callout.rich_text.map((t, i) => t.plain_text).join('')}
                     </div>
                 )}
                 <div className="flex flex-col gap-2">
                    {block.children.map(child => <BlockRenderer key={child.id} block={child} />)}
                 </div>
            </div>
           );
      }
      return <BlockRenderer key={block.id} block={block} />;
  };

  return (
    <div className="max-w-[800px]">
        {blocks.map(block => renderBlock(block))}
    </div>
  );
}

// Main Article Component
export default function TransformationArticle({ story }) {
  const [activeSection, setActiveSection] = useState('');
  
  // Extract headings for Sidebar
  const contentBlocks = story.content || [];
  
  // [Modified] Extract Title/Cover Image from content
  // First image in the content is treated as the Cover Image
  const firstImageBlock = contentBlocks.find(b => b.type === 'image');
  const heroImage = firstImageBlock 
      ? (firstImageBlock.image.type === 'external' ? firstImageBlock.image.external.url : firstImageBlock.image.file.url)
      : story.image;

  // Filter out the first image from content so it doesn't repeat
  // Also filter out the Title if it happens to be the first text (though Title is usually property)
  const displayBlocks = contentBlocks.filter(b => b.id !== firstImageBlock?.id);


  const headings = displayBlocks
    .filter(b => b.type === 'heading_2')
    .map(b => ({
        id: b.heading_2.rich_text[0].plain_text.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        label: b.heading_2.rich_text[0].plain_text
    }));

  // Handle scroll spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset

      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Simple logic: if within this section (until next header or arbitrary end)
          // Better: check if > top. The last one > top is the active one.
          if (scrollPosition >= offsetTop) {
             setActiveSection(heading.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="bg-white">
      {/* Hero Section */}
      <ArticleHero story={{...story, image: heroImage}} />
      
      {/* Main Content with Sidebar - Main Container: px-6 lg:px-[120px], py-[80px], gap-12 lg:gap-[120px] */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-[120px] py-[80px]">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-[120px]">
            {/* Sidebar - Order 1 (Left) */}
            <div className="flex-none order-2 lg:order-1 sticky top-32 self-start">
               {/* 
                 Reusing ProgressSidebar but passing dynamic headings. 
                 We need to update ProgressSidebar to accept `sections` prop or adapt it.
                 Let's pass `sections` prop to it.
               */}
              <ProgressSidebar 
                activeSection={activeSection || headings[0]?.id}
                onSectionClick={handleSectionClick}
                sections={headings}
              />
            </div>
            
            {/* Main Content - Order 2 (Right) */}
            <div className="flex-1 max-w-[800px] order-1 lg:order-2 flex flex-col gap-[8px]">
               {displayBlocks.length > 0 ? (
                 <DynamicContent blocks={displayBlocks} />
               ) : (
                 /* Fallback for stories without block content (older import) */
                  <>
                    <KeyChallenges story={story} />
                    <SolutionSection story={story} />
                    <TimelineSection story={story} />
                    <ResultsSection story={story} />
                  </>
               )}
            </div>
          </div>
      </section>
      
      {/* Related Stories */}
      <RelatedStories />

      {/* CTA */}
      <TransformationStoriesCTA />
    </article>
  );
}