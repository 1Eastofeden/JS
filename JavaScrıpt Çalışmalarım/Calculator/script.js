
// Hesap makinesinin ekranındaki değeri tutmak için bir değişken oluşturuyoruz.
let displayValue = "";

// Ekranı güncellemek için kullanacağımız işlev.
function updateDisplay() {
    document.getElementById("CalculateInput").value = displayValue;
}

// Sayı ve operatörleri ekrana eklemek için kullanacağımız işlev.
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

// Hesaplamayı gerçekleştirmek ve sonucu ekrana yazdırmak için kullanacağımız işlev.
function calculateResult() {
    try {
        const result = eval(displayValue); // eval fonksiyonu string ifadeyi matematiksel ifadeye dönüştürür.
        displayValue = result.toString(); // Sonucu stringe dönüştürüp ekrana yazdırıyoruz.
        updateDisplay();
    } catch (error) {
        displayValue = "Hata"; // Hesaplama hatası durumunda "Hata" mesajını ekrana yazdırıyoruz.
        updateDisplay();
    }
}

// Sayı düğmelerinin tıklanma olaylarına işlevleri bağlıyoruz.
document.getElementById("one").addEventListener("click", function() { appendToDisplay('1'); });
document.getElementById("two").addEventListener("click", function() { appendToDisplay('2'); });
document.getElementById("three").addEventListener("click", function() { appendToDisplay('3'); });
document.getElementById("four").addEventListener("click", function() { appendToDisplay('4'); });
document.getElementById("five").addEventListener("click", function() { appendToDisplay('5'); });
document.getElementById("six").addEventListener("click", function() { appendToDisplay('6'); });
document.getElementById("seven").addEventListener("click", function() { appendToDisplay('7'); });
document.getElementById("eight").addEventListener("click", function() { appendToDisplay('8'); });
document.getElementById("nine").addEventListener("click", function() { appendToDisplay('9'); });
document.getElementById("zero").addEventListener("click", function() { appendToDisplay('0'); });

// Operatör düğmelerinin tıklanma olaylarına işlevleri bağlıyoruz.
document.getElementById("gather").addEventListener("click", function() { appendToDisplay('+'); });
document.getElementById("interest").addEventListener("click", function() { appendToDisplay('-'); });
document.getElementById("multiply").addEventListener("click", function() { appendToDisplay('*'); });
document.getElementById("plenty").addEventListener("click", function() { appendToDisplay('/'); });

// Hesapla düğmesinin tıklanma olayına işlevi bağlıyoruz.
document.getElementById("calculateprocess").addEventListener("click", function() { calculateResult(); });

// Temizle düğmesinin tıklanma olayına işlevi bağlıyoruz.
document.getElementById("clear").addEventListener("click", function() { clearDisplay(); });

// Ekranı temizlemek için kullanacağımız işlev.
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}
