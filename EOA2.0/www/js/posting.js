 
function qout(n,DetailID,DetailTypeID,DiscountAmountForEachItem,DiscountPercentageForEachItem,FOCValue,ItemID,PackID,PackIDs,Qty,RepetCount,TotalDiscountAmount,itempak,arr,v){ 
     
   switch (n) {
    case 3:
        
     ItemQun(PackID,Qty,v);
        break;
    case 6:
 DiscountAmountforItem(itempak,PackID,DiscountAmountForEachItem,v);
        break;
    case 7:
           //myApp.alert(7);
        DiscountPercentageforItem(itempak,PackID,DiscountPercentageForEachItem,v); 
        break;
    case 11:
         //  myApp.alert(11);
       AllitemdiscountAmount(itempak,DiscountAmountForEachItem,v);
        break;
    case 12:
         //  myApp.alert(12);
      AllitemdiscountPercentage(itempak,DiscountPercentageForEachItem,v);
        break;
    case 10:
 
           
   var obj={
        'focval':FOCValue,
        'arr':arr,
       'array':[],
       'foccurrent':0
    }
   
testfocs["FOZ"+arr]=obj;
 $$("#FOCW").html('');
    
 
           var lang=localStorage.getItem('lang');
           var chose='';
           var worth='';
           if(lang==1){chose='Choose '; worth='worth of items';}else{chose='اختر د.ا'; worth='يقمة اصناف'}
           
FOCstring+='<li id="Z'+arr+'"  class=" FOClink item-conte1nt test"><a href="#"  class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+chose+''+FOCValue+'JDs '+worth+'</div><div class="item-after">JD   <span id="W'+arr+'"> 0</span>/JD '+FOCValue+'</div></div><div class="item-subtitle"></div></div></a></li>';           
           
    localStorage.setItem('PROID'+arr,obj);
   $$("#FOCW").append(FOCstring);  
 $$(".FOClink").on('click',function(){
//       myApp.addNotification({
//       title: 'Free of Charge Items',
//        message: 'please choss from the item list with '+FOCValue+' JOD Amount'
//    });
     
    FOCDY=this.id;

         console.log(testfocs);
     mainView.router.loadPage('FOCs.html');
//     
});
           
           
           
           
//          FOC(10,arr);
     
        break;
    case 4:
      
     
           
           
           
           
           
           
       SummationOverGroup(PackIDs,Qty,arr,v);
           break;
    case 5:
         //  myApp.alert(5);
        Equalquantity(itempak,PackIDs,Qty,v);
           break;
    case 8:
        //   myApp.alert(8);
      DiscountAmountGroup(itempak,PackIDs,DiscountAmountForEachItem,v);
           break;
    case 9:
         //  myApp.alert(9);
   DiscountPercGroup(itempak,PackIDs,DiscountPercentageForEachItem,v);
    break;
}
    
}

function ItemQun(packid,qun,b){
    
    console.log(freeitems.length);
    var  z=localStorage.getItem('storeditem');
   // var  v=JSON.parse(z);
    var  v=Vendorespreated[b][0];
    for(var i=0;i<v.length;i++){
 // console.log(v[i].PackID);
    if(v[i].PackID==packid){
        v[i].RequiredQuanity=qun;
        if(!freeitems.length){
        freeitems.push(v[i]);
        }
        else{ 
            for(var l=0;l<freeitems.length;l++){
            if(v[i].packID==freeitems[l].PackID){
            v[i].RequiredQuanity=v[i].RequiredQuanity+qun;
            }
        }
            
        }
    }   
        
    } 
    console.log('ItemQun');
    console.log(freeitems);
    var getimage3='';
        
        for(var f=0; f<vendoreinfo.length;f++){
            if(vendoreinfo[f].UniqeID==guessqout){
                getimage3=vendoreinfo[f].IMG;
                
            }
        }
     
        console.log(freeitems);
        if(!freeitems){}else{
             $$("#freeitem").html('');
            freestring='';
            for(var i=0;i<freeitems.length;i++){
                freestring+='<li  class="item-conte1nt test"><a style="color:black" href="#" class="item-lin1k item-content"><div class="item-media"><img src="'+getimage3+'" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+freeitems[i].ItemDescription +'</div><div class="item-after">Quantity: '+freeitems[i].RequiredQuanity+'</div></div><div class="item-subtitle">'+freeitems[i].Price+'</div></div></a></li>'; 
            }
            $$("#freeitem").append(freestring);
        }
    
    
    
}

