import React, { createContext, useReducer, useContext } from "react";
import { Blueprint, Contract } from "../models/types";

const ContractContext = createContext<any>(null);

const initialState = { blueprints: [], contracts: [] };

function reducer(state: any, action: any) {
  switch (action.type) {
    case "ADD_BLUEPRINT":
      return { ...state, blueprints: [...state.blueprints, action.payload] };
    case "ADD_CONTRACT":
      return { ...state, contracts: [...state.contracts, action.payload] };
    case "UPDATE_CONTRACT_STATUS":
      return {
        ...state,
        contracts: state.contracts.map((c: Contract) =>
          c.id === action.id ? { ...c, status: action.status } : c
        ),
      };
    default:
      return state;
  }
}

export const ContractProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContractContext.Provider value={{ state, dispatch }}>
      {children}
    </ContractContext.Provider>
  );
};

export const useContract = () => useContext(ContractContext);