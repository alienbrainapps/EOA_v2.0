
localStorage.setItem('lang', 1);
var localitems = [];

vendoreorder = [];
vendorereturen = [];
vendoreitems = [];
guesswhat = '';
guessqout = '';


mybundle = [];
var arrayofoffers = [];
var Vendorespreated = [];
var arryofbundells = [];
var len = 0;
var stataccc = '';
var bundellsname = [];
var curencyTemp = "";
var curency = curencyTemp;
var sentordersstring = "";
var bundells_value = 0.0;
var regstred = true;
var popover = '';
var popovertit = '';
var staticurls = [];
var ordertosvae = {};
var MainUrl = '';
var loading = '';
var uom = 1;
var promotionnettotal = 0.0;
var promotiondescount = 0.0;
var promotiontax = 0.0;
var promotiongross = 0.0;
var OrderList = [];
var NetTottal = 0;
var bundle = [];
var SentOrders = [];

var text = '';
var calcarr = [];
var freeitems = [];
var proorder = {};
var promoteditems = [];
var FOCitems = [];
var FOC = 0;
var FOCAmount = 0.0;
reorderarray = [];
var quntityids = [];
var FRQUN = 0;
var arrayfree = [];
var ReturnedItems = [];
var itemprice = 0.0;
var freequntity = 0;
var FRQArray = [];
var ArrayofFocs = [];
var FOCDY = '';
var ListofIds = "";
var statusstring = "";
var testfocs = [];
var TFRQ = []
var FOCstring = '';
var FRQstring = '';
var savedarray = []
var bundqun = [];
var bundvalue = [];
var counter = 0;
var Histroydata = '';
var customerids = [];
if (localStorage.getItem('lang') == 1) {
    loading = 'Loading';
} else { loading = 'تحميل'; }
/////////////////////////////////////
//if (isAndroid)
//{
//    $$('head').append(
//        '<link rel="stylesheet" href="css/framework7.material.min.css">' +
//       // '<link rel="stylesheet" href="css/framework7.material.rtl.min.css">' +
//        '<link rel="stylesheet" href="css/framework7.material.colors.min.css">' +
//        '<link rel="stylesheet" href="css/my-app.css">'
//    );
//}
//else
//{
//    $$('head').append(
//        '<link rel="stylesheet" href="css/framework7.ios.min.css">' +
//     //   '<link rel="stylesheet" href="css/framework7.ios.rtl.min.css">' +
//       // '<link rel="stylesheet" href="css/framework7.ios.rtl.min.css">' +
//        '<link rel="stylesheet" href="css/framework7.ios.colors.min.css">' +
//        '<link rel="stylesheet" href="css/my-app.css">'
//    );
//}

if (isAndroid) {
    // Change class
    $$('.page.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    // And move Navbar into Page
    $$('.page .navbar').prependTo('.view .page');
}
//if (isAndroid)
//{
//    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
//    $$('.view .navbar').prependTo('.view .page');
//}
//
//if (isAndroid)
//{
//    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
//    $$('.view .navbar').prependTo('.view .page');
//}

var $$ = Dom7;

var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;
var myApp = new Framework7({
    modalTitle: 'My App',
    // Enable Material theme for Android device only
    material: isAndroid ? true : false,
    // Enable Template7 pages
    template7Pages: true,

    domCache: false,

    tapHold: true,
    // allows to close (but not open) panels with swipes
    swipePanelOnlyClose: true,
    // Default title for modals (Alert, Confirm, Prompt)
    //  modalTitle: 'EOA',
    swipeBackPage: false

});
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
});

Template7.global = {
    android: isAndroid,
    ios: isIos,
    isArabic: false,
    isEnglish: true
};

myApp.onPageInit('index', function (page) { });


myApp.onPageInit('home', function (page) {
    $$("#homeicon").removeClass('homedefult');
    $$("#searchicon").addClass('searchinactive');
    $$("#searchicon").removeClass('searchactive');
    $$("#reordericon").addClass('reorderinactive');
    $$("#reordericon").removeClass('reorderactive');
    $$("#ordericon").addClass('myorderinactive');
    $$("#ordericon").removeClass('myorderactive');


    if (isIos) {
        $$("#tab1").on('click', function () {

            AppendOffers();
            $$(".bundle").show();
            $$(".item").hide();
            $$(".vendore").hide();

            $$("#tab1").addClass('active');
            $$("#tab2").removeClass('active');
            $$("#tab3").removeClass('active');
        });
        $$("#tab3").on('click', function () {

            $$(".item").show();
            $$(".bundle").hide();
            $$(".vendore").hide();
            $$("#tab3").addClass('active');
            $$("#tab2").removeClass('active');
            $$("#tab1").removeClass('active');

        });
        $$("#tab2").on('click', function () {


            $$(".vendore").show();
            $$(".bundle").hide();
            $$(".item").hide();
            $$("#tab2").addClass('active');
            $$("#tab3").removeClass('active');
            $$("#tab1").removeClass('active');
        });

    }

    if (isAndroid) {
        $$("#t1").on('click', function () {

            //AppendOffers();
            $$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
            if (localStorage.getItem('lang') != 1) {
                $$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
            }

            $$(".bundle").show();
            $$(".item").hide();
            $$(".vendore").hide();

            $$("#t1").addClass('active');
            $$("#t2").removeClass('active');
            $$("#t3").removeClass('active');
        });
        $$("#t3").on('click', function () {

            $$(".item").show();
            $$(".bundle").hide();
            $$(".vendore").hide();
            $$("#t3").addClass('active');
            $$("#t2").removeClass('active');
            $$("#t1").removeClass('active');
            $$(".tablinkhighlight").css('transform', 'translate3d(200%, 0px, 0px)');

            if (localStorage.getItem('lang') != 1) {
                $$(".tablinkhighlight").css('transform', 'translate3d(200%, 0px, 0px)');
            }


        });
        $$("#t2").on('click', function () {


            $$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
            if (localStorage.getItem('lang') != 1) {
                $$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
            }

            $$(".vendore").show();
            $$(".bundle").hide();
            $$(".item").hide();
            $$("#t2").addClass('active');
            $$("#t3").removeClass('active');
            $$("#t1").removeClass('active');
        });

    }


    getItemByQuery();
    getVendorByQuery();
    getOffersByQuery();

});

