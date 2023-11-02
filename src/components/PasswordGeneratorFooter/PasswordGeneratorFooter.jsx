import s from "./style.module.css";
import copyPasteIcon from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter({ password }) {
  return (
    <div className={s.root}>
      <div>{password}</div>
      <img className={s.icon} src={copyPasteIcon} alt="Copy paste icon" />
    </div>
  );
}
