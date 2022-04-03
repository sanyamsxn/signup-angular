import {Form, FormGroup} from "@angular/forms";

export function PassWordChecker(field1 : string, field2 : string){
    return (formGroup : FormGroup) => {
        const pass = formGroup.controls[field1];
        const confPass = formGroup.controls[field2];

        if(pass.value!== confPass.value){
            confPass.setErrors({mustMatch : true})
        }else{
            confPass.setErrors(null)
        }
    }
}