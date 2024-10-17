type Props = {
    label: string;
    typeInput: string;
    id: string;
}

export const Input = ({ id, label, typeInput }: Props) => {
    return (
        <>
            <label htmlFor={`${id}`} className="text-lg">{label}</label>
            <input
                type={`${typeInput}`}
                id={`${id}`}
                autoFocus
                className="inline-block bg-transparent outline-none border-2 border-[#25Cd89] rounded-lg min-w-full py-5 px-5"
            />
        </>
    );
}