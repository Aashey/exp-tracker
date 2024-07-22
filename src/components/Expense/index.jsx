import FinanceForm from "../FinanceForm";

const ExpenseForm = ({ type, closeDrawer, drawerOpen, onSave }) => {
  return (
    <>
      <FinanceForm
        onSave={onSave}
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        type={type}
      />
    </>
  );
};

export default ExpenseForm;
