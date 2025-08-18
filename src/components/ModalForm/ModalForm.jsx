import TextHeading from "../TextHeading/TextHeading";
import WrapperContainer from "../WrapperContainer/WrapperContainer";

const ModalForm = ({ formUserValue }) => {
  return (
    <WrapperContainer>
      <TextHeading>Dane Formularza</TextHeading>
      <WrapperContainer>
        <TextHeading>Dane osobowe:</TextHeading>
        <TextHeading>Imię: {formUserValue.name}</TextHeading>
        <TextHeading>Nazwisko: {formUserValue.surname}</TextHeading>
        <TextHeading>Email: {formUserValue.email}</TextHeading>
        <TextHeading>Telefon: {formUserValue.phone}</TextHeading>
        <TextHeading>Doświadczenie w programowaniu:</TextHeading>
        <TextHeading>Preferencje kursu:</TextHeading>
        <TextHeading>Curriculum Vitae:</TextHeading>
        <img/>
      </WrapperContainer>
    </WrapperContainer>
  );
};

export default ModalForm;
