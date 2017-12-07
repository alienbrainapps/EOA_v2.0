var locationTologin = true;
var deviceId = "";
var messageBody = "hello from FO";
var image_div = '';
var image_value_id = '';
var audio_div = '';
var audioDataId = '';
var location_btn_clicked = '';
var LocationValueId = '';

//App Ready
function onAppReady() {
    if (navigator.splashscreen && navigator.splashscreen.hide) { // Cordova API detected
        navigator.splashscreen.hide();
    }
}
document.addEventListener("app.Ready", onAppReady, false);

//To open a database:
var db = null;
/*********initialize App********/
var app = {
    initialize: function () {
        console.log('hello mahmoud saleh')
        this.bindEvents();
    },

    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", backKeyDown, false);
    },

    onDeviceReady: function () {
        console.log('Device ready');
        db = window.sqlitePlugin.openDatabase({ name: 'Data.db', location: 'default' }, function (db) {
            createTabels() 

        }, function (error) {
            console.log('Open database ERROR: ' + JSON.stringify(error));
        });
     
    },

};
app.initialize();
/*********Open database SQL Light********/
function createTabels() {
    
    db.transaction(function (tx) {
        //@prog create Tables
        tx.executeSql('CREATE TABLE IF NOT EXISTS user (_id, email,password,name,mobilenumber,landline,retailer,commercilanumber,PhoneNumber,long,lat,Ordershistory)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS vendor (_id, name,Email,contact,input,IMG,URL,UniqeID)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS items (ItemID, ItemDescription,ItemCode,ItemBarcode,PackID,UOM,Price,Tax,Discount,PiecesInPack,IsDefaultPack,DiscountTypeID,ItemCategoryID,DivisionID,BrandID,ItemCategory,Division,Brand,PackTypeID,PromotedDiscount,CalculatedDiscount,RequiredQuanity,ItemImageName,VendorName,CurrencyName,VendorID)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS offers (PromotionID, Description,IsTaken,InputOptions,CalculatedOptions,VendorName,VendorID)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS vendorCustumer (custumerID, outletID , vendorID)');
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
    });

}
/*********Device BackKey********/
function backKeyDown(e) {

    currentPage = $$('.view-main').data('page');
    switch (currentPage) {

        case "home":
            myApp.confirm('Are you sure you want to exit the app', 'EOA', function () {
                navigator.app.exitApp();
            });
            break;
        case "orderhistory":
            mainView.router.loadPage({
                url: "home.html",
                force: true
            });
            break;
        case "trans":
            mainView.router.loadPage({
                url: "home.html",
                force: true
            });
            break;
        case "logout":
            myApp.confirm('Are you sure you want to exit the app', 'EOA', function () {
                navigator.app.exitApp();
            });
            break;
        case "Returneditems":
            mainView.router.loadPage({
                froce: true,
                url: 'home.html'
            });
            $$("#FinsihReturn").hide();
        case "ItemDE":
            mainView.router.loadPage({
                url: "home.html",
                force: true
            });
            break;
        case "Allitemdet":
            mainView.router.loadPage({
                url: 'Allitems.html',
                force: true
            });
        case "ItemDERet":
            mainView.router.loadPage({
                url: 'Returnedi.html',
                force: true
            })
        case "Nestle":
            mainView.router.loadPage('home.html');
            $$(".vendore").show();
            $$(".bundle").hide();
            $$(".item").hide();
            $$("#tab2").addClass('active');
            $$("#tab3").removeClass('active');
            $$("#tab1").removeClass('active');
            $$("#t2").addClass('active');
            $$("#t3").removeClass('active');
            $$("#t1").removeClass('active');

            $$(".tab-link-highlight").css('transform', 'translate3d(100%, 0px, 0px)');
            if (localStorage.getItem('lang') != 1) {
                $$(".tab-link-highlight").css('transform', 'translate3d(-100%, 0px, 0px)');
            }
            break;
        case "Setting":
            mainView.router.loadPage('home.html');
            break;
        case "Qutaion":
            mainView.router.loadPage({
                url: 'home.html',
                force: true
            });
            $$("#Orders").hide();
            $$("#Bundles").hide();
            $$("#Qotoution").hide();
            $$("#Order").hide();
            $$("#sendbundle").hide();
            break;
        case "pro":
            var string = '';
            savedarray = [];
            var lang = localStorage.getItem('lang');
            if (lang == 1) {
                string = 'Are you sure you want to discard these promotion?';
            } else {
                string = 'هل تريد الغاءهذه التخفيضات';
            }
            myApp.confirm(string, 'EOA', function () {
                //  mainView.router.back();
                mainView.router.loadPage({
                    url: 'home.html',
                    force: true
                });
                $$('.toolbar').show();
            });
            break;
        case "FOCs":
            mainView.router.back();
            myApp.showTab('#tab2');
            $$("#W" + testfocs["FO" + FOCDY].arr).html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
            break;
        case "FreeQun":
            mainView.router.back();
            $$("#Ws" + TFRQ["FR" + FRQDY].arr).html(TFRQ["FR" + FRQDY].FRQcurrent);
            break;

    }




}

