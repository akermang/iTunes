$('#pagination-demo').twbsPagination({
    totalPages: 5,
    visiblePages: 10,
    next: 'Next',
    prev: 'Prev',
    onPageClick: function (event, page) {
        state.page = page;
        let itemsByPage = filterItensByPage(state.items, page);
        let tableByPage = createTable(itemsByPage);
        document.getElementById("results").innerHTML = tableByPage;
        //fetch content and render here
        $('#page-content').text('Page ' + page) + ' content here';
    }
});