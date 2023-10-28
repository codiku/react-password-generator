import s from "./style.module.css";
import copyPasteSvg from "../../assets/copy-paste.svg";
export function PasswordGeneratorFooter({ password }) {
  const saveInClipboard = () => {
    console.log("***", password);
    navigator.clipboard.writeText(password);
  };
  return (
    <div onClick={saveInClipboard} className={s.card_footer}>
      <div>{password}</div>
      <img src={copyPasteSvg} alt="Copy paste icon" className={s.icon} />
    </div>
  );
}
