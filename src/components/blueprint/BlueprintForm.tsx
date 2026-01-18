import { useState } from "react";
import { useContract } from "../../context/ContractContext";

export default function BlueprintForm() {
  const { dispatch } = useContract();
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Create Blueprint</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => {
        dispatch({ type: "ADD_BLUEPRINT", payload: { id: Date.now().toString(), name, fields: [] }});
        setName("");
      }}>Create</button>
    </div>
  );
}