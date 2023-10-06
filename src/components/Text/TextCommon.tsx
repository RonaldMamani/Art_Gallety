import { Outfit } from "next/font/google"

const font = Outfit({subsets: ['latin'], weight: ['300']})

type Text = {
    text: string,
    className: string
}

export default function TextCommon({text, className} : Text) {
    return (
        <div className={font.className}>
            <p className={className}>{text}</p>
        </div>
    )
}