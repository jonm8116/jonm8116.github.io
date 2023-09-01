function readTime(){
    var text = document.body.textContent;
    //Remove unnecessary characters
    var newText = text.replace(/(\r\n\t|\n|\r\t)/gm, "");
    var arr = newText.split(" ");
    arr = arr.filter(e => e !== '');
    var readTime = Math.ceil(arr.length / 200);
    console.log("This is the read time " + readTime);
    var elem = document.getElementById('readTime');
    var minStr = readTime + " minute read";
    elem.appendChild(document.createTextNode(minStr));
}

readTime();
