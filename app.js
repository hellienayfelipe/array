// console.dir(clientes)
// console.log(clientes[2])
// clientes[3] = "Bartolomeu"
// console.dir(clientes)
// clientes.push("Enzo")
// console.dir(clientes)

let clientesNome = new Array()
clientesNome.push("Cleber")
clientesNome.push("Breno")
clientesNome.push("Julia")
clientesNome.push("Joao")
clientesNome.push("Pedro")
console.dir(clientesNome)

document.getElementById("conteudo").innerHTML = "<ul>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNome[0] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNome[1] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNome[2] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNome[3] + "</li>"
document.getElementById("conteudo").innerHTML += "<li>" + clientesNome[4] + "</li>"
document.getElementById("conteudo").innerHTML += "</ul>"
