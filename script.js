// --- ДАНІ ГРИ (Сценарій) ---
const scenarios = [
    {
        id: 1,
        year: 1648,
        title: "Пошук союзників",
        image: "img/RadaNaSichi.jpg", // Переконайся, що такий файл є у папці img
        text: "Ви на Січі (Микитинська Січ). Королівська армія сильна, а у козаків немає кінноти. Потрібен союзник. До кого звернемося?",
        choices: [
            {
                text: "Укласти союз із Кримським ханом Іслам-Гіреєм III",
                resultText: "Мудре рішення! Татарська кіннота допоможе проти польських гусарів.",
                moraleChange: 10,
                authorityChange: 20,
                nextScenario: 2,
                correct: true
            },
            {
                text: "Звернутися по допомогу до Московського царя одразу",
                resultText: "Цар відмовляє. Москва ще не готова до війни. Ви втрачаєте час.",
                moraleChange: -20,
                authorityChange: -10,
                nextScenario: 2, 
                correct: false
            },
            {
                text: "Розраховувати лише на власні сили (піхоту)",
                resultText: "Без кінноти на відкритому степу нас розіб'ють. Це великий ризик.",
                moraleChange: -30,
                authorityChange: 0,
                nextScenario: 2,
                correct: false
            }
        ]
    },
    {
        id: 2,
        year: 1648,
        title: "Битва під Жовтими Водами",
        image: "img/YkripleniTabir.jpg",
        text: "Травень 1648. Авангард польського війська під керівництвом сина Потоцького наближається. Як діємо?",
        choices: [
            {
                text: "Атакувати в лоб усіма силами",
                resultText: "Це самогубство! Польська артилерія викосить наші ряди.",
                moraleChange: -50,
                authorityChange: -20,
                nextScenario: 3,
                correct: false
            },
            {
                text: "Оточити табір, переманити реєстровців на свій бік",
                resultText: "Геніально! Реєстровці переходять до нас, поляки в пастці.",
                moraleChange: 20,
                authorityChange: 20,
                nextScenario: 3,
                correct: true
            }
        ]
    },
    {
        id: 3,
        year: 1648,
        title: "Битва під Корсунем",
        image: "img/DorogaVlisi.jpg",
        text: "Основні сили поляків відступають через Горохову Діброву. Максим Кривоніс пропонує план.",
        choices: [
            {
                text: "Дати їм піти, щоб не проливати зайвої крові",
                resultText: "Вони перегрупуються і знищать нас пізніше. Помилка.",
                moraleChange: -20,
                authorityChange: -10,
                nextScenario: 4,
                correct: false
            },
            {
                text: "Влаштувати засідку, перекопати дорогу та атакувати",
                resultText: "Повна перемога! Гетьмани Потоцький і Калиновський у полоні.",
                moraleChange: 20,
                authorityChange: 30,
                nextScenario: 4,
                correct: true
            }
        ]
    },
    {
        id: 4,
        year: 1649,
        title: "Зборівська битва та договір",
        image: "img/NametHana.jpg",
        text: "Серпень 1649. Ми оточили короля Яна II Казимира. Перемога близька, але хан Іслам-Гірей III раптом вимагає припинити бій і підписати угоду.",
        choices: [
            {
                text: "Проігнорувати хана і атакувати короля",
                resultText: "Хан вдарив нам у спину! Військо розгромлене. Це кінець повстання.",
                moraleChange: -100,
                authorityChange: -100,
                nextScenario: -1, 
                correct: false
            },
            {
                text: "Погодитися на Зборівський договір (40 тис. реєстру)",
                resultText: "Не ідеально, але це дає нам визнання держави. Гетьманщина створена!",
                moraleChange: 10,
                authorityChange: 10,
                nextScenario: 5,
                correct: true
            }
        ]
    },
    {
        id: 5,
        year: 1651,
        title: "Берестецька битва",
        image: "img/Boloto.jpg",
        text: "Найбільша битва Європи. У вирішальний момент татари тікають з поля бою, захопивши вас у полон. Військо в оточенні. Хто врятує ситуацію?",
        choices: [
            {
                text: "Ніхто, здаємося",
                resultText: "Без лідера військо загинуло.",
                moraleChange: -100,
                authorityChange: -50,
                nextScenario: -1,
                correct: false
            },
            {
                text: "Іван Богун організовує вихід через болото",
                resultText: "Богун вивів частину війська, вимощуючи переправу ряднами та возами. Ми вижили.",
                moraleChange: -10,
                authorityChange: 10,
                nextScenario: 6,
                correct: true
            }
        ]
    },
    {
        id: 6,
        year: 1651,
        title: "Білоцерківський договір",
        image: "img/Poxmyro.jpg",
        text: "Після поразки під Берестечком поляки наступають. Потрібен новий мир. Умови жорсткі: реєстр 20 тис., влада гетьмана лише в Київському воєводстві.",
        choices: [
            {
                text: "Підписати ганебний мир, щоб виграти час",
                resultText: "Народ незадоволений, але це рятує нас від повного знищення.",
                moraleChange: -10,
                authorityChange: -5,
                nextScenario: 7,
                correct: true
            },
            {
                text: "Відмовитися і битися до останнього",
                resultText: "Сил замало. Повстання придушено.",
                moraleChange: -100,
                authorityChange: 0,
                nextScenario: -1,
                correct: false
            }
        ]
    },
    {
        id: 7,
        year: 1654,
        title: "Переяславська рада",
        image: "img/Maidan.jpg",
        text: "Війна триває 6 років. Україна виснажена. Туреччина далеко, Польща ворог. Потрібен сильний протекторат. Ваше рішення?",
        choices: [
            {
                text: "Військовий союз із Московським царством",
                resultText: "Березневі статті підписано. Ми отримуємо військову допомогу проти Польщі.",
                moraleChange: 10,
                authorityChange: 10,
                nextScenario: 8, 
                correct: true
            },
            {
                text: "Повернутися під владу Польщі",
                resultText: "Козаки вас не зрозуміють. Вас скинуто з гетьманства.",
                moraleChange: -100,
                authorityChange: -100,
                nextScenario: -1,
                correct: false
            }
        ]
    },
    {
        id: 8,
        year: 1657,
        title: "Смерть Гетьмана",
        image: "img/Kotik.webp",
        text: "Ви хворієте. Потрібно передати булаву. Кого ви бачите своїм наступником, щоб зберегти державу?",
        choices: [
            {
                text: "Син Юрій Хмельницький",
                resultText: "Він ще занадто молодий і слабкий. Почнеться Руїна.",
                moraleChange: -20,
                authorityChange: -10,
                nextScenario: 100, // Фінал
                correct: false
            },
            {
                text: "Іван Виговський",
                resultText: "Досвідчений політик, який спробує відірватися від Москви (Гадяцька унія).",
                moraleChange: 10,
                authorityChange: 20,
                nextScenario: 100, // Фінал
                correct: true
            }
        ]
    }
];

