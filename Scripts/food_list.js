var filenames
var txt_files = []
function preload(){
    try {
        filenames = sessionStorage.getItem('recipe_list')
        console.log(filenames)
        var filenames_arr = filenames.split(", ")
        for (let i=0; i < filenames_arr.length; i++){
            
            if (filenames_arr[i] != "" && filenames_arr[i] != "null"){
                console.log(filenames_arr[i])
                txt_files.push(loadStrings('Recipes/' + filenames_arr[i]+'.txt'))
            }
            
        }    
        console.log(txt_files)
    } catch (error) {
        
    }
    
    
    
}

function setup(){
    noCanvas();
   for (let i=0; i < txt_files.length;i++){
        recipe_text(txt_files[i])
   }
}


function recipe_text(txt){
    //noCanvas();
    createP("<h1>"+txt[0]+"</h1>");
    let serves = new String (txt[1].substr(7));
    createP("<h2>"+"Serves: "+serves+"</h2>");
    createP("<h2>"+ txt[2]+"</h2>")
    let time = new String (txt[2].substr(6));
    createP("<h2>Ingredients:</h2>")
    var ingredients = "<ul class='ingredients'>";
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

}

function clear_recipes(){
    sessionStorage.setItem('recipe_list', '')
    location.reload();
    console.log("cleared")
}