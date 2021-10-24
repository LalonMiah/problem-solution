var animals = 'Goat';

switch (animals){
    case 'Cow':
        console.log("This is a Cow");
        break;
    case 'Dog':
        console.log("This is a Dog");
        break
    case 'Cat':
        console.log("This is a Cat");
        break;  
    case 'Goat':
    case 'sheep':
        console.log("Goat and sheep are quite same animal");
        break;
    default:
        console.log("This is nothing");
}