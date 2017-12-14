﻿var offset = 0;
var offsetVendor = 0;
var offsetOffers = 0;
var Html_EL = '';
var vendor_EL = '';
var brand_EL = '';
var offers_EL = '';
var loading = false;
var vendorSelected = '';
var brandId = '';
var brandItem_EL = '';
var brandsVendorName = '';
var itemSelected = '';
var itemDetails_EL = '';
var promotionDetails = ""; 
var clikedFrom = "";

// Last loaded index
var lastIndex = $$('#itemlist li').length;





function getItemByQuery() {
    if (lastIndex > 24) {
        offset = $$('#itemlist li').length;
    } else {
        offset = 0;
        $$('#itemlist').html('');
        // Attach 'infinite' event handler
        $$('.infinite-scroll').on('infinite', function () {
            scrollingItems();
        });
    }
    db.transaction(function (tx) {

        var query = "SELECT distinct items.* ,vendor.name  FROM items inner join vendor on vendor.input = items.VendorID where (items.IsDefaultPack='true' and itemid in (select itemid from items where  items.IsDefaultPack='true')) or packid in (select min(packID) from items where itemid not in (select itemid from items where  items.IsDefaultPack='true') group by itemid)LIMIT " + offset + ",25"
        console.log('query', query);
        tx.executeSql(query, [], function (tx, resultSet) {
            console.log(resultSet.rows.item(r));
            //$$('#itemlist').html('');
            if (resultSet.rows.length == 0) { return; }
            for (var r = 0; r < resultSet.rows.length; r++) {
                Html_EL = `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" width="70" data-selector="ii`+ resultSet.rows.item(r).ItemID + `" id="ii` + resultSet.rows.item(r).ItemID + `"  src="` + resultSet.rows.item(r).ItemImageName + `" onerror="(this.src='images/no-image.svg')">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">`+ resultSet.rows.item(r).ItemDescription + `</div>
								<div class="item-text">`+ resultSet.rows.item(r).UOM + `</div>
								<div class="item-title-row">`+ resultSet.rows.item(r).name + `   ` + resultSet.rows.item(r).ItemCode + `<span class="price_in_card">` + resultSet.rows.item(r).Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link not-show">Add To Order</a>
										<a href="#" class="link view_details_btn"
						id="` + resultSet.rows.item(r).ItemID + `" 
						data-VendorName="`+ resultSet.rows.item(r).VendorName + `" 
                        data-VendorID="`+ resultSet.rows.item(r).VendorID + `"
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
                $$('#itemlist').append(Html_EL);

            }

            $$(".view_details_btn").on('click', function () {
                clikedFrom = $$('.view-main').data('page');
                itemSelected = this.id;
                vendorSelected = $$(this).data('VendorID');
                mainView.router.loadPage({ url: "Alldet.html", force: true });
            });
            lastIndex = $$('#itemlist li').length;
            myApp.hidePreloader();


            loading = false;


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

        var query = "SELECT items.* ,vendor.name   FROM items inner join vendor LIMIT " + offset + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            Html_EL_next = '';

            for (var r = 0; r < resultSet.rows.length; r++) {

                Html_EL_next += `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" width="80" height="80" data-selector="ii`+ resultSet.rows.item(r).ItemID + `" id="ii` + resultSet.rows.item(r).ItemID + `"  src="` + resultSet.rows.item(r).ItemImageName + `" onerror="(this.src='images/no-image.svg')">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">product name</div>
								<div class="item-text">`+ resultSet.rows.item(r).ItemDescription + `</div>
								<div class="item-title-row">`+ resultSet.rows.item(r).name + `<span class="price_in_card">` + resultSet.rows.item(r).Price + `</span></div>
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

            $$('#itemlist').append(Html_EL_next);
            lastIndex = $$('#itemlist li').length;
            maxItems = lastIndex + 25;
            if (lastIndex + 1 >= maxItems) {
                getNextItemsSet();

            } else {
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
                // Remove preloader
                $$('.infinite-scroll-preloader').remove();
                return;

            }
            //// Attach 'infinite' event handler
            //$$('.infinite-scroll').on('infinite', function () {
            //    lastIndex = $$('#itemlist li').length;
            //    maxItems = $$('#itemlist').length;
            //    // Exit, if loading in progress
            //    if (loading) return;

            //    // Set loading flag
            //    loading = true;

            //    // Emulate 1s loading
            //    getNextItemsSet();
            //});

            myApp.hidePreloader();

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {

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
            $$('#vendores .like_li').on('click', function () {
                vendorSelected = this.id;
                mainView.router.loadPage({ url: "Brands.html", force: true });
            });
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

        var query = "select * , vendor.name  from offers inner join vendor on vendor.input = offers.VendorID  LIMIT " + offsetOffers + ", 25";
        tx.executeSql(query, [], function (tx, resultSet) {
            $$('#offers109').html('');
            for (var r = 0; r < resultSet.rows.length; r++) {
                offers_EL += `<div class="card">
                                  <div class="card-content">
                                    <div class="list-block media-list">
                                      <ul>
                                        <li class="item-content">
                                          <div class="item-media">
                                            <i class="icon icon-coupon"></i>
                                          </div>
                                          <div class="item-inner">
                                            <div class="item-title-row">
                                              <div class="item-title">`+ resultSet.rows.item(r).name + `</div>
                                            </div>
                                            <div class="item-subtitle">` + resultSet.rows.item(r).Description + `</div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
 
                                  <div class="card-footer">
                                    <a href="#" class="link view-offers-det" id="`+ resultSet.rows.item(r).PromotionID+`">View Details</a>
                                </div>
                               </div>`;


            }

            $$('#offers109').html(offers_EL);
            $$('.view-offers-det').on('click', function () {
                console.log(this.id);
                popUpOfferDet(this.id);
            });

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


function getBrand(id) {
    console.log(id);

    db.transaction(function (tx) {
        var query = `select distinct ifnull(Brand,vendor.name||' Other') as brandName, vendor.name, vendor.IMG , items.BrandID , items.VendorID from items 
                                    inner join vendor on items.vendorid = vendor.input
                                    where vendorid = ?` ;
        tx.executeSql(query, [id], function (tx, resultSet) {

            brand_EL = '';
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                brand_EL += `<div class="item-content card like_li" data-vendorname="` + resultSet.rows.item(r).name + `"  id="` + resultSet.rows.item(r).BrandID + `">
                                        <div class="item-media"><img src="` + resultSet.rows.item(r).IMG + `" width="80" /></div>
                                        <div class="item-inner">
                                            <div class="item-title">`+ resultSet.rows.item(r).brandName + `</div>
                                        </div>
                                        <div class="item-after">
                                            <i class="icon icon-next"></i>
                                        </div>
                                    </div>`;


            }

            $$("#Brands").append(brand_EL);
            $$("#Brands .like_li").on('click', function () {
                
                brandId = this.id;
                brandsVendorName = $$(this).data("vendorname") + ' ' + 'items'; 

                mainView.router.loadPage({ url: "Allitems.html", force: true });
            });
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

function getBrandItemList(Id,venID) {
    console.log(venID);
    Id = parseInt(Id);
    console.log(Id);

    db.transaction(function (tx) {
        var query = `SELECT distinct items.* ,vendor.name  FROM items inner join vendor on vendor.input = items.VendorID 
                     where
                    ((items.IsDefaultPack="true" and itemid in (select itemid from items x where  x.IsDefaultPack="true"  and  vendorid='`+ venID +`'))
					or packid in (select min(xx.packID) 
                    from items xx where xx.itemid not in (select s.itemid from items s where  s.IsDefaultPack="true"  and  vendorid='`+ venID +`') and   xx.BrandID=`+ Id +` group by xx.itemid))
					and items.BrandID=`+ Id +`
					 and items.VendorID = '`+ venID +`' LIMIT 0,50000  `;
        tx.executeSql(query, [], function (tx, resultSet) {
            brand_EL = '';
            console.log('this is my awsome',query);
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                //curency
                brandItem_EL = `<li class="item-conte1nt test" 
		                         id="` + resultSet.rows.item(r).ItemID + `" 
		                         data-VendorName="` + resultSet.rows.item(r).name + `"
		                         data-ItemCode="` + resultSet.rows.item(r).ItemCode + `" 
		                         data-ItemBarcode="` + resultSet.rows.item(r).ItemBarcode + `" 
		                         data-PackID="` + resultSet.rows.item(r).PackID + `" 
		                         data-UOM="` + resultSet.rows.item(r).UOM + `" 
		                         data-RequiredQuanity="` + resultSet.rows.item(r).RequiredQuanity + `" 
		                         data-Price="` + resultSet.rows.item(r).Price + `" 
		                         data-Tax="` + resultSet.rows.item(r).Tax + `" 
		                         data-Discount="` + resultSet.rows.item(r).Discount + `" 
		                         data-PiecesInPack="` + resultSet.rows.item(r).PiecesInPack + `" 
		                         data-IsDefaultPack="` + resultSet.rows.item(r).IsDefaultPack + `" 
		                         data-PackGroupID="` + resultSet.rows.item(r).PackGroupID + `" 
		                         data-IsAdded="` + resultSet.rows.item(r).IsAdded + `" 
		                         data-DiscountTypeID="` + resultSet.rows.item(r).DiscountTypeID + `" 
		                         data-ItemID="` + resultSet.rows.item(r).ItemID + `" 
		                         data-ItemDescription="` + resultSet.rows.item(r).ItemDescription + `" 
		                         data-pack="` + resultSet.rows.item(r).PackTypeID + `">
                         <a href="#" class="item-link item-content">
                            <div class="item-media"><img src="`+ resultSet.rows.item(r).ItemImageName + `" width="80"  onerror="(this.src='images/no-image.svg')" /></div>
                             <div class="item-inner">
                              <div class="item-title">`+ resultSet.rows.item(r).ItemDescription + ` <br /><span class="green_text">` + resultSet.rows.item(r).Price + `</span></div>
                             </div>
                          </a>
                        </li>`;

                $$("#nes").append(brandItem_EL);
                

            }
            $$("#nes li").on('click', function () {
                     itemSelected = this.id;
                    mainView.router.loadPage({ url: "Alldet.html", force: true });
                });

        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');

    });

}


function getItemDetailsFromBrandList(venID, itemId) {

    console.log(itemId, venID);

    db.transaction(function (tx) {
        var query = `select items.*,vendor.name from items inner join vendor on items.VendorID=vendor.input where  vendorid='` + venID + `' and itemid=` + itemId +` order by IsDefaultPack,piecesinpack desc`;
        tx.executeSql(query, [], function (tx, resultSet) {

         
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                objclating = resultSet.rows.item(r);
                itemDetails_EL = `
                        <li class="item-divider"><i class="icon icon-package"></i> &nbsp;`+ resultSet.rows.item(r).ItemDescription +`</li>
                            <li>
                                <div class="item-content">
                                    <div class="item-media"><i class="icon icon-vendor"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">Vendor</div>
                                        <div class="item-after">
                                            `+ resultSet.rows.item(r).name +`
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item-content">
                                    <div class="item-media"><i class="icon icon-quantity"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">Quntity</div>
                                        <div class="item-after item-input">
                                            <input value="1" class="picker-device" type="number" id="QunV" placeholder="1">
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="item-content">
                                    <div class="item-media"><i class="icon icon-selling-unit"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">Selingunite</div>
                                        <div class="item-after item-input">
                                            <input value="1" class="picker-device" type="number" id="QunV" placeholder="1">
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item-content">
                                    <div class="item-inner">
                                        <div class="item-title label">&nbsp;</div>
                                        <div class="item-after">
                                            <div id="UOM"></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </li>`;
               
                
            }
            $$('#item_information').html(itemDetails_EL);
            getiteminfo(objclating);
           console.log(JSON.stringify(objclating));

            //get first calculation card on quantity 1


            $$('#QunV').on('change', function () {
                // get calculation card 
                getiteminfo(objclating);
            });
           
        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        //$$('#vendores .like_li').on('click', function () {
        //    //@prog get on click vendors
        //    var itemdata = getiteminfo(objclating);
        //});

    });


}

function scrollingItems() {

    // Exit, if loading in progress
    if (loading) return;
    // Set loading flag
    loading = true;

    // Emulate 1s loading
    getItemByQuery();

}

function popUpOfferDet(offerId) {
    offerId = parseInt(offerId);
    
    db.transaction(function (tx) {

        var query = `select offers.* , vendor.name , vendor.IMG from offers inner join vendor on vendor.input = offers.VendorID  where PromotionID = ?`;
        tx.executeSql(query, [offerId], function (tx, resultSet) {
            for (var r = 0; r < resultSet.rows.length; r++) {
                promotionDetails = resultSet.rows.item(r)
            }
            
            var popupHTML = `
            <div class="popup">
                <div class="content-block">
                <div class="card facebook-card">
                      <div class="card-header no-border">
                        <div class="facebook-avatar"><img src="`+ promotionDetails.IMG + `" width="80" height="auto"></div>
                        <div class="facebook-name">`+ promotionDetails.name + `</div>
                      </div>
                      <div class="card-content" id="card-`+ promotionDetails.PromotionID +`">
                      kkooo
                      </div>
                      <div class="card-footer no-border">
                        <a href="#" class="link" style="color : #1fb67b">Add To Order</a>
                        <a href="#" class="link close-popup"  style="color : #ef3e57">Close</a>
                      </div>
                    </div>	
                </div>
                </div>`;
            
            myApp.popup(popupHTML, true);

            
        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        
        var inputOptions = JSON.parse(promotionDetails.InputOptions)
        var ul = "";
        var inputOptionsObj = inputOptions[offerId];
        for (var m = 0; m < inputOptionsObj.length; m++) {
            if (m == 0) {
                ul += `<ul id="AB` + promotionDetails.PromotionID + inputOptionsObj[m].OptionID + `"></ul>`;
            }
            else
                ul += `<span style="margin-left:5%">OR</span><ul id="AB` + promotionDetails.PromotionID + inputOptionsObj[m].OptionID + `"></ul>`;

        }
        $$('#card-' + promotionDetails.PromotionID).html(ul);

        for (var m = 0; m < inputOptionsObj.length; m++) {
            var liForselectorUlID = "";
            var calutedoptions = inputOptionsObj[m].CalculatedPromotionDetails[inputOptionsObj[m].OptionID];
            var selectorUlID = promotionDetails.PromotionID.toString() + inputOptionsObj[m].OptionID.toString();
            for (var ki = 0; ki < calutedoptions.length; ki++) {
                liForselectorUlID += '<li class="item-content"><div class="item-i11nner VR"><div class="item-ti1tle">- ' + calutedoptions[ki].Description + '.</div></div></li>';
            }
            $$("#AB" + selectorUlID).html('');
            $$("#AB" + selectorUlID).append(liForselectorUlID);
            

        }

    });



}
