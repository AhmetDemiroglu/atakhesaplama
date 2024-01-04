let toggler = document.getElementsByClassName("toggler");   

        for (let i = 0; i < toggler.length; i++){
            toggler[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let sosyalmedya = this.nextElementSibling;
                if(sosyalmedya.style.maxHeight){
                    sosyalmedya.style.maxHeight = null;
                    sosyalmedya.style.border = null;
                }
                else {
                    sosyalmedya.style.maxHeight = sosyalmedya.scrollHeight+ "px";
                    sosyalmedya.style.border = "2px darkgrey solid";
                    sosyalmedya.style.borderRadius = "10px";
                }
            })
        }

// ----------------

let tarih1 = new Date();

let bDate = document.getElementById("tarih")
let btn = document.getElementById("btn")

btn.addEventListener("click", function() {
let tarih2 = new Date(bDate.value);
let zamanFark = (tarih1.getTime() - tarih2.getTime());
let saatFark = Math.ceil(zamanFark / (1000 * 3600))
let gunFark = Math.ceil(zamanFark / (1000 * 3600 * 24)); 
let haftaFark = (gunFark / 7).toFixed(2);

while (haftaFark>0) {
    sonuc1.innerHTML =`Bebeğinizin doğduğu günden bugüne kadar <b> ${gunFark} gün </b> ve <b> ${haftaFark} hafta </b> geçmiş.`;
    break;
}

    if (haftaFark>=4.5 && haftaFark<=5.5) {
        sonuc2a.innerHTML = "Değişen Duyular Dünyası";
        sonuc2.innerHTML = "Yaklaşık bir hafta sürecek olan bu sıçrama bebeğinizin ilk büyüme atağı haftası olacak. Bu haftada bebeğinizde huzursuzluk ve sık ağlama gibi durumlarla karşılaşabilirsiniz. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (924-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/degisen.jpg";

    }

    else if (haftaFark>=7.5 && haftaFark<=9.5) {
        sonuc2a.innerHTML = "Oluşumlar Dünyası";
        sonuc2.innerHTML = "Bebeğinizin ikinci atak haftası yaklaşık 2 hafta sürebilir. Bebeğiniz bu dönemde uzun süre emmek, hep kucakta kalmak isteyebilir ve sebepsiz ağlamaları olabilir. Bu atak haftası ilk atak haftasına göre biraz daha uzun sürebilir ama merak etmeyin bu hafta da geçecek! <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (1596-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/3aylik.jpg";

    }

    else if (haftaFark>=11.5 && haftaFark<=12.5) {
        sonuc2a.innerHTML = "Yumuşak Geçişler";
        sonuc2.innerHTML = "Dünyası Bebeğiniz bu dönemde çok kolay uyanmaya ve zor uyumaya başlarken sebepsiz ağlamalar tekrar ortaya çıkar ve yaklaşık 1 hafta sürer. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (2100-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/4aylik.webp";
    }

    else if (haftaFark>=14.5 && haftaFark<=19.5) {
        sonuc2a.innerHTML = "Olaylar Dünyası";
        sonuc2.innerHTML = "Dördüncü sıçrama dönemi yaklaşık 2 hafta sürebilir. Bu dönemde bebeğiniz gece daha sık uyanıp tekrar uykuya dalmakta güçlük çekebilirler. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (3276-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/5aylik.jpg";
    }

    else if (haftaFark>=22.5 && haftaFark<=26.5) {
        sonuc2a.innerHTML = "İlişkiler Dünyası";
        sonuc2.innerHTML = "Beşinci büyüme atağı olan bu dönem de yaklaşık 1 hafta sürebilir. Bu dönemde de bebeğinizde huzursuzluk, iştahsızlık ve uyku sorunları gözlemleyebilirsiniz. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (4452-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/iliskiler.webp";
    }

    else if (haftaFark>=33.5 && haftaFark<=37.5) {
        sonuc2a.innerHTML = "Kategoriler Dünyası";
        sonuc2.innerHTML = "Anne-babaya düşkünlük, huzursuzluk, sebepsiz ağlamalar bu büyüme atağında da görülür ve bu dönem yaklaşık 3-4 hafta sürebilir. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (6300-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/oyunbebe.jpg";
    }

    else if (haftaFark>=41.5 && haftaFark<=46.5) {
        sonuc2a.innerHTML = "Zincirleme Olaylar Dünyası"
        sonuc2.innerHTML = "Her bebekte farklılık göstermekle birlikte yedinci büyüme atağı yaklaşık 41 haftalıkken başlar ve 44 haftalıkken zirve noktasına ulaşır. Bebekler 47 haftalık olduğunda ise yedinci büyüme atağı sona erebilir. Bu dönemde bebeklerde ağlama, huzursuzluk ve uyku düzensizliği gibi durumlar daha çok görülebilir. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (7812-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/12aylik.jpg";
    }

    else if (haftaFark>50.5 && haftaFark<=54.5) {
        sonuc2a.innerHTML = "Programlar Dünyası"
        sonuc2.innerHTML = "Bir yaşına giren bebeğiniz artık pek çok şeyi tek başına yapabiliyor ve bu çok heyecan verici değil mi? 8. Büyüme atağı olan bu dönem yaklaşık 51 haftalıkken başlayıp dört hafta sürebilir. Belirtileri arasında ağlama, huzursuzluk ve ebeveyne bağlanma durumu yer almaktadır. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (9156-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/13ay.webp";
    }

    else if (haftaFark>=59.50 && haftaFark<64.50) {
        sonuc2a.innerHTML = "İlkeler Dünyası"
        sonuc2.innerHTML = "Yaklaşık 15 aylık olan bebeklerin girdikleri bu atak haftası, 2 yaş yani çocukluk dönemi özelliklerinin de görülmeye başladığı bir süreçtir ve yaklaşık olarak 5 hafta sürebilir. Bu dönemde bebekler, zaman zaman sinirlenebilir, evet ve hayır kelimelerini kullanmaya başlayabilir, kendi tercihlerini daha belirgin şekilde ifade edebilirler. Ayrıca, kurallar konusunda pazarlık yapmaya başlayabilir ve istedikleri şeyleri kabul ettirmek için neler yapmaları gerektiğini öğrenebilirler. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (10836-saatFark) + " saat </b> kaldı.";
        sonucresim.src = "./assets/images/15aylik.jpg"
    }

    else if (haftaFark>=70.50 && haftaFark<=75.50) {
        sonuc2a.innerHTML = "Sistemler Dünyası"
        sonuc2.innerHTML = "Bebeğiniz artık son büyüme atağına girdi. Bu dönemde, daha önce edindikleri kabiliyetleri istedikleri doğrultuda kullanmayı ve davranışlarını seçebilmeyi öğrenen bebekler değişen koşullara göre davranışlarını belirleyebilir ve kendi davranışlarını seçebileceklerinin farkına varırlar. Ayrıca, bebeklerin algılarındaki “ben” ve “sen” ayrımı bu dönemde belirginleşir. Yaklaşık olarak 4 hafta sürebilen bu büyüme atağı döneminde bebeğiniz huzursuz, tedirgin ve iştahsız olabilir ama endişe etmeyiniz. Bu büyüme atağı da diğerleri gibi geçici. <br><br> Bu dönemin tamamlanması için yaklaşık olarak <b> " + (12684-saatFark) + " saat </b> kaldı."
        sonucresim.src = "./assets/images/12-18ay.png"
    }

    else if (haftaFark>75.50) {
        sonuc2.innerHTML = "<b> Tebrikler! </b> Atak dönemlerini tamamlamış görünüyorsunuz. <br><br> <em> Yaş sendromları ile tanıştınız mı? </em>";
        sonucresim.src = "./assets/images/sendrom.jpg";
    }

    else {
        sonuc2.innerHTML = "Bebeğiniz herhangi bir atak haftası içerisinde değil. <br><br> <em> Dişleri kontol ettiniz mi? </em>";
        sonuc1.innerHTML = "";
        sonuc2a.innerHTML = "";
        sonucresim.src = "./assets/images/disagrisi.jpg";
    }



while (haftaFark<=0) {
    sonuc1.innerHTML =`Bebeğinizin doğumuna <b> ${Math.abs(zamanFark / (1000 * 3600 * 24)).toFixed(0)} gün </b> kalmış.`;
    sonuc2.innerHTML = "";
    sonuc2a.innerHTML = "";
    sonucresim.src = "./assets/images/dogum-sirasinda.jpg";
    break;
}
})


