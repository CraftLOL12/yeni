const config = {
    bot : {
        slashCommands: "1148946249320513546", // global veya sunucuIDsi yazın - slash olmayacaksa undefined yapın
	    token: "MTE4MTk2NDMyMDkxODIyOTA4Mw.GDhvaj.FMMEQX2JER46Ryx_cXnB-JgPFksw8xZBFlHiEg", //Bot Tokeniniz
	    prefix: ["/"], //komut ön eki
        id: "1181964320918229083" //bot idsi
    },
    sunucu : {
        type: "java", //sunucu türü java veya bedrock 
 	    ip: "oyna.LarenNetwork.com", //sunucu adresi
        port: 25565, //sunucu portu java için varsayılan 25565 bedrock için varsayılan 19132
        site: "www.LarenNetwork.com", //sunucu sitesi
        isim: "LarenNetwork", //sunucu ismi
        mcindir: "https://tlauncher.org/en/", //minecraft indirme linki
        vote: "Sunucunuzun Oy linki", //oy verme linki
        
    },
    kanal : {
	    aktif: true, //sesli kanalda online gösterme aktif mi(true) olsun kapalı mı(false)
	    id: "1181965141735129249", // sunucu online sayısının gözükeceği kanal (ses kanalı)
	    yazi: "• Aktif: {online}/{maxonline}" // kanalda gözükecek yazı || Varsayılan: • Aktif: {online}/{maxonline}
   },
    durum : {
	    mesaj: "{online} Kişi Sunucumuzda" // bot durumunda online sayısı || Varsayılan {online} Kişi Sunucumuzda 
   },
    ticket : {    
        parentOpened: "1148953281859694673", //destek talep kanallarının açılacağı kategorinin idsi

        Category1: "Minecraft Sorunları", //Destek talebi detayı için kategori 3 || Varsayılan: Minecraft Sorunları
        Category2: "Bulduğunuz Buglar", //Destek talebi detayı için kategori 2 || Varsayılan: Bulduğunuz Buglar
        Category3: "Şikayetler", //Destek talebi detayı için kategori 3 || Varsayılan: Şikayetler
          
        roleSupport: "1181965487266091068", //Destek talebine bakacak kişilere verilecek rolün idsi
            
        logsTicket: "1181965627750096966", //Destek taleplerinin loglanacağı kanal
        ticketChannel: "1181958582841913364" //Kullanıcıların destek talebi oluşturacağı kanalın idsi
    },
    oylama: {
        enabled: false, //oylama aktif mi? true: aktif false: pasif
        channelID: "Kullanıcıların Öneri yazabileceği kanal İD", //oylama kanalı
        emoji: "👍", //oylama emoji || Varsayılan: 👍
        emoji2: "👎", //oylama emoji || Varsayılan: 👎
        emoji3: "🤷", //oylama emoji || Varsayılan: 🤷
        altBaslik: { //alt başlık kullanılsın mı?
            enabled: false, //alt başlık kullanılsın mı? true: kullanılsın false: kullanılmasın
            arsivlemeSure: "1440" //alt başlık arşivlenme süresi (1440 dakika sonra [1440 dakika = 1 gün] arşivlenecek)
        } 

    }
}


module.exports = config;