/*********This is manaf code ********/
function myEventHandler() {
    "use strict";

    var ua = navigator.userAgent;
    var str;

    if (window.Cordova && dev.isDeviceReady.c_cordova_ready__) {
        str = "It worked! Cordova device ready detected at " + dev.isDeviceReady.c_cordova_ready__ + " milliseconds!";
        db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function (db) {

            //@prog create Tables
            tx.executeSql('CREATE TABLE IF NOT EXISTS user (_id, email,password,name,mobilenumber,landline,retailer,commercilanumber,PhoneNumber,long,lat,Ordershistory)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS vendor (_id, name,Email,contact,input,IMG,URL,UniqeID)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS items (ItemID, ItemDescription,ItemCode,ItemBarcode,PackID,UOM,Price,Tax,Discount,PiecesInPack,IsDefaultPack,DiscountTypeID,ItemCategoryID,DivisionID,BrandID,ItemCategory,Division,Brand,PackTypeID,PromotedDiscount,CalculatedDiscount,RequiredQuanity,ItemImageName,VendorName,CurrencyName,VendorID)');
            tx.executeSql('CREATE TABLE IF NOT EXISTS offers (PromotionID, Description,IsTaken,InputOptions,CalculatedOptions,VendorName,VendorID)');
            console.log('data base opend');
        }, function (error) {
            console.log('Open database ERROR: ' + JSON.stringify(error));
        });
    } else if (window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______) {
        str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!";
    } else {
        str = "Bad device ready, or none available because we're running in a browser.";
    }

    console.log(str);
}


// ...additional event handlers here...

function thirdPartyEmulator() {
    alert("This feature uses a third party barcode scanner plugin. Third party plugins are not supported on emulator or app preview. Please build app to test.");
}

function we() {


    var string2 = '';
    if (popovertit == '') {
        string2 = 'EOA'
    } else {
        string2 = popovertit;
    }
    var string = "";
    if (popover == '') {
        string = "there is no offer's add";
    } else {
        string = popover;
    }

    var clickedLink = $$("#search");
    var popoverHTML = '<div class="popover">' +
        '<div class="popover-inner">' +
        '<div class="content-block">' +
        '<p style="text-align: center">' + string2 + ' Requirements</p>' +
        '<div class="list-block"><ul>' + string + '</ul></div>' +
        '</div>' +
        '</div>' +
        '</div>'
    myApp.popover(popoverHTML, clickedLink);

    myApp.popover(clickedLink, "open", function () {
        alert("hlaa");
    });

    myApp.popover(popoverHTML, "opened", function () {
        alert("hlaa");
    });

    myApp.popover(popoverHTML, "close", function () {
        alert("hlaa");
    });

    myApp.popover(popoverHTML, "closed", function () {
        alert("hlaa");
    });


}

