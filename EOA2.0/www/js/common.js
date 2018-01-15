var curencyTemp = "";
var itemdata = {};
var objclating = {};
var QUN2 = "";

//var contactsCallback =



////khalaaaas hon

$$("#prof").click(function () {
    mainView.router.loadPage({
        url: 'profile.html',
        force: true
    });
});

myApp.onPageInit('join', function (page) {


    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationHide: false,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

});
// @prog cat testo
myApp.onPageInit('catg', function (page) {
    //$$('.toolbar-bottom').hide();
    $$('.back').on('click', function () {
        $$('.toolbar-bottom').show();
        mainView.router.load('home.html');
    });
    $$("li .bundaccord").on('click', function () {

        $$(".accordion-item").toggleClass('accordion-item-expanded');

    });
    var Tottal_Price = 0.00;
    var Bundle_price = 0.00;
    html = '';



    var li = '';
    var stro = '';

    $$("#start_first_oredr_btn").on("click", function () {
        $$('.toolbar-bottom').show();
        mainView.router.loadPage({ url: 'home.html', force: true });
    });

    $$("#backOrder").on("click", function () {
        $$('.toolbar-bottom').show();
        mainView.router.loadPage({ url: 'home.html', force: true });
    });
    if (vendoreinfo != undefined) {
        for (var i = 0; i < vendoreinfo.length; i++) {
            var str = vendoreinfo[i].name;
            str = str.replace(/\s+/g, '');
            str = vendoreinfo[i].input;
            var lag = {
                "NetTotal": "",
                "Gross": "",
                "Tax": "",
                "Request": "",
                "Cancel": "",
                "Edit": "",
                "Discount": "Discount",
                "Bundels": "Bundels"
            }
            if (localStorage.getItem("lang") == 1) {
                lag.NetTotal = "NetTotal";
                lag.Gross = "Gross";
                lag.Tax = "Tax";
                lag.Bundels = "Bundels";
                lag.Discount = "Discount";
                lag.Request = "Request ََQoution";
                lag.Cancel = "Cancel Request";
                lag.Edit = "Edit";
            }
            else {
                lag.NetTotal = "المجموع الكلي";
                lag.Gross = "الصافي";
                lag.Bundels = "الحزم",
                    lag.Discount = "الخصم"
                lag.Tax = "الضريبة";
                lag.Request = "طلب تخفيضات";
                lag.Cancel = "الغاء";
                lag.Edit = "تعديل";
            }

            if (!vendoreorder[vendoreinfo[i].input].length && jQuery.isEmptyObject(mybundle[vendoreinfo[i].input])) {
                console.log('wish thaa');
            } else {
                $$("#orderon").show();
                //$$("#noorderinfo").hide();


                li += `
                <div class=" swiper-slide" id="pa` + vendoreinfo[i].input + `">
                            <div class="card">
                                <div class="card-header custom-header-style"><span>`+ vendoreinfo[i].name + `</span> <span class="button edit-btn"><i class="myicon-eoa-edit"></i></span></div>
                                <div class="card-content">
                                    <div class="card-content-inner">
                                        <div class="list-block accordion-list">
                                          <ul>
                                            <li class="accordion-item">   
                                                <a href="#" class="item-link item-content net_total_li">
                                                   <div class="item-media">` + lag.NetTotal + ` : </div>
                                                   <div class="item-inner">
                                                  <div class="item-title" id="Net` + str + `">127,6</div>
                                                 </div>
                                                                                            
                                                </a>
                                              <div class="accordion-item-content">
                                                <div class="content-block">
                                                 <div class="list-block media-list">
                                                             <ul class="prices">
                                                                                        <li>
                                                                                            <a href="#" class="item-link item-content">
                                                                                                <div class="item-media">` + lag.Gross + `  : </div>
                                                                                                <div class="item-inner">
                                                                                                    <div class="item-title bolder_text_xs" id="gro` + str + `">106.63</div>
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#" class="item-link item-content">
                                                                                                <div class="item-media">` + lag.Discount + ` : </div>
                                                                                                <div class="item-inner">
                                                                                                    <div class="item-title bolder_text_xs" id="des` + str + `" >0.00</div>
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#" class="item-link item-content">
                                                                                                <div class="item-media">` + lag.Tax + ` : </div>
                                                                                                <div class="item-inner">
                                                                                                    <div class="item-title bolder_text_xs" id="tax` + str + `">0.16</div>
                                                                                                </div>
                                                                                            </a>
                                                                                        </li>
                                                               </ul>
                                                 </div>
                                                </div>
                                              </div>
                                            </li>
                                        <div>




                                        <div class="list-block media-list">
                                         
                                            <ul class="itemsOrderList" id="itemsOrderList`+ vendoreinfo[i].input + `">
                                                
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <p class="buttons-row">
                                <a href="#"  class="button danger_btn Cancel" id="` + vendoreinfo[i].input + `"> Cancel Requset</a>
                                <a href="#"  class="button primary_btn Qut" id="` + vendoreinfo[i].input + `">Requset Qoution</a>

                            </p>
                        </div>`;


            }
        }
        $$(".swiper-wrapper").append(li);
    }
    var count = $$(".swiper-wrapper").children();
    if (count.length == 0) {
        $$("#orderon").hide();
        $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                        <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
    }
    $$("#start_first_oredr_btn").on("click", function () {
        $$('.toolbar-bottom').show();
        mainView.router.loadPage({ url: 'home.html', force: true });
    });

    if (vendoreinfo != undefined) {
        for (var e = 0; e < vendoreinfo.length; e++) {

            arr = '';
            var y = mybundle[vendoreinfo[e].input];

            if (jQuery.isEmptyObject(y) || typeof y == "undefined") { } else {
                //y=y[0];

                for (var l = 0; l < y.length; l++) {
                    for (var k in y[l]) {
                        if (y[l].hasOwnProperty(k)) {

                            var ordernum = i + 1;
                            var t = '';
                            for (var jo in bundellsname) {
                                if (jo == k) {
                                    t = bundellsname[jo];
                                }
                            }
                            var pricinggg = 0.0;
                            var string = k.substring(1, k.length);
                            console.log("string");
                            console.log(string);
                            var quntitybundle = 1;
                            var quntitybundle = bundqun["Q" + string];
                            console.log(bundvalue["V" + string]);
                            pricinggg = bundvalue["V" + string] * parseInt(quntitybundle);
                            var itmesprice = calclution_price(vendoreorder[vendoreinfo[e].input]);
                            Bundle_price = pricinggg;//+itmesprice.nettotal;
                            // bundelprice22 = bundelprice22 + pricinggg;

                            $$("#bundlenettotal" + vendoreinfo[e].input).html(curency + Bundle_price.toFixed(3));
                            arr += `<li id="" class="accordion-item bundaccord">
                                <a href="#" class="item-content item-link">
                                <i id="` + vendoreinfo[e].input + `" data-price="` + pricinggg + `" style="margin-right:4%" class="li bundone icon none"></i>
                                <div class="item-inner"> <div class="item-title" style="max-width: 60%; font-size:80%;">` + vendoreinfo[e].name + ` ` + t + `</div>
                                <div id="` + k + `" style="color:#00695c; font-size:89%" class"item-after">` + quntitybundle + `</div>
                                <div  style="color:#00695c;  font-size: 93%;" id="Pric1e` + k + `" class"item-after">` + pricinggg.toFixed(3) + `</div></div></a>
                                <div class="accordion-item-content"></ul><div class="content-block inset" style"z-index: -100; pointer-events: none">
                                <ul style="z-index=-999" id="AR` + k + `"></ul></div></div> </div></li>`;





                        } else if (mybundle.hasOwnProperty(k) && !OrderList) {
                            $$("#orderinfo").hide();
                            $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                        <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                            return;
                        }
                    }
                }
                $$("#bundlelist" + vendoreinfo[e].input).append(arr);





                for (var k in y[0]) {

                    if (y[0].hasOwnProperty(k)) {
                        var bundleinner = y[0][k];
                        var BUTAX = 0.0;
                        var BUGROSS = 0.0;
                        var BUDISCOUNT = 0.0;
                        var BUNETTOTTAL = 0.0;
                        var NetTottal = 0.0;
                        var ite2ms = '';
                        for (var i = 0; i < bundleinner.length; i++) {
                            if (bundleinner[i] == null) {
                                ite2ms += '<li class="item-content"><div class="item-media"><i class="icon icon-f7"></i></div><div class="item-inner"><div class="item-title">Out of Stock</div><div class="item-after"><span class="badge">1</span></div></div></li>';
                            } else {
                                var itemdesc = bundleinner[i].ItemDescription;
                                ite2ms += '<li class="item-content"><div class="item-inner"><div class="item-title">' + itemdesc + '</div><div class="item-after"><span class="badge">' + bundleinner[i].RequiredQuanity + '</span></div></div></li>';
                            }

                        }

                    }
                    $$("#AR" + k).append(ite2ms);
                    var d = JSON.stringify(ite2ms);
                    console.log(d);

                }



            }



        }



        for (var w = 0; w < vendoreinfo.length; w++) {

            var strop = vendoreinfo[w].input;

            html = '';
            var IOAlist = [];
            //@prog faqaa3 hona
            for (var i = 0; i < vendoreorder[vendoreinfo[w].input].length; i++) {
                var IOAlist = vendoreorder[vendoreinfo[w].input];
                var string = '';
                var lang = localStorage.getItem('lang');
                if (lang == 1) { string = 'Quantity' } else { string = 'كمية' }

                html += `<li class="item-conte1nt test" 
										id="` + IOAlist[i].ItemID + `"  
										data-ItemCode="` + IOAlist[i].ItemCode + `"
										data-ItemBarcode="` + IOAlist[i].ItemBarcode + `" 
										data-PackID="` + IOAlist[i].PackID + `" 
										data-UOM="` + IOAlist[i].UOM + `" 
										data-RequiredQuanity="` + IOAlist[i].RequiredQuanity + `" 
										data-Price="` + IOAlist[i].Price + `" 
										data-Tax="` + IOAlist[i].Tax + `" 
										data-Discount="` + IOAlist[i].Discount + `" 
										data-PiecesInPack="` + IOAlist[i].PiecesInPack + `" 
										data-IsDefaultPack="` + IOAlist[i].IsDefaultPack + `" 
										data-PackGroupID="` + IOAlist[i].PackGroupID + `" 
										data-IsAdded="` + IOAlist[i].IsAdded + `" 
										data-DiscountTypeID="` + IOAlist[i].DiscountTypeID + `" 
										data-ItemID="` + IOAlist[i].ItemID + `" 
										data-ItemDescription="` + IOAlist[i].ItemDescription + `" 
										data-pack="` + IOAlist[i].PackTypeID + `">
                                                    <a href="#" class="item-link item-content"
													id="` + IOAlist[i].PackTypeID + `"
													data-info="` + vendoreinfo[w].VendorID + `"
													>
                                                        <div class="item-media"><img src="`+ (vendoreinfo[w].URL).replace(`/api`, ``) + `/itemsimages/` + IOAlist[i].ItemImageName + `" onerror="(this.src='images/no-image.svg')"  width="50" height="50" /></div>
                                                        <div class="item-inner">
                                                           
                                                                <div class="item-title">` + IOAlist[i].ItemDescription + `</div>
                                                                    <span class="price_on_catg_list">`+ IOAlist[i].Price +`</span>
                                                                 <div class="item-subtitle"> `+ string+` : `+ IOAlist[i].RequiredQuanity + ` </div>
                                                           
                                                        </div>
                                                    </a>
                                        </li>`;
            }
            $$("#itemsOrderList" + vendoreinfo[w].input).append(html);

            var j = {}
            console.log(IOAlist);
            j = calclution_price(IOAlist);
            Tottal_Price = j.nettotal + Bundle_price;
            $$("#gro" + strop).html(j.gross.toFixed(3) + curency);
            $$("#tax" + strop).html(j.tax.toFixed(3) + curency);
            $$("#des" + strop).html(j.discount.toFixed(3) + curency);
            $$("#Net" + strop).html(Tottal_Price.toFixed(3) + curency);
        }
    }
    //else {
    //    $$(".swiper-container").append('<div class="swiper-pagination"></div>');
    //}


   
    $$("#edit").on("click", function () {

        $$(".li").toggleClass('non minus');
    });

    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationHide: false,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    $$('.Qut').on('click', function () {
        var idbund = localStorage.getItem('userid');
        var i1 = 1;
        var i2 = 1;
        var i1 = localStorage.getItem("CU_id" + idbund);
        var i2 = localStorage.getItem("OUT_id" + idbund);
        i1 = parseInt(i1);
        i2 = parseInt(i2);

        var Identfier = this.id;
        guessqout = this.id;

        var pricingobj = calclution_price(vendoreorder[Identfier]);

        console.log(vendoreorder[Identfier]);
        var arr234 = vendoreorder[Identfier];
        console.log(arr234);
        if (jQuery.isEmptyObject(mybundle[Identfier]) || typeof mybundle[Identfier] == "undefined") { } else {
            var array = [];
            array = mybundle[Identfier][0];
            var Restructofbundells = [];

            for (var key in array) {
                for (var r = 0; r < array[key].length; r++) {
                    array[key][r].PackID = array[key][r].PackID.slice(6)
                }
                var sparekey = key;
                key = key.slice(1);
                var objopo = {
                    "BundleItems": array[sparekey],
                    "BundleID": key
                }
                Restructofbundells.push(objopo);
            }
        }
        if (typeof Restructofbundells === "undefined") {
            Restructofbundells = null;
        }

        var idbund = localStorage.getItem('userid');
        var i1 = 1;
        var i2 = 1;
        var i1 = localStorage.getItem("CU_id" + idbund);
        var i2 = localStorage.getItem("OUT_id" + idbund);
        i1 = parseInt(i1);
        i2 = parseInt(i2);
        var count = 0;
        for (var i = 0; i < vendoreinfo.length; i++) {
            if (Identfier == vendoreinfo[i].input) {
                count = vendoreinfo[i].input;
            }
        }
        var CU_id = customerids["A" + count][0];
        var OUT_id = customerids["A" + count][1];

        var OrderJsonObject =
            {
                "OrderID": 10,
                "CustomerID": CU_id,
                "OutletID": OUT_id,
                "EmployeeID": -1,
                "DivisionID": -1,
                "OrderDate": "0001-01-01T00:00:00",
                "ItemPacks": vendoreorder[Identfier],
                "OrdersStatus": 1,
                "CreationSource": 3,
                "OrderTypeID": 1,
                "LanguageID": localStorage.getItem("lang"),
                "NetTotal": pricingobj.nettotal,
                "GrossTotal": pricingobj.gross,
                "Tax": pricingobj.tax,
                "Discount": pricingobj.discount,
                "PromotedDiscount": 0,
                "bundles": Restructofbundells
            }
        for (var i = 0; i < OrderJsonObject.ItemPacks.length; i++) {
            OrderJsonObject.ItemPacks[i].PackID = OrderJsonObject.ItemPacks[i].PackID;
            OrderJsonObject.ItemPacks[i].ItemID = OrderJsonObject.ItemPacks[i].ItemID;

        }
        myApp.showPreloader(loading);
        if (!vendoreorder[Identfier].length) { OrderJsonObject.ItemPacks = null }
        //else{  //OrderJsonObject.ItemPacks.push.apply( OrderJsonObject.ItemPacks,IOAlist);
        //}
        OrderJsonObject.ItemPacks.push.apply(OrderJsonObject.ItemPacks, IOAlist);
        localStorage.setItem('orderr', JSON.stringify(OrderJsonObject));


        for (var i = 0; i < vendoreinfo.length; i++) {
            if (vendoreinfo[i].input == Identfier) {
                var url = vendoreinfo[i].URL;
            }
        }
        console.log(JSON.stringify(OrderJsonObject));
        $$.post("" + url + "/QuotationValidation",
            OrderJsonObject,
            function (data, status) {

                if (data == "null") {
                    myApp.hidePreloader(loading);
                    myApp.alert('Network error please try again');
                    mainView.router.loadPage({ url: 'Qutaion.html', force: true }); return;
                }
                ordertosvae = OrderJsonObject;


                myApp.hidePreloader(loading);
                var krons = JSON.parse(data);

                proorder = krons;
                promotionnettotal = krons.NetTotal;
                promotiondescount = krons.Discount;
                promotiontax = krons.Tax;
                promotiongross = krons.GrossTotal;
                localStorage.setItem('Qut', data);

                mainView.router.loadPage({ url: 'promo.html', force: true });
            });






    });

    $$(".Cancel").on('click', function () {

        var string = '';
        var id = this.id;
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) {
            string = 'Are you sure you want to cancel this order?'
        } else {
            string = 'هل انت متاكد من الغاءالطلب';
        }
        myApp.confirm(string, 'EOA',
            function () {
                OrderList = [];
                vendoreorder[id] = [];
                mybundle[id] = [];
                pagecounter();
                ///backhere bro


                var count = $$(".swiper-wrapper").children();
                if (count.length == 0) {
                    $$("#orderon").hide();
                    $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                    $$('.toolbar-bottom').show();
                } else {

                    var mySwiper = $$('.swiper-container')[0].swiper;
                    var currentIndexSwiper = mySwiper.activeIndex;
                    mySwiper.removeSlide(currentIndexSwiper);
                    mySwiper.update();
                    count = $$(".swiper-wrapper").children();
                    if (count.length == 0) {
                        $$("#orderon").hide();

                        $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                        $$('.toolbar-bottom').show();
                    }

                }

                //$$("#pa" + id).remove();

                localStorage.setItem('orderlist33', JSON.stringify(OrderList));
                $$("#" + name).empty();
                $$("#bundlelist" + name).empty();

                $$("#Net").html("0.00");
                $$("#des").html("0.00");
                $$("#tax").html("0.00 ");
                $$("#gro").html("0.00 ");
                $$("#orderinfo").hide();
                $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                localStorage.setItem('orderlist33', '');
                localStorage.setItem('mybundle', '');
                pagecounter();
                //mainView.router.back();

            },
            function () {

            }
        );
    });

    $$(".bundone").on('click', function () {
        var key = this.id;
        var bundleprr = $$(this).data('price');
        var dvi = $$(this).parent();
        var c = dvi.parent();
        var bundloc = c.index();
        var string = '';
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) {
            string = 'Are you sure you want to Delete this bundle?'
        } else {
            string = 'هل تريد حذف هذه الحزمة؟';
        }
        myApp.confirm(string, 'EOA',
            function (value) {

                var netbundle = 0.00;
                var d = '';
                for (var n = 0; n < vendoreinfo.length; n++) {
                    if (vendoreinfo[n].input == key) {
                        d = vendoreinfo[n].name;
                    }
                }
                mybundle[key].splice(bundloc, 1);


                //             netbundle=bundel_after-bundleprr;
                //                    console.log(mybundle[key]);
                //                                
                //                    var dval = calclution_price(mybundle[key][bundloc]);

                //                     Tottal_Price=  Tottal_Price- dval.nettotal;
                //                    Bundle_price = Bundle_price - dval.nettotal;
                var obj = overallprice(vendoreorder[key], mybundle[key])
                $$("#bundlenettotal" + key).html(curency + obj.bundells.toFixed(3))
                $$("#Net" + key).html(curency + obj.overallprice.toFixed(3));
                //   delete mybundle[key];

                c.remove();



                if (!OrderList.length && jQuery.isEmptyObject(mybundle)) {
                    $$("#orderinfo").hide();
                    $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                }
                console.log(mybundle);
                pagecounter();
            });



    });


    $$('#item_information > .item-uom').on('click', function () {

        var ids = this.id;
        var packid = $$(this).attr('data-packid');
        console.log(parseInt(packid));
        $$('#QunV').data('PackID', parseInt(packid));
        $$('#QunV').attr('data-PackID', parseInt(packid));
        //var packid = $$('#' + packid).data('PackID');
        var Discount = $$('#selected' + packid).data('Discount');
        var Tax = $$('#selected' + packid).data('Tax');
        var PackTypeID = $$('#selected' + packid).data('pack');
        var price = $$('#selected' + packid).data("price");
        objclating.PackID = parseInt(packid);
        objclating.Discount = Discount;
        objclating.Tax = Tax;
        objclating.Price = price;
        getiteminfo(objclating);

        $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
        $$("#Gross").html(curency + itemdata.gross.toFixed(3));
        $$("#Discount").html(curency + itemdata.discount.toFixed(3));
        $$("#Tax").html(curency + itemdata.tax.toFixed(3));
        $$("#vendorename").html(itemdata.itemname);

    });



});

