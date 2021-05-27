
var express = require("express");

var bodyParser = require("body-parser");
var app = express();
var port = 3000;
var options = { root: __dirname + '/'}
app.set('port', port);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
fetch('./getpost.json');

app.use(function(req, res, next)

{
    console.log('url: %s\n\t%s :: %s', req.url, req.method, req.path);
    console.log('body: ', req.body)
    next();

});

app.get('/form', function(req, res)

{
    res.type('text/html');
    res.sendFile('form.html', options);
});

var getObjectBreakdown = function(object)

{
var list = '<ul>';
for (var key in object)

    {
 list += '<li><strong style="font-family: monospace;">' + key + '</strong>: ' + object[key] + '</li>';
  }

    return list + '</ul>';
}

var getRequestTable = function(req)

{

}
app.get('/', function(req, res)

{
    var html = '<h1>GET Request Received</h1>';

    html += '<table><tbody><tr>';

    html += '<td>url: ' + req.url + '</td>';

    html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';

    html += '</tr></tbody></table>';

    res.send(html);

});

app.post('/', function(req, res)

{
    var html = '<h1>POST Request Received</h1>';
    html += '<table><tbody><tr>';

    html += '<td>url: ' + req.url + '</td>';

html += '<td>body: ' + getObjectBreakdown(req.body) + '</td>';

    html += '</tr></tbody></table>';
    res.send(html);

});

app.listen(port, function()

{
    console.log("• Started on port " + port);

})
var entry= document.getElementById("entry")
entry.addEventListener("click",displayDetails);
var row=1;
function displayDetails(){
    var fname= document.getElementById("fname").Value;
    var lname= document.getElementById("lname").Value;
    var School= document.getElementById("School").Value;
    var Subject= document.getElementById("Subject").Value;
    if(!fname || !lname || !School || Subject){
        alert("Please fill all the boxes");
        return;
    }

    var display= document.getElementById("display");
    var newRow = display.insertRow(row);
    var cell1 = newRow.inserCell(0);
    var cell2 = newRow.inserCell(1);
    var cell3 = newRow.inserCell(2);
    var cell4 = newRow.inserCell(3);
    
}
