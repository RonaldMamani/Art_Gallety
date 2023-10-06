import TextCommon from "../Text/TextCommon";

export default function DescritionLocal() {
    return (
        <section className="
            px-4 py-16 bg-black flex flex-col gap-5
            md:px-8 md:grid md:grid-cols-2 md:gap-0
            lg:px-32 lg:py-20
            ">
            <h4 className="
                text-6xl font-extrabold text-start text-white uppercase
                md:w-[70%]
                ">Our Location</h4>
            <div className="
                flex flex-col gap-5
                ">
                <h5 className="text-4xl font-extrabold text-[#D5966C]">99 KING STREET</h5>
                <div className="flex flex-col gap-1">
                    <span className="text-white font-mono">Newport</span>
                    <span className="text-white font-mono">RI 02840</span>
                    <span className="text-white font-mono">United States of America</span>
                </div>
                <TextCommon 
                    className="text-white text-lg" 
                    text="Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm." 
                />
            </div>
        </section>
    )
}