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
    let massageObj = $("#massage-cont");
    let massage = "";

    !keyWord ? massage += formMassage.code1 : null;
    type == "Select" ? massage += formMassage.code2 : null;
    !limitResult ? massage += formMassage.code3 : null;

    if (massage) {
        massageWrap.show();
        massageObj.text(massage);
        return validateForm;
    }

    searchButton[0].disabled = false;
    massageObj.text("");
    validateForm = true;
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
    if (url) {
        let ifrm = document.createElement('iframe');
        ifrm.setAttribute('id', 'ifrm');
        $("#player").html(ifrm);
        ifrm.setAttribute('src', url);
        $("div.btn-player").show();
    }
}

const closePlayer = () => {
    $("div.player").remove();
    $("div.btn-player").remove();
}






