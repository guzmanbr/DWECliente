//Splice

let a = ['Lunes', 'Martes', 2, 4, 6]
let borrado = a.splice(1, 3) // ahora a = ['Lunes', 6] y borrado = ['Martes', 2, 4]
a = ['Lunes', 'Martes', 2, 4, 6]
borrado = a.splice(1, 0, 45, 56) // ahora a = ['Lunes', 45, 56, 'Martes', 2, 4, 6] y borrado = []
a = ['Lunes', 'Martes', 2, 4, 6]
borrado = a.splice(1, 3, 45, 56) // ahora a = ['Lunes', 45, 56, 6] y borrado = ['Martes', 2, 4]



//Slice

let b = ['Lunes', 'Martes', 2, 4, 6]
let subArray = b.slice(1, 3) // ahora a=['Lunes', 'Martes', 2, 4, 6] y subArray=['Martes', 2, 4]

let c = [2, 4, 6]
let copiaDeA = c.slice() // ahora ambos arrays contienen lo mismo pero son diferentes arrays
