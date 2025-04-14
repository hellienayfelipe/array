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

document.getElementById("conteudo").innerHTML = clientesNome[0] + " - "
document.getElementById("conteudo").innerHTML += clientesNome[1] + " - "
document.getElementById("conteudo").innerHTML += clientesNome[2] + ""