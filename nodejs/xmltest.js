var fs = require('fs');
var xmldoc = require('xmldoc');

var contents = fs.readFileSync( __dirname + '/config.xml').toString();
console.log(contents)


var bookNode = new xmldoc.XmlDocument(contents);
var authorName = bookNode.childWithAttribute("name","portNumber"); 
console.log(authorName.attr.value);