myApp.onPageInit('Returneditemsfinish', function (page) {
    var dd = 0.0;
    html = '';
    var li = '';
    var stro = '';

    for (var i = 0; i < vendoreinfo.length; i++) {
        var str = vendoreinfo[i].name;
        str = str.replace(/\s+/g, '');
        str = vendoreinfo[i].input;
        //alert(str);
        if (!vendorereturen[vendoreinfo[i].input].length) { } else {
            if (i == 0) { stro = "Nestle" } else { stro = "Delmonti" }
            li += '<div class="swiper-slide"><span>' + stro + '</span>  <div class="row">  <div class="col-80"></div> <div class="col-20" style="font-size: large; padding-left: 5%;" id="edit">Edit</div> </div><div class="content-block-inner"><div style="padding-left:10%" class="co1ntent-block">      <div class="content-bl1ock-inner" style="padding-left:4%;"><div id="ce" style="display:none">   <div class="row no-gutter"><div style="font-size: large;"  class="col-50">Gross :</div><div style="font-size: large;" id="gro' + str + '" class="col-50">0.00</div></div><div class="row no-gutter"><div  style="font-size: large;"  class="col-50">Discount :</div><div style="font-size: large;" id="des' + str + '" class="col-50">0.00</div> </div>   <div class="row no-gutter">  <div style="font-size: large;"  class="col-50">Tax :</div>      <div style="font-size: large;" id="tax' + str + '"  class="col-50">0.00</div> </div> <div class="row no-gutter"><div style="font-size: large;" class="col-50">Bundles :</div><div style="font-size: large;" id="bundlenettotal" class="col-50">0.00</div> </div> </div>  <div style="margin-top:4%" class="row no-gutter"> <div style="font-size:large; color:#00695c; font-weight:bold;" class="col-50">NetTotal :</div><div style="font-size: large; color:#00695c; font-weight:bold; "  id="Net' + str + '" class="col-50">0.00</div></div> <div style="margin-top:9%" class="row">    <div style="padding-left:36%; padding-right:34%; margin-top:-6%; " id="itemarrowup"><i  class="icon Down col-100" ></i></div>   <div style="padding-left:36%; display:none; padding-right:34%; margin-top:-6%; " id="itemarrowdown"><i  class="icon UP col-100" ></i> </div>    </div>   </div>   </div><div class="list-block blol" style="margin-bottom:0%;">  <ul id="' + vendoreinfo[i].input + '"> </ul></div><div class="list-block" style="margin-top:0%;">  <ul id="bundlelist">  </ul>  <div id="' + vendoreinfo[i].input + '" class="col-50 Qut123"><a href="#" id="' + vendoreinfo[i].input + '" class="button">Return items</a></div>  <div style="margin-top:3%" id="Cancel" class="col-50"><a href="#"  class="button">Cancel Request</a></div></div>              </div>    </div>   <div style="display:none" id="noorderinfo" class="content-block">      <div class="row">  <div class="col-100">{{YoudonthaveanyordersnorBundels}} </div></div>  </div></div>';
        }
    }
    $$(".swiper-wrapper").append(li);



    for (var w = 0; w < vendoreinfo.length; w++) {

        var strop = vendoreinfo[w].input;
        //            strop = strop.replace(/\s+/g, '');
        //          strop=strop.replace('-', '');
        html = '';
        IOAlist = [];
        for (var i = 0; i < vendorereturen[vendoreinfo[w].input].length; i++) {
            var IOAlist = vendorereturen[vendoreinfo[w].input];
            var string = '';
            var lang = localStorage.getItem('lang');
            if (lang == 1) { string = 'Quantity' } else { string = 'كمية' }
            html += '<li  class="item-conte1nt test" id="' + IOAlist[i].ItemID + '"  data-ItemCode="' + IOAlist[i].ItemCode + '" data-ItemBarcode="' + IOAlist[i].ItemBarcode + '" data-PackID="' + IOAlist[i].PackID + '" data-UOM="' + IOAlist[i].UOM + '" data-RequiredQuanity="' + IOAlist[i].RequiredQuanity + '" data-Price="' + IOAlist[i].Price + '" data-Tax="' + IOAlist[i].Tax + '" data-Discount="' + IOAlist[i].Discount + '" data-PiecesInPack="' + IOAlist[i].PiecesInPack + '" data-IsDefaultPack="' + IOAlist[i].IsDefaultPack + '" data-PackGroupID="' + IOAlist[i].PackGroupID + '" data-IsAdded="' + IOAlist[i].IsAdded + '" data-DiscountTypeID="' + IOAlist[i].DiscountTypeID + '" data-ItemID="' + IOAlist[i].ItemID + '" data-ItemDescription="' + IOAlist[i].ItemDescription + '" data-pack="' + IOAlist[i].PackTypeID + '"><a href="#" style="color:black; padding-left:0% !important; " class="item-1link item-content"><i id="' + IOAlist[i].PackTypeID + '" style="margin-right:4%" data-info="' + vendoreinfo[w].input + '" class="li icon non"></i><div class="item-media"><img src="' + vendoreinfo[w].IMG + '" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + IOAlist[i].ItemDescription + '</div><div class="item-after">' + string + ': ' + IOAlist[i].RequiredQuanity + '</div></div><div class="item-sub1title">' + IOAlist[i].Price + '</div></div></a></li>';
        }
        $$("#" + vendoreinfo[w].name).append(html);

        var j = {}
        j = calclution_price(IOAlist);
        $$("#gro" + strop).html(j.gross.toFixed(3) + curency);
        $$("#tax" + strop).html(j.tax.toFixed(3) + curency);
        $$("#des" + strop).html(j.discount.toFixed(3) + curency);
        $$("#Net" + strop).html(j.nettotal.toFixed(3) + curency);
    }

    $$("#edit").on("click", function () {

        $$(".li").toggleClass('non minus');
    });

    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationHide: false,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });



    $$("#itemarrowup").on('click', function () {


        $("#ce").slideDown("slow");

        $$(this).hide();
        $$("#itemarrowdown").show();
    });

    $$("#itemarrowdown").on('click', function () {

        $("#ce").slideUp("slow");
        $$(this).hide();
        $$("#itemarrowup").show();

    });

    $$(".accordion-item").on('click', function () {

        $$(".accordion-item").toggleClass('accordion-item-expanded');

    });

    $$('blol ul li i').on('click', function () {
        var id = $$(this).parent();

        var index = $$(this).parent().index();
        var datainfo = $$(this).data('info');
        var string = '';

        var lang = localStorage.getItem('lang');
        if (lang == 1) { string = 'Are you sure you want to delet the item'; } else { string = 'هل تريد حذف هذه السلعة'; }
        myApp.confirm(string, 'EOA', function () {

            $$(id).remove();
            if (vendorereturen[datainfo].length == 1) {
                var obj = calclution_price(vendorereturen[datainfo]);
                //localStorage.setItem('orderlist33',JSON.stringify(vendoreorder[datainfo]));

                if (dd == 0) { dd = obj.nettotal } else
                    dd = dd - obj.nettotal;
                $$("#Net").html(curency + dd.toFixed(3) + "");
                $$("#des").html(curency + obj.discount.toFixed(3) + "");
                $$("#tax").html(curency + obj.tax.toFixed(3) + "");
                $$("#gro").html(curency + obj.gross.toFixed(3) + "");

                vendorereturen[datainfo].splice(index, 1);

            } else {
                vendorereturen[datainfo].splice(index, 1);

                var obj = calclution_price(vendorereturen[datainfo]);
                //localStorage.setItem('orderlist33',JSON.stringify(vendoreorder[datainfo]));

                if (dd == 0) { dd = obj.nettotal } else
                    dd = dd - obj.nettotal;
                $$("#Net").html(curencyTemp + dd.toFixed(3) + "");
                $$("#des").html(curencyTemp + obj.discount.toFixed(3) + "");
                $$("#tax").html(curencyTemp + obj.tax.toFixed(3) + "");
                $$("#gro").html(curencyTemp + obj.gross.toFixed(3) + "");
            }
            var string = '';
            var lang = localStorage.getItem('lang');
            if (lang == 1) { string = 'Item Removed'; } else { string = 'تم حذف الصنف'; }
            myApp.alert(string, "EOA");


            if (!vendorereturen[datainfo].length && jQuery.isEmptyObject(mybundle)) {
                $$("#orderinfo").hide(); $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `); return;
            }
            var strop = datainfo;
            strop = strop.replace(/\s+/g, '');
            strop = strop.replace('-', '');


            var obj = calclution_price(vendorereturen[datainfo]);
            $$("#Net" + strop).html(curencyTemp + dd.toFixed(3) + "");
            $$("#des" + strop).html(curencyTemp + obj.discount.toFixed(3) + "");
            $$("#tax" + strop).html(curencyTemp + obj.tax.toFixed(3) + "");
            $$("#gro" + strop).html(curencyTemp + obj.gross.toFixed(3) + "");


        });

    });

    $("#cancel2").on('click', function () {
        var string = '';
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) { string = 'Are you sure you want to cancel this order?' } else { string = 'هل انت متاكد من الغاءالطلب'; }
        myApp.confirm(string, 'EOA',
            function () {
                OrderList = [];
                //localStorage.setItem('orderlist33',JSON.stringify(OrderList));
                $$("#list").empty();
                $$("#bundlelist").empty();
                //    mybundle=[];
                IOAlist = [];
                $$("#returnNet").html("0.00" + curency);

                $$("#reton").hide(); $$("#retoff").show();

            });
    });

    $$('.Qut123').once('click', function () {
        identfire = this.id;
        var tyu = 9;
        tyu = tyu + 1;
        var d = new Date();
        var n = d.getTime();
        var i1 = localStorage.getItem("CU_id");
        var i2 = localStorage.getItem("OUT_id");
        i1 = parseInt(i1);
        i2 = parseInt(i2);
        var jor = calclution_price(vendorereturen[identfire]);
        var OrderJsonObject =
            {
                "OrderID": null,
                "CustomerID": i1,
                "OutletID": i2,
                "EmployeeID": -1,
                "DivisionID": -1,
                "OrderDate": "0001-01-01T00:00:00",
                "ItemPacks": [],
                "OrdersStatus": 1,
                "CreationSource": 3,
                "OrderTypeID": 2,
                "NetTotal": jor.nettotal,
                "GrossTotal": jor.discount,
                "Tax": 0,
                "Discount": 0,
                "PromotedDiscount": 0,
                "TempOrderID": n
            }


        myApp.showPreloader("Loading");
        // console.log(OrderJsonObject);
        OrderJsonObject.ItemPacks = vendorereturen[identfire];
        localStorage.setItem('orderr', JSON.stringify(OrderJsonObject));
        //  console.log(OrderJsonObject);
        for (var i = 0; i < OrderJsonObject.ItemPacks.length; i++) {
            OrderJsonObject.ItemPacks[i].Tax = 0.0;
            OrderJsonObject.ItemPacks[i].Discount = 0.0;
        }
        // console.log(IOAlist);
        var trl = '';
        for (var t = 0; t < vendoreinfo.length; t++) {
            if (vendoreinfo[t].input == guessqout) {
                trl = vendoreinfo[t].URL;
            }
        }
        a
        $$.post("" + trl + "/SendOrder",
            OrderJsonObject,
            function (data, status) {

                //SentOrders.push(OrderJsonObject);
                console.log(data);
                localStorage.setItem("SentOrders", JSON.stringify(SentOrders));
                localStorage.setItem('orderlist33', '');
                myApp.hidePreloader("Loading");
                var krons = JSON.parse(data);
                proorder = krons;
                localStorage.setItem('Qut', data);
                myApp.alert('your Order for Returning the Items was Successfuly Submited');

                mainView.router.loadPage({ url: "home.html", force: true });
                $$("#FinsihReturn").hide();
            });

    });



});

myApp.onPageInit('selectstat', function (page) {
    var li = '';
    for (var i = 0; i < vendoreinfo.length; i++) {
        li += '<li id="' + vendoreinfo[i].input + '" ><a href="Brands.html" class="item-link item-content"><div class="item-media"><img src="' + vendoreinfo[i].IMG + '" width="50" height="50"></div><div class="item-inner"><div class="item-title">' + vendoreinfo[i].name + '</div></div> </a></li>';
    }
    $$("#stat").append(li);
    $$("#stat li").on('click', function () {
        stataccc = this.id;
        mainView.router.loadPage({ url: "trans.html", force: true });
    });
});
//mahmoud saleh @prog
myApp.onPageInit('Brand', function (page) {
    $$('#Brands').html('');
    //var itemttitle = '';
    //var imgsource = '';
    //for (var t = 0; t < vendoreinfo.length; t++) {
    //    if (vendoreinfo[t].input == guesswhat) {
    //        imgsource = vendoreinfo[t].IMG;
    //    }
    //}
    //console.log(vendorearr);

    $$("#backbrand").on('click', function () {
        mainView.router.loadPage({ url: "home.html", force: true });
        $$(".vendore").show();
        $$(".bundle").hide();
        $$(".item").hide();
        $$("#tab2").addClass('active');
        $$("#tab3").removeClass('active');
        $$("#tab1").removeClass('active');
        $$("#t2").addClass('active');
        $$("#t3").removeClass('active');
        $$("#t1").removeClass('active');


    });

    getBrand(vendorSelected);
    //for (var k in vendorearr) {
    //    li = '';
    //    var arra = vendorearr[k];
    //    console.log(arra[0]);
    //    var Brandsarr = arra[0];
    //    for (var g in Brandsarr) {
    //        if (g == "null") { itemttitle = "Other" } else { itemttitle = g }
    //        //li += '<li id="' + g + '" ><a href="Brands.html" class="item-link item-content"><div class="item-media"><img src="' + imgsource + '" width="50" height="50"></div><div class="item-inner"><div class="item-title">' + itemttitle + '</div></div> </a></li>';
    //        li += `<div class="item-content card like_li" id="` + g + `">
    //                                    <div class="item-media"><img src="` + imgsource + `" width="80" /></div>
    //                                    <div class="item-inner">
    //                                        <div class="item-title">`+ itemttitle + `</div>
    //                                    </div>
    //                                    <div class="item-after">
    //                                        <i class="icon icon-next"></i>
    //                                    </div>
    //                                </div>`;
    //    }
    //    $$("#Brands").append(li);
    //}

    //$$("#Brands .like_li").on('click', function () {
    //    bundre = this.id;
    //    mainView.router.loadPage({ url: "Allitems.html", force: true });
    //});

});

//shit of history
myApp.onPageInit('orderhistory', function (page) {
    getHist();
    getHistoryByQuery('oh.orderdate');
    $$("#history").remove();
    $$("#history").hide();
    $$("#homeicon").removeClass('myicon-eoa-home-active');
    $$("#backhistory").on('click', function () {

        mainView.router.loadPage({
            url: "home.html",
            force: true
        });
    });

});

myApp.onPageInit('trans', function (page) {
    var nettottal_transctions = 0.0;
    var cridte_transctions = 0.0;
    var curencyTemp = "";




    GetTransction();
    $$("#total_outstand").html(nettottal_transctions + curencyTemp);
    $$("#total_note").html(nettottal_transctions + curencyTemp);
    $$("#backtransction").on('click', function () {
        mainView.router.loadPage({
            url: "home.html",
            force: true
        });
    });

    $$("#more").on('click', function () {
        mainView.router.loadPage({
            url: "traninfo.html",
            force: true
        });
    });

});

myApp.onPageInit('transinfo', function (page) {
    AppendTransactions();
});

myApp.onPageInit('myprofile', function (page) {

    var profilejson = localStorage.getItem('profile');
    profilejson = JSON.parse(profilejson);
    $$("#email").attr('placeholder', profilejson.email);
    $$("#first").attr('placeholder', profilejson.firstname);
    $$("#number").attr('placeholder', profilejson.PhoneNumber);
});

myApp.onPageInit('forget', function (page) {


    $$("#submite").on('click', function () {

        var verpass = $$("#verpass").val();
        var username = $$("#username").val();
        var newpass = $$("#newpass").val();
        var conpass = $$("#conpass").val();
        if (newpass == conpass) {
            var jas = {
                "email": username,
                "newpass": newpass,

            } //
            $$.post(EOA_URL + "api/wrg",
                jas,
                function (data, status) {

                    mainView.router.back();
                });
        } else {
            myApp.alert('password dose not match')
        }

    });

});

myApp.onPageInit('logout', function (page) {
    myApp.hideNavbar();
    myApp.hideToolbar();
    if (localStorage.getItem("lang") == 1) {
        Eglish();
    } else { Arabice(); }
    $$("#sign").click(function () {
        mainView.router.loadPage({ url: "profile.html", force: true });
    });
    //FK U
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
    //    // Postlogin(jas);



    //    Postlogin(jason);

    //    /* var validationresult = Validatelogin(jas);
    //     if (validationresult == ValidationSucessVal)
    //     {

    //         localStorage.setItem("username", username);
    //         localStorage.setItem("Password", password);
    //       Postlogin(jas);

    //     }
    //     else
    //     {
    //         myApp.alert( "Alert plesse corrextct info");
    //     }*/

    //    //$$(".modal-title").html('EOA');
    //});

    $$("#AR").on('click', function () {
        $$("body").css("direction", "rtl");
        loading = 'تحميل';
        localStorage.setItem('lang', 2);
        //Getloc();
        // $$(".back").css("transform","rotate(180deg)");
        $$(".backicon").addClass('fa-rotate-45');
        $$("#AR").addClass('active');
        $$("#EN").removeClass('active');
        $$("#MainPanel").addClass('panel-right');
        $$("#MainPanel").removeClass('panel-left');
        if (isAndroid) {
            $$('head').append(
                //'<link rel="stylesheet" href="css/Custom-ar.css">' +
                '<link id="link" class="lonk"  rel="stylesheet" href="css/framework7.material.rtl.css">'
            );
        } else {
            $$('head').append(
                '<link id="link" class="lonk"  rel="stylesheet" href="css/framework7.ios.rtl.css">');
        }
        $$("#orderlist1").html('طلباتي');
        $$("#orderstatus1").html('حالة الطلبات');
        $$("#barcodereg1").html('تسجيل الباركود');
        $$("#returnitem1").html('البضائع المسترجعة');
        $$("#Vendore").html('المورد');
        $$("#Setting1").html('الاعدادات');
        $$("#logout1").html('تسجيل الخروج');
        $$("#mypanel").attr('data-position', 'right');
        $$('#ioa').text('طلبات انكيوب');
        $$("#IPusn").attr('placeholder', 'ادخل اسم المستخدم');
        $$("#IPpass").attr('placeholder', 'ادخل كلمة السر');
        $$('#lgn').text('تسجيل الدخول');
        $$('#usn').text('اسم المستخدم');
        $$('#pass').text('كلمة السر');
        $$('#sign').text('حساب جديد');
        $$('#lgn1').text('تسجيل');
        $$('#fgpass').text('نسيت كلمة السر');
        $$('#AR').text('اللغة العربية');
        $$('#EN').text('English');

        Template7.data = {
            //'url:validate_vendore.html':{
            //        Validate_Vendore:'Validate Vendore',
            //        Accepted:'Accepted',
            //        Sent:'Sent',
            //        Refused:'Refused'
            //        
            //},
            'url:home.html': {
                home: 'الرئيسية',
                offers: 'عروض',
                Items: 'الاصناف',
                Vendores: 'الموردين',
                ordernum: 'Order Quantity',
                item: 'الصنف',
                vend2: 'Unitra',
                Description: 'Description',
                QTY: 'QTY',
                Price: 'Price',
                ThereisnoBundels: 'لايوجد عروض'
            },
            'url:itemdet.html': {
                Back: "الرجوع",
                ItemDetails: 'شرح الصنف',
                Vendore: 'المورد',
                Nestle: 'نستله',
                Quntity: 'الكمية',
                Textarea: 'Text area',
                Selingunite: 'وحدة البيع',
                Addtoorder: 'الاضافة الى الطلب',
                Quntity: 'الكمية',
                Selingunite: 'وحدة البيع',
                TottalPrice: 'السعر الكلي'
            },
            'url:Alldet.html': {
                Back: "الرجوع",
                ItemDetails: 'شرح الصنف',
                Vendore: 'المورد',
                Nestle: 'نستله',
                Quntity: 'الكمية',
                Textarea: 'Text area',
                Selingunite: 'وحدة البيع',
                Addtoorder: 'الاضافة الى الطلب',
                Quntity: 'الكمية',
                Selingunite: 'وحدة البيع',
                TottalPrice: 'السعر الكلي'
            },
            'url:itemdetret.html': {
                ReturnItem: 'اعادة الصنف',
                Vendore: 'المورد',
                Nestle: 'نستله',
                Quntity: 'الكمية',
                Textarea: 'Text area',
                Selingunite: 'وحدة البيع',
                ReturnItems: 'اعادة الصنف',
                Quntity: 'الكمية',
                Selingunite: 'وحدة البيع',
                TottalPrice: 'السعر الكلي'
            },
            'url:Returnedi.html': {
                Returneditems: 'الاصناف المعادة',
                ItemName: 'اسم الصنف',
                Qutatity: 'الكمية',
                AddItem: 'Add Item',
                Barcode: 'Bar code',
                Itemtitle: 'Item title',
                Search: 'البحث'
            },
            'url:RET.html': {
                Back: 'الرجوع',
                OrderRetunrningItems: 'طلب اعادة الاصناف',
                NetTotal: 'المجموع الصافي',
                ReturntheItems: 'اعادة الاصناف',
                Youdontitems: 'لايوجد اصناف يراد اعادتها'
            },
            'url:FOCs.html': {
                FreeofChargeItems: 'البضائع المجانية',
                Done: 'تم',
                YouGot: 'لديك',
                JODItems: 'د.ا اصناف',
                YouGots: 'لديك',
                JODItemss: 'د.ا اصناف'
            },
            'url:freeitems.html': {
                FreeQuntitesItems: 'البضائع المجانية',
                Done: 'تم',
                YouGot: 'لديك',
                YouGots: 'لديك',
                QTYItems: 'كمية اصناف',
                QTYItemss: 'كمية اصناف'
            },
            'url:promo.html': {
                Promotions: 'العروض',
                Promotionss: 'العروض',
                Order: 'الطلب',
                Gross: 'المجموع الكلي',
                Discount: 'الخصم',
                Tax: 'الضريبة',
                PromotedDiscount: 'Promoted Discount',
                NetTotal: 'السعر الاجمالي',
                YourOrder: 'الطلب',
                FreeofChargeItems: 'البضائع المجانية',
                SendOrder: 'ارسال الطلب'
            },
            'url:profile.html': {
                Login_Info: 'معلومات الشخصية',
                e_mail: 'البريد الاكتروني',
                Pleaseenteravalidemail: 'الرجاء ادخال البريد الاكتروني',
                password: 'كلمة السر',
                cdd: 'الرجاء ادخال كلمة السر صحيحة اكثر من ستة احرف',
                Confirempassword: 'تاكيد كلمة السر ',
                passworddosenotmatch: 'كلمة السر لاتطابق',
                PersonalInfo: 'معلومات شخصية ',
                Retailer: 'اسم المتجر',
                Pleasefillyourname: 'الرجاء ادخال الاسم',
                Mobilenumber: 'الهاتف الجوال',
                LandLine: 'الهاتف الارضي',
                comercialInfo: 'المعلومات التجارية',
                Name: 'الاسم',
                CommercialNumber: 'الرقم التجاري',
                PhoneNumber: 'رقم الهاتف',
                Profile: 'التسجيل',
                FirstName: 'First Name',
                Phonenumber: 'phone number',
                Clear: 'حذف',
                Savenext: 'حفظ ومتابعة',
            },
            'url:Allitems.html': {
                Back: 'الرجوع',
                ItemsforNestle: 'بضائع نستلة',
                Cancel: 'الغاء',
                Nothingfound: 'لايوجد تطابق'
            },
            'url:Orderlist.html': {
                Back: 'الرجوع',
                Reordring: 'اعادة الطلب'
            },
            'url:Qutaion.html': {
                Back: 'الرجوع',
                Order: 'الطلب',
                RequestQuotation: 'طلب تخفيضات',
                CancelRequest: ' الغاء الطلب',
                Gross: 'المجموع الكلي ',
                Discount: 'مجموع الخصم',
                Tax: 'مجموع الضريبة',
                Bundles: 'الحزم',
                NetTotal: 'المجموع الاجمالي',
                YoudonthaveanyordersnorBundels: 'لايوجد اصناف ولايوجد حزم'
            },
            'url:Returnedi.html': {
                Returneditems: ' البضائع المسترجعة',
                Back: 'الرجوع',
                Cancel: 'الغاء',
                Nothingfound: 'لايوجد تطابق'
            },
            'url:FOC.html': {},
            'url:OrderStatus.html': {
                OrderSatatus: ' حالة الطلبات',
                NEW: 'الجديد',
                Approved: 'الموافق عليه',
                History: 'تاريخ'
            },
            'url:setting.html': {

                Selectlanguge: 'اختر الغة',

                Version: 'النسخة',

                About: 'عن البرنامج'
            }

        }

    });


    $$("#EN").on('click', function () {
        // $$(".lonk").remove();
        $$("body").css("direction", "ltr");
        loading = 'Loading';
        localStorage.setItem('lang', 1);
        if (!isAndroid) { }

        // $$("#MainPanel").addClass('panel-left');
        //$$("#MainPanel").removeClass('panel-right');  
        $$('head').append(
            '<link rel="stylesheet" href="css/Custom-en.css">');
        //  $('link[href="style1.css"]').attr('href','style2.css');
        //   $$("#link").remove();
        $$("#orderlist1").html('My order');
        $$("#orderstatus1").html('Order Status');
        $$("#barcodereg1").html('Barcode reg');
        $$("#returnitem1").html('Return items');
        $$("#Vendore").html('Vendor');
        $$("#Setting1").html('Setting');
        $$("#logout1").html('Log out');
        $$("#mypanel").attr('data-position', 'left');
        $$("#MainPanel").addClass('panel-left');
        $$("#EN").addClass('active');
        $$("#AR").removeClass('active');
        $$('#ioa').text('Incube Ordring App');
        $$("#IPusn").attr('placeholder', 'Your password');
        $$("#IPpass").attr('placeholder', 'Your username');
        $$('#lgn').text('Log in');
        $$('#usn').text('Username');
        $$('#pass').text('password');
        $$('#sign').text('Sign up');
        $$('#lgn1').text('Log in')
        $$('#fgpass').text('forget password');
        $$('#AR').text('اللغة العربية');
        $$('#EN').text('English');

        Template7.data = {
            //'url:validate_vendore.html':{
            //        Validate_Vendore:'Validate Vendore',
            //        Accepted:'Accepted',
            //        Sent:'Sent',
            //        Refused:'Refused'
            //        
            //},
            'url:home.html': {
                home: 'Home',
                offers: 'Offers',
                Items: 'Items',
                Vendores: 'Vendors',
                ordernum: 'Orrder Quntaity',
                item: 'Item',
                vend2: 'Unitra',
                Description: 'Descrption',
                QTY: 'QTY',
                Price: 'Price',
                ThereisnoBundels: 'There is no Offers'
            },
            'url:itemdet.html': {
                Back: "Back",
                ItemDetails: 'Item Details',
                Vendore: 'Vendore',
                Nestle: 'Unitra',
                Quntity: 'Quantity',
                Textarea: 'Text area',
                Selingunite: 'Selling unite',
                Addtoorder: 'Add to order',
                Quntity: 'Quantity',
                Selingunite: 'Selling unite',
                TottalPrice: 'Total Price'
            },
            'url:Alldet.html': {
                ItemDetails: 'Item Details',
                Vendore: 'Vendor',
                Nestle: 'Unitra',
                Quntity: 'Quantity',
                Textarea: 'Text area',
                Selingunite: 'Selling unite',
                Addtoorder: 'Add to Order',
                Quntity: 'Quantity',
                Selingunite: 'Selling unite',
                TottalPrice: 'Total Price'
            },
            'url:itemdetret.html': {
                ReturnItem: 'Return Item',
                Vendore: 'Vendor',
                Nestle: 'Unitra',
                Quntity: 'Quantity',
                Textarea: 'Text area',
                Selingunite: 'Selling unite',
                ReturnItems: 'Return Item',
                Quntity: 'Quantity',
                Selingunite: 'Selling unite',
                TottalPrice: 'Total Price'
            },
            'url:Returnedi.html': {
                Returneditems: 'Returned items',
                ItemName: 'Item Name',
                Qutatity: 'Quantity',
                AddItem: 'Add Item',
                Barcode: 'Bar code',
                Itemtitle: 'Item title',
                Search: 'Search2'
            },
            'url:RET.html': {
                Back: 'Back',
                OrderRetunrningItems: 'Order Retunrning Items',
                NetTotal: 'NetTotal',
                ReturntheItems: 'Return the Items',
                Youdontitems: 'You dont have any return titems'
            },
            'url:FOCs.html': {
                FreeofChargeItems: 'Free of Charge Items',
                Done: 'Done',
                YouGot: 'YouGot',
                JODItems: 'JD Items',
                YouGots: 'You Got',
                JODItemss: 'JD Items'
            },
            'url:freeitems.html': {
                FreeQuntitesItems: 'Free Quntites Items',
                Done: 'Done',
                YouGot: 'You Got',
                YouGots: 'You Got',
                QTYItems: 'QTY Items',
                QTYItemss: 'QTY Items'
            },
            'url:promo.html': {
                Promotions: 'Promotions',
                Promotionss: 'Promotions',
                Order: 'Order',
                Gross: 'Gross',
                Discount: 'Discount',
                Tax: 'Tax',
                PromotedDiscount: 'Promoted Discount',
                NetTotal: 'Net Total',
                YourOrder: 'Your Order',
                FreeofChargeItems: 'Free of Charge Items',
                SendOrder: 'Send Order'
            },
            'url:profile.html': {
                Login_Info: 'Login Info',
                e_mail: 'e-mail',
                Pleaseenteravalidemail: 'Please enter a valid email',
                password: 'Password',
                cdd: 'Please enter correct password (more than 6 charcters)',
                Confirempassword: 'Confirm password',
                passworddosenotmatch: 'password dose not match',
                PersonalInfo: 'Personal Info',
                Retailer: 'Retailer',
                Pleasefillyourname: 'Please fill your name',
                Mobilenumber: 'Mobile Number',
                LandLine: 'Landline',
                comercialInfo: 'Commercial Info',
                Name: 'Name',
                CommercialNumber: 'Commercial Number',
                PhoneNumber: 'PhoneNumber',
                Profile: 'Sign up',
                FirstName: 'First Name',
                Phonenumber: 'Phone number',
                Clear: 'Clear',
                Savenext: 'Save and Continue',
            },
            'url:orders.html': {
                Orders: 'Orders',
                InProcess: 'In Process',
                pespi: 'Pepsi',
                nestlemilk: 'nestle milk',
                Alyoumyougart: 'Alyoum yougart',
                History: 'History'
            },
            'url:Allitems.html': {
                Back: 'Back',
                ItemsforNestle: 'Unitra Items',
                Cancel: 'Cancel',
                Nothingfound: 'Nothing found'
            },
            'url:Orderlist.html': {
                Back: 'Back',
                Reordring: 'Reordring'
            },
            'url:Qutaion.html': {
                Back: 'Back',
                Order: 'Order',
                RequestQuotation: 'Request Quotation',
                CancelRequest: ' Cancel Request',
                Gross: 'Gross ',
                Discount: 'Discount',
                Tax: 'Tax',
                Bundles: 'Bundles',
                NetTotal: 'Net Total',
                YoudonthaveanyordersnorBundels: 'You dont have any orders nor Bundels'
            },
            'url:Returnedi.html': {


                Returneditems: ' Returned items',
                Back: 'Back',
                Cancel: 'Cancel',
                Nothingfound: ' Nothing found',



            },
            'url:FOC.html': {},
            'url:OrderStatus.html': {
                OrderSatatus: ' Order Satatus',
                NEW: 'NEW',
                Approved: 'Approved',
                History: 'History'
            },
            'url:setting.html': {

                Selectlanguge: 'Select languge',

                Version: 'Version',

                About: 'About'
            }

        }








    });

    //$$(".toolbar").hide();    
    // 
    //$$(".navbar").hide();    


});

myApp.onPageInit('myprofile', function (page) {
    $$("#FinsihReturn").hide();
    mainView.showNavbar();
    mainView.showToolbar();
    var prof = localStorage.getItem('profile');
    prof = JSON.parse(prof);

    $$("#email").html(prof.email);
    $$('#first').attr("placeholder", prof.retailer);
    $$('#landline').attr("placeholder", prof.landline);
    $$('#name').attr("placeholder", prof.Location);
    $$('#commercial').attr("placeholder", prof.commercilanumber);
    $$('#mobilenumber').attr("placeholder", prof.mobilenumber);
    $$('#PhoneNumber').attr("placeholder", prof.PhoneNumber);

});

myApp.onPageInit('profile', function (page) {
    $$("#FinsihReturn").hide();
    $$("#navbar").show();
    /******** set defult map ******/

    //var mapCanvas = document.getElementById("map");
    //var mapOptions = {
    //    center: new google.maps.LatLng(31.945367, 35.928372),
    //    zoom: 4,
    //    disableDefaultUI: true
    //};
    //map = new google.maps.Map(mapCanvas, mapOptions);
    /******** Lessen to search box ******/
    initAutocomplete();
    //testo signup
    /******** Lessen to get current postion ******/
    $$('#myLoc').on('change', function () {
        console.log(document.querySelector('input[name="myLoc"]:checked'));
        if (document.querySelector('input[name="myLoc"]:checked')) {
            getCurrentPostion();
           // ('#myLoc').value = '0';
        } else {
            //('#myLoc').value = '1';
            initAutocomplete();
        }
    });
    $$("#submit").on("click", function () {
        var firstname = $$("#first").val();
        var lastname = $$("#last").val();
        var number = $$("#number").val();
        var mobnumber = $$("#mobnumber").val();
        var email = $$("#email").val();
        var buyerid = $$("#buyerid").val();
        var password = $$("#password").val();
        var copassword = $$("#conpass").val();
        var name = $$("#name").val();
        var commercialnumber = $$("#commercial").val();
        var phonenumber = $$("#phonenumber").val();
        if (password != copassword) {
            $$("#cpass").show();
            return;
        } else {
            $$("#cpass").hide();
        }
        email = email.toLowerCase();
        var posion = JSON.parse(localStorage.getItem('pos'));
        var jason = {
            "password": password,
            "email": email,
            "retailer": firstname,
            "landline": number,
            "mobilenumber": mobnumber,
            "name": name,
            "commercilanumber": commercialnumber,
            "PhoneNumber": phonenumber,
            "long": posion.lng,
            "lat": posion.lat

        }

        var jas = JSON.stringify(jason);
        var validateresult = Validatesignup(jas);
        if (validateresult == true) {
            localStorage.setItem("profile", jas);
            PostRegstration(jas);
            mainView.router.back(); 
        } else {
            //
        }
    });
});

myApp.onPageInit('Returneditems', function (page) {

    var lang = localStorage.getItem('lang');
    if (lang == 1) {
        $$(".search").attr('placeholder', 'Search');
    } else $$(".search").attr('placeholder', 'بحث');
    // FinsihReturn.hide();
    AppendRetunedItems();
    //  my$$App.alert('alert');
    $$("#BackButton").on('click', function () {

        mainView.router.loadPage({
            froce: true,
            url: 'home.html'
        });
        $$("#FinsihReturn").hide();
    });

    $$("#FinsihReturn").show();
    $$("#FinsihReturn").attr('display', 'block')
    $$('#retuneditmes').on('click', 'li', function () {
        //  myApp.alert('alert');

        var id = this.id;
        var pack = $$("#" + id).data('ItemID');
        var ItemID = $$("#" + id).data('ItemID');
        var ItemDescription = $$("#" + id).data('ItemDescription');
        var ItemCode = $$("#" + id).data('ItemCode');
        var ItemBarcode = $$(".test2").data('ItemBarcode');
        var UOM = $$("#" + id).data('UOM');
        var Tax = $$("#" + id).data('Tax');
        var VendorName = $$(this).data('VendorName');
        var Discount = $$("#" + id).data('Discount');
        var PiecesInPack = $$("#" + id).data('PiecesInPack');
        var IsDefaultPack = $$("#" + id).data('IsDefaultPack');
        var PackGroupID = $$("#" + id).data('PackGroupID');
        var IsAdded = $$("#" + id).data('IsAdded');
        var DiscountTypeID = $$("#" + id).data('DiscountTypeID');
        var price = $$("#" + id).data("price");
        var packid = $$("#" + id).data('PackID');
        var PackTypeID = $$("#" + id).data('pack');
        var RequiredQuanity = $$("#" + id).data('RequiredQuanity');

        if (DiscountTypeID == 2) {
            var Discount = (Discount * 100) / price;
            localStorage.setItem("DiscountR", Discount);
        } else {
            localStorage.setItem("DiscountR", Discount)
        }

        localStorage.setItem("PackTypeIDR", PackTypeID);
        localStorage.setItem("packidR", packid);
        localStorage.setItem("packR", pack);
        localStorage.setItem("ItemID", ItemID);
        localStorage.setItem("ItemDescriptionR", ItemDescription);
        localStorage.setItem("ItemCodeR", ItemCode);
        localStorage.setItem("ItemBarcodeR", ItemBarcode);
        localStorage.setItem("UOMR", UOM);
        localStorage.setItem("TaxR", Tax);
        localStorage.setItem('VendorNameR', VendorName)
        // localStorage.setItem("Discount",Discount);
        localStorage.setItem("PiecesInPackR", PiecesInPack);
        localStorage.setItem("IsDefaultPackR", IsDefaultPack);
        localStorage.setItem("PackGroupIDR", PackGroupID);
        localStorage.setItem("IsAddedR", IsAdded);
        localStorage.setItem("DiscountTypeIDR", 1);
        localStorage.setItem("PriceR", price);
        mainView.router.loadPage({
            url: 'itemdetret.html',
            force: true
        });
    });

    $$("#barcodereturn").on('click', function () {

        returnscan();
    })


    $$('#FinsihReturn').on('click', function () {

        mainView.router.load({
            url: 'Returnitems.html',
            froce: true
        });

    });
    mainView.showNavbar();
    mainView.showToolbar();
});

myApp.onPageInit('ItemDE', function (page) {

    $$(".toolbar").hide();
    var objclating = {
        "ItemID": localStorage.getItem("ItemID"),
        "ItemDescription": localStorage.getItem("ItemDescription"),
        "ItemCode": localStorage.getItem("ItemCode"),
        "ItemBarcode": localStorage.getItem("ItemBarcode"),
        "PackID": localStorage.getItem("packid"),
        "UOM": localStorage.getItem("UOM"),
        "Price": localStorage.getItem("Price"),
        "VendorName": localStorage.getItem("VendorName"),
        "Tax": localStorage.getItem("Tax"),
        "Discount": localStorage.getItem("Discount"),
        "PiecesInPack": localStorage.getItem("PiecesInPack"),
        "IsDefaultPack": localStorage.getItem("IsDefaultPack"),
        "PackGroupID": localStorage.getItem("PackGroupID"),
        "DiscountTypeID": localStorage.getItem("DiscountTypeID"),
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "RequiredQuanity": 1,
        "PackTypeID": localStorage.getItem("PackTypeID"),
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "ItemPromotedDiscount": 0
    }

    var name = '';

    var itemdata = getiteminfo(objclating);
    var img = GetImage(localStorage.getItem("ItemID"));

    $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
    $$("#Gross").html(curency + itemdata.gross.toFixed(3));
    $$("#Discount").html(curency + itemdata.discount.toFixed(3));
    $$("#Tax").html(curency + itemdata.tax.toFixed(3));
    $$("#vendorename").html(itemdata.itemname);
    $$("#itemimage").attr("src", img);




    var pickerCustomToolbar = myApp.picker({
        input: '.picker-device',
        value: [0, 0, 1],
        rotateEffect: true,
        toolbarTemplate: '<div style="background-color:#00695c" class="toolbar" style="direction:ltr">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '<a href="#" class="link toolbar-randomize-link"></a>' +
        '</div>' +
        '<div class="right">' +
        '<a style="color:white" href="#" class="link close-picker">Done</a>' +
        '</div>' +
        '</div>' +
        '</div>',
        cols: [
            {
                values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
            },
            {
                textAlign: 'left',
                values: ('0 1 2 3 4 5 6 7 8 9').split(' ')
            },
            {
                values: ('0 1 2 3 4 5 6 7 8 9').split(' ')
            },
        ],
        onOpen: function (picker) {
            picker.container.find('.close-picker').on('click', function () {

                //    console.log(parseInt($$('.picker-device').val()));


                var str = $$('.picker-device').val()
                str = str.replace(/\s/g, '');
                var number = parseInt(str);
                console.log(number);
                $$("#Qun").val(number);

                var price = 0.0;
                var QUN = $$("#Qun").val();
                var qun = parseInt(QUN);

                objclating.RequiredQuanity = qun;

                var itemdata = getiteminfo(objclating);
                var img = GetImage(localStorage.getItem("ItemID"));

                $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
                $$("#Gross").html(curency + itemdata.gross.toFixed(3));
                $$("#Discount").html(curency + itemdata.discount.toFixed(3));
                $$("#Tax").html(curency + itemdata.tax.toFixed(3));
                $$("#vendorename").html(itemdata.itemname);
                $$("#itemimage").attr("src", img);

                //                price = localStorage.getItem("Price");
                //                price = parseFloat(price);
                //                price = price * qun;
                //                var truncated1 = Math.floor(price * 100) / 100;
                //                $$("#Price").html(curency + net.toFixed(3));
                //                $$("#Gross").html(curency + gross.toFixed(3));
                //                $$("#Discount").html(curency + discountamt.toFixed(3));
                //                $$("#Tax").html(curency + tax.toFixed(3));
                localStorage.setItem("AFPrice", price);



            });
        }
    });

    $$("#FinsihReturn").hide();
    AppenedSumm();
    $$("#Back1").on('click', function () {
        mainView.router.loadPage({
            url: 'home.html',
            force: true
        });
        $$(".toolbar").show();
    });





    //     $$("#Gross").html(localStorage.getItem("Price"));
    //     $$("#Price").html(localStorage.getItem("Price"));
    //    $$("#Discount").html(localStorage.getItem("Discount"));
    //    $$("#Tax").html(localStorage.getItem("Tax"));
    //   comeback teze
    //$$('#UOM').on('click', 'li', function () {

    //    var ids = this.id;
    //    var packid = $$("#" + ids).data('PackID');
    //    var Discount = $$("#" + ids).data('Discount');
    //    var Tax = $$("#" + ids).data('Tax');
    //    var PackTypeID = $$("#" + ids).data('pack');
    //    var price = $$("#" + ids).data("Price");
    //    objclating.PackID = packid;
    //    objclating.Discount = Discount;
    //    objclating.Tax = Tax;
    //    objclating.Price = price;
    //    var itemdata = getiteminfo(objclating);
    //    var img = GetImage(localStorage.getItem("ItemID"));

    //    $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
    //    $$("#Gross").html(curency + itemdata.gross.toFixed(3));
    //    $$("#Discount").html(curency + itemdata.discount.toFixed(3));
    //    $$("#Tax").html(curency + itemdata.tax.toFixed(3));
    //    $$("#vendorename").html(itemdata.itemname);
    //    $$("#itemimage").attr("src", img);
    //    localStorage.setItem("Price", price);
    //    localStorage.setItem("PackTypeID", PackTypeID);
    //    localStorage.setItem("packid", packid);
    //$$("#Price").html(price);
    //        $$("#Discount").html(Discount);
    //        $$("#Tax").html(Tax);
    //        $$("#Gross").html(localStorage.getItem("Price"));
    //});
    // mainView.hideToolbar();
    console.log(localStorage.getItem("PackTypeID"));
    console.log(localStorage.getItem("packid"));
    mainView.showNavbar();
    // mainView.showToolbar();
    // $$('.toolbar-inner').remove();
    var order = {
        "ItemID": localStorage.getItem("ItemID"),
        "ItemDescription": localStorage.getItem("ItemDescription"),
        "ItemCode": localStorage.getItem("ItemCode"),
        "ItemBarcode": localStorage.getItem("ItemBarcode"),
        "PackID": localStorage.getItem("packid"),
        "UOM": localStorage.getItem("UOM"),
        "Price": localStorage.getItem("Price"),
        "Tax": localStorage.getItem("Tax"),
        "Discount": localStorage.getItem("Discount"),
        "PiecesInPack": localStorage.getItem("PiecesInPack"),
        "IsDefaultPack": localStorage.getItem("IsDefaultPack"),
        "PackGroupID": localStorage.getItem("PackGroupID"),
        "DiscountTypeID": localStorage.getItem("DiscountTypeID"),
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "RequiredQuanity": 1,
        "PackTypeID": localStorage.getItem("PackTypeID"),
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "ItemPromotedDiscount": 0
    }
    $$("#ItemDetails").html(localStorage.getItem("ItemDescription"));

    // $$("#Quntity").html(localStorage.getItem("PiecesInPack")); 

    $$("#OrderButton").on("click", function () {
        AppendItems();
        $$(".toolbar").show();

        var QUN = $$("#Qun").val();


        QUN2 = parseInt(QUN);
        if (QUN2 == 0) {
            QUN2 = 1
        }
        if (isNaN(QUN2)) {
            QUN2 = 1;
        }
        var stat = localStorage.getItem('Price');
        localStorage.setItem('AFPrice', stat);
        var order1 = {
            "ItemID": localStorage.getItem("ItemID"),
            "ItemDescription": localStorage.getItem("ItemDescription"),
            "ItemCode": localStorage.getItem("ItemCode"),
            "ItemBarcode": localStorage.getItem("ItemBarcode"),
            "PackID": localStorage.getItem("packid"),
            "UOM": localStorage.getItem("UOM"),
            "Price": localStorage.getItem("AFPrice"),
            "Tax": localStorage.getItem("Tax"),
            "Discount": localStorage.getItem("Discount"),
            "PiecesInPack": localStorage.getItem("PiecesInPack"),
            "IsDefaultPack": localStorage.getItem("IsDefaultPack"),
            "PackGroupID": localStorage.getItem("PackGroupID"),
            "DiscountTypeID": localStorage.getItem("DiscountTypeID"),
            "ItemCategoryID": 2,
            "DivisionID": 1,
            "BrandID": -1,
            "ItemCategory": "Small Format",
            "Division": "Small Formats",
            "Brand": null,
            "RequiredQuanity": QUN2,
            "PackTypeID": localStorage.getItem("PackTypeID"),
            "PromotedDiscount": 0,
            "CalculatedDiscount": 0,
            "ItemPromotedDiscount": 0
        }
        console.log(order1);

        var gross = order1.Price * order1.RequiredQuanity;
        var discountamount = gross * (order1.Discount / 100);
        var PackNetTottal = gross - discountamount;

        var Tax = PackNetTottal * (order1.Tax / 100);
        var Net = PackNetTottal + Tax;
        var calc = {
            "Gross": gross,
            "NetTottal": Net,
            "Tax": Tax,
            "Discount": discountamount
        }
        localStorage.setItem(order1.PackID, JSON.stringify(calc));

        console.log(JSON.stringify(calc));
        localStorage.setItem('order', order1);

        var found = false;

        if (vendoreorder[localStorage.getItem("VendorName")].length) {
            for (var i = 0; i < vendoreorder[localStorage.getItem("VendorName")].length; i++) {
                found = vendoreorder[localStorage.getItem("VendorName")][i].PackID == order1.PackID;
                if (found == true) {
                    vendoreorder[localStorage.getItem("VendorName")][i].RequiredQuanity = order1.RequiredQuanity + vendoreorder[localStorage.getItem("VendorName")][i].RequiredQuanity;
                    break;
                }

            }
        }
        if (!found) {
            vendoreorder[localStorage.getItem("VendorName")].push(order1);
        }
        console.log(vendoreorder[localStorage.getItem("VendorName")])

        localStorage.setItem('orderlist33', JSON.stringify(OrderList));




        /*OrderList.push(order1);
        localStorage.setItem('orderlist33',JSON.stringify(OrderList));
        console.log(OrderList);
      */

        $$(".Orders").attr("id", "Orders");
        mainView.router.load({
            url: 'home.html',
            froce: true
        });
        //       myApp.showTab('#tab2');
    });



    $$("#Qun").change(function () {

        //  var str = $$('.picker-device').val()
        //  str = str.replace(/\s/g, '');
        //        var str= parseInt($$("#Qun").val())
        //                var number = parseInt(str);
        //                console.log(number);
        //                $$("#Qun").val(number);

        var price = 0.0;
        var QUN = $$("#Qun").val();
        var qun = parseInt(QUN);

        objclating.RequiredQuanity = qun;
        var itemdata = getiteminfo(objclating);
        var img = GetImage(localStorage.getItem("ItemID"));

        $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
        $$("#Gross").html(curency + itemdata.gross.toFixed(3));
        $$("#Discount").html(curency + itemdata.discount.toFixed(3));
        $$("#Tax").html(curency + itemdata.tax.toFixed(3));
        $$("#vendorename").html(itemdata.itemname);
        $$("#itemimage").attr("src", img);






    });




});

//@prog start ss 
myApp.onPageInit('Allitemdet', function (page) {
    //@prog start get item list using qury 


    getItemDetailsFromBrandList(vendorSelected, itemSelected);
    jQuery(document).ready(function () {
        var x = $$("#mylist");
        x.removeClass('inputs-list');
    });




    return;
    //var objclating = {
    //    "ItemID": localStorage.getItem("ItemIDV"),
    //    "ItemDescription": localStorage.getItem("ItemDescriptionV"),
    //    "ItemCode": localStorage.getItem("ItemCodeV"),
    //    "ItemBarcode": localStorage.getItem("ItemBarcodeV"),
    //    "PackID": localStorage.getItem("packidV"),
    //    "UOM": localStorage.getItem("UOMV"),
    //    "Price": localStorage.getItem("PriceV"),
    //    "Tax": localStorage.getItem("TaxV"),
    //    "VendorName": localStorage.getItem("VendorNameV"),
    //    "Discount": localStorage.getItem("DiscountV"),
    //    "PiecesInPack": localStorage.getItem("PiecesInPackV"),
    //    "IsDefaultPack": localStorage.getItem("IsDefaultPackV"),
    //    "PackGroupID": localStorage.getItem("PackGroupIDV"),
    //    "DiscountTypeID": localStorage.getItem("DiscountTypeIDV"),
    //    "ItemCategoryID": 2,
    //    "DivisionID": 1,
    //    "BrandID": -1,
    //    "ItemCategory": "Small Format",
    //    "Division": "Small Formats",
    //    "Brand": null,
    //    "RequiredQuanity": 1,
    //    "PackTypeID": localStorage.getItem("PackTypeIDV"),
    //    "PromotedDiscount": 0,
    //    "CalculatedDiscount": 0,
    //    "ItemPromotedDiscount": 0
    //}

    //var name = '';
    //var img = GetImage(localStorage.getItem("ItemID"));

    //@prog come from query
    //var itemdata = getiteminfo(objclating);
    //localStorage.getItem("PriceV")
    //$$("#Pri1ce").html(curency + localStorage.getItem("PriceV"));
    //$$("#PriceV").html(curency + itemdata.nettotal.toFixed(3));
    //$$("#Gross").html(curency + itemdata.gross.toFixed(3));
    //$$("#Discount").html(curency + itemdata.discount.toFixed(3));
    //$$("#Tax").html(curency + itemdata.tax.toFixed(3));
    //$$("#vendorename").html(itemdata.itemname);
    //$$("#imgdet").attr("src", img);




    // $$("#ItemDetails").html(localStorage.getItem('ItemDescriptionV'));

    //$$("#imgdet").attr("src"


    //myShit
    jQuery(document).ready(function () {
        var x = $$("#mylist");
        x.removeClass('inputs-list');
    });




    mainView.showToolbar();
    $$("#FinsihReturnV").hide();
    AppenedSumm();
    $$("#Back1V").on('click', function () {
        mainView.router.loadPage({
            url: 'Allitems.html',
            force: true
        })
    });
    // $$("#PriceV").html(localStorage.getItem("PriceV"));
    $$('#UOMV').on('click', 'li', function () {

        var ids = this.id;
        var packidV = $$("#" + ids).data('PackID');
        var DiscountV = $$("#" + ids).data('Discount');
        var TaxV = $$("#" + ids).data('Tax');
        var PackTypeIDV = $$("#" + ids).data('pack');
        var priceV = $$("#" + ids).data("Price");
        objclating.PackID = packidV;
        objclating.Discount = DiscountV;
        objclating.Tax = TaxV;
        objclating.Price = priceV;
        var itemdata = getiteminfo(objclating);
        var img = GetImage(localStorage.getItem("ItemID"));

        $$("#Pri1ce").html(curency + itemdata.nettotal.toFixed(3));
        $$("#Gross").html(curency + itemdata.gross.toFixed(3));
        $$("#Discount").html(curency + itemdata.discount.toFixed(3));
        $$("#Tax").html(curency + itemdata.tax.toFixed(3));
        $$("#vendorename").html(itemdata.itemname);
        $$("#itemimage").attr("src", img);
        //localStorage.setItem("Price", priceV);
        //localStorage.setItem("PackTypeID", PackTypeIDV);
        //localStorage.setItem("packid", packidV);
        $$("#Price").html(price);
    });
    //  mainView.hideToolbar();
    console.log(localStorage.getItem("PackTypeIDV"));
    console.log(localStorage.getItem("packidV"));
    mainView.showNavbar();
    // mainView.showToolbar();
    // $$('.toolbar-inner').remove();
    var orderV = {
        "ItemID": localStorage.getItem("ItemIDV"),
        "ItemDescription": localStorage.getItem("ItemDescriptionV"),
        "ItemCode": localStorage.getItem("ItemCodeV"),
        "ItemBarcode": localStorage.getItem("ItemBarcodeV"),
        "PackID": localStorage.getItem("packidV"),
        "UOM": localStorage.getItem("UOMV"),
        "Price": localStorage.getItem("PriceV"),
        "Tax": localStorage.getItem("TaxV"),
        "Discount": localStorage.getItem("DiscountV"),
        "PiecesInPack": localStorage.getItem("PiecesInPackV"),
        "IsDefaultPack": localStorage.getItem("IsDefaultPackV"),
        "PackGroupID": localStorage.getItem("PackGroupIDV"),
        "DiscountTypeID": localStorage.getItem("DiscountTypeIDV"),
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "RequiredQuanity": 1,
        "PackTypeID": localStorage.getItem("PackTypeIDV"),
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "ItemPromotedDiscount": 0
    }
    //    $$("#imgdet").attr("src", "http://213.186.179.126:5010//InCubeApp/ItemsImages/" + localStorage.getItem("ItemID") + ".jpg")
    $$("#ItemDetailsV").html(localStorage.getItem("ItemDescriptionV"));

    // $$("#Quntity").html(localStorage.getItem("PiecesInPack")); 

    $$("#OrderButtonV").on("click", function () {
        debugger;

    });



    $$("#QunV").change(function () {

        var QUNV = $$("#QunV").val();
        var qunV = parseInt(QUNV);
        objclating.RequiredQuanity = qunV;
        var itemdata = getiteminfo(objclating);
        var img = GetImage(localStorage.getItem("ItemID"));
        // $$("#Pri1ce").html(curency + localStorage.getItem("PriceV"));
        $$("#PriceV").html(curency + itemdata.nettotal.toFixed(3));
        $$("#Pri1ce").html(curency + itemdata.gross.toFixed(3));
        $$("#Discount").html(curency + itemdata.discount.toFixed(3));
        $$("#Tax").html(curency + itemdata.tax.toFixed(3));
        $$("#vendorename").html(itemdata.itemname);
        $$("#itemimage").attr("src", img);

    });




});

myApp.onPageInit('OrderStatus', function (page) {

    $$("#FinsihReturn").hide();
    // GetOrderStatues();
    var idbund = localStorage.getItem('userid');
    var i1 = 1;
    var i2 = 1;
    var i1 = localStorage.getItem("CU_id" + idbund);
    var i2 = localStorage.getItem("OUT_id" + idbund);
    i1 = parseInt(i1);
    i2 = parseInt(i2);
    GetOrderStatfilter(i1, i2);
});

myApp.onPageInit('ItemDERet', function (page) {

    var pickerCustomToolbar = myApp.picker({
        input: '.picker-device',
        rotateEffect: true,
        toolbarTemplate: '<div style="background-color:#00695c" class="toolbar" style="direction:ltr">' +
        '<div class="toolbar-inner">' +
        '<div class="left">' +
        '<a href="#" class="link toolbar-randomize-link"></a>' +
        '</div>' +
        '<div class="right">' +
        '<a style="color:white" href="#" class="link close-picker">Done</a>' +
        '</div>' +
        '</div>' +
        '</div>',
        cols: [
            {
                values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            },
            {
                textAlign: 'left',
                values: ('0 1 2 3 4 5 6 7 8 9 0').split(' ')
            },
            {
                values: ('0 1 2 3 4 5 6 7 8 9 0').split(' ')
            },
        ],
        onOpen: function (picker) {
            picker.container.find('.close-picker').on('click', function () {

                //    console.log(parseInt($$('.picker-device').val()));


                var str = $$('.picker-device').val()
                str = str.replace(/\s/g, '');
                var number = parseInt(str);
                console.log(number);
                $$("#Qun").val(number);
            });
        }
    });




    $$("#FinsihReturn").hide();
    AppenedSumm();
    $$("#backinrreturn").on('click', function () {

        mainView.router.loadPage({
            url: 'Returnedi.html',
            force: true
        })
    });
    $$("#back").on('click', function () {
        // $$("#FinsihReturn").show();
    });
    $$('#UOM').on('click', 'li', function () {

        var ids = this.id;
        $$("#Gross").html(localStorage.getItem("Price"));
        var packid = $$("#" + ids).data('PackID');
        var PackTypeID = $$("#" + ids).data('pack');
        localStorage.setItem("PackTypeID", PackTypeID);
        localStorage.setItem("packid", packid);
    });

    console.log(localStorage.getItem("PackTypeID"));
    console.log(localStorage.getItem("packid"));
    mainView.showNavbar();
    mainView.showToolbar();
    var order = {
        "ItemID": localStorage.getItem("ItemIDR"),
        "ItemDescription": localStorage.getItem("ItemDescriptionR"),
        "ItemCode": localStorage.getItem("ItemCodeR"),
        "ItemBarcode": localStorage.getItem("ItemBarcodeR"),
        "PackID": localStorage.getItem("packidR"),
        "UOM": localStorage.getItem("UOMR"),
        "Price": localStorage.getItem("PriceR"),
        "Tax": localStorage.getItem("TaxR"),
        "Discount": localStorage.getItem("DiscountR"),
        "PiecesInPack": localStorage.getItem("PiecesInPackR"),
        "IsDefaultPack": localStorage.getItem("IsDefaultPackR"),
        "PackGroupID": localStorage.getItem("PackGroupIDR"),
        "DiscountTypeID": localStorage.getItem("DiscountTypeIDR"),
        "ItemCategoryID": 2,
        "DivisionID": 1,
        "BrandID": -1,
        "ItemCategory": "Small Format",
        "Division": "Small Formats",
        "Brand": null,
        "RequiredQuanity": 1,
        "PackTypeID": localStorage.getItem("PackTypeIDR"),
        "PromotedDiscount": 0,
        "CalculatedDiscount": 0,
        "ItemPromotedDiscount": 0
    }

    var img = GetImage(localStorage.getItem("ItemID"));
    $$("#imgret").attr("src", img);
    //$$("#imgret").attr('src','http://213.186.179.126:5010//InCubeApp/ItemsImages/'+items[i].ItemID+'.jpg')  
    $$("#ItemDetails").html(localStorage.getItem("ItemDescription"));
    $$("#Price").html(localStorage.getItem("Price"));
    // $$("#Quntity").html(localStorage.getItem("PiecesInPack")); 

    $$("#OrderButton").on("click", function () {

        var QUN = $$("#Qun").val();

        var QUN2 = parseInt(QUN);
        if (QUN2 == 0) {
            QUN2 = 1
        }
        if (isNaN(QUN2)) {
            QUN2 = 1;
        }
        var order1 = {
            "ItemID": localStorage.getItem("ItemIDR"),
            "ItemDescription": localStorage.getItem("ItemDescriptionR"),
            "ItemCode": localStorage.getItem("ItemCodeR"),
            "ItemBarcode": localStorage.getItem("ItemBarcodeR"),
            "PackID": localStorage.getItem("packidR"),
            "UOM": localStorage.getItem("UOMR"),
            "Price": localStorage.getItem("PriceR"),
            "Tax": localStorage.getItem("TaxR"),
            "Discount": localStorage.getItem("DiscountR"),
            "PiecesInPack": localStorage.getItem("PiecesInPackR"),
            "IsDefaultPack": localStorage.getItem("IsDefaultPackR"),
            "PackGroupID": localStorage.getItem("PackGroupIDR"),
            "DiscountTypeID": localStorage.getItem("DiscountTypeIDR"),
            "ItemCategoryID": 2,
            "DivisionID": 1,
            "BrandID": -1,
            "ItemCategory": "Small Format",
            "Division": "Small Formats",
            "Brand": null,
            "RequiredQuanity": QUN2,
            "PackTypeID": localStorage.getItem("PackTypeIDR"),
            "PromotedDiscount": 0,
            "CalculatedDiscount": 0,
            "ItemPromotedDiscount": 0
        }
        console.log(order1);

        var gross = order1.Price * order1.RequiredQuanity;
        var discountamount = gross * (order1.Discount / 100);
        var PackNetTottal = gross - discountamount;

        var Tax = PackNetTottal * (order1.Tax / 100);
        var Net = PackNetTottal + Tax;
        var calc = {
            "Gross": gross,
            "NetTottal": Net,
            "Tax": Tax,
            "Discount": discountamount
        }
        localStorage.setItem(order1.PackID, JSON.stringify(calc));

        console.log(JSON.stringify(calc));
        localStorage.setItem('order', order1);

        var found = false;

        if (vendorereturen[localStorage.getItem("VendorNameR")].length) {
            for (var i = 0; i < vendorereturen[localStorage.getItem("VendorNameR")].length; i++) {
                found = vendorereturen[localStorage.getItem("VendorNameR")][i].PackID == order1.PackID;
                if (found == true) {
                    vendorereturen[localStorage.getItem("VendorNameR")][i].RequiredQuanity = order1.RequiredQuanity + vendorereturen[localStorage.getItem("VendorNameR")][i].RequiredQuanity;
                    break;
                }

            }
        }
        if (!found) {
            vendorereturen[localStorage.getItem("VendorNameR")].push(order1);
        }
        console.log(vendorereturen[localStorage.getItem("VendorNameR")])







        console.log(ReturnedItems);
        localStorage.setItem('Returnitems', JSON.stringify(ReturnedItems));






        //   $$(".Orders").attr("id","Orders"); 
        mainView.router.load({
            url: 'Returnedi.html',
            froce: true
        });
        //  myApp.showTab('#tab2');
    });



    $$("#Qun").change(function () {

        var QUN = $$("#Qun").val();
        var qun = parseInt(QUN);
        var price = calcluteprice(order.Price, order.Discount, order.Tax, qun, order.DiscountTypeID);
        var truncated1 = Math.floor(price * 100) / 100;
        $$("#Price").html(truncated1);
        localStorage.setItem("Price", price);
    });




});

myApp.onPageInit('orderlist', function (page) {
    $$("#FinsihReturn").hide();
    mainView.showNavbar();
    mainView.showToolbar();
    $$("#reorderback").on('click', function () {
        mainView.router.loadPage({
            url: 'home.html',
            force: true
        });
    });
    AppenedOrders();
    //appened inner


});

//@prog  start brand list items
myApp.onPageInit('allitem', function (page) {

    $$('.vendorName').html(brandsVendorName);
    getBrandItemList(brandId, vendorSelected);



    $$("#FinsihReturn").hide();
    // AppendItemsVendore(vendorearr[guesswhat][0][bundre]);
    $$("#backbutt").on('click', function () {
        mainView.router.loadPage('Brands.html');

        //$$(".tab-link-highlight").css('transform', 'translate3d(100%, 0px, 0px)');
        //if (localStorage.getItem('lang') != 1) {
        //    $$(".tab-link-highlight").css('transform', 'translate3d(-100%, 0px, 0px)');
        //}
    });
    $$('#nes').on('click', 'li', function () {

        var id = this.id;
        var packV = $$("#" + id).data('ItemID');
        var ItemIDV = $$("#" + id).data('ItemID');
        var ItemDescriptionV = $$("#" + id).data('ItemDescription');
        var ItemCodeV = $$("#" + id).data('ItemCode');
        var ItemBarcodeV = $$(".test2").data('ItemBarcode');
        var UOMV = $$("#" + id).data('UOM');
        var TaxV = $$("#" + id).data('Tax');
        var DiscountV = $$("#" + id).data('Discount');
        var PiecesInPackV = $$("#" + id).data('PiecesInPack');
        var IsDefaultPackV = $$("#" + id).data('IsDefaultPack');
        var PackGroupIDV = $$("#" + id).data('PackGroupID');
        var IsAddedV = $$("#" + id).data('IsAdded');
        var DiscountTypeIDV = $$("#" + id).data('DiscountTypeID');
        var VendorNameV = $$("#" + id).data('VendorName');
        var priceV = $$("#" + id).data("price");
        var packidV = $$("#" + id).data('PackID');
        var PackTypeIDV = $$("#" + id).data('pack');
        var RequiredQuanityV = $$("#" + id).data('RequiredQuanity');

        if (DiscountTypeIDV == 2) {
            var DiscountV = (DiscountV * 100) / price;
            localStorage.setItem("DiscountV", DiscountV);
        } else {
            localStorage.setItem("DiscountV", DiscountV)
        }

        localStorage.setItem("PackTypeIDV", PackTypeIDV);
        localStorage.setItem("packidV", packidV);
        localStorage.setItem("packV", packV);
        localStorage.setItem("ItemIDV", ItemIDV);
        localStorage.setItem("ItemID", ItemIDV);

        localStorage.setItem("ItemDescriptionV", ItemDescriptionV);
        localStorage.setItem("ItemCodeV", ItemCodeV);
        localStorage.setItem("ItemBarcodeV", ItemBarcodeV);
        localStorage.setItem("UOMV", UOMV);
        localStorage.setItem("TaxV", TaxV);
        localStorage.setItem("VendorNameV", VendorNameV);
        // localStorage.setItem("Discount",Discount);
        localStorage.setItem("PiecesInPackV", PiecesInPackV);
        localStorage.setItem("IsDefaultPackV", IsDefaultPackV);
        localStorage.setItem("PackGroupIDV", PackGroupIDV);
        localStorage.setItem("IsAddedV", IsAddedV);
        localStorage.setItem("DiscountTypeIDV", 1);
        localStorage.setItem("PriceV", priceV);
        localStorage.setItem("Price", priceV);
        mainView.router.loadPage({
            url: 'Alldet.html',
            force: true
        });
    });



    var lang = localStorage.getItem('lang');
    if (lang == 1) {
        $$(".search").attr('placeholder', 'Search');
    } else $$(".search").attr('placeholder', 'بحث');






});

myApp.onPageInit('Setting', function (page) {

    var lang = localStorage.getItem('lang');
    if (lang == 1) {
        $$("#AR").removeClass('active');
        $$("#EN").addClass('active');
    } else {
        $$("#AR").addClass('active');
        $$("#EN").removeClass('active');
    }

    $$("#backsetting").on('click', function () {
        mainView.router.loadPage({ url: "home.html", force: true });
        AppendItems();
    });

    $$("#about").on('click', function () {
        mainView.router.loadPage({ url: "info.html", force: true });
    });


    //$$("#AR").on('click', function (){
    //      if($$("#AR").hasClass('active')){return;}
    //    $$("body").css("direction", "rtl");
    //    loading='تحميل';
    //    localStorage.setItem('lang',2);
    //    //Getloc();
    //   // $$(".back").css("transform","rotate(180deg)");
    //    $$(".backicon").addClass('fa-rotate-45');
    //    $$("#AR").addClass('active');
    //    $$("#EN").removeClass('active');
    //$$("#MainPanel").addClass('panel-right');
    //        $$("#MainPanel").removeClass('panel-left');
    //    if(isAndroid){
    //        $$('head').append(
    //                //'<link rel="stylesheet" href="css/Custom-ar.css">' +
    //            '<link id="link" class="lonk"  rel="stylesheet" href="css/framework7.material.rtl.css">'
    //        ); }
    //    else {
    //         $$('head').append(
    //        '<link id="link" class="lonk"  rel="stylesheet" href="css/framework7.ios.rtl.css">');
    //    }
    //    $$("#orderlist1").html('طلبات سابقة ');
    //    $$("#trans1").html(' كشف حساب');
    //    $$("#orderstatus1").html('حالة الطلبات');
    //    $$("#barcodereg1").html('تفعيل الموردين ');
    //    $$("#returnitem1").html('البضائع المسترجعة');
    //    $$("#Vendore").html('المورد');
    //    $$("#Setting1").html('الاعدادات');
    //    $$("#logout1").html('تسجيل الخروج');
    //    $$("#mypanel").attr('data-position', 'right');
    //    $$('#ioa').text('طلبات انكيوب');
    //    $$("#IPusn").attr('placeholder','ادخل اسم المستخدم');
    //    $$("#IPpass").attr('placeholder','ادخل كلمة السر');
    //    $$('#lgn').text('تسجيل الدخول');
    //    $$('#usn').text('اسم المستخدم');
    //    $$('#pass').text('كلمة السر');
    //    $$('#sign').text('حساب جديد');
    //    $$('#lgn1').text('تسجيل');
    //    $$('#fgpass').text('نسيت كلمة السر');
    //    $$('#AR').text('اللغة العربية');
    //    $$('#EN').text('English');
    //
    //  
    //   Template7.data = {
    ////'url:validate_vendore.html':{
    ////        Validate_Vendore:'Validate Vendore',
    ////        Accepted:'Accepted',
    ////        Sent:'Sent',
    ////        Refused:'Refused'
    ////        
    ////},
    //'url:about.html': {
    //     home:'الرئيسية',
    //     offers:'عروض',
    //     Items:'الاصناف',
    //     Vendores:'الموردين',
    //     ordernum:'Orrder Quntaity',
    //     item:'الصنف',
    //     vend2:'Nestle',
    //     Description:'Descrption',
    //     QTY:'QTY',
    //     Price:'Price',
    //     ThereisnoBundels:'لايوجد عروض'    
    //        },
    //'url:itemdet.html':{
    //Back:"الرجوع",    
    //ItemDetails:'شرح الصنف',
    //Vendore:'المورد',
    //Nestle:'نستله',        
    //Quntity:'الكمية',
    //Textarea:'Text area',
    //Selingunite:'وحدة البيع',
    //Addtoorder:'الاضافة الى الطلب',
    //Quntity:'الكمية',
    //Selingunite:'وحدة البيع',
    //TottalPrice:'السعر الكلي'
    //        },
    //'url:Alldet.html':{
    //Back:"الرجوع",    
    //ItemDetails:'شرح الصنف',
    //Vendore:'المورد',
    //Nestle:'نستله',        
    //Quntity:'الكمية',
    //Textarea:'Text area',
    //Selingunite:'وحدة البيع',
    //Addtoorder:'الاضافة الى الطلب',
    //Quntity:'الكمية',
    //Selingunite:'وحدة البيع',
    //TottalPrice:'السعر الكلي'
    //    },   
    //'url:itemdetret.html':{
    //ReturnItem:'اعادة الصنف',
    //Vendore:'المورد',
    //Nestle:'نستله',        
    //Quntity:'الكمية',
    //Textarea:'Text area',
    //Selingunite:'وحدة البيع',
    //ReturnItems:'اعادة الصنف',
    //Quntity:'الكمية',
    //Selingunite:'وحدة البيع',
    //TottalPrice:'السعر الكلي'             
    //        },
    //'url:Returnedi.html':{
    //Returneditems:'الاصناف المعادة',
    //ItemName:'اسم الصنف',
    //Qutatity:'الكمية',
    //AddItem:'Add Item',
    //Barcode:'Bar code',
    //Itemtitle:'Item title',
    //Search:'البحث'
    //        }, 
    //'url:RET.html':{
    //    Back:'الرجوع',
    //    OrderRetunrningItems:'طلب اعادة الاصناف',
    //    NetTotal:'المجموع الصافي',
    //    ReturntheItems:'اعادة الاصناف',
    //    Youdontitems:'لايوجد اصناف يراد اعادتها'
    //},
    //'url:FOCs.html':{
    //FreeofChargeItems:'البضائع المجانية',
    //Done:'تم',
    //YouGot:'لديك',
    //JODItems:'د.ا اصناف',
    //    YouGots:'لديك',
    //    JODItemss:'د.ا اصناف'
    //} ,
    //  'url:freeitems.html':{
    //      FreeQuntitesItems:'البضائع المجانية',
    //      Done:'تم',
    //      YouGot:'لديك',
    //      YouGots:'لديك',
    //      QTYItems:'كمية اصناف',
    //      QTYItemss:'كمية اصناف'
    //  } ,
    //    'url:promo.html':{
    //        Promotions:'العروض',
    //        Promotionss:'العروض',
    //        Order:'الطلب',
    //        Gross:'المجموع الكلي',
    //        Discount:'الخصم',
    //        Tax:'الضريبة',
    //        PromotedDiscount:'Promoted Discount',
    //        NetTotal:'السعر الاجمالي',
    //        YourOrder:'الطلب',
    //        FreeofChargeItems:'البضائع المجانية',
    //        SendOrder:'ارسال الطلب'
    //    },
    //'url:profile.html':{
    //Login_Info:'معلومات الشخصية',
    //e_mail:'البريد الاكتروني',
    //Pleaseenteravalidemail:'الرجاء ادخال البريد الاكتروني',
    //    password:'كلمة السر',
    //    cdd:'الرجاء ادخال كلمة السر صحيحة اكثر من ستة احرف',
    //    Confirempassword:'تاكيد كلمة السر ',
    //    passworddosenotmatch:'كلمة السر لاتطابق',
    //    PersonalInfo:'معلومات شخصية ',
    //    Retailer:'اسم المتجر',
    //    Pleasefillyourname:'الرجاء ادخال الاسم',
    //    Mobilenumber:'الهاتف الجوال',
    //    LandLine:'الهاتف الارضي',
    //    comercialInfo:'المعلومات التجارية',
    //    Name:'الاسم',
    //    CommercialNumber:'الرقم التجاري',
    //    PhoneNumber:'رقم الهاتف',
    //Profile:'التسجيل',
    //FirstName:'First Name',
    //Phonenumber:'phone number',
    //Clear:'حذف',
    //Savenext:'حفظ ومتابعة',
    //        },    
    //'url:orders.html':{
    //Orders:'Orders',
    //InProcess:'In Process',
    //pespi:'Pepsi',
    //nestlemilk:'nestle milk',
    //Alyoumyougart:'Alyoum yougart',
    //History:'History'
    //        },
    //'url:Allitems.html':{Back:'الرجوع',
    //                    ItemsforNestle:'بضائع نستلة',
    //                         Cancel:'الغاء',
    //                         Nothingfound:'لايوجد تطابق'
    //                        },
    //'url:Orderlist.html':{
    //        Back:'الرجوع',
    //        Reordring:'اعادة الطلب'
    //    },    
    //'url:Qutaion.html':{
    //        Back:'الرجوع',
    //        Order:'الطلب',
    //        RequestQuotation:'طلب تخفيضات',
    //        CancelRequest:' الغاء الطلب',
    //        Gross:'المجموع الكلي ',
    //        Discount:'مجموع الخصم',
    //        Tax:'مجموع الضريبة',
    //        Bundles:'الحزم',
    //        NetTotal:'المجموع الاجمالي',
    //    YoudonthaveanyordersnorBundels:'لايوجد اصناف ولايوجد حزم'
    //    },
    //'url:Returnedi.html':{
    //        Returneditems:' البضائع المسترجعة',
    //        Back:'الرجوع',
    //        Cancel:'الغاء',
    //        Nothingfound:'لايوجد تطابق'
    //    },
    //'url:FOC.html':{},
    //'url:OrderStatus.html':{
    //        OrderSatatus:' حالة الطلبات',
    //        NEW:'الجديد',
    //        Approved:'الموافق عليه',
    //        History:'تاريخ'
    //    },
    //'url:setting.html':{
    //            
    //            Selectlanguge:'اختر الغة',
    //        
    //        Version:'النسخة',
    //            
    //        About:'عن البرنامج'
    //        }
    //
    //    }
    //      var idbund=localStorage.getItem('userid');
    //            var i1=1;
    //                var i2=1;
    //            var i1=localStorage.getItem("CU_id"+idbund);
    //                var i2=localStorage.getItem("OUT_id"+idbund);
    //                i1=parseInt(i1);
    //                i2=parseInt(i2);
    //             GetItems(i1,i2);
    //});


    //$$("#EN").on('click', function (){
    //   // $$(".lonk").remove();
    //      if($$("#EN").hasClass('active')){return;}
    //    $$("body").css("direction", "ltr");
    //        $$("#link").remove();
    //  //  loading='Loading';
    //    localStorage.setItem('lang',1);
    //    if(!isAndroid){}
    //    
    //   // $$("#MainPanel").addClass('panel-left');
    //    //$$("#MainPanel").removeClass('panel-right');  
    //     $$('head').append(
    //            '<link rel="stylesheet" href="css/Custom-en.css">');
    //   //  $('link[href="style1.css"]').attr('href','style2.css');
    // //   $$("#link").remove();
    //     $$("#orderlist1").html('My order');
    //    $$("#orderstatus1").html('Order Status');
    //    $$("#barcodereg1").html('Vendors Validation');
    //    $$("#returnitem1").html('Return items');
    //    $$("#Vendore").html('Vendor');
    //    $$("#Setting1").html('Setting');
    //    $$("#logout1").html('Log out');
    //    $$("#mypanel").attr('data-position', 'left');
    //    
    //    $$("#MainPanel").addClass('panel-left');
    //     $$("#EN").addClass('active');
    //    $$("#AR").removeClass('active');
    //    $$('#ioa').text('Incube Ordring App');
    //    $$("#IPusn").attr('placeholder','Your password');
    //    $$("#IPpass").attr('placeholder','Your username');
    //    $$('#lgn').text('Log in');
    //    $$('#usn').text('Username');
    //    $$('#pass').text('password');
    //    $$('#sign').text('Sign up');
    //    $$('#lgn1').text('Log in')
    //    $$('#fgpass').text('forget password');
    //    $$('#AR').text('اللغة العربية');
    //    $$('#EN').text('English');
    //    
    //  Template7.data = {
    ////'url:validate_vendore.html':{
    ////        Validate_Vendore:'Validate Vendore',
    ////        Accepted:'Accepted',
    ////        Sent:'Sent',
    ////        Refused:'Refused'
    ////        
    ////},
    //'url:about.html': {
    //     home:'Home',
    //     offers:'Offers',
    //     Items:'Items',
    //     Vendores:'Vendors',
    //     ordernum:'Orrder Quntaity',
    //     item:'Item',
    //     vend2:'Nestle',
    //     Description:'Descrption',
    //     QTY:'QTY',
    //     Price:'Price',
    //     ThereisnoBundels:'There is no Offers'    
    //        },
    //'url:itemdet.html':{
    //Back:"Back",    
    //ItemDetails:'Item Details',
    //Vendore:'Vendore',
    //Nestle:'Nestle',        
    //Quntity:'Quantity',
    //Textarea:'Text area',
    //Selingunite:'Selling unite',
    //Addtoorder:'Add to order',
    //Quntity:'Quantity',
    //Selingunite:'Selling unite',
    //TottalPrice:'Total Price'
    //        },
    //'url:Alldet.html':{
    //ItemDetails:'Item Details',
    //Vendore:'Vendor',
    //Nestle:'Nestle',        
    //Quntity:'Quantity',
    //Textarea:'Text area',
    //Selingunite:'Selling unite',
    //Addtoorder:'Add to Order',
    //Quntity:'Quantity',
    //Selingunite:'Selling unite',
    //TottalPrice:'Total Price'   
    //    },   
    //'url:itemdetret.html':{
    //ReturnItem:'Return Item',
    //Vendore:'Vendor',
    //Nestle:'Nestle',        
    //Quntity:'Quantity',
    //Textarea:'Text area',
    //Selingunite:'Selling unite',
    //ReturnItems:'Return Item',
    //Quntity:'Quantity',
    //Selingunite:'Selling unite',
    //TottalPrice:'Total Price'                
    //        },
    //'url:Returnedi.html':{
    //Returneditems:'Returned items',
    //ItemName:'Item Name',
    //Qutatity:'Quantity',
    //AddItem:'Add Item',
    //Barcode:'Bar code',
    //Itemtitle:'Item title',
    //Search:'Search2'
    //        }, 
    //'url:RET.html':{
    //    Back:'Back',
    //    OrderRetunrningItems:'Order Retunrning Items',
    //    NetTotal:'NetTotal',
    //    ReturntheItems:'Return the Items',
    //    Youdontitems:'You dont have any return titems'
    //},
    //'url:FOCs.html':{
    //FreeofChargeItems:'Free of Charge Items',
    //Done:'Done',
    //YouGot:'YouGot',
    //JODItems:'JD Items',
    //    YouGots:'You Got',
    //    JODItemss:'JD Items'
    //} ,
    //  'url:freeitems.html':{
    //      FreeQuntitesItems:'Free Quntites Items',
    //      Done:'Done',
    //      YouGot:'You Got',
    //      YouGots:'You Got',
    //      QTYItems:'QTY Items',
    //      QTYItemss:'QTY Items'
    //  } ,
    //    'url:promo.html':{
    //        Promotions:'Promotions',
    //        Promotionss:'Promotions',
    //        Order:'Order',
    //        Gross:'Gross',
    //        Discount:'Discount',
    //        Tax:'Tax',
    //        PromotedDiscount:'Promoted Discount',
    //        NetTotal:'Net Total',
    //        YourOrder:'Your Order',
    //        FreeofChargeItems:'Free of Charge Items',
    //        SendOrder:'Send Order'
    //    },
    //'url:profile.html':{
    //Login_Info:'Login Info',
    //e_mail:'e-mail',
    //Pleaseenteravalidemail:'Please enter a valid email',
    //    password:'Password',
    //    cdd:'Please enter correct password (more than 6 charcters)',
    //    Confirempassword:'Confirm password',
    //    passworddosenotmatch:'password dose not match',
    //    PersonalInfo:'Personal Info',
    //    Retailer:'Retailer',
    //    Pleasefillyourname:'Please fill your name',
    //    Mobilenumber:'Mobile Number',
    //    LandLine:'Landline',
    //    comercialInfo:'Commercial Info',
    //    Name:'Name',
    //    CommercialNumber:'Commercial Number',
    //    PhoneNumber:'PhoneNumber',
    //Profile:'Registration',
    //FirstName:'First Name',
    //Phonenumber:'Phone number',
    //Clear:'Clear',
    //Savenext:'Save and Continue',
    //        },    
    //'url:orders.html':{
    //Orders:'Orders',
    //InProcess:'In Process',
    //pespi:'Pepsi',
    //nestlemilk:'nestle milk',
    //Alyoumyougart:'Alyoum yougart',
    //History:'History'
    //        },
    //'url:Allitems.html':{Back:'Back',
    //                    ItemsforNestle:'ItemsforNestle',
    //                         Cancel:'Cancel',
    //                         Nothingfound:'Nothing found'
    //                        },
    //'url:Orderlist.html':{
    //        Back:'Back',
    //        Reordring:'Reordring'
    //    },    
    //'url:Qutaion.html':{
    //        Back:'Back',
    //        Order:'Order',
    //        RequestQuotation:'Request Quotation',
    //        CancelRequest:' Cancel Request',
    //        Gross:'Gross ',
    //        Discount:'Discount',
    //        Tax:'Tax',
    //        Bundles:'Bundles',
    //        NetTotal:'Net Total',
    //     YoudonthaveanyordersnorBundels:'You dont have any orders nor Bundels'
    //    },
    //'url:Returnedi.html':{
    //        
    //        
    //        Returneditems:' Returned items',
    //        Back:'Back',
    //        Cancel:'Cancel',
    //        Nothingfound:' Nothing found',
    //    
    //    
    //    
    //    },
    //'url:FOC.html':{},
    //'url:OrderStatus.html':{
    //        OrderSatatus:' Order Satatus',
    //        NEW:'NEW',
    //        Approved:'Approved',
    //        History:'History'
    //    },
    //'url:setting.html':{
    //            
    //            Selectlanguge:'Select languge',
    //        
    //        Version:'Version',
    //            
    //        About:'About'
    //        }
    //
    //    }
    //   
    //  
    //  
    //  
    //   
    //  
    //}

    $$("#AR").on('click', function () {
        ;
        $$("#vers").html("النسخة");
        $$("#abo").html("عن البرنامج");
        $$("#lang").html("اختر الغة");
        $$("#set").html(" اعدادات");
        $$("#bc").html("الرجوع");
        Arabice();
        /*
        if(localStorage.getItem("lang")==1){
                 vendoreinfo[0].name="Nestle";
               
            vendoreinfo[1].name="Delmonti";
                
            }else{
            vendoreinfo[0].name="نستله";
   vendoreinfo[1].name="ديلمنونتي"; }
        */
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

        $$("#org").append(`<a id="home" href="home.html" class="link">
<i style="width:60px !important" id="homeicon" class="myicon-eoa-home-active"></i><span class="tab-link">` + lag.Home + `</span></a>
<a id="reorder" href="History.html" class="link">
<i id="reordericon"  class="myicon-eoa-order-history"></i><span >`+ lag.Orderistory + `</span></a> 
<a id="Orders22" href="catg.html" class="link"><i id="ordericon"  class="myicon-eoa-my-order"></i><span id="lengthon" class="badge">5</span><span >` + lag.MyOrder + `</span></a>
<a id="scan" onclick="scan();" href="#" class="link"><i class="myicon-eoa-scan"></i><span  style="padding-top: 8p2x;">` + lag.Scan + `</span></a>`);

        pagecounter();

        localitems = [];
        GetItems(customerids, 0);

        $$("#EN").removeClass('active');
        $$("#AR").addClass('active');
    });


    $$("#EN").on('click', function () {
        $$("#vers").html("Version");
        $$("#abo").html("About");
        $$("#lang").html("select language");
        $$("#set").html("Setting");
        $$("#bc").html("Back");
        Eglish();
        /*
        if(localStorage.getItem("lang")==1){
                 vendoreinfo[0].name="Nestle";
               
            vendoreinfo[1].name="Delmonti";
                
            }else{
            vendoreinfo[0].name="نستله";
   vendoreinfo[1].name="ديلمنونتي"; }
        
        */



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

        $$("#org").append(`<a id="home" href="home.html" class="link">
<i style="width:60px !important" id="homeicon" style="font-size:8px" class="icon-eoa-home-active"</i><span style="font-size:10px" class="tab-link">` + lag.Home + `</span></a>
<a id="reorder" href="History.html" class="link">
<i id="reordericon" class="myicon-eoa-order-history"></i><span >`+ lag.Orderistory + `</span></a> 
<a id="Orders22" href="catg.html" class="link"><i id="ordericon"  class="icon-eoa-my-order"></i><span id="lengthon" class="badge">5</span><span >` + lag.MyOrder + `</span></a>
<a id="scan" onclick="scan();" href="#" class="link"><i class="icon-scan"></i><span  style="padding-top: 8p2x;">` + lag.Scan + `</span></a>
<a  id="search" onclick="we()"  href="#" class="link open-about "><i id="searchicon" class="icon searchinactive"></i><span >` + lag.Hint + `</span></a>`);

        pagecounter();
        localitems = [];
        GetItems(customerids, 0)

        $$("#AR").removeClass('active');
        $$("#EN").addClass('active');

    });









});

myApp.onPageInit('Qutaion', function (page) {
    var dd = 0;
    var bundelprice22 = 0.0;
    $$('#Orders22').on('click', function () {

        mainView.router.loadPage({
            url: 'Qutaion.html',
            force: true
        });

    });

    $$("#FinsihReturn").hide();
    $$("#homeicon").removeClass('myicon-eoa-home-active');
    $$("#homeicon").addClass('myicon-eoa-home-not-active');
    $$("#searchicon").addClass('searchinactive');
    $$("#searchicon").removeClass('searchactive');
    $$("#reordericon").addClass('reorderinactive');
    $$("#reordericon").removeClass('reorderactive');
    $$("#ordericon").addClass('myicon-eoa-my-order-active');
    $$("#ordericon").removeClass('myicon-eoa-my-order');
    $$("#bk").on('click', function () {
        mainView.router.loadPage({
            url: 'home.html',
            force: true
        });
        $$("#Orders").hide();
        $$("#Bundles").hide();
        $$("#Qotoution").hide();
        $$("#Order").hide();
        $$("#sendbundle").hide();

    });
    mainView.showNavbar();
    mainView.showToolbar();
    $$("#edit").on("click", function () {

        $$(".li").toggleClass('non minus');
    });

    $$("#itemarrowup").on('click', function () {


        $("#ce").slideDown("slow");

        $$(this).hide();
        $$("#itemarrowdown").show();
    });

    $$("#itemarrowdown").on('click', function () {


        $("#ce").slideUp("slow");
        $$(this).hide();
        $$("#itemarrowup").show();

    });

    $$(".accordion-item").on('click', function () {

        $$(".accordion-item").toggleClass('accordion-item-expanded');

    });

    if (!OrderList.length && jQuery.isEmptyObject(mybundle)) {
        $$("#orderinfo").hide();
        $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
        return;
    }

    $$("#Cancel").on('click', function () {
        var string = '';
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) {
            string = 'Are you sure you want to cancel this order?'
        } else {
            string = 'هل انت متاكد من الغاءالطلب';
        }
        myApp.confirm(string, 'EOA',
            function () {
                OrderList = [];
                len = 0;
                pagecounter();

                localStorage.setItem('orderlist33', JSON.stringify(OrderList));
                $$("#list").empty();
                $$("#bundlelist").empty();
                mybundle = [];
                $$("#Net").html("0.00");
                $$("#des").html("0.00");
                $$("#tax").html("0.00 ");
                $$("#gro").html("0.00 ");
                $$("#orderinfo").hide();
                $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                localStorage.setItem('orderlist33', '');
                localStorage.setItem('mybundle', '');
            },
            function () {

            }
        );
    });

    var IOAl = localStorage.getItem('orderlist33');
    if (IOAl == '' || IOAl == null) { } else {
        var IOAlist = JSON.parse(IOAl);
        OrderList = IOAlist;
        html = '';

        for (var i = 0; i < IOAlist.length; i++) {
            //      if(IOAlist[i].RequiredQuanity==0){IOAlist[i].RequiredQuanity=1}
            var string = '';
            var lang = localStorage.getItem('lang');
            if (lang == 1) {
                string = 'Quantity'
            } else {
                string = 'كمية'
            }
            html += '<li  class="item-conte1nt test" id="' + IOAlist[i].ItemID + '"  data-ItemCode="' + IOAlist[i].ItemCode + '" data-ItemBarcode="' + IOAlist[i].ItemBarcode + '" data-PackID="' + IOAlist[i].PackID + '" data-UOM="' + IOAlist[i].UOM + '" data-RequiredQuanity="' + IOAlist[i].RequiredQuanity + '" data-Price="' + IOAlist[i].Price + '" data-Tax="' + IOAlist[i].Tax + '" data-Discount="' + IOAlist[i].Discount + '" data-PiecesInPack="' + IOAlist[i].PiecesInPack + '" data-IsDefaultPack="' + IOAlist[i].IsDefaultPack + '" data-PackGroupID="' + IOAlist[i].PackGroupID + '" data-IsAdded="' + IOAlist[i].IsAdded + '" data-DiscountTypeID="' + IOAlist[i].DiscountTypeID + '" data-ItemID="' + IOAlist[i].ItemID + '" data-ItemDescription="' + IOAlist[i].ItemDescription + '" data-pack="' + IOAlist[i].PackTypeID + '"><a href="#" style="color:black; padding-left:0% !important; " class="item-1link item-content"><i id="' + IOAlist[i].PackTypeID + '" style="margin-right:4%" class="li icon non"></i><div class="item-media"><img src="./images/icons/nes.jpg" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + IOAlist[i].ItemDescription + '</div><div class="item-after">' + string + ': ' + IOAlist[i].RequiredQuanity + '</div></div><div class="item-sub1title">' + IOAlist[i].Price + '</div></div></a></li>';

        }
        $$('#list').append(html);


        var obj = calclution_price(IOAlist);
        $$("#Net").html(curencyTemp + obj.nettotal.toFixed(3) + "");
        $$("#des").html(curencyTemp + obj.discount.toFixed(3) + "");
        $$("#tax").html(curencyTemp + obj.tax.toFixed(3) + "");
        $$("#gro").html(curencyTemp + obj.gross.toFixed(3) + "");
        var nettottal = obj.nettotal.toFixed(3);
        var REGROSS = obj.gross.toFixed(3);
        var RETAX = obj.tax.toFixed(3);
        var REDISCOUNT = obj.discount.toFixed(3);




    }


    var rind = localStorage.getItem('mybundle');
    if (mybundle == null || rind == "") { } else {

        var x = JSON.parse(rind);
        x = mybundle;
        arr = '';


        for (var k in mybundle) {
            if (mybundle.hasOwnProperty(k)) {

                var ordernum = i + 1;
                var t = '';
                for (var jo in bundellsname) {
                    if (jo == k) {
                        t = bundellsname[jo];
                    }
                }
                var pricinggg = 0.0;
                var string = k.substring(1, k.length);
                console.log("string");
                console.log(string);

                var quntitybundle = bundqun["Q" + string];
                console.log("quntitybundle");
                console.log(quntitybundle);
                console.log("pricebundle");
                console.log(bundvalue["V" + string]);
                pricinggg = bundvalue["V" + string] * parseInt(quntitybundle);
                bundelprice22 = bundelprice22 + pricinggg;

                arr += '<li id="" class="accordion-item bundaccord"><a href="#" class="item-content item-link"><i id="A' + string + '" style="margin-right:4%" class="li bundone icon none"></i> <div class="item-inner"> <div class="item-title" style="font-size:89%;">Unitra ' + t + '</div><div id="' + k + '" style="color:#00695c; font-size:89%" class"item-after">' + quntitybundle + '</div><div  style="color:#00695c;  font-size: 93%;" id="Pric1e' + k + '" class"item-after">' + pricinggg.toFixed(3) + '</div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-after"></div></div></div></li></ul><div class="content-block inset" style"    z-index: -100; pointer-events: none"><ul style="z-index=-999" id="AR' + k + '"></ul></div></div> </div></li>';

                dd = parseFloat(nettottal) + parseFloat(bundelprice22);
                console.log(dd.toFixed(3));
                if (!OrderList.length) {
                    dd = bundelprice22
                }
                $$("#bundlenettotal").html(curency + bundelprice22.toFixed(3));
                $$("#Net").html(curency + dd.toFixed(3));


            } else if (mybundle.hasOwnProperty(k) && !OrderList) {
                $$("#orderinfo").hide();
                $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                        <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                return;
            }
        }
        $$("#bundlelist").append(arr);

        Bundleprice(mybundle);
        for (var k in mybundle) {

            if (mybundle.hasOwnProperty(k)) {
                var bundleinner = mybundle[k];
                var BUTAX = 0.0;
                var BUGROSS = 0.0;
                var BUDISCOUNT = 0.0;
                var BUNETTOTTAL = 0.0;
                var NetTottal = 0.0;
                var ite2ms = '';
                for (var i = 0; i < bundleinner.length; i++) {
                    if (bundleinner[i] == null) {
                        ite2ms += '<li class="item-content"><div class="item-media"><i class="icon icon-f7"></i></div><div class="item-inner"><div class="item-title">Out of Stock</div><div class="item-after"><span class="badge">1</span></div></div></li>';
                    } else {
                        var itemdesc = bundleinner[i].ItemDescription;
                        ite2ms += '<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">' + itemdesc + '</div><div class="item-after"><span class="badge">1</span></div></div></li>';
                    }

                }
            }
            var d = JSON.stringify(ite2ms);
            console.log(d);
            $$("#AR" + k).append(ite2ms);
        }


        $$(".bundone").on('click', function () {
            var key = this.id;
            var dvi = $$(this).parent();
            var c = dvi.parent();
            var bundloc = c.index();
            var string = '';
            var langtext = localStorage.getItem('lang');
            if (langtext == 1) {
                string = 'Are you sure you want to Delete this bundle?'
            } else {
                string = 'هل تريد حذف هذه الحزمة؟';
            }
            myApp.confirm(string, 'EOA',
                function (value) {


                    console.log(mybundle[key]);
                    //            
                    var dval = calclution_price(mybundle[key]);

                    dd = dd - dval.nettotal;
                    bundelprice22 = bundelprice22 - dval.nettotal;
                    $$("#bundlenettotal").html(curency + bundelprice22.toFixed(3))
                    $$("#Net").html(curency + dd.toFixed(3) + curency);
                    delete mybundle[key];
                    c.remove();

                    var count = 0;
                    var i;

                    for (i in mybundle) {
                        if (mybundle.hasOwnProperty(i)) {
                            count++;
                        }
                    }
                    len = count;
                    console.log(len);
                    pagecounter();


                    if (!OrderList.length && jQuery.isEmptyObject(mybundle)) {
                        $$("#orderinfo").hide();
                        $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                        <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                    }
                    console.log(mybundle);
                });



        });

        $$(".bundaccord").once('click', function () {
            $$(".bundaccord").toggleClass('accordion-item-expanded');
        });



    }


    $$('#Q11ut').on('click', function () {
        console.log(mybundle);
        var bundlearray = [];
        for (var k in mybundle) {

            if (mybundle.hasOwnProperty(k)) {
                var bundleinner = mybundle[k];
                var d = new Date();
                var n = d.getTime();
                var i1 = localStorage.getItem("CU_id");
                var i2 = localStorage.getItem("OUT_id");
                i1 = parseInt(i1);
                i2 = parseInt(i2);
                var BundleJsonObject = {
                    "OrderID": 10,
                    "CustomerID": 1,
                    "OutletID": 1,
                    "EmployeeID": -1,
                    "DivisionID": -1,
                    "OrderDate": "0001-01-01T00:00:00",
                    "ItemPacks": bundleinner,
                    "OrdersStatus": 1,
                    "CreationSource": 3,
                    "OrderTypeID": 1,
                    "NetTotal": nettottal,
                    "GrossTotal": 0,
                    "Tax": 0,
                    "Discount": 0,
                    "PromotedDiscount": 0,
                    "TempOrderID": JSON.stringify(n)
                }


            }
            for (var i = 0; i < BundleJsonObject.ItemPacks.length; i++) {

                var proitemgross1 = 0.0;
                var proitemtotal1 = 0.0;
                var protax1 = 0.0;
                var prodescount1 = 0.0;
                var promteddiscount1 = 0.0;
                var proitemgross1 = BundleJsonObject.ItemPacks[i].Price * BundleJsonObject.ItemPacks[i].RequiredQuanity;
                if (BundleJsonObject.ItemPacks[i].DiscountTypeID == 2) {
                    prodescount1 = (BundleJsonObject.ItemPacks[i].Discount * 100) / proitemgross1;
                } else {
                    prodescount1 = BundleJsonObject.ItemPacks[i].Discount
                }

                prodescount1 = proitemgross1 * (prodescount1 / 100);
                proitemtotal1 = proitemgross1 - prodescount1;
                if (BundleJsonObject.ItemPacks[i].PromotedDiscount == 0) { } else {

                    promteddiscount1 = proitemtotal1 * (BundleJsonObject.ItemPacks[i].PromotedDiscount / 100);
                    proitemtotal1 = proitemtotal1 - promteddiscount1;
                    protax1 = proitemtotal1 * (BundleJsonObject.ItemPacks[i].Tax / 100);
                    proitemtotal1 = proitemtotal1 + protax1;


                }

                BundleJsonObject.Discount = BundleJsonObject.Discount + prodescount1 + promteddiscount1;
                BundleJsonObject.GrossTotal = BundleJsonObject.GrossTotal + proitemgross1;
                BundleJsonObject.NetTotal = BundleJsonObject.NetTotal + proitemtotal1;
                BundleJsonObject.Tax = BundleJsonObject.Tax + protax1;
                BundleJsonObject.PromotedDiscount = BundleJsonObject.PromotedDiscount + promteddiscount1;

            }

            bundlearray.push(BundleJsonObject);

        }
        console.log(bundlearray);
        myApp.showPreloader();
        $$.post("" + url + "/SendOrder",
            bundlearray,
            function (data, status) {

                myApp.hidePreloader();
            });

        $$("#bundlelist").html('');
    });

    var idbund = localStorage.getItem('userid');
    var i1 = 1;
    var i2 = 1;
    var i1 = localStorage.getItem("CU_id" + idbund);
    var i2 = localStorage.getItem("OUT_id" + idbund);
    i1 = parseInt(i1);
    i2 = parseInt(i2);

    var OrderJsonObject = {
        "OrderID": 10,
        "CustomerID": 10,
        "OutletID": 1,
        "EmployeeID": -1,
        "DivisionID": -1,
        "OrderDate": "0001-01-01T00:00:00",
        "ItemPacks": [],
        "OrdersStatus": 1,
        "CreationSource": 3,
        "OrderTypeID": 1,
        "NetTotal": nettottal,
        "GrossTotal": REGROSS,
        "Tax": RETAX,
        "Discount": REDISCOUNT,
        "PromotedDiscount": 0,
        "Bundles": null
    }
    console.log(JSON.stringify(OrderJsonObject));
    $$('#Qut').on('click', function () {


        var Restructofbundells = [];
        for (var key in mybundle) {
            var objopo = {
                "BundleItems": mybundle[key],
                "BundleID": key
            }
            Restructofbundells.push(objopo);
        }
        console.log(JSON.stringify(Restructofbundells));
        console.log(Restructofbundells);

        OrderJsonObject.Bundles = Restructofbundells;
        var OrderJsonObject2 = {
            "OrderID": 10,
            "CustomerID": i1,
            "OutletID": i2,
            "EmployeeID": -1,
            "DivisionID": -1,
            "OrderDate": "0001-01-01T00:00:00",
            "ItemPacks": IOAlist,
            "OrdersStatus": 1,
            "CreationSource": 3,
            "OrderTypeID": 1,
            "NetTotal": nettottal,
            "GrossTotal": REGROSS,
            "Tax": RETAX,
            "Discount": REDISCOUNT,
            "PromotedDiscount": 0,
            "Bundles": []
        }

        console.log(JSON.stringify(OrderJsonObject2));
        myApp.showPreloader(loading);
        if (!IOAlist.length) {
            OrderJsonObject.ItemPacks = null
        } else {
            OrderJsonObject.ItemPacks.push.apply(OrderJsonObject.ItemPacks, IOAlist);
        }
        //     OrderJsonObject.ItemPacks.push.apply( OrderJsonObject.ItemPacks,IOAlist);
        localStorage.setItem('orderr', JSON.stringify(OrderJsonObject));;
        console.log(IOAlist);
        console.log(OrderJsonObject);

        $$.post("" + url + "/QuotationValidation",
            OrderJsonObject,
            function (data, status) {




                if (data == "null") {
                    myApp.hidePreloader(loading);
                    myApp.alert('Network error please try again');
                    mainView.router.loadPage({
                        url: 'Qutaion.html',
                        force: true
                    });
                    return;
                }
                ordertosvae = OrderJsonObject;


                myApp.hidePreloader(loading);
                var krons = JSON.parse(data);
                console.log(krons);
                proorder = krons;
                promotionnettotal = krons.NetTotal;
                promotiondescount = krons.Discount;
                promotiontax = krons.Tax;
                promotiongross = krons.GrossTotal;
                localStorage.setItem('Qut', data);

                mainView.router.loadPage({
                    url: 'promo.html',
                    force: true
                });
            });

        console.log(SentOrders);




    });
    bundells_value = bundelprice22;
    var xmltext = $$("#bundlelist").html();
    localStorage.setItem('xml', xmltext);



    $$('#list li i').on('click', function () {
        var id = $$(this).parent();

        var index = $$(this).parent().index();

        console.log(OrderList);
        var string = '';
        var lang = localStorage.getItem('lang');
        if (lang == 1) {
            string = 'Are you sure you want to delete the item';
        } else {
            string = 'هل تريد حذف هذه السلعة';
        }
        myApp.confirm(string, 'EOA', function () {

            $$(id).remove();
            if (OrderList.length == 1) {
                var obj = calclution_price(OrderList);


                if (dd == 0) {
                    dd = obj.nettotal
                } else
                    dd = dd - obj.nettotal;
                $$("#Net").html(curency + dd.toFixed(3) + "");
                $$("#des").html(curency + obj.discount.toFixed(3) + "");
                $$("#tax").html(curency + obj.tax.toFixed(3) + "");
                $$("#gro").html(curency + obj.gross.toFixed(3) + "");

                OrderList.splice(index, 1);
                localStorage.setItem('orderlist33', JSON.stringify(OrderList));
            } else {
                OrderList.splice(index, 1);

                var obj = calclution_price(OrderList);
                localStorage.setItem('orderlist33', JSON.stringify(OrderList));

                if (dd == 0) {
                    dd = obj.nettotal
                } else
                    dd = dd - obj.nettotal;
                $$("#Net").html(curencyTemp + dd.toFixed(3) + "");
                $$("#des").html(curencyTemp + obj.discount.toFixed(3) + "");
                $$("#tax").html(curencyTemp + obj.tax.toFixed(3) + "");
                $$("#gro").html(curencyTemp + obj.gross.toFixed(3) + "");
            }
            var string = '';
            var lang = localStorage.getItem('lang');
            if (lang == 1) {
                string = 'Item Removed';
            } else {
                string = 'تم حذف الصنف';
            }
            myApp.alert(string, "EOA");


            if (!OrderList.length && jQuery.isEmptyObject(mybundle)) {

                pagecounter();



                if (!OrderList.length && jQuery.isEmptyObject(mybundle)) {
                    $$("#orderinfo").hide();
                    $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                }
                // console.log(mybundle);
                //             });









                $$("#orderinfo").hide();
                $$("#noorderinfo").html(`
                                <div class="row">
                                    <div class="col-100">
                                         <img src="images/eoa-empty-my-order.svg" width="120" height="120"  />
                                        <p>You dont have any orders </p>
                                        <p onclick ="backToHome()"; class="buttons-row">
                                            <a s href="#" class="button button-round my_green">Start Now</a>
                                        </p>
                                    </div>
                                </div>
                            `);
                return;
            }


            var obj = calclution_price(OrderList);
            $$("#Net").html(curencyTemp + dd.toFixed(3) + "");
            $$("#des").html(curencyTemp + obj.discount.toFixed(3) + "");
            $$("#tax").html(curencyTemp + obj.tax.toFixed(3) + "");
            $$("#gro").html(curencyTemp + obj.gross.toFixed(3) + "");
            pagecounter();


        });

    });

    if (!OrderList.length) {

    }


});
//@ testo2
myApp.onPageInit('pro', function (page) {



    $$("#probk").on('click', function () {

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
            console.log(vendoreorder[guessqout]);
            for (var i = 0; i < vendoreorder[guessqout].length; i++) {
                vendoreorder[guessqout][i].PackID = guessqout + vendoreorder[guessqout][i].PackID;
                vendoreorder[guessqout][i].ItemID = guessqout + vendoreorder[guessqout][i].ItemID;

            }
            console.log(vendoreorder[guessqout]);
            mainView.router.loadPage({
                url: 'home.html',
                force: true
            });
            $$('.toolbar').show();

        });


    });

    if (isAndroid) {
        $$(".androidtool").hide();
    }

    var bundhtml = localStorage.getItem('xml');

    // $$("#sendbund").append(bundhtml);

    $$(this).on('click', function () {

        $$(this).toggleClass('accordion-item-expanded');

    });
    $$("#FinsihReturn").hide();
    if (isIos) {
        mainView.hideToolbar();
    }
    $$("#FO1C").on('click', function () {
        mainView.router.loadPage({
            url: 'FOCs.html',
            force: true
        });
    });
    if (isIos) {
        $$('.toolbar').hide();
    }
    var qut = localStorage.getItem('Qut');
    var qutJ = JSON.parse(qut);

    if (!FOCitems.length) {


    } else {
        html = '';
        for (var i = 0; i < FOCitems.length; i++) {
            html += '<div class="item-content"> <div class="item-media"><i class="icon icon-f7"></i></div><div class="item-inner"> <div class="item-title">' + FOCitems[i].ItemDescription + '</div><div class="item-after">Quntitty: ' + FOCitems[i].RequiredQuanity + '</div> </div></div>';

        }
        $$("#frer").append(html);
    }


    $$("#itemarrowup1").on('click', function () {


        $("#ce1").slideDown("slow");

        $$(this).hide();
        $$("#itemarrowdown1").show();
    });

    $$("#itemarrowdown1").on('click', function () {

        $("#ce1").slideUp("slow");
        $$(this).hide();
        $$("#itemarrowup1").show();

    });
    var pro = qutJ.CalculatedPromotions;

    console.log(pro);
    console.log(JSON.stringify(pro));
    qut45 = '';

    if (pro == null) {
        pro = {}
    }

    for (var i = 0; i < pro.length; i++) {

        var FOC = false;
        var Dis = false;
        var Multi = false;
        var calcoptions = pro[i].CalculatedOptions;
        var PromotionID = pro[i].PromotionID;
        var innerpro = calcoptions[PromotionID];
        if (innerpro.length > 1) {
            for (var c = 0; c < innerpro.length; c++) {
                Multi = true;

                var CalculatedPromotionDetai = innerpro[0].CalculatedPromotionDetails;
                var OptionID = innerpro[0].OptionID;
                var innerobject = CalculatedPromotionDetai[OptionID];
                var DetailTypeID = innerobject[0].DetailTypeID;
                if (DetailTypeID == 3 || DetailTypeID == 10 || DetailTypeID == 5 || DetailTypeID == 4) {
                    FOC = true;
                } else {
                    Dis = true;
                }

            }



        } else {

            var CalculatedPromotionDetai = innerpro[0].CalculatedPromotionDetails;
            var OptionID = innerpro[0].OptionID;
            var innerobject = CalculatedPromotionDetai[OptionID];
            var DetailTypeID = innerobject[0].DetailTypeID;
            if (DetailTypeID == 3 || DetailTypeID == 10 || DetailTypeID == 5 || DetailTypeID == 4) {
                FOC = true;
            } else {
                Dis = true;
            }
        }

        //    console.log("FOC ="+FOC+"Dis ="+Dis+"Multi ="+Multi+" count ="+i);

        var descrption_string = '';
        if (FOC == true && Dis == true && Multi == false) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Free Items and Discount"; } else { descrption_string = "اصناف مجانية وخصم" }

        } else if (FOC == false && Dis == true && Multi == false) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Discount"; } else { descrption_string = "خصم"; }
            // descrption_string = "Discount";
        } else if (FOC == true && Dis == false && Multi == false) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Free Items" } else { descrption_string = "بضائع مجانية" }
            // descrption_string = "Free Items";
        } else if (FOC == true && Dis == true && Multi == true) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Multiple options"; } else { descrption_string = "خيرات متعددة"; }
            // descrption_string = "Multiple options";
        } else if (FOC == true && Dis == false && Multi == true) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Free Items"; } else { descrption_string = "بضائع مجانية"; }
            //  descrption_string = "Free Items";
        } else if (FOC == false && Dis == true && Multi == true) {
            if (localStorage.getItem("lang") == 1) { descrption_string = "Discount" } else { descrption_string = "خصم" }
            // descrption_string = "Discount";
        }

        var vendname = '';
        vendname = getnamevendore(guessqout);
        //qut45 += '<li class="item-divider">' + vendname + ' ' + descrption_string + ' (' + (i + 1) + ')</li><li><fieldset id="group' + i + '"><ul style="margin-left:0%" class="bendlist" id=' + pro[i].PromotionID + '></ul></fieldset></li>';
        qut45 += `<div class="card">
                        <div class="card-header">`+ vendname + ' ' + descrption_string + ' (' + (i + 1) + `) <span class="coupon-end"> <i class="icon myicon-eoa-coupon"></i> </span></div>
                           <div class="card-content">
                            <div class="list-block media-list">
 
								<div id="group` + i + `">
								<ul style="margin-left:0%" class="bendlist" id=` + pro[i].PromotionID + `>
 
								</ul>
								</div>
							</div>
                           </div>
                        </div>`;
    }
    $$("#list92").append(qut45);

    for (var l = 0; l < pro.length; l++) {

        var t = pro[l].CalculatedOptions;
        var c = pro[l].PromotionID;
        var x = t[c];
        var detid = ''

        for (var f = 0; f < t[c].length; f++) {
            var d = x[f].OptionID;
            var n = x[f].CalculatedPromotionDetails;
            var g = n[d];
            var input = JSON.stringify(c) + JSON.stringify(d);
            var unijson = JSON.parse(input);

            detid += '<div><div id="' + input + '"></div></div>';
        }
        $$("#" + pro[l].PromotionID).append(detid);
    }

    for (var l = 0; l < pro.length; l++) {

        var t = pro[l].CalculatedOptions;
        var c = pro[l].PromotionID;
        var x = t[c];
        var detid = '';
        for (var f = 0; f < t[c].length; f++) {
            var d = x[f].OptionID;
            var n = x[f].CalculatedPromotionDetails;
            var g = n[d];
            var input = JSON.stringify(c) + JSON.stringify(d);
            var unijson = JSON.parse(input);

            var qut77 = '';

            for (var m = 0; m < g.length; m++) {
                localStorage.setItem(g[m].DetailID, JSON.stringify(g[m]));
                var k = g[m].DetailTypeID;

                var desc = g[m].Description;
                var var92 = '10% !important;'
                if (isAndroid) {
                    var92 = '10% !important;'
                } else {
                    var92 = '0% !important;'
                }
                //qut77 = ' <li id="' + g[m].DetailTypeID + '"> <label class="label-checkbox item-content"> <input class="value" type="radio" checked="checked" name="group' + l + '" value="' + input + '"><div class="item-media" style="padding-top:' + var92 + '"><i class="icon icon-form-checkbox"></i></div><div class="item-inner"><div class="item-title-row"> </div> <div class="item-text" style="margin-right:auto">' + desc + '</div>  </div> </label></li>';
                qut77 = `<li class="item-content" id="` + g[m].DetailTypeID + `">
                                          <div class="item-inner">
										   <label class="label-radio item-content">
												<input type="radio"  name="group` + l + `" value="` + input + `" checked>
												<div class="item-media">
												  <i class="icon icon-form-radio"></i>
												</div>
												<div class="item-inner">
												  <div class="item-title">`+ desc + `</div>
												</div>
											 </label>
                                          </div>
                                        </li>`;
                //radiocheck
                localStorage.setItem(input, JSON.stringify(g[m]));
            }
            $$("#" + input).append(qut77);
        }

    }
    $$('#tab1').on('show', function () {

        $$("#listorder").html('');
    });
    $$('#tab2').on('show', function () {




        var vr = localStorage.getItem('Qut');
        var vr1 = JSON.parse(vr);
        var vr2 = vr1.ItemPacks;





        $$(".itemtotla").on('click', function () {

            $$(".itemtotla").toggleClass('accordion-item-expanded');

        });



        freeitems = [];



        var packids = [11, 52, 26];

        var getimage = '';

        for (var f = 0; f < vendoreinfo.length; f++) {
            if (vendoreinfo[f].input == guessqout) {
                getimage = vendoreinfo[f].IMG;

            }
        }

        console.log(freeitems);
        if (!freeitems) { } else {
            freestring = '';
            for (var i = 0; i < freeitems.length; i++) {
                freestring += '<li  class="item-conte1nt test"><a style="color:black" href="#" class="item-lin1k item-content"><div class="item-media"><img src="' + getimage + '" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + freeitems[i].ItemDescription + '</div><div class="item-after">Quantity: ' + freeitems[i].RequiredQuanity + '</div></div><div class="item-subtitle">' + freeitems[i].Price + '</div></div></a></li>';

            }
            $$("#freeitem").append(freestring);
        }





        $$("#freequn").on('click', function () {
            QTY = 10;


            FOC = focvalue;
            //    myApp.addNotification({
            //        title: 'Free of Charge Items',
            //        message: 'please choss from the item list with '+QTY+' QTY Amount'
            //    });




            console.log('foc');

        });
        FOCstring = '';
        FRQstring = '';



        var arr = [];
        var checkedValue = null;
        var inputElements = document.getElementsByClassName('value');
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue = inputElements[i].value;
                arr.push(checkedValue);
            }
        }




        calclutepromotions(arr, guessqout);
        console.log(qutJ.NetTotal);
        console.log(qutJ.Discount);
        console.log(qutJ.Tax);
        console.log(qutJ.GrossTotal);

        var jordan = calclution_price(proorder.ItemPacks);
        var proiovi = jordan.nettotal + bundells_value;
        $$("#probundells").html(bundells_value.toFixed(2));
        $$("#protottal").html(curency + proiovi.toFixed(2));
        $$("#proDiscount").html(curency + jordan.discount.toFixed(2));
        $$("#proTax").html(curency + jordan.tax.toFixed(2));
        $$("#proGross").html(curency + jordan.gross.toFixed(2));
        $$("#promotedDiscount").html("" + jordan.prodiscount.toFixed(2) + curency);

        var orderappend = proorder.ItemPacks;
        var orderlistwithpromotion = '';


        proorder.Discount = 0;
        proorder.GrossTotal = 0;
        proorder.NetTotal = 0;
        proorder.Tax = 0;
        proorder.PromotedDiscount = 0;


        var getimage2 = '';

        for (var f = 0; f < vendoreinfo.length; f++) {
            if (vendoreinfo[f].input == guessqout) {
                getimage2 = vendoreinfo[f].IMG;

            }
        }
        for (var i = 0; i < proorder.ItemPacks.length; i++) {


            var proitemgross = 0.0;
            var proitemtotal = 0.0;
            var protax = 0.0;
            var prodescount = 0.0;
            var promteddiscount = 0.0;
            var c = orderappend[i];
            var string = '';
            var lang = localStorage.getItem('lang');
            if (lang == 1) {
                string = 'Quantity'
            } else {
                string = 'كمية'
            }
            orderlistwithpromotion += '<li  class="item-conte1nt test" id="' + proorder.ItemPacks[i].ItemID + '"><a href="#" style="color:black" class="item1-link item-content"><div class="item-media"><img src="' + getimage2 + '" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + proorder.ItemPacks[i].ItemDescription + '</div><div class="item-after">' + proorder.ItemPacks[i].Price + '</div></div><div class="item-subtitle">' + string + ':  ' + proorder.ItemPacks[i].RequiredQuanity + '</div></div></a></li>';

            proitemgross = proorder.ItemPacks[i].Price * proorder.ItemPacks[i].RequiredQuanity;
            if (proorder.ItemPacks[i].DiscountTypeID == 2) {
                prodescount = (proorder.ItemPacks[i].Discount * 100) / proitemgross;
            }

            prodescount = proitemgross * (proorder.ItemPacks[i].Discount / 100);
            proitemtotal = proitemgross - prodescount;
            if (proorder.ItemPacks[i].PromotedDiscount == 0) { } else {

                promteddiscount = proitemtotal * (proorder.ItemPacks[i].PromotedDiscount / 100);
                proitemtotal = proitemtotal - promteddiscount;
                protax = proitemtotal * (proorder.ItemPacks[i].Tax / 100);
                proitemtotal = proitemtotal + protax;


            }

            proorder.Discount = proorder.Discount + prodescount + promteddiscount;
            proorder.GrossTotal = proorder.GrossTotal + proitemgross;
            proorder.NetTotal = proorder.NetTotal + proitemtotal;
            proorder.Tax = proorder.Tax + protax;
            proorder.PromotedDiscount = proorder.PromotedDiscount + promteddiscount;
        }
        $$("#listorder").append(orderlistwithpromotion);


        var jordan = calclution_price(proorder.ItemPacks);
        var proiovi = jordan.nettotal + bundells_value;
        $$("#probundells").html(bundells_value.toFixed(2));
        $$("#protottal").html(curency + proiovi.toFixed(2));
        $$("#proDiscount").html(curency + jordan.discount.toFixed(2));
        $$("#proTax").html(curency + jordan.tax.toFixed(2));
        $$("#proGross").html(curency + jordan.gross.toFixed(2));
        $$("#promotedDiscount").html("" + jordan.prodiscount.toFixed(2) + curency);


        $$("#button").on('click', function () {

            myApp.showPreloader(loading);
            var d = new Date();
            var n = d.getTime();
            proorder.TempOrderID = JSON.stringify(n);


            proorder.Bundles = null;



            proorder.PromotedItems = freeitems;

            for (var k in testfocs) {
                proorder.PromotedItems.push.apply(proorder.PromotedItems, testfocs[k].array);
            }

            for (var k in TFRQ) {
                proorder.PromotedItems.push.apply(proorder.PromotedItems, TFRQ[k].array);
            }

            console.log(proorder.PromotedItems);
            //            remove_duplicates(proorder.PromotedItems);
            console.log(proorder.PromotedItems);

            var promotionarray = [];
            for (var i = 0; i < proorder.PromotedItems.length; i++) {
                proorder.PromotedItems[i].Price = 0;
                proorder.PromotedItems[i].Discount = 0;
                proorder.PromotedItems[i].Tax = 0;
            }
            promotionarray.push.apply(proorder);
            console.log(JSON.stringify(proorder));

            var trl = '';
            for (var t = 0; t < vendoreinfo.length; t++) {
                if (vendoreinfo[t].input == guessqout) {
                    trl = vendoreinfo[t].URL;
                }
            }

            console.log("URLLLLLLLL" + trl)
            $$.post("" + trl + "/SendOrder",
                proorder,
                function (data, status) {

                    //                if(data=="Saving Failed"){
                    //                   
                    //                }
                    mybundle[guessqout] = [];
                    vendoreorder[guessqout] = [];

                    JSON.parse(data);
                    var id0 = data.slice(1, -1);
                    ListofIds = ListofIds.concat(id0);

                    var IdStrg = id0.slice(21);
                    var newTemp = IdStrg.replace(/"/g, '\'');
                    var newTemp3 = IdStrg.replace(/"/g, "'");
                    var text = "'" + IdStrg + "'";
                    console.log(text);
                    savedarray = [];
                    if (typeof statusstring === "undefined") {
                        statusstring = "";
                    }
                    if (statusstring == "") {
                        statusstring = statusstring + text;
                    } else {
                        statusstring = statusstring + ',' + text;
                    }
                    statusstring = statusstring + ',' + text;
                    console.log(statusstring);
                    localStorage.setItem('stat', statusstring);
                    var string = localStorage.getItem('stat');

                    if (typeof sentordersstring === "undefined") {
                        sentordersstring = ""
                    }
                    //   sentordersstring = sentordersstring.concat(statusstring);
                    console.log(sentordersstring);
                    var id = localStorage.getItem('userid');

                    data = statusstring;
                    arr = $.unique(data.split(','));
                    data = arr.join(",");

                    var jsondata = {
                        "_id": id,
                        "History": data
                    }
                    var urlAjax = EOA_URL + "api/History";
                    $$.ajax({
                        method: "post",
                        url: urlAjax,
                        contentType: 'application/json',
                        data: JSON.stringify(jsondata),
                        dataType: "json",
                        success: function (data, status, xhr) {

                            console.log(data);

                        }
                    });
                    localStorage.setItem('orderlist33', '');
                    localStorage.setItem('mybundle', '');

                    console.log(proorder.TempOrderID);

                    var stroee = localStorage.getItem("SentOrders");
                    if (stroee == null) {
                        SentOrders.push(ordertosvae);
                    } else {
                        SentOrders = JSON.parse(stroee);

                        SentOrders.push(ordertosvae);
                        //sentordersstring=sentordersstring.concat(JSON.stringify(SentOrders));


                    }
                    localStorage.setItem("SentOrders", JSON.stringify(SentOrders));
                    mainView.router.loadPage({
                        url: 'home.html',
                        force: true,
                        ignoreCache: true
                    });
                    //contactsCallback.trigger();
                    myApp.hidePreloader(loading);

                    console.log(status);
                    console.log(data);
                    if (id0 == "Saving Failed") {
                        var string3 = "";
                        if (localStorage.getItem("lang") == 1) {
                            //string3="network error please try a gain";
                            string3 = "Saving Failed";
                            // myApp.alert("Saving Failed");

                        }
                        else {
                            string3 = "خطاء في حفظ الطلب";
                        }
                        myApp.alert(string3, "EOA");
                    } else {
                        var string1 = "";
                        var string2 = "";
                        if (localStorage.getItem("lang") == 1) {
                            string = "Order Saved Successfully";
                            string2 = "Thanks";
                        } else {
                            string = "تم حفظ الطلب بنجاح";
                            string2 = "شكرا لك";

                        }
                        myApp.alert(string, string2, "EOA");
                        //myApp.alert(string2, "EOA");
                    }


                    $$('.toolbar-bottom').show();
                    $$(".toolbar").show();
                    if (isAndroid) {
                        $$(".androidtool").show();
                    }
                });



        });

    });
});

