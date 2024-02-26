import React from 'react'
import FaqElement from './FaqElement'
import '../styles/globals.css';


const App = () => {
    const faqs = [
   {id:1, 
   question:"ÖSYM Aday İşlemleri Sistemi (AİS) şifresi olmayan adaylar, bireysel olarak elektronik ortamda 2024-YKS’ye başvuru yapabilirler mi?",
   answer:"Evet, yapabilirler. Fotoğraflı Türkiye Cumhuriyeti Kimlik Kartı edinmiş olan adaylar (MEB e-Okul sisteminde geçerli eğitim bilgisi bulunması kaydıyla), e-Devlet şifreleriyle ÖSYM Aday İşlemleri Sistemine (AİS) giriş yapabilir ve “e-Devlet İle Kayıt Ol” butonu vasıtasıyla ÖSYM Aday İşlemleri Sistemine kayıt olabilirler. “e-Devlet İle Kayıt Ol” butonu vasıtasıyla ÖSYM Aday İşlemleri Sistemine kayıt olduktan sonra AİS şifresi olmaksızın bireysel olarak elektronik ortamda sınava başvurularını yapabilirler." },
   {id:2, 
    question:"ÖSYM Başvuru Merkezlerine gitmeden 2024-YKS’ye başvuru yapmak mümkün mü?", 
    answer:"Fotoğraflı Türkiye Cumhuriyeti Kimlik Kartı ve e-Devlet şifresi olan adaylar, başvuru merkezlerine gitmeden ÖSYM Aday İşlemleri Sistemine (AİS) kendileri çevrimiçi kayıt yaptırabilir ve sınavlara başvurularını bireysel olarak elektronik ortamda gerçekleştirebilirler."},
   {id:3,
   question:"ÖSYM Aday İşlemleri Sisteminde (AİS) güncel fotoğrafı olmayan adaylar 2024-YKS’ye başvuru yapabilirler mi?",
   answer:"Fotoğraflı Türkiye Cumhuriyeti Kimlik Kartı olan adaylar, ÖSYM Aday İşlemleri Sistemindeki (AİS) güncel olmayan fotoğraflarını “Fotoğraf Bilgilerim” bölümündeki “T.C. Kimlik Kartı Fotoğrafımı Kullan” butonundan güncelleyerek başvuru merkezlerine gitmeksizin başvuru yapabilirler."},
   {id:4,
   question:"ÖSYM Mobil uygulamasından 2024-YKS başvurusu yapılabilir mi?",
   answer:"Adaylar, ÖSYM Aday İşlemleri Sistemi (AİS) mobil uygulaması üzerinden sınav başvurularını gerçekleştirebilirler."},

    ];
return (
    <div className="container">
            <h1 className="title">ÖSYM Sıkça Sorulan Sorular?</h1>
            {faqs.map((faq) => (
                <FaqElement key={faq.id} id={faq.id} question={faq.question} answer={faq.answer}/>
            ))}
        </div>
    );
};


   
   export default App