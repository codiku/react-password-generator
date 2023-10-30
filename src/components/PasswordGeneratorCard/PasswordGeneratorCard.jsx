import { PasswordGeneratorBody } from "../PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorHeader } from "../PasswordGeneratorHeader/PasswordGeneratorHeader";
import { PasswordGeneratorFooter } from "../PasswordGeneratorFooter/PasswordGeneratorFooter";
import s from "./style.module.css";
import { useState } from "react";
import { generatePassword } from "../../lib/password";

export function PasswordGeneratorCard() {
  const [password, setPassword] = useState(
    generatePassword({
      size: 15,
      numbers: "on",
      uppercase: "on",
      lowercase: "on",
      specials: "on",
    })
  );
  return (
    <div className={s.card}>
      <div className={s.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody onSubmit={setPassword} />
      </div>
      <PasswordGeneratorFooter password={password} />
    </div>
  );
}
