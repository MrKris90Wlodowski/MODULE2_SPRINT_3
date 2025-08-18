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
import styleHeading from "./components/TextHeading/TextHeading.module.css";
import styleButton from "./components/Button/Button.module.css";
import styleInput from "./components/InputField/InputField.module.css";
import styleWrapper from "./components/WrapperContainer/WrapperContainer.module.css";

const techIT = ["React", "Node.js", "HTML", "CSS", "Next.js"];
const yearsOfEXP = ["1", "2", "3", "4", "5"];
const codeLang = ["Java Script", "Python", "C++", "inne"];

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
  typeLearn: z.enum(["home", "online"], {
    errorMap: () => ({ message: "Wybierz formę nauki" }),
  }),
  file: z
    .any()
    .refine((files) => files?.length === 1, {
      message: "Musisz dodać dokładnie jeden plik",
    })
    .refine((files) => ["image/jpeg", "image/png"].includes(files?.[0]?.type), {
      message: "Dozwolone tylko pliki JPEG i PNG",
    }),
  techIT: z
    .array(z.enum(techIT))
    .nonempty({ message: "Wybierz jakoś technologię" }),
  skill: z.array(
    z.object({
      codeLang: z.string(),
      yearsOfEXP: z.string(),
    })
  ),
  terms: z.boolean().default(false),
});

const App = () => {
  const [showButtonExp, setShowButtonExp] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [errorExp, setErrorExp] = useState(0);

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      typeLearn: "home",
      skill: [],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "skill" });


  const formData = (formValue) => {
    if (errorExp < 1 && showButtonExp) {
      setError("skill", {
        type: "manual",
        message: "Dodaj przynajmniej jedną technologię",
      });
      return;
    }
    console.log(formValue);
    setModalData(formValue);
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
        <WrapperContainer>
          <TextHeading className={styleHeading.labelText}>
            WYBIERZ FORMĘ NAUKI:
          </TextHeading>
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
        </WrapperContainer>
        <InputSelect
          multiple={true}
          size={techIT.length}
          options={techIT}
          name="techIT"
          register={register}
          errors={errors}
        ></InputSelect>
        <TextHeading>DODAJ SWOJE CV</TextHeading>
        <InputField
          id="file"
          name="file"
          type="file"
          accept="image/jpeg, image/png"
          register={register}
          errors={errors}
        ></InputField>
        <TextHeading>DOŚWIADCZENIE W PROGRAMOWANIU</TextHeading>
        <InputField
          id="terms"
          name="terms"
          type="checkbox"
          onClick={() => setShowButtonExp((prev) => !prev)}
          className={styleInput.inputDiv}
          register={register}
          errors={errors}
        >
          Czy masz doswiadczenie w programowaniu ?
        </InputField>
        {showButtonExp && (
          <WrapperContainer>
            <Button
              type="button"
              className={styleButton.buttonGreen}
              onClick={() => {
                append({ codeLang: "Java Script", yearsOfEXP: "1" });
                setErrorExp(errorExp + 1);
              }}
            >
              Dodaj doswiadczenie
            </Button>
            {errors.skill?.message && (
              <p className={style.errorText}>{errors.skill.message}</p>
            )}
            <WrapperContainer>
              {fields.map((field, index) => (
                <WrapperContainer key={field.id}>
                  <InputSelect
                    multiple={false}
                    options={codeLang}
                    name={`skill.${index}.codeLang`}
                    register={register}
                    errors={errors}
                  ></InputSelect>
                  <InputSelect
                    multiple={false}
                    options={yearsOfEXP}
                    name={`skill.${index}.yearsOfEXP`}
                    register={register}
                  ></InputSelect>
                  <Button
                    className={styleButton.buttonRed}
                    type="button"
                    onClick={() => {
                      remove(index);
                      setErrorExp(errorExp + 1);
                    }}
                  >
                    Usuń
                  </Button>
                </WrapperContainer>
              ))}
            </WrapperContainer>
          </WrapperContainer>
        )}
        <Button type="submit">
          Wyslij zgłoszenie
        </Button>
      </Form>
      {modalData && (
        <div>
          <h1>{modalData.name}</h1>
          <TextHeading>{modalData.surname}</TextHeading>
          {modalData.file && modalData.file.length > 0 && (
            <img
              src={URL.createObjectURL(modalData.file[0])}
              alt="Prototype"
              style={{ width: "200px", height: "auto" }}
            />
          )}
        </div>
      )}
    </WrapperContainer>
  );
};

export default App;
