import PageTitle from "../components/PageTitle"
import SectionContainer from "../components/SectionContainer"
import StapiImage from "../components/StrapiImage"
import ReactMarkdown from "react-markdown"
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import Tags from "../components/Tags"
import getStrapiMedia from "../lib/GetStrapiMedia"

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children }) {
    return (
    <SectionContainer>
        <article>
             <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                <header className="pt-6 xl:pb-6">
                    <div className="space-y-1 text-center">
                        <dl className="space-y-10">
                            <div>
                                <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time>{new Date(children.attributes.publishedAt).toLocaleDateString('en-US', postDateTemplate)}</time>
                                    </dd>
                            </div>
                        </dl>
                        <div>
                            <PageTitle>{children.attributes.title}</PageTitle>                               
                        </div>
                    </div>
                </header>
                <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0" style={{ gridTemplateRows: 'auto 1fr' }}>
                    <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                        <dt className="sr-only">Authors</dt>                  
                        <dd>
                        <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                            <li className="flex items-center space-x-2" key={children.attributes.writer.data.attributes.name}>
                            <StapiImage image={children.attributes.writer.data.attributes.image.data.attributes} width={38} height={38} style="h-40 w-10 rounded-full"/>
                            <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                <dt className="sr-only">Name</dt>
                                <dd className="text-gray-900 dark:text-gray-100">{children.attributes.writer.data.attributes.name}</dd>
                            </dl>
                            </li>                    
                        </ul>
                      </dd>
                    </dl>
                    <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                        <div className="py-4 xl:py-8">
                            <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
                            <div className="flex flex-wrap">
                                <Tags id={children.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                         <div className="prose max-w-none pt-10 pb-8 dark:prose-dark"><ReactMarkdown children={children.attributes.content} transformImageUri={(src) => {                                
                                return getStrapiMedia(src,)
                         }}
                            remarkPlugins={[remarkGfm]} rehypePlugins={[rehypePrism]}>{children.attributes.content}</ReactMarkdown></div>                    
                    </div>
                </div>                
             </div>
        </article>
    </SectionContainer> 
    )
}
