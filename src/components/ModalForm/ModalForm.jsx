const ModalForm = ({ formValue }) => {
  return (
    <div>
      <p>{formValue.name}</p>
      <p>{formValue.surname}</p>
      <p>{formValue.email}</p>
      <p>{formValue.phone}</p>
    </div>
  );
};

export default ModalForm;
