var recipes;

function preload(){
    recipes = loadStrings("Tags.txt")
}

function button_func(filename){
    sessionStorage.setItem('file',filename)
    location.href = "recipe.html"
}

function show_recipes(tag){
    var tag_recipes = []
    for (let j=1; j<recipes.length;j++){
        if (recipes[j] != ""){
            if (recipes[j].includes(tag)){
                tag_recipes.push(recipes[j].split(", "))
                console.log(recipes[j].split(", ")[0])
                
            }
        }
    }
    var buttons = ""
    for (let j=0; j<tag_recipes.length;j++){
        console.log(tag_recipes)
        var button_text = tag_recipes[j][0].charAt(0)
        for (let k= 1; k < tag_recipes[j][0].length; k++){
            //console.log(recipe_names[i].charAt(j))
            if (tag_recipes[j][0].charAt(k) == tag_recipes[j][0].charAt(k).toUpperCase()){
                button_text += " "+ tag_recipes[j][0].charAt(k)
            }else{

                button_text += tag_recipes[j][0].charAt(k)
            }
        }

        var temp ='"' + tag_recipes[j][0] + '"'
        buttons += "<button onclick = "
        buttons += "'button_func("
        buttons += temp
        buttons += ")'>"
        buttons += tag_recipes[j][0] + "</button><p>"
    }
    createP(buttons)

}

function setup(){
    show_recipes(sessionStorage.getItem('tag'))
}