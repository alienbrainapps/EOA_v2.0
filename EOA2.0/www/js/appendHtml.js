var offset = 0;
var offsetVendor = 0;
var offsetOffers = 0;
var Html_EL = '';
var vendor_EL = '';
var offers_EL = '';

function getItemByQuery() {

    db.transaction(function (tx) {

        var query = "SELECT * FROM items LIMIT " + offset + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            $$('#itemlist').html('');
            for (var r = 0; r < resultSet.rows.length; r++) {
                Html_EL += `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" id="ii`+ resultSet.rows.item(r).iteItemID + `"  src="` + resultSet.rows.item(r).ItemImageName + `">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">product name</div>
								<div class="item-text">`+ resultSet.rows.item(r).ItemDescription + `</div>
								<div class="item-title-row">`+ resultSet.rows.item(r).VendorName + `<span class="price_in_card">` + resultSet.rows.item(r).Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link">Add To Order</a>
										<a href="#" class="link view_details_btn"
						id="` + resultSet.rows.item(r).ItemID + `" 
						data-VendorName="`+ resultSet.rows.item(r).VendorName + `" 
						data-ItemCode="`+ resultSet.rows.item(r).ItemCode + `" 
						data-ItemBarcode="`+ resultSet.rows.item(r).ItemBarcode + `" 
						data-PackID="`+ resultSet.rows.item(r).PackID + `" 
						data-UOM="`+ resultSet.rows.item(r).UOM + `" 
						data-RequiredQuanity="`+ resultSet.rows.item(r).RequiredQuanity + `" 
						data-Price="prog" data-Tax="prog" 
						data-Discount="prog" 
						data-PiecesInPack="`+ resultSet.rows.item(r).PiecesInPack + `" 
						data-IsDefaultPack="`+ resultSet.rows.item(r).IsDefaultPack + `" 
						data-PackGroupID="`+ resultSet.rows.item(r).PackGroupID + `" 
						data-IsAdded="`+ resultSet.rows.item(r).IsAdded + `" 
						data-DiscountTypeID="`+ resultSet.rows.item(r).DiscountTypeID + `" 
						data-ItemID="`+ resultSet.rows.item(r).ItemID + `" 
						data-ItemDescription="`+ resultSet.rows.item(r).ItemDescription + `" 
						data-pack="`+ resultSet.rows.item(r).PackTypeID + `">View Details
					</a>
				</div>
			</li>`;


            }

            $$('#itemlist').html(Html_EL);
            myApp.hidePreloader();

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        // Html_EL = html;
    });


}


function getNextItemsSet() {
    offset = offset + 25;
    db.transaction(function (tx) {

        var query = "SELECT * FROM items LIMIT " + offset + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            Html_EL = '';
            for (var r = 0; r < resultSet.rows.length; r++) {
                Html_EL += `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" id="ii`+ resultSet.rows.item(r).iteItemID + `"  src="` + resultSet.rows.item(r).ItemImageName + `">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">product name</div>
								<div class="item-text">`+ resultSet.rows.item(r).ItemDescription + `</div>
								<div class="item-title-row">`+ resultSet.rows.item(r).VendorName + `<span class="price_in_card">` + resultSet.rows.item(r).Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link">Add To Order</a>
										<a href="#" class="link view_details_btn"
						id="` + resultSet.rows.item(r).ItemID + `" 
						data-VendorName="`+ resultSet.rows.item(r).VendorName + `" 
						data-ItemCode="`+ resultSet.rows.item(r).ItemCode + `" 
						data-ItemBarcode="`+ resultSet.rows.item(r).ItemBarcode + `" 
						data-PackID="`+ resultSet.rows.item(r).PackID + `" 
						data-UOM="`+ resultSet.rows.item(r).UOM + `" 
						data-RequiredQuanity="`+ resultSet.rows.item(r).RequiredQuanity + `" 
						data-Price="prog" data-Tax="prog" 
						data-Discount="prog" 
						data-PiecesInPack="`+ resultSet.rows.item(r).PiecesInPack + `" 
						data-IsDefaultPack="`+ resultSet.rows.item(r).IsDefaultPack + `" 
						data-PackGroupID="`+ resultSet.rows.item(r).PackGroupID + `" 
						data-IsAdded="`+ resultSet.rows.item(r).IsAdded + `" 
						data-DiscountTypeID="`+ resultSet.rows.item(r).DiscountTypeID + `" 
						data-ItemID="`+ resultSet.rows.item(r).ItemID + `" 
						data-ItemDescription="`+ resultSet.rows.item(r).ItemDescription + `" 
						data-pack="`+ resultSet.rows.item(r).PackTypeID + `">View Details
					</a>
				</div>
			</li>`;
            }

            $$('#itemlist').html(Html_EL);
            myApp.hidePreloader();

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        // Html_EL = html;
    });
}

