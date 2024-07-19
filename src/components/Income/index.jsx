import FinanceForm from "../FinanceForm";

const IncomeForm = ({ type, closeDrawer, drawerOpen }) => {
  return (
    <div>
      <FinanceForm
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        type={type}
      />
    </div>
  );
};

export default IncomeForm;
