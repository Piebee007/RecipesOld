
var test_file;
function preload(){
    test_file = loadStrings("Testing.txt")
    console.log(test_file)
}

function setup(){
    console.log("hi")
}

function write_text(){
    
    let writer = createWriter('Testing.txt')
    writer.write(["Hello world"])
    writer.close()
}