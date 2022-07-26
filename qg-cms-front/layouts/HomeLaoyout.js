import PageTitle from "../components/PageTitle"
import SectionContainer from "../components/SectionContainer"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import Running from '../public/icons/running.svg'
import Cloud from '../public/icons/cloud.svg'

export default function HomeLayout({ children }) {
    return (
        <SectionContainer>
            <div className="flex flex-col items-center bg-gradient-to-tr from-red-600 to-orange-400 rounded-lg dark:shadow-neutral-700 shadow-lg">
             <div className="grid grid-cols-2 gap-2">
               <div className="grid-cols-1 opacity-80"><Running className="fill-current text-gray-700 dark:text-gray-200"/></div>
               <div className="grid-cols-2 opacity-80"><Cloud className="fill-current text-gray-700  dark:text-gray-200 "/></div>
               </div>                      
            </div>
        <div className="mt-10 bg-white dark:bg-slate-800 dark:shadow-neutral-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-lg">
            <article>
            <div>
                <header>
                    <PageTitle>{children.data.attributes.hero.title}</PageTitle>
                    <div className="text-gray-500 dark:text-gray-400">{children.data.attributes.hero.subtitle}</div>
                </header>
              </div>
            <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "style={{ gridTemplateRows: 'auto 1fr' }}>
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                    <ReactMarkdown children={children.data.attributes.content} remarkPlugins={[remarkGfm]}>
                        {children.data.attributes.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>          
            </article>
        </div>
        </SectionContainer>
    )
}