type Props = {
    text: string;
}

export const Button = ({text}: Props) => {
    return (
        <button className="bg-[#25Cd89] py-4 px-7 rounded-full mt-5">{text}</button>
    );
}