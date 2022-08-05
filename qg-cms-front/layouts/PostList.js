import Tags from '../components/Tags'
import Link from 'next/link'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLists({ children, title="All Articles" }) {

    return(
        <div className="divide-y">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h3 className="text-md font-bold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                {title}
                </h3>
            </div>
            <ul>
              {children.data.map((post) => (
                <li key={post.attributes.slug} className="py-4">
                    <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dt className="sr-only">Published on</dt>
                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time>{new Date(post.attributes.publishedAt).toLocaleDateString('en-US', postDateTemplate)}</time>
                            </dd>
                        </dl>
                        <div className="space-y-3 xl:col-span-3">
                            <div>
                                <h3 className="text-2xl font-bold leading-8 tracking-tight">
                                    <Link href={`/articles/post/${post.attributes.slug}`} className="text-gray-900 dark:text-gray-100">
                                        <a>{post.attributes.title}</a>
                                    </Link>
                                </h3>
                                <div className="flex flex-wrap">
                                    <Tags tags={post.attributes.tags.data} />
                                </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                {post.attributes.description}
                            </div>
                        </div>    
                    </article>
                </li>
            ))}
            </ul>
        </div>
    )
}