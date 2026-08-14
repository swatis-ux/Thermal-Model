// Data structure for all 11 Thermal Stress Categories matching Image 2
const thermalCategories = [
    {
        num: 1,
        title: "EXTREME HEAT STRESS",
        rangeText: "Above 46°C",
        description: "Extremely overloaded, heat intolerable.",
        minTemp: 46.1,
        maxTemp: 100,
        themeClass: "theme-extreme-heat",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Angry Sun -->
            <circle cx="150" cy="45" r="16" fill="#fecdd3" stroke="#e11d48"/>
            <path d="M150 20v6 M150 64v6 M125 45h-6 M175 45h6 M132 27l-4-4 M168 63l4 4 M132 63l-4 4 M168 27l4-4" stroke="#e11d48"/>
            <path d="M143 42 Q147 38 149 42 M152 42 Q154 38 157 42 M146 51 Q150 47 154 51" stroke="#e11d48"/>
            <!-- Collapsed Body -->
            <path d="M40 160 C50 145, 80 145, 95 160" fill="none"/> <!-- back -->
            <circle cx="35" cy="165" r="14"/> <!-- head prone -->
            <path d="M30 162 L24 162 M40 162 L34 162" stroke-width="3"/> <!-- x_x eyes -->
            <path d="M30 168 L24 168 M40 168 L34 168" stroke-width="3"/>
            <path d="M48 168 Q65 170 110 170"/> <!-- torso flat -->
            <path d="M110 170 L140 165 M110 170 L145 175"/> <!-- legs -->
            <path d="M55 168 L50 180 M65 168 L70 180"/> <!-- arms collapsed -->
            <!-- Heat lines & sweat -->
            <path d="M70 120 Q75 110 70 100 M90 125 Q95 115 90 105 M110 130 Q115 120 110 110" stroke="#e11d48" stroke-dasharray="4 4"/>
        </svg>`
    },
    {
        num: 2,
        title: "VERY STRONG HEAT STRESS",
        rangeText: "38°C to 46°C",
        description: "Very uncomfortable, heat is overwhelming.",
        minTemp: 38,
        maxTemp: 46,
        themeClass: "theme-very-strong-heat",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Sun -->
            <circle cx="160" cy="40" r="14" stroke="#f97316"/>
            <path d="M153 38 Q155 35 157 38 M163 38 Q165 35 167 38 M156 46 Q160 42 164 46" stroke="#f97316"/>
            <!-- Bent Hunched Body -->
            <circle cx="85" cy="65" r="18"/> <!-- Head -->
            <path d="M78 60 L83 63 M91 63 L86 60" stroke-width="3"/> <!-- Sad eyes -->
            <path d="M80 75 Q85 70 90 75"/> <!-- Mouth -->
            <path d="M80 83 Q70 115 85 145"/> <!-- Curved Torso -->
            <path d="M85 145 L75 185 M85 145 L95 185"/> <!-- Legs -->
            <path d="M75 95 L65 72 L72 65"/> <!-- Arm holding head -->
            <!-- Sweat Drops -->
            <path d="M62 60 Q60 65 62 67 Q65 67 63 60 Z" fill="#38bdf8" stroke="none"/>
            <path d="M108 70 Q106 75 108 77 Q111 77 109 70 Z" fill="#38bdf8" stroke="none"/>
            <!-- Heat waves -->
            <path d="M120 90 Q125 80 120 70 M135 100 Q140 90 135 80" stroke="#f97316" stroke-dasharray="3 3"/>
        </svg>`
    },
    {
        num: 3,
        title: "STRONG HEAT STRESS",
        rangeText: "32°C to 38°C",
        description: "Uncomfortable, strain on the body.",
        minTemp: 32,
        maxTemp: 37.9,
        themeClass: "theme-strong-heat",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="95" cy="60" r="18"/>
            <path d="M88 58 A2 2 0 1 1 88 57.9 M102 58 A2 2 0 1 1 102 57.9" stroke-width="4"/>
            <path d="M90 72 Q95 67 100 72"/>
            <path d="M95 78 L90 125 L80 175 M90 125 L100 175"/>
            <path d="M90 88 L70 70 L80 62"/> <!-- Hand wiping forehead -->
            <!-- Sweat Drops & Waves -->
            <path d="M72 52 Q70 57 72 59 Q75 59 73 52 Z" fill="#38bdf8" stroke="none"/>
            <path d="M130 60 Q135 50 130 40 M145 70 Q150 60 145 50" stroke="#fb8500" stroke-dasharray="3 3"/>
        </svg>`
    },
    {
        num: 4,
        title: "MODERATE HEAT STRESS",
        rangeText: "26°C to 32°C",
        description: "Feeling warm, some discomfort.",
        minTemp: 26,
        maxTemp: 31.9,
        themeClass: "theme-moderate-heat",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Sun overhead -->
            <circle cx="100" cy="25" r="10" stroke="#f4a261"/>
            <path d="M100 8v5 M100 37v5 M83 25h-5 M122 25h-5" stroke="#f4a261"/>
            <!-- Standing character hand on head -->
            <circle cx="100" cy="70" r="18"/>
            <path d="M93 68 A2 2 0 1 1 93 67.9 M107 68 A2 2 0 1 1 107 67.9" stroke-width="4"/>
            <path d="M95 80 Q100 77 105 80"/>
            <path d="M100 88 L100 135 M100 135 L88 180 M100 135 L112 180"/>
            <path d="M100 95 L120 110 M100 95 L80 80 L88 70"/> <!-- hand on head -->
            <path d="M118 65 Q116 70 118 72 Q121 72 119 65 Z" fill="#38bdf8" stroke="none"/>
        </svg>`
    },
    {
        num: 5,
        title: "NO THERMAL STRESS (COMFORTABLE)",
        rangeText: "9°C to 26°C",
        description: "Comfortable, no thermal stress.",
        minTemp: 9,
        maxTemp: 25.9,
        themeClass: "theme-comfortable",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Cloud & Sparkles -->
            <path d="M140 40 Q150 30 165 35 Q175 40 170 50 Q180 60 165 65 L135 65 Q125 55 140 40 Z" stroke="#94a3b8" fill="#f1f5f9"/>
            <path d="M45 45 L50 35 L55 45 L65 50 L55 55 L50 65 L45 55 L35 50 Z" fill="#2a9d8f" stroke="none"/>
            <!-- Happy Open Arms Character -->
            <circle cx="100" cy="65" r="18"/>
            <path d="M92 62 A2 2 0 1 1 92 61.9 M108 62 A2 2 0 1 1 108 61.9" stroke-width="4"/>
            <path d="M92 72 Q100 82 108 72" stroke-width="3"/> <!-- Big Smile -->
            <path d="M100 83 L100 135 M100 135 L85 180 M100 135 L115 180"/>
            <path d="M100 92 L65 75 M100 92 L135 75"/> <!-- Arms Wide Open -->
        </svg>`
    },
    {
        num: 6,
        title: "SLIGHT COLD STRESS",
        rangeText: "0°C to 9°C",
        description: "Slightly cool, mild sensation.",
        minTemp: 0,
        maxTemp: 8.9,
        themeClass: "theme-slight-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Wind Breeze -->
            <path d="M140 45 Q160 40 170 50 Q160 60 145 55 M150 70 Q170 65 180 75" stroke="#00b4d8"/>
            <!-- Crossed Arms Character -->
            <circle cx="100" cy="65" r="18"/>
            <path d="M93 62 A2 2 0 1 1 93 61.9 M107 62 A2 2 0 1 1 107 61.9" stroke-width="4"/>
            <path d="M95 73 Q100 70 105 73"/> <!-- Neutral / slight frown -->
            <path d="M100 83 L100 135 M100 135 L88 180 M100 135 L112 180"/>
            <!-- Arms Crossed -->
            <path d="M100 92 L80 105 L115 105 M100 92 L120 105 L85 105"/>
            <!-- Shiver Lines -->
            <path d="M72 80 Q70 85 72 90 M128 80 Q130 85 128 90" stroke="#00b4d8"/>
        </svg>`
    },
    {
        num: 7,
        title: "MODERATE COLD STRESS",
        rangeText: "-13°C to 0°C",
        description: "Clearly cold, discomfort grows.",
        minTemp: -13,
        maxTemp: -0.1,
        themeClass: "theme-moderate-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Snowflakes -->
            <path d="M40 45 v12 M34 51 h12 M150 40 v12 M144 46 h12" stroke="#0077b6"/>
            <!-- Hugging Self Character -->
            <circle cx="100" cy="65" r="18"/>
            <path d="M92 62 L96 65 M108 62 L104 65" stroke-width="3"/> <!-- Unhappy eyes -->
            <path d="M94 75 Q100 70 106 75"/> <!-- Frown -->
            <path d="M100 83 L100 135 M100 135 L88 180 M100 135 L112 180"/>
            <path d="M100 90 Q75 100 85 115 L115 115 M100 90 Q125 100 115 115 L85 115"/> <!-- Tight cross -->
            <!-- Stronger Shiver -->
            <path d="M68 65 Q65 75 68 85 M132 65 Q135 75 132 85" stroke="#0077b6"/>
        </svg>`
    },
    {
        num: 8,
        title: "STRONG COLD STRESS",
        rangeText: "-27°C to -13°C",
        description: "Very cold, risk of hypothermia.",
        minTemp: -27,
        maxTemp: -13.1,
        themeClass: "theme-strong-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Crouched Shivering Figure -->
            <circle cx="90" cy="70" r="18"/>
            <path d="M83 67 L87 69 M97 67 L93 69" stroke-width="3"/>
            <path d="M85 78 Q90 73 95 78 M83 81 L97 81"/> <!-- Chattering teeth -->
            <path d="M90 88 C75 100 75 130 85 145"/> <!-- Hunched back -->
            <path d="M85 145 L70 180 M85 145 L95 180"/> <!-- Bent knees -->
            <path d="M88 95 L65 110 L105 110"/> <!-- Hugging tightly -->
            <!-- Heavy Shiver Lines & Cold Wind -->
            <path d="M55 70 L50 80 L55 90 M125 70 L130 80 L125 90" stroke="#023e8a"/>
            <path d="M140 100 Q160 95 175 105" stroke="#023e8a"/>
        </svg>`
    },
    {
        num: 9,
        title: "VERY STRONG COLD STRESS",
        rangeText: "-40°C to -27°C",
        description: "Extremely cold, high risk of hypothermia.",
        minTemp: -40,
        maxTemp: -27.1,
        themeClass: "theme-very-strong-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Winter Beanie & Heavy Coat -->
            <path d="M80 52 Q100 30 120 52 Z" fill="#3a0ca3"/> <!-- Beanie -->
            <circle cx="100" cy="32" r="6" fill="#3a0ca3"/> <!-- Pompom -->
            <circle cx="100" cy="68" r="18"/> <!-- Face -->
            <path d="M93 67 A1.5 1.5 0 1 1 93 66.9 M107 67 A1.5 1.5 0 1 1 107 66.9" stroke-width="3"/>
            <path d="M95 77 L105 77"/>
            <!-- Thick Winter Coat Body -->
            <path d="M75 86 L125 86 L130 150 L70 150 Z" fill="#e2e8f0"/>
            <path d="M100 86 L100 150"/> <!-- Zipper line -->
            <path d="M70 150 L75 185 M130 150 L125 185"/> <!-- Legs -->
            <!-- Snow / Wind -->
            <path d="M35 80 Q50 70 35 60 M150 110 Q170 100 155 90" stroke="#3a0ca3"/>
        </svg>`
    },
    {
        num: 10,
        title: "EXTREME COLD STRESS",
        rangeText: "Below -40°C",
        description: "Intolerable cold, dangerous conditions.",
        minTemp: -45,
        maxTemp: -40.1,
        themeClass: "theme-extreme-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Full Parka Hooded Jacket -->
            <path d="M70 45 C70 30 130 30 130 45 C140 65 140 90 130 95 C120 100 80 100 70 95 C60 90 60 65 70 45 Z" fill="#7209b7"/>
            <!-- Inner face opening -->
            <ellipse cx="100" cy="65" rx="14" ry="16" fill="#f8fafc"/>
            <path d="M93 63 L97 65 M107 63 L103 65" stroke-width="3"/>
            <path d="M96 73 Q100 70 104 73"/>
            <!-- Heavy Parka Body -->
            <path d="M65 95 L135 95 L140 160 L60 160 Z" fill="#7209b7"/>
            <path d="M100 95 L100 160" stroke="#ffffff"/>
            <path d="M75 160 L75 185 M125 160 L125 185"/>
            <!-- Blizzard storm lines -->
            <path d="M25 50 L45 50 M155 70 L180 70 M30 120 L60 120 M145 140 L175 140" stroke="#7209b7" stroke-dasharray="4 4"/>
        </svg>`
    },
    {
        num: 11,
        title: "EXTREME COLD STRESS (Severe Exposure)",
        rangeText: "Below -40°C (Severe)",
        description: "Extreme cold exposure, life-threatening.",
        minTemp: -100,
        maxTemp: -45.1,
        themeClass: "theme-extreme-cold",
        svg: `
        <svg viewBox="0 0 200 200" width="220" height="220" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
            <!-- Completely bundled up in a thermal cocoon / sleeping bag -->
            <path d="M70 50 C70 30 130 30 130 50 L140 160 C140 185 60 185 60 160 Z" fill="#4c1d95"/>
            <!-- Tight face opening -->
            <circle cx="100" cy="60" r="12" fill="#f8fafc"/>
            <path d="M94 58 A1 1 0 1 1 94 57.9 M106 58 A1 1 0 1 1 106 57.9" stroke-width="3"/>
            <path d="M96 65 L104 65"/>
            <!-- Bundle Wrappings -->
            <path d="M65 85 Q100 95 135 85 M62 115 Q100 125 138 115 M60 145 Q100 155 140 145" stroke="#ffffff" stroke-width="3"/>
            <!-- Severe Ice / Blizzard -->
            <path d="M20 30 L50 35 M150 40 L185 45 M15 100 L45 105 M150 130 L180 135" stroke="#4c1d95" stroke-width="3"/>
        </svg>`
    }
];

