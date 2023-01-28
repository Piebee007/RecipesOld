
/*var recipe_names = [
    "JensonsFamousCurry",
    "SausagePastaWine",
    "TomsTrayBake"


]*/
var recipe_names = [];
var recipes;
function preload(){
    recipes = loadStrings('Tags.txt')
}

function button_func(filename){
    //console.log(filename)
    sessionStorage.setItem('file',filename)
    location.href = "recipe.html"
}
function button_tag(){
    location.href = "tags.html"
}



function setup(){
    noCanvas();
    for(let i=1; i < recipes.length; i++){
        var temp_arr = recipes[i].split(", ")
        recipe_names.push(temp_arr[0])
        //console.log(recipe_names)
    }
    var buttons = ""
    var html_code = ""
    for (let i=0; i< recipe_names.length;i++){
        //console.log(recipe_names[i])
        var button_text = recipe_names[i].charAt(0)

        
        for (let j= 1; j < recipe_names[i].length; j++){
            //console.log(recipe_names[i].charAt(j))
            if (recipe_names[i].charAt(j) == recipe_names[i].charAt(j).toUpperCase()){
                button_text += " "+ recipe_names[i].charAt(j)
            }else{

                button_text += recipe_names[i].charAt(j)
            }
        }
        console.log(button_text)
        var temp = ""
        temp = '"' + recipe_names[i] + '"'
        html_code += "<a class='recipe-box' onclick='button_func("
        html_code += '"' + recipe_names[i] + '"'
        html_code += ")'>"
        html_code += "<img src = 'Images/" + recipe_names[i]+".png'>"
        html_code += "<h2>"+button_text+"</h2></a>"
        
        buttons += "<button class='recipe-button' onclick = "
        buttons += "'button_func("
        buttons += temp
        buttons += ")'>"
        buttons += button_text + "</button><p>"
       // buttons += "<button onclick = 'button_func("+temp+")'>" + recipe_names[i]+"</button><p>"

    }
    //createP(buttons)
    createP(html_code)
}