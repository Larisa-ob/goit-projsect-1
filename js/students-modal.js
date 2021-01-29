import studentItems from './students-item.js';

const refs = {
    openStudentsModal: document.querySelector('.open-modal-develop'),
    containerStudents: document.querySelector('.container_students'),
    galleryItem: document.querySelector('.gallery__item_students'),
    gallery: document.querySelector('.js-gallery-students'),
    modalInput: document.querySelector('.lightbox_students'),
    backdropRef: document.querySelector('.lightbox_students__overlay'),
    largeImage: document.querySelector("img[class='lightbox_students__image']"),
};
refs.openStudentsModal.addEventListener('click', onGoITstudentClick);
const arrayStudent = [...studentItems];

// Создаем заголовок и вставим его в container перед списком
const heading = document.createElement('h1');
heading.textContent = 'Наша команда';
heading.classList.add('section-title2');
refs.gallery.before(heading);

/*Создаем галлерею студентов*/
const elementGalleryRef = arrayStudent =>
    arrayStudent.forEach(element => {
        const nameStudents = document.createElement('h3');
        nameStudents.classList.add('section-title-comand');
        nameStudents.textContent = element.fullname;
        /* создаем img класса gallery__image */
        const img = document.createElement('img');
        img.classList.add('gallery_students__image');
        img.src = element.foto;
        refs.gallery.append(img);
        /* создаем єлемент li   */
        const student = document.createElement('li');
        student.classList.add('gallery__item_students');
        student.appendChild(img);
        student.appendChild(nameStudents);
        refs.gallery.append(student);
    });
elementGalleryRef(arrayStudent);

function onGoITstudentClick(event) {
    event.preventDefault();
    refs.backdropRef.addEventListener('click', onBackModalClick);
    window.addEventListener('keydown', onPressEscape);

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
}
function getLargeImageSrc() {
    const refmodal = refs.largeImage;
    refmodal.src = '';
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
