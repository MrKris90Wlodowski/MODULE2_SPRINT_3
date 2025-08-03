// import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
// import { tr } from "zod/v4/locales";

const schema = z.object({
  name: z
  .string()
  .nonempty("Pole musi byc wypełnione !")
  .min(3,"Pole musi zawierać minimum 3 znaki !"),
  surname: z
  .string()
  .nonempty("Pole musi byc wypełnione !")
  .min(3,"Pole musi zawierać minium 3 znaki !"),
  email: z
  .string()
  .nonempty("Pole musi byc wypełnione !")
  .email("Pole musi zawierac poprawny adres email"),
  phoneNum: z
  .string()
  .nonempty("Pole musi byc wypełnione !")
  .regex(/^[0-9].{9}$/,"Pole musi zawierać cyfry")
})

function App() {

  const [codeExp,setCodeExp] = useState(false);

  const pickEXP = () => {
    setCodeExp(prev => !prev)
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({resolver: zodResolver(schema)})

  const onSubmit = (formValue) => {
    console.log(formValue);
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Dane osobowe</h2>
        <input id="name" {...register("name")} placeholder="Imię" type="text" />
        {errors.name && errors.name.message}
        <input id="surname" {...register("surname")} placeholder="Nazwisko" type="text" />
        {errors.surname && errors.surname.message}
        <input id="email" {...register("email")} placeholder="E-mail" type="email" />
        {errors.email && errors.email.message}
        <input id="phoneNum" {...register("phoneNum")} placeholder="Numer telefonu" type="tel" />
        {errors.phoneNum && errors.phoneNum.message}
        <h2>Preferencje kursu</h2>
        <p>
          Wybierz formę nauki:
          <label>
            Stacjonarna
            <input id="onSite" type="radio" name="course"/>
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
        <input type="file" accept="image/jpeg, image/png"/>
        <h2>Doświadczenie w programowaniu</h2>
        <label><input type="checkbox" onClick={pickEXP}/>Czy masz doświadczenie w programowaniu?</label> 
        {codeExp === true && 
        <div>
          <h2>Hello</h2>
        </div>
        }
        <button type="submit">Wyslij zgłoszenie</button>
      </form>
    </>
  );
}

export default App;
