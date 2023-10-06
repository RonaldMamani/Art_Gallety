import Link from "next/link";
import Button from "../Button/Button";
import Image from "next/image";

import Arrow from "@/app/assets/icon-arrow-left.svg"

export default function LocationMap() {
    return (
        <section className="
            h-screen bg-[url('./assets/mobile/image-map.png')] bg-center
            md:bg-[url('./assets/tablet/image-map.png')]
            lg:bg-[url('./assets/desktop/image-map.png')]
            ">
            <Link href="/" className="flex items-center md:px-8 lg:px-32" >
                <Image 
                    alt="Flecha para direcionar para proxima pagina" 
                    src={Arrow} width={39} 
                    className="items-center bg-[#D5966C] px-3 py-4 hover:bg-[#000] transition-colors" 
                />
                <Button 
                    content="BACK TO HOME"
                />
            </Link>
        </section>
    )
}