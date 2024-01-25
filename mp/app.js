var number = prompt("Enter the Number for Multilpicative Table :")
if (number > 0 && number <= 20) {

    for (let i = number; i <= 20; i++) {

        for (let j = 1; j <= 10; j++) {
            document.write(`${i} x ${j} = `, (i*j)+"<br>")
        }
        document.write("<br>"+"<hr>")
    }
}
else{
    alert("Your Number is out of range!!")
        
}