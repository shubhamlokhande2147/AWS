var http=require('http');

var onReceive=function(req,res)
{
   res.write('<h1>WelCome...! in IET CDAC ACTS PUNE<h1>');
   res.end();
};

var app=http.createServer(onReceive);
app.listen(9000);
console.log("<Test web server is listening on port 9000>");

