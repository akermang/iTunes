$('#pagination-demo').twbsPagination({
    totalPages: 5,
    visiblePages: 2,
    next: 'Next',
    prev: 'Prev',
    onPageClick: function (event, page) {
        state.page = page;
        let itemsByPage = filterItensByPage(state.items, page);
        let tableByPage = createTable(itemsByPage);

        document.getElementById("results").innerHTML = tableByPage;
        itemsByPage.length > 0? $("tr.result-title").show(): null;
        $('#page-content').text('Page ' + page) + ' content here';
    }
});