const actualizar = document.getElementById('reinicio');
const cuentaInput = document.getElementById('cuenta');
const propinaInput = document.getElementById('propina');
const peopleInput = document.getElementById('people');
const selecTip = document.querySelectorAll('.tip-option');
const error_cuenta = document.getElementById('error-cuenta');
const error_propina = document.getElementById('error-propina');
const error_people = document.getElementById('error-people');
const tip_amount = document.getElementById('tip-amount');
const total_amount = document.getElementById('total');
let cuenta = 0,
    propina = 0,
    people = 0,
    total = 0,
    propina_person = 0;


cuentaInput.addEventListener('keyup', (e) => {
    e.stopPropagation();
    cuenta = e.target.value;
    if (cuenta.length === 0) {
        error_cuenta.style.visibility = 'visible'
        cuentaInput.style.border = '2px solid rgb(219, 0, 0)'
    } else {
        error_cuenta.style.visibility = 'hidden'
        cuentaInput.style.border = '2px solid hsl(172, 67%, 45%)'
    }
    setPropina()
    setTotal()
        //tip_amount.innerHTML = `<p class="number" id="tip-amount">Q ${cuenta}</p>`
})


function addPropina(value) {
    propina = value
    propinaInput.value = propina
    error_propina.style.visibility = 'hidden'
    propinaInput.style.border = '2px solid hsl(172, 67%, 45%)'
    setPropina()
    setTotal()
}

propinaInput.addEventListener('keyup', (e) => {
    e.stopPropagation();
    propina = e.target.value;
    if (propina.length === 0) {
        error_propina.style.visibility = 'visible'
        propinaInput.style.border = '2px solid rgb(219, 0, 0)'
    } else {
        error_propina.style.visibility = 'hidden'
        propinaInput.style.border = '2px solid hsl(172, 67%, 45%)'
    }
    setPropina()
    setTotal()
})

peopleInput.addEventListener('keyup', (e) => {
    e.stopPropagation();
    people = e.target.value;
    if (people.length === 0) {
        error_people.style.visibility = 'visible'
        peopleInput.style.border = '2px solid rgb(219, 0, 0)'
    } else {
        error_people.style.visibility = 'hidden'
        peopleInput.style.border = '2px solid hsl(172, 67%, 45%)'
    }
    setPropina()
    setTotal()
})

function setPropina() {
    propina_person = cuenta * (propina / 100)
    propina_person = (propina_person / people)
    propina_person = roundToTwo(propina_person)
        // console.log(propina);
        // console.log(propina_person);
        // console.log('holamundo');
    if (propina_person > 0 && propina_person < 100000) {
        tip_amount.textContent = `Q${propina_person}`

    }
}

/*Función para poder actualizar el total */

function setTotal() {
    // console.log(propina_person);
    total = (cuenta / people) + propina_person
    total = roundToTwo(total)
        // console.log(total);
        /*Evaluación del valor total para poder mostrarlo */
    if (total > 0 && total < 10000) {
        total_amount.textContent = `Q${total}`
    }
}

/**Función para redondear los números  */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

/*Función para poder actualizar la página */

function Actualizar() {
    location.reload()
}