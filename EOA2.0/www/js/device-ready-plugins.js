var locationTologin = true;
var deviceId = "";
var messageBody = "hello from FO";
var image_div = '';
var image_value_id = '';
var audio_div = '';
var audioDataId = '';
var location_btn_clicked = '';
var LocationValueId = '';
var map = '';
var input = document.getElementById('pac-input');
var searchBox = '';
var markers = [];

//App Ready
function onAppReady() {
    if (navigator.splashscreen && navigator.splashscreen.hide) { // Cordova API detected
        navigator.splashscreen.hide();
    }
}
document.addEventListener("app.Ready", onAppReady, false);

//To open a database:
var db = null;
var runiOS = false;
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
        //db= window.openDatabase('my', "0.1", "My list", 200000);
        //console.log('DB: WebSQL');
        //createTabels() 
        //if (runiOS) {
        //    db = window.sqlitePlugin.openDatabase({ name: 'Data.db', location: 'default' }, function (db) {
        //        createTabels()

        //    }, function (error) {
        //        console.log('Open database ERROR: ' + JSON.stringify(error));
        //    });
        //    CreateMediaFolder();
        //}
        //else {
            //db = window.openDatabase('my', "0.1", "Data", 200000);
            //console.log('DB: WebSQL');
        //}
        db = window.sqlitePlugin.openDatabase({ name: 'Data.db', location: 'default' }, function (db) {
              createTabels()

           }, function (error) {
                console.log('Open database ERROR: ' + JSON.stringify(error));
           });
            CreateMediaFolder();
     
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
        tx.executeSql('CREATE TABLE IF NOT EXISTS vendorCustumer (custumerID, outletID , vendorID ,orderhistoryID)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS orderHistory(OrderDate ,OrderID,OrderItems,itemId,ItemQun,Status,VendorID)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS cart (VendorID, cartID , cartObject)');
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
            mainView.router.loadPage({
                url: "home.html",
                force: true
            });
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
            mainView.router.loadPage({
                url: "home.html",
                force: true
            });
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
                    let userInfo = JSON.parse(localStorage.getItem('profile'));
                    if (result.cancelled) {
                        if (userInfo.regstrationcode.length > 0) {
                            mainView.router.loadPage({
                                url: "home.html",
                                force: true
                            });
                            return;
                        }
                        else {
                            myApp.hidePreloader();
                            //show toolbar and nav 
                            $$(".toolbar").hide();
                            $$(".navbar").hide();
                            mainView.router.loadPage({
                                url: "no-vendor.html",
                                force: true
                            });
                            return;
                        }
                       // mainView.router.back();
                        //
                       
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

                    var urlAjax = EOA_URL+"api/barcode";
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


                                //@prog delet recored on vendorCustumer table if exsist

                                db.transaction(function (tx) {

                                    var query = "DELETE  FROM vendorCustumer";

                                    tx.executeSql(query, [], function (tx, res) {
                                        //console.log("removeId: " + res.insertId);
                                        //console.log("rowsAffected: " + res.rowsAffected);
                                    },
                                        function (tx, error) {
                                            console.log('DELETE error: ' + error.message);
                                        });
                                }, function (error) {
                                    console.log('transaction error: ' + error.message);
                                }, function () {
                                    console.log('transaction ok');
                                    //@prog place to add custmer-vendor recored if user have regstration code  
                                    db.transaction(function (tx) {
                                        for (var d = 0; d < array.length; d++) {
                                            var vendorid = array[d][0][0];
                                            var customerid = array[d][0][1];
                                            var outletid = array[d][0][2];
                                            //@prog bas 3shan ma yfqa3
                                            customerids["A" + vendorid] = [];
                                            customerids["A" + vendorid].push(customerid);
                                            customerids["A" + vendorid].push(outletid);
                                            tx.executeSql('INSERT INTO vendorCustumer VALUES (?,?,?)', [customerid, outletid, vendorid]);
                                            console.log('Populated database VendorCusomer OK' + customerid, outletid, vendorid);
                                        }

                                    }, function (error) {
                                        console.log('Transaction ERROR: ' + error.message);
                                    }, function () {
                                        console.log('Populated database VendorCusomer OK');
                                        ////try To delet items///
                                        db.transaction(function (tx) {

                                            var query = "DELETE  FROM items";

                                            tx.executeSql(query, [], function (tx, res) {
                                                //console.log("removeId: " + res.insertId);
                                                //console.log("rowsAffected: " + res.rowsAffected);
                                            },
                                                function (tx, error) {
                                                    console.log('DELETE error: ' + error.message);
                                                });
                                        }, function (error) {
                                            console.log('transaction error: ' + error.message);
                                        }, function () {
                                            console.log('transaction ok');
                                          
                                            ////try To delet offers///
                                            db.transaction(function (tx) {

                                                var query = "DELETE  FROM offers";

                                                tx.executeSql(query, [], function (tx, res) {
                                                    //console.log("removeId: " + res.insertId);
                                                    //console.log("rowsAffected: " + res.rowsAffected);
                                                },
                                                    function (tx, error) {
                                                        console.log('DELETE error: ' + error.message);
                                                    });
                                            }, function (error) {
                                                console.log('transaction error: ' + error.message);
                                            }, function () {
                                                console.log('transaction ok');
                                                //@prog place to add custmer-vendor recored if user have regstration code  
                                                myApp.showPreloader('updating your data', 'EOA');
                                                afterScan = true;
                                                GetVendores();
                                            });

                                        });
                                        // strat get vendor 
                                       
                                       // myApp.mainView.router.loadPage('home.html');
                                    });
                                });



                             







                                //old Code
                                //for (var d = 0; d < array.length; d++) {
                                //    var c = array[d][0][0];
                                //    var customerid = array[d][0][1];
                                //    var outletid = array[d][0][2];
                                //    customerids["A" + c] = [];
                                //    customerids["A" + c].push(customerid);
                                //    customerids["A" + c].push(outletid);
                                //}
                                // @prog if user have regstrationcode;
                                //ServerLogin(userInfo.email, userInfo.password);
                                //GetVendores();
                            }

                        },
                        error: function (data, xhr) {
                            $$(".toolbar").hide();
                            $$(".navbar").hide();
                            myApp.hidePreloader("Loading");
                           // mainView.router.loadPage('index.html');
                            myApp.alert('error in barcode scaning please try again later', 'EOA');
                        }
                    });


                },
                function (error) {
                    myApp.hidePreloader("Loading");
                    myApp.alert.alert("Scanning failed: " + error);
                }
            );
        }
    } catch (e) {
        console.log(fName, "catch, failure");
    }

    console.log(fName, "exit");
}


