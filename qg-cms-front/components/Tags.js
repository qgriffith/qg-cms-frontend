import axios from "axios"
import Link from "next/link"
import getStrapiURL from "../lib/GetStrapiURL"
import { useState, useEffect } from 'react'

export default function Tags({id}) {

    const [tags, setTags] = useState([])
  
    useEffect(()=>{
      const fetchData = async () => {
        const res = await axios.request(getStrapiURL(`/api/tags?filters[articles]=${id}`))
        const {data} = await res.data
        setTags(data)
      }
      fetchData()
    }, []);
  
  
      return (
        tags.map(tag =>
           <Link href={'/api/tags'}>
            <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                {tag.attributes.name}
            </a>
            </Link>
            )    
      )
    }