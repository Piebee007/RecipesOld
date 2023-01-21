var recipes;

function preload(){
    recipes = loadStrings("Tags.txt")
}

function show_recipes(tag){
    sessionStorage.setItem('tag',tag)
    location.href = "tags_recipes.html"
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