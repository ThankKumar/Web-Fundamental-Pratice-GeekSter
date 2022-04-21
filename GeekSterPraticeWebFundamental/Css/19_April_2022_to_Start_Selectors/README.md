## -->> 1.Tag Selector
###### -->> Tag selector is nothing but selecting html element.
##### -->> Example:- div{
#####    background-color:red;
##### }

## -->> 2. Id Selector
###### -->> Id Slector(Unique Selector), using #Id_name
##### < id="div" >---------< / div >
##### -->> Example:- #div{
#####    background-color:blue;
##### }
## -->>3.Class Selector
##### < div class="div" >---------< / div >
###### -->> using .Class_Name
##### -->> Example:- .div{
#####    background-color:blue;
##### }
## -->>4.Attribute Selector
##### < input type=" text "> >---------< / input>
###### -->> Direct select attribute
##### -->> Example:- text{
#####    background-color:blue;
##### }
## -->>5.Psudo Selector
###### -->> select child by child, first-child, last-child, nth-child(number like 2 li=2, odd,even)
##### < ul >
#####      < li >HTML< /li > (first-child)
#####      < li >css< /li >
#####      < li >js< /li >
#####      < li >react< /li > (last-child)
#####  </ ul> 
###### -->> 
##### -->> Example:- li:first-child{
#####    background-color:blue;
##### }
##### -->> Example:- li:last-child{
#####    background-color:green;
##### }
##### -->> Example:- li:nth-child(2){
#####    background-color:green;
##### }

## -->>** hover **
###### -->> Curson placed in like button animation show.
##### -->> Example:- button:hover{
#####  background-color:green;
##### }