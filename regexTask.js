'use strict';
/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s) {
    // Add your logic.
    let regex = /[a-zA-Z]*[A-Z]$/g;
    if (regex.test(s))
        return true;
    else
        return false;
}


/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email) {
    // Add your logic.
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(io)/gi;
    if (regex.test(email))
        return true;
    else
        return false;
}

/* You have a text that contain image names with their extention you need to write a function to 
find all images in that text and return their names and extention in an array 

required extention are jpg, jpeg and png.

*/

function imagesSearcher(text) {
    let arr = [];
    // Add your logic.
    let regax1=/([A-Za-z0-9_?#]*\.(?:jpg|jpeg|png))/gi;
    arr=text.match(regax1);
    return arr
}
