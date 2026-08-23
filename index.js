function simpleinterest(){
    const principalref=document.querySelector("#priamount")
    const principalamount=Number(principalref.value)
    const interestref=document.querySelector("#interestrate")
    const interestrate=Number(interestref.value)
    const timeref=document.querySelector("#year")
    const time=Number(timeref.value)
    const divref=document.querySelector("#totalinterest")
    const interest=(principalamount*interestrate*time)/100
    divref.innerHTML="your total interst is :"+interest

}