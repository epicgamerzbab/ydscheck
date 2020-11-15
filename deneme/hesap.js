var baraj = false
var harf = ""
const dogru = 80 // dogrular

if (dogru > 80){
    console.log('CANT ACCEPT IT')
}
else{
 
    if (dogru == 80){
        var sonuc = 100
    }
    else{
        var sonuc = dogru * 1.250
    }

}

if (sonuc>90){
    harf = "A"
}
else if (sonuc>=80){
    harf = "B"
}
else if (sonuc >= 70){
    harf = "C"
}
if (sonuc < 65){
    baraj = false
}
else{
    baraj = true
}

console.log(`Puan : ${sonuc}, Harf Puan : ${harf}, Baraji Gectimi : ${baraj}`)