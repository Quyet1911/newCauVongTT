const today = new Date();
const dayOfWeekNumber = today.getDay();
const dayOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']
const dayName = dayOfWeek[dayOfWeekNumber];
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

document.getElementById('dayName-js').innerHTML = dayName + ',';
document.getElementById('day-Of-Week-js').innerHTML = `${day} / ${month} / ${year}`;


// document.getElementById('weather').innerHTML


async function getWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ha Noi&appid=4b97c9a07f64355e2dfcb108465e65cf&units=metric&lang=vi`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataWeather = await response.json();
        const temperature = dataWeather.main.temp;
        const feelsLike = Math.round(dataWeather.main.feels_like); // Nhiệt độ cảm nhận
        // const weatherDescription = dataWeather.weather[0].description; =>> Mô tả thời tiết
        const iconCode = dataWeather.weather[0].icon; // Mã biểu tượng thời tiết

        // Tạo URL biểu tượng thời tiết
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Cập nhật nội dung HTML
        const weatherCity = document.getElementById('weatherCity-js'); // Đảm bảo bạn có phần tử này trong HTML
        const weatherIcon = document.getElementById('weatherIcon-js'); // Đảm bảo bạn có phần tử này trong HTML

        weatherCity.textContent = `${temperature}°C / ${temperature} - ${feelsLike}°C`;
        weatherIcon.src = iconUrl;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        const weatherCity = document.getElementById('weatherCity-js'); // Đảm bảo bạn có phần tử này trong HTML
        weatherCity.textContent = 'Không thể lấy thông tin thời tiết.';
    }
}

getWeather();



// đóng mở menu 
const megaMenu = document.querySelector('.mega-menu-js');
const menuIcon = document.querySelector('.menuIcon-js');

//hàm mở megamenu
function showMegaMenu(){
    megaMenu.classList.add('open');
    menuIcon.innerHTML = '<i style="color: red; font-size: 20px;" class="fa-solid fa-xmark"></i>';
   
}

//hàm đóng megamenu
function hideMegaMenu(){
    megaMenu.classList.remove('open');
    menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

let isMenuOpen = false;
menuIcon.addEventListener('click', function() {
    if (isMenuOpen == true) {
        hideMegaMenu();
    } else {
        showMegaMenu();
    }
    isMenuOpen = !isMenuOpen; // Đảo ngược trạng thái của menu
});



// đóng mở ô tìm kiếm
let searchIcon = document.querySelector('.searchIcon-js');
let searchInput = document.querySelector('.searchInput-js');
let searchIconClose = document.querySelector('.searchIconClose-js');


function showSearchInput(){
    searchInput.style.display = 'flex';
}

function hideSearchInput(){
    searchInput.style.display = 'none';
}
searchIcon.addEventListener('click', showSearchInput);
searchIconClose.addEventListener('click', hideSearchInput);




// chuyển tiếp slide
$(document).ready(function () {
    $(".owl-1").owlCarousel({
        items: 7,
        loop: true
    });

    $(".owl-2").owlCarousel({
        items: 6,
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 600
    });
});

