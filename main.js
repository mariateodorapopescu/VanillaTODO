Element.prototype.insertChildAtIndex = function(child, index) {
    if (!index) index = 0
    if (index >= this.children.length) {
        this.appendChild(child)
    } else {
        this.insertBefore(child, this.children[index])
    }
}
let selector = document.getElementById('list')
let i;
let all = 0;
let ok = 0;
var ceva = document.createElement('div');
ceva.setAttribute("class", "footer");
ceva.setAttribute("id", "ftr");
addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let txt = selector.value;
        selector.classList.add("element");
        var para = document.createElement("div");
        para.setAttribute("class", "newww");
        const inputVal = txt.trim();
        if (txt == '' || inputVal == '') {
            alert("Please write something");
        } else {
            all++;
            let check = this.document.createElement('input');
            check.type = "checkbox";
            var text = document.createElement('p');
            text.setAttribute("class", "text");
            text.setAttribute("contenteditable", "true");
            text.innerText = txt;
            document.getElementsByClassName("container")[0].appendChild(para);
            para.appendChild(check);
            para.appendChild(text);
            selector.value = "";
            let ics = this.document.createElement('button');
            ics.setAttribute("class", "altcv");
            let pls = this.document.createElement('button');
            pls.setAttribute("class", "altcvv");
            ics.innerText = "X";
            document.getElementsByClassName("container")[0].appendChild(para);
            para.appendChild(ics);
            pls.innerText = "+";
            para.appendChild(pls);
            pls.style.display = 'none';
            ics.style.display = 'inline';
            ics.addEventListener('click', function() {
                para.classList.add('todeletenow');
                para.style.display = 'none';
                all--;
                ceva.innerText = all + " items in total";
                ics.style.display = 'none';
                pls.style.display = 'inline';
            });
            pls.addEventListener('click', function() {
                para.classList.remove('todeletenow');
                all++;
                ceva.innerText = all + " items in total";
                ics.style.display = 'inline';
                pls.style.display = 'none';
            });
            selector.value = "";
            ceva.innerText = all + " items in total";
        }
    }
});
document.getElementById("hbrnm").appendChild(ceva);


// end of no local storage

// Element.prototype.insertChildAtIndex = function(child, index) {
//     if (!index) index = 0;
//     if (index >= this.children.length) {
//         this.appendChild(child);
//     } else {
//         this.insertBefore(child, this.children[index]);
//     }
// };

// function loadListItems() {
//     const savedList = localStorage.getItem('todoList');
//     if (savedList) {
//         const listContainer = document.querySelector('.container');
//         listContainer.innerHTML = savedList;
//         all = document.querySelectorAll('.newww').length;
//         ceva.innerText = all + ' items left';

//         // Restore the checked state and button state of each item
//         const listData = JSON.parse(localStorage.getItem('todoListData'));
//         if (listData && listData.length > 0) {
//             const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//             checkboxes.forEach((checkbox, index) => {
//                 const item = listData[index];
//                 if (item && item.checked) {
//                     checkbox.checked = true;
//                 } else {
//                     checkbox.checked = false;
//                 }

//                 const newItem = checkbox.parentElement;
//                 if (item && item.todeletenow) {
//                     newItem.style.display = 'none';
//                     all--;
//                     ceva.innerText = all + ' items left';
//                 }
//             });
//             for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
//                 document.querySelectorAll('.newww')[i].children[2].style.display = 'inline';
//                 document.querySelectorAll('.newww')[i].children[3].style.display = 'none';
//             }
//             for (i = 0; i < document.querySelectorAll('.todeletenow').length; i++) {
//                 document.querySelectorAll('.todeletenow')[i].children[2].style.display = 'none';
//                 document.querySelectorAll('.todeletenow')[i].children[3].style.display = 'inline';
//             }
//             const deleteButtons = document.querySelectorAll('.altcv');
//             const restoreButtons = document.querySelectorAll('.altcvv');


