export const validator = (form, key) => {
    let success = false;
    if (key === "log_in") {
        let err = {
            email: "Email not provided",
            password: "Password not provided",
        };
        if (form.Email.length) {
            // eslint-disable-next-line no-useless-escape
            let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (reg.test(form.Email)) err.email = "";
            else err.email = "Invalid Email";
        }
        if (form.Password.length > 0)
            err.password = "Password must have at least 5 characters";
        if (form.Password.length >= 5) err.password = "";

        !err.email && !err.password ? (success = true) : (success = false);

        if (success === false) return err;
        else return success;
    }
    if (key === "operation") {
        let err = {
            reason: "Reason is required",
            type: "Type of operation required",
            amount: "You need to specify an amount",
        };
    }

    if (key === "sign_in") {
        let err = {
            email: "Email not provided", // // if email is invalid by regex change text to "invalid email"
            name: "Name not provided",
            password: "Password not povided",
        };
        if (form.Name.length) err.name = "";
        if (form.Password.length > 0)
            err.password = "Password must have at least 5 characters";
        if (form.Password.length >= 5) err.password = "";

        if (form.Email.length) {
            // eslint-disable-next-line no-useless-escape
            let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (reg.test(form.Email)) err.email = "";
            else err.email = "Invalid Email";
        }
        !err.email && !err.name && !err.password
            ? (success = true)
            : (success = false);

        if (success === false) return err;
        else return success;
    }
};
