function goTo5kmNotices (){
    loadNotices ();
    //...
}
function goTo10kmNotices (){
    loadNotices ();
}
function goTo20kmNotices (){
    loadNotices ();
}

function loadNotices (){
    // $('#main').removeClass("centerCarousel");
    $("#content").load("notices/notices.html");
}

function goToHomePage(){
    // $('#main').addClass("centerCarousel");
    $("#content").load("home/home.html");
}