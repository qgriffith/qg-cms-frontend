import Link from "next/link"
import { queryAPI } from "../lib/QueryAPI";
import { useState, useEffect } from 'react'

export default function Tags({id}) {

    const [tags, setTags] = useState([])
  
    useEffect(()=>{
      const fetchData = async () => {
        const res = await queryAPI("/tags", {
          filters: {
            articles: id
          }
        })
        const {data} = await res
        setTags(data)
      }
      fetchData()
    }, []);
  
  
      return (
        tags.map(tag =>
           <Link key={tag.id} href={`/articles/tag/${tag.attributes.name}`}>
            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                {tag.attributes.name}
            </a>
            </Link>
            )    
      )
    }