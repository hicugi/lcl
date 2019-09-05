import React, { useState } from "react";
import Dialog from "../dialog";
import SecretCode from "../secret-code";
import FormGroup from "../form/group";
import Button from "../button";

const $dialog = React.createRef();

export default function({ close }) {
  const [error, setSerror] = useState(undefined);
  const [value, setValue] = useState("");

  const handleValueChage = ({ value }) => {
    setSerror(undefined);
    setValue(value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (value === "") {
      setSerror("Ошибка");
      return;
    }

    $dialog.current.close();
  };

  return (
    <Dialog
      title="Включить 2-х факторную аутентификацию"
      close={close}
      ref={$dialog}
    >
      <div className="dialog-info dialog-info_1">
        <p>
          <strong>Шаг 1</strong> - Загрузите приложение для 2-х факторной
          аутентификации
        </p>
        <p>
          <strong>Шаг 2</strong> - Отсканируйте QR код или введите вручную
          секретный код ниже через приложение
        </p>
      </div>

      <SecretCode class="auth__secret-code" />

      <div className="dialog-info dialog-info_3">
        <p>
          <strong>Шаг 3</strong> - Введите код подтверждения из приложения
          аутентификатора
        </p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <FormGroup
          type="number"
          placeholder="Введите код"
          name="code"
          value={value}
          error={error}
          change={handleValueChage}
        />

        <div className="form__footer">
          <Button variant="info">Подтвердить</Button>
        </div>
      </form>

      <style jsx>{`
        .dialog-info_1 {
          margin-bottom: 40px;
        }
        .dialog-info_3 {
          margin-top: 50px;
          margin-bottom: 16px;
        }

        .form__footer {
          padding-top: 36px;
        }
      `}</style>
    </Dialog>
  );
}
