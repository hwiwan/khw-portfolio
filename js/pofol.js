$(function(){
    $('.side-menu ul li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on')
        let idx = $(this).index()
        let con = $(this).addClass('on').parents('.side-menu').siblings('.contents-wrap').children().eq(idx)
        $(con).addClass('on').siblings().removeClass('on')
    })
})

function open1(){
    window.open("https://ksgdw.netlify.app/");
}

function open2(){
    window.open("https://github.com/oorj/ksgdw");
}
function open3(){
    window.open("https://sony-store.netlify.app");
}

function open4(){
    window.open("https://github.com/oorj/sony-store");
}

function open5(){
    window.open("https://project-josunhotels.netlify.app/");
}
function open6(){
    window.open("https://github.com/oorj/josun");
}
function open7(){
    window.open("https://sptvmfflrtm.netlify.app/");
}
function open8(){
    window.open("https://github.com/oorj/netflix");
}