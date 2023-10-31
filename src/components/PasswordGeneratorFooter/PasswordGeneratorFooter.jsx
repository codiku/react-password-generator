import s from "./style.module.css";
import copyPasteSvg from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter({ password }) {
  return (
    <div className={s.root}>
      <div>Super random password</div>
      <img src={copyPasteSvg} alt="Copy paste icon" className={s.icon} />
    </div>
  );
}
