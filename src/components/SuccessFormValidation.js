import { useState } from 'react'

const SuccessFormValidation = () => {

    const [nameSuccess, setNameSuccess] = useState({});
    const [subjectSuccess, setSubjectSuccess] = useState({});
    const [emailSuccess, setEmailSuccess] = useState({});
    const [messageSuccess, setMessageSuccess] = useState({});

    //================  successInputValidation Function =================
    const successInputValidation = (details) => {

        const nameValid = {};
        const subjectValid = {};
        const emailValid = {};
        const messageValid = {};
        let isCorrect = false;

        //================  inputValidation for name =================

        if ((details.name.trim()) && (details.name.trim().length < 15) && (details.name.trim().length > 5)) {
            nameValid.success = 'data is valid'
            isCorrect = true;
        }

        //================  inputValidation for subject =================

        if ((details.subject.trim()) && (details.subject.trim().length > 5)) {
            subjectValid.success = 'data is valid'
            isCorrect = true;
        }

        //================  inputValidation for email =================

        if ((details.email) && (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(details.email))) {
            emailValid.success = 'data is valid'
            isCorrect = true;
        }

        //================  inputValidation for message =================

        if ((details.message.trim()) && (details.message.trim().length > 5)) {
            messageValid.success = 'data is valid'
            isCorrect = true;
        }


        setNameSuccess(nameValid);
        setSubjectSuccess(subjectValid);
        setEmailSuccess(emailValid);
        setMessageSuccess(messageValid);


        return isCorrect;
    }


    return {
        nameSuccess,
        subjectSuccess,
        emailSuccess,
        messageSuccess,
        successInputValidation,
    };
}

export default SuccessFormValidation