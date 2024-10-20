import { useRouter } from "next/navigation";

type Props = {
    h3: string;
    span: string;
    icone: any;
    color: string;
    onClick: () => void;
}

export const InfoQuestoes = ({ h3, span, color, icone,onClick }: Props) => {
    

    return (
        <div className="flex items-center gap-5 hover:opacity-80 cursor-pointer" onClick={onClick}>
            <div className="md:w-32 text-right">
                <h3 className="font-bold">{h3}</h3>
                <span className="text-gray-300 text-sm">{span}</span>
            </div>
            <div style={{ backgroundColor: color }} className={`inline-block p-3 rounded-full`}>
                <div className="text-4xl">
                    {icone}
                </div>
            </div>
            <div>
                <div className="inline-block border rounded-full p-[1px] translate-x-[7px]">
                    <div style={{ backgroundColor: color }} className={`rounded-full w-2 h-2`}></div>
                </div>
            </div>
        </div>
    );
}