//             // ics.addEventListener('click', function() {
//             //     para.classList.add('todeletenow');
//             //     para.style.display = 'none';
//             //     all--;
//             //     ceva.innerText = all + ' items left';
//             //     ics.style.display = 'none';
//             //     pls.style.display = 'inline';
//             //     listData[index].deleteState = true;
//             //     para.classList.remove('active');
//             //     // After removing, save the updated list to local storage
//             //     saveListItems();
//             // });
//             // pls.addEventListener('click', function() {
//             //     para.classList.remove('todeletenow');
//             //     all++;
//             //     ceva.innerText = all + ' items left';
//             //     ics.style.display = 'inline';
//             //     pls.style.display = 'none';
//             //     listData[index].deleteState = false;
//             //     para.classList.add('active');
//             //     // After adding, save the updated list to local storage
//             //     saveListItems();
//             // });

//             deleteButtons.forEach((deleteBtn, index) => {
//                 deleteBtn.addEventListener('click', function() {
//                     const item = listData[index];
//                     if (!item.deleteState) {
//                         const newItem = deleteBtn.parentElement;
//                         newItem.style.display = 'none';
//                         all--;
//                         ceva.innerText = all + ' items left';
//                         item.deleteState = true;
//                         saveListItems();
//                     }
//                 });
//             });
//             restoreButtons.forEach((restoreBtn, index) => {
//                 restoreBtn.addEventListener('click', function() {
//                     const item = listData[index];
//                     if (item.deleteState) {
//                         const newItem = restoreBtn.parentElement;
//                         newItem.style.display = 'block';
//                         all++;
//                         ceva.innerText = all + ' items left';
//                         item.deleteState = false;
//                         saveListItems();
//                     }
//                 });
//             });
//         }
//     }
// }

// function saveListItems() {
//     const listContainer = document.querySelector('.container');
//     const listHTML = listContainer.innerHTML;
//     localStorage.setItem('todoList', listHTML);
//     // Save the state of each item (checked, todeletenow, and deleteState) in an array
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     const listData = [];
//     checkboxes.forEach((checkbox, index) => {
//         const newItem = checkbox.parentElement;
//         listData.push({
//             checked: checkbox.checked,
//             todeletenow: newItem.classList.contains('todeletenow'),
//             deleteState: newItem.children[3].style.display === 'inline',
//         });
//     });
//     localStorage.setItem('todoListData', JSON.stringify(listData));
// }

// let selector = document.getElementById('list');
// let all = 0;
// var ceva = document.createElement('div');
// ceva.setAttribute('class', 'footer');
// ceva.setAttribute('id', 'ftr');
// addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         let txt = selector.value;
//         selector.classList.add('element');
//         var para = document.createElement('div');
//         para.setAttribute('class', 'newww');
//         const inputVal = txt.trim();
//         if (txt == '' || inputVal == '') {
//             alert('Please write something');
//         } else {
//             all++;
//             let check = this.document.createElement('input');
//             check.type = 'checkbox';
//             var text = document.createElement('p');
//             text.setAttribute('class', 'text');
//             text.setAttribute('contenteditable', 'true');
//             text.innerText = txt;
//             document.getElementsByClassName('container')[0].appendChild(para);
//             para.appendChild(check);
//             para.appendChild(text);
//             selector.value = '';
//             saveListItems();
//             let ics = this.document.createElement('button');
//             ics.setAttribute('class', 'altcv');
//             let pls = this.document.createElement('button');
//             pls.setAttribute('class', 'altcvv');
//             ics.innerText = 'X';
//             document.getElementsByClassName('container')[0].appendChild(para);
//             para.appendChild(ics);
//             pls.innerText = '+';
//             para.appendChild(pls);
//             pls.style.display = 'none';
//             ics.style.display = 'inline';
//             ics.addEventListener('click', function() {
//                 para.classList.add('todeletenow');
//                 para.style.display = 'none';
//                 all--;
//                 ceva.innerText = all + ' items left';
//                 ics.style.display = 'none';
//                 pls.style.display = 'inline';
//                 listData[index].deleteState = true;
//                 para.classList.remove('active');
//                 // After removing, save the updated list to local storage
//                 saveListItems();
//             });
//             pls.addEventListener('click', function() {
//                 para.classList.remove('todeletenow');
//                 all++;
//                 ceva.innerText = all + ' items left';
//                 ics.style.display = 'inline';
//                 pls.style.display = 'none';
//                 listData[index].deleteState = false;
//                 para.classList.add('active');
//                 // After adding, save the updated list to local storage
//                 saveListItems();
//             });
//             selector.value = '';
//             ceva.innerText = all + ' items left';
//             // After adding, save the updated list to local storage
//             saveListItems();
//         }
//     }
// });
// document.getElementById('hbrnm').appendChild(ceva);

