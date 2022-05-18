const path = require('path');
const fs = require('fs');
console.log(__dirname);
const directoryPath = path.join(__dirname, '/hashlips_art_engine-main/build/json');

fs.readdir(directoryPath, function(err, files){
    if(err){
        console.log("There was an error", err);
    }

    files.forEach(function(file){
        console.log(file);
        fs.readFile(directoryPath + '/' + file, 'utf8', function(err, data){
            var replace = data.replace(/NewUriToReplace/g, 'QmZSs7WGy4btY6FxNfQjEZy149rZvwdwwsd6xkG6XQ3fYq');
            fs.writeFile(directoryPath + '/' + file, replace, 'utf8', function(err){
                if(err){
                    return console.log(err);
                }
            })
        });
    });
});
