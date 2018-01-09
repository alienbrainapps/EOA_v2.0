var vendors = [];
var index = 0;
var lang = "1";
var afterScan = false;
var vendoreorder = [];
var vendoreinfo;
function GetVendores() {


    counter = 0;

    var counter = 0;

    var urlAjax = EOA_URL+"api/geturls";

    $$.ajax(
        {

            method: "post",
            url: urlAjax,
            contentType: 'application/json',
            timeout: 15000,
            dataType: "json",
            success: function (data, status, xhr) {
                vendoreinfo = data;
                for (var i = 0; i < vendoreinfo.length; i++) {
                    vendoreorder[vendoreinfo[i].input] = [];
                    mybundle[vendoreinfo[i].input] = [];
                    vendorereturen[vendoreinfo[i].input] = [];
                }
                console.log(vendoreorder);

                //@prog start insert vendor tabel after delet if exist 
                db.transaction(function (tx) {

                    var query = "DELETE FROM vendor";

                    tx.executeSql(query, [], function (tx, res) {
                        //console.log("removeId: " + res.insertId);
                        // console.log("rowsAffected: " + res.rowsAffected);
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
                        for (var d = 0; d < vendoreinfo.length; d++) {
                            tx.executeSql('INSERT INTO vendor VALUES (?,?,?,?,?,?,?,?)', [vendoreinfo[d]._id, vendoreinfo[d].name, vendoreinfo[d].Email, vendoreinfo[d].contact, vendoreinfo[d].input, vendoreinfo[d].IMG, vendoreinfo[d].URL, vendoreinfo[d].UniqeID]);
                        }

                    }, function (error) {
                        console.log('Transaction ERROR: ' + error.message);
                    }, function () {
                        console.log('Populated database vendor  OK');
                        // strat get items
                        var lang = localStorage.getItem('lang');
                        vendorData(lang);

                    });
                });






                //@prog ithink we dont need that any more -- we dont use uniqId any more 
                //for (var i = 0; i < vendoreinfo.length; i++) {
                //    vendoreorder[vendoreinfo[i].UniqeID] = [];
                //}



                //for (var i = 0; i < vendoreinfo.length; i++) {
                //    mybundle[vendoreinfo[i].UniqeID] = [];
                //}

                //for (var i = 0; i < vendoreinfo.length; i++) {
                //    vendorereturen[vendoreinfo[i].UniqeID] = [];
                //}

            },
            error: function (data, xhr) {
                myApp.hidePreloader("Loading");
                myApp.alert('field To load data ! Please check internet  connection ', 'Error');
            }
        });

}
function GetVendorItems() {
    lang = localStorage.getItem('lang');
    if (index >= vendors.length) {
        if (afterScan == true) {
            myApp.hidePreloader();
            $$('.toolbar-bottom').show();
            $$("#homeicon").removeClass('myicon-eoa-home-not-active');
            $$("#searchicon").addClass('searchinactive');
            $$("#searchicon").removeClass('searchactive');
            $$("#reordericon").addClass('reorderinactive');
            $$("#reordericon").removeClass('reorderactive');
            $$("#ordericon").addClass('myicon-eoa-my-order');
            $$("#ordericon").removeClass('myicon-eoa-my-order-active');


            if (isIos) {
                $$("#t1").on('click', function () {
                    $$('.toolbar-bottom').show();
                    $$('.normalNav').show();
                    $$('.searchNav').hide();
                    $$('#itemlist li:nth-child(n + 25)').remove();
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
                    //AppendOffers();
                    //$$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
                    //if (localStorage.getItem('lang') != 1) {
                    //    $$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
                    //}

                    $$(".bundle").show();
                    $$(".item").hide();
                    $$(".vendore").hide();

                    $$("#t1").addClass('active');
                    $$("#t2").removeClass('active');
                    $$("#t3").removeClass('active');
                });
                $$("#t3").on('click', function () {
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
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
                    $$('.toolbar-bottom').show();
                    $$('.normalNav').show();
                    $$('.searchNav').hide();
                    $$('#itemlist li:nth-child(n + 25)').remove();
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
                    //$$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
                    //if (localStorage.getItem('lang') != 1) {
                    //    $$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
                    //}

                    $$(".vendore").show();
                    $$(".bundle").hide();
                    $$(".item").hide();
                    $$("#t2").addClass('active');
                    $$("#t3").removeClass('active');
                    $$("#t1").removeClass('active');
                });


                //$$("#tab1").on('click', function () {

                //    AppendOffers();
                //    $$(".bundle").show();
                //    $$(".item").hide();
                //    $$(".vendore").hide();

                //    $$("#tab1").addClass('active');
                //    $$("#tab2").removeClass('active');
                //    $$("#tab3").removeClass('active');
                //});
                //$$("#tab3").on('click', function () {

                //    $$(".item").show();
                //    $$(".bundle").hide();
                //    $$(".vendore").hide();
                //    $$("#tab3").addClass('active');
                //    $$("#tab2").removeClass('active');
                //    $$("#tab1").removeClass('active');

                //});
                //$$("#tab2").on('click', function () {


                //    $$(".vendore").show();
                //    $$(".bundle").hide();
                //    $$(".item").hide();
                //    $$("#tab2").addClass('active');
                //    $$("#tab3").removeClass('active');
                //    $$("#tab1").removeClass('active');
                //});

            }

            if (isAndroid) {
                $$("#t1").on('click', function () {
                    $$('.toolbar-bottom').show();
                    $$('.normalNav').show();
                    $$('.searchNav').hide();
                    $$('#itemlist li:nth-child(n + 25)').remove();
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
                    //AppendOffers();
                    //$$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
                    //if (localStorage.getItem('lang') != 1) {
                    //    $$(".tablinkhighlight").css('transform', 'translate3d(0%, 0px, 0px)');
                    //}

                    $$(".bundle").show();
                    $$(".item").hide();
                    $$(".vendore").hide();

                    $$("#t1").addClass('active');
                    $$("#t2").removeClass('active');
                    $$("#t3").removeClass('active');
                });
                $$("#t3").on('click', function () {
                   
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
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
                    $$('.toolbar-bottom').show();
                    $$('.normalNav').show();
                    $$('.searchNav').hide();
                    $$('#itemlist li:nth-child(n + 25)').remove();
                    lastIndex = $$('#itemlist li').length;
                    offset = $$('#itemlist li').length;
                    //$$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
                    //if (localStorage.getItem('lang') != 1) {
                    //    $$(".tablinkhighlight").css('transform', 'translate3d(100%, 0px, 0px)');
                    //}

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
        } else {
            mainView.router.loadPage({ url: "home.html", force: true });
        }
        
    }
    else {
        GetOffers(vendors[index].URL, vendors[index].custumerID, vendors[index].outletID, lang, vendors[index].input);
        GetItems(vendors[index].URL, vendors[index].custumerID, vendors[index].outletID, lang, vendors[index].input);
        GetItemImages(vendors[index].URL);
    }



}
function GetItems(url, custumerID, outletID, lang, input) {

    $$.ajax(
        {
            url: "" + url + "/Items?customerID=" + custumerID + "&outletID=" + outletID + "&languageID=" + lang + "",
            method: "Get",
            timeout: 60000,
            success: function (data, xhr) {
                var itemsIs = JSON.parse(data);
                if (itemsIs == undefined || itemsIs == null) {
                    itemsIs = [];
                }
                timeout: 6000,
                    db.transaction(function (tx) {

                        var query = "DELETE FROM items WHERE VendorID = ? ";

                        tx.executeSql(query, [input], function (tx, res) {
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
                        //@prog time to insert item to item table
                        db.transaction(function (tx) {
                            if (itemsIs.length) {
                                for (var d = 0; d < itemsIs.length; d++) {
                                    var query = "INSERT INTO items (ItemID, ItemDescription, ItemCode, ItemBarcode, PackID, UOM, Price, Tax, Discount, PiecesInPack, IsDefaultPack, DiscountTypeID, ItemCategoryID, DivisionID, BrandID, ItemCategory, Division, Brand, PackTypeID, PromotedDiscount, CalculatedDiscount, RequiredQuanity, ItemImageName, VendorName, CurrencyName, VendorID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";


                                    tx.executeSql(query, [itemsIs[d].ItemID, itemsIs[d].ItemDescription, itemsIs[d].ItemCode, itemsIs[d].ItemBarcode, itemsIs[d].PackID, itemsIs[d].UOM, itemsIs[d].Price, itemsIs[d].Tax, itemsIs[d].Discount, itemsIs[d].PiecesInPack, itemsIs[d].IsDefaultPack, itemsIs[d].DiscountTypeID, itemsIs[d].ItemCategoryID, itemsIs[d].DivisionID, itemsIs[d].BrandID, itemsIs[d].ItemCategory, itemsIs[d].Division, itemsIs[d].Brand, itemsIs[d].PackTypeID, itemsIs[d].PromotedDiscount, itemsIs[d].CalculatedDiscount, itemsIs[d].RequiredQuanity, itemsIs[d].ItemImageName, itemsIs[d].VendorName, itemsIs[d].CurrencyName, input], function (tx, res) {
                                        //console.log("insertId: " + res.insertId + " -- probably 1");
                                        //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                                    },
                                        function (tx, error) {
                                            console.log('INSERT error: ' + error.message);
                                        });
                                }
                            }
                        }, function (error) {
                            console.log('transaction error: ' + error.message);
                        }, function () {
                            console.log('transaction ok');
                            index++;
                            GetVendorItems();
                            return;
                        });

                    });


            },
            error: function (jqXhr, textStatus, errorThrown) {

                var string = '';
                var langtext = localStorage.getItem('lang');
                if (langtext == 1) { string = 'Network connection error. Please check connectivity and try again' } else { string = 'عذرا هناك خطاء في الشبكة'; }
                myApp.alert(string, 'EOA');
                myApp.hidePreloader(loading);

                index++;
                GetVendorItems();
                return;


            },
            complete: function () {


            }
        });
}
function vendorData(lang) {

    //@prog get my vendor

    db.transaction(function (tx) {

        var query = "SELECT * FROM vendor inner join vendorCustumer on  trim(vendorCustumer.vendorID)=trim(vendor.input)";
        console.log('query', query);
        tx.executeSql(query, [], function (tx, resultSet) {
            for (var x = 0; x < resultSet.rows.length; x++) {
                vendors.push(resultSet.rows.item(x));
            }

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        index = 0;
        GetVendorItems();

    });
}
function GetOffers(url, custumerID, outletID, lang, input) {
    console.log(url, custumerID, outletID, lang, input);
    $$.ajax(
        {
            url: "" + url + "/offers?customerID=" + custumerID + "&outletID=" + outletID + "&languageID=" + lang + "",
            method: "Get",
            timeout: 15000,
            success: function (data, xhr) {
                var theOfferIs = JSON.parse(data);
                if (theOfferIs == null || theOfferIs == undefined) {
                    theOfferIs = [];
                }
                db.transaction(function (tx) {

                    var query = "DELETE  FROM offers WHERE VendorID = ? ";

                    tx.executeSql(query, [input], function (tx, res) {
                        console.log("removeId: " + res.insertId);
                        console.log("rowsAffected: " + res.rowsAffected);
                    },
                        function (tx, error) {
                            console.log('DELETE error: ' + error.message);
                        });
                }, function (error) {
                    console.log('transaction error: ' + error.message);
                }, function () {
                    console.log('transaction ok');
                    //@prog time to insert item to item table
                    db.transaction(function (tx) {
                        for (var d = 0; d < theOfferIs.length; d++) {
                            var query = "INSERT INTO offers (PromotionID, Description,IsTaken,InputOptions,CalculatedOptions,VendorName,VendorID) VALUES (?,?,?,?,?,?,?)";


                            tx.executeSql(query, [theOfferIs[d].PromotionID, theOfferIs[d].Description, theOfferIs[d].IsTaken, JSON.stringify(theOfferIs[d].InputOptions), JSON.stringify(theOfferIs[d].CalculatedOptions), theOfferIs[d].VendorName, input], function (tx, res) {
                                // console.log("insertId: " + res.insertId + " -- probably 1");
                                //  console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                            },
                                function (tx, error) {
                                    console.log('INSERT error: ' + error.message);
                                });
                        }

                    }, function (error) {
                        console.log('transaction error: ' + error.message);
                    }, function () {
                        console.log('transaction ok');

                    });

                });
            },
            error: function (jqXhr, textStatus, errorThrown) {

            }
        });

}

function addToOrder() {
    $$('.toolbar-bottom').show();
    var itemOrderToSend = objclating;

    var QUNV = $$("#QunV").val();
    var QUN2V = parseInt(QUNV);
    if (isNaN(QUN2V)) {
        QUN2 = 1;
    } else {
        QUN2 = QUN2V
    }
    itemOrderToSend.RequiredQuanity = QUN2;
    console.log(itemOrderToSend);
    var gross = itemOrderToSend.Price * itemOrderToSend.RequiredQuanity;
    var discountamount = gross * (itemOrderToSend.Discount / 100);
    var PackNetTottal = gross - discountamount;

    var Tax = PackNetTottal * (itemOrderToSend.Tax / 100);
    var Net = PackNetTottal + Tax;
    var calc = {
        "Gross": gross,
        "NetTottal": Net,
        "Tax": Tax,
        "Discount": discountamount
    }
    //localStorage.setItem(order1V.PackID, JSON.stringify(calc));

    console.log(JSON.stringify(calc));
    //localStorage.setItem('orderV', order1V);

    var found = false;
    console.log(itemOrderToSend.name);
    console.log(vendoreorder);

    //console.log(vendoreorder[itemOrderToSend.VendorID].length);
    if (vendoreorder.length == 0) {
        vendoreinfo = [];
        db.transaction(function (tx) {

            var query = "SELECT * FROM vendor";
            console.log('query', query);
            tx.executeSql(query, [], function (tx, resultSet) {
                for (var x = 0; x < resultSet.rows.length; x++) {
                    vendoreinfo.push(resultSet.rows.item(x));
                }

            },
                function (tx, error) {
                    console.log('SELECT error: ' + error.message);
                });
        }, function (error) {
            console.log('transaction error: ' + error.message);
        }, function () {
            console.log('transaction ok');

            for (var i = 0; i < vendoreinfo.length; i++) {
                vendoreorder[vendoreinfo[i].input] = [];
                mybundle[vendoreinfo[i].input] = [];
                vendorereturen[vendoreinfo[i].input] = [];
            }

            var found = false;
            if (vendoreorder[itemOrderToSend.VendorID].length) {
                for (var i = 0; i < vendoreorder[itemOrderToSend.VendorID].length; i++) {
                    found = vendoreorder[itemOrderToSend.VendorID][i].PackID == itemOrderToSend.PackID;
                    if (found == true) {
                        vendoreorder[itemOrderToSend.VendorID][i].RequiredQuanity = itemOrderToSend.RequiredQuanity + vendoreorder[itemOrderToSend.VendorID][i].RequiredQuanity;
                        break;
                    }

                }
            }
            if (!found) {
                vendoreorder[itemOrderToSend.VendorID].push(itemOrderToSend);
                //@prog insert data to my cart table
                //db.transaction(function (tx) {
                //    if (vendoreorder.length) {
                //        for (var d = 0; d < vendoreorder.length; d++) {
                //            var query = "INSERT INTO cart (VendorID, cartID, cartObject) VALUES (?,?,?)";


                //            tx.executeSql(query, [itemOrderToSend.VendorID, itemOrderToSend, d], function (tx, res) {
                //                console.log("insertId: " + res.insertId + " -- probably 1");
                //                //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                //            },
                //            function (tx, error) {
                //                console.log('INSERT error: ' + error.message);
                //            });
                //        }
                //    }
                //}, function (error) {
                //    console.log('transaction error: ' + error.message);
                //}, function () {
                //    console.log('transaction ok');
                   
                //});
            }


            console.log(OrderList);
            //localStorage.setItem('orderlist33', JSON.stringify(OrderList));


            $$(".Orders").attr("id", "Orders");

            

            $$('.toolbar-bottom').show();

            mainView.router.loadPage({
                url: 'home.html',
                force: true
            });

        });
    }

    else {
        var found = false;
        if (vendoreorder[itemOrderToSend.VendorID].length) {
            for (var i = 0; i < vendoreorder[itemOrderToSend.VendorID].length; i++) {
                found = vendoreorder[itemOrderToSend.VendorID][i].PackID == itemOrderToSend.PackID;
                if (found == true) {
                    vendoreorder[itemOrderToSend.VendorID][i].RequiredQuanity = itemOrderToSend.RequiredQuanity + vendoreorder[itemOrderToSend.VendorID][i].RequiredQuanity;
                    break;
                }

            }
        }
        if (!found) {
            vendoreorder[itemOrderToSend.VendorID].push(itemOrderToSend);
            //db.transaction(function (tx) {
            //    if (vendoreorder.length) {
            //        for (var d = 0; d < vendoreorder.length; d++) {
            //            var query = "INSERT INTO cart (VendorID, cartID, cartObject) VALUES (?,?,?)";

            //            tx.executeSql(query, [itemOrderToSend.VendorID, itemOrderToSend, d], function (tx, res) {
            //                console.log("insertId: " + res.insertId + " -- probably 1");
            //                //console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
            //            },
            //                function (tx, error) {
            //                    console.log('INSERT error: ' + error.message);
            //                });
            //        }
            //    }
            //}, function (error) {
            //    console.log('transaction error: ' + error.message);
            //}, function () {
            //    console.log('transaction ok');

            //});
        }


        console.log(OrderList);
        localStorage.setItem('orderlist33', JSON.stringify(OrderList));


        $$(".Orders").attr("id", "Orders");
        $$('.toolbar-bottom').show();
        mainView.router.back();
    }

}


function GetItemImages(vendorURL) {
    console.log(vendorURL);
    $$.ajax(
        {
            url: "" + vendorURL + "/GetItemsImages",
            method: "Get",
            timeout: 60000,
            success: function (data, xhr) {
                console.log(data);

            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus);
                return;


            }
           
        });
}