// // Call the function to load list items from local storage on page load
// loadListItems();


const toggleSwitch = document.querySelector('.toggle-switch');
const sunElement = document.querySelector('.sun');
const moonElement = document.querySelector('.moon');
const theroot = document.querySelector(':root');

// Function to toggle between light and dark mode
const toggleMode = (isDarkMode) => {
    document.body.classList.toggle('dark-mode');
    // theroot.toggle('dark-mode');
    document.getElementById("total").classList.toggle('dark-mode');
    ceva.classList.toggle('dark-mode');
    sunElement.classList.toggle('move');
    moonElement.classList.toggle('show');
    if (sunElement.classList.contains('move')) {
        sunElement.style.animation = 'moveSun 0.3s ease-in-out';
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("total").setAttribute('data-theme', 'dark');
        ceva.setAttribute('data-theme', 'dark');
        sunElement.style.animationDelay = '0.5s';
    } else {
        sunElement.style.animation = 'tremble 0.5s ease-in-out forwards';
        void sunElement.offsetWidth; // Trigger reflow to restart the animation
        sunElement.style.animationDelay = '0s';
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("total").setAttribute('data-theme', 'light');
        ceva.setAttribute('data-theme', 'light');
    }
};

// Function to handle system color scheme change
const handleSystemColorScheme = (event) => {
    const isDarkMode = event.matches;
    toggleMode(!isDarkMode);
};

// Watch for changes in system color scheme
const systemColorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
systemColorSchemeQuery.addListener(handleSystemColorScheme);
handleSystemColorScheme(systemColorSchemeQuery);

// Toggle switch event listener
toggleSwitch.addEventListener('click', function() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleMode(!isDarkMode);
});

function updateTime() {
    var now = new Date();
    var timeElement = document.getElementById("time");
    var hours = formatTimeUnit(now.getHours());
    var minutes = formatTimeUnit(now.getMinutes());
    var timeString = hours + ":" + minutes;
    timeElement.textContent = timeString;
    var dateElement = document.getElementById("date");
    var dayOfTheweek = getDayOfTheWeek(now.getDay());
    var month = getMonth(now.getMonth());
    var date = dayOfTheweek + ", " + now.getDate() + " " + month + " " + now.getFullYear();
    dateElement.textContent = date;
}

function formatTimeUnit(timeUnit) {
    return timeUnit < 10 ? "0" + timeUnit : timeUnit;
}

function getDayOfTheWeek(dayIndex) {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}

function getMonth(monthIndex) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}
window.onload = updateTime;
setInterval(updateTime, 6000);
const cords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
const colors = [
    "#664229",
    "#78553a",
    "#89694c",
    "#9b7d5f",
    "#ad9273",
    "#bfa787",
    "#d2bd9d",
    "#7e5c42",
    "#97775e",
    "#b0947b",
    "#cab199",
    "#e4cfb8",
    "#ffedd9",
    "#fbe9d3",
    "#f7e4cc",
    "#f2e0c6",
    "#eedcc0",
    "#ead7b9",
    "#e5d3b3"
];
circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e) {
    circles.forEach(function(circle, index) {
        circle.style.display = "block";
    });
    cords.x = e.clientX;
    cords.y = e.clientY;
});

