const goSearch = (event)=>{
     event.preventDefault();
     let keyWord = $("#key_word").val()
     let type = $('#select1 option:selected').val();
     let limitResult= $("#number_result").val()

     let validFormStatus = validateForm(keyWord, type, limitResult)
     console.log(validFormStatus)

     type? type = "&entity=" + type : null;
     let searchURL= 'https://itunes.apple.com/search?term=' + keyWord + type ;

     if(validFormStatus){
        const renderResults = (results)=>{
            let resultsToDisplay = results;
            resultsToDisplay = limitDisplayResult(results, limitResult);
            resultsToDisplay = createList(resultsToDisplay);
            let table = createTable(resultsToDisplay);
            document.getElementById("results").innerHTML = table;
        }

        call(searchURL, renderResults)
     }

}


