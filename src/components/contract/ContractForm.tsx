import { useState } from "react";
import { useContract } from "../../context/ContractContext";

export default function ContractForm() {
  const { state, dispatch } = useContract();
  const [id, setId] = useState("");

  const blueprint = state.blueprints.find((b:any) => b.id === id);

  return (
    <div>
      <h3>Create Contract</h3>
      <select onChange={e => setId(e.target.value)}>
        <option>Select Blueprint</option>
        {state.blueprints.map((b:any) => (
          <option key={b.id} value={b.id}>{b.name}</option>
        ))}
      </select>
      <button onClick={() => blueprint && dispatch({
        type: "ADD_CONTRACT",
        payload: {
          id: Date.now().toString(),
          name: blueprint.name + " Contract",
          blueprintId: blueprint.id,
          blueprintName: blueprint.name,
          fields: blueprint.fields,
          values: {},
          status: "CREATED",
          createdAt: new Date().toISOString()
        }
      })}>Generate</button>
    </div>
  );
}