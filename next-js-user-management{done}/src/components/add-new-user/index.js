"use client";

import { useContext } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddNewUserFormControls, AddNewUserInitialData } from "@/utils";
import { addNewUserAction, editUserAction } from "@/actions";
import { UserContext } from "@/context";

export default function AddNewUser() {
  const {currentEditedID,
    setCurrentEditedID,openPopUp, setOpenPopUp, addNewUserFormData, setAddNewUserFormData} = useContext(UserContext)

  console.log(addNewUserFormData);
  // console.log(currentEditedID);

  function handleSaveButtonValid() {
    return  Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    )
  }

  async function handleAddNewUserAction(){
    const result = currentEditedID !== null ? await editUserAction(currentEditedID, addNewUserFormData, '/user-management')
    : await addNewUserAction(addNewUserFormData,'/user-management')
    console.log(result);
    setOpenPopUp(false)
    setAddNewUserFormData(AddNewUserInitialData)
    setCurrentEditedID(null)
  }

  return (
    <div>
      <Button onClick={() => setOpenPopUp(true)}>Add New User</Button>
      <Dialog
        open={openPopUp}
        onOpenChange={() => {
          setOpenPopUp(false);
          setAddNewUserFormData(AddNewUserInitialData);
          setCurrentEditedID(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {
                currentEditedID !== null ? "Edit User" : "Add New User"
              }
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-red-500">Enter your details</DialogDescription>
          <div className="grid gap-4 py-4">
            <form action={handleAddNewUserAction} className="grid grid-cols-1 items-center gap-4">
              {AddNewUserFormControls.map((controlItem) => (
                <div className="mb-5" key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(e) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: e.target.value,
                      })
                    }
                    className="col-span-3 mt-1"
                  />
                </div>
              ))}
              <Button
              className="disabled:opacity-55"
              disabled={!handleSaveButtonValid()}
              type="submit"
            >
              Save
            </Button>
            </form>
          </div>
          
        </DialogContent>
      </Dialog>
    </div>
  );
}
