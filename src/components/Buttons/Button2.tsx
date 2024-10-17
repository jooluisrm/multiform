type Props = {
    text: string;
}

export const Button2 = ({text}: Props) => {
    return (
        <button className="mr-5 font-bold hover:opacity-80 transition-all">{text}</button>
    );
}