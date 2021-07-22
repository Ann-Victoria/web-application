let myButton = document.querySelector('button')

myButton.addEventListener= ("click", calculate)
function calculate() {
  let century =document.getElementById('century').value
  let year = document.getElementById('year').value
  let month = document.getElementById('month').value
  let date = document.getElementById('date').value

  
  let dayOfTheWeek = (((century/4)- 2*century)+((5*year/4)+((26*(month+1)/10))+date)%7)
  console.log(dayOfTheWeek)
}
calculate()


function userGender() {
  return document.querySelector('input[name"gender"]:checked')
}

let akanFemaleName =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let akanMaleName =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
function akanName() {
if(userGender===female && dayOfTheWeek===sunday) {
  alert('Your Akan name is ' + akanFemaleName['0'])
} else if(userGender===female && dayOfTheWeek===monday) {
  alert('Your Akan name is ' + akanFemaleName['1'])
} else if(userGender===female && dayOfTheWeek===tuesday) {
  alert('Your Akan name is ' + akanFemaleName['2'])
} else if(userGender===female && dayOfTheWeek===wednesday) {
  alert('Your Akan name is ' + akanFemaleName['3'])
} else if(userGender===female && dayOfTheWeek===thursday) {
  alert('Your Akan name is '+ akanFemaleName['4'])
} else if(userGender===female && dayOfTheWeek===friday) {
  alert('Your Akan name is ' + akanFemaleName['5'])
} else if(userGender===female && dayOfTheWeek===saturday) {
  alert('Your Akan name is '+ akanFemaleName['6'])
} else if(userGender===male && dayOfTheWeek===sunday) {
  alert('Your Akan name is ' + akanMaleName['0'])
} else if(userGender===male && dayOfTheWeek===monday) {
  alert('Your Akan name is '+ akanMaleName['1'])
} else if(userGender===male && dayOfTheWeek===tuesday) {
  alert('Your Akan name is '+ akanMaleName['2'])
} else if(userGender===male && dayOfTheWeek===wednesday) {
  alert('Your Akan name is '+ akanMaleName['3'])
} else if(userGender===male && dayOfTheWeek===thursday) {
  alert('Your Akan name is '+ akanMaleName['4'])
} else if(userGender===male && dayOfTheWeek===friday) {
  alert('Your Akan name is '+ akanMaleName['5'])
} else{
  alert('Your Akan name is '+ akanMaleName['6'])
}

}




