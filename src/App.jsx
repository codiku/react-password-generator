import { useState } from "react";
import s from "./App.module.css";
import { PasswordGeneratorHeader } from "./components/PasswordGeneratorHeader/PasswordGeneratorHeader";
import { PasswordGeneratorBody } from "./components/PasswordGeneratorBody/PasswordGeneratorBody";
import { PasswordGeneratorFooter } from "./components/PasswordGeneratorFooter/PasswordGeneratorFooter";
export function App() {
  const [password, setPassword] = useState("");

  return (
    <div className={s.root}>
      <div className={s.card}>
        <div className={s.main}>
          <PasswordGeneratorHeader />
          <PasswordGeneratorBody onSubmit={setPassword} />
        </div>
        <PasswordGeneratorFooter password={password} />
      </div>
    </div>
  );
}