// --- ЛОГІКА ГРИ ---
 
let currentScenarioIndex = 0;
let morale = 100;
let authority = 0;

const ui = {
    screen: document.getElementById('game-screen'),
    gameImage: document.getElementById('game-image'), // <--- Додано посилання на картинку
    title: document.getElementById('event-title'),
    text: document.getElementById('event-text'),
    choices: document.getElementById('choices'),
    yearBadge: document.getElementById('year-badge'),
    yearDisplay: document.getElementById('year-display'),
    moraleDisplay: document.getElementById('morale-display'),
    authorityDisplay: document.getElementById('authority-display'),
    gameOverScreen: document.getElementById('game-over'),
    victoryScreen: document.getElementById('victory'),
    deathReason: document.getElementById('death-reason'),
    finalRank: document.getElementById('final-rank'),
    finalScore: document.getElementById('final-score')
};

function startGame() {
    currentScenarioIndex = 0;
    morale = 100;
    authority = 0;
    
    ui.gameOverScreen.style.display = 'none';
    ui.victoryScreen.style.display = 'none';
    ui.screen.style.display = 'block';
    
    updateStats();
    loadScenario(0);
}

function updateStats() {
    ui.moraleDisplay.innerText = morale;
    ui.authorityDisplay.innerText = authority;
    
    if (morale < 30) ui.moraleDisplay.style.color = 'red';
    else ui.moraleDisplay.style.color = 'inherit';
}

function loadScenario(index) {
    if (index >= scenarios.length) {
        endGame(true);
        return;
    }

    let scenario = null;
    // Шукаємо сценарій за індексом у масиві, або за ID, якщо структура складна.
    // Тут у нас простий масив, тому беремо просто по порядку:
    scenario = scenarios[index]; 
    
    // Якщо сценарій "фінальний" (id=100), завершуємо гру
    if (!scenario) {
        endGame(true);
        return;
    }

    ui.title.innerText = scenario.title;
    ui.text.innerText = scenario.text;
    ui.yearBadge.innerText = scenario.year + " рік";
    ui.yearDisplay.innerText = scenario.year;
    
    // --- ОНОВЛЕННЯ КАРТИНКИ ---
    if (scenario.image) {
        ui.gameImage.src = scenario.image;
        ui.gameImage.style.display = 'block'; // Показати, якщо була схована
    } else {
        ui.gameImage.style.display = 'none'; // Сховати, якщо картинки немає
    }

    ui.choices.innerHTML = '';

    scenario.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerText = choice.text;
        btn.onclick = () => makeChoice(choice);
        ui.choices.appendChild(btn);
    });
}

function makeChoice(choice) {
    morale += choice.moraleChange;
    authority += choice.authorityChange;
    
    if (morale > 100) morale = 100;
    if (morale <= 0) {
        endGame(false, "Козацький дух зламано. Військо розбіглося.");
        return;
    }

    updateStats();
    
    alert(choice.resultText);

    if (choice.nextScenario === -1) {
        endGame(false, choice.resultText);
    } else if (choice.nextScenario === 100) {
         endGame(true);
    } else {
        const nextIndex = scenarios.findIndex(s => s.id === choice.nextScenario);
        if (nextIndex !== -1) {
            currentScenarioIndex = nextIndex;
            loadScenario(currentScenarioIndex);
        } else {
            endGame(true);
        }
    }
}

function endGame(isVictory, reason = "") {
    ui.screen.style.display = 'none';
    
    if (isVictory) {
        ui.victoryScreen.style.display = 'block';
        let rank = "Козак";
        if (authority > 30) rank = "Сотник";
        if (authority > 60) rank = "Полковник";
        if (authority >= 90) rank = "Гетьман Всієї України";
        
        ui.finalScore.innerText = `Фінальний авторитет: ${authority}`;
        ui.finalRank.innerText = `Ваше звання: ${rank}`;
    } else {
        ui.gameOverScreen.style.display = 'block';
        ui.deathReason.innerText = reason;
    }
}

// Запуск гри при завантаженні сторінки
startGame();