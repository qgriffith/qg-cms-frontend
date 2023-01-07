import Link from "next/link"

export default function Tags({tags}) {
  return tags.map(tag =>
    <Link
      key={tag.id}
      href={`/articles/tag/${tag.attributes.name}`}
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">

      {tag.attributes.name}

    </Link>
     );
    }