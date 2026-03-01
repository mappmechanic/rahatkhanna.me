import HorizontalBar from "../ui/horizontal-bar";
import ExpandableCard from "../ui/expandable-card";

const AboutSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 flex items-center justify-center p-8 pt-24 md:pt-12">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-base md:text-xl mb-4 md:mb-8">
                    Staff Software Engineer at Apple, where I build the infrastructure for AI Agents — observability pipelines, evaluation frameworks, and the platforms that make AI reliable at scale. 13+ years of engineering across Apple, Flipkart, and my own ventures, now fully focused on the frontier of AI-native systems.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ExpandableCard
                        id={1}
                        title="Top 5 Skills"
                        previewContent={
                            <>
                                <p className="text-gray-600">AI Agent Infrastructure • LLM Observability & Evaluation • Platform Engineering • Engineering Leadership • Technical Mentorship</p>
                            </>
                        }
                    >
                        <div>
                            <p className="mb-4">Skills sharpened across 13+ years of engineering — now focused on the AI-native frontier:</p>
                            <ul>
                                <li className="mb-2"><strong>AI Agent Infrastructure</strong><br /> Building observability pipelines and evaluation frameworks for LLM-based agents in production.</li>
                                <li className="mb-2"><strong>LLM Observability & Evaluation</strong><br /> Designing systems that make AI behaviour measurable, debuggable, and reliable at scale.</li>
                                <li className="mb-2"><strong>Platform Engineering</strong><br /> Full-stack platforms in Python & React powering data and ML workflows at Apple.</li>
                                <li className="mb-2"><strong>Engineering Leadership</strong><br /> Driving cross-functional delivery for high-impact products used by millions globally.</li>
                                <li className="mb-2"><strong>Technical Mentorship</strong><br /> Coaching 40+ engineers and professionals toward career growth in the AI era.</li>
                            </ul>

                            {/* <a href="#" className="cta-link mt-4 text-gray-500">Click below to dive deeper into how each skill has shaped the projects I lead.</a> */}

                        </div>
                    </ExpandableCard>
                    <ExpandableCard
                        id={2}
                        title="Career Highlights"
                        previewContent={
                            <>
                                <p className="text-gray-600 text-xs">Staff Sw Eng, Data & ML Platform <span className="text-sm font-bold">2021-Present</span><br /><span className="text-purple-500 text-sm font-semibold">Apple Inc</span></p>
                                <p className="text-gray-600 text-xs">Senior Sw Eng <span className="text-sm font-bold">2017-2021</span><br /><span className="text-purple-500 text-sm font-semibold">Apple India</span></p>
                                <p className="text-gray-600 text-xs">Senior UI Eng <span className="text-sm font-bold">2015-2017</span><br /><span className="text-purple-500 text-sm font-semibold">Flipkart (Walmart)</span></p>
                            </>
                        }
                    >
                        <div>
                            <p className="mb-4">
                                I&apos;ve had the privilege of working with some of the most innovative companies:
                            </p>
                            <ul className="relative list-none pl-6 space-y-8 border-l-2 border-gray-300">
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Apple - Staff Software Engineer, Data & ML Platform (Oct 2022 - Present)</strong>: Building AI Agent infrastructure — observability, evaluation frameworks, and Python & React platforms powering ML workflows at scale.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Apple - Senior Software Engineer (May 2020 - Oct 2022)</strong>: Managed web experiences for Apple Books, TV, and Podcasts, collaborating with cross-functional teams to deliver impactful solutions.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Apple - Senior Software Engineer (May 2017 - May 2020)</strong>: Architected web interfaces for Search Ads and Apple News Ads, boosting user engagement with advanced ad management flows.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Flipkart - Lead UI Engineer (May 2016 - May 2017)</strong>: Led CRM web development for 4,000+ agents, revamping core systems and improving efficiency.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Flipkart - Senior UI Engineer (May 2015 - May 2016)</strong>: Enhanced Flipkart&apos;s e-commerce UI/UX, driving engagement and optimizing checkout flows.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Genpact - Technical Consultant (May 2015 - May 2016)</strong>: Developed AngularJS web apps and hybrid mobile apps, boosting client performance and scalability.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Genpact - Senior Associate (May 2012 - May 2014)</strong>: Built mobile solutions and healthcare web apps adopted by 3,000+ users globally.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>Entrepreneur - CEO/CTO, YEH Technologies</strong>: Delivered 300+ websites for global clients, including Microsoft, driving digital transformation across industries.
                                </li>
                                <li className="relative pl-4 before:absolute before:left-[-30px] before:top-1/2 before:w-4 before:h-4 before:bg-purple-500 before:rounded-full before:border-2 before:border-gray-300">
                                    <strong>CTO, instantPay</strong>: Led development of a multi-service platform handling 100M+ transactions annually.
                                </li>
                            </ul>
                            {/* <a href="#learn-more" className="text-blue-600 underline mt-4 inline-block">
                                Click here to explore my full journey and the projects that shaped my leadership.
                            </a> */}
                        </div>
                    </ExpandableCard>
                    <ExpandableCard
                        id={3}
                        title="2025 Milestones"
                        previewContent={
                            <>
                                <div className="flex flex-wrap space-x-8 text-gray-600 w-full">
                                    <div className="space-y-4 w-full">
                                        <HorizontalBar percentage={80} label="People Coached" alternateNumericLabel="40+" />
                                        <HorizontalBar percentage={85} label="Agent Infra Platform" alternateNumericLabel="v1 ✓" />
                                        <HorizontalBar percentage={90} label="Eng Velocity" alternateNumericLabel="+10%" />
                                        <HorizontalBar percentage={75} label="Certifications" alternateNumericLabel="4" />
                                    </div>
                                </div>
                            </>
                        }
                    >
                        <div>
                            <div className="space-y-4">
                                {/* People Coached */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">People Coached</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">40+</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Mentored 40+ engineers and professionals navigating the shift to AI-first careers.
                                </p>

                                {/* Agent Infra Platform */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Agent Infra Platform</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">v1 ✓</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Shipped v1 of an Agent Observability & Evaluation platform — tracing, metrics, and LLM quality scoring in production.
                                </p>

                                {/* Engineering Velocity */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Engineering Velocity</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">+10%</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Drove a 10% team velocity improvement by introducing AI-assisted workflows and streamlining engineering processes.
                                </p>

                                {/* Certifications */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Certifications</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '75%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">4</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Completed 4 certifications in AI, LLMs, and engineering leadership.<br />
                                    Latest: <a href="https://coursera.org/share/cbe388a70266ff597dd02da0f9b401e9" target="_blank" className="text-gray-600 underline mt-6 inline-block w-full">The AI Awakening: Implications for the Economy and Society</a>
                                </p>
                            </div>

                            {/* <a href="#learn-more" className="text-blue-600 underline mt-6 inline-block text-center w-full">
                                Click here to explore more milestones.
                            </a> */}
                        </div>
                    </ExpandableCard>
                </div>
            </div >
        </div >
    )
}

// Export the component
export default AboutSection;