function getVendorByQuery() {
    db.transaction(function (tx) {
        var query = "SELECT * FROM vendor LIMIT " + offsetVendor + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            vendor_EL = '';
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                vendor_EL += `<div class="item-content card like_li" id="` + resultSet.rows.item(r).input + `">		
                                        <div class="item-media"><img src="`+ resultSet.rows.item(r).IMG + `" width="80" /></div>		
                                         <div class="item-inner">		
                                           <div class="item-title">`+ resultSet.rows.item(r).name + `</div>		
                                         </div>		
                                         <div class="item-after">		
                                         <i class="icon icon-next"></i>		
                                         </div>		
                                     </div>`;
            }
            $$("#vendores").html(vendor_EL);
        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        $$('#vendores .like_li').on('click', function () {
            //@prog get on click vendors
        });
            
    });

}


function getOffersByQuery() {

    var vendorRname = '';
    $$("#offers").html('');
    //var offers = localStorage.getItem("Offers33");
    //if (offers == "" || offers == null || offers == 'null') { return; }

    //offers = JSON.parse(offers);
    var li = '';
    var lnag = localStorage.getItem('lang');
    var string = '';
    if (lnag == 1) { string = 'Offer Requirements'; } else { string = 'متطلبات العرض'; }
    //@prog start  get offers and append to html 

    db.transaction(function (tx) {

        var query = "SELECT * FROM offers LIMIT " + offsetOffers + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            $$('#offers109').html('');
            for (var r = 0; r < resultSet.rows.length; r++) {
                offers_EL += `<li class="swipeout card" style="border-left: dashed 3px rgba(0,0,0,0.3) !important;">
                                        <!-- Usual list element wrapped with "swipeout-content" -->
                                        <div class="swipeout-content">
                                            <!-- Your list element here -->
                                            <div class="item-content">
                                                <div class="item-media"><i class="icon icon-coupon"></i></div>
                                                <div class="item-inner">`+ resultSet.rows.item(r).VendorName + `<br>` + resultSet.rows.item(r).Description + `</div>
                                            </div>

                                        </div>
                                        <div class="swipeout-actions-right">
                                            <!-- Swipeout actions links/buttons -->

                                            <a id="`+ resultSet.rows.item(r).PromotionID + `" class="swipeout-close my_green" href="#"><i class="icon-next"></i></a>
                                        </div>
                                        <div class="card-footer">
                                            <a href="#" class="link">View Details</a>
                                        </div>
                                    </li>`;


            }

            $$('#offers109').html(offers_EL);

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        // Html_EL = html;
    });






   // for (var i = 0; i < offers.length; i++) {
        //for (var JJ = 0; JJ < vendoreinfo.length; JJ++) {
        //    if (vendoreinfo[JJ].UniqeID == offers[i].VendorName) {
        //        vendorRname = vendoreinfo[JJ].name;
        //    }
        //}
        // li+='<div class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title" style="font-size:89%;">'+offers[i].Description+'</div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">Offer Input</div><div class="item-after"></div></div></div></li></ul><div class="co1ntent-block ins1et"><ul id="off'+offers[i].PromotionID+'" ></ul><ul id="or'+offers[i].PromotionID+'"></ul><hr><div class="item-title" style="padding-left:5%">Offer Output</div><ul id="out'+offers[i].PromotionID+'" ></ul></div> </div></div><a href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold"  class="" ></a></ul></div>';
        //Offers there baby
        //var shadow = '0 1px 2px rgba(0,0,0,.3);';
       // if (isAndroid) { shadow = '0 1px 2px rgba(0,0,0,.3);'; } else { shadow = '0 1px 2px rgba(0,0,0,.3);'; }
        //li+='<div class="list-block inset"><ul style="box-shadow:'+shadow+'"><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"><div id="lo'+offers[i].PromotionID+'" class="item-title" style="font-size:89%;">'+vendorRname+' '+offers[i].Description+'</div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title" style="    font-weight: bold; color:#00695c">If you buy </div><div class="item-after"></div></div></div></li></ul><div id="ot'+offers[i].PromotionID+'"></div><div class="co1ntent-block ins1et"><div class="item-title" style="padding-left:5%; color:#00695c; font-weight: bold;">You will get</div><ul id="out'+offers[i].PromotionID+'" ></ul></div> </div></div></ul></div>';    
   //     li += `<li class="swipeout card" style="border-left: dashed 3px rgba(0,0,0,0.3) !important;">
   //                                     <!-- Usual list element wrapped with "swipeout-content" -->
   //                                     <div class="swipeout-content">
   //                                         <!-- Your list element here -->
   //                                         <div class="item-content">
   //                                             <div class="item-media"><i class="icon icon-coupon"></i></div>
   //                                             <div class="item-inner">`+ vendorRname + `-` + offers[i].Description + `</div>
   //                                         </div>

   //                                     </div>
   //                                     <div class="swipeout-actions-right">
   //                                         <!-- Swipeout actions links/buttons -->

   //                                         <a id="`+ offers[i].PromotionID + `" class="swipeout-close my_green" href="#"><i class="icon-next"></i></a>
   //                                     </div>
   //                                     <div class="card-footer">
   //                                         <a href="#" class="link">View Details</a>
   //                                     </div>
   //                                 </li>`;
   //// }
   // $$("#offers109").html('');
   // $$("#offers109").append(li);
    //<a href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" id="'+offers[i].PromotionID+'"  class="button offer" >'+string+'</a>


    //for (var i = 0; i < offers.length; i++) {

    //    var proid = offers[i].PromotionID;
    //    var obj = offers[i].InputOptions;
    //    obj = obj[proid];
    //    var ul = '';
    //    for (var m = 0; m < obj.length; m++) {
    //        var string = JSON.stringify(proid) + JSON.stringify(obj[m].OptionID);
    //        if (m == 0) {
    //            ul += '<ul id="AB' + string + '"></ul>';
    //        }
    //        else
    //            ul += '<span style="margin-left:5%">OR</span><ul id="AB' + string + '"></ul>';

    //    }
    //    $$("#ot" + proid).html('');
    //    $$("#ot" + proid).append(ul);


    //    //  obj=obj[proid];  
    //    console.log(obj);
    //    var obj2;
    //    var obj2 = obj[0];
    //    obj = obj2.CalculatedPromotionDetails;
    //    var optid = obj2.OptionID;
    //    obj = obj[optid];
    //    //   var inputs=''; 

    //}

    ///////////uls

    //for (var i = 0; i < offers.length; i++) {

    //    var proid = offers[i].PromotionID;
    //    var obj = offers[i].InputOptions;
    //    obj = obj[proid];
    //    var promo_id = obj
    //    for (var mn = 0; mn < promo_id.length; mn++) {

    //        var innerobj = promo_id[mn];
    //        var calutedoptions = innerobj.CalculatedPromotionDetails;
    //        var optionid = innerobj.OptionID;
    //        var innerdata = calutedoptions[optionid];
    //        var strdingdata = '';
    //        var apendeingstring = JSON.stringify(proid) + JSON.stringify(optionid);
    //        for (var ki = 0; ki < innerdata.length; ki++) {
    //            strdingdata += '<li class="item-content"><div class="item-i11nner VR"><div class="item-ti1tle">- ' + innerdata[ki].Description + '.</div></div></li>';
    //        }
    //        $$("#AB" + apendeingstring).html('');
    //        $$("#AB" + apendeingstring).append(strdingdata);

    //    }

    //}




    //for (var i = 0; i < offers.length; i++) {

    //    var proid = offers[i].PromotionID;
    //    var obj = offers[i].CalculatedOptions;
    //    obj = obj[proid];
    //    console.log(obj);
    //    var obj2;
    //    var obj2 = obj[0];
    //    obj = obj2.CalculatedPromotionDetails;
    //    var optid = obj2.OptionID;
    //    obj = obj[optid];
    //    var inputs = '';
    //    for (var j = 0; j < obj.length; j++) {
    //        console.log(obj[j]);
    //        // obj=obj[0];
    //        inputs += '<li class="item-content"><div class="item-in1ner"><div class="item-titl1xe">' + obj[j].Description + '</div></div></li>';
    //        console.log(obj[j].Description);
    //    }
    //    $$("#out" + proid).html('');
    //    $$("#out" + proid).append(inputs);
    //}


    //$$(".offer").on('click', function () {
    //    var l = localStorage.getItem('lang');
    //    if (l == 1) { myApp.alert('the offer input is added to offer requirements', "EOA"); } else { myApp.alert('تمت اضافة متطلبات العرض', "EOA"); }

    //    var splitByLastDot = function (text) {
    //        var index = text.lastIndexOf('.');
    //        return [text.slice(0, index), text.slice(index + 1)]
    //    }


    //    var offid = this.id;
    //    var c = $$("#ot" + offid).text();
    //    var n = $$("#lo" + offid).text();
    //    var name = c.split("-");
    //    console.log(c);
    //    var string = '';
    //    for (var i = 0; i < name.length; i++) {

    //        if (name[i] == '') { } else {
    //            name[i] = name[i].slice(1);
    //            string += "<li><div class='content-block' style='margin-top:0%; margin-bottom:10px'><div class='item-inner'>" + name[i] + "</div></div></li>";
    //        }
    //    }
    //    popover = string;
    //    popovertit = n;
            

    //});

   
}