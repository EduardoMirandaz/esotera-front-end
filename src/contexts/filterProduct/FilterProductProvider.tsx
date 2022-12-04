import { FilterProductContext } from "./FilterProductContext";
import React, {useState} from 'react';

type FilterProductProps = {
    children: any;
}

export default function FilterProduct(props: FilterProductProps) {

    const [filtro, setFiltro] = useState("");
    

    return (
        <FilterProductContext.Provider value={{filtro, setFiltro}}>
            {props.children}
        </FilterProductContext.Provider>
    )
}