let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")
let inp3 = document.getElementById("inp3")
let inp4 = document.getElementById("inp4")
let inp5 = document.getElementById("inp5")
let inp6 = document.getElementById("inp6")
let inp7 = document.getElementById("inp7")
let inp8 = document.getElementById("inp8")
let inp9 = document.getElementById("inp9")
let inp10 = document.getElementById("inp10")
let inp11 = document.getElementById("inp11")
let inp12 = document.getElementById("inp12")
let inp13 = document.getElementById("inp13")
let inp14 = document.getElementById("inp14")
let inp15 = document.getElementById("inp15")
let inp16 = document.getElementById("inp16")
let inp17 = document.getElementById("inp17")
let inp18 = document.getElementById("inp18")


let btnGuardar = document.getElementById("btnGuardar")
let date = document.getElementById("date")
let audioGuardar = document.getElementById("audioGuardar")
let audioOpen = document.getElementById("audioOpen")
let image = document.getElementById("image")
let p = document.getElementById("p")


let turnos = []
let id;
let editando = false;
let filter = []

if(JSON.parse(localStorage.getItem("turnos"))){
   
    turnos = JSON.parse(localStorage.getItem("turnos"))
}else{
    localStorage.setItem("turnos", JSON.stringify(turnos))
    
}


let objTurno = {
    fecha: "",
    cancha: 1,
    hora15: "",
    hora16: "",
    hora17: "",
    hora18: "",
    hora19: "",
    hora20: "",
    hora21: "",
    hora22: "",
    hora23: "",
    hora152: "",
    hora162: "",
    hora172: "",
    hora182: "",
    hora192: "",
    hora202: "",
    hora212: "",
    hora222: "",
    hora232: ""
}


btnGuardar.addEventListener("click", function(){

    if(editando){
        objTurno = {
            fecha: date.value,
            cancha: 1,
            hora15: inp1.value,
            hora16: inp2.value,
            hora17: inp3.value,
            hora18: inp4.value,
            hora19: inp5.value,
            hora20: inp6.value,
            hora21: inp7.value,
            hora22: inp8.value,
            hora23: inp9.value,
            hora152: inp10.value,
            hora162: inp11.value,
            hora172: inp12.value,
            hora182: inp13.value,
            hora192: inp14.value,
            hora202: inp15.value,
            hora212: inp16.value,
            hora222: inp17.value,
            hora232: inp18.value
        }

        turnos.push(objTurno)
        localStorage.setItem("turnos", JSON.stringify(turnos))
        editando = false


    }

    objTurno = {
        fecha: date.value,
        cancha: 1,
        hora15: inp1.value,
        hora16: inp2.value,
        hora17: inp3.value,
        hora18: inp4.value,
        hora19: inp5.value,
        hora20: inp6.value,
        hora21: inp7.value,
        hora22: inp8.value,
        hora23: inp9.value,
        hora152: inp10.value,
         hora162: inp11.value,
         hora172: inp12.value,
         hora182: inp13.value,
         hora192: inp14.value,
        hora202: inp15.value,
        hora212: inp16.value,
         hora222: inp17.value,
         hora232: inp18.value
    }

   

        for(let i = 0; i < turnos.length; i++){

            if(turnos[i].fecha == date.value){

                turnos[i].hora15 = inp1.value
                turnos[i].hora16 = inp2.value
                turnos[i].hora17 = inp3.value
                turnos[i].hora18 = inp4.value
                turnos[i].hora19 = inp5.value
                turnos[i].hora20 = inp6.value
                turnos[i].hora21 = inp7.value
                turnos[i].hora22 = inp8.value
                turnos[i].hora23 = inp9.value
                turnos[i].hora152 = inp10.value
                turnos[i].hora162 = inp11.value
                turnos[i].hora172 = inp12.value
                turnos[i].hora182 = inp13.value
                turnos[i].hora192 = inp14.value
                turnos[i].hora202 = inp15.value
                turnos[i].hora212 = inp16.value
                turnos[i].hora222 = inp17.value
                turnos[i].hora232 = inp18.value

                localStorage.setItem("turnos", JSON.stringify(turnos))
               

            }
        }

        
        localStorage.setItem("turnos", JSON.stringify(turnos))

    

       if(turnos.length == 0){
       
        objTurno = {
            fecha: date.value,
            cancha: 1,
            hora15: inp1.value,
            hora16: inp2.value,
            hora17: inp3.value,
            hora18: inp4.value,
            hora19: inp5.value,
            hora20: inp6.value,
            hora21: inp7.value,
            hora22: inp8.value,
            hora23: inp9.value,
            hora152: inp10.value,
            hora162: inp11.value,
            hora172: inp12.value,
            hora182: inp13.value,
            hora192: inp14.value,
           hora202: inp15.value,
           hora212: inp16.value,
            hora222: inp17.value,
            hora232: inp18.value
        }

        turnos.push(objTurno)
        localStorage.setItem("turnos", JSON.stringify(turnos))
       

       }

       console.log(turnos)

       audioGuardar.play()

       consultar()

       label.textContent = "Guardado Exitoso!"

       setTimeout(()=>{
        mensaje()
       },2000);
       

        
})



function consultar(){
    audioOpen.play()
    limpiar()    

    filter = turnos.filter(turno => turno.fecha == date.value)

    if(filter.length > 0){

       inp1.value = filter[0].hora15
       inp2.value = filter[0].hora16
       inp3.value = filter[0].hora17
       inp4.value = filter[0].hora18
       inp5.value = filter[0].hora19
       inp6.value = filter[0].hora20
       inp7.value = filter[0].hora21
       inp8.value = filter[0].hora22
       inp9.value = filter[0].hora23
       inp10.value = filter[0].hora152
       inp11.value = filter[0].hora162
       inp12.value = filter[0].hora172
       inp13.value = filter[0].hora182
       inp14.value = filter[0].hora192
       inp15.value = filter[0].hora202
       inp16.value = filter[0].hora212
       inp17.value = filter[0].hora222
       inp18.value = filter[0].hora232
   
       

    }else{
       limpiar()
       console.log("No hay turnos agendados")
       editando = true

    }

    btnGuardar.style.opacity = 1
    btnGuardar.style.pointerEvents = "auto";
   

}


   


function limpiar(){
    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
    inp4.value = ""
    inp5.value = ""
    inp6.value = ""
    inp7.value = ""
    inp8.value = ""
    inp9.value = ""
    inp10.value = ""
    inp11.value = ""
    inp12.value = ""
    inp13.value = ""
    inp14.value = ""
    inp15.value = ""
    inp16.value = ""
    inp17.value = ""
    inp18.value = ""

    btnGuardar.style.opacity = 0
     btnGuardar.style.pointerEvents = "none";

    
     
}

function audio(){
    audioOpen.play()
}

function mensaje(){
    label.textContent = ""
}





