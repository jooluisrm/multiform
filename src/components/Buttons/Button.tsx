

type Props = {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick} className="bg-[#25Cd89] py-4 px-7 rounded-full font-bold hover:opacity-80 transition-all">{text}</button>
    );
}