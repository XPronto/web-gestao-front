import style from "../../app/css/degradeAnimate.module.css"

export default function TitleRegister({name, subtitle}) {
    return (
    <div className="flex flex-col items-center">
        <h1 className={style.gradientText}>
            {name}
        </h1>
        <span className={style.subGradientText}>{subtitle}</span>
    </div>

    

    );
  }
  