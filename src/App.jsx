// import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import WrapperContainer from "./components/WrapperContainer/WrapperContainer";
import Form from "./components/Form/Form";
import InputTextContainer from "./components/InputField/InputField";
import Button from "./components/Button/Button";
import TextHeading from "./components/TextHeading/TextHeading";
// import { tr } from "zod/v4/locales";

const App = () => {
  return (
    <WrapperContainer>
      <Form>
        <TextHeading>DANE OSOBOWE</TextHeading>
        <InputTextContainer
        name="username"
        placeholder="imie"
        type="text"
        ></InputTextContainer>
        <InputTextContainer>NAZWISKO</InputTextContainer>
        <InputTextContainer>E-MAIL</InputTextContainer>
        <InputTextContainer>NUMER TELEFONU</InputTextContainer>
        <TextHeading>PREFERENCJE KURSU</TextHeading>
        <WrapperContainer>
          <TextHeading>WYBIERZ FORMĘ NAUKI
            <InputTextContainer>STACIONARNA</InputTextContainer>
            <InputTextContainer>ONLINE</InputTextContainer>
          </TextHeading>
        </WrapperContainer>
        <TextHeading>DODAJ SWOJE CV</TextHeading>
        <TextHeading>DOŚWIADCZENIE W PROGRAMOWANIU</TextHeading>
        <InputTextContainer></InputTextContainer>
        <InputTextContainer></InputTextContainer>
        <Button>Wyslij zgłoszenie</Button>
      </Form>
    </WrapperContainer>
  );
};

const schema = z.object({
  name: z
    .string()
    .nonempty("Pole musi byc wypełnione !")
    .min(3, "Pole musi zawierać minimum 3 znaki !"),
  surname: z
    .string()
    .nonempty("Pole musi byc wypełnione !")
    .min(3, "Pole musi zawierać minium 3 znaki !"),
  email: z
    .string()
    .nonempty("Pole musi byc wypełnione !")
    .email("Pole musi zawierac poprawny adres email"),
  phoneNum: z
    .string()
    .nonempty("Pole musi byc wypełnione !")
    .regex(/^[0-9].{9}$/, "Pole musi zawierać cyfry"),
});

function App1() {
  const [codeExp, setCodeExp] = useState(false);

  const pickEXP = () => {
    setCodeExp((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (formValue) => {
    console.log(formValue);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Dane osobowe</h2>
        <input id="name" {...register("name")} placeholder="Imię" type="text" />
        {errors.name && errors.name.message}
        <input
          id="surname"
          {...register("surname")}
          placeholder="Nazwisko"
          type="text"
        />
        {errors.surname && errors.surname.message}
        <input
          id="email"
          {...register("email")}
          placeholder="E-mail"
          type="email"
        />
        {errors.email && errors.email.message}
        <input
          id="phoneNum"
          {...register("phoneNum")}
          placeholder="Numer telefonu"
          type="tel"
        />
        {errors.phoneNum && errors.phoneNum.message}
        <h2>Preferencje kursu</h2>
        <p>
          Wybierz formę nauki:
          <label>
            Stacjonarna
            <input id="onSite" type="radio" name="course" />
          </label>
          <label>
            Online
            <input id="remote" type="radio" name="course" />
          </label>
        </p>
        <select multiple size="5">
          <option>React</option>
          <option>Node.js</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>Next.js</option>
        </select>
        <h2>Dodaj swoje CV</h2>
        <input type="file" accept="image/jpeg, image/png" />
        <h2>Doświadczenie w programowaniu</h2>
        <label>
          <input type="checkbox" onClick={pickEXP} />
          Czy masz doświadczenie w programowaniu?
        </label>
        {codeExp === true && (
          <div>
            <h2>Hello</h2>
          </div>
        )}
        <button type="submit">Wyslij zgłoszenie</button>
      </form>
    </>
  );
}

export default App;