myApp.onPageInit('FreeQun', function (page) {
    $$("#FinsihReturn").hide
    obj = TFRQ["FR" + FRQDY];
    FRQUN = TFRQ["FR" + FRQDY].FRQ;
    var FRQ = 0;
    AppendFreeQTYCards(TFRQ["FR" + FRQDY].array, TFRQ["FR" + FRQDY].arr);
    $$("#closeW").on('click', function () {
        AppendFreeQTYCards(TFRQ["FR" + FRQDY].array, TFRQ["FR" + FRQDY].arr);
        myApp.closeModal(".login-screen");
    });
    $$("#AAW").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
    $$("#AA1W").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
    $$("#BBW").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));
    $$("#BB1W").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));
    $$("#after").html(FOCAmount + '/' + FOC);
    $$("#after2").html(FOCAmount + '/' + FOC);
    AppendFreeQTYItems(TFRQ["FR" + FRQDY].packids, TFRQ["FR" + FRQDY].arr);
    $$("#open").on('click', function () {
        myApp.loginScreen();
    });
    $$("#donefree").on('click', function () {

        mainView.router.back();
        $$("#Ws" + TFRQ["FR" + FRQDY].arr).html(TFRQ["FR" + FRQDY].FRQcurrent);
    });




    $$("#FreeQTY li").on('click', function () {
        var IdFoc = this.id;
        var string = '';
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) {
            string = 'please add your item quantity ?'
        } else {
            string = 'ادخل الكمية المطلوبة';
        }
        myApp.prompt(string, 'EOA',
            function (value) {
                if (value == '') {
                    value = "1";
                }

                if (arrQTY(TFRQ["FR" + FRQDY].array > TFRQ["FR" + FRQDY].FRQ)) { } else
                    TFRQ["FR" + FRQDY].FRQcurrent = arrQTY(TFRQ["FR" + FRQDY].array);

                $$("#AAW").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
                $$("#AA1W").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
                $$("#BBW").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));
                $$("#BB1W").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));

                value = parseInt(value);
                var jsonfree = localStorage.getItem("FRQ" + IdFoc);
                var jsonfree = JSON.parse(jsonfree);

                var string = '';
                var langtext = localStorage.getItem('lang');
                if (langtext == 1) {
                    string = 'your value exceed the limit of the promotion'
                } else {
                    string = 'لقد وصلت الحد الاقصى من هذا الاعلان';
                }


                var c = TFRQ["FR" + FRQDY];
                if (value > TFRQ["FR" + FRQDY].FRQ) {
                    myApp.alert(string);
                    //  return;
                } else

                    if (arrQTY(TFRQ["FR" + FRQDY].array) > TFRQ["FR" + FRQDY].FRQ) {
                        myApp.alert(string);
                        //   return;
                    } else

                        if (!TFRQ["FR" + FRQDY].array.length) {

                            jsonfree.RequiredQuanity = value;
                            TFRQ["FR" + FRQDY].array.push(jsonfree);
                            //    return;
                        } else

                            if (arrQTY(TFRQ["FR" + FRQDY].array) + value > TFRQ["FR" + FRQDY].FRQ) {
                                var lang = localStorage.getItem('lang');
                                var string = '';
                                if (lang == 1) {
                                    string = 'you have reached the limite of promotion'
                                } else {
                                    string = 'لقد وصلت الحد الاقصى من هذا العرض'
                                }
                                myApp.alert(string);
                                // return;

                            } else

                                if (TFRQ["FR" + FRQDY].array.length) {
                                    var bool = false;
                                    for (var i = 0; i < TFRQ["FR" + FRQDY].array.length; i++) {
                                        if (TFRQ["FR" + FRQDY].array[i].PackID == jsonfree.PackID) {
                                            bool = true;
                                            TFRQ["FR" + FRQDY].array[i].RequiredQuanity = TFRQ["FR" + FRQDY].array[i].RequiredQuanity + value;
                                            break;
                                        }
                                    }
                                    if (bool == false) {
                                        jsonfree.RequiredQuanity = value;
                                        TFRQ["FR" + FRQDY].array.push(jsonfree);
                                    }
                                }

                TFRQ["FR" + FRQDY].FRQcurrent = arrQTY(TFRQ["FR" + FRQDY].array);
                $$("#AAW").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
                $$("#AA1W").html(TFRQ["FR" + FRQDY].FRQcurrent.toFixed(2));
                $$("#BBW").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));
                $$("#BB1W").html(TFRQ["FR" + FRQDY].FRQ.toFixed(2));

                $$("#QW" + IdFoc).html(jsonfree.RequiredQuanity);
                //  $$("#PW"+IdFoc).html(Priceofitem);
                img = '<img src="./images/icons/check-symbol.svg" width="16">';
                $$("#CHW" + IdFoc).append(img);

                console.log(TFRQ["FR" + FRQDY].array);
            },
            function (value) {

            }
        );
        $$('.modal').on('opened', function () {
            $$(".modal-text-input").attr('type', 'tel');
            $$(".modal-text-input").attr('pattern', '[0-9]*');
        });
    });
    mainView.hideToolbar();

});

