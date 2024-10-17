type Props = {
    emoji: string;
    h3: string;
    p: string;
    level: number;
    onClick: (level: number) => void;
    isSelected: boolean;
}

export const OptNivel = ({ emoji, h3, p, level, onClick, isSelected }: Props) => {
    return (
        <div
            style={{
                borderColor: isSelected ? "#25CD89" : "#374151", // Cor da borda condicional
            }}
            data-key={level}
            className="flex items-center gap-5 border border-gray-700 p-5 rounded-xl cursor-pointer hover:border-[#25CD89] transition-all"
            onClick={(e) => onClick(level)}
        >
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