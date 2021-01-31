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

/*Создаем галлерею студентов*/
const elementGalleryStudents = arrayStudent =>
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
function onGoITstudentClick(event) {
  event.preventDefault();
  /* Создаем заголовок и вставим его в container перед списком*/
  const heading = document.createElement('h1');
  heading.textContent = 'Наша команда';
  heading.classList.add('section-title2');
  refs.gallery.before(heading);

  refs.backdropRef.addEventListener('click', onBackModalClick);
  window.addEventListener('keydown', onPressEscape);
  elementGalleryStudents(arrayStudent);
  /*добавляем класс на div[class=lightbox*/
  const modalOn = refs.modalInput;
  modalOn.classList.add('is-open');
  document.getElementById('modal_students').reset();
}

function onCloseModal(event) {
  console.log(event.target.children[1]);
  window.removeEventListener('keydown', onPressEscape);
  refs.backmodal.removeEventListener('click', onBackModalClick);
  refs.backdropRef.removeEventListener('click', onBackModalClick);
  refs.modalInput.classList.remove('is-open');
  document.getElementById('modal_students').reset();
}
/* Функция 'клика на кнопку закрытия или оверлей*/
function onBackModalClick(event) {
  if (event.target === event.currentTarget) {
    console.log(event.target);
    onCloseModal();
  }
}
/* Функция нажатия ESC*/
function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal(event);
  }
}