myApp.onPageInit('FOCs', function (page) {
    $$("#FinsihReturn").hide();
    var lang = localStorage.getItem('lang');
    if (lang == 1) { } else {
        $$(".open-login-screen").css("float", 'left')
    }
    obj = testfocs["FO" + FOCDY];



    $$("#AA").html(testfocs["FO" + FOCDY].foccurrent);
    $$("#AA1").html(testfocs["FO" + FOCDY].foccurrent);
    $$("#BB").html(testfocs["FO" + FOCDY].focval);
    $$("#BB1").html(testfocs["FO" + FOCDY].focval);
    /////////////////////////////////////////////////////
    $$("#after").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval.toFixed(2));
    $$("#after2").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval);
    /////////////////////////////////////////////////////
    $$("#after").html('You Got' + testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval + 'JD Items');
    $$("#after2").html('You Got' + testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval + 'JOD Items');

    ///////////////////////////////////////////////
    AppendFOCItems();
    AppendFOCards(testfocs["FO" + FOCDY].array, testfocs["FO" + FOCDY].arr);
    FOC = testfocs["FO" + FOCDY].focval;
    FOCAmount = 0;
    /////////////////////
    $$("#close").on('click', function () {

        AppendFOCards(testfocs["FO" + FOCDY].array, testfocs["FO" + FOCDY].arr);
        myApp.closeModal(".login-screen");
    });
    $$("#open").on('click', function () {

        myApp.loginScreen();
    });
    $$("#doneFOCs").on('click', function () {
        mainView.router.back();
        myApp.showTab('#tab2');
        $$("#W" + testfocs["FO" + FOCDY].arr).html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
    });
    $$("#allitems li").on('click', function () {

        var IdFoc = this.id;
        var Priceofitem = 0;
        var jsonfree = localStorage.getItem("FOC" + IdFoc);
        var jsonfree = JSON.parse(jsonfree);
        var string = '';
        var langtext = localStorage.getItem('lang');
        if (langtext == 1) {
            string = 'Please enter the required quantity'
        } else {
            string = '  الرجاء ادخال الكمية';
        }
        myApp.prompt(string, 'EOA',
            function (value) {
                if (value == '') {
                    value = "1";
                }

                var bool = false;
                testfocs["FO" + FOCDY].foccurrent = arrprice(testfocs["FO" + FOCDY].array);
                console.log(testfocs["FO" + FOCDY].array);




                $$("#AA").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
                $$("#AA1").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
                $$("#BB").html(testfocs["FO" + FOCDY].focval.toFixed(2));
                $$("#BB1").html(testfocs["FO" + FOCDY].focval.toFixed(2));
                /////////////////////////////////////////////////////
                $$("#after").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval.toFixed(2));
                $$("#after2").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval.toFixed(2));
                /////////////////////////////////////////////////////
                $$("#after").html('You Got' + testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval.toFixed(2) + 'JD Items');
                $$("#after2").html('You Got' + testfocs["FO" + FOCDY].foccurrent.toFixed(2) + '/' + testfocs["FO" + FOCDY].focval.toFixed(2) + 'JD Items');


                var string = '';
                var langtext = localStorage.getItem('lang');
                if (langtext == 1) {
                    string = 'your value exceed the limit of the promotion'
                } else {
                    string = 'لقد وصلت الحد الاقصى من هذا الاعلان';
                }


                value = parseInt(value);
                if ((value * jsonfree.Price) > testfocs["FO" + FOCDY].focval) {

                    myApp.alert(string, "EOA");
                    //   return;
                } else
                    if (arrprice(testfocs["FO" + FOCDY].array) > testfocs["FO" + FOCDY].focval) {
                        myApp.alert(string, "EOA");
                        //  return;      
                    } else
                        if (!testfocs["FO" + FOCDY].array.length) {
                            jsonfree.RequiredQuanity = value;
                            testfocs["FO" + FOCDY].array.push(jsonfree);
                            //     return;
                        } else
                            if ((arrprice(testfocs["FO" + FOCDY].array) + (value * jsonfree.Price) > testfocs["FO" + FOCDY].focval)) {
                                myApp.alert(string, "EOA");
                                // return;   
                            } else
                                if (testfocs["FO" + FOCDY].array.length) {
                                    for (var i = 0; i < testfocs["FO" + FOCDY].array.length; i++) {
                                        console.log(value);
                                        if (testfocs["FO" + FOCDY].array[i].PackID == jsonfree.PackID) {
                                            bool = true;
                                            testfocs["FO" + FOCDY].array[i].RequiredQuanity = testfocs["FO" + FOCDY].array[i].RequiredQuanity + value;
                                        }
                                    }
                                    if (bool == true) { } else {
                                        jsonfree.RequiredQuanity = value;
                                        testfocs["FO" + FOCDY].array.push(jsonfree);
                                    }
                                }

                testfocs["FO" + FOCDY].foccurrent = arrprice(testfocs["FO" + FOCDY].array);
                console.log(testfocs["FO" + FOCDY].array);




                $$("#AA").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
                $$("#AA1").html(testfocs["FO" + FOCDY].foccurrent.toFixed(2));
                $$("#BB").html(testfocs["FO" + FOCDY].focval.toFixed(2));
                $$("#BB1").html(testfocs["FO" + FOCDY].focval.toFixed(2));
                /////////////////////////////////////////////////////
                $$("#after").html(testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval);
                $$("#after2").html(testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval);
                /////////////////////////////////////////////////////
                $$("#after").html('You Got' + testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval + 'JD Items');
                $$("#after2").html('You Got' + testfocs["FO" + FOCDY].foccurrent + '/' + testfocs["FO" + FOCDY].focval + 'JD Items');




            },
            function (value) {

            }
        );
        $$('.modal').on('opened', function () {
            $$(".modal-text-input").attr('type', 'tel');
            $$(".modal-text-input").attr('pattern', '[0-9]*');
        });
    });
    mainView.hideToolbar();
});

