"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { deleteUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "@/context";

export default function SingleUserCard({ user }) {
  const {
    currentEditedID,
    setCurrentEditedID,
    openPopUp,
    setOpenPopUp,
    addNewUserFormData,
    setAddNewUserFormData,
  } = useContext(UserContext);

  async function handleDelete(getCurrentUserId) {
    const result = await deleteUserAction(getCurrentUserId, "/user-management");
    console.log(result);
  }

  function handleEdit(getCurrentUser) {
    setCurrentEditedID(getCurrentUser?._id);
    setAddNewUserFormData({
      firstName: getCurrentUser?.firstName,
      lastName: getCurrentUser?.lastName,
      email: getCurrentUser?.email,
      address: getCurrentUser?.address,
    });
    setOpenPopUp(true);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {user?.firstName} {user?.lastName}
        </CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user?.address}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={() => handleEdit(user)}>Edit</Button>
        <Button onClick={() => handleDelete(user?._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}
