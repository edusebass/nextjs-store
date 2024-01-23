"use server"

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";

export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]

    console.log("handlecreateuser", formData);

    const graphlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        input:{
            ...formDataObject,
            phone: '+593' + formDataObject.phone
        }
    }

    const { customerCreate } = await graphlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate
    console.log(customer)
    console.log(customerUserErrors)
}