var fs = require('fs');
var inStr = fs.createReadStream('../images/placeholder.jpg');
var i = 6785;

while(i <= 10000){
    var outStr = fs.createWriteStream(`../images/${i}.jpg`);
    inStr.pipe(outStr);
    i++
};

