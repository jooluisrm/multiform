import { Button } from "@/components/Button/Button";
import { InfoQuestoes } from "@/components/InfoQuestoes/infoQuestoes";
import { GrContact } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";

const Page = () => {
    return (
        <div className="flex justify-center">
            <div className=" pl-20 border-r border-gray-700 flex flex-col gap-10 py-10">
                <InfoQuestoes h3="Pessoal" span="Se identifique" icone={<IoPerson />} color="#25CD89" />
                <InfoQuestoes h3="Profissional" span="Seu nível" icone={<LuScrollText />} color="#4a4b7a" />
                <InfoQuestoes h3="Contatos" span="Como te achar" icone={<GrContact />} color="#4a4b7a" />
            </div>

            <div className="py-10 pl-10 flex-1">
                <div className="mb-10 pb-5 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">Passo 1/3</p>
                    <h2 className="text-2xl font-bold my-2">Vamos Começar com seu nome</h2>
                    <p className="text-gray-300">Preencha o campo abaixo com seu nome completo</p>
                </div>
                <div>
                    <label htmlFor="name" className="text-lg">Seu nome Completo</label>
                    <input
                        type="text"
                        id="name"
                        autoFocus
                        className="inline-block bg-transparent outline-none border-2 border-[#25Cd89] rounded-lg min-w-full py-5 px-5"
                    />
                    <Button text="Próximo"/>
                </div>

            </div>
        </div>
    );
}

export default Page;