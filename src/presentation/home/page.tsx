import SlideInEffect from "../../animations/slideIn/SlideInEffect";
import logoP1 from "../../assets/logos/p1Logo.png";
import NavBarComp from "./components/navbar";
import style from "./style.module.css";

export default function HomePage() {
  return (
    <SlideInEffect duration={1}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <header className="flex flex-row fixed top-0 left-0 w-full h-16 bg-[var(--primary-color)] justify-between items-center px-4 ">
          <picture>
            <img
              src={logoP1}
              alt="Logo P1"
              className="h-12"
              style={{ width: "10vw", objectFit: "contain" }}
            />
          </picture>
          <NavBarComp />
          <button className={style.novo_chamado_btn}>Novo Chamado</button>
        </header>
      </div>
    </SlideInEffect>
  );
}
