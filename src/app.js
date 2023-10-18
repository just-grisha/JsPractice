
import { isValid} from './utils'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')
console.log("!")

form.addEventListener('submit',submitFormHandler)


function submitFormHandler(event){
    event.preventDefault()
    console.log(input.value)
    if (isValid(input.value)){
        const question= {
            text: input.value.trim,
            date: new Date().toJSON()
        }
        sumbitBtn.disabled = true
        // async request to server to save question
        console.log('question',question)
        
        input.value = ''

    }
}

console.log("!")    