function animeteCircles() {
    let x = cords.x;
    let y = cords.y;
    circles.forEach(function(circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;
        circle.x = x;
        circle.y = y;
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.1;
        y += (nextCircle.y - y) * 0.1;
    });
    requestAnimationFrame(animeteCircles);
}
animeteCircles();
document.addEventListener("mouseout", () => {
    circles.forEach(function(circle, index) {
        circle.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById("preloader");
    setTimeout(function() {
        preloader.style.display = "none";
    }, 5000);
});

function isDayTime() {
    var currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
}

function updateLoaderBackground() {
    var preloader = document.getElementById("preloader");
    if (isDayTime()) {
        preloader.classList.remove("night-mode");
        preloader.classList.add("day-mode");
    } else {
        preloader.classList.remove("day-mode");
        preloader.classList.add("night-mode");
    }
}
updateLoaderBackground();

function updateBackground() {
    var big = document.querySelector(".bg");
    var sunny = big.querySelector(".sunny");
    var moony = big.querySelector(".moony");
    var starry = big.querySelector(".star");
    var sid = document.querySelector('.sidebar');

    if (isDayTime()) {
        big.style.backgroundColor = "#e5d3b3";
        sunny.style.opacity = "1";
        moony.style.opacity = "0";
        starry.style.opacity = "0";
        sid.classList.remove("night-mode");
    } else {
        big.style.backgroundColor = "rgb(84, 68, 56)";
        moony.style.opacity = "1";
        sunny.style.opacity = "0";
        starry.style.opacity = "1";
        sid.classList.add(".night-mode");
    }
}

// updateBackground();
requestAnimationFrame(updateBackground);

function isNoon() {
    var currentHour = new Date().getHours();
    return currentHour >= 12 && currentHour < 14;
}

function isMorning() {
    var currentHour = new Date().getHours();
    return currentHour >= 4 && currentHour < 12;
}

function isNight() {
    var currentHour = new Date().getHours();
    return (currentHour >= 22 && currentHour < 24) || (currentHour >= 0 && currentHour < 4);
}

function isAfterNoon() {
    var currentHour = new Date().getHours();
    return currentHour >= 14 && currentHour < 18;
}

function isEvening() {
    var currentHour = new Date().getHours();
    return currentHour >= 18 && currentHour < 22;
}

function updateSalutation() {
    var h1 = document.querySelector("h1");
    if (isMorning()) {
        h1.innerHTML = "Good morning!";
    }
    if (isNoon()) {
        h1.innerHTML = "Good day!";
    }
    if (isAfterNoon()) {
        h1.innerHTML = "Good afternoon!";
    }
    if (isEvening()) {
        h1.innerHTML = "Good evening!";
    }
    if (isNight()) {
        h1.innerHTML = "Good night!";
    }
}

document.addEventListener("DOMContentLoaded", updateSalutation);

// Cookie banner functionality
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookieBtn = document.getElementById('accept-cookie');

acceptCookieBtn.addEventListener('click', () => {
    // Hide the cookie banner
    cookieBanner.style.display = 'none';

    // Set a cookie to remember the user's choice (you can use your preferred method to set the cookie)
    setCookie('cookieAccepted', 'true', 30);
});

// Check if the user has already accepted the cookie
const cookieAccepted = getCookie('cookieAccepted');
if (cookieAccepted === 'true') {
    cookieBanner.style.display = 'none';
}

// Cookie helper functions (replace with your own cookie functions)
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + "=")) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

let title = document.querySelector(".title");
let prevv = document.querySelector(".prev");
let nextt = document.querySelector(".next");
let playpaus = document.querySelector(".plypause");
let audio = document.querySelector("audio");

let shuffleBtn = document.querySelector(".shuffle-btn");
let repeatBtn = document.querySelector(".repeat-btn");
let volumeDownBtn = document.querySelector(".volume-down-btn");
let volumeUpBtn = document.querySelector(".volume-up-btn");
let volumeSlider = document.querySelector(".volume-slider");
let progressSlider = document.querySelector(".progress-slider");

let songList = [
    { path: "ASMR.mp3", songName: "ASMR Sounds" },
    { path: "Birds.mp3", songName: "Birds" },
    { path: "Crickets.mp3", songName: "Crickets" },
    { path: "Rain.mp3", songName: "Rain" },
    { path: "Waves.mp3", songName: "Waves" },
    { path: "WhiteNoise.mp3", songName: "White Noise" },
    { path: "Wind.mp3", songName: "Wind" }
];
let songPlaying = false;
let isShuffle = false;
let isRepeat = false;

function playSong() {
    songPlaying = true;
    audio.play();
    playpaus.classList.add('active');
    playpaus.style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-pause-512.png)";
}

function pauseSong() {
    songPlaying = false;
    audio.pause();
    playpaus.classList.remove('active');
    playpaus.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/04/07/18/57/play-1314463_1280.png)";
}

playpaus.addEventListener("click", () => (songPlaying ? pauseSong() : playSong()));

