export default class StoreOperation {
  constructor(storeOperation, activeClass) {
    this.storeOperation = document.querySelector(storeOperation)
    this.activeClass = activeClass
  }

  dataStoreOperation() {
    this.weekDays = this.storeOperation.dataset.week.split(',').map(Number)
    this.dayTime = this.storeOperation.dataset.time.split(',').map(Number)
  }

  dataNow() {
    this.dateNow = new Date()
    this.dayNow = this.dateNow.getDay()
    this.timeNow = this.dateNow.getUTCHours() - 3
  }

  itsOpen() {
    const weekOpened = this.weekDays.indexOf(this.dayNow) !== -1
    const timeOpened = (this.timeNow >= this.dayTime[0]
      && this.timeNow < this.dayTime[1])
    return weekOpened && timeOpened
  }

  activateOpen() {
    if (this.itsOpen()) {
      this.storeOperation.classList.add(this.activeClass)
    }
  }

  init() {
    if (this.storeOperation) {
      this.dataStoreOperation()
      this.dataNow()
      this.activateOpen()
    }
    return this
  }
}