$$(document).on("popover:closed", ".popover", function () {
});
$$(document).on('pageInit', function (e) {

    $$("#scan").on('click', function () {

        scan();
    });

    if (e.detail.page.url == "Returnedi.html") {
        $$("#org").html('');
        var string = '';
        var lang = localStorage.getItem("lang");
        if (lang == 1) { string = "Send Return Order" } else { string = "ارسال طلب الارجاع" }
        $$("#org").append('<a href="Returnitems.html" id="FinsihReturn"  style="display:no1ne; width: 100%;marg1in-top: -8%; margin-left: 0%;margin-bot1tom:20%;" class="button center active">' + string + '</a>');
    } else if (e.detail.page.url == 'RET.html' || e.detail.page.url == "itemdetret.html") { $$("#org").html(''); } else {
        var lag = {
            "Home": "",
            "Scan": "",
            "MyOrder": "",
            "Orderistory": "",
            "Hint": ""
        }

        if (localStorage.getItem("lang") == 1) {
            lag.Home = "Home";
            lag.Scan = "Scan";
            lag.MyOrder = "My Order";
            lag.Orderistory = "Order History";
            lag.Hint = "Hint";
        } else {
            lag.Home = "الرئيسية";
            lag.Scan = "المسح للبضائع";
            lag.MyOrder = "الطلب";
            lag.Orderistory = "تاريخ الطلبات";
            lag.Hint = "تنبيه";
        }
        $$("#org").html('');
        //<a  id="search" onclick="we()"  href="#" class="link open-about "><i id="searchicon" class="icon searchinactive"></i><span >'+lag.Hint+'</span></a>
        //pagecounter();
        $$("#org").append(`<a id="home" href="home.html" class="link">
<i id="homeicon" class="icon-home-active"></i><span class="tab-link">` + lag.Home + `</span></a>
<a id="reorder" href="History.html" class="link">
<i id="reordericon" class="icon-history"></i><span >`+ lag.Orderistory + `</span></a> 
<a id="Orders22" href="catg.html" class="link"><i id="ordericon" class="icon-my_order"></i><span id="lengthon" class="badge">5</span><span >` + lag.MyOrder + `</span></a>
<a id="scan" onclick="scan();" href="#" class="link"><i class="icon-scan"></i><span >` + lag.Scan + `</span></a>`);
        pagecounter();

        //                    if(!OrderList.length && len==0){$$(".badge").hide();}else{
        //                        $$(".badge").show();
        //                           $$(".badge").html(OrderList.length+len);    }  


    }

    if (e.detail.page.url == "RE1T.html" || e.detail.page.url == "OrderStatus.html") {

        $$(".back").on('click', function () {
            mainView.router.loadPage('home.html');
        });


    }


    if (e.detail.page.url == "home.html") {
        $$("#reordericon").removeClass('icon-history-active').addClass('icon-history');
        $$("#ordericon").removeClass('icon-my_order_active').addClass('icon-my_order');
        $$("#homeicon").removeClass('icon-home').addClass('icon-home-active');
        $$("#searchicon").addClass('searchinactive');
        $$("#searchicon").removeClass('searchactive');

    }
    else if (e.detail.page.url == "Qutaion.html") {

        $$("#homeicon").removeClass('homaeactive');
        $$("#homeicon").addClass('homedefult');
        $$("#searchicon").addClass('searchinactive');
        $$("#searchicon").removeClass('searchactive');
        $$("#reordericon").addClass('reorderinactive');
        $$("#reordericon").removeClass('reorderactive');
        $$("#ordericon").addClass('myorderactive');
        $$("#ordericon").removeClass('myorderinactive');



    } else if (e.detail.page.url == "catg.html") {
        $$("#homeicon").removeClass('icon-home-active').addClass('icon-home');
        $$("#reordericon").removeClass('icon-history-active').addClass('icon-history');
        $$("#ordericon").removeClass('icon-my_order').addClass('icon-my_order_active');
        $$("#searchicon").addClass('searchinactive');
        $$("#searchicon").removeClass('searchactive');
    }
    if (e.detail.page.url == "promo.html") {

        $$("#home").on('click', function () {
            mainView.router.reloadPreviousPage({ url: 'home.html', force: true });
            mainView.router.back({
                url: 'home.html'
            });

        });
    }

    if (e.detail.page.url == "History.html") {
        $$("#ordericon").removeClass('icon-my_order_active').addClass('icon-my_order');
        $$("#homeicon").removeClass('icon-home-active').addClass('icon-home');
        $$("#reordericon").removeClass('icon-history').addClass('icon-history-active');
        $$("#searchicon").addClass('searchinactive');
        $$("#searchicon").removeClass('searchactive');


    }

});

