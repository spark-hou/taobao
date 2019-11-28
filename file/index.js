$(document).ready(function () {
    /**
     * 滚动事件
     */
    $('body').scrollspy({target: '#navbar-example'})
    $('.carousel').carousel({
        pause: "hover"
    })
    $('.btn-default.btn').click(function () {
        if ($("#exampleInputPassword1")[0].value == "admin") {
            $(".scrollspy-example").show();
        }

    })

})