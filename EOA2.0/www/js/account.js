//mahmoud saleh

function ServerLogin(username, Pass) {
    createTabels();
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
                    //@prog place to add user table user info  data
                    //db.transaction(function (tx) {

                    //    tx.executeSql('INSERT INTO user VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', [data._id, data.email, data.password, data.name, data.mobilenumber, data.landline, data.retailer, data.commercilanumber, data.PhoneNumber, data.long, data.lat, data.Ordershistory]);
                    //}, function (error) {
                    //    console.log('Transaction ERROR: ' + error.message);
                    //}, function () {
                    //    console.log('Populated database OK');
                    //});

                    //@prog Start create user table (keep it  json  user);

                    localStorage.setItem('username', JSON.stringify(data.email))
                    localStorage.setItem('profile', JSON.stringify(data));
                    localStorage.setItem('userid', data._id);

                    if (!data.regstrationcode.length) {
                        //@prog if is user dont have regstrationcode (vendor) , stored some variable as empty  and open barcode

                        //localStorage.setItem("storeditem", '');
                        //localStorage.setItem("Offers33", '');
                        //localStorage.setItem("Transction", '');

                        //$$('#itemlist').append('');
                        //$$("#bundel").append('');
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
                myApp.hidePreloader("Loading");
                var string = '';
                var lang = localStorage.getItem('lang');
            }
        });
}
