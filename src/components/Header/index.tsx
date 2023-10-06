import { Outfit } from "next/font/google"
import TextCommon from "../Text/TextCommon"
import Button from "../Button/Button"

import Arrow from "@/app/assets/icon-arrow-right.svg"
import BackgroundDesk from "@/app/assets/desktop/image-hero.jpg"
import BackgroundTablet from "@/app/assets/tablet/image-hero.jpg"
import BackgroundMob from "@/app/assets/mobile/image-hero.jpg"

import Image from "next/image"
import Link from "next/link"

export const font = Outfit({subsets:['latin']})


export default function Header() {
    return (
        <header className="
            px-4 py-0 grid grid-rows-2
            md:flex md:relative
            lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:p-0
            ">
            <div className="max-[1023px]:hidden bg-black"></div>
            <div className="
                bg-[url('./assets/mobile/image-hero.jpg')] bg-cover bg-top
                md:bg-[url('./assets/tablet/image-hero.jpg')] md:h-screen md:w-[65%] md:bg-bottom
                lg:bg-[url('./assets/desktop/image-hero.jpg')] lg:bg-center lg:w-full
                ">
            </div>
            <div className="
                py-6 row-span-2 
                md:absolute  md:left-[26rem] md:top-20 
                lg:left-48 lg:top-40
                ">
                <div className="
                    flex flex-col gap-5
                    md:gap-8
                    lg:grid lg:grid-cols-2 ">
                    <div className="">
                        <h3 className="text-black text-7xl font-extrabold w-[92%] lg:text-gray-400 lg:text-8xl">MODERN ART GALLERY</h3>
                    </div>
                    <div className="flex flex-col gap-8 lg:w-[45%]">
                        <TextCommon 
                            className={`${font.className} text-[#444444] text-lg lg:text-xl `} 
                            text="The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out." 
                        />
                        <Link href="/location" className="flex items-center" >
                            <Button 
                                content="OUR LOCATION"
                            />
                            <Image 
                                alt="Flecha para direcionar para proxima pagina" 
                                src={Arrow} width={40}
                                className="items-center bg-[#D5966C] px-3 py-4 hover:bg-[#000] transition-colors" 
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}