////////////////////////////////////////
if (localStorage.getItem('username') == null) { } else {
    str = "";
    str = localStorage.getItem('username').replace(/^"(.*)"$/, '$1');
    $$("#IPusn").val(str);
}

mainView.hideNavbar();

mainView.hideToolbar();


$$("#profile").on('click', function () {

    mainView.router.loadPage({ url: 'myprofile.html', force: true });

});

$$("link").on('click', function () {

    var clickedLink = this;
    var popoverHTML = '<div class="popover">' +
        '<div class="popover-inner">' +
        '<div class="content-block">' +
        '<p>About Popover created dynamically.</p>' +
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>' +
        '</div>' +
        '</div>' +
        '</div>'
    myApp.popover(popoverHTML, clickedLink);


});

$$('#Orders22').on('click', function () {
    debugger;
    mainView.router.loadPage({ url: 'Qutaion.html', force: true });

});

//@prog 
$$("#ExportBtn").on("click", function () {
    window.plugins.sqlDB.copyDbToStorage(
        'Data.db',
        0,
        '/storage/emulated/0/Test/', true, function () {

        }, function (error) {
            console.log(JSON.stringify(error));
        }

    );
});




$$("#fgpass").on('click', function () {
    var string = '';
    if (localStorage.getItem("lang") == 1) {
        string = 'Please insert the email that you want to send the verfication code to !';
    } else {
        string = 'الرجاء ادخال البريد الاكتروني لتغيير كلمة السر!'
    }
    myApp.prompt(string, 'EOA',
        function (value) {
            var jass = {
                "email": value
            }
            $$.post("http://eoamiddlewareservice.azurewebsites.net/api/frg",
                jass,
                function (data, status) {
                    mainView.router.loadPage({ url: "forget.html", force: true });
                });
        },
        function (value) {

        }
    );


});

$$("#trans").on('click', function () {
    mainView.router.loadPage({ url: "Stament.html", force: true });
});

$$("#returnitem").on('click', function () {
    mainView.router.loadPage({ url: "Returnedi.html", force: true })
})

$$("#setting").on('click', function () {

    mainView.router.loadPage({ url: 'setting.html', force: true });

});

$$("#search").on('click', function () {
    //
    we();
});

$$("#reorder").on('click', function () {

    mainView.router.loadPage('History.html');

});

$$("#logout").on('click', function () {
    customerids = [];
    myApp.closePanel();
    mainView.hideNavbar();
    mainView.hideToolbar();
    localStorage.clear();
    localStorage.setItem("lang", 1);
    //mainView.router.back({url: "Logout.html",force: true});
    window.location = "index.html";
    return false;
});



$$("#reorder").on('click', function () {
    //  mainView.router.loadPage('Orderlist.html');
});

$$("#scan").on('click', function () {

    scan();
});

$$("#home").on('click', function () {

    //  mainView.router.loadPage('about.html');
    scan();
});

$$("#order").click(function () {
    mainView.router.loadPage({ url: 'orders.html', force: true });
});

$$("#sign").click(function () {
    mainView.router.loadPage('profile.html');
});

$$("#ordrelist").click(function () {
    mainView.router.loadPage({ url: 'Orderlist.html', force: true });
});

$$("#prof").click(function () {
    mainView.router.loadPage({ url: 'profile.html', force: true });
});
//log in ////////////////////////////////////
//fku its Login function
$$("#lgn1").click(function () {
    var ValidationSucessVal = true;
    var username = $$('#IPusn').val().trim();
    var password = $$('#IPpass').val().trim();
    ServerLogin(username.toLowerCase(), password);
});

$$("#catg").click(function () { mainView.router.loadPage({ url: 'catg.html', force: true }); });

