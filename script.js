document.addEventListener('DOMContentLoaded', () => {
    // === MULTILANG START ===
    const translations = {
        RU: {
            greetingTitle: 'Привет, меня зовут Лилия!',
            greetingText: 'Я — сертифицированный фитнес-тренер, и я здесь, чтобы ты наконец почувствовала: "Я управляю своим телом".<br><br>Я провожу тренировки в направлениях Пилатес, TRX и Табата — как онлайн, так и вживую.<br>Работаю с женщинами, которые устали чувствовать слабость, тяжесть, нестабильность в теле и в жизни.<br><br>Моя цель — не просто привести тебя в форму, а помочь вернуть контроль, энергию и уверенность.<br>Каждая программа подбирается под твои цели, возможности и ритм жизни.',
            greetingTasks: [
                '🏃🏻‍♂️ Похудеть',
                '🏋🏻‍♀️ Набрать мышечную массу и развить силу',
                '💪 Укрепить сердечно-сосудистую систему',
                '🥑 Скорректировать питания и образа жизни',
                '🤕 Восстановиться после травм (в сотрудничестве с физиотерапевтами)'
            ],
            programsTitle: 'Мои программы',
            program1: '💣Сушка PRO — жиросжигающая Табата + питание',
            program2: '💪Стальной пресс — техника, глубина, уверенность',
            program3: '🧘‍♀️ Сила в теле — пилатес + питание на тонус',
            program4: '🔗 TRX Баланс — рельеф, осанка, гибкость',
            scheduleTitle: '📅 Расписание тренировок:',
            scheduleMorning: 'Утренние группы:',
            scheduleEvening: 'Вечерние группы:',
            scheduleNote: '📌 Время указано по Израилю (GMT+3)',
            beforeAfterTitle: 'До/После',
            certificatesTitle: 'Сертификаты',
            reviewsTitle: 'Отзывы',
            faqTitle: 'FAQ: Как проходят тренировки?',
            faq: [
                {q: '👥 Мини-группы по 3–5 человек', a: 'Это идеальный формат: каждому участнику достаточно внимания, а тренировка проходит в комфортной атмосфере.'},
                {q: '💻 Формат', a: 'Все занятия проходят онлайн через Zoom или Telegram. Подключение простое — ссылка приходит заранее, и вы можете тренироваться, не выходя из дома.'},
                {q: '⏱ Продолжительность', a: '45–60 минут: разминка, основная часть, заминка. Темп и нагрузка подбираются под ваш уровень.'},
                {q: '🎯 Индивидуальный подход', a: 'Мы учитываем ваши цели, состояние здоровья и уровень подготовки. Гибкость и профессионализм — наш приоритет.'},
                {q: '💬 Поддержка и обратная связь', a: 'После каждой тренировки вы можете задать вопросы, получить рекомендации и мотивацию.'}
            ],
            footerPhone: 'Телефон: +(972)54-996-1795',
            btnMore: 'Узнать подробнее'
        },
        EN: {
            greetingTitle: 'Hi, my name is Liliya!',
            greetingText: 'I am a certified fitness trainer, and I am here to help you finally feel: "I am in control of my body."<br><br>I conduct Pilates, TRX, and Tabata workouts — both online and in person.<br>I work with women who are tired of feeling weak, heavy, and unstable in their bodies and lives.<br><br>My goal is not just to get you in shape, but to help you regain control, energy, and confidence.<br>Each program is tailored to your goals, abilities, and lifestyle.',
            greetingTasks: [
                '🏃🏻‍♂️ Lose weight',
                '🏋🏻‍♀️ Gain muscle and strength',
                '💪 Strengthen your cardiovascular system',
                '🥑 Adjust nutrition and lifestyle',
                '🤕 Recover after injuries (in collaboration with physiotherapists)'
            ],
            programsTitle: 'My Programs',
            program1: '💣Shredding PRO — Fat-burning Tabata + Nutrition',
            program2: '💪Steel Abs — Technique, Depth, Confidence',
            program3: '🧘‍♀️ Body Strength — Pilates + Toning Nutrition',
            program4: '🔗 TRX Balance — Definition, Posture, Flexibility',
            scheduleTitle: '📅 Training Schedule:',
            scheduleMorning: 'Morning Groups:',
            scheduleEvening: 'Evening Groups:',
            scheduleNote: '📌 Time is Israel time (GMT+3)',
            beforeAfterTitle: 'Before/After',
            certificatesTitle: 'Certificates',
            reviewsTitle: 'Reviews',
            faqTitle: 'FAQ: How are the workouts conducted?',
            faq: [
                {q: '👥 Mini-groups of 3–5 people', a: 'This is the ideal format: everyone gets enough attention, and the workout is held in a comfortable atmosphere.'},
                {q: '💻 Format', a: 'All sessions are held online via Zoom or Telegram. Connection is simple — the link is sent in advance, and you can train from home.'},
                {q: '⏱ Duration', a: '45–60 minutes: warm-up, main part, cool-down. The pace and load are tailored to your level.'},
                {q: '🎯 Individual approach', a: 'We take into account your goals, health status, and fitness level. Flexibility and professionalism are our priorities.'},
                {q: '💬 Support and feedback', a: 'After each workout, you can ask questions, get recommendations, and motivation.'}
            ],
            footerPhone: 'Phone: +(972)54-996-1795',
            btnMore: 'Learn more'
        },
        ES: {
            greetingTitle: '¡Hola, me llamo Liliya!',
            greetingText: 'Soy entrenadora personal certificada y estoy aquí para que por fin sientas: "Yo controlo mi cuerpo".<br><br>Realizo entrenamientos de Pilates, TRX y Tabata — online y presenciales.<br>Trabajo con mujeres que están cansadas de sentirse débiles, pesadas e inestables en su cuerpo y en su vida.<br><br>Mi objetivo no es solo ponerte en forma, sino ayudarte a recuperar el control, la energía y la confianza.<br>Cada programa se adapta a tus objetivos, posibilidades y ritmo de vida.',
            greetingTasks: [
                '🏃🏻‍♂️ Bajar de peso',
                '🏋🏻‍♀️ Ganar masa muscular y fuerza',
                '💪 Fortalecer el sistema cardiovascular',
                '🥑 Corregir la alimentación y el estilo de vida',
                '🤕 Recuperarse después de lesiones (en colaboración con fisioterapeutas)'
            ],
            programsTitle: 'Mis programas',
            program1: '💣Secado PRO — Tabata quemagrasa + nutrición',
            program2: '💪Abdomen de acero — Técnica, profundidad, confianza',
            program3: '🧘‍♀️ Fuerza en el cuerpo — pilates + nutrición para tonificar',
            program4: '🔗 TRX Balance — definición, postura, flexibilidad',
            scheduleTitle: '📅 Horario de entrenamientos:',
            scheduleMorning: 'Grupos de mañana:',
            scheduleEvening: 'Grupos de tarde:',
            scheduleNote: '📌 Hora de Israel (GMT+3)',
            beforeAfterTitle: 'Antes/Después',
            certificatesTitle: 'Certificados',
            reviewsTitle: 'Opiniones',
            faqTitle: 'FAQ: ¿Cómo son los entrenamientos?',
            faq: [
                {q: '👥 Mini-grupos de 3–5 personas', a: 'Es el formato ideal: cada participante recibe suficiente atención y el entrenamiento se realiza en un ambiente cómodo.'},
                {q: '💻 Formato', a: 'Todas las sesiones son online por Zoom o Telegram. La conexión es sencilla: el enlace se envía con antelación y puedes entrenar desde casa.'},
                {q: '⏱ Duración', a: '45–60 minutos: calentamiento, parte principal, vuelta a la calma. El ritmo y la carga se adaptan a tu nivel.'},
                {q: '🎯 Enfoque individual', a: 'Tenemos en cuenta tus objetivos, estado de salud y nivel de preparación. La flexibilidad y el profesionalismo son nuestra prioridad.'},
                {q: '💬 Apoyo y feedback', a: 'Después de cada entrenamiento puedes hacer preguntas, recibir recomendaciones y motivación.'}
            ],
            footerPhone: 'Teléfono: +(972)54-996-1795',
            btnMore: 'Más detalles'
        },
        HE: {
            greetingTitle: 'שלום, שמי ליליה!',
            greetingText: 'אני מאמנת כושר מוסמכת, כאן כדי שתרגישי סוף סוף: "אני שולטת בגוף שלי".<br><br>אני מעבירה אימוני פילאטיס, TRX וטאבטה — אונליין ובאופן פרונטלי.<br>עובדת עם נשים שמאסו בתחושת חולשה, כבדות וחוסר יציבות בגוף ובחיים.<br><br>המטרה שלי — לא רק להביא אותך לכושר, אלא לעזור להחזיר שליטה, אנרגיה וביטחון.<br>כל תוכנית מותאמת למטרות, ליכולות ולסגנון החיים שלך.',
            greetingTasks: [
                '🏃🏻‍♂️ לרדת במשקל',
                '🏋🏻‍♀️ לעלות מסת שריר וכוח',
                '💪 לחזק את מערכת הלב וכלי הדם',
                '🥑 לשפר תזונה ואורח חיים',
                '🤕 להשתקם אחרי פציעות (בשיתוף פיזיותרפיסטים)'
            ],
            programsTitle: 'התוכניות שלי',
            program1: '💣ייבוש PRO — טאבטה שורפת שומן + תזונה',
            program2: '💪בטן פלדה — טכניקה, עומק, ביטחון',
            program3: '🧘‍♀️ כוח בגוף — פילאטיס + תזונה לטונוס',
            program4: '🔗 TRX איזון — חיטוב, יציבה, גמישות',
            scheduleTitle: '📅 לוח אימונים:',
            scheduleMorning: 'קבוצות בוקר:',
            scheduleEvening: 'קבוצות ערב:',
            scheduleNote: '📌 השעה לפי ישראל (GMT+3)',
            beforeAfterTitle: 'לפני/אחרי',
            certificatesTitle: 'תעודות',
            reviewsTitle: 'המלצות',
            faqTitle: 'שאלות נפוצות: איך מתנהלים האימונים?',
            faq: [
                {q: '👥 קבוצות קטנות של 3–5 משתתפות', a: 'זה הפורמט האידיאלי: כל אחת מקבלת מספיק תשומת לב, והאימון מתקיים באווירה נעימה.'},
                {q: '💻 פורמט', a: 'כל המפגשים מתקיימים אונליין בזום או טלגרם. החיבור פשוט — הלינק נשלח מראש, ואת יכולה להתאמן מהבית.'},
                {q: '⏱ משך', a: '45–60 דקות: חימום, חלק עיקרי, שחרור. הקצב והעומס מותאמים לרמה שלך.'},
                {q: '🎯 גישה אישית', a: 'אנחנו מתחשבים במטרות שלך, במצב הבריאותי וברמת הכושר. גמישות ומקצועיות — בראש סדר העדיפויות.'},
                {q: '💬 תמיכה ומשוב', a: 'לאחר כל אימון אפשר לשאול שאלות, לקבל המלצות ומוטיבציה.'}
            ],
            footerPhone: 'טלפון: +(972)54-996-1795',
            btnMore: 'למידע נוסף'
        }
    };

    function setLang(lang) {
        const t = translations[lang] || translations['RU'];
        // Greeting
        const greetingTitle = document.querySelector('.greeting-title');
        if (greetingTitle) greetingTitle.innerHTML = t.greetingTitle;
        // Меняем только текст и задачи, не весь greeting-block
        const greetingBlock = document.querySelector('.greeting-block');
        if (greetingBlock) {
            // Найти все <ul> и <strong> внутри greeting-block
            const ul = greetingBlock.querySelector('ul');
            const strong = greetingBlock.querySelector('strong');
            // Меняем текст до <ul>
            let textNodes = [];
            for (let node of greetingBlock.childNodes) {
                if (node.nodeType === 3 || (node.nodeType === 1 && node.tagName !== 'UL' && node.tagName !== 'STRONG' && !node.classList.contains('greeting-title'))) {
                    textNodes.push(node);
                }
            }
            // Удаляем старые текстовые узлы (кроме greeting-title, strong, ul)
            textNodes.forEach(n => greetingBlock.removeChild(n));
            // Вставляем новый текст после greeting-title
            const title = greetingBlock.querySelector('.greeting-title');
            if (title) {
                const temp = document.createElement('div');
                temp.innerHTML = t.greetingText;
                while (temp.firstChild) {
                    greetingBlock.insertBefore(temp.firstChild, strong || ul || null);
                }
            }
            // Меняем задачи
            if (ul) {
                ul.innerHTML = t.greetingTasks.map(task => `<li>${task}</li>`).join('');
            }
        }
        // Programs
        const programsTitle = document.querySelector('.programs .section-title');
        if (programsTitle) programsTitle.textContent = t.programsTitle;
        const programTitles = [t.program1, t.program2, t.program3, t.program4];
        document.querySelectorAll('.program-card h3').forEach((h3, i) => {
            if (programTitles[i]) h3.textContent = programTitles[i];
        });
        // Schedule popup
        const schedulePopup = document.getElementById('schedule-popup');
        if (schedulePopup) {
            const h3 = schedulePopup.querySelector('h3');
            if (h3) h3.textContent = t.scheduleTitle;
            const strongs = schedulePopup.querySelectorAll('strong');
            if (strongs[0]) strongs[0].textContent = t.scheduleMorning;
            if (strongs[1]) strongs[1].textContent = t.scheduleEvening;
            const note = schedulePopup.querySelector('div[style*="color:#fe3453"]');
            if (note) note.textContent = t.scheduleNote;
        }
        // Before/After
        const beforeAfterTitle = document.querySelectorAll('.section-title');
        if (beforeAfterTitle[1]) beforeAfterTitle[1].textContent = t.beforeAfterTitle;
        // Certificates
        const certificatesTitle = document.querySelector('.certificates-section .section-title');
        if (certificatesTitle) certificatesTitle.textContent = t.certificatesTitle;
        // Reviews
        const reviewsTitle = document.querySelector('.reviews-section .section-title');
        if (reviewsTitle) reviewsTitle.textContent = t.reviewsTitle;
        // FAQ
        const faqBlock = document.getElementById('faq-block');
        if (faqBlock) {
            const faqTitle = faqBlock.querySelector('.section-title');
            if (faqTitle) faqTitle.textContent = t.faqTitle;
            const faqList = faqBlock.querySelector('.faq-list');
            if (faqList) {
                faqList.innerHTML = t.faq.map(item => `<div class="faq-item"><button class="faq-question" type="button">${item.q}</button><div class="faq-answer">${item.a}</div></div>`).join('');
            }
        }
        // Footer phone
        const footerPhone = document.querySelector('.footer p');
        if (footerPhone) footerPhone.textContent = t.footerPhone;
        // Кнопки "Узнать подробнее"
        document.querySelectorAll('.program-content .btn').forEach(btn => {
            btn.textContent = t.btnMore;
        });
    }

    // Обработка клика по языкам
    document.querySelectorAll('.lang-switcher .lang').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.lang-switcher .lang').forEach(l => l.classList.remove('active'));
            btn.classList.add('active');
            setLang(btn.textContent.trim().toUpperCase());
        });
    });
    // По умолчанию — русский
    setLang('RU');
    // === MULTILANG END ===

    // Скрыть все попапы при загрузке страницы
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = 'none';
    });
    // Попапы с кнопками открытия и закрытия
    const popups = document.querySelectorAll('.popup');

    document.body.addEventListener('click', e => {
        // Открыть попап по кнопке с data-popup
        const btn = e.target.closest('.btn[data-popup]');
        if (btn) {
            const id = btn.getAttribute('data-popup');
            const popup = document.getElementById(id);
            if (popup) popup.style.display = 'flex';
            return;
        }

        // Закрыть попап по кнопке с классом close внутри .popup
        if (e.target.classList.contains('close') && e.target.closest('.popup')) {
            e.target.closest('.popup').style.display = 'none';
            return;
        }

        // Закрытие медиа-попапа
        if (e.target.classList.contains('media-popup-close')) {
            const popup = document.getElementById('media-popup');
            if (popup) {
                popup.style.display = 'none';
                const img = popup.querySelector('#popup-img');
                const video = popup.querySelector('#popup-video');
                if (img) img.src = '';
                if (video) video.src = '';
            }
            return;
        }

        // Закрытие модального изображения
        if (e.target.classList.contains('close-image-modal')) {
            const modal = document.getElementById('imageModal');
            if (modal) modal.style.display = 'none';
            return;
        }

        // Закрытие по клику вне popup-content
        if (e.target.classList.contains('popup')) {
            // Клик по фону попапа, а не по контенту
            if (!e.target.querySelector('.popup-content') || e.target === e.target.closest('.popup')) {
                e.target.style.display = 'none';
            }
            return;
        }
        // Закрытие по клику вне media-popup-content
        if (e.target.classList.contains('media-popup')) {
            if (!e.target.querySelector('.media-popup-content') || e.target === e.target.closest('.media-popup')) {
                e.target.style.display = 'none';
                const img = e.target.querySelector('#popup-img');
                const video = e.target.querySelector('#popup-video');
                if (img) img.src = '';
                if (video) video.src = '';
            }
            return;
        }
        // Закрытие по клику вне image-modal-content
        if (e.target.classList.contains('image-modal')) {
            if (!e.target.querySelector('.image-modal-content') || e.target === e.target.closest('.image-modal')) {
                e.target.style.display = 'none';
            }
            return;
        }

        const mediaPopup = document.getElementById('media-popup');
        if (mediaPopup && e.target === mediaPopup) {
            mediaPopup.style.display = 'none';
            const img = mediaPopup.querySelector('#popup-img');
            const video = mediaPopup.querySelector('#popup-video');
            if (img) img.src = '';
            if (video) video.src = '';
            return;
        }

        const imageModal = document.getElementById('imageModal');
        if (imageModal && e.target === imageModal) {
            imageModal.style.display = 'none';
            return;
        }
    });

    // Скроллы: универсальная функция
    function setupScroll(btnLeftSelector, btnRightSelector, containerSelector) {
        const container = document.querySelector(containerSelector);
        const leftBtn = document.querySelector(btnLeftSelector);
        const rightBtn = document.querySelector(btnRightSelector);
        if (!container || !leftBtn || !rightBtn) return;

        leftBtn.addEventListener('click', () => {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    setupScroll('.scroll-btn.left', '.scroll-btn.right', '.before-after');
    setupScroll('.cert-left', '.cert-right', '.certificates');
    setupScroll('.review-left', '.review-right', '.reviews');
    // Новые кнопки для сертификатов и до/после
    setupScroll('.beforeafter-left', '.beforeafter-right', '.before-after');
    setupScroll('.certificates-left', '.certificates-right', '.certificates');

    // Медиа-попап (картинки и видео)
    const mediaPopup = document.getElementById('media-popup');
    const popupImg = mediaPopup?.querySelector('#popup-img');
    const popupVideo = mediaPopup?.querySelector('#popup-video');

    document.querySelectorAll('.certificates img, .reviews img, .reviews video, .before-after img').forEach(el => {
        el.addEventListener('click', () => {
            if (!mediaPopup) return;
            mediaPopup.style.display = 'flex';

            if (el.tagName === 'IMG') {
                if (popupImg) {
                    popupImg.src = el.src;
                    popupImg.style.display = 'block';
                }
                if (popupVideo) popupVideo.style.display = 'none';
            } else if (el.tagName === 'VIDEO') {
                if (popupVideo) {
                    popupVideo.src = el.src;
                    popupVideo.style.display = 'block';
                }
                if (popupImg) popupImg.style.display = 'none';
            }
        });
    });

    // Главная фотогалерея
    const photos = [
        "trainer2.jpg",
        "trainer1.jpg",
        "trainer3.jpg",
        "trainer4.jpg"
    ];
    let currentIndex = 0;
    const mainPhoto = document.getElementById("main-photo");
    const mainLeft = document.querySelector(".main-left");
    const mainRight = document.querySelector(".main-right");

    mainLeft?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        if (mainPhoto) mainPhoto.src = photos[currentIndex];
    });

    mainRight?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % photos.length;
        if (mainPhoto) mainPhoto.src = photos[currentIndex];
    });

    // Модальное окно для картинок сертификатов и отзывов
    document.querySelectorAll('.certificates img, .reviews img, .before-after img').forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            if (modal && modalImg) {
                modal.style.display = "flex";
                modalImg.src = img.src;
            }
        });
    });

    // Анимация появления секций при прокрутке
    function onScrollAnimate() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', onScrollAnimate);
    onScrollAnimate(); // для появления при загрузке

    // Фиксированная кнопка и модальное окно заявки
    const openSignupBtn = document.getElementById('open-signup-modal');
    const signupModal = document.getElementById('signup-modal');
    const closeSignupBtn = document.querySelector('.close-signup-modal');
    const signupForm = document.getElementById('signup-form');
    const signupSuccess = document.querySelector('.signup-success');

    if (openSignupBtn && signupModal) {
        openSignupBtn.addEventListener('click', () => {
            signupModal.classList.add('open');
        });
    }
    if (closeSignupBtn && signupModal) {
        closeSignupBtn.addEventListener('click', () => {
            signupModal.classList.remove('open');
        });
    }
    if (signupModal) {
        signupModal.addEventListener('click', e => {
            if (e.target === signupModal) {
                signupModal.classList.remove('open');
            }
        });
    }
    if (signupForm && signupSuccess) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            window.open('https://t.me/lyatskaya', '_blank');
            signupModal.classList.remove('open');
            signupForm.reset();
        });
    }

    // Открытие попапа расписания
    const openScheduleBtn = document.getElementById('open-schedule-popup');
    const schedulePopup = document.getElementById('schedule-popup');
    if (openScheduleBtn && schedulePopup) {
        openScheduleBtn.addEventListener('click', () => {
            schedulePopup.style.display = 'flex';
        });
    }

    // FAQ-аккордеон
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');
            // Закрыть все
            document.querySelectorAll('.faq-item.open').forEach(openItem => {
                openItem.classList.remove('open');
            });
            // Открыть только если не был открыт
            if (!wasOpen) {
                item.classList.add('open');
            }
        });
    });

    // Дублирование картинки в попапе, если не помещается
    function duplicatePopupImageIfNeeded(popup) {
        const content = popup.querySelector('.popup-content');
        if (!content) return;
        // Удалить старый дубликат, если есть
        const oldClone = content.querySelector('.popup-img-clone');
        if (oldClone) oldClone.remove();
        // Найти первую картинку
        const img = content.querySelector('img');
        if (!img) return;
        // Проверить, скроллится ли контент
        if (content.scrollHeight > content.clientHeight) {
            const clone = img.cloneNode(true);
            clone.classList.add('popup-img-clone');
            clone.style.marginTop = '24px';
            clone.style.maxWidth = '100%';
            clone.style.borderRadius = '12px';
            content.appendChild(clone);
        }
    }

    // Хук на открытие попапа
    document.querySelectorAll('.btn[data-popup]').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = btn.getAttribute('data-popup');
            const popup = document.getElementById(id);
            if (popup) {
                setTimeout(() => duplicatePopupImageIfNeeded(popup), 100); // после появления
            }
        });
    });
    // Удалять дубликат при закрытии попапа
    document.querySelectorAll('.popup .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const popup = closeBtn.closest('.popup');
            if (popup) {
                const content = popup.querySelector('.popup-content');
                if (content) {
                    const oldClone = content.querySelector('.popup-img-clone');
                    if (oldClone) oldClone.remove();
                }
            }
        });
    });
}); 