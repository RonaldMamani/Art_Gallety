import FooterOrange from "@/components/Footer/FooterOrange";
import LocationMap from "@/components/Localization";
import DescritionLocal from "@/components/Localization/DescritionLocal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title : 'Art Gallery | Location',
    description: 'Location of Art Gallery'
}

export default function Location () {
    return (
        <main>
            <LocationMap />
            <DescritionLocal />
            <FooterOrange />
        </main>
    )
}