function DiscountAmountforItem(itempak,packid,discount,v){
    //need of recalc and discount from amount
    
    for(var t=0;t<proorder.ItemPacks.length;t++){
    if(proorder.ItemPacks[t].PackID==packid){
    // Percentage = (Discount Amt * 100) / Pack gross)

      //var  gross=proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
        
    var   proitemgross= proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
         if(proorder.ItemPacks[t].DiscountTypeID==2){
        var prodescount=(proorder.ItemPacks[t].Discount*100)/proitemgross;
    }else
        prodescount=proorder.ItemPacks[t].Discount;
        prodescount=proitemgross*(prodescount/100);
        var proitemtotal=proitemgross-prodescount;
        discount=(discount*100)/proitemtotal;
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    
    }     
    }
    console.log(proorder.NetTotal);
    console.log(proorder.Gross);
    console.log(proorder.Tax);
    console.log(proorder.Discount);
console.log('DiscountAmountforItem');
}

function DiscountPercentageforItem(itempak,packid,discount,v){
    
    for(var t=0;t<proorder.ItemPacks.length;t++){
    if(proorder.ItemPacks[t].PackID==packid){
     // var gross=proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
  //  var discountamount =gross*(discount/100);
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    }

}}

function FOC(focvalue,arr){
  
// 
  
}

function AllitemdiscountAmount(itempak,discount,v){
    
    
    var descount=discount;
    for(var t=0;t<proorder.ItemPacks.length;t++){
        discount=descount;
         var   proitemgross= proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
         if(proorder.ItemPacks[t].DiscountTypeID==2){
        var prodescount=(proorder.ItemPacks[t].Discount*100)/proitemgross;
    }else{
        prodescount=proorder.ItemPacks[t].Discount;
    }
        
        prodescount=proitemgross*(prodescount/100);
       var proitemtotal=proitemgross-prodescount;
     
        
        
        
        
        
                discount=(discount*100)/proitemtotal;
   // var discountamount =gross*(discount/100);
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    
    
    
//   var qut=localStorage.getItem('Qut');
//    
//   var qutJ=JSON.parse(qut);
//    for(var t=0;t<itempak.length;t++){
//        var Discount=(discount*100)/itempak[t].Price*itempak[t].RequiredQuanity;
//      //  var perc=(c.Discount*100)/itempak[t].Price;
//var gross=itempak[t].Price*itempak[t].RequiredQuanity;
//var discountamount =gross*(itempak[t].Discount/100);
//var PackNetTottal=gross-discountamount;
//var PackPromoted=PackNetTottal*(itempak[t].PromotedDiscount/100);
// PackNetTottal=PackNetTottal-PackPromoted;
//var Tax=PackNetTottal*(itempak[t].Tax/100);
//var Net=PackNetTottal+Tax;
//        itempak[t].PromotedDiscount=itempak[t].PromotedDiscount+PackPromoted;
//          proorder.NetTotal=proorder.NetTotal+Net;
//        proorder.Discount=proorder.Discount+discountamount;
//        proorder.Tax=proorder.Tax+Tax;
//        proorder.GrossTotal=proorder.GrossTotal+gross;
//        var calcpr={
//            "Gross":gross,
//            "NetTottal":Net,
//            "Tax":Tax,
//            "Discount":discountamount
//        }
//        localStorage.setItem("A"+itempak[t].PackID,calcpr);
//    }
//    /*console.log(proorder.NetTotal);
//    console.log(proorder.Discount);
//    console.log(proorder.Tax);
//    console.log(proorder.GrossTotal);*/
//    console.log('AllitemdiscountAmount');
}}

