const regexHTMLTags = /<[^>]*>/g;
const removeHTMLTags = (text: string) => {
  return typeof text === "string" ? text.replace(regexHTMLTags, "") : text;
};
const regexSpaceRemove = /\s/g;
const getStringFromUri = (text: string) => {
  let temp = text.slice(text.lastIndexOf("/") + 1);
  let temp2 = decodeURI(temp.slice(temp.indexOf("-") + 1));
  return temp2.replace(regexSpaceRemove, "-");
};

const isIntegerRegex = /^\d+$/;
const isPhoneRegex = /^\d{10}$/;
const isNumberRegex = /^-?\d+(\.\d+)?$/;
const isPhoneWithCodeRegex = /^\+?\d{10,15}$/;
const isEmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const oneNumberRegex = /^(?=.*\d)/;
const upperCaseRegex = /^(?=.*[A-Z])/;
const lowerCaseRegex = /^(?=.*[a-z])/;
const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
const oneSymbolRegex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/;
const isLinkRegex =
  /(?:https?|ftp):\/\/[\w-]+(\.[\w-]+)+(?:[\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g;
const isUrlRegex =
  /^(?:https?|ftp):\/\/[\w.-]+(?:\.[\w-]+)+[\w._~:/?#[\]@!\$&'()*+,;=]+/gim;

const removeLeadingZeros = (value: number | string = "") => {
  return String(value).replace(/^0+(?=\d)/, "");
};

export {
  isUrlRegex,
  isLinkRegex,
  isPhoneRegex,
  isEmailRegex,
  isNumberRegex,
  removeHTMLTags,
  isIntegerRegex,
  oneNumberRegex,
  upperCaseRegex,
  lowerCaseRegex,
  oneSymbolRegex,
  getStringFromUri,
  removeLeadingZeros,
  strongPasswordRegex,
  isPhoneWithCodeRegex,
};
