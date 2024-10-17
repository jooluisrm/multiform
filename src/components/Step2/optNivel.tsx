type Props = {
    emoji: string;
    h3: string;
    p: string;
    level: number;
}

export const OptNivel = ({ emoji, h3, p, level }: Props) => {
    return (
        <div data-key={level} className="flex items-center gap-5 border border-gray-700 p-5 rounded-xl cursor-pointer hover:border-[#25CD89] transition-all">
            <div className="bg-[#191A5C] p-4 text-2xl rounded-full">
                {emoji}
            </div>
            <div>
                <h3 className="font-bold text-xl">{h3}</h3>
                <p className="text-gray-400">{p}</p>
            </div>
        </div>
    );
}