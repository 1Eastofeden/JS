let textDOM = document.querySelector("#text");
let valueDOM = document.querySelector("#value");
let downoladbuttonDOM = document.querySelector("#downoladbutton");

downoladbuttonDOM.addEventListener("click", function (event) {
  event.preventDefault();

  // Dosya adı
  const fileName = `text${valueDOM.value}`;

  // Dosya içeriği
  const fileContent = textDOM.value;

  // Dosyayı oluştur
  const file = new Blob([fileContent], {type: "text/plain"});

  // Dosyayı indir
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
