
type Button = {
    content: string
}

export default function Button({content} : Button) {
    return (
        <button className="
            bg-slate-950 text-slate-100 text-lg font-bold tracking-[.35rem] px-6 py-5
            hover:bg-[#D5966C] transition-colors
            ">{content}
            
            </button>
    )
}