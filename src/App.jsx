import s from "./App.module.css";
import { PasswordGeneratorCard } from "./components/PasswordGeneratorCard/PasswordGeneratorCard";
export function App() {
  return (
    <div className={s.root}>
      <PasswordGeneratorCard />
    </div>
  );
}
