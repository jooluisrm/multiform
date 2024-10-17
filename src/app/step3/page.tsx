import { Button } from "@/components/Buttons/Button";
import { Button2 } from "@/components/Buttons/Button2";
import { InfoQuestoes } from "@/components/InfoQuestoes/infoQuestoes";
import { Input } from "@/components/Input/Input";
import { GrContact } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";

const Step3 = () => {
    return (
        <div className="flex justify-center">
            <div className=" pl-20 border-r border-gray-700 flex flex-col gap-10 py-10">
                <InfoQuestoes h3="Pessoal" span="Se identifique" icone={<IoPerson />} color="#4a4b7a" />
                <InfoQuestoes h3="Profissional" span="Seu nível" icone={<LuScrollText />} color="#4a4b7a" />
                <InfoQuestoes h3="Contatos" span="Como te achar" icone={<GrContact />} color="#25CD89" />
            </div>

            <div className="py-10 pl-10 flex-1">
                <div className="mb-10 pb-5 border-b border-gray-700">
                    <p className="text-gray-300 mb-2">Passo 3/3</p>
                    <h2 className="text-2xl font-bold my-2">Legal [NOME], onde te achamos?</h2>
                    <p className="text-gray-300">
                        Preencha com seus contatos para conseguirmos entrar em contato.
                    </p>
                </div>
                <div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <Input label="Qual seu e-mail?" typeInput="email" id="email" />
                        </div>

                        <div>
                            <Input label="Qual seu GitHub?" typeInput="text" id="git" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <Button2 text="Voltar"/>
                        <Button text="Finalizar Cadastro" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Step3;