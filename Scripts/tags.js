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
    var buttons = "<div class='row'>"
    var columns = ["<div class='column'>","<div class='column'>","<div class='column'>"]
    for (let i =0; i< tags.length ;i++){
        
        if (tags[i] != ""){
            var temp = '"' + tags[i] + '"'
            columns[i % 3] += "<button class='recipe-button' onclick = "
            columns[i % 3] += "'show_recipes("
            columns[i % 3] += temp
            columns[i % 3] += ")'>"
            columns[i % 3] += tags[i] + "</button><p>"
        }
    }
    columns[0] += "</div>"
    columns[1] += "</div>"
    columns[2] += "</div>"
    buttons += columns[0] + columns[1]+columns[2]
    buttons += "</div>"
    console.log(columns[0])
    console.log(buttons)
    createP(buttons)
    
}