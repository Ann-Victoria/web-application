let myButton = document.querySelector('button')

myButton.onclick = function calculate() {}
function calculate() {
  let century =document.getElementById('century').value
  let year = document.getElementById('year').value
  let month = document.getElementById('month').value
  let day = document.getElementById('date').value
  
  let dayOfTheWeek = (((century/4)- 2*century)+((5*year/4)+((26*(month+1)/10))+day)%7)
  console.log(dayOfTheWeek)
}
let myGender = document.getElementById('gender').value
console.log(myGender)

let akanFemaleName =['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let akanMaleName =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
function akanName() {
if(myGender===female && dayOfTheWeek===sunday) {
  alert('Your Akan name is ' + akanFemaleName['0'])
} else if(myGender===female && dayOfTheWeek===monday) {
  alert('Your Akan name is ' + akanFemaleName['1'])
} else if(myGender===female && dayOfTheWeek===tuesday) {
  alert('Your Akan name is ' + akanFemaleName['2'])
} else if(myGender===female && dayOfTheWeek===wednesday) {
  alert('Your Akan name is ' + akanFemaleName['3'])
} else if(myGender===female && dayOfTheWeek===thursday) {
  alert('Your Akan name is '+ akanFemaleName['4'])
} else if(myGender===female && dayOfTheWeek===friday) {
  alert('Your Akan name is ' + akanFemaleName['5'])
} else if(myGender===female && dayOfTheWeek===saturday) {
  alert('Your Akan name is '+ akanFemaleName['6'])
} else if(myGender===male && dayOfTheWeek===sunday) {
  alert('Your Akan name is ' + akanMaleName['0'])
} else if(myGender===male && dayOfTheWeek===monday) {
  alert('Your Akan name is '+ akanMaleName['1'])
} else if(myGender===male && dayOfTheWeek===tuesday) {
  alert('Your Akan name is '+ akanMaleName['2'])
} else if(myGender===male && dayOfTheWeek===wednesday) {
  alert('Your Akan name is '+ akanMaleName['3'])
} else if(myGender===male && dayOfTheWeek===thursday) {
  alert('Your Akan name is '+ akanMaleName['4'])
} else if(myGender===male && dayOfTheWeek===friday) {
  alert('Your Akan name is '+ akanMaleName['5'])
} else{
  alert('Your Akan name is '+ akanMaleName['6'])
}

}




