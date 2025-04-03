import LoginForm from "@/components/forms/LoginForm";
import TitleRegister from "@/components/animations/TitleRegister";

export default function Register(){
    return(
        <main className="flex flex-col justify-end h-screen md:items-center lg:items-center bg-[#0c111b]">
            <div className="flex flex-col justify-center items-center h-2/6">
                <TitleRegister name="XPronto" subtitle="Login"/>
            </div>
                <LoginForm/> 

   
        </main>
    )
}