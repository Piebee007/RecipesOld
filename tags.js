var recipes;

function preload(){
    recipes = loadStrings("Tags.txt")
}

function show_recipes(tag){
    for (let j=1; j<recipes.length;j++){
        if (recipes[j] != ""){
            if (recipes[j].includes(tag)){
                console.log(recipes[j].split(", ")[0])
            }
        }
    }
}

function setup(){
    var tags = recipes[0].split(", ")
    console.log(tags)
    var tag_buttons = "";
    for (let i =0; i< tags.length ;i++){
        if (tags[i] != ""){
            var temp = '"' + tags[i] + '"'
            tag_buttons += "<button onclick = "
            tag_buttons += "'show_recipes("
            tag_buttons += temp
            tag_buttons += ")'>"
            tag_buttons += tags[i] + "</button><p>"
        }
    }
    console.log(tag_buttons)
    createP(tag_buttons)
    /*
    var temp = ""
    temp = '"' + recipe_names[i] + '"'
    buttons += "<button onclick = "
    buttons += "'button_func("
    buttons += temp
    buttons += ")'>"
    buttons += button_text + "</button><p>"*/
}