This section is responsible for printing the "Addition Test" message in front of the addition test status results
We only generate the unique characters of this message and go back and forth to existing cells with the values for optimization

>
++++++++++ Set multiplication base (10)

Go through different character cells and multiplicate them with the multiplication base
(Multiplication base times number of pluses each cell/line in the loop)

[
>+++++ 10 times 5 = 50
>+++++++ 10 times 7 = 70
>++++++++++ 10 times 10 = 100
>+++++++++++ 10 times 11 = 110
>++++++++++++ 10 times 12 = 120
>+++++++++++ 10 times 11 = 110
>+++++++++++ 10 times 11 = 110
>++++++++ 10 times 8 = 80
>++++++++++ 10 times 10 = 100
>++++++++++++ 10 times 12 = 120
<<<<<<<<<<- Goes back to the beginning of the character cells
]


Smaller adaptations to the character cells which aren't doable with plain multiplication
These result in the final character ASCII values

>----- 50 minus 5 = 45 which results in a dash
>----- 70 minus 5 = 65 which results in "A"
> The ASCII value of "d" is already correct so we don't make any adaptations
>----- 110 minus 5 = 105 which results in "i"
>---- 120 minus 4 = 116 which results in "t"
>+ 110 plus 1 = 111 which results in "o"
> The ASCII value of "n" is already correct so we don't make any adaptations
>++++ 80 plus 4 = 84 which results in "T"
>+ 100 plus 1 = 101 which results in "e"
>----- 120 minus 5 = 115 which results in "s"

<<<<<<<<<< Move back to the front of the character cells

Character printing

>.. Dash Dash (Prints dash twice)
>. A
>.. dd (Prints d twice)
>. i
>. t
<. i (Goes back to the i cell value and print it)
>>. o
>. n
<<<<<<. Dash (Goes back to the dash cell value and print it)
>>>>>>>. T
>. e
>. s
<<<<<. t (Goes back to the t cell value and print it)
<<<<.. Dash Dash (Goes back to the dash cell value and print it twice)