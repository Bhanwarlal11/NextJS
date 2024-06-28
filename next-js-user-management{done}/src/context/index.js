'use client'

import { AddNewUserInitialData } from "@/utils";
import { createContext,useState } from "react";



export const UserContext = createContext(null);

export default function UserState({children}){

    const [openPopUp, setOpenPopUp] = useState(false);
  const [addNewUserFormData, setAddNewUserFormData] = useState(
    AddNewUserInitialData
  );

    const [currentEditedID,setCurrentEditedID] = useState(null)

    return (
        <UserContext.Provider value={{currentEditedID,setCurrentEditedID,openPopUp,setOpenPopUp,addNewUserFormData,setAddNewUserFormData}}>
            {children}
        </UserContext.Provider>
    )
}