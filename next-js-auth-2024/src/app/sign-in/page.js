'use client'

import { loginUserAction } from "@/actions";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLoginFormControls } from "@/utils";
import { set } from "mongoose";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignIn() {

    const [signInFormData,setSignInFormData] = useState(initialLoginFormData)

    const router = useRouter();

    async function handleLoginFrom(){
        const result = await loginUserAction(signInFormData);
        console.log(result)

        if(result?.success) router.push('/');
    }

    return ( 
        <div>
            <h1>Login - signIn pages</h1>
            <form action={handleLoginFrom}>
                {
                    userLoginFormControls.map((controlItem)=>(
                        <div key={controlItem.name}>
                            <Label>{controlItem.label}</Label>
                            <CommonFormElement currentItem={controlItem} value={signInFormData.name} onChange={(e)=>{
                                setSignInFormData({
                                    ...signInFormData,
                                    [e.target.name]:e.target.value
                                })
                            }} />
                        </div>
                    ))
                }
                <Button type="submit">Sign In</Button>
            </form>
        </div>
     );
}

export default SignIn;