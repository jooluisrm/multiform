"use client"

import { Button } from "@/components/Buttons/Button";
import { Button2 } from "@/components/Buttons/Button2";
import { InfoQuestoes } from "@/components/InfoQuestoes/infoQuestoes";
import { OptNivel } from "@/components/Step2/optNivel";
import { InfoContext } from "@/context/InfContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { GrContact } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";

const Step2 = () => {

    const ctx = useContext(InfoContext);

    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };
    const navigateToStep2 = () => {
        if (ctx?.name.trim() === '') return alert("Preencha o seu nome para continuar!");
        router.push('/step2');
    };
    const navigateToStep3 = () => {
        if (ctx?.name.trim() === '') return alert("Preencha o seu nome para continuar!");
        router.push('/step3');
    };


    const handleLevel = (level: number) => {
        ctx?.setLevel(level);
    }

    return (
        <div className="flex justify-center">
            <div className=" pl-20 border-r border-gray-700 flex flex-col gap-10 py-10">
                <InfoQuestoes h3="Pessoal" span="Se identifique" icone={<IoPerson />} color="#4a4b7a" onClick={navigateToHome}/>
                <InfoQuestoes h3="Profissional" span="Seu nível" icone={<LuScrollText />} color="#25CD89" onClick={navigateToStep2}/>
                <InfoQuestoes h3="Contatos" span="Como te achar" icone={<GrContact />} color="#4a4b7a" onClick={navigateToStep3}/>
            </div>

            <div className="py-10 pl-10 flex-1">
                <div className="mb-10 pb-5 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">Passo 2/3</p>
                    <h2 className="text-2xl font-bold my-2">{ctx?.name}, o que melhor descreve você?</h2>
                    <p className="text-gray-300">
                        Escolha a opção que melhor condiz com seu estado atual, profissionalmente
                    </p>
                </div>
                <div>
                    <div className="flex flex-col gap-5">
                        <OptNivel emoji="🥳" h3="Sou Iniciante" p="Comecei a programar há menos de 2 anos." level={0} onClick={handleLevel} isSelected={ctx?.level === 0}/>
                        <OptNivel emoji="😎" h3="Sou Programador" p="Já programo há 2 anos ou mais." level={1} onClick={handleLevel} isSelected={ctx?.level === 1} />
                    </div>
                    <div className="mt-5">
                        <Button2 text="Voltar" />
                        <Button text="Próximo" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Step2;