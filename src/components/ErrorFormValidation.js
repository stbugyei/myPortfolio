import { useState } from 'react'

const SuccessFormValidation = () => {

    const [nameErr, setNameErr] = useState({});
    const [subjectErr, setSubjectErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [messageErr, setMessageErr] = useState({});

    //================   errorInputValidation Function =================
    const errorInputValidation = (details) => {

        const nameErr = {};
        const subjectErr = {};
        const emailErr = {};
        const messageErr = {};
        let isCorrect = true;

        //================  inputValidation for name =================

        if (!details.name.trim()) {
            nameErr.nameTxt = 'Name is required!';
            isCorrect = false;

        } else if (details.name.trim().length < 5) {
            nameErr.nameTxt = 'Name Must Not be less than 5 Characters'
            isCorrect = false;

        } else if (details.name.trim().length > 15) {
            nameErr.nameTxt = 'Name Must Not be more than 15 Characters!'
            isCorrect = false;

        }

        //================  inputValidation for subject =================

        if (!details.subject.trim()) {
            subjectErr.subjectTxt = 'Subject is required!';
            isCorrect = false;

        } else if (details.subject.trim().length < 5) {
            subjectErr.subjectTxt = 'Subject Name Must Not be less than 5 Characters!'
            isCorrect = false;

        } else if (details.subject.trim().length > 70) {
            subjectErr.subjectTxt = 'Subject Must Not be more than 70 Characters!'
            isCorrect = false;

        }

        //================  inputValidation for email =================

        if (!details.email) {
            emailErr.emailTxt = 'Email is required!';
            isCorrect = false;

        } else if (!((details.email) && (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(details.email)))) {
            emailErr.emailTxt = 'Email address is invalid!';
            isCorrect = false;
        }


        //================  inputValidation for message =================

        if (!details.message.trim()) {
            messageErr.messageTxt = 'Um... you have to write something!';
            isCorrect = false;

        } else if (details.message.trim().length < 10) {
            messageErr.messageTxt = 'oops! Message Must Not be less than 10 Characters!'
            isCorrect = false;
        }


        setNameErr(nameErr);
        setSubjectErr(subjectErr);
        setEmailErr(emailErr);
        setMessageErr(messageErr);


        return isCorrect;
    }


    return {
        nameErr,
        subjectErr,
        emailErr,
        messageErr,
        errorInputValidation,
    };
}

export default SuccessFormValidation