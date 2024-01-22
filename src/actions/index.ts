"use server"

import { GraphQLClientSingleton } from "app/graphql";

export const handleCreateUser = (formData) => {
    console.log("handlecreateuser", formData);
    const graphlClient = GraphQLClientSingleton.getInstance().getClient()
}