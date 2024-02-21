let yesButton = document.getElementById("yesButton")
let noButton = document.getElementById("noButton")
let popUp = document.getElementById("popup")
popUp.style.display = 'none'

yesButton.addEventListener("click",()=>{
    popUp.style.display = "block";
})

popUp.addEventListener("click",()=>{
    popUp.style.display = "none"
})


noButton.addEventListener("mouseover",()=>{
    noButton.style.position = "absolute"
    noButton.style.top = Math.random()*70 + "vh";
    noButton.style.left = Math.random()*70 + "vw";

})

function propose(){
    const NumBer=Math.floor(Math.random()*18);
    console.log(NumBer);
    const randomShayari=shayari[NumBer];
    shayariDisplay.textContent = randomShayari;
 }

const shayari =[
    "इज़हार नहीं करना आता हमें प्यार का डरते है दिल ना दुःख जाये कही यार का।",
     "थम सी जाती हैं उस पल धड़कनें जन उनकी झुकी पलकें मोहब्बत का इजहार करती हैं!",
     "प्यार का इजहार कर देन ,वरना एक खामोशी जिंदगी भर का इंतजार बन जाती है!",
     "हमसफ़र बनकर हमदम मेरे साथ चल दो ना, कब तक तड़पाओगे तुम मुझे, तुम्हे भी हमसे प्यार है कह दो ना।",
     "फिज़ा में महकती शाम हो तुम,प्यार में झलकता ज़ाम हो तुम,सीने में छुपाये फिरते है हम तुम्हारी यादें, इसलिये मेरी जिंदगी का दूसरा नाम हो तुम।",
     "दिल करता हैं ज़िन्दगी दे दू तुझे,ज़िन्दगी की सारी खुशियाँ दे दू तुझे, दे अगर तू मुझपे भरोसा अपने साथ का,तो यकीन मनो अपनी सांसे भी दे दू तुझे।",
     "इज़हार नहीं करना आता हमें प्यार  का, डरते है दिल ना दुःख जाये प्यार का।",
     "तेरी खुशियों को सजाना चाहता हूं, तुझे देख कर मुस्कुराना चाहता हूं, मेरी जिंदगी में क्या अहमियत है तेरी,  यह लफ्जों में नहीं पास आकर बताना चाहता हूं!",
     "आँखों की गहराई को समझ नही सकते, होंटो से कुछ कह नही सकते, कैसे बया करे हम आपको यह दिल का हाल की, तुम्ही हो जिसके बगैर हम रह नही सकते।",
     "अपनी मोहब्बत से सजाना है तुझको,कितनी चाहत है यह बताना है तुझको, राहों में बिछा के मोहब्बत अपनी, प्यार के सफर पर ले जाना है तुझको!",
     "दीवाना हूं तेरा मुझे इंकार नहीं,कैसे कह दूं कि मुझे तुमसे प्यार नहीं,कुछ शरारत तो तेरी नजरों में भी थी,मैं अकेला ही तो इसका गुनाहगार नहीं!",
     "अपनी मोहब्बत का इजहार करना चाहता है, देखा है जब से तुम्हे मेने मेरे ए-सनम,सिर्फ तुम्हारा ही दीदार करने को दिल चाहता है।",
     "मैं बार बार नए तरीके से,अपने इश्क़ का इज़हार करता था,वो न जाने क्यों समझ नहीं पाता था बस हंस कर बात टाल देता था।",
     "बनकर तेरा साया तेरा साथ निभाऊंगी,तू जहां जाएगा में वहां-वहां आऊंगी, साया तो छोड़ जाता है साथ अंधेरे में, लेकिन में अंधेरे में तेरा उजाला बन जाऊंगी।",
     "तेरी जुदाई के लम्हे मुझे बेकरार करते हैं, मेरे हालात मुझे लाचार करते हैं, कैसे कहें कि हम तुमसे प्यार हैं, चलो आज हम तुमसे प्यार का इजहार करते हैं!",
     "बेशक तुझे भी प्यार मुझसे बेहद है,  मगर तू चाहता है इज़हार में करूँ,   तेरी इसी अदा पर तो यह दिल फ़िदा है, फिर में इज़हार करने से इंकार कैसे करू।",
     "कसूर तो था ही इन निगाहों का, जो चुपके से दीदार कर बैठा, हमने तो खामोश रहने की ठानी थी,पर बेवफा ये ज़ुबान इज़हार कर बैठा।",
     "हर बार बोलू मैं ही क्या,कभी तुम भी तो बोलो,हर बार प्यार जताऊ मैं ही क्या,कभी तुम भी तो इज़हार करो"
    ]












