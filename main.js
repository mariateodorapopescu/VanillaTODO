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
        if (txt == "") {
            alert("Please write something");
        } else {
            let everything = this.document.createElement('button');
            everything.setAttribute("class", "altcv");
            everything.addEventListener('click', function() { alert("ook"); });
            everything.innerText = "Check all";
            let cv = document.getElementsByClassName("nuj")[0];
            if (all == 0) {
                cv.style.display = "inline";
            }
            all++;
            let dell = document.getElementsByClassName("nuj")[1];
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
            ics.addEventListener('click', function() {
                if (ok == 0) {
                    ok = 1;
                    dell.style.display = "block";
                }
                let e = para.childNodes;
                let inp = e[0];
                let inpp = e[1];
                let elem = e[2];
                para.removeChild(elem);
                para.removeChild(inpp);
                para.removeChild(inp);
                para.remove(e);
                all--;
                ceva.innerText = all + " items left";
            });
            ics.innerText = "X";
            document.getElementsByClassName("container")[0].appendChild(para);
            para.appendChild(ics);
            selector.value = "";
            ceva.innerText = all + " items left";
        }
    }
});
document.getElementById("hbrnm").appendChild(ceva);

const toggleSwitch = document.querySelector('.toggle-switch');
const sunElement = document.querySelector('.sun');
const moonElement = document.querySelector('.moon');

// Function to toggle between light and dark mode
const toggleMode = (isDarkMode) => {
    document.body.classList.toggle('dark-mode');
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

    if (isDayTime()) {
        big.style.backgroundColor = "#e5d3b3";
        sunny.style.opacity = "1";
        moony.style.opacity = "0";
        starry.style.opacity = "0";
    } else {
        big.style.backgroundColor = "rgb(84, 68, 56)";
        moony.style.opacity = "1";
        sunny.style.opacity = "0";
        starry.style.opacity = "1";
    }
}

updateBackground();

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
    const otherapiKey = 'a2b325f067ce4959b334d0350220e88b';

    function setWeatherIcon(description) {
        const iconElement = document.getElementById('weather-icon');
        let iconFileName = '';
      
        // Map the weather description to the appropriate icon file name
        if (description.includes('cloud') || description.includes('clouds')) {
          iconFileName = 'https://cdn-icons-png.flaticon.com/512/149/149209.png';
        } else if (description.includes('rain')||description.includes('thunderstorm')) {
          iconFileName = 'https://clipart-library.com/images/Bcgrrzq7i.png';
        } else if (description.includes('sun') || description.includes('clear')) {
          iconFileName = 'https://cdn-icons-png.flaticon.com/512/54/54241.png';
        } else {
          // Default icon for other weather conditions
          iconFileName = 'https://www.transparentpng.com/thumb/line/DHcW1z-png-black-thick-horizontal-line.png';
        }
      
        // Set the icon image
        iconElement.src = `${iconFileName}`;
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
            degreeElement.innerText = `${Math.floor(data.main.temp - 273.15)} °C`;
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
  

    //   let cevalista = document.querySelectorAll(".list");
    //   for (let i = 0; i < cevalista.length; i++){
    //     cevalista[i].onclick() = function(){
    //         let j = 0;
    //         while (j < cevalista.length)
    //         {
    //             cevalista[j++].className = 'list';
    //         }
    //         cevalista[i].className = 'list active';
    //     }
    //   }

  
    getPublicIPAddress();