// DOM Elements
const tempSlider = document.getElementById('temp-slider');
const tempBadge = document.getElementById('temp-badge');
const resultCard = document.getElementById('result-card');
const stressNumber = document.getElementById('stress-number');
const stressTitle = document.getElementById('stress-title');
const tempRangeText = document.getElementById('temp-range-text');
const illustrationBox = document.getElementById('illustration-box');
const stressDescription = document.getElementById('stress-description');

// Function to update the view based on temperature
function updateSimulator(temp) {
    // Find matching thermal category
    const category = thermalCategories.find(cat => temp >= cat.minTemp && temp <= cat.maxTemp) 
                    || thermalCategories[4]; // Default fallback to comfortable

    // Update Slider Badge
    tempBadge.textContent = `${temp}°C`;

    // Update Card Values
    stressNumber.textContent = category.num;
    stressTitle.textContent = category.title;
    tempRangeText.textContent = category.rangeText;
    illustrationBox.innerHTML = category.svg;
    stressDescription.textContent = category.description;

    // Reset theme classes and apply current theme
    resultCard.className = "result-card " + category.themeClass;
}

// Event Listener for Slider
tempSlider.addEventListener('input', (e) => {
    updateSimulator(parseFloat(e.target.value));
});

// Initial load
updateSimulator(parseFloat(tempSlider.value));