function loadSong(song) {
    title.textContent = song.songName;
    audio.src = song.path;

    // Calculate the dimensions based on the song name length
    const titleWidth = title.clientWidth;
    const containerWidth = song.songName.length * 15;

    // Set the container dimensions
    let micontainer = document.querySelector(".music-container");
    let miplayer = document.querySelector(".player");
    micontainer.style.width = `${containerWidth + 90}px`;
    miplayer.style.width = `${containerWidth}px`;

    playSong(); // Autoplay the song when loading
}

let currentSongIndex = 0;
loadSong(songList[currentSongIndex]);

function shuffleSongs() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active");
    // Implement shuffle functionality
}

shuffleBtn.addEventListener("click", shuffleSongs);

function repeatSongs() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active");
    // Implement repeat functionality
}

repeatBtn.addEventListener("click", repeatSongs);

volumeDownBtn.addEventListener("click", () => {
    // Decrease the volume
    audio.volume -= 0.1;
    volumeSlider.value = audio.volume * 100;
});

volumeUpBtn.addEventListener("click", () => {
    // Increase the volume
    audio.volume += 0.1;
    volumeSlider.value = audio.volume * 100;
});

volumeSlider.addEventListener("input", () => {
    // Adjust the volume based on the slider value
    audio.volume = volumeSlider.value / 100;
});

progressSlider.addEventListener("input", () => {
    // Update the audio's current time based on the slider value
    const currentTime = (audio.duration * progressSlider.value) / 100;
    audio.currentTime = currentTime;
});

audio.addEventListener("timeupdate", () => {
    // Update the progress slider and time display based on the audio's current time
    const progress = (audio.currentTime / audio.duration) * 100;
    progressSlider.value = progress;
});

prevv.addEventListener("click", () => {
    // Play the previous song
    currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
    loadSong(songList[currentSongIndex]);
});

nextt.addEventListener("click", () => {
    // Play the next song
    currentSongIndex = (currentSongIndex + 1) % songList.length;
    loadSong(songList[currentSongIndex]);
});

audio.addEventListener("ended", () => {
    if (isRepeat) {
        // Repeat the current song
        loadSong(songList[currentSongIndex]);
    } else if (isShuffle) {
        // Shuffle and play a random song
        currentSongIndex = Math.floor(Math.random() * songList.length);
        loadSong(songList[currentSongIndex]);
    } else {
        // Play the next song
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        loadSong(songList[currentSongIndex]);
    }
});

function shuffleSongs() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active");
    if (isShuffle) {
        // Shuffle the song list
        songList = shuffleArray(songList);
        currentSongIndex = 0; // Reset the current song index
    }
}

function repeatSongs() {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active");
}

shuffleBtn.addEventListener("click", shuffleSongs);
repeatBtn.addEventListener("click", repeatSongs);

// Function to shuffle an array
function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
const apiKey = '382f52ea12584954cbe6d829245626a7';

function setWeatherIcon(description) {
    const iconElement = document.getElementById('weather-icon');

    // Map the weather description to the appropriate icon name
    if (description.includes('cloud') || description.includes('clouds')) {
        iconElement.innerHTML = '<ion-icon name="cloudy-outline"></ion-icon>';
    } else if (description.includes('rain')) {
        iconElement.innerHTML = '<ion-icon name="rainy-outline"></ion-icon>';
    } else if (description.includes('thunderstorm')) {
        iconElement.innerHTML = '<ion-icon name="thunderstorm-outline"></ion-icon>';
    } else if (description.includes('sun') || description.includes('clear') || (description.includes('sunny') && new Date().getHours() < 20 && new Date().getHours() > 4)) {
        iconElement.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    } else if (description.includes('snow')) {
        iconElement.innerHTML = '<ion-icon name="snow-outline"></ion-icon>';
    } else if (description.includes('mist') || description.includes('windy')) {
        iconElement.innerHTML = '<ion-icon name="reorder-four-outline"></ion-icon>';
    } else {
        // Default icon for other weather conditions
        iconElement.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    }
}


