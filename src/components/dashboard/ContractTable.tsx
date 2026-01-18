import { useContract } from "../../context/ContractContext";

export default function ContractTable() {
  const { state } = useContract();
  return (
    <table border={1}>
      <thead>
        <tr><th>Name</th><th>Blueprint</th><th>Status</th></tr>
      </thead>
      <tbody>
        {state.contracts.map((c:any) => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.blueprintName}</td>
            
            <td>
              <span className={`status ${c.status}`}>
                {c.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}