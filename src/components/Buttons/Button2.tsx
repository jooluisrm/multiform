type Props = {
    text: string;
    onClick: () => void;
}

export const Button2 = ({ text, onClick }: Props) => {
    return (
        <button onClick={onClick} className="mr-5 font-bold hover:opacity-80 transition-all">{text}</button>
    );
}