function scan() {
    "use strict";
    var fName = "scan():";
    console.log(fName, "entry");
    try {
        if (window.tinyHippos) {
            thirdPartyEmulator();
            console.log(fName, "emulator alert");
        } else {
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if (result.cancelled) {
                        return;
                    }
                    var object = localStorage.getItem('storeditem');
                    var jsonobject = JSON.parse(object);
                    /*  myApp.alert(result.text);
                      myApp.alert(jsonobject[0].ItemBarcode);
                      var A=result.text;
                      var B=jsonobject[0].ItemBarcode;*/

                    for (var i = 0; i < jsonobject.length; i++) {

                        // if(A==B){myApp.alert('found');}



                        if (result.text == jsonobject[i].ItemBarcode) {
                            var str = ''
                            if (localStorage.getItem('lang') == 1) {
                                str = 'you can not add this item'
                            } else {
                                str = 'لايمكنك اضافة هذه السلعة'
                            }
                            if (jsonobject[i].Price == 0) {
                                myApp.alert(str, "EOA")
                            }
                            var Discount = 0.0;
                            if (jsonobject[i].DiscountTypeID == 2) {
                                Discount = (jsonobject[i].Discount * 100) / jsonobject[i].Price;
                                localStorage.setItem("Discount", Discount);
                            } else {
                                Discount = jsonobject[i].Discount;
                                localStorage.setItem("Discount", Discount)
                            }

                            localStorage.setItem("PackTypeID", jsonobject[i].PackTypeID);
                            localStorage.setItem("packid", jsonobject[i].PackID);
                            localStorage.setItem("pack", 'pack');
                            localStorage.setItem("ItemID", jsonobject[i].ItemID);
                            localStorage.setItem("ItemDescription", jsonobject[i].ItemDescription);
                            localStorage.setItem("ItemCode", 'ItemCode');
                            localStorage.setItem("ItemBarcode", jsonobject[i].ItemBarcode);
                            localStorage.setItem("UOM", jsonobject[i].UOM);
                            localStorage.setItem("Tax", jsonobject[i].Tax);
                            //localStorage.setItem("Discount",Discount);
                            localStorage.setItem("PiecesInPack", jsonobject[i].PiecesInPack);
                            localStorage.setItem("IsDefaultPack", jsonobject[i].IsDefaultPack);
                            localStorage.setItem("PackGroupID", jsonobject[i].PackGroupID);
                            localStorage.setItem("IsAdded", jsonobject[i].IsAdded);
                            localStorage.setItem("DiscountTypeID", 1);
                            localStorage.setItem("Price", jsonobject[i].Price);

                            mainView.router.loadPage({
                                force: true,
                                url: 'itemdet.html'
                            });
                        }
                    }
                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }
    } catch (e) {
        console.log(fName, "catch, failure", e);
    }

    console.log(fName, "exit");
}

//////////////// return scan

