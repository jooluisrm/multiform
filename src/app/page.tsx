"use client"

import { Button } from "@/components/Buttons/Button";
import { InfoQuestoes } from "@/components/InfoQuestoes/infoQuestoes";
import { Input } from "@/components/Input/Input";
import { useRouter } from "next/navigation";
import { GrContact } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";

const Page = () => {

    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };
    const navigateToStep2 = () => {
        router.push('/step2');
    };
    const navigateToStep3 = () => {
        router.push('/step3');
    };

    return (
        <div className="flex justify-center">
            <div className=" pl-20 border-r border-gray-700 flex flex-col gap-10 py-10">
                <InfoQuestoes h3="Pessoal" span="Se identifique" icone={<IoPerson />} color="#25CD89" onClick={navigateToHome} />
                <InfoQuestoes h3="Profissional" span="Seu nível" icone={<LuScrollText />} color="#4a4b7a" onClick={navigateToStep2} />
                <InfoQuestoes h3="Contatos" span="Como te achar" icone={<GrContact />} color="#4a4b7a" onClick={navigateToStep3} />
            </div>

            <div className="py-10 pl-10 flex-1">
                <div className="mb-10 pb-5 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">Passo 1/3</p>
                    <h2 className="text-2xl font-bold my-2">Vamos Começar com seu nome</h2>
                    <p className="text-gray-300">Preencha o campo abaixo com seu nome completo</p>
                </div>
                <div>
                    <Input label="Seu nome Completo" typeInput="text" id="name" />
                    <div className="mt-5">
                        <Button text="Próximo" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Page;