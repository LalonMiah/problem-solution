var bussinessMan = 1750;
var minister = 1000;
var cadre  = 1800;

if(bussinessMan > minister){
    if(bussinessMan > cadre){
        console.log("Bussiness Man is bigger.");
    }else{
        console.log("Cadre Man is bigger.")
    }
}else{
    if(minister > cadre){
        console.log("Minister is bigger.");
    }else{
        console.log("Cadre Man is bigger.");
    }
}

// another way to get
if(bussinessMan > minister && bussinessMan > cadre){
    console.log("Bussiness Man is bigger");
}else if(minister > cadre && minister > bussinessMan){
    console.log("Minister is bigger");
}else{
    console.log("Cadre Man is bigger");
}
