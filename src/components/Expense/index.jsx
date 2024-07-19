import FinanceForm from "../FinanceForm";

const ExpenseForm = ({ type, closeDrawer, drawerOpen }) => {
  return (
    <>
      <FinanceForm
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        type={type}
      />
    </>
  );
};

export default ExpenseForm;