function AllitemdiscountPercentage(itempak,discount,v){
    //same as the above
  
    
    var descount=discount;
     for(var t=0;t<proorder.ItemPacks.length;t++){
  //   discount=discount;
         //   var gross=proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
    //var discountamount =gross*(discount/100);
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    }
    
    
    
//     for(var t=0;t<itempak.length;t++){
//       // var Discount=(discount*100)/itempak[t].Price*itempak[t].RequiredQuanity;
//      //  var perc=(c.Discount*100)/itempak[t].Price;
//var gross=itempak[t].Price*itempak[t].RequiredQuanity;
//var discountamount =gross*(itempak[t].Discount/100);
//var PackNetTottal=gross-discountamount;
//var PackPromoted=PackNetTottal*(itempak[t].PromotedDiscount/100);
// PackNetTottal=PackNetTottal-PackPromoted;
//var Tax=PackNetTottal*(itempak[t].Tax/100);
//var Net=PackNetTottal+Tax;
//        itempak[t].PromotedDiscount=itempak[t].PromotedDiscount+PackPromoted;
//           proorder.NetTotal=proorder.NetTotal+Net;
//        proorder.Discount=proorder.Discount+discountamount;
//        proorder.Tax=proorder.Tax+Tax;
//        proorder.GrossTotal=proorder.GrossTotal+gross;
//        var calcpr={
//            "Gross":gross,
//            "NetTottal":Net,
//            "Tax":Tax,
//            "Discount":discountamount
//        }
//localStorage.setItem("A"+itempak[t].PackID,calcpr);
//    }
//   /* console.log(proorder.NetTotal);
//    console.log(proorder.Discount);
//    console.log(proorder.Tax);
//    console.log(proorder.GrossTotal);*/
//    console.log('AllitemdiscountPercentage');
}

function FreeItemswithCertainValue(){
    
    var  z=localStorage.getItem('storeditems');
    var  v=JSON.parse(z);
    for(var i=0;i<v.length;i++){
    for(var j=0;packids.length;j++){    
    if(v[i].packID==packids){
        if(freeitems.length){
        freeitems.push(v[i]);
        }
        else{
            
        }
    }   
        }
    }
   console.log('FreeItemswithCertainValue'); 
}

function SummationOverGroup(packids,Qty,arr,v){
         
         var obj={
        'FRQ':Qty,
        'arr':arr,
       'array':[],
       'FRQcurrent':0,
       'packids':packids
    }
TFRQ["FRQ"+arr]=obj;
 $$("#Summ").html('');


console.log(TFRQ["FRQ"+arr]);
    localStorage.setItem('PROID'+arr,obj);
    
     
    var Choose='';
    var Items='';
    var lang=localStorage.getItem('lang');
    if(lang==1){
        Choose="Choose";
     Items="Items";
    }else{
         Choose="اختر";
     Items="اصناف";
    }
    
         FRQstring+=  '<li id="Q'+arr+'"  class=" FRQ32link item-conte1nt test"><a href="#"  class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+Choose+' '+Qty+' '+Items+'</div><div class="item-after"><span id="Ws'+arr+'"> 0</span> /'+Qty+'</div></div><div class="item-subtitle"></div></div></a></li>';
           
    
   $$("#Summ").append(FRQstring);  
 $$(".FRQ32link").on('click',function(){
//       myApp.addNotification({
//       title: 'Free of Charge Items',
//        message: 'please choss from the item list with '+Qty+' JOD Amount'
//    });
     
    FRQDY=this.id;

  //   myApp.alert(index);
         console.log(TFRQ);
     mainView.router.loadPage('freeitems.html');
//     
});
           

}

