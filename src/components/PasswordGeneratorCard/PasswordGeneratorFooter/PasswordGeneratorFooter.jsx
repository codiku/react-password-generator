import s from "./style.module.css";
import copyPasteSvg from "../../../assets/copy-paste.svg";
export function PasswordGeneratorFooter({ password }) {
  return (
    <div className={s.card_footer}>
      <div>{password}</div>
      <img src={copyPasteSvg} alt="Copy paste icon" className={s.icon} />
    </div>
  );
}
