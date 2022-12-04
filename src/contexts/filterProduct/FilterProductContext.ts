import { createContext, useContext } from "react";

export const FilterProductContext = createContext(null as any);

export function useFilterProductContext(){
    const context = useContext(FilterProductContext);
    if(context === undefined){
        throw new Error("Fora do FilterProductProvider");
    }
    return context;
}