/* -----------------------------------------------
MIROHOST COUNTER
  ------------------------------------------------ */
// SETTINGS:

   id = "itelichkin";
   
// If you're using a frameset and are not getting correct 
// referrers, please uncomment the following line:
// pp_frames = true;

// define some defaults -------------------------------------
if(showme==null) var showme='y';
if(st==null)     var st='img';    // st means show-type


// get the user agent name ----------------------------------
v = navigator.appName;

// get the screen resolution --------------------------------
c=0;
if (v != "Netscape") c = screen.colorDepth;
else c = screen.pixelDepth;

// get the screen size --------------------------------------
s = screen.width+"x"+screen.height;

// get the document's title ---------------------------------
t = escape(document.title);

// get the document's referrer -------------------------------
var f = "";

// if pp_frames is true then try getting the framed referral (without error checking)
if (typeof(pp_frames) != "undefined")
	if (pp_frames)
		f = top.document.referrer;

// get the referral for non-multi-domained-framed sites using a Netscape browser
if ((f == "") || (f == "[unknown origin]") || (f == "unknown") || (f == "undefined"))
	if (document["parent"] != null) 
		if (parent["document"] != null) // ACCESS ERROR HERE!
			if (parent.document["referrer"] != null) 
				if (typeof(parent.document) == "object")
					f = parent.document.referrer; 

// get the referral for the current document if a framed referral wasn't found
if ((f == "") || (f == "[unknown origin]") || (f == "unknown") || (f == "undefined"))
	if (document["referrer"] != null) 
		f = document.referrer;

// convert all the unknown's into blank
if ((f == "") || (f == "[unknown origin]") || (f == "unknown") || (f == "undefined"))
	f = "";

// escape the referral
f = escape(f);

// getting data ready to send -------------------------------
r="?id="+id+"&referer="+f+"&r="+s+"&c="+c+"&showme="+showme+"&st="+st+"&title="+t;

// adding logid if called by st='phpjs'
if(jslogid==null) var jslogid = 0;
else r = r + "&jslogid="+jslogid;



if (st=='js') { // calling by JavaScript-tag
	if (v != "Microsoft Internet Explorer") {
		r = r+"&url="+document.URL; // $HTTP_REFERER problem with NS,...
	}
	document.open();
	document.write("<script language=\"JavaScript\" type=\"text/javascript\" src=\"http://counter.mirohost.net/counter.php"+r+"\"></script>");
	document.close();
} else { // calling by IMG-tag
	rand = Math.round(1000*Math.random());
	r = r+"&b="+rand;  //force the page to load the IMG
	document.open();
	document.write("<img src=\"http://counter.mirohost.net/counter.php"+r+"\" alt=\"\" border=\"0\">");
	document.close();
}