function Equalquantity(itempak,packids,qun,b){
    
    var  z=localStorage.getItem('storeditem');
    //var  v=JSON.parse(z);
    var  v=Vendorespreated[b][0];
    for(var i=0;i<v.length;i++){
    for(var j=0;j<packids.length;j++){    
    if(v[i].PackID==packids[j]){
         // v[i].RequiredQuanity=qun;
        if(!freeitems.length){
            
        v[i].RequiredQuanity=v[i].RequiredQuanity+qun;
        freeitems.push(v[i]);
        }
        else{
        for(var c=0;c<freeitems.length;c++){
            if(v[i].PackID==freeitems[c].PackID){
               v[i].RequiredQuanity=v[i].RequiredQuanity+qun; freeitems[c].RequiredQuanity=freeitems[c].RequiredQuanity+v[i].RequiredQuanity;
            }else{
                
                
                    v[i].RequiredQuanity=v[i].RequiredQuanity+qun;
                freeitems.push(v[i]);break;}
        }
        }
    }   
        }
    }
  //  console.log(freeitems);
    var getimage3='';
        
        for(var f=0; f<vendoreinfo.length;f++){
            if(vendoreinfo[f].UniqeID==guessqout){
                getimage3=vendoreinfo[f].IMG;
                
            }
        }
    
     console.log(freeitems);
        if(!freeitems){}else{
            $$("#freeitem").html('');
            freestring='';
            for(var i=0;i<freeitems.length;i++){
                freestring+='<li  class="item-conte1nt test"><a style="color:black" href="#" class="item-lin1k item-content"><div class="item-media"><img src="'+getimage3+'" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+freeitems[i].ItemDescription +'</div><div class="item-after">Quantity: '+freeitems[i].RequiredQuanity+'</div></div><div class="item-subtitle">'+freeitems[i].Price+'</div></div></a></li>';
                
            }
            $$("#freeitem").append(freestring);
        }
}
 
function DiscountAmountGroup(itempak,packids,discount,v){
    
      var descount=discount;
     for(var t=0;t<proorder.ItemPacks.length;t++){
     for(var j=0;j<packids.length;j++){     
       if(proorder.ItemPacks[t].PackID==packids[j]){  
         descount=discount;
        var   proitemgross= proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
         if(proorder.ItemPacks[t].DiscountTypeID==2){
        var prodescount=(proorder.ItemPacks[t].Discount*100)/proitemgross;
    }else{prodescount=proorder.ItemPacks[t].Discount;}
        
        prodescount=proitemgross*(prodescount/100);
       var proitemtotal=proitemgross-prodescount;
     
        
        
        
        
        
                discount=(discount*100)/proitemtotal;
   // var discountamount =gross*(discount/100);
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    }
    }
    }
    
    
    
    
} 

