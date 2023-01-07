import Image from "next/legacy/image";
import getStrapiMedia from "../lib/GetStrapiMedia"

const StrapiImage = ({image, style="", height, width}) => {
    return (
        <Image
        width={width || "100%"}
        height={height || "100%"}
        src={getStrapiMedia(image.url)}
        alt={image.alternativeText}
        className={style}  
        />        
    )
}
export default StrapiImage