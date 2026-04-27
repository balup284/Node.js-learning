const imported = require ('./node')
console.log(imported);

// reading purp[opse ]
let fs = require('fs');

fs.readFile('./text.txt', (error , data)=>{
    if (error) {
        console.log('file not found')
    }else{
        // console.log(data) byneer fromate giving chamnge to string 
         console.log(data.toString())
    }
})
// 1fs.readFile
//  fs.readFileSync this is a syncrones line by line excute then only move to next line 

// 2 fs.watchFile
// 1 if file is not there create new file and wirte text also old text removed what ever text we given that text updated 
 // 3 fs.appendfille if file is not there create new file and  old text not removed just updated text

// fs.unlink fille removed and deleted 
// fs.mkdir create floder and sub floder 
// fs.rmdir only empty floder deleted  
