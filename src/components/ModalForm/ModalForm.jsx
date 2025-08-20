import TextHeading from "../TextHeading/TextHeading";
import WrapperContainer from "../WrapperContainer/WrapperContainer";
import styleModal from "./ModalForm.module.css";

const ModalForm = ({ formUserValue }) => {
  return (
    <WrapperContainer className={styleModal.wrapperModalClassic}>
      <WrapperContainer className={styleModal.wrapperModal}>
        <TextHeading className={styleModal.headings}>
          Dane Formularza
        </TextHeading>
        <WrapperContainer>
          <TextHeading className={styleModal.headings}>Dane osobowe: </TextHeading>
          <TextHeading>Imię: {formUserValue.name}</TextHeading>
          <TextHeading>Nazwisko: {formUserValue.surname}</TextHeading>
          <TextHeading>Email: {formUserValue.email}</TextHeading>
          <TextHeading>Telefon: {formUserValue.phone}</TextHeading>
          {formUserValue.skill && (
            <WrapperContainer>
              <TextHeading className={styleModal.headings}>
                Doświadczenie w programowaniu:
              </TextHeading>
              {formUserValue.skill.map((skillTech, index) => (
                <TextHeading key={index}>
                  Technologia: {skillTech.codeLang}/ poziom
                  {skillTech.yearsOfEXP}
                </TextHeading>
              ))}
            </WrapperContainer>
          )}
          <TextHeading className={styleModal.headings}>
            Preferencje kursu:
          </TextHeading>
          <TextHeading>Typ kursu: {formUserValue.typeLearn}</TextHeading>
          {formUserValue.techIT && (
            <WrapperContainer>
              {formUserValue.techIT.map((tech, index) => (
                <TextHeading key={index}>{tech}</TextHeading>
              ))}
            </WrapperContainer>
          )}
          <TextHeading className={styleModal.headings}>
            Curriculum Vitae:
          </TextHeading>
          <img
            src={URL.createObjectURL(formUserValue.file[0])}
            alt="CV"
            style={{ width: "200px", height: "auto" }}
          />
        </WrapperContainer>
      </WrapperContainer>
    </WrapperContainer>
  );
};

export default ModalForm;