function Postlogin(postData) {

    //      var a=  {
    //        "_id": "5961dd0628ba930e13992aae",
    //        "password": "newpass",
    //        "email": "email22",
    //        "retailer": "retailer",
    //        "landline": 5666,
    //        "mobilenumber": 100,
    //        "name": "name",
    //        "commercilanumber": 4000,
    //        "PhoneNumber": 500,
    //        "long": "long",
    //        "lat": "lat",
    //        "__v": 3,
    //        "regstrationcode": [
    //            [
    //                [
    //                    1,
    //                    89,
    //                    1
    //                ]
    //            ],
    //            [
    //                [
    //                    2,
    //                    89,
    //                    1
    //                ]
    //            ],
    //            [
    //                [
    //                   3,
    //                    89,
    //                    1
    //                ]
    //            ]
    //        ]
    //    }


    console.log(customerids);



    myApp.showPreloader(loading);

    var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/login";
    $$.ajax(
        {

            method: "post",
            url: urlAjax,
            contentType: 'application/json',
            data: postData,
            dataType: "json",
            success: function (data, status, xhr) {

                myApp.hidePreloader(loading);
                console.log(postData);

                if (data == null) {
                    var string = '';
                    var lang = localStorage.getItem('lang');
                    if (lang == 1) { string = 'Invalid username or password'; } else { string = 'خطاء في اسم المستخدم او كلمة السر '; }
                    myApp.alert(string, 'EOA');
                    return;
                }
                else {

                    localStorage.setItem('username', JSON.stringify(data.email))
                    localStorage.setItem('profile', JSON.stringify(data));
                    console.log(data);
                    localStorage.setItem('userid', data._id);
                    console.log(localStorage.getItem('userid'));

                    if (!data.regstrationcode.length) {

                        localStorage.setItem("storeditem", '');

                        localStorage.setItem("Offers33", '');
                        localStorage.setItem("Transction", '');

                        $$('#itemlist').append('');
                        $$("#bundel").append('');
                        // mainView.router.loadPage({url:'about.html',force:true});
                        $$('.statusbar-overlay').css('background-color', '#00695c');
                        $$('.statusbar-overlay').css('color', '#fff');


                        $$(".toolbar").show();
                        $$(".navbar").show();

                        barcodescan();

                    } else {

                        //                    data.regstrationcode=[
                        //                        [
                        //                [
                        //                    1,
                        //                    11275,
                        //                    1
                        //                ]
                        //            ],
                        //            [
                        //                [
                        //                    2,
                        //                    10,
                        //                    1
                        //                ]
                        //            ]
                        //                    ]
                        var array = data.regstrationcode;

                        for (var d = 0; d < array.length; d++) {
                            var c = array[d][0][0];
                            var customerid = array[d][0][1];
                            var outletid = array[d][0][2];
                            customerids["A" + c] = [];
                            customerids["A" + c].push(customerid);
                            customerids["A" + c].push(outletid);
                        }
                        //                console.log(arrr1);
                        //                var arrr01=arrr1[0];
                        //                    GetVendores();
                        //                var arrr2=arrr1[1];
                        //                    
                        //                console.log(arrr2);
                        //                var arrr3=arrr1[2];
                        //                console.log(arrr3);
                        //                
                        //                localStorage.setItem('CU_id'+data._id,JSON.stringify(arrr2));
                        //                localStorage.setItem('OUT_id'+data._id,JSON.stringify(arrr3));
                        //                if(localStorage.getItem("CU_id"+data._id)==null && typeof(localStorage.getItem("CU_id"+data._id)) != "undefined"){}else{
                        //                var i1=localStorage.getItem("CU_id"+data._id);
                        //                var i2=localStorage.getItem("OUT_id"+data._id);
                        //                i1=parseInt(i1);
                        //                i2=parseInt(i2);
                        statusstring = data.Ordershistory;
                        if (data.Ordershistory == "undefined") {
                            statusstring = '';
                        }

                        $$('.statusbar-overlay').css('background-color', '#00695c');
                        $$('.statusbar-overlay').css('color', '#fff');
                        $$(".toolbar").show();
                        $$(".navbar").show();

                        GetVendores();



                    }
                }
            }

            ,
            error: function (data, xhr) {


                myApp.hidePreloader("Loading");
                var string = '';
                var lang = localStorage.getItem('lang');

            }
        });
}

$$("#barcodereg").on('click', function () {

    barcodescan();

});

///// end 

//////////////////Login



// Callbacks to run specific code for specific pages, for example for About page:


function calclutepromotions(arr, v) {

    if (JSON.stringify(arr) == JSON.stringify(savedarray)) { }
    else {
        for (var t = 0; t < proorder.ItemPacks.length; t++) { proorder.ItemPacks[t].PromotedDiscount = 0; }
        proorder.NetTotal = promotionnettotal;
        proorder.GrossTotal = promotiongross;
        proorder.Tax = promotiontax;
        proorder.Discount = promotiondescount;
        proorder.PromotedDiscount = 0;

        var qut = localStorage.getItem('Qut');
        var qutJ = JSON.parse(qut);
        var itempack = qutJ.ItemPacks;
        for (var i = 0; i < arr.length; i++) {

            var Object = localStorage.getItem(arr[i]);
            var jsonpromotion = JSON.parse(Object);
            qout(jsonpromotion.DetailTypeID, jsonpromotion.DetailTypeID, jsonpromotion.DetailTypeID, jsonpromotion.DiscountAmountForEachItem, jsonpromotion.DiscountPercentageForEachItem, jsonpromotion.FOCValue, jsonpromotion.ItemID, jsonpromotion.PackID, jsonpromotion.PackIDs, jsonpromotion.Qty, jsonpromotion.RepetCount, jsonpromotion.TotalDiscountAmount, itempack, arr[i], v);

        }
    }
    savedarray = arr;
}

