

function status1 (data) {
	
	
//      $$("#Recvied").html('');
//      $$("#Approved").html('');
//      $$("#Dilvred").html('');
	$$("#status").show();
	$$("#var").hide();
//    if(count==1){return;}
	var recvied ='';
	var approved ='';
	var history ='';
	var WaitForLoad='';
	var LoadRequestAccepted='';
	var Invoiced='';
	var Rescheduled='';
	var Rejected='';
	var Delivered='';
	var Deleted='';
	var Closed='';
	var RejectCompleted='';
	var Canceled='';
	var OnHold='';
	var LockedtoRN='';
	var Collected='';
	var NewAfterUpdate='';
	var ComplementaryOrder='';
	for(var o=0;o<data.length; o++){
		
		  var   orderrecived='';
	var    reoreder='';
		var lang=localStorage.getItem('lang');
		if(lang==1){orderrecived='Order Received';
		reoreder='Reorder';}else{orderrecived='استلم الطلب';
		reoreder='اعادة طلب';}
		var stringon='';
		
		
		
		 if(data[o].Status==1){stringon=orderrecived}
  var       ide = data[o].OrderID.substr(data[o].OrderID.length - 5);
		
		
		
		 switch (data[o].Status) {
				
			case 1:
			  stringon=  'Order Received';
				break;
			case 2:
				 stringon=  'Approved';
				break;
			case 3 :
				 stringon='Assigned';
				break;
				  case 4 :
				 stringon='Wait For Load';
				break;
				  case 5 :
				 stringon='Load Request Accepted';
				break;
				  case 6 :
				 stringon='Invoiced';
				break;
				  case 7 :
				 stringon='Rescheduled';
				break;
				  case 8 :
				 stringon='Rejected';
				break;
				  case 9 :
				 stringon='Delivered';
				break;
				  case 10:
				 stringon='Deleted';
				break;
				  case 11 :
				 stringon='Closed';
				break;
				  case 12 :
				 stringon='Reject Completed';
				break;
				  case 13 :
				 stringon='Canceled';
				break;
				  case 14 :
				 stringon='OnHold';
				break;
				  case 15 :
				 stringon='Locked to RN';
				break;
				  case 16 :
				 stringon='Collected';
				break;
				  case 17 :
				 stringon='New After Update';
				break;
				 case 18 :
				 stringon='Complementary Order';
				break;
		}
		//its me
		;
		var vendorename=getnamevendore(data[o].VendorName);
		 stringon=vendorename;
		   vendorename='';
	   if(data[o].Status ==1 ){
		  
		   recvied+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a id="'+ide+'" data-vendid="'+data[o].VendorName+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   } else if(data[o].Status ==2 || data[o].Status ==3 || data[o].Status ==4){
		   approved+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   } else if(false ){
		   history+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(false ){
		   WaitForLoad+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a  data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else
		if(false ){
		   LoadRequestAccepted+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==7 ){
		   history+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   } else if(data[o].Status ==6 || data[o].Status ==5 ){
		   Invoiced+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==8 ){
		   Rescheduled+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+vendorename+'</div><div class="item-after"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==9 ){
		   Rejected+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==8 ){
		   Delivered+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==10 || data[o].Status ==11   ){
		   Deleted+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(false ){
		   Closed+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==13|| data[o].Status ==12){
		   RejectCompleted+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(false ){
		   Canceled+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a  data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==14 ){
		   OnHold+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==15 ){
		   LockedtoRN+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==16 ){
		   Collected+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==17 ){
		   NewAfterUpdate+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }else if(data[o].Status ==18 ){
		   ComplementaryOrder+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+data[o].OrderDate+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="Q'+ide+'" ></ul></div></div> </div></div><a data-vendid="'+data[o].VendorName+'"  id="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
	   }
	}
	if(recvied==''){$$("#Recvied").hide();$$("#lblRecvied").hide();}else{$$("#Recvied").show();$$("#lblRecvied").show();}
	  $$("#Recvied").html('');
	$$("#Recvied").append(recvied);
	
  
	
	if(approved==''){$$("#Approved").hide();$$("#lblApproved").hide();}else{$$("#Approved").show();$$("#lblApproved").show();}
		$$("#Approved").html('');
	$$("#Approved").prepend(approved);

	if(history==''){$$("#Dilvred").hide();$$("#lblDilvred").hide();}else{$$("#Dilvred").show();$$("#lblDilvred").show();}
	$$("#Dilvred").prepend(history);
	
	if(WaitForLoad==''){$$("#WaitForLoad").hide();$$("#lblWaitForLoad").hide();}else{$$("#WaitForLoad").show();$$("#lblWaitForLoad").show();}
	 $$("#WaitForLoad").html('');
	$$("#WaitForLoad").append(WaitForLoad);
	
	 if(LoadRequestAccepted==''){$$("#LoadRequestAccepted").hide();$$("#lblLoadRequestAccepted").hide();}else{$$("#LoadRequestAccepted").show();$$("#lblLoadRequestAccepted").show();}
	  $$("#LoadRequestAccepted").html('');
	$$("#LoadRequestAccepted").append(LoadRequestAccepted);
	
	if(Invoiced==''){$$("#Invoiced").hide();$$("#lblInvoiced").hide();}else{$$("#Invoiced").show();$$("#lblInvoiced").show();}
	  $$("#Invoiced").html('');
	$$("#Invoiced").append(Invoiced);
	
	if(Rescheduled==''){$$("#Rescheduled").hide();$$("#lblRescheduled").hide();}else{$$("#Rescheduled").show();$$("#lblRescheduled").show();}
	 $$("#Rescheduled").html('');
	$$("#Rescheduled").append(Rescheduled);
	
	 if(Rejected==''){$$("#Rejected").hide();$$("#lblRejected").hide();}else{$$("#Rejected").show();$$("#lblRejected").show();}
	  $$("#Rejected").html('');
	$$("#Rejected").append(Rejected);
	
	
	 if(Delivered==''){$$("#Delivered").hide();$$("#lblDelivered").hide();}else{$$("#Delivered").show();$$("#lblDelivered").show();}
	 $$("#Delivered").html('');
	$$("#Delivered").append(Delivered);
	
	 if(Deleted==''){$$("#Deleted").hide();$$("#lblDeleted").hide();}else{$$("#Deleted").show();$$("#lblDelivered").show();}
	 $$("#Deleted").html('');
	$$("#Deleted").append(Deleted);
	
	if(Closed==''){$$("#Closed").hide();$$("#lblClosed").hide();}else{$$("#Closed").show();$$("#lblClosed").show();}
	 $$("#Closed").html('');
	$$("#Closed").append(Closed);
	
	 if(RejectCompleted==''){$$("#RejectCompleted").hide();$$("#lblRejectCompleted").hide();}else{$$("#RejectCompleted").show();$$("#lblRejectCompleted").show();}
	 $$("#RejectCompleted").html('');
	$$("#RejectCompleted").append(RejectCompleted);
	
	 if(Canceled==''){$$("#Canceled").hide();$$("#lblCanceled").hide();}else{$$("#Canceled").show();$$("#lblCanceled").show();}
	 $$("#Canceled").html('');
	$$("#Canceled").append(Canceled);
	
	 if(OnHold==''){$$("#OnHold").hide();$$("#lblOnHold").hide();}else{$$("#OnHold").show();$$("#lblOnHold").show();}
	 $$("#OnHold").html('');
	$$("#OnHold").append(OnHold);
	
	 if(LockedtoRN==''){$$("#LockedtoRN").hide();$$("#lblLockedtoRN").hide();}else{$$("#LockedtoRN").show();$$("#lblLockedtoRN").show();}
	 $$("#LockedtoRN").html('');
	$$("#LockedtoRN").append(LockedtoRN);
	
	 if(Collected==''){$$("#Collected").hide();$$("#lblCollected").hide();}else{$$("#Collected").show();$$("#lblCollected").show();}
	 $$("#Collected").html('');
	$$("#Collected").append(Collected);
	
	 if(NewAfterUpdate==''){$$("#NewAfterUpdate").hide();$$("#lblNewAfterUpdate").hide();}else{$$("#NewAfterUpdate").show();$$("#lblNewAfterUpdate").show();}
	 $$("#NewAfterUpdate").html('');
	$$("#NewAfterUpdate").append(NewAfterUpdate);
	
	 if(ComplementaryOrder==''){$$("#ComplementaryOrder").hide();$$("#lblComplementaryOrder").hide();}else{$$("#ComplementaryOrder").show();$$("#lblComplementaryOrder").show();}
	 $$("#ComplementaryOrder").html('');
	$$("#ComplementaryOrder").append(ComplementaryOrder);
	
	 for (var c in data) {
		
		
	 var items2='';
			 var   ide2=data[c].OrderID.substr(data[c].OrderID.length - 5);
	var arr =reorderarray[data[c].VendorName+ide2];
	for (var items=0;items<arr.length;items++){
	items2+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+arr[items].ItemDescription+'</div><div class="item-after"><span class="badge">'+arr[items].RequiredQuanity+'</span></div></div></li>';}
	$$("#Q"+ide2).html('');       
	$$("#Q"+ide2).prepend(items2);

		 }
	
	
	
   $$(".VVV").on('click',function(){
		;
		myApp.alert('Order Clone',"EOA");
		var index=this.id;
		var vendid=$$(this).data('vendid');
	console.log(reorderarray[vendid+index]);
		 reorder(reorderarray[vendid+index],vendid);
	 pagecounter();
	 });
   
	count=1;
}

function history (data) {
	
	$$("#var").show();
	  $$("#status").hide();
//        if(count2==1){return;}
	 var pardiv=''
	 $$("#var").html('');
	for(var i=0; i<data.length;i++){
		
		if(i==0){
			pardiv+='<div id="">'+data[i].OrderDate.slice(0,-9)+'<div id="UI'+data[i].OrderDate.slice(0,-9)+'"></div></div>';
		}else
		if(data[i].OrderDate.slice(0,-9) != data[i-1].OrderDate.slice(0,-9)){
			 pardiv+='<div id="">'+data[i].OrderDate.slice(0,-9)+'<div id="UI'+data[i].OrderDate.slice(0,-9)+'"></div></div>';
		}
		
	}
	 $$("#var").html('');
	$$("#var").append(pardiv);
	
   
	for(var ss=0;ss<data.length; ss++){
		 html=''; 
		if(ss==0){
		html='';    
		
	for(var e=0;e<data.length; e++){
	 var   orderrecived='';
	var    reoreder='';
		var lang=localStorage.getItem('lang');
		if(lang==1){orderrecived='Order Received';
		reoreder='Reorder';}else{orderrecived='استلم الطلب';
		reoreder='اعادة طلب';}
		var stringon='';
	  
		switch (data[e].Status) {
				
			case 1:
			  stringon=  'Order Received';
				break;
			case 2:
				 stringon=  'Approved';
				break;
			case 3 :
				 stringon='Assigned';
				break;
				  case 4 :
				 stringon='Wait For Load';
				break;
				  case 5 :
				 stringon='Load Request Accepted';
				break;
				  case 6 :
				 stringon='Invoiced';
				break;
				  case 7 :
				 stringon='Rescheduled';
				break;
				  case 8 :
				 stringon='Rejected';
				break;
				  case 9 :
				 stringon='Delivered';
				break;
				  case 10:
				 stringon='Deleted';
				break;
				  case 11 :
				 stringon='Closed';
				break;
				  case 12 :
				 stringon='Reject Completed';
				break;
				  case 13 :
				 stringon='Canceled';
				break;
				  case 14 :
				 stringon='OnHold';
				break;
				  case 15 :
				 stringon='Locked to RN';
				break;
				  case 16 :
				 stringon='Collected';
				break;
				  case 17 :
				 stringon='New After Update';
				break;
				 case 18 :
				 stringon='Complementary Order';
				break;
		}
		   var vendorename=getnamevendore(data[e].VendorName);
		
		if(e==0){}else
		if(data[e].OrderDate.slice(0,-9) != data[e-1].OrderDate.slice(0,-9)){break;}
   var     ide = data[e].OrderID.substr(data[e].OrderID.length - 5);
   //  var   ide=data[e].OrderID.replaceAll("\\s+","");
		var Time='';
				  Time=data[ss].OrderDate.substr(data[ss].OrderDate.length - 5);
		 html+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">Time :'+Time+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after">'+vendorename+'</div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="F'+ide+'" ></ul></div></div> </div></div><a data-venid="'+data[e].VendorName+'" data-cla="'+ide+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
		}
	   
				$$("#UI"+data[ss].OrderDate.slice(0,-9)).html('');
	$$("#UI"+data[ss].OrderDate.slice(0,-9)).append(html);
		  
			html='';
			 for (var c in data) {
		
		
	 var items2='';
			 var   ide2=data[c].OrderID.substr(data[c].OrderID.length - 5);
	var arr =reorderarray[data[c].VendorName+ide2];
	for (var items=0;items<arr.length;items++){
	items2+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+arr[items].ItemDescription+'</div><div class="item-after"><span class="badge">'+arr[items].RequiredQuanity+'</span></div></div></li>';}
	$$("#F"+ide2).html('');       
	$$("#F"+ide2).append(items2);

		 }
		}else if(data[ss].OrderDate != data[ss-1].OrderDate){
			  for(var k=0;k<data.length; k++){
			 var   orderrecived='';
	var    reoreder='';
		var lang=localStorage.getItem('lang');
		if(lang==1){orderrecived='Order Received';
		reoreder='Reorder';}else{orderrecived='استلم الطلب';
		reoreder='اعادة طلب';}
		var stringon='';
		html='';          
		switch (data[k].Status) {
				
			case 1:
			  stringon=  'Order Received';
				break;
			case 2:
				 stringon=  'Approved';
				break;
			case 3 :
				 stringon='Assigned';
				break;
				  case 4 :
				 stringon='Wait For Load';
				break;
				  case 5 :
				 stringon='Load Request Accepted';
				break;
				  case 6 :
				 stringon='Invoiced';
				break;
				  case 7 :
				 stringon='Rescheduled';
				break;
				  case 8 :
				 stringon='Rejected';
				break;
				  case 9 :
				 stringon='Delivered';
				break;
				  case 10:
				 stringon='Deleted';
				break;
				  case 11 :
				 stringon='Closed';
				break;
				  case 12 :
				 stringon='Reject Completed';
				break;
				  case 13 :
				 stringon='Canceled';
				break;
				  case 14 :
				 stringon='OnHold';
				break;
				  case 15 :
				 stringon='Locked to RN';
				break;
				  case 16 :
				 stringon='Collected';
				break;
				  case 17 :
				 stringon='New After Update';
				break;
				 case 18 :
				 stringon='Complementary Order';
				break;
		}
				  
   var     ide = data[ss].OrderID.substr(data[ss].OrderID.length - 5);
   //  var   ide=data[e].OrderID.replaceAll("\\s+","");
				  var Time='';
				  Time=data[ss].OrderDate.substr(data[ss].OrderDate.length - 5);
		 html+='<div id="'+ide+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">Time :'+Time+' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">'+stringon+'</div><div class="item-after"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="F'+ide+'" ></ul></div></div> </div></div><a id="'+ss+''+ide+'" data-cla="'+ide+'"  data-venid="'+data[ss].VendorName+'" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >'+reoreder+'</a></ul></div>';
			  }
		}
	 //    $$("#UI"+data[ss].OrderDate.slice(0,-9)).html('');
	$$("#UI"+data[ss].OrderDate.slice(0,-9)).append(html);
	   
	}
	
	 $$(".VVV").on('click',function(){
		
		myApp.alert('Order Clone',"EOA");
//        for(var re=0;re<data.length;re++){
//            reorderarray=itembyid(data[re].OrderItems,data[re].OrderID,data[re].VendorName);
//        }
		 ;
		var index=$$(this).data('cla');
		var vendid=$$(this).data('venid');
	console.log(reorderarray[vendid+index]);
		 reorder(reorderarray[vendid+index],vendid);
	 pagecounter();
	 });
	
//    $$("#B"+data[z].OrderDate).html('');
//    $$("#B"+data[z].OrderDate).append(html);
	
	for (var c in data) {
		
		
	 var items2='';
			 var   ide2=data[c].OrderID.substr(data[c].OrderID.length - 5);
	var arr =reorderarray[data[c].VendorName+ide2];
	for (var items=0;items<arr.length;items++){
	items2+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+arr[items].ItemDescription+'</div><div class="item-after"><span class="badge">'+arr[items].RequiredQuanity+'</span></div></div></li>';}
	$$("#F"+ide2).html('');       
	$$("#F"+ide2).append(items2);

		 }
	count2=1;
	if(!$$("ul").length){
	var parent =  this.parent();
	 var parent2=parent.parent();
		parent2.remove();
	}
	$(' [id]').each(function () {
	$('[id="' + this.id + '"]:gt(0)').remove();
});
	
}

function Vendore (data){
   var li='';
	for(var i=0; i<vendoreinfo.length;i++){
		 if( customerids["A"+vendoreinfo[i].input]!==undefined){
				li+='<div id="">'+vendoreinfo[i].name+'<div id="UI'+vendoreinfo[i].UniqeID+'"></div></div>';
		 }

	}
	$$("#Vendor").html('');
	$$("#Vendor").append(li);

	var data21 = data;
	   html=''; 
	   var groubedData = groupBy(data, function (item) {
		   return [item.VendorName];
	   });
	   for (var ig = 0; ig < groubedData.length; ig++) {
		   html = ''; 
		   data = groubedData[ig];
		   for (var k = 0; k < data.length; k++) {
			   var orderrecived = '';
			   var reoreder = '';
			   var lang = localStorage.getItem('lang');
			   if (lang == 1) {
				   orderrecived = 'Order Received';
				   reoreder = 'Reorder';
			   } else {
				   orderrecived = 'استلم الطلب';
				   reoreder = 'اعادة طلب';
			   }
			   var stringon = '';

			   switch (data[k].Status) {

				   case 1:
					   stringon = 'Order Received';
					   break;
				   case 2:
					   stringon = 'Approved';
					   break;
				   case 3:
					   stringon = 'Assigned';
					   break;
				   case 4:
					   stringon = 'Wait For Load';
					   break;
				   case 5:
					   stringon = 'Load Request Accepted';
					   break;
				   case 6:
					   stringon = 'Invoiced';
					   break;
				   case 7:
					   stringon = 'Rescheduled';
					   break;
				   case 8:
					   stringon = 'Rejected';
					   break;
				   case 9:
					   stringon = 'Delivered';
					   break;
				   case 10:
					   stringon = 'Deleted';
					   break;
				   case 11:
					   stringon = 'Closed';
					   break;
				   case 12:
					   stringon = 'Reject Completed';
					   break;
				   case 13:
					   stringon = 'Canceled';
					   break;
				   case 14:
					   stringon = 'OnHold';
					   break;
				   case 15:
					   stringon = 'Locked to RN';
					   break;
				   case 16:
					   stringon = 'Collected';
					   break;
				   case 17:
					   stringon = 'New After Update';
					   break;
				   case 18:
					   stringon = 'Complementary Order';
					   break;
			   }

			   var ide = data[k].OrderID.substr(data[k].OrderID.length - 5);
			   var orignal = data[k].VendorName + ide;
			   //  var   ide=data[e].OrderID.replaceAll("\\s+","");

			   html += '<div id="' + data[k].VendorName + '" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">' + data[k].OrderDate + ' <span style="float:right"> </span></div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">' + stringon + '</div><div class="item-after"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-b2lock in2set"><ul id="F' + orignal + '" ></ul></div></div> </div></div><a data-venid="' + data[k].VendorName + '" data-cla="' + ide + '" id="' + data[k].VendorName + '" href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class=" reorder VVV button" >' + reoreder + '</a></ul></div>';
			   //$$("#UI" + data[k].VendorName).html('');
			  
		   } $$("#UI" + data[ig].VendorName).append(html);
	   }
	   

	
	
	
	$$(".VVV").on('click',function(){
		
		myApp.alert('Order Clone',"EOA");
		var index=$$(this).data('cla');
		var vendid=$$(this).data('venid');
	console.log(reorderarray[vendid+index]);
		 reorder(reorderarray[vendid+index],vendid);
	 pagecounter();
	 });
	
	
	
	for (var i = 0; i < data21.length; i++){    
	
var inerrlist='';
		var ide = data21[i].OrderID.substr(data21[i].OrderID.length - 5);
var orignal = data21[i].VendorName+ide;
	   var arr = reorderarray[orignal];
  for (var items=0;items<arr.length;items++){
	inerrlist+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+arr[items].ItemDescription+'</div><div class="item-after"><span class="badge">'+arr[items].RequiredQuanity+'</span></div></div></li>';}
  $$("#F" + orignal).append(inerrlist);
	}
//     $(' [id]').each(function () {
//    $('[id="' + this.id + '"]:gt(0)').remove();
//});
	

}

function GetOffers(count){
	;
	 if(count>=vendoreinfo.length){
		   localStorage.setItem("Offers33",JSON.stringify(arrayofoffers));
		AppendOffers();
		return;
	}
	
	var lang=localStorage.getItem('lang');
		
// myApp.showPreloader("Loading");
  if(typeof customerids["A"+vendoreinfo[count].input] == "undefined"){
	  count+=1;
			 GetOffers(count);
			
 }else{
  CU_id=  customerids["A"+vendoreinfo[count].input][0];
  OUT_id=  customerids["A"+vendoreinfo[count].input][1];
 }
	
	if(count>=vendoreinfo.length){return}
  $$.ajax(
	{
		url: ""+vendoreinfo[count].URL+"/offers?customerID="+CU_id+"&outletID="+OUT_id+"&languageID="+lang+"",
		method: "Get",
		success: function (data, xhr)
		{
			;
			//alert("offres")
		   
			if(data=="null"){}else{
		 var c=JSON.parse(data);
//        alert(data);
		console.log(c);
			for(var H=0;H<c.length;H++){
			c[H].VendorName=vendoreinfo[count].UniqeID;
				}
			arrayofoffers.push.apply(arrayofoffers,c);         
 }

		 //   GetOffers(count)
		 //localStorage.setItem("Offers33",data);
	   // AppendOffers();
			  count+=1;
			
			GetOffers(count);
	   //  myApp.hidePreloader("Loading");
		},
		error: function (jqXhr, textStatus, errorThrown)
		{
		 
		}
	});
	}

function AppendOffers(){
	
 var vendorRname='';
	   $$("#offers").html('');
	var offers =localStorage.getItem("Offers33");
	 if(offers=="" || offers ==null || offers =='null'){return;}
  
	offers=JSON.parse(offers);
var li='';
	var lnag=localStorage.getItem('lang');
	var string='';
	if(lnag ==1 ){ string='Offer Requirements';}else{ string ='متطلبات العرض';}
	for(var i=0; i<offers.length;i++){
		for(var JJ=0; JJ<vendoreinfo.length;JJ++){
			if(vendoreinfo[JJ].UniqeID==offers[i].VendorName){
				vendorRname=vendoreinfo[JJ].name;
			}
		}
   // li+='<div class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-title" style="font-size:89%;">'+offers[i].Description+'</div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">Offer Input</div><div class="item-after"></div></div></div></li></ul><div class="co1ntent-block ins1et"><ul id="off'+offers[i].PromotionID+'" ></ul><ul id="or'+offers[i].PromotionID+'"></ul><hr><div class="item-title" style="padding-left:5%">Offer Output</div><ul id="out'+offers[i].PromotionID+'" ></ul></div> </div></div><a href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold"  class="" ></a></ul></div>';
		//Offers there baby
		var shadow = '0 1px 2px rgba(0,0,0,.3);';
		if(isAndroid){shadow='0 1px 2px rgba(0,0,0,.3);';}else{shadow='0 1px 2px rgba(0,0,0,.3);';}
	//li+='<div class="list-block inset"><ul style="box-shadow:'+shadow+'"><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"><div id="lo'+offers[i].PromotionID+'" class="item-title" style="font-size:89%;">'+vendorRname+' '+offers[i].Description+'</div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title" style="    font-weight: bold; color:#00695c">If you buy </div><div class="item-after"></div></div></div></li></ul><div id="ot'+offers[i].PromotionID+'"></div><div class="co1ntent-block ins1et"><div class="item-title" style="padding-left:5%; color:#00695c; font-weight: bold;">You will get</div><ul id="out'+offers[i].PromotionID+'" ></ul></div> </div></div></ul></div>';    
        li += `<li class="swipeout card" style="border-left: dashed 3px rgba(0,0,0,0.3) !important;">
                                        <!-- Usual list element wrapped with "swipeout-content" -->
                                        <div class="swipeout-content">
                                            <!-- Your list element here -->
                                            <div class="item-content">
                                                <div class="item-media"><i class="icon icon-coupon"></i></div>
                                                <div class="item-inner">`+ vendorRname + `-` + offers[i].Description +`</div>
                                            </div>

                                        </div>
                                        <div class="swipeout-actions-right">
                                            <!-- Swipeout actions links/buttons -->

                                            <a id="`+ offers[i].PromotionID + `" class="swipeout-close my_green" href="#"><i class="icon-next"></i></a>
                                        </div>
                                        <div class="card-footer">
                                            <a href="#" class="link">View Details</a>
                                        </div>
                                    </li>`;
    }
	 $$("#offers109").html('');
	$$("#offers109").append(li);
	//<a href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" id="'+offers[i].PromotionID+'"  class="button offer" >'+string+'</a>

	
for(var i=0; i<offers.length;i++){    
  
	var proid=offers[i].PromotionID;
	var obj = offers[i].InputOptions;
	obj=obj[proid];  
	var ul='';
	for(var m=0; m<obj.length; m++)
	{
		var string=JSON.stringify(proid)+JSON.stringify(obj[m].OptionID);
		if(m==0){
		ul +='<ul id="AB'+string+'"></ul>';
		}
		else
		ul +='<span style="margin-left:5%">OR</span><ul id="AB'+string+'"></ul>';    
		
	}
	$$("#ot"+proid).html('');
	$$("#ot"+proid).append(ul);
	
	
 //  obj=obj[proid];  
	console.log(obj);
	var obj2;
	var obj2=obj[0];    
	obj=obj2.CalculatedPromotionDetails;
	var optid=obj2.OptionID;    
obj=obj[optid];
 //   var inputs=''; 
   
	}
	
	/////////uls
   
for(var i=0; i<offers.length;i++){    

	var proid=offers[i].PromotionID;
	var obj = offers[i].InputOptions;
   obj=obj[proid];  
var promo_id=obj
	for(var mn=0; mn<promo_id.length;mn++){
		
		var innerobj=promo_id[mn];
		var calutedoptions=innerobj.CalculatedPromotionDetails;
		var optionid=innerobj.OptionID;
		var innerdata=calutedoptions[optionid];
	   var strdingdata='';
		var apendeingstring=JSON.stringify(proid)+JSON.stringify(optionid);
		for(var ki=0;ki<innerdata.length;ki++)
		{
			strdingdata +='<li class="item-content"><div class="item-i11nner VR"><div class="item-ti1tle">- '+innerdata[ki].Description+'.</div></div></li>';
		}
		 $$("#AB"+apendeingstring).html('');
		$$("#AB"+apendeingstring).append(strdingdata);
		
	}

	}
  
	
	
	
	for(var i=0; i<offers.length;i++){    
   
	var proid=offers[i].PromotionID;
	var obj = offers[i].CalculatedOptions;
   obj=obj[proid];  
	console.log(obj);
	var obj2;
	var obj2=obj[0];    
	obj=obj2.CalculatedPromotionDetails;
	var optid=obj2.OptionID;    
obj=obj[optid];
	var inputs=''; 
	for(var j=0;j<obj.length;j++){
		console.log(obj[j]);
	   // obj=obj[0];
	inputs +='<li class="item-content"><div class="item-in1ner"><div class="item-titl1xe">'+obj[j].Description+'</div></div></li>';
	console.log(obj[j].Description);
	}
	   $$("#out"+proid).html('');  
	$$("#out"+proid).append(inputs);
	}
	
	
$$(".offer").on('click',function(){
	var l =localStorage.getItem('lang');
	if(l==1){    myApp.alert('the offer input is added to offer requirements',"EOA"); }else{myApp.alert('تمت اضافة متطلبات العرض',"EOA");}

	var splitByLastDot = function(text) {
	var index = text.lastIndexOf('.');
	return [text.slice(0, index), text.slice(index + 1)]
}
	

	   var offid=this.id;
	var c=$$("#ot"+offid).text();
	var n=$$("#lo"+offid).text();
	var name = c.split("-");
		console.log(c);
	var string='';
	for(var i=0; i<name.length;i++){ 
		
		if(name[i]==''){}else{
		 name[i]= name[i].slice(1);
string+="<li><div class='content-block' style='margin-top:0%; margin-bottom:10px'><div class='item-inner'>"+name[i]+"</div></div></li>";
	}
	}
	popover=string;
	popovertit=n;
//    myApp.alert(string);
//     myApp.addNotification({
//        title: 'EOA',
//        message:string,// 'c.split("[\\r\\n]+")',
//         media:''
//    });
////});
////    
//    
	
});
	
//         myApp.hidePreloader("Loading");
}

function GetTransction(){
	for(var i=0;i<vendoreinfo.length;i++){
		if(vendoreinfo[i].UniqeID==stataccc){
			url=vendoreinfo[i].URL;
		}
	}
	var lang=localStorage.getItem('lang');
		
	 var idbund=localStorage.getItem('userid');
			var i1=1;
				var i2=1;
			var i1=localStorage.getItem("CU_id"+idbund);
				var i2=localStorage.getItem("OUT_id"+idbund);
				i1=parseInt(i1);
				i2=parseInt(i2);
 myApp.showPreloader("Loading");
  $$.ajax(
	{
		url: ""+url+"/SOA?customerID=2894&outletID=1&languageID=1",
		method: "Get",
		success: function (data, xhr)
		{
			 myApp.hidePreloader("Loading");
			if(data==null || data=="null"){$$("#on").hide(); $$("#of").show(); return;}
			var nettottal_transctions=0.0;
	var cridte_transctions=0.0;
		   
		 localStorage.setItem("Transction",data);
			
		console.log(JSON.parse(data));
			data=JSON.parse(data);
			for(var Tra=0;Tra<data.length;Tra++){
				
				if(data[Tra].TransactionType==5){
				cridte_transctions=cridte_transctions+  data[Tra].RemainingAmount;
				}
				else{        
			 nettottal_transctions=nettottal_transctions+  data[Tra].RemainingAmount ;
				}
			}
		  var curencyTemp = "";
			$$("#total_outstand").html(nettottal_transctions+curencyTemp);
	$$("#total_note").html(cridte_transctions+curencyTemp);
		
		},
		error: function (jqXhr, textStatus, errorThrown)
		{
		 
		}
	});
	}

//function GetOrderStatues(){
//    var langs=localStorage.getItem('lang');
//       myApp.showPreloader(loading);
//    $$.ajax(
//    {
//        url: 'http://213.186.179.126:5010/InCubeApp/api/OrderStatus?customerID=1&outletID=1&statusesFilter="1,2,3"',
//        method: "Get",
//        success: function (data, xhr)
//        {
//           
//         localStorage.setItem("OrderStauts",data);
//           // console.log(JSON.parse(localStorage.getItem('OrderStauts')));
//         myApp.hidePreloader(loading);
//            var items=JSON.parse(localStorage.getItem('OrderStauts'));
//            
//            neworders='';
//            var newli=items[1];
//            var newlii=newli[0];
//            $$.each( newli, function( key, value ) {
// console.log(key+' '+value);
//                var orderkey=key.slice(-3);
//                
//                 neworders+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
//});
//             $$('#new').append(neworders);
//            
//       var     newli2=items[2];
//              neworr='';
//             $$.each( newli2, function( key, value ) {
// console.log(key+' '+value);
//                var orderkey=key.slice(-3);
//                 neworr+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
//});
//            $$("#approve").html(neworr);
//            
// var newli3=items[3];
//              neworir='';
//             $$.each( newli3, function( key, value ) {
// console.log(key+' '+value);
//                var orderkey=key.slice(-3);
//                 neworir+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
//});
//            $$("#hsitory").html(neworir);
//            
//            
//        },
//        error: function (jqXhr, textStatus, errorThrown)
//        {
//            myApp.hidePreloader(loading);
//        }
//    });
//    
//}

function getHist(){
	
	var id=localStorage.getItem('userid');
	var json={
		"_id":id
	}
	 var urlAjax = "http://eoamiddlewareservice.azurewebsites.net/api/gteHistory";
	$$.ajax(
	{
		method: "post",
		url: urlAjax,
		contentType: 'application/json',
		data:JSON.stringify(json),
		dataType: "json",
		success: function (data, status, xhr)
		{
	   FF=data[0].Ordershistory; 
			   count2=0;
				Histroydata='';
			GetOrderHistory(FF,count2);
		}
	});
}

function GetOrderHistory(stringop,counturl){
	
	if(typeof vendoreinfo == "undefined"){$$("#on").hide();$$("#off").show(); }
 if(counturl>=vendoreinfo.length){
	 var jasond = JSON.parse(Histroydata.replace("][",","));
	 for(var re=0;re<jasond.length;re++){
			reorderarray=itembyid(jasond[re].OrderItems,jasond[re].OrderID,jasond[re].VendorName);
		}
	 status1(jasond);
	 
		
		console.log(reorderarray);
	 
	 
	 
	 
	 
	 
//       $$(".VVV").on('click',function(){
//        
//        myApp.alert('Order Clone','EOA');
//        for(var re=0;re<data.length;re++){
//            reorderarray=itembyid(data[re].OrderItems,data[re].OrderID);
//        }
//        var index=this.id;
//    console.log(reorderarray[index]);
//         reorder(reorderarray[index]);
//     
//     });
//       
	   

	
	
	 $('#OrderDate').click(function() {

		$$("#var").show();
		$$("#status").hide();
		$$("#Vendor").hide();
		history(jasond);
		$$("#OrderDate").addClass('active');
		 $$("#Status").removeClass('active');
		 $$("#vendoreb").removeClass('active');

		var id = $(this).attr('id');
		var asc = (!$(this).attr('asc')); 
		
	  
		$('#headings th').each(function() {
			$(this).removeAttr('asc');
		});
		if (asc) $(this).attr('asc', 'asc');
  
	});
		
			
	 $('#Status').click(function() {
	
		 $$("#status").show();
		 $$("#Vendor").hide();
		 $$("#var").hide();
		 status1(jasond);
		 $$("#Status").addClass('active');
		 $$("#OrderDate").removeClass('active');
		 $$("#vendoreb").removeClass('active');

	});      
	 
	 $$("#vendoreb").on("click",function(){
		 $$("#status").hide();
		 $$("#Vendor").show();
		 $$("#var").hide();
		 Vendore(jasond);
		 $$("#Status").removeClass('active');
		 $$("#OrderDate").removeClass('active');
		 $$("#vendoreb").addClass('active');
	 });
	 
	 
	 
	 return;
 } 
   count=0;
	count2=0;
	
	var idbund=localStorage.getItem('userid');
			var i1=1;
				var i2=1;
			var i1=localStorage.getItem("CU_id"+idbund);
				var i2=localStorage.getItem("OUT_id"+idbund);
				i1=parseInt(i1);
				i2=parseInt(i2);

	
	
 if(typeof customerids["A"+vendoreinfo[count].input] == "undefined"){
//       counturl+=1;
//       GetOrderHistory(stringop,counturl);
	 return;
			
 }else{
 var CU_id=  customerids["A"+vendoreinfo[count].input][0];
  var OUT_id=  customerids["A"+vendoreinfo[count].input][1];
 }
	
	var string=localStorage.getItem('stat'); 
  var obj={
 "CustomerID": CU_id,
  "OutletID": OUT_id,
  "StatusesFilter" :"",
  "OrderIDsFilter" :stringop,
	  "LanguageID":1
}
 
  if(stringop==null || stringop==""){$$("#on").hide();$$("#off").show();}else{
$$("#on").show();$$("#off").hide();
	//  myApp.showPreloader("loading");
	$$.post(vendoreinfo[counturl].URL+"/Statuses",
	  obj,
		function(data,status){
		
	  //  data=JSON.stringify(data);
	 var   dataimp=JSON.parse(data);
		if(data=="null"){}else{
		for(var i=0; i<dataimp.length;i++){
			dataimp[i].VendorName=vendoreinfo[counturl].UniqeID;
		}
	
		Histroydata+=JSON.stringify(dataimp); 
		myApp.hidePreloader("loading");
		localStorage.setItem('History',Histroydata);}
	   // if(data=="null" || data==null){return;}
   //  data=JSON.parse(data);
		$$("#var").html('');
		$$("#Recvied").html('');
		$$("#Approved").html('');
		$$("#Dilvred").html('');
	   
		   counturl+=1;
	   GetOrderHistory(stringop,counturl);
	 
	});
}
}

function GetOrderStatfilter(CU_id,OUT_id){
	
	var string=localStorage.getItem('stat');
	console.log(string);
  var obj={
 
  "CustomerID": CU_id,
  "OutletID": OUT_id,
  "StatusesFilter" : "1,2,3",
  "OrderIDsFilter" : string
}
  if(string==null){}else{
  myApp.showPreloader("loading");
	$$.post("http://213.186.179.126:5010/InCubeApp/api/Statuses",
	  obj,
		function(data,status){//
	$$("#orderlistshow").show();
		if(obj.OrderIDsFilter==''){$$("#orderstatlists").append('<div style="margin-left:7%; font-size: large;  margin-top:40%; margin-bottom:40%;">you dont have any orders in your list</div>'); $$(".content-bloc1k").hide(); return;}
		$$(".content-bloc1k").show();
	 
		console.log(data);
		myApp.hidePreloader("loading");
	   //  var items=JSON.parse(localStorage.getItem('OrderStauts'));
		var items=JSON.parse(data);
			
			neworders='';
			var newli=items[1];
			var newlii=newli[0];
		 if(typeof newli == "undefined"){$$("#NEW").hide(); $$("#new").hide();}else{$$("#NEW").show(); $$("#new").show();}
			$$.each( newli, function( key, value ) {
 console.log(key+' '+value);
				var orderkey=key.slice(-3);
				
				 neworders+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
});
			 $$('#new').append(neworders);
			
	   var     newli2=items[2];
			  neworr='';
		if(typeof newli2 == "undefined"){$$("#approve").hide(); $$("#APR").hide();}else{$$("#approve").show(); $$("#APR").show();}
			 $$.each( newli2, function( key, value ) {
 console.log(key+' '+value);
				var orderkey=key.slice(-3);
				 neworr+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
});
			$$("#approve").html(neworr);
			
 var newli3=items[3];
			  neworir='';
		 if(typeof newli3 == "undefined"){$$("#hsitory").hide(); $$("#HIS").hide();}else{$$("#hsitory").show(); $$("#HIS").hide();}
			 $$.each( newli3, function( key, value ) {
 console.log(key+' '+value);
				var orderkey=key.slice(-3);
				 neworir+='<li class="item-content"><div class="item-inner"><div class="item-title">'+orderkey+'</div><div class="item-after">'+value+'</div></div></li>'
});
			$$("#hsitory").html(neworir);
			
		
		
		
	});
  }
			}

function GetNetle(CU_id,OUT_id){
	var lng = localStorage.getItem('lang')
	myApp.showPreloader(loading);
	$$.ajax(
	{
		url: ""+url+"/Items?customerID="+CU_id+"&outletID="+OUT_id+"&languageID="+lng+"",
		method: "Get",
	   
		success: function (data, xhr)
		{
			
			localStorage.setItem("storeditem",data);
	  
		},
		error: function (jqXhr, textStatus, errorThrown)
		{
				
		  myApp.alert('error','EOA');
			 myApp.hidePreloader();
		}
	});   
}


function GetBundless(CU_id,OUT_id,count){

	 if(count>=vendoreinfo.length){
		 var offercounter=0;
		   
		 console.log(localStorage.getItem("Bundless"));
	   BundelGrouping();
		   //  AppenedBundle();
			GetOffers(offercounter);
		return;
	}
		var lang=localStorage.getItem('lang'); 

  $$.ajax(
	{
		url: ""+vendoreinfo[count].URL+"/Bundles?customerID="+CU_id+"&outletID="+OUT_id+"&languageID="+lang+"",
		method: "Get",
		
		success: function (data, xhr)
		{
			
			
		myApp.hidePreloader(loading);
		
		  //  
			if(data==null || data=="null"){}else{
				data=JSON.parse(data);
				for(var d=0;d<data.length;d++){
				   data[d].VendorName=vendoreinfo[count].UniqeID;
				}
			arryofbundells.push.apply(arryofbundells,data);
			 localStorage.setItem("Bundless",JSON.stringify(arryofbundells));}
		 var idbund=localStorage.getItem('userid');
			var i1=1;
				var i2=1;
			var i1=localStorage.getItem("CU_id"+idbund);
				var i2=localStorage.getItem("OUT_id"+idbund);
				i1=parseInt(i1);
				i2=parseInt(i2);
			count+=1;
			
			
			
		 // GetBundless(i1,i2,count);    
			
},
		error: function (jqXhr, textStatus, errorThrown)
		{    var string='';
		var langtext=localStorage.getItem('lang');
		if(langtext==1){string='Error, Bad internet connection'}else{string='عذرا هناك خطاء في الشبكة';}
			myApp.alert(string,'EOA');
			myApp.hidePreloader(loading);     
		}
	});
	
	}

function BundelGrouping(){
   
	var Bundle =localStorage.getItem("Bundless");
	var Bundels=JSON.parse(Bundle);
	if(Bundels==null){return;}
	for(var i=0;i<Bundels.length;i++){
		var  Bundle=[];
	var BundleDetalies = Bundels[i].BundleDetails;
		$$.each(BundleDetalies,function(key,val){
		  //  var Key =parseInt(key);
			
			var data=search(Bundels[i].VendorName,key);
			var value=JSON.parse(data);
			value.RequiredQuanity=val;
			Bundle.push(value);
		});
		var BundleID=Bundels[i].BundleID;
		var bundlestring=JSON.stringify(Bundle);
		localStorage.setItem("A"+BundleID,bundlestring);
		var test= localStorage.getItem(BundleID);
		
	   // console.log(JSON.parse(test));
	}
  
}

function search(data,key){
	
   var z = localStorage.getItem("Packid"+data+key);

	return z;
}

function groupBy( array , f ){
  var groups = {};
  array.forEach( function( o )
  {
	var group = JSON.stringify( f(o) );
	groups[group] = groups[group] || [];
	groups[group].push( o );  
  });
  return Object.keys(groups).map( function( group )
  {
	return groups[group]; 
  })
}

function Summation(data){
	//var data= localStorage.getItem("storeditem");
var list =JSON.parse(data);
	
	var result = groupBy(list, function(item)
{
  return [item.ItemID];
});
	
	
		   
		   for(var i=0;i <result.length ; i++ ){
			
var String=JSON.stringify(result[i]);
var test= result[i];
var test2= test[0].ItemID;              
var test3= test[0].PackID;              
localStorage.setItem(test2,String);
			  // console.log(test2);
			//   console.log(JSON.parse(localStorage.getItem(test2)));
			   
	}
  
   
}

function Summationreturn(data){
	//var data= localStorage.getItem("storeditem");
var list =JSON.parse(data);
	
	var result = groupBy(list, function(item)
{
  return [item.ItemID];
});
	
	
		   
		   for(var i=0;i <result.length ; i++ ){
			
var String=JSON.stringify(result[i]);
var test= result[i];
var test2= test[0].ItemID;              
var test3= test[0].PackID;              
localStorage.setItem("Ret"+test2,String);
			  // console.log(test2);
			//   console.log(JSON.parse(localStorage.getItem(test2)));
			   
	}
  
   
}

function AppenedSumm(){
	
 
	 var test = localStorage.getItem("ItemID");
	if(test==''){return;}
  //  var number =parseInt(test);
	var id=localStorage.getItem(test);
	
  
	var items=JSON.parse(id);
	console.log(items);
	  html='';
	for (var i = 0; i <items.length; i++)
	{   if(items[i].Price==0){}else{
		if(i==0){
	   html += '<li  id="'+items[i].PackID+'"  data-pack="'+items[i].PackTypeID+'" data-Discount="'+items[i].Discount+'" data-Tax="'+items[i].Tax+'" data-Price="'+items[i].Price+'" data-PackID="'+items[i].PackID+'"><label class="label-radio item-content"><input type="radio" name="my-radio" checked="checked"><div  class="item-inner"><div class="item-title">'+items[i].UOM+'</div><div class="item-after">'+curency+''+items[i].Price+'</div></div></label></li>';
		console.log(items[i].PackID);
		   }
		else {
			 html += '<li id="'+items[i].PackID+'" data-Discount="'+items[i].Discount+'" data-Tax="'+items[i].Tax+'" data-pack="'+items[i].PackTypeID+'" data-Price="'+items[i].Price+'" data-PackID="'+items[i].PackID+'"><label class="label-radio item-content"><input type="radio" name="my-radio" ><div class="item-inner"><div class="item-title">'+items[i].UOM+'</div><div class="item-after">'+curency+''+items[i].Price+'</div></div></label></li>';
		 console.log(items[i].PackID);
		}}
	}  
		$$('#UOM').append(html);
	 $('[id]').each(function () {
	$('[id="' + this.id + '"]:gt(0)').remove();
});
}

function AppendPromotions(){
		   
	var promotions=localStorage.getItem("promtions");
	if(promotions==''){return}
	var promotion=JSON.parse(promotions);
	
	promotion.pop();
	  html='';
	  picker='';
	for (var i = 0; i <promotion.length;i++)
	{
		
		var P=promotion[i].PromotionInputs[1];
		var P1=P[1].OptionDetailDescriptions.English;
		
		var PO=promotion[i].PromotionOutputs[2];
		
		var PO2=PO[2].CurrentLanguageDescription;
		var id=0;
		 id =id+i;
	//   html +='<li class="item-content"><div class="item-inner"><a class="item-title open-picker" data-picker=".picker-'+i+'">If you buy you will get'+ P1 + '</a></div></li>';
		
	   html +='<li class="item-content"><div class="card"><div class="card-header">Bundless</div><div class="card-content"><div class="card-content-inner">'+P1+'</div></div><div class="card-footer"><a class="item-title open-picker" data-picker=".picker-'+i+'">Add to my Bundless</a></div></li>';
		
		picker +='<div class="picker-modal picker-'+i+'"><div class="toolbar"> <div class="toolbar-inner"> <div class="left"></div><div class="right"><a href="#" class="close-picker">Done</a></div></div></div><div class="picker-modal-inner"><div class="content-block"><h4>you will get</h4><p>'+PO2+'</p></div></div></div>';
	}  
		$$('#promotionslist').append(html);
		$$('#pickers').append(picker);
		
	  }

function AppendItems(){
	;
	 $$('#itemlist').html(''); 
	if(typeof vendoreinfo == "undefined"){return}

	var storeditem=localStorage.getItem("storeditem");
	if(storeditem=="" || storeditem ==null || storeditem=="null"  ||storeditem=="[]"){
		$$("#nesslist").hide(); 
		return;}else{       $$("#nesslist").show();}
	var items=JSON.parse(storeditem);
		
		  var arritem=[];
   
	
	var vendorename="";
	var Vendoreimage="";
	
	 html='';
	for (var i = 0; i <8; i++)
	{
		
		
	  //  Vendoreimage=getimagevendore(items[i].VendorName);
		
//        if(=="UNITR1"){
//         vendorename=vendoreinfo[0].name;
//         Vendoreimage=;
//        }else{
//            
//            vendorename=vendoreinfo[1].name;
//         Vendoreimage=vendoreinfo[1].IMG;
//        }
		vendorename=getnamevendore(items[i].VendorName);
Vendoreimage=GetImage(items[i].ItemID);
		var Q=1;
		i
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var c=i-1;
		if(arritem[c]==items[i].ItemID){}else
		if(items[i].Price==0){}else{
			//  console.log(imgsrc);
			//mahmoud saleh
			
		//html+='<li  class="item-conte1nt test" id="' + items[i].ItemID  + '" data-VendorName="'+items[i].VendorName+'" data-ItemCode="'+items[i].ItemCode+'" data-ItemBarcode="'+items[i].ItemBarcode+'" data-PackID="'+items[i].PackID+'" data-UOM="'+items[i].UOM+'" data-RequiredQuanity="'+items[i].RequiredQuanity+'" data-Price="'+items[i].Price+'" data-Tax="'+items[i].Tax+'" data-Discount="'+items[i].Discount+'" data-PiecesInPack="'+items[i].PiecesInPack+'" data-IsDefaultPack="'+items[i].IsDefaultPack+'" data-PackGroupID="'+items[i].PackGroupID+'" data-IsAdded="'+items[i].IsAdded+'" data-DiscountTypeID="'+items[i].DiscountTypeID+'" data-ItemID="'+items[i].ItemID+'" data-ItemDescription="'+items[i].ItemDescription+'" data-pack="'+items[i].PackTypeID+'"><a href="#" class="item-link item-content"><div class="item-media" style="width:40px; height:40px"><img class="Strechimage" src="'+Vendoreimage+'" id="ii'+items[i].ItemID+'" style="width:40px;" ></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after" style="padding-top: 1.5%;font-size: smaller;" >'+curency+items[i].Price+'</div></div><div class="item-subtitle">'+vendorename+'</div></div></a></li>';
			html += `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" id="ii`+ items[i].ItemID + `"  src="` + Vendoreimage +`">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">product name</div>
								<div class="item-text">`+ items[i].ItemDescription + `</div>
								<div class="item-title-row">`+ vendorename + `<span class="price_in_card">` + curency + items[i].Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link">Add To Order</a>
										<a href="#" class="link view_details_btn"
						id="` + items[i].ItemID + `" 
						data-VendorName="`+ items[i].VendorName + `" 
						data-ItemCode="`+ items[i].ItemCode + `" 
						data-ItemBarcode="`+ items[i].ItemBarcode + `" 
						data-PackID="`+ items[i].PackID + `" 
						data-UOM="`+ items[i].UOM + `" 
						data-RequiredQuanity="`+ items[i].RequiredQuanity + `" 
						data-Price="`+ items[i].Price + `" data-Tax="` + items[i].Tax + `" 
						data-Discount="`+ items[i].Discount + `" 
						data-PiecesInPack="`+ items[i].PiecesInPack + `" 
						data-IsDefaultPack="`+ items[i].IsDefaultPack + `" 
						data-PackGroupID="`+ items[i].PackGroupID + `" 
						data-IsAdded="`+ items[i].IsAdded + `" 
						data-DiscountTypeID="`+ items[i].DiscountTypeID + `" 
						data-ItemID="`+ items[i].ItemID + `" 
						data-ItemDescription="`+ items[i].ItemDescription + `" 
						data-pack="`+ items[i].PackTypeID + `">View Details
					</a>
				</div>
			</li>`;




			arritem.push(items[i].ItemID);
			
			
//            var img = new Image();
//img.src = 'http://213.186.179.126:5010//InCubeApp/ItemsImages/'+items[i].ItemID+'.jpg';
//img.onload = function() {
//  //alert(this.width + 'x' + this.height);
//    if(this.width>this.height)
//    {
//        
//        $$("#ii"+items[i].ItemID).css('width',"auto");
//        
//    }else if (this.width<this.height){
//         $$("#ii"+items[i].ItemID).css('height',"auto");
//    }
//}

			
		}
	}  
	
		$$('#itemlist').append(html);    
	
	
	
	
	  //mainView.router.loadPage('about.html');
	
	
	var loading = false;
 
// Last loaded index
var lastIndex = $$('.list-block li').length;
 
// Max items to load
var maxItems = items.length;
 
// Append items per load
var itemsPerLoad = 20;
 
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
	var lastIndex = $$('.list-block li').length;
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
	// Reset loading flag
	 
	loading = false;
 
	if (lastIndex >= maxItems) {
	  // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
	  myApp.detachInfiniteScroll($$('.infinite-scroll'));
	  // Remove preloader
	  $$('.infinite-scroll-preloader').remove();
	  return;
	}
 
	// Generate new items HTML
	var html = '';
	for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
	  //html += ;
		 
		   
		 vendorename=getnamevendore(items[i].VendorName);
Vendoreimage=GetImage(items[i].ItemID);
		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var c=i-1;
		if(arritem[c]==items[i].ItemID){}else
		if(items[i].Price==0){}else{
	//  console.log(imgsrc);
		//html+='<li  class="item-conte1nt test" ><a href="#" class="item-link item-content"><div class="item-media" style="width:40px; height:40px"><img class="Strechimage" src="'+Vendoreimage+'" id="ii'+items[i].ItemID+'" style="width:40px;" ></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after" style="padding-top: 1.5%;font-size: smaller;" >'+curency+items[i].Price+'</div></div><div class="item-subtitle">'+vendorename+'</div></div></a></li>';
			html += `<li class="card">
				<div class="card-content">
						<div class="item-content" style="padding:6px">
							<div class="item-media">
								<img class="Strechimage" id="ii`+ items[i].ItemID + `"  src="` + Vendoreimage +`">
							</div>
							<div class="card_list_content">
								<div class="item-title-row">product name</div>
								<div class="item-text">`+ items[i].ItemDescription + `</div>
								<div class="item-title-row">`+ vendorename + `<span class="price_in_card">` + curency + items[i].Price + `</span></div>
							</div>
						</div>
				</div>
				<div class="card-footer">
					<a href="#" class="link">Add To Order</a>
					<a href="#" class="link view_details_btn"
						id="` + items[i].ItemID + `" 
						data-VendorName="`+ items[i].VendorName + `" 
						data-ItemCode="`+ items[i].ItemCode + `" 
						data-ItemBarcode="`+ items[i].ItemBarcode + `" 
						data-PackID="`+ items[i].PackID + `" 
						data-UOM="`+ items[i].UOM + `" 
						data-RequiredQuanity="`+ items[i].RequiredQuanity + `" 
						data-Price="`+ items[i].Price + `" data-Tax="` + items[i].Tax + `" 
						data-Discount="`+ items[i].Discount + `" 
						data-PiecesInPack="`+ items[i].PiecesInPack + `" 
						data-IsDefaultPack="`+ items[i].IsDefaultPack + `" 
						data-PackGroupID="`+ items[i].PackGroupID + `" 
						data-IsAdded="`+ items[i].IsAdded + `" 
						data-DiscountTypeID="`+ items[i].DiscountTypeID + `" 
						data-ItemID="`+ items[i].ItemID + `" 
						data-ItemDescription="`+ items[i].ItemDescription + `" 
						data-pack="`+ items[i].PackTypeID + `">View Details
					</a>
				</div>
			</li>`;
			arritem.push(items[i].ItemID);
		}
	}
 
	// Append new items
	  
	$$('#itemlist').append(html);
 
	// Update last loaded index
	lastIndex = $$('#itemlist').length;
  }, 1000);
});          
	
	
	//change click place 
	
	
$$('#itemlist').on('click','li .view_details_btn', function () {
		
		var id = this.id;
		var pack = $$(this).data('ItemID');
		var ItemID = $$(this).data('ItemID');
		var ItemDescription = $$(this).data('ItemDescription');
		var ItemCode = $$(this).data('ItemCode');
		var ItemBarcode = $$(".test2").data('ItemBarcode');
		var UOM = $$(this).data('UOM');
		var Tax = $$(this).data('Tax');
		 var VendorName = $$(this).data('VendorName');
		var Discount = $$(this).data('Discount');
		var PiecesInPack = $$(this).data('PiecesInPack');
		var IsDefaultPack = $$(this).data('IsDefaultPack');
		var PackGroupID = $$(this).data('PackGroupID');
		var IsAdded = $$(this).data('IsAdded');
		var DiscountTypeID = $$("#" + id).data('DiscountTypeID');
		var price = $$(this).data("price");
		var packid = $$(this).data('PackID');
		var PackTypeID = $$(this).data('pack');
		var RequiredQuanity = $$(this).data('RequiredQuanity');
		if (RequiredQuanity == 0) {
			RequiredQuanity = 1
		}
		
		if (DiscountTypeID == 2) {
			var Discount = (Discount * 100) / price;
			localStorage.setItem("Discount", Discount);
		} else {
			localStorage.setItem("Discount", Discount)
		}

		localStorage.setItem("PackTypeID", PackTypeID);
		localStorage.setItem("packid", packid);
		localStorage.setItem("pack", pack);
		localStorage.setItem("ItemID", ItemID);
		localStorage.setItem("ItemDescription", ItemDescription);
		localStorage.setItem("ItemCode", ItemCode);
		localStorage.setItem("ItemBarcode", ItemBarcode);
		localStorage.setItem("UOM", UOM);
		localStorage.setItem("Tax", Tax);
		localStorage.setItem("VendorName", VendorName);
		
		// localStorage.setItem("Discount",Discount);
		localStorage.setItem("PiecesInPack", PiecesInPack);
		localStorage.setItem("IsDefaultPack", IsDefaultPack);
		localStorage.setItem("PackGroupID", PackGroupID);
		localStorage.setItem("IsAdded", IsAdded);
		localStorage.setItem("DiscountTypeID", 1);
		localStorage.setItem("Price", price);
		mainView.router.loadPage({
			url: 'itemdet.html',
			force: true
		});
	});

	
	
	
	
	
	 
}

function AppendItemsVendore(arr23){
	
	var storeditem=localStorage.getItem("storeditem");
	if(storeditem==""){return;}
	var items=arr23;
		
		  var arritem=[];
	   //    (Price,Discount,Tax,Quntity,DiscountType)
	  html='';
	for (var i = 0; i <items.length; i++)
	{
		
		localStorage.setItem("bar"+items[i].ItemBarcode,items[i]);
		var lang=localStorage.getItem('lang');
		var nestle='';
		if(lang==1){ nestle='Unitra';}else{nestle='نستله';}
		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var c=i-1;
		gmg='';
		for(var g=0;g<vendoreinfo.length;g++){
			if(vendoreinfo[g].UniqeID==guesswhat)
			 gmg =vendoreinfo[g].IMG;
		}
		
	 //    var vendorename=getnamevendore(items[i].VendorName);
Vendoreimage=GetImage(items[i].ItemID);
		if(arritem[c]==items[i].ItemID){}else
		if(items[i].Price==0){}else
            //Am there
           // html += '<li  class="item-conte1nt test" id="' + items[i].ItemID + '" data-VendorName="' + items[i].VendorName + '" data-ItemCode="' + items[i].ItemCode + '" data-ItemBarcode="' + items[i].ItemBarcode + '" data-PackID="' + items[i].PackID + '" data-UOM="' + items[i].UOM + '" data-RequiredQuanity="' + items[i].RequiredQuanity + '" data-Price="' + items[i].Price + '" data-Tax="' + items[i].Tax + '" data-Discount="' + items[i].Discount + '" data-PiecesInPack="' + items[i].PiecesInPack + '" data-IsDefaultPack="' + items[i].IsDefaultPack + '" data-PackGroupID="' + items[i].PackGroupID + '" data-IsAdded="' + items[i].IsAdded + '" data-DiscountTypeID="' + items[i].DiscountTypeID + '" data-ItemID="' + items[i].ItemID + '" data-ItemDescription="' + items[i].ItemDescription + '" data-pack="' + items[i].PackTypeID + '"><a href="#" class="item-link item-content"><div class="item-media"style="width:40px; height:40px"><img class="Strechimage" src="' + Vendoreimage + '" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">' + items[i].ItemDescription + '</div><div class="item-after" style="padding-top: 1.5%;font-size: smaller;" >       </div></div><div class="item-subtitle">' + curency + items[i].Price + '</div></div></a></li>';
            html += `
                        <li class="item-conte1nt test" 
		                         id="` + items[i].ItemID + `" 
		                         data-VendorName="` + items[i].VendorName + `"
		                         data-ItemCode="` + items[i].ItemCode + `" 
		                         data-ItemBarcode="` + items[i].ItemBarcode + `" 
		                         data-PackID="` + items[i].PackID + `" 
		                         data-UOM="` + items[i].UOM + `" 
		                         data-RequiredQuanity="` + items[i].RequiredQuanity + `" 
		                         data-Price="` + items[i].Price + `" 
		                         data-Tax="` + items[i].Tax + `" 
		                         data-Discount="` + items[i].Discount + `" 
		                         data-PiecesInPack="` + items[i].PiecesInPack + `" 
		                         data-IsDefaultPack="` + items[i].IsDefaultPack + `" 
		                         data-PackGroupID="` + items[i].PackGroupID + `" 
		                         data-IsAdded="` + items[i].IsAdded + `" 
		                         data-DiscountTypeID="` + items[i].DiscountTypeID + `" 
		                         data-ItemID="` + items[i].ItemID + `" 
		                         data-ItemDescription="` + items[i].ItemDescription + `" 
		                         data-pack="` + items[i].PackTypeID + `">
                         <a href="#" class="item-link item-content">
                            <div class="item-media"><img src="`+ Vendoreimage + `" width="80"  /></div>
                             <div class="item-inner">
                              <div class="item-title">`+ items[i].ItemDescription + ` <br /><span class="green_text">` + curency + items[i].Price + `</span></div>
                             </div>
                          </a>
                        </li>
`
        arritem.push(items[i].ItemID);
	}  
		$$('#nes').append(html);    
	
}

function AppendRetunedItems(){
   
	 $$('#retuneditmes').html(''); 

	var storeditem=localStorage.getItem("storeditem");
//    if(storeditem=="" || storeditem ==null || storeditem=="null"){
//        $$("#nesslist").hide(); 
//        return;}else{       $$("#nesslist").show();}
	var items=JSON.parse(storeditem);
		
		//  var arritem=[];
   
	
	var vendorename="";
	var Vendoreimage="";
	
	 html='';
	for (var i = 0; i <10; i++)
	{
		 vendorename=getnamevendore(items[i].VendorName);
Vendoreimage=GetImage(items[i].ItemID);

		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var c=i-1;
//        if(arritem[c]==items[i].ItemID){}else
		if(false){}else{
	//  console.log(imgsrc);
		html+='<li  class="item-conte1nt test" id="' + items[i].ItemID  + '" data-VendorName="'+items[i].VendorName+'" data-ItemCode="'+items[i].ItemCode+'" data-ItemBarcode="'+items[i].ItemBarcode+'" data-PackID="'+items[i].PackID+'" data-UOM="'+items[i].UOM+'" data-RequiredQuanity="'+items[i].RequiredQuanity+'" data-Price="'+items[i].Price+'" data-Tax="'+items[i].Tax+'" data-Discount="'+items[i].Discount+'" data-PiecesInPack="'+items[i].PiecesInPack+'" data-IsDefaultPack="'+items[i].IsDefaultPack+'" data-PackGroupID="'+items[i].PackGroupID+'" data-IsAdded="'+items[i].IsAdded+'" data-DiscountTypeID="'+items[i].DiscountTypeID+'" data-ItemID="'+items[i].ItemID+'" data-ItemDescription="'+items[i].ItemDescription+'" data-pack="'+items[i].PackTypeID+'"><a href="#" class="item-link item-content"><div class="item-media" style="width:40px; height:40px"><img class="Strechimage" src="'+Vendoreimage+'" id="ii'+items[i].ItemID+'" style="width:40px;" ></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after" style="padding-top: 1.5%;font-size: smaller;" >'+curency+items[i].Price+'</div></div><div class="item-subtitle">'+vendorename+'</div></div></a></li>';
	   // arritem.push(items[i].ItemID);
			
			
//            var img = new Image();
//img.src = 'http://213.186.179.126:5010//InCubeApp/ItemsImages/'+items[i].ItemID+'.jpg';
//img.onload = function() {
//  //alert(this.width + 'x' + this.height);
//    if(this.width>this.height)
//    {
//        
//        $$("#ii"+items[i].ItemID).css('width',"auto");
//        
//    }else if (this.width<this.height){
//         $$("#ii"+items[i].ItemID).css('height',"auto");
//    }
//}

			
		}
	}  
	
		$$('#retuneditmes').append(html);    
	
	
	
	
	
	
	
	var loading = false;
 
// Last loaded index
var lastIndex = $$('.list-block li').length;
 
// Max items to load
var maxItems = items.length;
 
// Append items per load
var itemsPerLoad = 20;
 
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
	var lastIndex = $$('.list-block li').length;
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
	// Reset loading flag
	  
	loading = false;
 
	if (lastIndex >= maxItems) {
	  // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
	  myApp.detachInfiniteScroll($$('.infinite-scroll'));
	  // Remove preloader
	  $$('.infinite-scroll-preloader').remove();
	  return;
	}
 
	// Generate new items HTML
	var html = '';
	for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
	  //html += ;
		 if(items[i].VendorName=="UNITR1"){
		 vendorename=vendoreinfo[0].name;
		 Vendoreimage=vendoreinfo[0].IMG;
		}else{
			
			vendorename=vendoreinfo[1].name;
		 Vendoreimage=vendoreinfo[1].IMG;
		}
		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var c=i-1;
		
	   
	//  console.log(imgsrc);
		html+='<li  class="item-conte1nt test" id="' + items[i].ItemID  + '"  data-ItemCode="'+items[i].ItemCode+'" data-ItemBarcode="'+items[i].ItemBarcode+'" data-PackID="'+items[i].PackID+'" data-UOM="'+items[i].UOM+'" data-RequiredQuanity="'+items[i].RequiredQuanity+'" data-Price="'+items[i].Price+'" data-Tax="'+items[i].Tax+'" data-Discount="'+items[i].Discount+'" data-PiecesInPack="'+items[i].PiecesInPack+'" data-IsDefaultPack="'+items[i].IsDefaultPack+'" data-PackGroupID="'+items[i].PackGroupID+'" data-IsAdded="'+items[i].IsAdded+'" data-DiscountTypeID="'+items[i].DiscountTypeID+'" data-ItemID="'+items[i].ItemID+'" data-ItemDescription="'+items[i].ItemDescription+'" data-pack="'+items[i].PackTypeID+'"><a href="#" class="item-link item-content"><div class="item-media"><img src="'+Vendoreimage+'" id="ii'+items[i].ItemID+'" style="width:40px;" ></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after" style="padding-top: 1.5%;font-size: smaller;" >'+curency+items[i].Price+'</div></div><div class="item-subtitle">'+vendorename+'</div></div></a></li>';
		//arritem.push(items[i].ItemID);}
	}
 
	// Append new items
	  
	$$('#retuneditmes').append(html);
 
	// Update last loaded index
	lastIndex = $$('#retuneditmes').length;
  }, 1000);
});        
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// $$('#retuneditmes').append(html);    
	
}

function AppenedBundle(){
	vendoreeenmae='';

	var Bundle =localStorage.getItem("Bundless");
	if(Bundle=="" || Bundle==null || Bundle=="null" ){$$("#bundof").show(); $$("#bundon").hide(); return;}else{$$("#bundof").hide(); $$("#bundon").show();}
	var Bundels=JSON.parse(Bundle);
	console.log(Bundels);
	items='';
	html='';
	 $$("#bundel").html('');
	for (var i=0;i<Bundels.length;i++){
		for(var Ve=0; Ve<vendoreinfo.length; Ve++){
			if(vendoreinfo[Ve].UniqeID==Bundels[i].VendorName){
				vendoreeenmae=vendoreinfo[Ve].name;
			}
		}
		var BundleBenfit=0.0;
	var test=Bundels[i];
	var BundleId=Bundels[i].BundleID;
	var BundledName=Bundels[i].BundleName; 
		bundellsname["A"+BundleId]=[];
		bundellsname["A"+BundleId].push(BundledName);
	   
	var intB=parseInt(BundleId);
	 
  var inner=  localStorage.getItem("A"+intB);    
  var InnerItems= JSON.parse(inner);
  var InnerItems2= JSON.parse(inner);
		
 var BundledDiscountAmmount=Bundels[i].DiscountAmount; 
	var BundledDiscountPercantge=Bundels[i].DiscountPercentage;
		var pricingbundels=0.0;
	   for(var v=0;v<InnerItems2.length;v++){
		 
		 pricingbundels=pricingbundels+(InnerItems2[v].Price*1);
		}
		console.log("bundle price "+pricingbundels);
		var t=0;
		var Ratio=0;
		if(BundledDiscountAmmount !=0){
			for (var m=0; m< InnerItems2.length;m++){
				  t+=InnerItems2[m].RequiredQuanity;
			}
			   Ratio=BundledDiscountAmmount/t;
			for(var z=0; z<InnerItems2.length;z++){
				
			   // alert(Ratio);Discount Amount / sum (qty) = x
//( X / item price ) * 100 = promoted discount per item
 InnerItems2[z].PromotedDiscount=(Ratio/InnerItems2[z].Price)*100;
				
		   
			  //  InnerItems2[z].RequiredQuanity=1;
			 
			   
				//var k=InnerItems[i].PromotedDiscount;
//                var pr= parseFloat(k.Price);
//                BundleBenfit=BundleBenfit+pr;
			}
			 var c=calclution_price(InnerItems2);
//            var CB=c.nettotal-BundledDiscountAmmount;
			pricingbundels=c.nettotal;
			bundvalue["V"+intB]=pricingbundels;
			//BundleBenfit=BundledDiscountAmmount-BundleBenfit;
		}   
		else if(BundledDiscountPercantge !=0){
			 for(var z=0; z<InnerItems.length;z++){
				 var k=InnerItems[z];
				 InnerItems[z].RequiredQuanity=1;
				 InnerItems[z].PromotedDiscount=BundledDiscountPercantge;
				var pr= parseFloat(k.Price);
				BundleBenfit=BundleBenfit+pr;
			}
			 var c=calclution_price(InnerItems);
			pricingbundels=c.nettotal;
			bundvalue["V"+intB]=pricingbundels;
			BundleBenfit=BundleBenfit*(BundledDiscountPercantge/100);
			
		}
		
		
	  //  html+='<div class="card" id="'+BundleId+'"><div class="card-header">'+BundledName+'<div style=""><input id="'+BundleId+'" class="number" type="number" style="margin-left:auto;float:right; width:10%; height:10%; border:solid; border-width:1px;"></div><div style="margin-left:auto; float:right">'+BundleBenfit+'</div></div><div class="card-content"><div class=""><ul id="A'+BundleId+'"></ul></div></div><div class="card-footer click" id="'+BundleId+'" >Add to my Bundels<div style="margin-left:auto; float:right;" id= AQ'+BundleId+'>price</div></div></div>';
//        
//        if( i==0){pricingbundels=3.86;
//          bundvalue["V"+257]=3.86;
//                 console.log('pric 1'+ bundvalue["V"+257]);}else{
//                     pricingbundels=4.85;
//          bundvalue["V"+273]=4.85;
//                      console.log('pric 2'+bundvalue["V"+273]);
//          }
		var  lang=localStorage.getItem('lang');
		var addmyorder='';
		if(lang==1){addmyorder='Add to my order';}else{addmyorder='الاضافة الى الطلب'}
		var shadow='0 1px 2px rgba(0,0,0,.3);';
		if(isAndroid){shadow='0 1px 2px rgba(0,0,0,.3);';}else{shadow='0 1px 2px rgba(0,0,0,.3);';}
		html+='<div class="list-block inset"><ul style="box-shadow:'+shadow+'"><div  style="disp1lay:inline-block" id="'+BundleId+'" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">'+vendoreeenmae+' '+BundledName+'</div><div id="PR1'+BundleId+'" style="color:#00695c;  font-size: 93%;" class"item-after">'+pricingbundels.toFixed(2)+''+curency+'</div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title">Savings from Offer</div><div class="item-after">'+BundleBenfit.toFixed(3)+''+curency+'</div></div></div></li></ul><div class="content-block inset"><ul id="A'+BundleId+'"></ul></div></div> </div></div><a href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" data-amm="'+BundledDiscountAmmount+'" data-perc="'+BundledDiscountPercantge+'" id="'+BundleId+'" data-uniq="'+Bundels[i].VendorName+'" class="bund picker-dev1ice button VC'+BundleId+'" >'+addmyorder+'</a></ul></div>';
		
	   // <div id="QT'+BundleId+'" style="color:#00695c; font-size:89%" class"item-after">0</div>
	}
	$$("#bundel").append(html);
	//card-content-inner
   
	$$(".bund").on('click',function(){
		
		var uniqe =$$(this).data("uniq");
			
			arraynow=[];
		   // mybundle[uniqe]=[];
	  var  x=this.id;
	  var discountamount22=$$(this).data("amm");
		discountamount22=parseFloat(discountamount22);
	  var discountperc22=$$(this).data("perc");
		discountperc22=parseInt(discountperc22);
   var  bundleprice=0.0;
	var string='';
	var lang=localStorage.getItem('lang');
	if(lang==1){string='how many bundells you need to add ?'}else{string='ما عدد الحزم التي تريد اضافتها؟'}    
		
		
		
		
		var pickerCustomToolbar = myApp.picker({
	input: '.VC'+x,
	rotateEffect: true,
	toolbarTemplate: 
			'<bdo dir="ltr">'+
		'<div class="toolbar" style="background-color:#00695c;direction:ltr !important;">' +
			'<div class="toolbar-inner">' +
				'<div class="right">' +
					'<a href="#" class="link toolbar-randomize-link"></a>' +
				'</div>' +
				'<div class="right">' +
					'<a style="color:white" href="#" class="link close-picker">Done</a>' +
				'</div>' +
			'</div>' +
		'</div>'+
			'</bdo>',
	cols: [
		{
			values: ['0','1', '2','3','4','5','6','7','8','9'],
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
			if(!OrderList.length){
				localStorage.setItem('orderlist33','');
			}
			
			
			
			
	var    str=    $$('.VC'+x).val();
			str = str.replace(/\s/g, '');
			var value =parseInt(str);
			
			
		if(value==''){value="1";}
		$$("#QT"+x).html(value);
		
		
   x=parseInt(x);
	   var z= localStorage.getItem("A"+x);
		var y= JSON.parse(z);
	   
		var bunding=0.0;
		for(var i=0; i<y.length;i++){
			
			var c=y[i];
			var o=c;
			o.RequiredQuanity= o.RequiredQuanity*parseInt(value);
			bundleprice=0;
			var discountamount=discountamount22;
			var discountperc=discountperc22;
			 bunding=bunding+(o.RequiredQuanity*o.Price);
		if(discountamount !=0){    
			
			bundleprice=bundleprice+(o.RequiredQuanity*o.Price);
		   
		 if(o.DiscountTypeID==2){
		var prodescount=(o.Discount*100)/bundleprice;
	}else
		prodescount=o.Discount;
		prodescount=bundleprice*(prodescount/100);
		var proitemtotal=bundleprice-prodescount;
		discountamount=(discountamount*100)/proitemtotal;
		o.PromotedDiscount= o.PromotedDiscount+discountamount;
			
			
			}
			else if(discountperc !=0){
				  o.PromotedDiscount= o.PromotedDiscount+discountperc;
			}
			
			
		}
		$$("#PR"+x).html(bunding.toFixed(2)+curency);
		 
		var zcz=JSON.stringify(x);
		 arraynow["A"+zcz]=y;
			mybundle[uniqe].push(arraynow);
		bundqun["Q"+zcz]=value;
		console.log(mybundle[0]);
		console.log(mybundle);
		console.log(arraynow);
			
			 
		console.log(bundellsname);
		localStorage.setItem("mybundle",JSON.stringify(mybundle));
			  
		   var count = 0;
pagecounter();

			
//for (i in mybundle) {
//    if (mybundle.hasOwnProperty(i)) {
//        count++;
//    }
//}
//            len=count;
//            console.log(len);
//            if(!OrderList.length && len==0){$$(".badge").hide();}else{
//             $$(".badge").show();
//             $$(".badge").html(OrderList.length+len);  
//            }    
		  //   $$(".badge").html(OrderList.length+len);
		   
			
			
			
		});
	}
});          
		
		
		
		
		
		
		
		
		
		
		
//    myApp.prompt(string,'EOA', 
//     function (value) {
//         
//        if(value==''){value="1";}
//        $$("#QT"+x).html(value);
//        
//        
//   x=parseInt(x);
//       var z= localStorage.getItem("A"+x);
//        var y= JSON.parse(z);
//       
//        var bunding=0.0;
//        for(var i=0; i<y.length;i++){
//            
//            var c=y[i];
//            var o=c;
//            o.RequiredQuanity=parseInt(value);
//            bundleprice=0;
//            var discountamount=discountamount22;
//            var discountperc=discountperc22;
//             bunding=bunding+(o.RequiredQuanity*o.Price);
//        if(discountamount !=0){    
//            
//            bundleprice=bundleprice+(o.RequiredQuanity*o.Price);
//           
//         if(o.DiscountTypeID==2){
//        var prodescount=(o.Discount*100)/bundleprice;
//    }else
//        prodescount=o.Discount;
//        prodescount=bundleprice*(prodescount/100);
//        var proitemtotal=bundleprice-prodescount;
//        discountamount=(discountamount*100)/proitemtotal;
//        o.PromotedDiscount= o.PromotedDiscount+discountamount;
//            
//            
//            }
//            else if(discountperc !=0){
//                  o.PromotedDiscount= o.PromotedDiscount+discountperc;
//            }
//            
//            
//        }
//        $$("#PR"+x).html(bunding.toFixed(2)+" JOD");
//        var zcz=JSON.stringify(x);
//         mybundle["A"+zcz]=y;
//        bundqun["Q"+zcz]=value;
//        console.log(mybundle[0]);
//        console.log(mybundle);
//        localStorage.setItem("mybundle",JSON.stringify(mybundle));
//      },
//      function () {
//        
//      }
//    );

		
		 
		
//        
//        
//    var    x=this.id;
//       var z= localStorage.getItem(x);
//        var y= JSON.parse(z);
//        mybundle.push(y);
//        localStorage.setItem("mybundle",JSON.stringify(mybundle));
		
		 $$('.modal').on('opened',function(){
		 $$(".modal-text-input").attr('type','tel');
		 $$(".modal-text-input").attr('pattern','[0-9]*');
		 });
	   //  $$('.modal').on('open',function(){console.log('done');});
		
	})
	$$("#plus").on('click',function(){
		
	});
	$$('.number').change(function(){ 
		var c=this.id;
		var value=$$('.number').val();
		var object=localStorage.getItem(c);
		var objectjson=JSON.parse(object);
	 var price=0.0;
		for(var i=0;i<objectjson.length;i++){
		var inerobj=objectjson[i];
			var d=parseFloat(inerobj[0].Price);
			price=price+d;
		}
$$("#AQ"+c).html(price);
	});
   // $$("#bundle").on("click",'li',function(){
   
	
	for (var j=0;j<Bundels.length;j++){
		//
	var test=Bundels[j];
	var BundleId=Bundels[j].BundleID;
	var BundledName=Bundels[j].BundleName; 
	 
	var intB=parseInt(BundleId);
  var inner=  localStorage.getItem("A"+intB);    
  var InnerItems= JSON.parse(inner);
		var i=0;
		items='';
		var bundleprice=0.0;
		for( i=0;i<InnerItems.length;i++){
		//                    
  var InnerItems1=InnerItems[i];
	   
  
			if(InnerItems[i]==null){
				
				
		   //     items+='<div class="accordion-item-content"> <div class="content-block">   <p>Out of Stock</p>   </div> </div>';
				
			 items+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">Out of Stock</div><div class="item-after"><span class="badge"></span></div></div></li>';
			}
			else{ 
				var InnerItems2=InnerItems1.ItemDescription;
				 bundleprice=bundleprice+InnerItems1.price;
	 //   items+=' <div class="accordion-item-content"><div class="content-block">  <p>'+InnerItems2+'</p>    </div> </div>';
				
				items+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+InnerItems2+'</div><div class="item-after"><span class="badge">'+InnerItems1.RequiredQuanity+'</span></div></div></li>';
			}
	   
		}
			$$("#A"+BundleId).append(items);
		$$("PR"+BundleId).append(bundleprice);
	}  
	
	 myApp.hidePreloader(loading);
}
 
function Scaning(resault){
	var object=JSON.parse(localStorage.getItem('bar'+resault));
	mainView.router.loadPage('itemdetbarcode');
	
}

function AppenedOrders(){
	
   var local=localStorage.getItem('SentOrders');
	if(local==''){$$("#orderlistshow").hide();$$("#orderoff1").show();return;}
	var lang=localStorage.getItem('lang');
	var string='';
	if(lang==1){string='you dont have any orders in your list';}else{string='لا يوجد لديك طلبات حاليا'}
	
	
	
	
	if(local==null){$$("#orderlists").append('<div style="margin-left:7%; font-size: large;  margin-top:40%; margin-bottom:40%;">'+string+'</div>'); $$("#orderlistshow").hide(); return;}
	$$("#orderlistshow").show();
   var Orders=JSON.parse(local);
   // delete Orders[0];
	console.log(Orders);
	items='';
	html='';
	for (var i=0;i<Orders.length;i++){
	var Orders1=Orders[i];
	//Orders[i].OrderId=i;
//  var InnerItems= JSON.parse(inner);
		
		//html+='<div class="card" id="'+i+'"><div class="card-header">Order '+i+'<div calss="item-after"><i id="icon" class="icon close"></i></div></div><div class="card-content"><ul id="V'+i+'"></ul></div><a href="#" style="color: #00695c; border:0px !important; border-bottom:2px #00695c !important;" id="reorder" class="bund reorder button">Reorder</a></div>';
		
		html+='<div id="'+i+'" class="list-block inset"><ul><div  style="disp1lay:inline-block" id="" class="accordion-item inset cfd"><a href="#" class="item-content item-link"><div class="item-inner"> <div class="item-title" style="font-size:89%;">Order '+i+'</div><div id="" style="color:#00695c;  font-size: 93%;" class"item-after"></div></div></a><div class="accordion-item-content"><div class="content-block"><ul><li><div class="item-content"><div class="item-inner"><div class="item-title"></div><div class="item-after"></div></div></div></li></ul><div class="content-block inset"><ul id="V'+i+'" ></ul></div></div> </div></div><a id='+i+' href="#" style="color: #00695c; border:0px !important; border-bottom:1px #00695c !important; font-weight:bold" class="bund reorder button" >Reorder</a></ul></div>'
	}
	$$("#orderlist22").append(html);
	
	$$(".close").on('click',function(){
		
		var ele=$$(this).parent();
		ele=ele.parent();
		ele=ele.parent();
		var del=ele.index();
		ele.remove();
		
		SentOrders.splice(del);
		sent=JSON.stringify(SentOrders);
		localStorage.setItem("SentOrders",sent);
	});
	
	for (var v=0;v<Orders.length;v++){
		
	var itempack2=Orders[v];
	console.log(itempack2);
	var itempack=itempack2.ItemPacks;
	console.log(itempack);
	  //  var itempack=itempack[0];
	 //var itempack=itempack[0];
		items='';
	for (var j=0;j<itempack.length;j++){               
  var InnerItems1=itempack[j].ItemDescription;
   var x= itempack[j].RequiredQuanity;
		
		console.log(x);
		
				items+='<li class="item-content"><div class="item-media"><i class="icon nestle"></i></div><div class="item-inner"><div class="item-title">'+InnerItems1+'</div><div class="item-after"><span class="badge">'+x+'</span></div></div></li>';
		  
			
	} 
   // for(var x=0;x<itempack.length;x++)
		$$("#V"+v).append(items);
		
	}
	
   // $$(".card").on('taphold',function(){
	$$(".reorder").on('click',function(){
		
		var index=this.id;
//        var index=$$(this).parent().index();
//        index=parseInt(index);
		var lang=localStorage.getItem('lang');
	var string='';
	if(lang==1){string='Are you sure you want to re send the order?';}else{string='هل تريد اعادة الطلب'}
		  myApp.confirm(string, 'EOA',function () {
			  
	 var sender =localStorage.getItem('SentOrders');//SentOrders
			  var sender2=JSON.parse(sender);
			   sender2[index];
			  
				 
			  console.log(OrderList);
		   //   OrderList.push(sender2.ItemPacks);
		 //     OrderList=sender2.ItemPacks;
			 
			  console.log(OrderList);
			   if(!OrderList.length){
				 //  OrderList.pushValues(sender2.ItemPacks);
				   //   OrderList.concat(sender2.ItemPacks[j]);
				   OrderList.push.apply(OrderList,sender2[index].ItemPacks);
//                   OrderList=OrderList+sender2.ItemPacks[0];
//                   OrderList=OrderList+sender2.ItemPacks[1];
			   }
			  else{
				  
			 
			 for(var j=0;j<sender2[index].ItemPacks.length;j++){
				 var bool=false;
	for(var i=0;i<OrderList.length;i++){    
	if(OrderList[i].PackID==sender2[index].ItemPacks[j].PackID){
		bool=true;
 OrderList[i].RequiredQuanity=OrderList[i].RequiredQuanity+sender2[index].ItemPacks[j].RequiredQuanity;break;
	}else { }
		} if(bool==true){}else {OrderList.push(sender2[index].ItemPacks[j]);}  
	}   
				  
			
				  
			  }
			  //OrderList.push.apply(OrderList,asr);
			  
			  localStorage.setItem('orderlist33',JSON.stringify(OrderList));
			  console.log(OrderList);
			  console.log(remove_duplicates(OrderList));
			  
			  /*$$.post("http://213.186.179.126:5010/InCubeApp/api/SendOrder",
	  sender2,
		function(data,status){
				  
	 
				   myApp.hidePreloader("Loadin");
	 myApp.alert('Order Saved Successfully');
	 myApp.alert('Thanks for using IOA');
		});*/
	});
		
	});
  mainView.showToolbar();
}

function AppendTransactions(){
	 
	 var object =localStorage.getItem('Transction');
	 if(object=="" || object ==null || object =='null'){return;}
	 var transctions=JSON.parse(object);
 var slic=transctions[1].TransactionDate.slice(0,-9);
	/// var days=indays(transctions[1].TransactionDate);
	 var html30='';
	 var html60='';
	 var html90='';
	 for(var i=0; i<transctions.length; i++){
		 
		 var sliceeddate =transctions[i].TransactionDate.slice(0,-9);
		 var sliceedduedate =transctions[i].DueDate.slice(0,-9);
	   //  htmls+='<div class="content-block-inner"> <div class="row"> <div class="col-70"><div class="accordion-item"> <div  style="width: 170px; word-wrap: break-word;" class="accordion-item-toggle"><p style="margin-top:0%; margin-bottom:2%">'+transctions[i].TransactionID+'</p> '+sliceeddate+'  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sales</div> <div  style="width: 200px; word-wrap: break-word;" class="accordion-item-content">Due date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  '+sliceedduedate+'  Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JD'+transctions[i].RemainingAmount+'</div></div>  </div>  <div class="col-30">   '+transctions[i].NetTotal+' JD        </div></div>  </div>   ';
		 
		 days=indays(transctions[i].TransactionDate);
		 if(days<=30){
		  var sliceeddate =transctions[i].TransactionDate.slice(0,-9);
		 var sliceedduedate =transctions[i].DueDate.slice(0,-9);
		 html30+='<div class="content-block-inner" style="padding-top: 0%;  padding-bottom: 0%;"> <div class="row"> <div class="col-70"><div class="accordion-item"> <div  style="width: 400px; word-wrap: break-word;" class="accordion-item-toggle"><p style="margin-top:0%; margin-bottom:2%; display:inline-block;">'+transctions[i].TransactionID+'</p> <p style="display:inline-block; margin-left:5%; margin-top:0%; margin-bottom:1%;">Sales</p><p style="display:inline-block; margin-left:10%; margin-top:0%; margin-bottom:1%;">JD '+transctions[i].NetTotal+'</p><p style="margin-top:0%;margin-bottom:0%;">'+sliceeddate+'</p></div> <div  style="width: 200px; word-wrap: break-word;" class="accordion-item-content">Due date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  '+sliceedduedate+'  Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JD'+transctions[i].RemainingAmount+'</div></div></div></div></div>';
	 
		 }else
		 if(days<=60){
			  var sliceeddate =transctions[i].TransactionDate.slice(0,-9);
		 var sliceedduedate =transctions[i].DueDate.slice(0,-9);
		 html60+='<div class="content-block-inner" style="padding-top: 0%;  padding-bottom: 0%;"> <div class="row"> <div class="col-70"><div class="accordion-item"> <div  style="width: 400px; word-wrap: break-word;" class="accordion-item-toggle"><p style="margin-top:0%; margin-bottom:2%; display:inline-block;">'+transctions[i].TransactionID+'</p> <p style="display:inline-block; margin-left:5%; margin-top:0%; margin-bottom:1%;">Sales</p><p style="display:inline-block; margin-left:15%; margin-top:0%; margin-bottom:1%;">JD '+transctions[i].NetTotal+'</p><p style="margin-top:0%;margin-bottom:0%;">'+sliceeddate+'</p></div> <div  style="width: 200px; word-wrap: break-word;" class="accordion-item-content">Due date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  '+sliceedduedate+'  Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JD'+transctions[i].RemainingAmount+'</div></div></div></div></div>';
		 
		 }else
			{
				html90+='<div class="content-block-inner" style="padding-top: 3px;  padding-bottom: 3px;"> <div class="row"> <div class="col-70"><div class="accordion-item"> <div  style="width: 400px; word-wrap: break-word;" class="accordion-item-toggle"><p style="margin-top:0%; margin-bottom:2%; display:inline-block;">'+transctions[i].TransactionID+'</p> <p style="display:inline-block; margin-left:5%; margin-top:0%; margin-bottom:1%;">Sales</p><p style="display:inline-block; margin-left:15%; margin-top:0%; margin-bottom:1%;">JD '+transctions[i].NetTotal+'</p><p style="margin-top:0%;margin-bottom:0%;">'+sliceeddate+'</p></div> <div  style="width: 200px; word-wrap: break-word;" class="accordion-item-content">Due date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  '+sliceedduedate+'  Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JD'+transctions[i].RemainingAmount+'</div></div></div></div></div>';
		  
			}
		  if(html30==''){$$("#thr1").hide();}
			if(html90==''){$$("#nigh").hide();}
		 if(html60==''){$$("#six1").hide();}
	 }
	 $$("#thr").append(html30);
	 $$("#six").append(html60);
	 $$("#nigh").append(html90);
	 
//     if($$("#thr").length){
//       $$("#thr1").hide();  
//     }
//     
//     if($$("#six").length){
//       $$("#six1").hide();  
//     }
//     if($$("#nigh").length){
//       $$("#nigh1").hide();  
//     }
 }

function AppendFOCItems(){
	
	var storeditem=localStorage.getItem("storeditem");
   // var items=JSON.parse(storeditem);
	var items=Vendorespreated[guessqout][0];
		
		  
	   //    (Price,Discount,Tax,Quntity,DiscountType)
	  html='';
	for (var i = 0; i <items.length; i++)
	{
		if(items[i].Price==0){}
		else{
		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		var  vendorename=getnamevendore(items[i].VendorName);
		var  Vendoreimage=getimagevendore(guessqout);
			
//Vendoreimage=GetImage('AAAAAA'+items[i].ItemID);
		html+='<li  class="item-conte1nt test" id="' + items[i].PackID  + '"  data-ItemCode="'+items[i].ItemCode+'" data-ItemBarcode="'+items[i].ItemBarcode+'" data-PackID="'+items[i].PackID+'" data-UOM="'+items[i].UOM+'" data-RequiredQuanity="'+items[i].RequiredQuanity+'" data-Price="'+items[i].Price+'" data-Tax="'+items[i].Tax+'" data-Discount="'+items[i].Discount+'" data-PiecesInPack="'+items[i].PiecesInPack+'" data-IsDefaultPack="'+items[i].IsDefaultPack+'" data-PackGroupID="'+items[i].PackGroupID+'" data-IsAdded="'+items[i].IsAdded+'" data-DiscountTypeID="'+items[i].DiscountTypeID+'" data-ItemID="'+items[i].ItemID+'" data-ItemDescription="'+items[i].ItemDescription+'" data-pack="'+items[i].PackTypeID+'"><a href="#" style="background-image:url() !important" class="item-link item-content"><i id="'+items[i].PackTypeID+'" style="margin-right:4%" class="li icon non"></i><div class="item-media" style="width:40px; height:40px"><img class="Strechimage" src="'+Vendoreimage+'" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after"></div></div><div class="item-subtitle">'+curency+items[i].Price+'</div></div></a></li>';
		localStorage.setItem('FOC'+items[i].PackID,JSON.stringify(items[i]));
	}  }
		$$('#allitems').append(html);    
	
}

function AppendFOCards(arr,ido){
	
	var lang=localStorage.getItem('lang');
	var delet='';
	if(lang==1){delet='Delete';}else{delet='حذف'}
	var QTY='';
	if(lang==1){QTY='Quantity';}else{QTY='الكمية'}
	
 string='';
	if(arr==null){return;}
	
 for(var i=0; i<arr.length; i++){
	 var overallprice=arr[i].Price*arr[i].RequiredQuanity;
	 string +='<li id="AA'+arr[i].PackID+'"><div href="#" class=" item-content"> <div class="item-media"><img src="ness.jpg" width="80"></div><div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+arr[i].ItemDescription+'</div><div class="item-after"><div style="margin-left:0%;">'+QTY+'</div><div id="input'+arr[i].ItemID+'" class="input" value='+arr[i].RequiredQuanity+' style="width:15%;  padding-left: 5%; margin-left:auto;">'+arr[i].RequiredQuanity+'</div> </div> </div>  <div class="item-subtitle"><div style="margin-top:5%; display: inline-block; color:grey">Unit Price</div> <div class="float2" style="display: inline-block; margin-left:auto; color:#00695c; float:right; margin-top:5%">price:'+overallprice+' '+curency+'</div>   </div><div class="item-text"><div style="margin-top:5%; color:#000; display: inline-block;">'+arr[i].Price+' '+curency+'</div><div class="float" style="margin-left: auto; float: right; display: inline-block;"><p><a href="#" class="button click active" data-packid="'+arr[i].PackID+'" data-dy="'+ido+'" data-pr="'+arr[i].Price+'" data-req="'+arr[i].RequiredQuanity+'" id="'+arr[i].PackID+'">'+delet+'</a></p></div></div></div></div></li>';
	// localStorage.setItem('FOCCard'+FOCitems[i].ItemID,)
 }   
	$$("#focitems").html(string);
	 if(lang==1){$$(".float").css('float','right');}else $$(".float").css('float','left');
	 if(lang==1){$$(".float2").css('float','right');}else $$(".float2").css('float','left');
	
}

function AppendFreeQTYItems(packids){
	
	var storeditem=localStorage.getItem("storeditem");
	if(storeditem==''){return;}
	//var items=JSON.parse(storeditem);
	var items=Vendorespreated[guessqout][0];
	  html='';
	for (var i = 0; i <items.length; i++)
	{
		var  vendorename=getnamevendore(items[i].VendorName);
var Vendoreimage=getimagevendore(guessqout);
		
		var Q=1;
		var Price= calcluteprice(items[i].Price,items[i].Discount,items[i].Tax,Q,items[i].DiscountTypeID); 
		var truncated = Math.floor(Price * 100) / 100; 
		
		for(var j=0;j<packids.length;j++){
		if(items[i].PackID==packids[j]){
		html+='<li  class="item-conte1nt test" id="' + items[i].PackID  + '"  data-ItemCode="'+items[i].ItemCode+'" data-ItemBarcode="'+items[i].ItemBarcode+'" data-PackID="'+items[i].PackID+'" data-UOM="'+items[i].UOM+'" data-RequiredQuanity="'+items[i].RequiredQuanity+'" data-Price="'+items[i].Price+'" data-Tax="'+items[i].Tax+'" data-Discount="'+items[i].Discount+'" data-PiecesInPack="'+items[i].PiecesInPack+'" data-IsDefaultPack="'+items[i].IsDefaultPack+'" data-PackGroupID="'+items[i].PackGroupID+'" data-IsAdded="'+items[i].IsAdded+'" data-DiscountTypeID="'+items[i].DiscountTypeID+'" data-ItemID="'+items[i].ItemID+'" data-ItemDescription="'+items[i].ItemDescription+'" data-pack="'+items[i].PackTypeID+'"><a href="#" style="background-image:url() !important" class="item-link item-content"><i id="'+items[i].PackTypeID+'" style="margin-right:4%" class="li icon non"></i><div class="item-media" style="width:40px; height:40px"><img class="Strechimage" src="'+Vendoreimage+'" width="40"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">'+items[i].ItemDescription +'</div><div class="item-after"></div></div><div class="item-subtitle">'+curency+items[i].Price+'</div></div></a></li>';
		localStorage.setItem('FRQ'+items[i].PackID,JSON.stringify(items[i]));
	}  }}
		$$('#FreeQTY').append(html);    
	
}

function AppendFreeQTYCards(array,ido){
	
	var lang=localStorage.getItem('lang');
	var delet='';
	if(lang==1){delet='Delete';}else{delet='حذف'}
	var QTY='';
	if(lang==1){QTY='Quantity';}else{QTY='الكمية'}
 string='';
 for(var i=0; i<array.length; i++){
	 var overallprice=array[i].Price*array[i].RequiredQuanity;
	 string +='<li id="AA'+array[i].PackID+'"><div href="#" class=" item-content"> <div class="item-media"><img src="ness.jpg" width="80"></div><div class="item-inner"> <div class="item-title-row"> <div class="item-title">'+array[i].ItemDescription+'</div><div class="item-after"><div style="margin-left:0%;">'+QTY+'</div><div id="input'+array[i].ItemID+'" class="input" value='+array[i].RequiredQuanity+' style="width:15%;  padding-left: 5%; margin-left:auto;">'+array[i].RequiredQuanity+'</div> </div> </div>  <div class="item-subtitle"><div style="margin-top:5%; display: inline-block; color:grey">Unit Price</div> <div style="display: inline-block; margin-left:auto; color:#00695c; float:right; margin-top:5%">price:'+overallprice+' '+curency+'</div>   </div><div class="item-text"><div style="margin-top:5%; color:#000; display: inline-block;">'+array[i].Price+' '+curency+'</div><div style="margin-left: auto; float: right; display: inline-block;"><p><a href="#" class="button click active" data-packid="'+array[i].PackID+'" data-dy="'+ido+'" data-pr="'+array[i].RequiredQuanity+'" id="'+array[i].PackID+'">'+delet+'</a></p></div></div></div></div></li>';
	// localStorage.setItem('FOCCard'+FOCitems[i].ItemID,)
 }   
	$$("#freeitems").html(string);
	 
	
}

function remove_duplicates(objectsArray) {
	
	var usedObjects = {};
	var usedarray=[];

	for (var i=objectsArray.length - 1;i>=0;i--) {
		var so = JSON.stringify(objectsArray[i]);

		if (usedObjects[so]) {
			objectsArray.splice(i, 1);
var obj=JSON.parse(so);
			var d=obj.PackID;
			var c=obj.RequiredQuanity;
			var arr=[d,c];
			usedarray.push(arr);
			console.log(arr);
			
		} else {
			usedObjects[so] = true; 
			
		}
	}
for (var n=0;n<objectsArray.length;n++ ){
for (var b=0;b<usedarray.length;b++){
	var obj2=usedarray[b];
	if(objectsArray[n].PackID==obj2[0]){
		objectsArray[n].RequiredQuanity=objectsArray[n].RequiredQuanity+obj2[1];
	}
	 
}   
}
	return objectsArray;

}

function Bundleprice(akk){
	var netbundells=0.0;
	  for (var k in mybundle) {
			
		if (mybundle.hasOwnProperty(k)) {
		 var bundleinner=mybundle[k];
			var d = new Date();
var n = d.getTime();
			var i1=localStorage.getItem("CU_id");
				var i2=localStorage.getItem("OUT_id");
				i1=parseInt(i1);
				i2=parseInt(i2);
		 var BundleJsonObject=
	  {
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
  "NetTotal": 10,
  "GrossTotal": 0,
  "Tax": 0,
  "Discount":0,
  "PromotedDiscount": 0,
  "TempOrderID":JSON.stringify(n)
  }
	  
   
   }
			for(var i=0;i<BundleJsonObject.ItemPacks.length;i++){
				
			 var proitemgross1=0.0;
		var proitemtotal1=0.0;
		var protax1=0.0;
		var prodescount1=0.0;
		var promteddiscount1=0.0;
		   var  proitemgross1= BundleJsonObject.ItemPacks[i].Price*BundleJsonObject.ItemPacks[i].RequiredQuanity;
		 if(BundleJsonObject.ItemPacks[i].DiscountTypeID==2){
		prodescount1=(BundleJsonObject.ItemPacks[i].Discount*100)/proitemgross1;
	}
		
		prodescount1=proitemgross1*(BundleJsonObject.ItemPacks[i].Discount/100);
		proitemtotal1=proitemgross1-prodescount1;
		if(BundleJsonObject.ItemPacks[i].PromotedDiscount==0){}else{
			
		   promteddiscount1= proitemtotal1*(BundleJsonObject.ItemPacks[i].PromotedDiscount/100);
			proitemtotal1=proitemtotal1-promteddiscount1;
			protax1=proitemtotal1*(BundleJsonObject.ItemPacks[i].Tax/100);
			proitemtotal1=proitemtotal1+protax1;
			
			
		}
		 BundleJsonObject.Discount=BundleJsonObject.Discount+prodescount1+promteddiscount1;
		BundleJsonObject.GrossTotal=BundleJsonObject.GrossTotal+proitemgross1;
		BundleJsonObject.NetTotal=BundleJsonObject.NetTotal+proitemtotal1;
		BundleJsonObject.Tax=BundleJsonObject.Tax+protax1;
		BundleJsonObject.PromotedDiscount=BundleJsonObject.PromotedDiscount+promteddiscount1;
		netbundells=netbundells+BundleJsonObject.NetTotal;
			}
		 BundleJsonObject.NetTotal=BundleJsonObject.NetTotal.toFixed(2)
	$$("#Price"+k).html(BundleJsonObject.NetTotal+curency);
  //  $$("#bundlenettotal").html(netbundells);
	  }
	
}

function arrprice(arr){
	
	if(!arr.length){return 0;}
	var totalprice=0.0;
	for(var i=0; i<arr.length; i++){
	 totalprice=totalprice+(arr[i].Price*arr[i].RequiredQuanity);
	}
	return totalprice;
}

function arrQTY(arr){
	
	if(!arr.length){return 0;}
	var arrqty=0.0;
	for(var i=0; i<arr.length; i++){
	 arrqty=arrqty+arr[i].RequiredQuanity;
	}
	return arrqty;
}

function indays(date2){ 
//    var d2 = new Date(date2);
//    d2.getMonth()+1  // 10
//d2.getDate();     // 30
//d2.getFullYear(); 
//console.log(d2);    
					   
	var d = date2.slice(0, 10).split('-');   
var date=d[1] +'/'+ d[2] +'/'+ d[0];   
console.log(date);                       
					   
	 var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output =(month<10 ? '0' : '') + month  + '/' +
	(day<10 ? '0' : '') + day  + '/' +d.getFullYear()
	;
   
//    function parseDate(str) {
//    var mdy = str.split('/');
//    return new Date(mdy[2], mdy[0]-1, mdy[1]);
//}
//  console.log(daydiff(parseDate(val1), parseDate(val2)));
//function daydiff(first, second) {
//    return Math.round((second-first)/(1000*60*60*24));
//}
//    var val1='1/1/2017';
//    var val2='12/25/2017';
	var diff =  Math.floor(( Date.parse(output) - Date.parse(date) ) / 86400000);
	console.log(diff);
  return diff;
  
	
}

function itembyid(arr,id,VendorName){
	
id = id.substr(id.length - 5);
	id=VendorName+id;
	 reorderarray[id]=[];
	var itemsobject=localStorage.getItem("storeditem");
	itemsobject=JSON.parse(itemsobject);
	for (var value in arr){
	  for(var i=0; i< itemsobject.length; i++){
		 var STR=VendorName+value;
		  if(STR==itemsobject[i].PackID){
			  itemsobject[i].RequiredQuanity=arr[value];
			  console.log(itemsobject[i]);
			  reorderarray[id].push(itemsobject[i]);
		  }
	  }
	}
	
 // reorderarray[id]
	return reorderarray;
}

function reorder(array,vendid){
	
	if(!vendoreorder[vendid].length){
				 //  OrderList.pushValues(sender2.ItemPacks);
				   //   OrderList.concat(sender2.ItemPacks[j]);
				   OrderList.push.apply(vendoreorder[vendid],array);
//                   OrderList=OrderList+sender2.ItemPacks[0];
//                   OrderList=OrderList+sender2.ItemPacks[1];
			   }
			  else{
				  
			 
			 for(var j=0;j<array.length;j++){
				 var bool=false;
	for(var i=0;i<vendoreorder[vendid].length;i++){    
	if(vendoreorder[vendid][i].PackID==array[j].PackID){
		bool=true;
 vendoreorder[vendid][i].RequiredQuanity=vendoreorder[vendid][i].RequiredQuanity+array[j].RequiredQuanity;break;
	}else { }
		} if(bool==true){}else {vendoreorder[vendid].push(array[j]);}  
	}      
			  }
			  //OrderList.push.apply(OrderList,asr);
			  
			  localStorage.setItem('orderlist33',JSON.stringify(OrderList));
		  
	
	
	
}

function removeDuplicateItems(id) {
	var ul = $('#' + id);

	$('li', ul).each(function() {
		if($('li:contains("' + $(this).text() + '")', ul).length > 1)
			$(this).remove();
	});
}

function getimagevendore(vendoree){
	
	img ='';
	for(var n=0; n<vendoreinfo.length;n++){
		if(vendoreinfo[n].UniqeID==vendoree){
			img=vendoreinfo[n].IMG;
		}
	}
	return img;
}

function getnamevendore(vendoree){
	name='';
	for(var n=0; n<vendoreinfo.length;n++){
		if(vendoreinfo[n].UniqeID==vendoree){
			name=vendoreinfo[n].name;
		}
	}
	return name;
}

function GetImage(vendorename){
	var img;
	var img2;
	//fix image get mahmoud saleh
   img2=vendorename.substring(6);
	//razi adding unitra img instead of nestle!!!
   if (vendorename.substring(0, 6) == "UNITR1") {
		  img = './images/icons/unitra.jpg';
  //     img = 'http://213.186.179.126:5010/InCube.InVan.Services1/api/ItemsImages/' + img2 + '.jpg';
   } else if (vendorename.substring(0, 6) == "NESAM1") {
	   img = './images/icons/nes.jpg';
	   //     img = 'http://213.186.179.126:5010/InCube.InVan.Services1/api/ItemsImages/' + img2 + '.jpg';
   }
   else {     
	   img = './images/icons/delmonti.png';
  //     img = 'http://213.186.179.126:5010/InCube.InVan.Services2/api/ItemsImages/' + img2 + '.jpg';
   }

//   $.ajax({
//       url: img,
//       type: 'HEAD',
//       async: false,
//       error: function () {
//           if (vendorename.substring(0, 6) == "UNITR1") {
//               img = './images/icons/nes.jpg';
//           } else {
//               img = './images/icons/delmonti.png';
//           }
//       }
//   });

	return img;
}
