var dropdownChildOpen = true; // Флаг для отслеживания состояния элемента dropdown-child

function moveProgress_1() {
  var progress = document.getElementById("myProgress");
  var width = 0;
  var interval = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++; 
      progress.value = width;
    }
    
    // Закрытие элемента dropdown-child
    if (dropdownChildOpen) {
      var dropdownChild = document.querySelector('.dropdown-child');
      dropdownChild.style.display = 'none';

  setTimeout(function() {
    window.location.href = "page_1mines/sec_page.html";
  }, 5000); // 5 секунд в миллисекундах
    }
  }
}


function moveProgress_3() {
  var progress = document.getElementById("myProgress");
  var width = 0;
  var interval = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++; 
      progress.value = width;
    }
    
    // Закрытие элемента dropdown-child
    if (dropdownChildOpen) {
      var dropdownChild = document.querySelector('.dropdown-child');
      dropdownChild.style.display = 'none';


  setTimeout(function() {
    window.location.href = "page_3mines/sec_page.html";
  }, 5000); // 5 секунд в миллисекундах
    }
  }
}