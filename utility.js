// get element by id name 

function getElementByIdName(id){

    return document.getElementById(id)
}

function getElementNumbervaluById(id){

    let elementText = document.getElementById(id).innerText;
    let valueIs = parseFloat(elementText);
    
    return valueIs

}