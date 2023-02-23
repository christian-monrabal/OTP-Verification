const inputs = document.querySelectorAll('.otp-card-inputs input')
const button =document.querySelectorAll('.otp-card button')

inputs.forEach(input => {
    let lastInputStatus = 0
    input.onkeyup = (e) => {
        const currentElement = e.target
        const nextElement = input.nextElementsSibling
        const prevElement = input.previousElementSibling

        if(prevElement && e.KeyCode === 8){
            if(lastInputStatus === 1){
                prevElement.value = ''
                prevElement.focus()
            }
            button.setAttribute('disabled', true)
            lastInputStatus = 1
        }else {
            const reg = /^[0-9]+$/
            if(!reg.test(currentElement.value)){
                currentElement.value = currentElement.value.replace(/D/g, '')
            }else if(currentElement.value){
                if(nextElement){
                    nextElement.focus()
                }else{
                    button.removeAttribute('disabled')
                    lastInputStatus = 0
                }
            }
        }
    }
})