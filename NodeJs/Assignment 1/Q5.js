const fs = require('fs');
let searchTxt = process.argv[2];

var fileContent = [];
var count = 0;
split1 = fs.readFileSync('test.txt','utf-8').split(" ");
console.log(split1);
var match = fileContent.map(txt => {
    if(txt.includes(searchTxt)){
        count++;
        return txt;
    }
})

console.log(`${searchTxt} appeared ${count} times in the file.`);