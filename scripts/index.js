const arrFilter = document.querySelectorAll('.courses__filter-item');

arrFilter.forEach(filter => {
    console.log(filter)

    if(localStorage.getItem('filter') !== null){
        arrFilter.forEach(filter => filter.classList.remove("filter-item__active"));
        arrFilter.forEach(filter => {
            if(localStorage.getItem('filter') === filter.textContent){
                filter.classList.add("filter-item__active");
            }
        })
    }

    filter.addEventListener("click", function() {
        arrFilter.forEach(filter => filter.classList.remove("filter-item__active"));
        filter.classList.add("filter-item__active");
        localStorage.setItem('filter', filter.textContent)
    });
})
