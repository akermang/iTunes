const call = (url, callback )=>fetch(url, callback)
         .then((response) => {
             if (response.ok) {
             return response;
             }
             throw new Error('Network response was not ok.');
         })
         .then((resp) => resp.json())
         .then((data) => {
            callback(data);
             return data;
         })
         .catch(function (error) {
             console.log(JSON.stringify("fetch error: " + error));
         });