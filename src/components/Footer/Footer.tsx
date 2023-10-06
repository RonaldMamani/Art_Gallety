import Image from "next/image"

import Logo from "@/app/assets/logo-light.svg"
import facebook from "@/app/assets/icon-facebook.svg"
import instagram from "@/app/assets/icon-instagram.svg"
import twitter from "@/app/assets/icon-twitter.svg"
import TextCommon from "../Text/TextCommon"


export default function Footer() {
    return (
        <footer className="
            bg-black px-7 py-10 flex flex-col gap-8 items-start
            md:flex-row md:justify-between
            lg:px-32 lg:py-20
            ">
            <Image src={Logo} alt="Logotipo" />
            <div className="md:w-[40%]">
                <TextCommon className="text-white" text="The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA." />
            </div>
            <div className="flex gap-5">
                <Image src={facebook} alt="Facebook" />
                <Image src={instagram} alt="Instagram" />
                <Image src={twitter} alt="Twitter" />
            </div>
        </footer>
    )
}