export type FieldType = "text" | "date" | "checkbox" | "signature";

export interface BlueprintField {
  id: string;
  label: string;
  type: FieldType;
  position: { x: number; y: number };
}

export interface Blueprint {
  id: string;
  name: string;
  fields: BlueprintField[];
}

export type ContractStatus =
  | "CREATED"
  | "APPROVED"
  | "SENT"
  | "SIGNED"
  | "LOCKED"
  | "REVOKED";

export interface Contract {
  id: string;
  name: string;
  blueprintId: string;
  blueprintName: string;
  fields: BlueprintField[];
  values: Record<string, any>;
  status: ContractStatus;
  createdAt: string;
}