function returnscan() {
    "use strict";
    var fName = "scan():";
    console.log(fName, "entry");
    try {
        if (window.tinyHippos) {
            thirdPartyEmulator();
            console.log(fName, "emulator alert");
        } else {
            cordova.plugins.barcodeScanner.scan(
                function (result) {

                    if (result.cancelled) {
                        //   myApp.alert('canceled','EOA');
                        return;
                    }



                    var object = localStorage.getItem('storeditem');
                    var jsonobject = JSON.parse(object);
                    /*  myApp.alert(result.text);
                      myApp.alert(jsonobject[0].ItemBarcode);
                      var A=result.text;
                      var B=jsonobject[0].ItemBarcode;*/
                    // if(A==B){myApp.alert('found');}
                    for (var i = 0; i < jsonobject.length; i++) {

                        if (result.text == jsonobject[i].ItemBarcode) {
                            jsonobject[i].RequiredQuanity = 1;



                            var found = false;

                            if (ReturnedItems.length) {
                                for (var j = 0; j < ReturnedItems.length; j++) {
                                    found = ReturnedItems[j].PackID == jsonobject[i].PackID;
                                    if (found == true) {
                                        ReturnedItems[j].RequiredQuanity = jsonobject[i].RequiredQuanity + ReturnedItems[j].RequiredQuanity;
                                        break;
                                    }

                                }
                            }
                            if (!found) {
                                ReturnedItems.push(jsonobject[i]);
                            }







                            //                            if(!ReturnedItems.length){
                            //                               ReturnedItems.push(jsonobject[i]);
                            //                                
                            //                            }else{
                            //                                for(var j=0;j<ReturnedItems.length;j++){
                            //                                    if(ReturnedItems[j].PackID==jsonobject[i].PackID){ReturnedItems[j].RequiredQuanity=ReturnedItems[j].RequiredQuanity+jsonobject[i].RequiredQuanity}else{
                            //                                          ReturnedItems.push(jsonobject[i]);
                            //                                        break;
                            //                                    }
                            //                                    
                            //                                }
                            //                                
                            //                                
                            //                            }
                            //                            ReturnedItems.push.apply(ReturnedItems, jsonobject[i]);

                        }

                    }

                    console.log(ReturnedItems);
                    returnscan();

                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}
//////////// barcodereg


function barcodescan() {
    "use strict";
    var fName = "scan():";
    console.log(fName, "entry");
    try {
        if (window.tinyHippos) {
            thirdPartyEmulator();
            console.log(fName, "emulator alert");
        } else {

            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    if (result.cancelled) {
                        mainView.router.loadPage('home.html');
                        return;
                    }

                    var id = localStorage.getItem('userid');
                    var is = JSON.stringify(id);
                    //   console.log(result);
                    //var res = result.substring(0, 2);
                    //                    if(res=="1,"){myApp.alert('Barcode not specified not for registration'); return;}
                    var partsOfStr = result.text.split(',');

                    for (var i = 0; i < partsOfStr.length; i++) {

                        partsOfStr[i] = parseInt(partsOfStr[i]);
                    }
                    var arrofdata = [];
                    arrofdata.push(partsOfStr);
                    console.log(arrofdata);
                    var pstbarcoe = {
                        "_id": id,
                        "regstrationcode": arrofdata
                    }
                    console.log(pstbarcoe);
                    myApp.showPreloader("Loading");

                    var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/barcode";
                    $$.ajax({
                        method: "post",
                        url: urlAjax,
                        contentType: 'application/json',
                        data: JSON.stringify(pstbarcoe),
                        dataType: "json",
                        success: function (data, status, xhr) {
                            console.log(data)
                            myApp.hidePreloader("Loading");

                            if (data == null) {
                                myApp.alert('error in barcode scaning please try again later', 'EOA');
                            } else {
                                //                                var arrr1 = pstbarcoe.regstrationcode[0];
                                //                                console.log(arrr1);
                                //                                var arrr2 = arrr1[1];
                                //                                console.log(arrr2);
                                //                                var arrr3 = arrr1[2];
                                //                                console.log(arrr3);
                                //                                var id = localStorage.getItem('userid');
                                //                                localStorage.setItem('CU_id' + id, JSON.stringify(arrr2));
                                //                                localStorage.setItem('OUT_id' + id, JSON.stringify(arrr3));
                                var array = data.message.regstrationcode;

                                for (var d = 0; d < array.length; d++) {
                                    var c = array[d][0][0];
                                    var customerid = array[d][0][1];
                                    var outletid = array[d][0][2];
                                    customerids["A" + c] = [];
                                    customerids["A" + c].push(customerid);
                                    customerids["A" + c].push(outletid);
                                }
                                //   mainView.router.loadPage({url:'about.html',force:true});
                                GetVendores();
                            }

                        },
                        error: function (data, xhr) {
                            myApp.hidePreloader("Loading");

                            myApp.alert('error in barcode scaning please try again later', 'EOA');
                        }
                    });


                },
                function (error) {
                    alert("Scanning failed: " + error);
                }
            );
        }
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}


