function insert (number) {
    var calc = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = number + calc
}

function clean () {
    document.getElementById("result").innerHTML = ""
}

function back () {
    var result = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = result.substring(0, result.length -1)
}

function calculator () {
    var result = document.getElementById("result").innerHTML
    if(result) {
        document.getElementById("result").innerHTML = eval(result)
    } else {
        document.getElementById("result").innerHTML = "nada não"
    }
}