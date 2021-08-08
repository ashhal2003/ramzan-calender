var names = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
var SehriTime = ["4:51 Am" , "4:50 Am" , "4:49 Am" , "4:48 Am" , "4:47 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" ,  "4:46 Am" , "4:45 Am" , "4:45 Am" , "4:45 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:46 Am" , "4:45 Am" , "4:45 Am" , "4:45 Am" , "4:45 Am" , "4:44 Am" , "4:44 Am" , "4:44 Am" , "4:44 Am" ]
var IftarTime = [ "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:55 PM" ,  "6:56 PM" ,  "6:56 PM" ,  "6:56 PM" ,  "6:56 PM" ,  "6:57 PM" , "6:57 PM" ,  "6:57 PM" ,  "6:58 PM" ,  "6:58 PM" ,  "6:58 PM" , "6:58 PM" , "6:59 PM" ,  "6:59 PM" ,  "6:59 PM" ,  "6:59 PM" ,  "6:59 PM" , "7:00 PM" ,  "7:00 PM" ,  "7:00 PM" , "7:00 PM" ,  "7:05PM" ,  "7:07 PM" ,  ]

var roza = +prompt("enter your roza");

document.write("roza number " + roza +  " sehri time is: " + SehriTime[roza - 1]  +   "  iftar time is: " + IftarTime[roza + 1])