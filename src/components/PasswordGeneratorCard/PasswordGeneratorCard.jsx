import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import s from "./style.module.css";
export function PasswordGeneratorCard() {
  return (
    <div className={s.root}>
      <div className={s.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody />
      </div>
      <PasswordGeneratorFooter />
    </div>
  );
}
