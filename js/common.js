$(function () {
    //tab切换
    var tab = $(".tab");
    var tabBtn = tab.children("a:not(.more)");
    var tabTarget = $(tab.attr("target"));
    tabTarget.children().hide().first().show();
    tabBtn.each(function (i) {
        if (i == 0) $(this).addClass("active");
        $(this).click(function () {
            $(this).addClass("active").silbings().removeClass("active");
            tabTarget.children().eq(i).show().silbings().hide();
            return false;
        });
    });
    //下拉收起
    $(".slideupdown").each(function () {
        var target = $($(this).attr("target"));
        $(".slideupdown").toggle(function () {
            target.stop().slidDown();
        }, function () {
            target.stop().slidDown();
        });
    });
});