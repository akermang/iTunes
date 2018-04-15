let state = {
        pageNo: 1,
        items: []
}

const limitDisplayResult = (data, limiter) => {
    let resultArray = data.results;
    if (resultArray.length > limiter) {
        resultArray = data.results.filter((item, i) => {
            return i < limiter;
        })
        return resultArray
    }
    return resultArray
}

const filterItensByPage = (array, page) => {
    let n = page * 10;
    let items = array.filter((item, i) => {
        return i < n && i >= n - 10;
    })
    return items;
}

const dateFormat = (date) => {
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
    let { artistName, kind, trackName, trackPrice, releaseDate, country, artistViewUrl, previewUrl } = item;
    let obj = { artistName, kind, trackName, trackPrice, releaseDate, country, artistViewUrl, previewUrl };
    obj.releaseDate = dateFormat(releaseDate)
    return obj;
}

const createTable = (items) => {
    let html = [];
    html.push('<table class="result-table"><tbody>');
    html.push('<tr class="result-title"><td><h1>Youer Search Results</h1></td></tr>');
    for (var i = 0; i < items.length; ++i) {
        let item = items[i];
        html.push(`<tr class="tr-data" id="tr${i}" previewUrl="${item.previewUrl}"
         onmouseover="trHoverHandler(event)"><td class="data-container artistName">
         <a class="item-link" href="${item.artistViewUrl}" target="_blank"> ${item.artistName} </a></td>`);
        html.push(`<td class="data-container kind"><span>${item.kind}</span></td>`);
        html.push(`<td class="data-container trackName"><span>${item.trackName}</span></td>`);
        html.push(`<td class="data-container trackPrice"><span>$${item.trackPrice}</span></td>`);
        html.push(`<td class="data-container releaseDate"><span>${item.releaseDate}</span></td>`);
        html.push(`<td class="data-container country"><span>${item.country}</span></td></tr>`);
    }
    html.push("</tbody></table>");
    let table = html.join("");
    return table
}

