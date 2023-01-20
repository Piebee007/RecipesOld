import glob

print(glob.glob('Recipes/*.txt'))
unique_tags = []
file_text = ""
file_array = glob.glob('Recipes/*.txt')
for file_name in file_array:
    tags_in_file = ""
    tags_in_file += file_name[8:len(file_name)-4]
    file = open(file_name, "r")
    for line in file:
        if line[0:5] == "Tags:":
            tags_list = line[6:].split(", ")
            for tag in tags_list:
                if tag not in unique_tags:
                    unique_tags.append(tag)
                tags_in_file += ", " + tag
    file_text += tags_in_file + "\n"
    file.close()

print(unique_tags)
unique_tags_text = ""
for tag in unique_tags:
    unique_tags_text += ", " +tag 
unique_tags_text += "\n"




print(file_text)
file = open("Tags.txt", "w")
file.write(unique_tags_text)
file.write(file_text)
file.close()