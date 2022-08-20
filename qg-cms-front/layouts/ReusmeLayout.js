import SectionContainer from "../components/SectionContainer"
import StapiImage from "../components/StrapiImage"
import FooterIcons from "../components/FooterIcons"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export default function ResumeLayout({ children }) {
    return (
        <SectionContainer>
             <div class="container mx-auto max-w-screen-lg">
                 <main id="wrapper" class="rounded-sm flex flex-col lg:flex-row-reverse 2xl:m-1 shadow-2xl  dark:bg-slate-800 dark:shadow-neutral-800">
                    <div id="sidebar" class="rounded-sm w-full sm:max-w-sm p-8 bg-gradient-to-b from-red-400 via-orange-400 to-white">
                        <div class="px-20 mb-12">
                           <div className="object-center"><StapiImage style="rounded-full" image={children.attributes.image.data.attributes} width={150} height={150}/></div>
                           <h1 class="text-center text-3xl font-semibold mb-2">{children.attributes.hero.title}</h1>
                           <h2 class="text-center text-xl font-light">{children.attributes.hero.subtitle}</h2>
                        </div>
                        <div class="font-light text-lg px-2 mb-12">
                            <h2 class="text-xl font-semibold mb-4">Contact</h2>
                            <div class="flex items-center my-3">
                                <FooterIcons kind="mail" href={`mailto:${children.attributes.contact.email}`} size="8" /><span className="ml-2">{children.attributes.contact.email}</span>         
                            </div>
                            <div class="flex items-center my-3">
                                <FooterIcons kind="phone" href={`tel:${children.attributes.contact.phone}`} size="8" /><span className="ml-2">{children.attributes.contact.phone}</span>
                            </div>
                            <div class="flex items-center my-3">
                               <FooterIcons kind="location" href='https://www.google.com/maps/place/Durham,+NC' size="8" /><span className="ml-2">{children.attributes.contact.location}</span>       
                            </div>
                            <div class="flex items-center my-3">
                                <FooterIcons kind="linkedin" href={children.attributes.contact.linkedin} size="8" /><span className="ml-2">Linkedin</span>                                 
                            </div>
                        </div>
                        <div class="font-light text-lg px-2 mb-12">
                            <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
                            <ul>
                            {children.attributes.skills.map((skills) => (
                                <li><span className="rounded-lg bg-emerald-400 px-3">{skills.title}</span></li>
                            ))}
                            </ul>
                        </div>

                        <div class="font-light text-lg px-2 mb-12">
                            <h2 class="text-xl font-semibold mb-4">Interests</h2>
                            <ul>
                            {children.attributes.interests.map((interests) => (
                                <li><span className="rounded-lg bg-emerald-400 px-3">{interests.title}</span></li>
                            ))}
                            </ul>
                        </div> 
                    </div>

                <div class="content w-full p-6">
                    <div id="profile" class="prose dark:prose-dark">
                        <h2 class="section-headline">Profile</h2>
                        <ReactMarkdown children={children.attributes.description} remarkPlugins={[remarkGfm]}>
                            {children.attributes.description}
                        </ReactMarkdown>                   
                    </div>
                    <hr class="mt-8 mb-12" />
                    <div id="experience" class="prose dark:prose-dark">
                        <h2 class="section-headline">Experience</h2>
                        {children.attributes.experience.map((experience) => (
                            <div>
                                <h3>{experience.company}</h3>
                                <section class="mb-6">
                                    <div class="lg:inline-block font-medium lg:w-6/12 lg:align-top italic mb-2">
                                        {experience.start} - {experience.end}
                                    </div>
                                    <div class="lg font-semibold underline lg:w-8/12 w-full">
                                        {experience.title}
                                    </div>
                                </section>
                                <section class="mb-6">
                                 <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Description:
                                 </div>
                                 <div class="lg:inline-block lg:w-8/12 w-full">
                                 <ReactMarkdown children={experience.description} remarkPlugins={[remarkGfm]}>
                                        {experience.description}
                                </ReactMarkdown>                                     
                                 </div>
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
            </main>           
        </div>
    </SectionContainer>
    ) 
}