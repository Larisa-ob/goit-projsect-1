import studentItems from './students-item';
const refs = {
    studentsItem: document.querySelector('.open-modal'),
    gallery: document.querySelector('.js-students'),
    modalInput: document.querySelector('.lightbox'),
    backdropRef: document.querySelector('.lightbox__overlay'),
    largeImage: document.querySelector("img[class='lightbox__image']"),
    backmodal: document.querySelector('.lightbox__button'),
};
refs.studentsItem.addEventListener('click', onGoITstudentClick);
const arrayStudent = [...studentItems];

function onGoITstudentClick(event) {
    event.preventDefault();
    refs.backmodal.addEventListener('click', onBackModalClick);
    refs.backdropRef.addEventListener('click', onBackModalClick);
    window.addEventListener('keydown', onPressEscape);
    /*Создаем галлерею студентов*/
    const elementGalleryRef = arrayStudent =>
        arrayStudent.forEach(element => {
            /* создаем img класса gallery__image */
            const img = document.createElement('img');
            img.classList.add('gallery__image');
            img.src = element.foto;
            img.setAttribute('data-source', element.original);
            img.alt = element.fullname;
            /*  создаем ссылку А класса  gallery__link*/
            const link = document.createElement('a');
            link.classList.add('gallery__link');
            link.href = element.original;
            link.appendChild(img);
            /* создаем єлемент li    */
            const list = document.createElement('li');
            list.classList.add('gallery__item');
            list.appendChild(link);
            refs.gallery.append(list);
        });
    elementGalleryRef(arrayStudent);

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const imageRef = event.target;
    const largeImageURL = imageRef.dataset.source;
    setLargeImageSrc(largeImageURL);

    /*добавляем класс на div[class=lightbox*/
    const modalOn = refs.modalInput;
    modalOn.classList.add('is-open');
}

function onCloseModal() {
    window.removeEventListener('keydown', onPressEscape);
    refs.backmodal.removeEventListener('click', onBackModalClick);
    refs.backdropRef.removeEventListener('click', onBackModalClick);
    refs.modalInput.classList.remove('is-open');
    getLargeImageSrc();
}

/* Функция 'клика на кнопку закрытия или оверлей*/
function onBackModalClick(event) {
    if (event.target === event.currentTarget) {
        onCloseModal();
    }
}
/* Функция нажатия ESC*/
function onPressEscape(event) {
    if (event.code === 'Escape') {
        onCloseModal();
    }
}
