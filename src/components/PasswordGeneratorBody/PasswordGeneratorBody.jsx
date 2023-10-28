import { generatePassword } from "../../lib/password";
import s from "./style.module.css";

export function PasswordGeneratorBody({ onSubmit }) {
  const submit = (event) => {
    event.preventDefault();
    const formData = {};

    new FormData(event.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    let password = generatePassword(formData);
    onSubmit(password);
  };

  return (
    <form name="form" onSubmit={submit} className={s.card_main}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select
            defaultValue={15}
            name="size"
            type="number"
            className={s.input_text}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name="uppercase" defaultChecked type="checkbox" />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input name="numbers" defaultChecked type="checkbox" />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name="specials" defaultChecked type="checkbox" />
        </div>
      </div>
      {/* Button */}
      <div className={s.btn_box}>
        <button className={s.btn_generate}>GENERATE</button>
      </div>
    </form>
  );
}
