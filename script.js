
let elementButton = document.getElementsByClassName('button')[0];
let elementButtonContainer = document.getElementsByClassName('buttonContainer')[0]; //Parent
let widthImg = document.getElementById('inputWidth').value;
let heightImg = document.getElementById('inputHeight').value;


elementButton.addEventListener('click', clickHandler);
function clickHandler(event) {
  let elementImage = document.createElement('img');
  let widthImg = document.getElementById('inputWidth').value;
  let heightImg = document.getElementById('inputHeight').value;

  if (validation(widthImg) === false || validation(heightImg) === false) return;
  
  elementImage.src = 'https://random.imagecdn.app/' + widthImg + '/' + heightImg + '?temp=' + Math.random();
  let Images = document.getElementsByTagName('img');
  
  if (Images.length > 0) {
    elementButtonContainer.removeChild(document.getElementsByTagName('img')[0]);
  }
  
  elementButtonContainer.insertBefore(elementImage, elementButton);
  console.log(widthImg);
}

function validation(value) {
  if (value < 10 || value > 1000) {
    alert('Такой размер картинки запрещён, введите другое значение')
    return false
  } else { return true }
}


//elementButton.addEventListener ('click', function () {alert('Hi')} );
/* elem.onclick = function() {
  console.log('Popalsya')
} */
//Через метод onclick мы можем добавить только 1 обработчик к DOM елементу (объекту). Если в дальнейшем по коду мы добавляем через onclick еще один обработчик, то он перезаписывает предыдущий.
//Чтобы добавить к DOM объекту несоклько обработчиков надо пользоваться addEventListener.