$$(document).on('click', '#focitems .click', function () {
    var id = this.id;
    var dyarr = $$(this).data('dy');
    var price = $$(this).data("pr");
    var qunt = $$(this).data("req");
    var pricong = qunt * price;



    var index = $$(this).index();
    var elem = $$(this).parent().parent();;
    //   console.log(IOAlist);
    var lang = localStorage.getItem('lang');
    var string = '';
    var lonagtext = '';
    if (lang == 1) { string = 'Are you sure you want to delet the item?' } else {
        string = 'هل تريد حذف هذا الصنف؟'
    }
    myApp.confirm(string, function () {

        //$$(this).parent().parent().remove();
        //  elem.remove();
        var packid = $$("#" + id).data('packid');
        $$("#AA" + packid).remove();
        //$$(this).remove();
        $$("input" + id).attr('href', 'index');
        $$("input" + id).addClass('data-url');
        var packid = $$("#" + id).data('packid');
        // $$('#'+packid).remove();
        testfocs["FOZ" + dyarr].array.splice(index, 1);
        testfocs["FOZ" + dyarr].foccurrent = arrprice(testfocs["FOZ" + dyarr].array);


        $("#AA").html(testfocs["FOZ" + dyarr].foccurrent.toFixed(2));
        $$("#AA1").html(testfocs["FOZ" + dyarr].foccurrent.toFixed(2));
        $$("#BB").html(testfocs["FOZ" + dyarr].focval.toFixed(2));
        $$("#BB1").html(testfocs["FOZ" + dyarr].focval.toFixed(2));
        /////////////////////////////////////////////////////
        $$("#after").html(testfocs["FOZ" + dyarr].foccurrent + '/' + testfocs["FOZ" + dyarr].focval);
        $$("#after2").html(testfocs["FOZ" + dyarr].foccurrent + '/' + testfocs["FOZ" + dyarr].focval);
        /////////////////////////////////////////////////////
        $$("#after").html('You Got' + testfocs["FOZ" + dyarr].foccurrent + '/' + testfocs["FOZ" + dyarr].focval + 'JOD Items');
        $$("#after2").html('You Got' + testfocs["FOZ" + dyarr].foccurrent + '/' + testfocs["FOZ" + dyarr].focval + 'JOD Items');





        var string = '';
        var lang = localStorage.getItem('lang');
        if (lang == 1) { string = 'Item Removed'; } else { string = 'حذف الصنف'; }

        myApp.alert(string, 'EOA');
    });
});

$$(document).on('click', '#freeitems .click', function () {
    var id = this.id;
    var dyarr = $$(this).data('dy');
    var pricong = $$(this).data("pr");



    var index = $$(this).index();
    var elem = $$(this).parent().parent();;
    //   console.log(IOAlist);
    var lang = localStorage.getItem('lang');
    var string = '';
    var lonagtext = '';
    if (lang == 1) { string = 'Are you sure you want to delet the item?' } else {
        string = 'هل تريد حذف هذا الصنف؟'
    }
    myApp.confirm(string, function () {

        //$$(this).parent().parent().remove();
        //  elem.remove();
        var packid = $$("#" + id).data('packid');
        $$("#AA" + packid).remove();
        //$$(this).remove();
        $$("input" + id).attr('href', 'index');
        $$("input" + id).addClass('data-url');
        var packid = $$("#" + id).data('packid');
        // $$('#'+packid).remove();
        TFRQ["FRQ" + dyarr].array.splice(index, 1);
        TFRQ["FRQ" + dyarr].FRQcurrent = TFRQ["FRQ" + dyarr].FRQcurrent - pricong;


        $("#AAW").html(TFRQ["FRQ" + dyarr].FRQcurrent.toFixed(2));
        $$("#AA1W").html(TFRQ["FRQ" + dyarr].FRQcurrent.toFixed(2));
        $$("#BBW").html(TFRQ["FRQ" + dyarr].FRQ.toFixed(2));
        $$("#BB1W").html(TFRQ["FRQ" + dyarr].FRQ.toFixed(2));
        /////////////////////////////////////////////////////
        $$("#afterW").html(TFRQ["FRQ" + dyarr].FRQcurrent + '/' + TFRQ["FRQ" + dyarr].FRQ);
        $$("#after2W").html(TFRQ["FRQ" + dyarr].FRQcurrent + '/' + TFRQ["FRQ" + dyarr].FRQ);
        /////////////////////////////////////////////////////
        $$("#afterW").html('You Got' + TFRQ["FRQ" + dyarr].FRQcurrent + '/' + TFRQ["FRQ" + dyarr].FRQ + 'JOD Items');
        $$("#after2W").html('You Got' + TFRQ["FRQ" + dyarr].FRQcurrent + '/' + TFRQ["FRQ" + dyarr].FRQ + 'JOD Items');





        var string = '';
        var lang = localStorage.getItem('lang');
        if (lang == 1) { string = 'Item Removed'; } else { string = 'حذف الصنف'; }

        myApp.alert(string, 'EOA');
    });
});



///////////////////////////////////////////////////////////////////
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}

