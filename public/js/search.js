const searchBar = document.getElementById('searchBarID');

searchBar.value = "SEARCH";
function func_search() {
    if (searchBar.value != null && searchBar.value == "SEARCH") {
        searchBar.value = "";
    }
}
searchBar.addEventListener('keypress', function (e) {

    if (e.keyCode == 13 && search.value != '') {
        alert("Searching for " + searchBar.value);
    } else if (e.keyCode == 13 && searchBar.value == "") {
        alert("Nothing to search");
    }
});
