import TitleRegister from "@/components/animations/TitleRegister";
import RegisterForm from "@/components/forms/RegisterForm";

export default function Register(){
    return(
        <main className="flex flex-col justify-end h-screen md:items-center lg:items-center bg-[#0c111b]">
            <div className="flex flex-col justify-center items-center h-2/6">
                <TitleRegister name="XPronto" subtitle="Cadastro"/>
            </div>
                <RegisterForm/> 

   
        </main>
    )
}