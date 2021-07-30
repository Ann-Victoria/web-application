function myButton(event) {
  event.preventDefault()

  var century = document.getElementById('century').value
  console.log(century)
  var year = document.getElementById('year').value
  console.log(year)
  var month = parseInt(document.getElementById('month').value)
  console.log(month)
  var date = parseInt(document.getElementById('date').value)
  console.log(date)
  if((month>12) + (month<=0) ) {
    alert('Invalid, enter valid month')
  }
  if((date>31) + (date<=0)) {
    alert('Invalid,enter valid date')
  }

  var a = (~~(century/4))-2*century-1
  console.log(a)
  var b = ~~((5*year)/4)
  console.log(b)
  var c = ~~(26*(month+1)/10)
  console.log(c)

  var dayOfTheWeek = (a+b+c+date)%7
  console.log(dayOfTheWeek)

  var radio = document.getElementsByName('gender')
    .forEach(radio => {
      if(radio.checked) {
        console.log(radio.value)
      }
    })
    
    

}
 
  
  
  

  


  



    