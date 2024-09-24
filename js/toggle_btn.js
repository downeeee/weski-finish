$(function(){

    $(".menu_toggle_btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    })//click++


    $(".search_select_box span").hover(function(){        
        // $(this).next().stop().slideDown();
        $(".search_select_list").stop().slideDown();
    }, function(){
        // $(this).next().stop().slideUp();
        $(".search_select_list").stop().slideUp();
    })//

})//jquery.