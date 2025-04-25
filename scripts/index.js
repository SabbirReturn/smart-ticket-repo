document.getElementById('buy-ticket').addEventListener('click', function(){
    let targetSection = document.getElementById('timeSchedule');
    targetSection.scrollIntoView({behavior:"smooth"})
})
// document.addEventListener('click', function handleClickButton(event){
//     let buttonClick = event.target;
//     console.log(buttonClick);
// })

// let seats = document.getElementsByClassName('seat');
// for(let seat of seats){
//     seat.addEventListener('click', function(event){
//         let seatNumber = event.target;
//         let seatText = seatNumber.innerText;
//         seatNumber.classList.add('bg-red-400')
//         console.log(seatText)
//     })

// }
// let seats = document.getElementsByClassName('seat');
// let selectedSeats = [];

// for (let seat of seats) {
//   seat.addEventListener('click', function (event) {
//     let seatElement = event.target;
//     let seatText = seatElement.innerText;

//     // Check if this seat is already selected
//     if (seatElement.classList.contains('bg-red-400')) {
//       // Deselect the seat
//       seatElement.classList.remove('bg-red-400');
//       selectedSeats = selectedSeats.filter(s => s !== seatText);
//     //   console.log('Unselected:', seatText);
//     } else {
//       // If less than 4 seats are selected, allow selection
//       if (selectedSeats.length < 2) {
//         seatElement.classList.add('bg-red-400');
//         selectedSeats.push(seatText);
//         // console.log('Selected:', seatText);
//       } else {
//         alert('You can select a maximum of 2 seats.');
//       }
//     }

//     console.log('Currently selected:', selectedSeats);
//   });
// }

let seats = document.getElementsByClassName('seat');
let selectedSeats = [];
let seatBody = document.getElementById('seat-details');
let seatCountElement = document.getElementById('seat-count');
let totalPriceElement = document.getElementById('total-price');
let seatPrice = 600;

for (let seat of seats) {
  seat.addEventListener('click', function (event) {
    let seatElement = event.target;
    let seatText = seatElement.innerText;

    if (seatElement.classList.contains('bg-red-400')) {
      // Deselect
      seatElement.classList.remove('bg-red-400');
      selectedSeats = selectedSeats.filter(s => s !== seatText);
    } else {
      if (selectedSeats.length >= 4) {
        alert('You can select a maximum of 4 seats.');
        return;
      }
      seatElement.classList.add('bg-red-400');
      selectedSeats.push(seatText);
    }

    // Update seat count
    seatCountElement.innerText = selectedSeats.length;

    

    

    // let availableSeatText = availableSeat.innerText;
    // let selectedSeat = selectedSeats.length;
    // let updateSeats = parseInt(availableSeatText - selectedSeat);
    // availableSeat.innerText = updateSeats;
    
    

    // Update seat list in table
    seatBody.innerHTML = '';
    selectedSeats.forEach(seat => {
      seatBody.innerHTML += `
        <tr>
          <td>${seat}</td>
          <td>Economy</td>
          <td>${seatPrice}</td>
        </tr>
      `;
    });

    // Update total price
    totalPriceElement.innerText = selectedSeats.length * seatPrice;

    // update seat number
    let availableSeats = document.getElementById('available-seats');
    let totalSeats = 40;

    let availableSeat = totalSeats - selectedSeats.length;
    availableSeats.innerText = availableSeat;
    


    // using coupon
    document.getElementById('apply-btn').addEventListener('click', function(){
        let coupon = document.getElementById('coupon-code');
        let couponText = coupon.innerText;
        let totalPrice = document.getElementById('total-price')
        let totalPriceText = parseInt(totalPrice.innerText)
        if( selectedSeats.length === 4 && couponText === 'Couple 20'){
            // 20%off
            let offPrice = totalPriceText *20/100;
            let updatePrice = totalPriceText - offPrice;
            setInnerText('coupon-price', updatePrice)
        }
        else{
           setInnerText('coupon-price',totalPriceText) 
        }
    })
    
    // After updating:
updateNextButton();


  });
  
}

let phoneInput = document.getElementById('phone-number');
let nextBtn = document.getElementById('next-btn');

//  enable Next button
function updateNextButton() {
    let phone = phoneInput.value.trim();
    let isPhoneValid = phone.length >= 10;
    let hasSelected4Seats = selectedSeats.length === 1 || 2|| 3||4;

    if (hasSelected4Seats && isPhoneValid) {
        nextBtn.disabled = false;
        nextBtn.classList.remove('bg-gray-400');
        nextBtn.classList.add('bg-green-500', 'hover:bg-green-600');
    } else {
        nextBtn.disabled = true;
        nextBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
        nextBtn.classList.add('bg-gray-400');
    }
}
// Listen for phone number input
phoneInput.addEventListener('input', updateNextButton);



document.getElementById('next-btn').addEventListener('click', function(){
    hide('main-container')
    showBtn('success')
})

document.getElementById('continue-btn').addEventListener('click', function(){
    hide('success')
    showBtn('main-container')
    phoneInput.value = '';
    selectedSeats = [];
    seatCountElement.innerText = '0';
    seatBody.innerHTML = '';
    totalPriceElement.innerText = '0';
    document.getElementById('coupon-price').innerText = '0';
    document.getElementById('coupon-code').value = '';
    for (let seat of seats) {
        seat.classList.remove('bg-red-400');
    } 
    document.getElementById('available-seats').innerText = '40';
    updateNextButton();
    function hide(id) {
        document.getElementById(id).classList.add('hidden');
    }
    
    function showBtn(id) {
        document.getElementById(id).classList.remove('hidden');
    }
})

