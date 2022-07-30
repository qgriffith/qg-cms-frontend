import PageTitle from "../components/PageTitle"
import SectionContainer from "../components/SectionContainer"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export default function HomeLayout({ children, posts }) {
    return (
        <SectionContainer>
        <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
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