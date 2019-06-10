const regexOfName = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

export default name => regexOfName.test(name);
