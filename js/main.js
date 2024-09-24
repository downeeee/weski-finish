$(function(){
    $(".main_menu >li").hover(function(){
    var n= $(this).index()
    l= n * 200+"px";
    console.log(n)
    console.log(l)

    $(".target").addClass("on").animate({left:l},150)

    },function(){
        $(".target").removeClass("on")
    })

    $(".main_menu>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })
    $(".m_main_menu>li").hover(function(){
        $(this).find(".m_sub").stop().slideDown().sibling().hide()
    },function(){
        $(".m_sub").stop().slideUp()
    })
    
    $(".fade").slick({
        autoplay:true ,arrows:false,dots:true
        })

        $(".p_up").click(function(){
            $(".pop").show();
        })
        $(".btn").click(function(){
            $(".pop").hide();
        })


        $(".hamburger").click(function(){
            $("#ham-1").toggleClass("act")
            $(".m_menu").toggleClass("act")
        })

        
    

        
})