function calcluteprice(Price, Discount, Tax, Quntity, DiscountType) {

    var total = 0.0;
    if (Price == 0) {
        total = 0.0;
    } else {
        var gross = Quntity * Price;
        var TaxAmaount = (Tax / 100) * gross;
        if (DiscountType == 2) {
            total = (gross + TaxAmaount) - Discount;
        } else {
            var Discountperc = (Discount / 100) * gross;
            total = (gross + TaxAmaount) - Discountperc;
        }
    }
    return total;
}

function PostRegstration(postData) {
    console.log(postData);
    myApp.showPreloader(loading);
    var urlAjax = EOA_URL + "api/reg";
    $$.ajax({
        method: "post",
        url: urlAjax,
        contentType: 'application/json',
        data: postData,
        dataType: "json",

        success: function (data, status, xhr) {
            if (data.message == "user existe") {
                myApp.hidePreloader();
                myApp.alert('User Existe', "EOA");
                return;
            }
            localStorage.setItem('userid', data._id);

            myApp.hidePreloader();
            var string = '';
            var lnag = localStorage.getItem('lang');
            if (lnag == 1) {
                string = 'Thank you for your Registration'
            } else {
                string = ' نشكرك على التسجيل'
            }
            myApp.alert(string, "EOA");
        },
        error: function (data, xhr) {
            var string = '';
            var lnag = localStorage.getItem('lang');
            if (lnag == 1) {
                string = 'Error please try again later'
            } else {
                string = ' هناك خطاء خاول مرة اخرى'
            }
            myApp.hidePreloader();
            myApp.alert(string, "EOA");
        }
    });
}
//function showSearch() {
//    $$('#search_on_all_items').addClass('hidden_element');
//    $$('#search_form').removeClass('hidden_element');
//}
//$$('.searchbar-cancel').on('click', function () {
//    $$('#search_on_all_items').removeClass('hidden_element');
//    $$('#search_form').addClass('hidden_element');
//});
