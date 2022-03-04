// var numbers = [0,-54,5,6.6,-7.8,9];

// function checknum(){
//     var newArr = [];

//     for(var num of numbers){
//         if(num < 0){
//             newArr.push(Math.round(Math.abs(num)));
//         }else{
//             newArr.push(Math.round(num))
//         }
//     }
//     return newArr
// }
// // console.log(checknum(numbers));

// // console.log(Math);

// console.groupEnd(numbers)


var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector(".form__list");
var todos = [];

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var elInputVal = elInput.value.trim();

    elInput.value = "";

    var todo = {
        id: todos.length + 1,
        title: elInputVal,
    }

    todos.push(todo);
    elList.innerHTML = "";

    for (var item of todos){
        var newLi = document.createElement("li");
        newLi.textContent =item.id + "." + item.title;
        elList.appendChild(newLi);
    }
})
