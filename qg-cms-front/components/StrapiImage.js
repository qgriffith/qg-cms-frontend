import Image from "next/image"
import getStrapiMedia from "../lib/GetStrapiMedia"

const StrapiImage = ({image, height, width}) => {
    return (
        <Image
        width={width || "100%"}
        height={height || "100%"}
        src={getStrapiMedia(image.url)}
        alt={image.alternativeText}       
        />        
    )
}
export default StrapiImage