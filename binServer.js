var start=0
var cds = require("child_process")
var fs = require("fs"); 
var nt = require("net");
var ddatas=""
var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("uploads system server")
});

function Connection(connection){
	ddatas="";
	var iip=connection.remoteAddress;
	sss=start.toString();
	setTimeout(function(){
		fs.writeFile("/tmp/binupload.txt",ddatas,function(err){
			if(err)return console.log(err);
		});
		connection.destroy();
	},9000);
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		vv=data.toString();
		ddatas=ddatas+vv
	}
	function onClose(){
		console.log(iip+": " + sss);
        var w =cds.exec( "xxd -r /tmp/binupload.txt > ./"+ start.toString() , function (err , out ,se){
				
		});

		start=start+1;
		connection.destroy();
	}
	function onError(data){
		console.log(data);
	}



}
