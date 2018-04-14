const limitDisplayResult = (data, limiter) => {
    let resultArray = data.results;
    if (resultArray.length > limiter) {
        resultArray = data.results.filter((item, i) => {
            return i < limiter;
        })
        console.log(resultArray)
        return resultArray
    }
    return resultArray
}

dateFormat = (date) => {
    return date.slice(0, 10);
}

const createList = (array) => {
    let mapedArry = array.map((item) => {
        let obj = createListItem(item)
        return obj;
    })
    return mapedArry;
}

const createListItem = (item) => {
    let { artistName, kind, trackName, trackPrice, releaseDate, country, artistViewUrl } = item;
    let obj = { artistName, kind, trackName, trackPrice, releaseDate, country, artistViewUrl };
    obj.releaseDate = dateFormat(releaseDate)
    return obj;
}

const createTable = (items) => {
    let html = [];
    html.push('<table width="100%" border="0" cellspacing="0" cellpadding="3"><tbody>');
    html.push('<tr><td><h1>Youer Search Results</h1></td></tr>');
    for (var i = 0; i < items.length; ++i) {
        let item = items[i];
        html.push(`<tr><td class="data-container artistName"><a class="item-link" href="${item.artistViewUrl}" target="_blank"> ${item.artistName} </a></td>`);
        html.push(`<td class="data-container kind"><span>${item.kind}</span></td>`);
        html.push(`<td class="data-container trackName"><span>${item.trackName}</span></td>`);
        html.push(`<td class="data-container trackPrice"><span>${item.trackPrice}</span></td>`);
        html.push(`<td class="data-container releaseDate"><span>${item.releaseDate}</span></td>`);
        html.push(`<td class="data-container country"><span>${item.country}</span></td></tr>`);
    }
    html.push("</tbody></table>");
    let table = html.join("");
    return table
}
