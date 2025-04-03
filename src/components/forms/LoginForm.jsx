import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function LoginForm(){
    return(
        <form className="flex flex-col gap-6 h-4/6 w-full px-4 pt-5 bg-white rounded-t-2xl max-w-[500px] ">
            <div className="text-gray-400 font-medium text-center mb-4">
                <p className="text-lg">Seja bem-vindo ao XPronto</p>
                <p>Uma ferramente para o seu estabelecimento </p>
            </div>
            <div className="flex flex-col gap-4">
                <Input placeholder="Email" className="h-12 lg:h-14 border-gray-400  focus-visible:border-gray-600 focus-visible:border-2"/>
                <Input placeholder="Senha" className="h-12 lg:h-14 border-gray-400  focus-visible:border-gray-600 focus-visible:border-2"/>
            </div>
            <Button className="w-full bg-[#0c111b] text-white p-6 lg:p-8 text-lg lg:text-xl">Cadastrar</Button>
        </form>
    )
}