export default function initOperating() {
  const operating = document.querySelector('[data-week]')
  const weekDays = operating.dataset.week.split(',').map(Number)
  const dayTime = operating.dataset.time.split(',').map(Number)

  const dateNow = new Date()
  const dayNow = dateNow.getDay()
  const timeNow = dateNow.getUTCHours() - 3

  const weekOpened = weekDays.indexOf(dayNow) !== -1
  const timeOpened = (timeNow >= dayTime[0] && timeNow < dayTime[1])

  if(weekOpened && timeOpened) {
    operating.classList.add('opened')
  }
}