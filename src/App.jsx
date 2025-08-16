// import "./App.css";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import WrapperContainer from "./components/WrapperContainer/WrapperContainer";
import Form from "./components/Form/Form";
import InputField from "./components/InputField/InputField";
import Button from "./components/Button/Button";
import TextHeading from "./components/TextHeading/TextHeading";
import InputSelect from "./components/InputSelect/InputSelect";
// import { tr } from "zod/v4/locales";
import styleHeading from "./components/TextHeading/TextHeading.module.css";
import styleButton from "./components/Button/Button.module.css";
import styleInput from "./components/InputField/InputField.module.css";
import styleWrapper from "./components/WrapperContainer/WrapperContainer.module.css";

const schema = z.object({
  name: z
    .string()
    .nonempty("pole nie może byc puste ")
    .min(3, "imię musi posiadac co najmniej 3 znaki"),
  surname: z
    .string()
    .nonempty("pole nie może byc puste ")
    .min(3, "nazwisko musi posiadac co najmniej 3 znaki"),
  email: z
    .string()
    .nonempty("pole nie może byc puste")
    .email("musisz wpisac poprawny adres email"),
  phone: z
    .string()
    .nonempty("pole nie może byc puste")
    .regex(/^[0-9]{9}$/, "pole musi zawierac 9 cyfr"),
  file: z
  .any()
  .refine((files) => files?.length === 1 , {
    message: "Musisz dodać dokładnie jeden plik",
  })
}).refine((files) => ["image/jpeg", "image/png"].includes(files?.[0]?.type), {
  message: "Dozwolone tylko pliki JPEG i PNG"
})

const App = () => {
  const [showButtonExp, setShowButtonExp] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [techSkill, setTechSkill] = useState(null);

  const techIT = ["React", "Node.js", "HTML", "CSS", "Next.js"];

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), 
    defaultValues: {
      name: "Kris",
      typeLearn: "home"
    }
   });

  const { fields, append, remove } = useFieldArray({ control, name: "skill" });

  const formData = (formValue) => {
    console.log(formValue);
    setModalData(formValue);
    reset();
  };

  return (
    <WrapperContainer className={styleWrapper.wrapper}>
      <Form onSubmit={handleSubmit(formData)}>
        <TextHeading>DANE OSOBOWE</TextHeading>
        <InputField
          id="name"
          name="name"
          placeholder="imie"
          type="text"
          register={register}
          errors={errors}
        ></InputField>
        <InputField
          id="surname"
          name="surname"
          placeholder="nazwisko"
          type="text"
          register={register}
          errors={errors}
        ></InputField>
        <InputField
          id="email"
          name="email"
          placeholder="email"
          type="email"
          register={register}
          errors={errors}
        ></InputField>
        <InputField
          id="phone"
          name="phone"
          placeholder="numer telefonu"
          type="tel"
          register={register}
          errors={errors}
        ></InputField>
        <TextHeading>PREFERENCJE KURSU</TextHeading>
        <TextHeading className={styleHeading.labelText}>
          WYBIERZ FORMĘ NAUKI:
          <InputField
            id="home"
            type="radio"
            name="typeLearn"
            value="home"
            register={register}
          >
            STACIONARNA
          </InputField>
          <InputField
            id="online"
            type="radio"
            name="typeLearn"
            value="online"
            register={register}
          >
            ONLINE
          </InputField>
        </TextHeading>
        <InputSelect
          multiple={true}
          size={techIT.length}
          options={techIT}
        ></InputSelect>
        <TextHeading>DODAJ SWOJE CV</TextHeading>
        <InputField id="file" name="file" type="file" accept="image/jpeg, image/png" register={register} errors={errors}></InputField>
        <TextHeading>DOŚWIADCZENIE W PROGRAMOWANIU</TextHeading>
        <InputField
          id="terms"
          name="terms"
          type="checkbox"
          onClick={() => setShowButtonExp((prev) => !prev)}
          className={styleInput.inputDiv}
        >
          Czy masz doswiadczenie w programowaniu ?
        </InputField>
        {showButtonExp && (
          <WrapperContainer>
            <Button type="button" className={styleButton.buttonGreen}>
              Dodaj doswiadczenie
            </Button>
            <WrapperContainer>
              {fields.map((field, index) => (
                <WrapperContainer key={index}>
                  <InputSelect></InputSelect>
                </WrapperContainer>
              ))}
            </WrapperContainer>
          </WrapperContainer>
        )}
        <Button type="submit">Wyslij zgłoszenie</Button>
      </Form>
      { modalData && (
        <div>
          <h1>{modalData.name}</h1>
          <TextHeading>{modalData.surname}</TextHeading>
        </div>
      )}
    </WrapperContainer>
  );
};



export default App;
