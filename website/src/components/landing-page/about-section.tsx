import HorizontalBar from "../ui/horizontal-bar";
import ExpandableCard from "../ui/expandable-card";

const AboutSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-600 to-indigo-900 flex items-center justify-center p-8 pt-24 md:pt-12">
            <div className="max-w-4xl text-center text-white">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-base md:text-xl mb-4 md:mb-8">
                    As an emerging Engineering Leader, I am passionate about unleashing innovation through AI and transformative web experiences. With expertise in UI/UX development, AI integration, and guiding engineering teams, I empower professionals and organizations to unlock their full potential and drive impactful results in a fast-paced digital world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ExpandableCard
                        id={1}
                        title="Top 5 Skills"
                        previewContent={
                            <>
                                <p className="text-gray-600">Engineering Leadership • AI Integration • UI/UX Development • Strategic Problem Solving • Career Mentorship</p>
                            </>
                        }
                    >
                        <div>
                            <p className="mb-4">I focus on the skills that drive success in both individuals and teams. My top skills include:</p>
                            <ul>
                                <li className="mb-2"><strong>Engineering Leadership</strong><br /> Proven ability to lead high-performing engineering teams.</li>
                                <li className="mb-2"><strong>AI Integration</strong><br /> Harnessing AI to create scalable, cutting-edge solutions.</li>
                                <li className="mb-2"><strong>UI/UX Development</strong><br /> Designing user-focused, intuitive digital experiences.</li>
                                <li className="mb-2"><strong>Strategic Problem Solving</strong><br /> Tackling complex challenges with creative solutions.</li>
                                <li className="mb-2"><strong>Career Mentorship</strong><br /> Guiding professionals toward growth and success in their careers.</li>
                            </ul>

                            {/* <a href="#" className="cta-link mt-4 text-gray-500">Click below to dive deeper into how each skill has shaped the projects I lead.</a> */}

                        </div>
                    </ExpandableCard>
                    <ExpandableCard
                        id={2}
                        title="Career Highlights"
                        previewContent={
                            <>
                                <p className="text-gray-600 text-xs">Staff Sw Eng <span className="text-sm font-bold">2021-Present</span><br /><span className="text-purple-500 text-sm font-semibold">Apple Inc</span></p>
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
                                    <strong>Apple - Staff Software Engineer (Oct 2022 - Present)</strong>: Leading web development for Apple Music, Podcasts, and more, enhancing user experience for millions globally.
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
                        title="2024 Milestones"
                        previewContent={
                            <>
                                <div className="flex flex-wrap space-x-8 text-gray-600 w-full">
                                    <div className="space-y-4 w-full">
                                        <HorizontalBar percentage={80} label="People Coached" alternateNumericLabel="40+" />
                                        <HorizontalBar percentage={60} label="3 AI Features" alternateNumericLabel="3/5" />
                                        <HorizontalBar percentage={90} label="Productivity" alternateNumericLabel="10%" />
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
                                    Mentored 40+ professionals, helping them navigate their careers and achieve growth.
                                </p>

                                {/* AI Features */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">AI Features Delivered</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '60%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">3/5</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Delivered 3 out of 5 planned AI-driven features, enhancing operational efficiency.
                                </p>

                                {/* Workshops Conducted */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Workshops/Sessions Conducted</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">5</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Conducted 5 successful workshops or sessions, empowering individuals with new skills and insights.
                                </p>

                                {/* Team Productivity Growth */}
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold">Productivity Growth</span>
                                    <div className="w-2/3 bg-gray-300 h-4 rounded-full relative mx-4">
                                        <div className="bg-purple-500 h-full rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                    <span className="ml-2 text-sm font-bold">10%</span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    Led to a 10% productivity improvement by optimizing workflows and reducing bottlenecks.
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
                                    Completed 4 advanced certifications in AI and management, deepening expertise.<br />
                                    Latest One:  <a href="https://coursera.org/share/cbe388a70266ff597dd02da0f9b401e9" target="_blank" className="text-gray-600 underline mt-6 inline-block w-full">The AI Awakening: Implications for the Economy and Society</a>
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