function DiscountPercGroup(itempak,packids,discount,v){
//    
//     var qut=localStorage.getItem('Qut');
//    
//   var qutJ=JSON.parse(qut);
//    
//     for(var t=0;t<itempak.length;t++){
//    for(var j=0;j<packids.length;j++){
//    if(itempak[t].PackID==packids[j]){
//     //var c=localStorage.getItem(itempak[t].PackID);
//    var Discount=(discount*100)/itempak[t].Price;
//      //  var perc=(c.Discount*100)/itempak[t].Price;
//var gross=itempak[t].Price*itempak[t].RequiredQuanity;
//var discountamount =gross*(itempak[t].Discount/100);
//var PackNetTottal=gross-discountamount;
//var PackPromoted=PackNetTottal*(itempak[t].PromotedDiscount/100);
// PackNetTottal=PackNetTottal-PackPromoted;
//var Tax=PackNetTottal*(itempak[t].Tax/100);
//var Net=PackNetTottal+Tax;
//        itempak[t].PromotedDiscount=itempak[t].PromotedDiscount+PackPromoted;
//          proorder.NetTotal=proorder.NetTotal+Net;
//        proorder.Discount=proorder.Discount+discountamount;
//        proorder.Tax=proorder.Tax+Tax;
//        proorder.GrossTotal=proorder.GrossTotal+gross;
//        var calcpr={
//            "Gross":gross,
//            "NetTottal":Net,
//            "Tax":Tax,
//            "Discount":discountamount
//        }
//        localStorage.setItem("A"+itempak[t].PackID,calcpr);
//    } 
//    }
//    }    
//    
    var descount=discount;
    
     for(var t=0;t<proorder.ItemPacks.length;t++){
     for(var j=0;j<packids.length;j++){     
    //     discount=descount;
       if(proorder.ItemPacks[t].PackID==packids[j]){  
         
       //  var //gross=proorder.ItemPacks[t].Price*proorder.ItemPacks[t].RequiredQuanity;
   // var discountamount =gross*(discount/100);
        proorder.ItemPacks[t].PromotedDiscount= proorder.ItemPacks[t].PromotedDiscount+discount;
    }
    }
    }
    
}
//Active button on tabbar
myApp.onPageInit('RET', function (page){
    
        $$("#FinsihReturn").hide();
        $$("#homeicon").removeClass('homaeactive');
        $$("#homeicon").addClass('homedefult');
        $$("#searchicon").addClass('searchinactive');
        $$("#searchicon").removeClass('searchactive');
        $$("#reordericon").addClass('reorderinactive');
        $$("#reordericon").removeClass('reorderactive');
        $$("#ordericon").addClass('myorderactive');
        $$("#ordericon").removeClass('myorderinactive');
    $$("#bk").on('click',function(){
        mainView.router.loadPage('Returnedi.html');
 $$("#FinsihReturn").show();
     
    });
    mainView.showNavbar();
    mainView.showToolbar();
    
    var IOAl=localStorage.getItem('Returnitems');
  if(IOAl==''){}
    else{
        if(!ReturnedItems.length){$$("#retoff").show();$$("#reton").hide();return;}else
  var IOAlist=ReturnedItems;
   // console.log(IOAlist);
     html='';
        if(!IOAlist.length){return;}
        
        var pupgross=0.0;
        var pupnettotal=0.0;
    for (var i = 0; i <IOAlist.length; i++)
    {
       // console.log(IOAlist[i].ItemDescription);
       html += '<li  class="item-conte1nt test" id="' + IOAlist[i].ItemID  + '"  data-ItemCode="'+IOAlist[i].ItemCode+'" data-ItemBarcode="'+IOAlist[i].ItemBarcode+'" data-PackID="'+IOAlist[i].PackID+'" data-UOM="'+IOAlist[i].UOM+'" data-RequiredQuanity="'+IOAlist[i].RequiredQuanity+'" data-Price="'+IOAlist[i].Price+'" data-Tax="'+IOAlist[i].Tax+'" data-Discount="'+IOAlist[i].Discount+'" data-PiecesInPack="'+IOAlist[i].PiecesInPack+'" data-IsDefaultPack="'+IOAlist[i].IsDefaultPack+'" data-PackGroupID="'+IOAlist[i].PackGroupID+'" data-IsAdded="'+IOAlist[i].IsAdded+'" data-DiscountTypeID="'+IOAlist[i].DiscountTypeID+'" data-ItemID="'+IOAlist[i].ItemID+'" data-ItemDescription="'+IOAlist[i].ItemDescription+'" data-pack="'+IOAlist[i].PackTypeID+'"><a style="color:black" href="#" class="ite1m-link item-content"><div class="item-media"><img src="./images/icons/nes.jpg" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+IOAlist[i].ItemDescription +'</div><div class="item-after">Quantity: '+IOAlist[i].RequiredQuanity+'</div></div><div class="item-subt1itle">'+IOAlist[i].Price+'</div></div></a></li>';
       // var NetTottal=NetTottal+IOAlist[i].Price;
        
        var retprice=parseFloat(IOAlist[i].Price);
        var retqty=parseFloat(IOAlist[i].RequiredQuanity);
    
      var Returngross=0.0;
      var Returnnetotal=0.0;   
        Returngross =retprice*retqty;
        Returnnetotal=Returngross;
        pupgross=pupgross+Returngross;
        pupnettotal=pupnettotal+Returnnetotal;
   //     console.log(Net);
        
    }  
        $$('#list').append(html);
     var truncated2 = Math.floor(pupnettotal * 100) / 100;
     var truncated1 = Math.floor(pupgross * 100) / 100;
        
    $$("#returnNet").html(truncated2+" JOD");
   // $$("#retungro").html("Gross Tottal : "+truncated1+" JOD")    
          

    
    
    }
      ///////////////start of appending bundells
    
    
    ///////////////end of appending bundells
    
    var calclautions=localStorage.getItem('orderlist33');
//    var zera=JSON.parse(calclautions);
//    for(var i=0;i<zera.length;i++){
//      var calc=localStorage.getItem(JSON.parse(zera[i].PackID)); 
//      }
//    var nettottal=0.0;
//    var grosso=0.0;
//    var Tax=0.0;
//    var Discount=0.0;
//    for(var j=0;j<calcarr.length;j++){
//        var nettottal =nettottal+calcarr[j].NetTottal;
//        var grosso =grosso+calcarr[j].Gross;
//        var Tax =Tax+calcarr[j].Tax;
//        var Discount =Discount+calcarr[j].Discount;
//    }
    
//     $$("#des").html("Discount Tottal : "+Discount);
//     $$("#tax").html("Tax Tottal : "+Tax);
//     $$("#gro").html("Gross Tottal : "+grosso);
   var tyu=9;
    tyu=tyu+1;
    var d = new Date();
    var n = d.getTime();
    var i1=localStorage.getItem("CU_id");
                var i2=localStorage.getItem("OUT_id");
                i1=parseInt(i1);
                i2=parseInt(i2);
    var OrderJsonObject=
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
  "NetTotal": pupnettotal,
  "GrossTotal": pupgross,
  "Tax": 0,
  "Discount":0,
  "PromotedDiscount": 0,
  "TempOrderID":n
}
    
$$("#cancel2").on('click',function(){
    var string='';
        var langtext=localStorage.getItem('lang');
        if(langtext==1){string='Are you sure you want to cancel this order?'}else{string='هل انت متاكد من الغاءالطلب';}
        myApp.confirm(string, 'EOA', 
      function () {
        OrderList=[];
            //localStorage.setItem('orderlist33',JSON.stringify(OrderList));
        $$("#list").empty();
        $$("#bundlelist").empty();
    //    mybundle=[];
         IOAlist=[];   
        $$("#returnNet").html("0.00"+curency);
       
        $$("#reton").hide(); $$("#retoff").show();
    
});
});
$$('#Qut123').once('click',function(){
     
        
    myApp.showPreloader("Loading");
   // console.log(OrderJsonObject);
     OrderJsonObject.ItemPacks=IOAlist;
        localStorage.setItem('orderr',JSON.stringify(OrderJsonObject));
      //  console.log(OrderJsonObject);
    for(var i=0;i< OrderJsonObject.ItemPacks.length;i++){
        OrderJsonObject.ItemPacks[i].Tax=0.0;
        OrderJsonObject.ItemPacks[i].Discount=0.0;
    }
   // console.log(IOAlist);
 $$.post(""+url+"/SendOrder",
      OrderJsonObject,
        function(data,status){
     
     //SentOrders.push(OrderJsonObject);
    console.log(data);
   localStorage.setItem("SentOrders",JSON.stringify(SentOrders));
   localStorage.setItem('orderlist33','');
     myApp.hidePreloader("Loading");
     var krons=JSON.parse(data);
     proorder=krons;
     localStorage.setItem('Qut',data);
     myApp.alert('your Order for Returning the Items was Successfuly Submited');
     
    mainView.router.loadPage('about.html');
     $$("#FinsihReturn").hide();
        });
     
    });
});
    


function checkAndAdd(name) {
  var id = arr.length + 1;
  var found = arr.some(function (el) {
    return el.username === name;
  });
  if (!found) { arr.push({ id: id, username: name }); }
}