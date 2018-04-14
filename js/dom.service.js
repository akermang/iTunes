const formMassage = {
    code1: " Key word",
    code2: " Media Type",
    code3: " Limit results"
}
const validateForm = (keyWord, type, limitResult) => {
    console.log(keyWord, type, limitResult)
    
    let validateForm = false;
    let searchButton = $("#goBtn");
    searchButton[0].disabled = true
    let massage = $("#massage-cont");
    let prefix = "Complete:"
    if (!limitResult && type == "Select" && !keyWord) {
        massage.text(prefix + formMassage.code1 + formMassage.code2 + formMassage.code3);
        return validateForm;
    } else if (!keyWord && type == "Select" && limitResult ) {
        massage.text(prefix + formMassage.code1 + formMassage.code2);
        return validateForm;
    }else if (!keyWord && type !== "Select" && !limitResult ) {
        massage.text(prefix + formMassage.code1 + formMassage.code3);
        return validateForm;
    } else if (!keyWord && type !== "Select" && limitResult) {
        massage.text(prefix + formMassage.code1);
        return validateForm;
    } else if (keyWord && type !== "Select" && !limitResult) {
        massage.text(prefix + formMassage.code3);
        return validateForm;
    }else if (keyWord && type == "Select" && limitResult) {
        massage.text(prefix + formMassage.code2);
        return validateForm;
    }else if (keyWord && type == "Select" && !limitResult) {
        massage.text(prefix + formMassage.code2 + formMassage.code3);
        return validateForm;
    }else if (keyWord && type !== "Select" && !limitResult) {
        massage.text(prefix + formMassage.code3);
        return validateForm;
    }else if (keyWord && type !== "Select" && limitResult) {
         validateForm = true;
         massage.text("");
         searchButton[0].disabled = false;
         return validateForm;
    }
    return validateForm;
}

const massageConfirm = () => {
    let searchButton = $("#goBtn");
    searchButton[0].disabled = false;
    $("#massage-cont").text("");

}







