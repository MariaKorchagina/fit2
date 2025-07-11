document.addEventListener('DOMContentLoaded', () => {
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
}); 