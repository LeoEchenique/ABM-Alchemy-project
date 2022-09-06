
export const validator = (form, key) => {

    let success = false;

    console.log(form)


    if (key === "operation") {
        let err = {
            reason: "Reason is required",
            type: "Type of operation required",
            amount: "You need to specify an amount"
        }

    }

    if (key === "sign_in") {
        let err = {
            email: "Email not provided", // // if email is invalid by regex change text to "invalid email"
            name: "Name not provided",
            password: "Need a password"
        }
        if (form.Name) err.name = "";
        if (form.Password.length >= 5) err.password = ""
        else if (form.Password.length > 0) err.password = "Password must have at least 5 characters";
        if (form.Email) {
            let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (reg.test(form.Email)) err.email = "";
            else err.email = "Invalid Email"
        }
        !err.email && !err.name && !err.password ? success = true : success = false
        if (success !== true) return err
        else return success
    }

}