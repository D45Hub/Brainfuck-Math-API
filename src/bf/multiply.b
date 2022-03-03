Copies over the second multiplication value to the two neighbouring cells
The second cell gets left empty in this process
[->+>+<<]

< Moves back to the first multiplication value

Multiplication routine
[
->> Subtracts one from the first multiplication value
[-<+>] Adds the value from the first copied value to the second previously empty cell | This leaves the first copied cell empty
>  Moves to the second copied value
[-<+>>+<] Copies over the value of this cell to the left and right neighbouring cells and leaves the cell empty
> Moves to the right copied value
[-<+>] Moves the value of the right copied value to the previously emptied cell so it has the initial value back
<<<< Moves back to the first multiplication value cell | If it isn't finished by getting to the value of 0 the multiplication routine gets called again
]

Moves to the result and prints the final value of the multiplication
>.
