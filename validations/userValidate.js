/* eslint-disable no-useless-escape */
const regexOfEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
const regexOfUsername = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\.?\d*$]{6,}.*)$/;

export const validateEmail = email => regexOfEmail.test(email);

export const validateUsername = username => regexOfUsername.test(username);

export const validatePassword = (pwd1, pwd2) => pwd1 === pwd2;