function getPublicIPAddress() {
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the public IP address on the webpage
            fetch(`https://ipapi.co/${data.ip}/json`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Get the city from the geolocation data
                    console.log(data);
                    const city = data.city;
                    // Update the city on the webpage
                    const cityElement = document.getElementById('city');
                    cityElement.innerText = city;

                    // Fetch the weather data for the city
                    fetchWeatherData(city);
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

// Function to fetch weather data for a given city
function fetchWeatherData(city) {
    // Make the API request to get weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('nuuu');
            }
            return response.json();
        })
        .then(data => {
            // Handle the weather data here
            const descriptionElement = document.getElementById('des');
            const degreeElement = document.getElementById('deg');
            const humidityElement = document.getElementById('humidity');
            const pressureElement = document.getElementById('pressure');
            const windSpeedElement = document.getElementById('wind-speed');

            descriptionElement.innerText = data.weather[0].description;
            degreeElement.innerText = `${Math.floor(data.main.temp - 273.15)}°C`;
            humidityElement.innerText = `${data.main.humidity}%`;
            pressureElement.innerText = `${data.main.pressure} hPa`;
            windSpeedElement.innerText = `${data.wind.speed} m/s`;

            // Set the weather icon
            setWeatherIcon(data.weather[0].description.toLowerCase());
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}


getPublicIPAddress();
const images = [
    '1.jpeg', // Sunday
    '2.jpeg', // Monday
    '3.jpeg', // Tuesday
    '4.jpeg', // Wednesday
    '5.jpeg', // Thursday
    '6.jpeg', // Friday
    '7.jpeg' // Saturday
];

const quotes = [
    'You are capable of amazing things.',
    'Every day is a new beginning.',
    'You are enough.',
    'The best is yet to come.',
    'You were born to be real, not to be perfect.',
    'Your potential is endless.',
    'Life is tough, but so are you.'
];

function getDayOfWeek() {
    const date = new Date();
    return date.getDay();
}

function changeImageDaily() {
    const dailyquote = document.getElementById('heroquote');
    const dailyImage = document.getElementById('cuteimg');
    const dayOfWeek = getDayOfWeek();

    // Get the corresponding image source and quote from the arrays based on the day of the week
    const imageSource = images[dayOfWeek];
    const quote = quotes[dayOfWeek];

    // Change the image source and quote text
    dailyImage.src = imageSource;
    dailyquote.innerText = quote;

    // Optional: You can add alt text or other attributes if needed
    dailyImage.alt = `Image of ${dayOfWeek}`;
}

// Call the function to change the image and quote daily
changeImageDaily();
let menuToggle = document.querySelector('.menuToggle');
let sidebar = document.querySelector('.sidebar');
menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
let menulist = document.querySelectorAll('.menulist li');

function activeLink() {
    menulist.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
menulist.forEach((item) => item.addEventListener('click', activeLink));
// ...
// Function to set the checked property of all checkboxes to true
// function checkAllCheckboxes() {
//     document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//         checkbox.checked = true;
//     });
//     saveListItems();
// }

// // Function to set the checked property of all checkboxes to false
// function uncheckAllCheckboxes() {
//     document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//         checkbox.checked = false;
//     });
//     saveListItems();
// }

// let vedemceiasta = document.querySelector('.cevaa');
// vedemceiasta.querySelector('.nuj').addEventListener('click', checkAllCheckboxes);
// vedemceiasta.querySelector('#todel').addEventListener('click', uncheckAllCheckboxes);
// let complit = document.getElementById('complete').addEventListener('click', () => {
//     for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
//         if (document.querySelectorAll('input[type="checkbox"]')[i].checked == false) {
//             document.querySelectorAll('.newww')[i].style.display = "none";
//         }
//         if (document.querySelectorAll('input[type="checkbox"]')[i].checked == true) {
//             document.querySelectorAll('.newww')[i].style.display = "flex";
//         }
//         for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
//             document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
//         }
//     }
//     saveListItems();
// });

// function vedemnoi() {
//     if (document.getElementById('complete').classList.contains('active')) {
//         const buttonElement = document.getElementById('complete');
//         buttonElement.click();
//     }
//     saveListItems();
//     requestAnimationFrame(vedemnoi);
// }
// requestAnimationFrame(vedemnoi);

// let hom = document.getElementById('hom').addEventListener('click', () => {
//     for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
//         document.querySelectorAll('.newww')[i].style.display = "flex";
//         for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
//             document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
//         }
//     }
//     saveListItems();
// });

// let progr = document.getElementById('progr').addEventListener('click', () => {
//     for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
//         if (document.querySelectorAll('input[type="checkbox"]')[i].checked == true) {
//             document.querySelectorAll('.newww')[i].style.display = "none";
//         }
//         if (document.querySelectorAll('input[type="checkbox"]')[i].checked == false) {
//             document.querySelectorAll('.newww')[i].style.display = "flex";
//         }
//         for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
//             document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
//         }
//     }
//     saveListItems();
// });

// function vedemnoiacm() {
//     if (document.getElementById('progr').classList.contains('active')) {
//         const buttonElementdoi = document.getElementById('progr');
//         buttonElementdoi.click();
//     }
//     saveListItems();
//     requestAnimationFrame(vedemnoiacm);
// }
// requestAnimationFrame(vedemnoiacm);

// let delit = document.getElementById('delit').addEventListener('click', () => {
//     for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
//         document.querySelectorAll('.newww')[i].style.display = "none";
//         for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
//             document.querySelectorAll('.newww.todeletenow')[j].style.display = "flex";
//         }
//     }
//     saveListItems();
// });

// function vedemnoi() {
//     if (document.getElementById('delit').classList.contains('active')) {
//         document.querySelectorAll('altcv').forEach
//         const buttonElement = document.getElementById('delit');
//         buttonElement.click();
//     }
//     saveListItems();
//     requestAnimationFrame(vedemnoi);
// }
// requestAnimationFrame(vedemnoi);


function checkAllCheckboxes() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = true;
    });
}

