const formMassage = {
    code1: " Key word...",
    code2: " Media Type...",
    code3: " Limit results"
}
const validateForm = (keyWord, type, limitResult) => {
    let massageWrap = $("#massage-wrap")
    let validateForm = false;
    let searchButton = $("#goBtn");
    searchButton[0].disabled = true
    let massage = $("#massage-cont");
    if (!limitResult && type == "Select" && !keyWord) {
        massageWrap.show();
        massage.text(formMassage.code1 + formMassage.code2 + formMassage.code3);
        return validateForm;
    } else if (!keyWord && type == "Select" && limitResult) {
        massageWrap.show();
        massage.text(formMassage.code1 + formMassage.code2);
        return validateForm;
    } else if (!keyWord && type !== "Select" && !limitResult) {
        massageWrap.show();
        massage.text(formMassage.code1 + formMassage.code3);
        return validateForm;
    } else if (!keyWord && type !== "Select" && limitResult) {
        massageWrap.show();
        massage.text(formMassage.code1);
        return validateForm;
    } else if (keyWord && type !== "Select" && !limitResult) {
        massageWrap.show();
        massage.text(formMassage.code3);
        return validateForm;
    } else if (keyWord && type == "Select" && limitResult) {
        massageWrap.show();
        massage.text(formMassage.code2);
        return validateForm;
    } else if (keyWord && type == "Select" && !limitResult) {
        massageWrap.show();
        massage.text(formMassage.code2 + formMassage.code3);
        return validateForm;
    } else if (keyWord && type !== "Select" && !limitResult) {
        massageWrap.show();
        massage.text(formMassage.code3);
        return validateForm;
    } else if (keyWord && type !== "Select" && limitResult) {
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
    $("#massage-wrap").hide();
}

const trHoverHandler = (event) => {
    let obj = event.target;
    let url = obj.getAttribute("previewUrl")
    if(url) {
        let ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'ifrm');
        $("#player").html(ifrm);
        ifrm.setAttribute('src', url);
    }
}







