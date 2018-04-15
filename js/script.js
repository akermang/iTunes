const goSearch = (event) => {
    event.preventDefault();
    let keyWord = $("#key_word").val()
    let type = $('#select1 option:selected').val();
    let limitResult = $("#number_result").val()
    let validFormStatus = validateForm(keyWord, type, limitResult)

    type ? type = "&entity=" + type : null;
    let searchURL = 'https://itunes.apple.com/search?term=' + keyWord + type;

    if (validFormStatus) {
        const renderResults = (results) => {
            let resultsToDisplay = results;
            resultsToDisplay = limitDisplayResult(results, limitResult);
            state.items = resultsToDisplay;
            resultsToDisplay = createList(resultsToDisplay);
            resultsToDisplay = filterItensByPage(resultsToDisplay, 1)
            let table = createTable(resultsToDisplay);
            document.getElementById("results").innerHTML = table;
            $(".wrapper").show();
            $("tr.result-title").show()
        }

        call(searchURL, renderResults)
    }

}



