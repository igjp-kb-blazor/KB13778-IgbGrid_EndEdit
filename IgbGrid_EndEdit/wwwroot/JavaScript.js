document.addEventListener("mousedown", (event) => {
    if (event.target.closest('igc-grid') == null)
    {
        let grid = document.getElementById("myGrid1");
        grid.endEdit(true);
    }
});

