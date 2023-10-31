import lockSvg from "../../assets/lock.svg";
import s from "./style.module.css";

export function PasswordGeneratorHeader() {
  return (
    <div className={s.header}>
      <div>Password Generator</div>
      <img src={lockSvg} className={s.icon} alt="Lock icon" />
    </div>
  );
}
