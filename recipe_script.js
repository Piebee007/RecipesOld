var x;
var txt;

function preload(){
    var filename = sessionStorage.getItem('file')
    console.log(filename)
    txt = loadStrings('Recipes/' + filename+'.txt')
}


function setup(){
    noCanvas();
    recipe_text(txt);
}

function recipe_text(txt){
    //noCanvas();
    createP("<h1>"+txt[0]+"</h1>");
    let serves = new String (txt[1].substr(7));
    createP("<h2>"+"Serves: "+serves+"</h2>");
    createP("<h2>"+ txt[2]+"</h2>")
    let time = new String (txt[2].substr(6));
    createP("<h2>Ingredients</h2>")
    var ingredients = "<ul>";
    var instruction_start;
    for (let i=4; i<txt.length; i++){
        if (txt[i] == "Instructions:"){
            instruction_start = i;
            break;
        }
        ingredients += "<li>"+txt[i] + "</li>"
    }
    ingredients += "</ul"
    createP(ingredients);


    createP("<h2>Instructions</h2>")
    var instructions = "<ol>";
    var tag_start;
    for (let i=instruction_start+1; i<txt.length; i++){
        console.log(txt[i].substr(0,4))
        if (txt[i].substr(0,4) == "Tags"){
            tag_start = i;
            break;
        }
        instructions +="<li>"+ txt[i] + "</li>"
    }
    instructions += "</ol>"
    createP(instructions);
    console.log(instructions)
    console.log(txt);
}