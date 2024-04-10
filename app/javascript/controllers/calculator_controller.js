import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }

  plus() {
    const screenElement = this.element.querySelector('calculator-screen')
    screenElement.innerHTML += 'hello'
  }

  print_1() {
    const screenElement = this.element.querySelector('calculator-screen')
    screenElement.innerHTML += '1'

  }

}