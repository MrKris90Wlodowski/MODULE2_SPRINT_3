// import "./App.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"

function App() {
  return (
    <>
      <form>
        <h2>Dane osobowe</h2>
        <input id="name" placeholder="Imię" />
        <input id="surname" placeholder="Nazwisko" />
        <input id="email" placeholder="E-mail" />
        <input id="phoneNum" placeholder="Numer telefonu" />
        <h2>Preferencje kursu</h2>
        <p>
          Wybierz formę nauki:
          <label>
            Stacjonarna
            <input id="onSite" type="radio" name="course" checked />
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
        <label><input type="checkbox"/>Czy masz doświadczenie w programowaniu?</label>
        <button type="submit">Wyslij zgłoszenie</button>
      </form>
    </>
  );
}

export default App;
