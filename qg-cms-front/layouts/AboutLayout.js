import StrapiImage from "../components/StrapiImage"
import FooterIcons from "../components/FooterIcons"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

export default function AboutLayout({ children }) {
    return(
        <div className="divide-y">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                About Me
            </h1>
            </div>
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8">
                <StrapiImage image={children.data.attributes.image.data.attributes} style="h-48 w-48 rounded-full" width={180} height={180} />
                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{children.data.attributes.name}</h3>
                <div className="text-gray-500 dark:text-gray-400">{children.data.attributes.title}</div>
                <div className="flex space-x-3 pt-6">
                    <FooterIcons kind="mail" href={`mailto:${children.data.attributes.email}`} size="8" />
                    <FooterIcons kind="strava" href={children.data.attributes.strava} size="8" />
                </div>
            </div>
                <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                    <ReactMarkdown children={children.data.attributes.content} remarkPlugins={[remarkGfm]}>
                        {children.data.attributes.content}
                    </ReactMarkdown>
                </div>
         </div>
        </div>
    )
}