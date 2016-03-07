/// <reference path="jquery-1.9.1.js" />
$.fn.extend({
    fixedTable: function() {
        var tbl = $(this);
        var firstRow = $("tr", tbl).eq(0);
        if (!firstRow.exsist()) {
            firstRow = tbl.find("tr").eq(0);
        }
        console.log(firstRow.html());
        var secondrow = $("tr", tbl).eq(1);
        if (secondrow.exsist()) {
            console.log(tbl.offset().top);
            $(document).scroll(function(e) {
                setToFixe(firstRow, secondrow,tbl);
            });
        }
    }

});
function setToFixe(firstRow, secondrow,tbl) {
    if ($(document).scrollTop() > tbl.offset().top) {
        firstRow.css({
            position: "fixed"
        });
        $("td", secondrow).each(function (index, elemnet) {
            var widthcurrenttd = $(elemnet).width();
            console.log(widthcurrenttd);
            $("td", firstRow).eq(index).width(widthcurrenttd);
        });
    } else {
        firstRow.css({
            position: "static"
        });
    }
}
$.fn.exsist=function() {
    return this.length !== 0;
}