var order32 = {
    "OrderID": null,
    "CustomerID": 1,
    "OutletID": 1,
    "EmployeeID": -1,
    "DivisionID": -1,
    "OrderDate": "0001-01-01T00:00:00",
    "ItemPacks": [
        {
            "ItemID": 1,
            "ItemDescription": "Ghadeer 1.5 L",
            "ItemCode": "",
            "ItemBarcode": "",
            "PackID": 11,
            "UOM": "Shrink 6 Bottles",
            "Price": 1.509,
            "Tax": 16,
            "Discount": 3,
            "PiecesInPack": 1,
            "IsDefaultPack": true,
            "DiscountTypeID": 1,
            "ItemCategoryID": 2,
            "DivisionID": 1,
            "BrandID": -1,
            "ItemCategory": null,
            "Division": null,
            "Brand": null,
            "PackTypeID": 2,
            "PromotedDiscount": 0,
            "CalculatedDiscount": 0.04527,
            "RequiredQuanity": 1
        },
        {
            "ItemID": 9,
            "ItemDescription": "Ghadeer 0.500L",
            "ItemCode": "",
            "ItemBarcode": "",
            "PackID": 26,
            "UOM": "Shrink 24 Bottles",
            "Price": 3.018,
            "Tax": 16,
            "Discount": 3,
            "PiecesInPack": 1,
            "IsDefaultPack": true,
            "DiscountTypeID": 1,
            "ItemCategoryID": 2,
            "DivisionID": 1,
            "BrandID": -1,
            "ItemCategory": null,
            "Division": null,
            "Brand": null,
            "PackTypeID": 3,
            "PromotedDiscount": 0,
            "CalculatedDiscount": 0.09054,
            "RequiredQuanity": 1
        }
    ],
    "OrdersStatus": 1,
    "CreationSource": 3,
    "OrderTypeID": 1,
    "NetTotal": 5.0937804,
    "GrossTotal": 4.527,
    "Tax": 0.7025904,
    "Discount": 0.13581,
    "PromotedDiscount": 0,
    "CalculatedPromotions": [
        {
            "PromotionID": 219,
            "Description": "discount %",
            "IsTaken": true,
            "CalculatedOptions": {
                "219": [
                    {
                        "CalculatedPromotionDetails": {
                            "2": [
                                {
                                    "ItemID": 0,
                                    "IsBenefitTaken": true,
                                    "PackID": 0,
                                    "DetailTypeID": 12,
                                    "DetailID": 2,
                                    "Description": "discount percentage over all items equals (10) %",
                                    "Qty": 0,
                                    "TotalDiscountAmount": 0.439119,
                                    "PackIDs": null,
                                    "FOCValue": 0,
                                    "RepetCount": 0,
                                    "DiscountAmountForEachItem": 0,
                                    "DiscountPercentageForEachItem": 10,
                                    "IsBenefitTaken": false,
                                    "PackGroupID": -1,
                                    "PromotionID": 219,
                                    "OptionID": 2,
                                    "ExpiryDate": "0001-01-01T00:00:00",
                                    "BatchNo": null,

                                }
                            ]
                        },
                        "OptionID": 2,
                        "PromotionID": 219
                    }
                ]
            },
            "IsTaken": false
        }
    ],
    "CalculateTaxBeforeDiscounts": false,
    "ApplyAmountDiscountPerQuantity": false,
    "PromotedItems": null,
    "TempOrderID": "shddgwa"
}

order321 = JSON.stringify(order32);

localStorage.setItem("Qut", order321);

var itemAR = [
    {
        "ItemID": 1,
        "ItemDescription": "Ghadeer 1.5 L",
        "ItemCode": "FG300001",
        "ItemBarcode": "FG300001",
        "PackID": 11,
        "UOM": "Shrink 6 Bottles",
        "Price": 1.509,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },

    {
        "ItemID": 2,
        "ItemDescription": "Ghadeer 2 L",
        "ItemCode": "FG300005",
        "ItemBarcode": null,
        "PackID": 13,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    }

]

