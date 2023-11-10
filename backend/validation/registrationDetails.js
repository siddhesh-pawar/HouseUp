const validator = require('validator');
const passwordValidator = require('password-validator');


const passwordSchema = new passwordValidator();


passwordSchema
  .is().min(8)             
  .is().max(50)           
  .has().uppercase()       
  .has().lowercase()       
  .has().digits();  

  function isNull(field) {
    return !!field;
  }

  function isValidPhone(phone){
    return /^[0-9]{10}$/.test(String(phone));
  }
function isValidEmail(email) {
  return validator.isEmail(email);
}

function isValidPassword(password) {
  return passwordSchema.validate(password);
}



module.exports = {
  isNull,
  isValidEmail,
  isValidPassword,
  isValidPhone
};
