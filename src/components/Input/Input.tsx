type Props = {
    label: string;
    typeInput: string;
    id: string;
    value?: string;
    onChange?: any;
}

export const Input = ({ id, label, typeInput, value, onChange }: Props) => {
    return (
        <>
            <label htmlFor={`${id}`} className="text-lg">{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={`${typeInput}`}
                id={`${id}`}
                autoFocus
                className="inline-block bg-transparent outline-none border-2 border-[#25Cd89] rounded-lg min-w-full py-5 px-5"
            />
        </>
    );
}