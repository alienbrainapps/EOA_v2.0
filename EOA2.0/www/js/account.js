﻿//mahmoud saleh

function ServerLogin(username, Pass) {
    var jas = {
        "email": username,
        "password": Pass
    }
    var jason = JSON.stringify(jas);
    Postlogin(jason);
}



function Postlogin(postData) {

    //men when jaboo 
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
                if (data == null) {

                    var string = '';
                    var lang = localStorage.getItem('lang');
                    if (lang == 1) { string = 'Invalid username or password'; } else { string = 'خطاء في اسم المستخدم او كلمة السر '; }
                    myApp.alert(string, 'EOA');
                    return;
                }
                else {
                    //@prog Start create user table (keep it  json  user);

                    localStorage.setItem('username', JSON.stringify(data.email))
                    localStorage.setItem('profile', JSON.stringify(data));
                    localStorage.setItem('userid', data._id);
                    localStorage.setItem('pass', JSON.stringify(data.password))
                    if (!data.regstrationcode.length) {
                        //@prog if is user dont have regstrationcode (vendor) , stored some variable as empty  and open barcode

                        $$('.statusbar-overlay').css('background-color', '#00695c');
                        $$('.statusbar-overlay').css('color', '#fff');

                        //show toolbar and nav 
                        $$(".toolbar").show();
                        $$(".navbar").show();
                        // start scan barcode
                        barcodescan();

                    } else {

                        // @prog if user have regstrationcode;

                        var array = data.regstrationcode;
                        var userRegstrationCode = [];

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
                                // strat get vendor 
                                GetVendores();
                            });
                        });

                        
                        //@prog check if user have order history and update on to user tabel 
                        statusstring = data.Ordershistory;
                        if (data.Ordershistory == "undefined") {
                            statusstring = '';
                        }

                        $$('.statusbar-overlay').css('background-color', '#00695c');
                        $$('.statusbar-overlay').css('color', '#fff');
                        $$(".toolbar").show();
                        $$(".navbar").show();
                        
                    }
                }
            },
            error: function (data, xhr) {

                if (JSON.parse(localStorage.getItem('username')) != "" || JSON.parse(Storage.getItem('pass')) != undefined) {
                    myApp.hidePreloader("Loading");
                    myApp.alert(' Try offline Login ! check your connection to keep updated', 'Warning');
                    console.log(JSON.parse(localStorage.getItem('username')));
                    console.log(JSON.parse(localStorage.getItem('pass')));
                    var offlineUser = JSON.parse(postData);
                    if (offlineUser.email == JSON.parse(localStorage.getItem('username')) && offlineUser.password == JSON.parse(localStorage.getItem('pass'))) {
                        myApp.hidePreloader("Loading");
                        var lang = localStorage.getItem('lang');
                        mainView.router.loadPage('home.html');

                    } else {
                        myApp.hidePreloader("Loading");
                        var string = '';
                        var lang = localStorage.getItem('lang');
                        if (lang == 1) { string = 'Invalid username or password'; } else { string = 'خطاء في اسم المستخدم او كلمة السر '; }
                        myApp.alert(string, 'EOA');
                    }


                } else {
                    myApp.hidePreloader("Loading");
                    var string = '';
                    var lang = localStorage.getItem('lang');
                    if (lang == 1) { string = 'Invalid username or password'; } else { string = 'خطاء في اسم المستخدم او كلمة السر '; }
                    myApp.alert(string, 'EOA');
                }
              

              


            }
        });
}
