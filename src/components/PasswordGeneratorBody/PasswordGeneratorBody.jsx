import s from "./style.module.css";

export function PasswordGeneratorBody() {
  return (
    <form name="form" className={s.card_main}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          {/* Select */}
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
        {/* Checkboxes */}
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
