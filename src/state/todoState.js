//creating an atom for the Todo state.
//An Atom in a single unite of state. 
//Components can subscribe to an atom 
//if an atom updates that will be reflected in the component that uses that atom

import { atom } from "recoil";

export const todoState = atom ({
    key: "todoState",
    default: [],  

})