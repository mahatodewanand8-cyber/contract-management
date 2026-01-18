import { ContractProvider } from "./context/ContractContext";
import BlueprintForm from "./components/blueprint/BlueprintForm";
import ContractForm from "./components/contract/ContractForm";
import ContractTable from "./components/dashboard/ContractTable";

export default function App() {
  return (
    <ContractProvider>
      <div className="container">
      <BlueprintForm />
      <hr />
      <ContractForm />
      <ContractTable />
      </div>
    </ContractProvider>
  );
}