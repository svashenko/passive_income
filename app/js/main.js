countdown('09/30/2021 00:00:00 AM');

function countdown(dateEnd) {
  let timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd);
  dateEnd = dateEnd.getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    let dateStart = new Date();
    dateStart = new Date(dateStart.getUTCFullYear(),
      dateStart.getUTCMonth(),
      dateStart.getUTCDate(),
      dateStart.getUTCHours(),
      dateStart.getUTCMinutes(),
      dateStart.getUTCSeconds());
    let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      seconds = parseInt(timeRemaining);

      document.querySelector('#days').innerHTML = parseInt(days, 10);
      document.querySelector('#hours').innerHTML = ('0' + hours).slice(-2);
      document.querySelector('#minutes').innerHTML = ('0' + minutes).slice(-2);
      document.querySelector('#seconds').innerHTML = ('0' + seconds).slice(-2);
    } else {
      return;
    }
  }
}

document.querySelector('.header__form__phone').oninput = function () {
  this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
};

document.querySelector('.footer__form__phone').oninput = function () {
  this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
};