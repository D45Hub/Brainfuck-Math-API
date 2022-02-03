This code section is responsible for generating/printing the JSON result string with a placeholder for the calculation result which gets replaced later

>++++++++++ Set multiplication base (10)


Go through different character cells and multiplicate them with the multiplication base
(Multiplication base times number of pluses each cell/line in the loop)

[
>++++++++++++ 	10 times 12 = 120
>+++++++++++ 	10 times 11 = 110
>++++++++++ 	10 times 10 = 100
>++++++++++++ 	10 times 12 = 120
>++++++++++++ 	10 times 12 = 120
>+++++++++++ 	10 times 11 = 110
>++++++++++++ 	10 times 12 = 120
>++++++ 		10 times 6  = 60
>++++ 			10 times 4  = 40
>+++++++++++++ 	10 times 13 = 130
<<<<<<<<<<- Goes back to the beginning of the character cells
]


Smaller adaptations to the character cells which aren't doable with plain multiplication
These result in the final character ASCII values

>+++ 	120 plus 3 = 123 which results in "{"
>++++	110 plus 4 = 114 which results in "r"
>+		100 plus 3 = 101 which results in "e"
>-----	120 minus 5 = 115 which results in "s"
>---	120 minus 3 = 117 which results in "u"
>--		110 minus 2 = 108 which results in "l"
>----	120 minus 4 = 116 which results in "t"
>--		60  minus 2 = 58  which results in ":"
>-----	40  minus 5 = 35  which results in "#" (Later used for string replacement with calculation result)
>-----	130 minus 5 = 125 which results in "}"

<<<<<<<<<< Move back to the front of the character cells


Character printing

>. {
>. r
>. e
>. s
>. u
>. l
>. t
>. :
>. #
>. }
