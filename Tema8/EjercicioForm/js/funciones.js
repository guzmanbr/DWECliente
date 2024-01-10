/*
1 Show the value and the text of the selected option.
2 Add an option: <option value="classic">Classic</option>.
3 Make it selected.
*/


// 1)
let opcion = generos.options[generos.selectedIndex];
alert( opcion.value );

// 2)
let nuevaOpcion = new Option("Classic", "classic");
generos.append(nuevaOpcion);

// 3)
nuevaOpcion.selected = true;