/*********Create Media Folder********/
function CreateMediaFolder() {
    window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory, onFileSystemSuccess, onError);
}
function onError(e) {
    console.log("onError for creat folder");
};
function onFileSystemSuccess(fileSystem) {

    var entry = "";
    entry = fileSystem;

    entry.getDirectory("EAO.Images", {
        create: true,
        exclusive: false
    }, onGetDirectorySuccess, onGetDirectoryFail);
};
function onGetDirectoryFail() {
    console.log('Erorr get dir problem')
}
function onGetDirectorySuccess(dir) {
    console.log('onGetDirectorySuccess')

};

/*********Move Media File********/
function moveMediaFile(fileUri, TempMediaName) {
    window.resolveLocalFileSystemURL(
        fileUri,
        function (fileEntry) {
            newFileUri = cordova.file.externalRootDirectory + "InCubeDCMedia/";
            oldFileUri = fileUri;

            window.resolveLocalFileSystemURL(newFileUri,
                function (dirEntry) {
                    // move the file to a new directory and rename it
                    fileEntry.moveTo(dirEntry, TempMediaName, successCallback, errorCallback);
                },
                errorCallback);
        },
        errorCallback);
}
function successCallback() {
    //myApp.alert('sucsses');
}
function errorCallback() {
    myApp.alert(error.code);
}

/******** try catch image online to offline *********/
function storeIntelligrapeLogo(imageUrl) {
  /*  var url = "http://www.intelligrape.com/images/logo.png";*/ // image url

    var url = imageUrl;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        var imagePath = fs.root.fullPath + "/logo.png"; // full file path
        var fileTransfer = new FileTransfer();
        fileTransfer.download(url, imagePath, function (entry) {
            console.log(entry.fullPath); // entry is fileEntry object
        }, function (error) {
            console.log("Some error");
        });
    })
}


/******** Postion Function  *********/

function initAutocomplete() {
    $$('.lastLi').prepend('<input id="pac-input" class="controls" type="text" placeholder=" Type your place">');



    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 31.945367, lng: 35.928372 },
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
    });

    // Create the search box and link it to the UI element.
     input = document.getElementById('pac-input');
     searchBox = new google.maps.places.SearchBox(input);
     map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    markers = []; 
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                title: place.name,
                position: place.geometry.location,
                disableDefaultUI: true
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
                
            }
            console.log(place.geometry.location);
            localStorage.setItem('pos', JSON.stringify({ lat: place.geometry.location.lat, lng: place.geometry.location.lng }));

        });
        

        //localStorage.setItem('pos', JSON.stringify(place.geometry.location));
        map.fitBounds(bounds);
    });
}


function getCurrentPostion(){
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

var onSuccess = function (position) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
    });

    markers.forEach(function (marker) {
        marker.setMap(null);
    });
    markers = [];

    // Create a marker for each place.
    markers.push(new google.maps.Marker({
        map: map,
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15
    }));
    console.log(position.coords);
    localStorage.setItem('pos', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
    
};
// onError Callback receives a PositionError object
function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
