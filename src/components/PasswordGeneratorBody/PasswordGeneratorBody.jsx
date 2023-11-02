import s from "./style.module.css";

export function PasswordGeneratorBody({ onSubmit }) {
  const submit = (event) => {
    event.preventDefault();
    const formData = {};

    new FormData(event.target).forEach((value, key) => {
      formData[key] = value;
    });

    console.log("***", formData);
    let password = Math.random();
    onSubmit(password);
  };

  return (
    <form onSubmit={submit}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select name="size" defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name="uppercase" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input name="number" type="checkbox" defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name="special" type="checkbox" defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button className={s.btn_generate}>GENERATE</button>
      </div>
    </form>
  );
}
