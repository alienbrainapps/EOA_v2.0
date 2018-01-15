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
var thePakageIS = "";
// Last loaded index
var lastIndex = $$('#itemlist li').length;
var HistoryOrdereData = [];
var el_his = "";




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

        var query = "SELECT distinct items.* ,vendor.name,vendor.URL  FROM items inner join vendor on vendor.input = items.VendorID where (items.Price > 0) and ((items.IsDefaultPack='true' and itemid in (select itemid from items where  items.IsDefaultPack='true'))or packid in (select min(packID)  from items where itemid not in (select itemid from items where  items.IsDefaultPack='true') group by itemid))LIMIT " + offset + ",25"
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
								<img class="Strechimage" width="70" data-selector="ii`+ resultSet.rows.item(r).ItemID + `" id="ii` + resultSet.rows.item(r).ItemID + `"  src="` + (resultSet.rows.item(r).URL).replace(`/api`, ``) + `/itemsimages/` + resultSet.rows.item(r).ItemImageName + `" onerror="(this.src='images/no-image.svg')">
							</div>
							<div class="card_list_content">
								<div class="item-title-row searh-name bolder_text">`+ resultSet.rows.item(r).ItemDescription + `</div>
								<div class="item-text searh-name" style="font-size:12px">`+ resultSet.rows.item(r).UOM + `</div>
								<div class="item-title-row searh-name">`+ resultSet.rows.item(r).name + `<span class="price_in_card bolder_text">` + resultSet.rows.item(r).Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link not-show">Add To Order</a>
										<a href="#" class="link view_details_btn"
						id="` + resultSet.rows.item(r).ItemID + `" 
						
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

        // var query = "SELECT * FROM vendor LIMIT " + offsetVendor + ", 25";
        var query = "select * from vendor where trim(vendor.input)  in ( select trim(vendorid) from vendorCustumer)  LIMIT " + offsetVendor + ", 25 ";
        tx.executeSql(query, [], function (tx, resultSet) {
            vendor_EL = '';
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                vendor_EL += `<div class="item-content card like_li item-link" id="` + resultSet.rows.item(r).input + `">		
                                        <div class="item-media"><img src="`+ resultSet.rows.item(r).IMG + `" width="80" onerror="(this.src='images/no-vendor-img.svg')" /></div>		
                                         <div class="item-inner">		
                                           <div class="item-title">`+ resultSet.rows.item(r).name + `</div>		
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
                                            <i class="icon myicon-eoa-coupon"></i>
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
                                    <a href="#" class="link view-offers-det" id="`+ resultSet.rows.item(r).PromotionID + `">View Details</a>
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
            if (resultSet.rows.length == 0) {
                brand_EL = `
                            <p class="no-item-brands">
                                <i class="myicon-eoa-package"></i>
                                <br>
                                Sorry there is no item available 
                            </p>
                            `
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

function getBrandItemList(Id, venID) {
    console.log(venID);
    Id = parseInt(Id);
    console.log(Id);

    db.transaction(function (tx) {
        var query = `SELECT distinct items.* ,vendor.name , vendor.url FROM items inner join vendor on vendor.input = items.VendorID 
                     where
                    (items.Price > 0) and
                    (((items.IsDefaultPack="true" and itemid in (select itemid from items x where  x.IsDefaultPack="true"  and  vendorid='`+ venID + `'))
					or packid in (select min(xx.packID) 
                    from items xx where xx.itemid not in (select s.itemid from items s where  s.IsDefaultPack="true"  and  vendorid='`+ venID + `') and   xx.BrandID=` + Id + ` group by xx.itemid))
					and items.BrandID=`+ Id + `
					 and items.VendorID = '`+ venID + `') LIMIT 0,50000  `;

        tx.executeSql(query, [], function (tx, resultSet) {
            brand_EL = '';
            console.log('this is my awsome', query);
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
                            <div class="item-media"><img src="` + (resultSet.rows.item(r).URL).replace(`/api`, ``) + `/itemsimages/` + resultSet.rows.item(r).ItemImageName + `" width="80" onerror="(this.src='images/no-image.svg')"  /></div>
                             <div class="item-inner">
                              <div class="item-title">`+ resultSet.rows.item(r).ItemDescription + ` <br /><span class="green_text">` + resultSet.rows.item(r).Price + `</span></div>
                             </div>
                          </a>
                        </li>`;

                $$("#nes").append(brandItem_EL);




            }
            console.log($$('#nes').children());
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
        var query = `select items.*,vendor.name, vendor.url from items inner join vendor on items.VendorID=vendor.input where  vendorid='` + venID + `' and itemid=` + itemId + ` order by IsDefaultPack,piecesinpack desc`;
        tx.executeSql(query, [], function (tx, resultSet) {

            var EL_UOM = "";
            for (var r = 0; r < resultSet.rows.length; r++) {
                //@prog append vendor
                objclating = resultSet.rows.item(r);
                console.log('this is target item', JSON.stringify(objclating));

                EL_UOM +=
                    `<li class="item-uom" id="selected` + resultSet.rows.item(r).PackID + `"  
	                 data-pack="`+ resultSet.rows.item(r).PackTypeID + `" 
	                 data-Discount="`+ resultSet.rows.item(r).Discount + `" 
	                 data-Tax="`+ resultSet.rows.item(r).Tax + `" 
	                 data-price="`+ resultSet.rows.item(r).Price + `" 
	                 data-PackID="`+ resultSet.rows.item(r).PackID + `">
                      <label class="label-radio item-content">
                        <input type="radio" name="my-radio" value="`+ resultSet.rows.item(r).Price + `"  checked="checked">
                        <div class="item-media">
                          <i class="icon icon-form-radio"></i>
                        </div>
                        <div class="item-inner">
                          <div class="item-title">`+ resultSet.rows.item(r).UOM + `</div >
		                  <div class="item-after ">` + resultSet.rows.item(r).Price + `</div>
                        </div >
                      </label >
                    </li >`;

                var imageItem = (resultSet.rows.item(r).URL).replace(`/api`, ``) + `/itemsimages/` + resultSet.rows.item(r).ItemImageName;
                itemDetails_EL = `


<li>
                                <div class="item-content">
                                    <div class="item-media"> <img class="Strechimage" width="70" src="` + imageItem + `" onerror="(this.src='images/no-image.svg')" width="80" height="70"></div>
                                    <div class="item-inner">
                                        <div class="item-title item-name ">`+ resultSet.rows.item(r).ItemDescription + `</div>
                                    </div>
                                </div>
                            </li>



                        
                            <li>
                                <div class="item-content">
                                    <div class="item-media"><i class="myicon-eoa-vendor"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">Vendor</div>
                                        <div class="item-after">
                                            `+ resultSet.rows.item(r).name + `
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="item-content">

                                    <div class="item-media"><i class="myicon-eoa-quantity"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">Quantity</div>
                                        <div class="item-after item-input qua-area">
                                            
                                            <span class="dec-qua"><i class="myicon-eoa-remove"></i></span> 
                                            <input disabled data-PackID="`+ resultSet.rows.item(r).PackID + `" value="1" class="picker-device" type="number" id="QunV" placeholder="1">
                                            <span class="inc-qua"><i class="myicon-eoa-add"></i></span>                                      
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div class="item-content">
                                    <div class="item-media"><i class="myicon-eoa-selling-unit"></i> </div>
                                    <div class="item-inner">
                                        <div class="item-title label">selling Unit</div>
                                       
                                    </div>
                                </div>
                            </li>`;

                getiteminfo(objclating);
            }

            $$('#item_information').html(itemDetails_EL);
            $$("#item_information").append(EL_UOM);
            //getiteminfo(objclating);
            //console.log(JSON.stringify(objclating));

            //get first calculation card on quantity 1

            //start +/- btn 
            $$('.inc-qua').on('click', function () {
                var oldValue = $$('#QunV').val();
                var newValue = parseInt(oldValue) + 1;
                $$('#QunV').val(newValue);

                getInfoafterChangeQuamtity();

            });
            $$('.dec-qua').on('click', function () {
                var oldValue = $$('#QunV').val();
                if (oldValue > 0) {
                    var newValue = parseInt(oldValue) - 1;
                    $$('#QunV').val(newValue);
                    getInfoafterChangeQuamtity();

                } else {
                    return;
                }

            });



            $$('#item_information > .item-uom').on('click', function () {

                var ids = this.id;
                var packid = $$(this).attr('data-packid');
                console.log(parseInt(packid));
                //$$('#QunV').data('PackID', parseInt(packid));
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
                if (itemdata.nettotal != undefined) {
                    $$("#Price").html(curency + itemdata.nettotal.toFixed(3));
                    $$("#Gross").html(curency + itemdata.gross.toFixed(3));
                    $$("#Discount").html(curency + itemdata.discount.toFixed(3));
                    $$("#Tax").html(curency + itemdata.tax.toFixed(3));
                    $$("#vendorename").html(itemdata.itemname);
                }

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
            console.log(promotionDetails);
            //var popupHTML = `
            //<div class="popup">
            //    <div class="content-block">
            //    <div class="card facebook-card">
            //          <div class="card-header no-border">
            //            <div class="facebook-avatar"><img src="`+ promotionDetails.IMG + `" width="80" height="auto"></div>
            //            <div class="facebook-name">`+ promotionDetails.name + `</div>
            //          </div>
            //          <div class="card-content" id="card-`+ promotionDetails.PromotionID +`">
            //          kkooo
            //          </div>
            //          <div class="card-footer no-border">
            //            <a href="#" class="link" style="color : #1fb67b">Add To Order</a>
            //            <a href="#" class="link "  style="color : #ef3e57">Close</a>
            //          </div>
            //        </div>	
            //    </div>
            //    </div>`;
            var popupHTML = `
                        <div class="popup offers-modal">
                                    <div class="navbar">
                                        <div class="navbar-inner">
                                            <div class="left close-popup"> <a href="#" class="link"><i class="icon myicon-eoa-back"></i></a></div>
                                            <div class="center">Offer Details</div>
                                            <div class="right"></div>
                                        </div>
                                    </div>
                            <div class="content-block" style="background-color: #f7f7f7;
                                                               margin-top: 0;
                                                               padding-top: 7px;">
                                <div class="card">
                                        <div style="text-align:center">
                                        <i class="icon myicon-eoa-coupon coupon-offers-card"></i>
                                         <p style=" overflow: hidden;
                                                    text-overflow: ellipsis;
                                                    padding: 0 9px;">
                                                   <span>`+ promotionDetails.name + `</span>  ` + promotionDetails.Description + `</p>
                                        </div>
                                        <div class="card-content"  id="card-`+ promotionDetails.PromotionID + `">
                                        </div>
                                        <div class="card-footer" style="padding: 19px 25%; display:none;">
                                        <a href="#" class="link" disabled style="color: #fff;
                                                                    background-color: #1fb67b;
                                                                    border-radius: 25px;
                                                                    text-align: center;
                                                                    display: block;
                                                                    padding: 0 20px;">Add To Order</a>
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
                ul += `<div class="content-block-title">if you buy</div>
                                <ul class="iub" id="AB` + promotionDetails.PromotionID + inputOptionsObj[m].OptionID + `"></ul>`;
            }
            else
                ul += `<span style="margin-left:5%">OR</span><ul class="iub"  id="AB` + promotionDetails.PromotionID + inputOptionsObj[m].OptionID + `"></ul>`;

        }
        $$('#card-' + promotionDetails.PromotionID).html(ul);
        $$('#card-' + promotionDetails.PromotionID).append('<div class="content-block-title">you will get</div>');
        $$('#card-' + promotionDetails.PromotionID).append(`<ul id="UWG` + promotionDetails.PromotionID + promotionDetails.VendorID + `"></ul>`);
        var selectorUWG = promotionDetails.PromotionID.toString() + promotionDetails.VendorID.toString();
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
        $$("#UWG" + selectorUWG).append('<div>' + promotionDetails.Description + '</div>');

    });



}

function getInfoafterChangeQuamtity() {
    // get calculation card 
    //var thePakageIS = $$('#QunV').attr('data-PackID');
    var thePakageIS = $$('#QunV').attr('data-PackID');
    var packid = $$('#QunV').attr('data-PackID');
    var Discount = $$('#selected' + thePakageIS).data('Discount');
    var Tax = $$('#selected' + thePakageIS).data('Tax');
    var PackTypeID = $$('#selected' + thePakageIS).data('pack');
    var price = $$('#selected' + thePakageIS).data("price");
    objclating.PackID = parseInt(packid);
    objclating.Discount = Discount;
    objclating.Tax = Tax;
    objclating.Price = price;
    getiteminfo(objclating);
}

function backToHome() {
    $$('.toolbar-bottom').show();
    mainView.router.loadPage({
        url: 'home.html',
        force: true
    });
    //mainView.router.back({force: true})
    //mainView.router.loadPage({ url: "home.html", force: true });
}

function searchItems() {
    $$('.preloader').hide();
    $$('.toolbar-bottom').hide();
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
    $$('.normalNav').hide();
    $$('.searchNav').show();


}
function closeSearch() {
    $$('.preloader').show();
    $$('.toolbar-bottom').show();
    $$('.normalNav').show();
    $$('.searchNav').hide();
}
function getHistoryByQuery(orderByParam) {

    db.transaction(function (tx) {

        var query = `select i.*,oh.OrderID,oh.OrderDate,oh.itemQun,oh.Status,v.name from items i inner join orderHistory oh on trim(i.packid)=trim(oh.itemid) and trim(i.vendorid)=trim(oh.vendorid)
                                    inner join vendor v on trim(i.vendorid)=trim(v.input)
                                    order by `+ orderByParam + ` desc , OrderID`;
        console.log(query);
        tx.executeSql(query, [], function (tx, resultSet) {
            for (var r = 0; r < resultSet.rows.length; r++) {
                HistoryOrdereData.push(resultSet.rows.item(r));
                console.log(resultSet.rows.item(r));
            }
            console.log(JSON.stringify(HistoryOrdereData));
        },
            function (tx, error) {
                console.log('SELECT error: ' + error.message);
            });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
        DrowHistory(HistoryOrdereData, orderByParam);
    });



}

function DrowHistory(data, orderby) {
    el_his = "";
    var tempIdSelector= ""
    if (orderby == 'oh.orderdate') {
        $$('#byDateComponent').html('');
        for (var b = 0; b < data.length; b++) {
            if (data[b].Status == 1) {
                var status_label = "recieved"
            }
            var OrderDateDe = new Date(data[b].OrderDate);
            var order_date = OrderDateDe.getHours("HH") + " : " + OrderDateDe.getMinutes("MM");
            var dateToday = OrderDateDe.getMonth() + "-" + OrderDateDe.getFullYear();
            console.log('itemDate' + data[b].VendorID + data[b].OrderDate + data[b].ItemID.toString());
            if (b > 0) {
                var newB = b - 1; 
                if (data[b].OrderID == data[newB].OrderID) {

                } else {
                    el_his = `
                <div class="content-block-title groupByHeader"><span>`+ data[b].OrderDate.substring(0, 10) +`</span></div>
                    <div>
                <div class="card">
                        <div class="card-header row status`+ data[b].Status + `">
                            <div class="col-30 label-status status`+ data[b].Status + `">` + status_label + `</div>
                            <div class="col-45 name-dev">`+ data[b].name + `</div>
                            <div class="col-25 time-dev"><i class="myicon-eoa-time"></i> `+ order_date + ` </div>
                        </div>
                        <div class="card-content">
                            <div class="card-content-inner">
                                <div class="list-block">
                                    <ul id="itemDate`+ data[b].OrderID.replace(/ /g, '') + `">
                                        
                                    </ul>
                                </div>
                            </div>
                            </div>
                        <div class="card-footer">
                            
                                        <a href="#" class="item-link list-button reorder-btn"  style="color:#1fb67b">REORDER</a>
                                  
                            </div>
                        </div>
                    </div>

                `;
                    $$('#byDateComponent').append(el_his);  

                }

            }
            else if (b==0){
                el_his= `
                <div class="content-block-title groupByHeader"><span>`+data[b].OrderDate.substring(0,10)+`</span></div>
                <div class="card">
                        <div class="card-header row status`+ data[b].Status + `">
                            <div class="col-30 label-status status`+ data[b].Status + `">` + status_label + `</div>
                            <div class="col-45 name-dev">`+ data[b].name + `</div>
                            <div class="col-25 time-dev"><i class="myicon-eoa-time"></i> `+ order_date + ` </div>
                        </div>
                        <div class="card-content">
                            <div class="card-content-inner">
                                <div class="list-block">
                                    <ul id="itemDate`+ data[b].OrderID.replace(/ /g, '') + `">
                                        
                                    </ul>
                                </div>
                            </div>
                            </div>
                        <div class="card-footer">
                            
                                        <a href="#" class="item-link list-button reorder-btn"  style="color:#1fb67b">REORDER</a>
                                  
                            </div>
                        </div>
                    </div>

                `;
                $$('#byDateComponent').append(el_his);
                //$$('#byDateComponent').append(el_his);
                // tempIdSelector = $$(`#itemDate` + data[b].OrderID.replace(/ /g, ''));
            }
            
            tempIdSelector = $$(`#itemDate` + data[b].OrderID.replace(/ /g, ''));
            tempIdSelector.append(`
                                        <li class="item-content">
                                            <div class="item-inner">
                                                <div class="item-title">`+ data[b].ItemDescription + `</div>
                                                <div class="item-after"><span class="badge badge-orange">`+ data[b].ItemQun + `</span></div>
                                            </div>
                                        </li>
                                    `);     
            
        }

        //$$('#byDateComponent').html(el_his);
        //appendLiItemsForOrder(data)
        $$('#byDateComponent').addClass('active');
        $$('#byDate').addClass('active');
        $$('#byStatus').removeClass('active');
        $$('#byVendor').removeClass('active');
    }
    else if (orderby == 'oh.Status') {
        for (var b = 0; b < data.length; b++) {
            el_his += `<p>` + data[b].VendorName + `</p>
                        <br>
                        <p>`+ data[b].OrderID + `</p>
<p>status</p>

`;

        }
        $$('#byStatusComponent').html(el_his);
        //$$('#byStatusComponent').append(el_his);
        $$('#byDate').removeClass('active');
        $$('#byStatus').addClass('active');
        $$('#byVendor').removeClass('active');
    }
    else if (orderby == 'v.name') {
        for (var b = 0; b < data.length; b++) {
            el_his += `<p>` + data[b].VendorName + `</p>
                        <br>
                        <p>`+ data[b].OrderID + `</p>
<p>vendor</p>
`;

        }
        $$('#byVendorComponent').html(el_his);
        $$('#byDate').removeClass('active');
        $$('#byStatus').removeClass('active');
        $$('#byVendor').addClass('active');
    }




    $$('#byStatus').on('click', function () {
        getHistoryByQuery('oh.Status');
        // $$('#byStatusComponent').append('hi st');
    });


    $$('#byVendor').on('click', function () {
        getHistoryByQuery('v.name');
        // $$('#byVendorComponent').append('hi vemdore');
    });
    $$('#byDate').on('click', function () {

        getHistoryByQuery('oh.orderdate');

        // $$('#byDateComponent').append('hi date');
    });





}

function appendLiItemsForOrder(data) {

    for (var it = 0; it < data.length; it++) {
        $$('#itemDate' + data[it].OrderID.replace(/ /g, ''));
        //if (data[it].OrderID.replace(/ /g, '') == ){ }
        $$(`#itemDate` + data[it].VendorID + data[it].OrderDate + data[it].ItemID.toString()).append(`
                                            <li class="item-content">
                                            <div class="item-inner">
                                                <div class="item-title">`+ data[it].ItemDescription + `</div>
                                                <div class="item-after"><span class="badge badge-orange">`+ data[it].ItemQun + `</span></div>
                                            </div>
                                        </li>
                                        `);
    }
}