var All_Items = [
    {
        "ItemID": 1,
        "ItemDescription": "Ghadeer 1.5 L",
        "ItemCode": "FG300001",
        "ItemBarcode": "FG300001",
        "PackID": 11,
        "UOM": "Shrink 6 Bottles",
        "Price": 1.509,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 1,
        "ItemDescription": "Ghadeer 1.5 L",
        "ItemCode": "FG300001",
        "ItemBarcode": "New",
        "PackID": 52,
        "UOM": "Shrink 6 Bottles",
        "Price": 5,
        "Tax": 1,
        "Discount": 3,
        "PiecesInPack": 10,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 2,
        "ItemDescription": "Ghadeer 2 L",
        "ItemCode": "FG300005",
        "ItemBarcode": null,
        "PackID": 13,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 3,
        "ItemDescription": "Sohat 1.5 L",
        "ItemCode": "FG300014",
        "ItemBarcode": null,
        "PackID": 17,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 4,
        "ItemDescription": "Sohat 0.5 L",
        "ItemCode": "FG300015",
        "ItemBarcode": null,
        "PackID": 18,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 5,
        "ItemDescription": "Sohat 0.33 L",
        "ItemCode": "FG300016",
        "ItemBarcode": null,
        "PackID": 19,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 6,
        "ItemDescription": "Sohat 0.5 L SportCap",
        "ItemCode": "FG300017",
        "ItemBarcode": null,
        "PackID": 20,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 7,
        "ItemDescription": "Sohat 1.5 L Carton/12",
        "ItemCode": "FG300020",
        "ItemBarcode": null,
        "PackID": 22,
        "UOM": "Carton 12 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 5,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 8,
        "ItemDescription": "Sohat Spry (Automizer)",
        "ItemCode": "FG300021",
        "ItemBarcode": null,
        "PackID": 23,
        "UOM": "Carton 12 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 5,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 9,
        "ItemDescription": "Ghadeer 0.500L",
        "ItemCode": "FG300024",
        "ItemBarcode": null,
        "PackID": 26,
        "UOM": "Shrink 24 Bottles",
        "Price": 3.018,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 11,
        "ItemDescription": "Ghadeer 330 ml",
        "ItemCode": "FG300002",
        "ItemBarcode": null,
        "PackID": 12,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 12,
        "ItemDescription": "Nestle 1.5 L",
        "ItemCode": "FG300008",
        "ItemBarcode": null,
        "PackID": 14,
        "UOM": "Shrink 6 Bottles",
        "Price": 1.638,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 13,
        "ItemDescription": "Nestle 0.500L",
        "ItemCode": "FG300009",
        "ItemBarcode": null,
        "PackID": 15,
        "UOM": "Shrink 24 Bottles",
        "Price": 3.448,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 14,
        "ItemDescription": "Ghadeer 5.5 L",
        "ItemCode": "FG300013",
        "ItemBarcode": null,
        "PackID": 16,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 15,
        "ItemDescription": "Nestle 2 L",
        "ItemCode": "FG300019",
        "ItemBarcode": null,
        "PackID": 21,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 16,
        "ItemDescription": "Ghadeer 7.75 L",
        "ItemCode": "FG300022",
        "ItemBarcode": null,
        "PackID": 24,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 17,
        "ItemDescription": "Nestle 500 ml Kids",
        "ItemCode": "FG300023",
        "ItemBarcode": null,
        "PackID": 25,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 18,
        "ItemDescription": "Nestle 0.330L",
        "ItemCode": "FG300025",
        "ItemBarcode": null,
        "PackID": 27,
        "UOM": "Shrink 24 Bottles",
        "Price": 2.802,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 19,
        "ItemDescription": "Nestle 600 ml",
        "ItemCode": "FG300026",
        "ItemBarcode": null,
        "PackID": 28,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 20,
        "ItemDescription": "Nestle 330 ml - Saudi",
        "ItemCode": "FG300027",
        "ItemBarcode": null,
        "PackID": 29,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 21,
        "ItemDescription": "Nestle 8 L",
        "ItemCode": "FG300028",
        "ItemBarcode": null,
        "PackID": 30,
        "UOM": "Bottle",
        "Price": 1.25,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 22,
        "ItemDescription": "Ghadeer 10 L",
        "ItemCode": "FG300029",
        "ItemBarcode": null,
        "PackID": 31,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 23,
        "ItemDescription": "Ghadeer 1.5 L",
        "ItemCode": "DS10001",
        "ItemBarcode": null,
        "PackID": 32,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 24,
        "ItemDescription": "Ghadeer 330 ml",
        "ItemCode": "DS10002",
        "ItemBarcode": null,
        "PackID": 33,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 25,
        "ItemDescription": "Nestle 1.5 L",
        "ItemCode": "DS10003",
        "ItemBarcode": null,
        "PackID": 34,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 26,
        "ItemDescription": "Nestle 0.500L",
        "ItemCode": "DS10004",
        "ItemBarcode": null,
        "PackID": 35,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 27,
        "ItemDescription": "Ghadeer 5.5 L",
        "ItemCode": "DS10011",
        "ItemBarcode": null,
        "PackID": 36,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 28,
        "ItemDescription": "Ghadeer 2 L",
        "ItemCode": "DS10012",
        "ItemBarcode": null,
        "PackID": 37,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 29,
        "ItemDescription": "Nestle 2 L",
        "ItemCode": "DS10017",
        "ItemBarcode": null,
        "PackID": 38,
        "UOM": "Shrink 6 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 2,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 30,
        "ItemDescription": "Ghadeer 7.75 L",
        "ItemCode": "DS10019",
        "ItemBarcode": null,
        "PackID": 39,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 31,
        "ItemDescription": "Nestle 500 ml Kids",
        "ItemCode": "DS10020",
        "ItemBarcode": null,
        "PackID": 40,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 32,
        "ItemDescription": "Ghadeer 0.500L",
        "ItemCode": "DS10021",
        "ItemBarcode": null,
        "PackID": 41,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 33,
        "ItemDescription": "Nestle 0.330L",
        "ItemCode": "DS10022",
        "ItemBarcode": null,
        "PackID": 42,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 34,
        "ItemDescription": "Nestle 600 ml",
        "ItemCode": "DS10023",
        "ItemBarcode": null,
        "PackID": 43,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 35,
        "ItemDescription": "Nestle 330 ml - Saudi",
        "ItemCode": "DS10024",
        "ItemBarcode": null,
        "PackID": 44,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 36,
        "ItemDescription": "Nestle 8 L",
        "ItemCode": "DS10025",
        "ItemBarcode": null,
        "PackID": 45,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 37,
        "ItemDescription": "Ghadeer 10 L",
        "ItemCode": "DS10026",
        "ItemBarcode": null,
        "PackID": 46,
        "UOM": "Bottle",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 4,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 38,
        "ItemDescription": "Nestle 0.33L Kids",
        "ItemCode": "DS10027",
        "ItemBarcode": null,
        "PackID": 47,
        "UOM": "Shrink 24 Bottles",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 39,
        "ItemDescription": "Ghadeer 0.700L Sport",
        "ItemCode": "DS10028",
        "ItemBarcode": null,
        "PackID": 48,
        "UOM": "Shrink12",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 0,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 6,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 40,
        "ItemDescription": "Nestle 0.330L - Kids",
        "ItemCode": "FG300030",
        "ItemBarcode": null,
        "PackID": 49,
        "UOM": "Shrink 24 Bottles",
        "Price": 4.31,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 3,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 41,
        "ItemDescription": "Ghadeer 0.700L Sport",
        "ItemCode": "FG300031",
        "ItemBarcode": null,
        "PackID": 50,
        "UOM": "Shrink12",
        "Price": 2.716,
        "Tax": 16,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": true,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 6,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    },
    {
        "ItemID": 42,
        "ItemDescription": "Gift Coupon",
        "ItemCode": "GFT02014",
        "ItemBarcode": "GFT02014",
        "PackID": 51,
        "UOM": "Gift Coupon",
        "Price": 0,
        "Tax": 0,
        "Discount": 3,
        "PiecesInPack": 1,
        "IsDefaultPack": false,
        "DiscountTypeID": 1,
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "PackTypeID": 7,
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "RequiredQuanity": 1
    }
];

var AllItems2 = JSON.stringify(All_Items);
localStorage.setItem('storeditem3', AllItems2);


var bundells = [
    {
        "BundleDetails": {
            "11": 1,
            "14": 1,
            "15": 1
        },
        "BundleID": 196,
        "BundleName": "Bundle",
        "DiscountAmount": 1,
        "DiscountPercentage": 0,
        "DetailTypeID": 8
    },
    {
        "BundleDetails": {
            "11": 1,
            "14": 1,
            "15": 1,
            "27": 1,
            "50": 1
        },
        "BundleID": 197,
        "BundleName": "Bundle 2",
        "DiscountAmount": 0,
        "DiscountPercentage": 1,
        "DetailTypeID": 9
    },
    {
        "BundleDetails": {
            "11": 1,
            "14": 1,
            "15": 1
        },
        "BundleID": 200,
        "BundleName": "Bundle dis amt",
        "DiscountAmount": 1,
        "DiscountPercentage": 0,
        "DetailTypeID": 8
    },
    {
        "BundleDetails": {
            "11": 1,
            "14": 1,
            "15": 1,
            "27": 1,
            "50": 1
        },
        "BundleID": 201,
        "BundleName": "Bundle dis per",
        "DiscountAmount": 0,
        "DiscountPercentage": 10,
        "DetailTypeID": 9
    }
];

var allbundels = JSON.stringify(bundells);
localStorage.setItem('Bundless8', allbundels);



function calclution_price(arr) {

    var obj = {
        "gross": 0.0,
        "tax": 0.0,
        "discount": 0.0,
        "prodiscount": 0.0,
        "nettotal": 0.0
    }

    for (var i = 0; i < arr.length; i++) {
        var gross = 0.0;
        var net = 0.0;
        var tax = 0.0;
        var discountperc = 0.0;
        var discountamt = 0.0;
        var prodiscountamt = 0.0;

        gross = arr[i].Price * arr[i].RequiredQuanity;
        if (arr[i].DetailTypeID == 2) { discountperc = (arr[i].Discount * 100) / gross } else { discountperc = arr[i].Discount }
        discountamt = gross * (discountperc / 100);
        net = gross - discountamt;
        if (arr[i].PromotedDiscount == 0) { } else { prodiscountamt = net * (arr[i].PromotedDiscount / 100); }
        net = net - prodiscountamt;
        tax = net * (arr[i].Tax / 100);
        net = net + tax;


        obj.gross = obj.gross + gross;
        obj.tax = obj.tax + tax;
        obj.discount = obj.discount + discountamt;
        obj.prodiscount = obj.prodiscount + prodiscountamt;
        obj.nettotal = obj.nettotal + net;

    }
    //  console.log(obj);
    return obj;

}

function overallprice(arr, bundel) {

    var overallprice = {
        "bundells": 0.00,
        "overallprice": 0.00
    }
    var objitems = 0.00;
    objitems = calclution_price(arr);
    for (var i = 0; i < bundel.length; i++) {
        var array = bundel[i];
        for (var g in array) {
            var itemsinbundells = 0.00;
            itemsinbundells = calclution_price(array[g]);
            overallprice.bundells += itemsinbundells.nettotal;
        }
    }
    overallprice.overallprice = overallprice.bundells + objitems.nettotal;

    return overallprice;

}

function getiteminfo(item) {

    var obj = {
        "gross": 0.00,
        "nettotal": 0.00,
        "tax": 0.00,
        "discount": 0.00,
        "prodiscount": 0.00,
        "itemimage": '',
        "itemname": '',
        "objun": ''
    }

    //    for (var i=0; i< arr.length; i++){
    //        if(arr[i].PackID==packid){      


    for (var i = 0; i < vendoreinfo.length; i++) {
        if (vendoreinfo[i].UniqeID == item.VendorName) {
            obj.itemname = vendoreinfo[i].name;
            obj.itemimage = vendoreinfo[i].IMG;
        }
    }


    var gross = 0.0;
    var net = 0.0;
    var tax = 0.0;
    var discountperc = 0.0;
    var discountamt = 0.0;
    var prodiscountamt = 0.0;

    gross = item.Price * item.RequiredQuanity;
    if (item.DetailTypeID == 2) { discountperc = (item.Discount * 100) / gross } else { discountperc = item.Discount }
    discountamt = gross * (discountperc / 100);
    net = gross - discountamt;
    if (item.PromotedDiscount == 0) { } else { prodiscountamt = net * (item.PromotedDiscount / 100); }
    net = net - prodiscountamt;
    tax = net * (item.Tax / 100);
    net = net + tax;
    obj.gross = obj.gross + gross;
    obj.tax = obj.tax + tax;
    obj.discount = obj.discount + discountamt;
    obj.prodiscount = obj.prodiscount + prodiscountamt;
    obj.nettotal = obj.nettotal + net;

    //        }
    //        
    //    }

    return obj;
}

function pagecounter() {

    var itemslength = 0;
    var bundellslength = 0;
    var length = 0;
    for (var k in vendoreorder) {
        itemslength += vendoreorder[k].length;
    }
    for (var k in mybundle) {
        bundellslength += mybundle[k].length;
    }
    length = itemslength + bundellslength;
    if (length == 0) { $$("#lengthon").hide() } else { $$("#lengthon").show(); $$("#lengthon").html(length); }
    $$("#lengthon").html(length);
}



