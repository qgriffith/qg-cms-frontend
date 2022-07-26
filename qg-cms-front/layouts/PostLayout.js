import PageTitle from "../components/PageTitle"
import SectionContainer from "../components/SectionContainer"
import StapiImage from "../components/StrapiImage"

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
                    </dl>
                </div>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                    <li>{children.attributes.writer.data.attributes.name}</li>
                    <li className="flex items-center space-x-2" key={children.attributes.writer.data.attributes.name}>
                    <StapiImage image={children.attributes.writer.data.attributes.image.data.attributes} width={38} height={38}/>
                    </li>
                </ul>                
             </div>
        </article>
    </SectionContainer> 
    )
}
