"use server"

import { GraphQLClientSingleton } from "app/graphql";
import { createUserMutation } from "app/graphql/mutations/createUserMutation";
import { createAcessToken } from "app/utils/auth/createAcessToken";
import { redirect } from "next/navigation";

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

    if(customer?.firstName){
        await createAcessToken(formDataObject.email as string, formDataObject.password as string)
        redirect("/store")
    }
}

export const handleLogin = async (formData: FormData) =>{
    const formDataObject = Object.fromEntries(formData)
    const accesToken = await createAcessToken(formDataObject.email as string, formDataObject.password as string)
    if(accesToken){
        redirect("/store")
    }
}