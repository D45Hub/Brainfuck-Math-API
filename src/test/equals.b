Checks equality between the numbers

[
->-< Subtracts one to the second cell one by one and also subtracts by one with the other cell in this step in sync
]

+> Adds one and moves

Resets any anomalies to zero so the second cell will be empty and the first cell only includes either one (both numbers are equal) or zero (both numbers aren't equal)
[
<->
[-] Resets to zero
] 


<

This section gets executed when the two values are equal
[

- Resets the cell which got used for the if/else check so this section doesn't trigger multiple times
 
 
>
++++++++++ Set multiplication base (10)

Go through different character cells and multiplicate them with the multiplication base
(Multiplication base times number of pluses each cell/line in the loop)
We only generate the unique characters of the word "success" and go back and forth to existing cells with the values for optimization

[
>++++++++++++ 10 times 12 = 120
>++++++++++++ 10 times 12 = 120
>++++++++++  10 times 10 = 100
>++++++++++  10 times 10 = 100
<<<<- Goes back to the beginning of the character cells
]

Smaller adaptations to the character cells which aren't doable with plain multiplication
These result in the final character ASCII values

>----- 120 minus 5 = 115 which results in "s"
>--- 120 minus 3 = 117 which results in "u"
>- 100 minus 1 = 99 which results in "c"
>+ 100 plus 1 = 101 which results in "e"

<<< Move back to the front of the character cells

. s
>. u
>.. cc (Print c twice)
>. e
<<<.. ss (Go back to the beginning and print s twice)

<-< Move back to the front and subtracts one to the cell so the next section doesn't get triggered again
]

>+ Sets a cell to one so the next section doesn't get triggered when the first section already got triggered


This section gets executed when the two values are not equal
[

- Resets the cell which got used for the if/else check so this section doesn't trigger multiple times

Responsible for printing the "fail" test result message

>
++++++++++ Set multiplication base (10)

Go through different character cells and multiplicate them with the multiplication base
(Multiplication base times number of pluses each cell/line in the loop)

[
>++++++++++ 10 times 11 = 110
>++++++++++ 10 times 10 = 100
>+++++++++++ 10 times 11 = 110
>+++++++++++ 10 times 11 = 110
<<<<- Goes back to the beginning of the character cells
]

Smaller adaptations to the character cells which aren't doable with plain multiplication
These result in the final character ASCII values

>++ 100 plus 2 = 102 which results in "f"
>--- 100 minus 3 = 97 which results in "a"
>----- 110 minus 5 = 105 which results in "i"
>-- 110 minus 2 = 108 which results in "l"

<<< Move back to the front of the character cells

Character printing

. f
>. a
>. i
>. l

<<<<< Move back to the front

]