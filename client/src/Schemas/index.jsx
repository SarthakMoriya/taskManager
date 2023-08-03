import * as Yup from 'yup';

export const signupSchema = Yup.object({
    name: Yup.string().min(3).max(30).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], "Password must match")
})

export const signinSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
})

export const taskSchema = Yup.object({
    title: Yup.string().required("Please enter  Title"),
    desc: Yup.string().min(6).required("Please enter Description"),
})