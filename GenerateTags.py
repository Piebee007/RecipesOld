import glob

print(glob.glob('Recipes/Recipes/*.txt'))
unique_tags = []
file_text = ""
file_array = glob.glob('Recipes/Recipes/*.txt')
for file_name in file_array:
    tags_in_file = ""
    tags_in_file += file_name[16:len(file_name)-4]
    file = open(file_name, "r")
    for line in file:
        if line[0:5] == "Tags:":
            tags_list = line[6:].split(", ")
            for tag in tags_list:
                if tag[len(tag)-1:len(tag)] == "\n":
                        #print(tag[:len(tag)-1])
                        tag = (tag[:len(tag)-1])
                if tag not in unique_tags:
                    #print(tag[len(tag)-1:len(tag)])
                    if tag[len(tag)-1:len(tag)] == "\n":
                        #print(tag[:len(tag)-1])
                        unique_tags.append(tag[:len(tag)-1])
                    else:
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