// Function to set the checked property of all checkboxes to false
function uncheckAllCheckboxes() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
    });
}

let vedemceiasta = document.querySelector('.cevaa');
vedemceiasta.querySelector('.nuj').addEventListener('click', checkAllCheckboxes);
vedemceiasta.querySelector('#todel').addEventListener('click', uncheckAllCheckboxes);
let complit = document.getElementById('complete').addEventListener('click', () => {
    let unnumarr = 0;
    for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
        if (document.querySelectorAll('input[type="checkbox"]')[i].checked == false) {
            document.querySelectorAll('.newww')[i].style.display = "none";
        }
        if (document.querySelectorAll('input[type="checkbox"]')[i].checked == true) {
            document.querySelectorAll('.newww')[i].style.display = "flex";
            unnumarr++;
        }
        for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
            document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
        }
    }
    ceva.style.display = 'none';
});

function vedemnoi() {
    if (document.getElementById('complete').classList.contains('active')) {
        const buttonElement = document.getElementById('complete');
        buttonElement.click();
    }
    requestAnimationFrame(vedemnoi);
}
requestAnimationFrame(vedemnoi);

let hom = document.getElementById('hom').addEventListener('click', () => {
    for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
        document.querySelectorAll('.newww')[i].style.display = "flex";
        for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
            document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
        }
    }
    ceva.style.display = 'flex';
});

let progr = document.getElementById('progr').addEventListener('click', () => {
    let unnumar = 0;
    for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
        if (document.querySelectorAll('input[type="checkbox"]')[i].checked == true) {
            document.querySelectorAll('.newww')[i].style.display = "none";
        }
        if (document.querySelectorAll('input[type="checkbox"]')[i].checked == false) {
            document.querySelectorAll('.newww')[i].style.display = "flex";
            unnumar++;
        }
        for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
            document.querySelectorAll('.newww.todeletenow')[j].style.display = "none";
        }
    }
    ceva.style.display = 'none';
});

function vedemnoiacm() {
    if (document.getElementById('progr').classList.contains('active')) {
        const buttonElementdoi = document.getElementById('progr');
        buttonElementdoi.click();
    }
    requestAnimationFrame(vedemnoiacm);
}
requestAnimationFrame(vedemnoiacm);

let delit = document.getElementById('delit').addEventListener('click', () => {
    for (i = 0; i < document.querySelectorAll('.newww').length; i++) {
        document.querySelectorAll('.newww')[i].style.display = "none";
        for (j = 0; j < document.querySelectorAll('.newww.todeletenow').length; j++) {
            document.querySelectorAll('.newww.todeletenow')[j].style.display = "flex";
        }
    }
    ceva.style.display = 'none';
});

function vedemnoi() {
    if (document.getElementById('delit').classList.contains('active')) {
        document.querySelectorAll('altcv').forEach
        const buttonElement = document.getElementById('delit');
        buttonElement.click();
    }
    requestAnimationFrame(vedemnoi);
}
requestAnimationFrame(vedemnoi);
