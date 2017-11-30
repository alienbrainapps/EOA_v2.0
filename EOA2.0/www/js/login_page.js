//$$("#lgn1").click(function () {
//    // GetItems();
//    var ValidationSucessVal = true;
//    var username = $$('#IPusn').val();
//    var password = $$('#IPpass').val();
//    username = username.toLowerCase();
//    var jas = {
//        "email": username,
//        "password": password
//    }
//    var jason = JSON.stringify(jas);
//    Postlogin(jason);
//});

//function Postlogin(postData) {

//   // console.log(customerids);
//    myApp.showPreloader(loading);

//    var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/login";
//    $$.ajax(
//        {

//            method: "post",
//            url: urlAjax,
//            contentType: 'application/json',
//            data: postData,
//            dataType: "json",
//            success: function (data, status, xhr) {

//                myApp.hidePreloader(loading);
//                console.log(postData);

//                if (data == null) {
//                    var string = '';
//                    var lang = localStorage.getItem('lang');
//                    if (lang == 1) { string = 'Invalid username or password'; } else { string = 'خطاء في اسم المستخدم او كلمة السر '; }
//                    myApp.alert(string, 'EOA');
//                    return;
//                }
//                else {

//                    localStorage.setItem('username', JSON.stringify(data.email))
//                    localStorage.setItem('profile', JSON.stringify(data));
//                    console.log(data);
//                    localStorage.setItem('userid', data._id);
//                    console.log(localStorage.getItem('userid'));

//                    if (!data.regstrationcode.length) {

//                        localStorage.setItem("storeditem", '');

//                        localStorage.setItem("Offers33", '');
//                        localStorage.setItem("Transction", '');

//                        $$('#itemlist').append('');
//                        $$("#bundel").append('');
//                        // mainView.router.loadPage({url:'about.html',force:true});
//                        $$('.statusbar-overlay').css('background-color', '#00695c');
//                        $$('.statusbar-overlay').css('color', '#fff');


//                        $$(".toolbar").show();
//                        $$(".navbar").show();

//                        //barcodescan();

//                    } else {
//                        var array = data.regstrationcode;

//                        for (var d = 0; d < array.length; d++) {
//                            var c = array[d][0][0];
//                            var customerid = array[d][0][1];
//                            var outletid = array[d][0][2];
//                            customerids["A" + c] = [];
//                            customerids["A" + c].push(customerid);
//                            customerids["A" + c].push(outletid);
//                        }
//                        statusstring = data.Ordershistory;
//                        if (data.Ordershistory == "undefined") {
//                            statusstring = '';
//                        }

//                        $$('.statusbar-overlay').css('background-color', '#00695c');
//                        $$('.statusbar-overlay').css('color', '#fff');
//                        $$(".toolbar").show();
//                        $$(".navbar").show();

//                        GetVendores();



//                    }
//                }
//            }

//            ,
//            error: function (data, xhr) {


//                myApp.hidePreloader("Loading");
//                var string = '';
//                var lang = localStorage.getItem('lang');

//            }
//        });
//}

//function GetVendores() {


//    counter = 0;

//    var counter = 0;


//    var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/geturls";
//    $$.ajax(
//        {

//            method: "post",
//            url: urlAjax,
//            contentType: 'application/json',

//            dataType: "json",
//            success: function (data, status, xhr) {
//                vendoreinfo = data;
//                console.log(['hwllo', data]);
//                console.log("Vendoreinfooo" + vendoreinfo);
//                for (var i = 0; i < vendoreinfo.length; i++) {
//                    vendoreorder[vendoreinfo[i].UniqeID] = [];
//                }



//                for (var i = 0; i < vendoreinfo.length; i++) {
//                    mybundle[vendoreinfo[i].UniqeID] = [];
//                }

//                for (var i = 0; i < vendoreinfo.length; i++) {
//                    vendorereturen[vendoreinfo[i].UniqeID] = [];
//                }

//                GetItems(customerids, counter);
//                mainView.router.loadPage('home.html');

//            },
//            error: function (data, xhr) {

//            }
//        });

//}

//function GetItems(customerids, count) {
//    debugger;

//    if (count >= vendoreinfo.length) {
//        var bundellscount = 0;
//        //   myApp.hidePreloader(loading);
//        localStorage.setItem("storeditems", "");
//        localStorage.setItem("storeditem", JSON.stringify(localitems));
//        Summation(JSON.stringify(localitems));
//        var idbund = localStorage.getItem('userid');
//        var i1 = localStorage.getItem("CU_id" + idbund);
//        var i2 = localStorage.getItem("OUT_id" + idbund);
//        i1 = parseInt(i1);
//        i2 = parseInt(i2);

//        counteroffer = 0;
//        GetOffers(counteroffer);
//        AppendItems();

//        return;
//    }

//    var lang = localStorage.getItem('lang');
//    if (typeof customerids["A" + vendoreinfo[count].input] == "undefined") {
//        count += 1;
//        GetItems(customerids, count);

//    } else {
//        CU_id = customerids["A" + vendoreinfo[count].input][0];
//        OUT_id = customerids["A" + vendoreinfo[count].input][1];
//    }

//    if (count >= vendoreinfo.length) { return }
//    $$.ajax(
//        {
//            url: "" + vendoreinfo[count].URL + "/Items?customerID=" + CU_id + "&outletID=" + OUT_id + "&languageID=" + lang + "",
//            method: "Get",

//            success: function (data, xhr) {
//                // var krodata=data;
//                Vendorespreated[vendoreinfo[count].UniqeID] = [];
//                Vendorespreated[vendoreinfo[count].UniqeID].push(JSON.parse(data));
//                console.log(Vendorespreated);
//                data = JSON.parse(data);
//                for (var P = 0; P < data.length; P++) {
//                    data[P].PackID = vendoreinfo[count].UniqeID + data[P].PackID;
//                }


//                for (var P = 0; P < data.length; P++) {
//                    data[P].ItemID = vendoreinfo[count].UniqeID + data[P].ItemID;
//                }

//                for (var P = 0; P < data.length; P++) {
//                    data[P].VendorName = vendoreinfo[count].UniqeID;
//                }

//                localitems.push.apply(localitems, data);


//                for (var i = 0; i < data.length; i++) {
//                    localStorage.setItem("Packid" + data[i].PackID, JSON.stringify(data[i]));
//                }

//                count += 1;
//                GetItems(customerids, count);

//            },
//            error: function (jqXhr, textStatus, errorThrown) {

//                var string = '';
//                var langtext = localStorage.getItem('lang');
//                if (langtext == 1) { string = 'Network connection error. Please check connectivity and try again' } else { string = 'عذرا هناك خطاء في الشبكة'; }
//                myApp.alert(string, 'EOA');
//                myApp.hidePreloader(loading);

//            },
//            complete: function () {


//            }
//        });
//}

