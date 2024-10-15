const fs = require('fs');

// fs.writeFile('myfile.txt','Javascript is imp',()=>{
//     console.log('File Created')
// })

// fs.appendFile('mycode.txt','This is nodejs3\n',() => {
//     console.log('File Appended')
// })

// fs.readFile('mycode1.txt','utf-8',(err,data)=> {
//     if(err) throw err;
//     console.log(data)
// })


// fs.rename('mycode.txt','mycode2.txt',(err)=>{
//     if(err) throw err
//     console.log("File Renamed")
// })

fs.unlink('myfile.txt',(err) => {
    if(err) throw err
    console.log("File Deleted")
})

