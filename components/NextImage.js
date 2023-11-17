import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}

export default function NextImage(props) {
return (
    <Image
        loader={imageLoader}
        src={`/assets/${props.src}`}
        alt={props.alt}
        width={props.width}
        height={props.height}
    />
)
}