﻿var vendors = [];
var index = 0;
var lang = "1";
function GetVendores() {


    counter = 0;

    var counter = 0;

    var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/geturls";

    $$.ajax(
        {

            method: "post",
            url: urlAjax,
            contentType: 'application/json',

            dataType: "json",
            success: function (data, status, xhr) {
                vendoreinfo = data;

                console.log("Vendore Information after Get sucsses " + vendoreinfo);
                //@prog start insert vendor tabel after delet if exist 
                db.transaction(function (tx) {

                    var query = "DELETE  FROM vendor";

                    tx.executeSql(query, [], function (tx, res) {
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
                    //@prog place to add custmer-vendor recored if user have regstration code  
                    db.transaction(function (tx) {
                        for (var d = 0; d < vendoreinfo.length; d++) {
                            tx.executeSql('INSERT INTO vendor VALUES (?,?,?,?,?,?,?,?)', [vendoreinfo[d]._id, vendoreinfo[d].name, vendoreinfo[d].Email, vendoreinfo[d].contact, vendoreinfo[d].input, vendoreinfo[d].IMG, vendoreinfo[d].URL, vendoreinfo[d].UniqeID]);
                            console.log('Populated database vendor recored OK' + vendoreinfo[d]._id, vendoreinfo[d].name, vendoreinfo[d].Email, vendoreinfo[d].contact, vendoreinfo[d].input, vendoreinfo[d].IMG, vendoreinfo[d].URL, vendoreinfo[d].UniqeID);
                        }

                    }, function (error) {
                        console.log('Transaction ERROR: ' + error.message);
                    }, function () {
                        console.log('Populated database vendor  OK');
                        // strat get items
                        var lang = localStorage.getItem('lang');
                        //getItems(lang);
                        vendorData(lang);
                        // GetItems(customerids, counter);
                        //mainView.router.loadPage('home.html');
                    });
                });






                //@prog ithink we dont need that any more -- we dont use uniqId any more 
                for (var i = 0; i < vendoreinfo.length; i++) {
                    vendoreorder[vendoreinfo[i].UniqeID] = [];
                }



                for (var i = 0; i < vendoreinfo.length; i++) {
                    mybundle[vendoreinfo[i].UniqeID] = [];
                }

                for (var i = 0; i < vendoreinfo.length; i++) {
                    vendorereturen[vendoreinfo[i].UniqeID] = [];
                }

            },
            error: function (data, xhr) {

            }
        });

}
function GetVendorItems() {
    lang = localStorage.getItem('lang');
    if (index >= vendors.length) {

        mainView.router.loadPage('home.html');
       // AppendItems_z();
    }
    else {

        GetItems(vendors[index].URL, vendors[index].custumerID, vendors[index].outletID, lang, vendors[index].input);
    }



}
function GetItems(url, custumerID, outletID, lang, input) {
   
    console.log(url, custumerID, outletID, lang, input);

    $$.ajax(
        {
            url: "" + url + "/Items?customerID=" + custumerID + "&outletID=" + outletID + "&languageID=" + lang + "",
            method: "Get",

            success: function (data, xhr) {
                var itemsIs = JSON.parse(data);
                //@prog time to insert item to item table
                db.transaction(function (tx) {
                    for (var d = 0; d < itemsIs.length; d++) {
                        var query = "INSERT INTO items (ItemID, ItemDescription, ItemCode, ItemBarcode, PackID, UOM, Price, Tax, Discount, PiecesInPack, IsDefaultPack, DiscountTypeID, ItemCategoryID, DivisionID, BrandID, ItemCategory, Division, Brand, PackTypeID, PromotedDiscount, CalculatedDiscount, RequiredQuanity, ItemImageName, VendorName, CurrencyName, VendorID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";


                        tx.executeSql(query, [itemsIs[d].ItemID, itemsIs[d].ItemDescription, itemsIs[d].ItemCode, itemsIs[d].ItemBarcode, itemsIs[d].PackID, itemsIs[d].UOM, itemsIs[d].Price, itemsIs[d].Tax, itemsIs[d].Discount, itemsIs[d].PiecesInPack, itemsIs[d].IsDefaultPack, itemsIs[d].DiscountTypeID, itemsIs[d].ItemCategoryID, itemsIs[d].DivisionID, itemsIs[d].BrandID, itemsIs[d].ItemCategory, itemsIs[d].Division, itemsIs[d].Brand, itemsIs[d].PackTypeID, itemsIs[d].PromotedDiscount, itemsIs[d].CalculatedDiscount, itemsIs[d].RequiredQuanity, itemsIs[d].ItemImageName, itemsIs[d].VendorName, itemsIs[d].CurrencyName, input], function (tx, res) {
                            console.log("insertId: " + res.insertId + " -- probably 1");
                            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
                        },
                            function (tx, error) {
                                console.log('INSERT error: ' + error.message);
                            });
                    }

                }, function (error) {
                    console.log('transaction error: ' + error.message);
                }, function () {
                    console.log('transaction ok');
                    index++;
                    GetVendorItems();
                    return;
                });


                console.log(data);
                console.log(JSON.parse(data));



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
            //vendors = resultSet.rows.items;

            console.log('sss')
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