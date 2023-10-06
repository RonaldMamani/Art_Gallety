import { Outfit } from "next/font/google"
import TextCommon from "../Text/TextCommon"

const font = Outfit({subsets: ['latin'], weight: ["200"]})

export default function GalleryDescrition() {
    return (
        <section className="
            ml-6 py-8 grid grid-rows-6 gap-5
            md:grid md:grid-cols-5 md:grid-rows-3 md:order-2
            lg:px-32 lg:py-20
            ">
            <div className="
                bg-[url('./assets/mobile/image-grid-1.jpg')] bg-cover bg-center 
                md:bg-[url('./assets/tablet/image-grid-1.jpg')] md:col-span-3 md:order-2
                lg:bg-[url('./assets/desktop/image-grid-1.jpg')]
                "></div>

            <div className="
                flex flex-col gap-5 
                md:col-span-2 md:order-1">
                <h4 className="text-6xl font-extrabold text-start ">Your Day at the Gallery</h4>
                <TextCommon className="text-[#444444] text-lg" text="Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process." />
            </div>

            <div className="
                bg-[url('./assets/mobile/image-grid-2.jpg')] bg-cover bg-center row-span-2 
                md:bg-[url('./assets/tablet/image-grid-2.jpg')] md:col-span-3 md:row-span-2 md:order-3
                lg:bg-[url('./assets/desktop/image-grid-2.jpg')] lg:h-screen lg:bg-bottom
                "></div>

            <div className="
                bg-[url('./assets/mobile/image-grid-3.jpg')] bg-cover bg-center 
                md:bg-[url('./assets/tablet/image-grid-3.jpg')] md:col-span-2 md:order-4
                lg:bg-[url('./assets/desktop/image-grid-3.jpg')]
                "></div>

            <div className="
                flex flex-col gap-5 px-6 py-10 bg-black 
                md:col-span-2 md:row-span-2 md:order-5">
                <h4 className="text-6xl font-extrabold text-start text-white ">COME & BE INSPIRED</h4>
                <TextCommon className="text-lg text-white font-light" text="We’re excited to welcome you to our gallery and see how our collections influence you." />
            </div>
        </section>
    )
}