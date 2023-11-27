
//Button
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });

//Text input
document.getElementById('myTextInput').addEventListener('input', function() {
    console.log('Text changed to:', this.value);
  });

//Checkbox
document.getElementById('myCheckbox').addEventListener('change', function() {
    if (this.checked) {
      console.log('Checkbox is checked');
    } else {
      console.log('Checkbox is unchecked');
    }
  });


//Radio Button
document.querySelectorAll('input[name="radioGroup"]').forEach((elem) => {
    elem.addEventListener('change', function() {
      console.log('Selected:', this.id);
    });
  });


//Drop down
document.getElementById('mySelect').addEventListener('change', function() {
    console.log('Selected option:', this.value);
  });


//Slider
document.getElementById('mySlider').addEventListener('input', function() {
    console.log('Slider value:', this.value);
  });

//Date picker
document.getElementById('myDatepicker').addEventListener('change', function() {
    console.log('Selected date:', this.value);
  });


//Tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }