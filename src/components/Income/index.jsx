import FinanceForm from "../FinanceForm";

const IncomeForm = ({ type, closeDrawer, drawerOpen, onSave }) => {
  return (
    <div>
      <FinanceForm
        onSave={onSave}
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        type={type}
      />
    </div>
  );
};

export default IncomeForm;
