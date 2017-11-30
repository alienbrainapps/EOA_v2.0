var ValidationSucessVal=true;




// validation for log in 
function Validatelogin(strData)
{
    var Data = JSON.parse(strData)

    if (!IsValidString(Data.username))
    {
        return "ErrEnterusername";
    }

    if (!IsValidString(Data.password))
    {
        return "ErrEnterPassword";
    }

    return ValidationSucessVal;
}

//validate sign up

function Validatesignup(strData)
{
    
    var Data = JSON.parse(strData)

    if (!IsValidString(Data.name))
    {
        $$("#pname").show();
        return "ErrEnterfirstname";
        
    }else {   $$("#pname").hide();}


    if (!IsValidEmailAddress(Data.email))
    { $$("#pemail").show();
        return "ErrEnterEmail";
           
    }else{    $$("#pemail").hide();}
    
   if (!IsValidString(Data.password) || (Data.password.length < 6) || (Data.password.length > 30))
    {   $$("#ppass").show();
        return "ErrEnterPassword";
         
    }else { $$("#ppass").hide();}

 
    return ValidationSucessVal;
}





// main functionaltyise for validation
//validate string
function IsValidString(stringValue)
{
    if (stringValue == undefined || stringValue == null || stringValue.trim() == "")
    {
        return false;
    }
    return true;
}

//validate number
function IsValidNumber(intValue)
{
    if (intValue == undefined || isNaN(intValue))
    {
        return false;
    }
    return true;
}

function IsValidID(idValue)
{
    if (!IsValidNumber(idValue) || idValue < 0)
    {
        return false;
    }
    return true;
}

//validate phone  number 


function IsValidPhoneNumber(phoneNumber)
{
    return ((/^\d{8,14}$/.test(phoneNumber)) && phoneNumber.indexOf("00") !== 0);
}
// validate phonr number
function IsValidEmailAddress(emailAddres)
{
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(emailAddres);
}

 //  Data.MobileNumber = parseArabic(Data.phonenumber).toString();
//    if (!IsValidPhoneNumber(Data.PhoneNumber) || Data.PhoneNumber.length > 14 || Data.phonenumber.length < 8)
//    {
//        return "WrongPhoneNumber";
//    }

//if(!IsValidPhoneNumber(Data.PhoneNumber)){
//    return "Err";
//}
