# Project TODO

- [x] Yönetici panelinde görsel URL'si girilirken ziyaretçi kartıyla aynı kırpma, çerçeve ve yedek görsel davranışını gösteren canlı önizlemeyi incele.
- [x] Görsel URL değiştiğinde ürün kartı önizlemesinin tüm ilgili alanlarda anında güncellenmesini ve bozuk URL'de güvenli yedek görsele dönmesini iyileştir.
- [x] Kategori değişikliğinde yönetici önizlemesinin ziyaretçi kartındaki kategori çerçevesiyle eşleşmesini sağla.
- [x] Ürün görseli önizlemesini mobil ve masaüstü görünümde doğrula; JavaScript sözdizimi kontrolünü çalıştır.
- [x] Doğrulanmış ürün görseli önizleme iyileştirmesini GitHub Pages çalışma kopyasına hazırla.
- [x] Ana menüye müşterinin erişebileceği, masa numarası ve isteğe bağlı not alanı içeren garson çağrı arayüzü ekle.
- [x] Garson çağrı arayüzünün Türkçe/İngilizce metinlerini, başarı-hata bildirimlerini ve hız limiti geri bildirimini tamamla.
- [x] Müşteri çağrısı akışını, mobil görünümü ve JavaScript sözdizimini doğrula.
- [x] Doğrulanmış müşteri garson çağrı arayüzünü GitHub Pages ana dalına yayımla.

- [x] Kategori çarkında sağa kayan menü etiketi/iz animasyonunu tespit edip kaldırmak.
- [x] Çarkın açılma, sürükleme ve seçili kategori geçişlerinde yatay taşma oluşturmayan sabit etiketi uygulamak.
- [x] Masaüstü ve mobil görünümde çark etkileşimini ve sayfa kaydırma davranışını doğrulamak.
- [x] Doğrulanmış düzeltmeyi `main` dalına göndermek.

- [x] Yönetim panelinde tema bağımsız okunabilir form alanları, placeholder/odak renkleri ve koyu tema kontrastı ekle.
- [x] Yönetim paneline ürün/kategori/eksik görsel özeti ve görünür “Herkese Yayınla” aksiyon kartı ekle.
- [x] Yayın düğmesini mevcut GitHub JSON PUT akışına bağla; spinner, ayar yönlendirmesi, başarı/hata durumu ve mobil responsive düzeni doğrula.
- [x] Yönetim paneli değişikliklerini gerçek `muhammedtalhakanat-sys/Keyfimce-Kafem-Web` reposu `main` dalına gönder. Commit `448e94c`; uzak `main` ile eşleşiyor ve çalışma ağacı temiz.

- [x] Sayfa, modal, yönetim paneli, form, kart, rozet ve alt gezinme alanlarında açık/koyu tema metin-kontrast tokenlarını tek bir okunabilir sistemde birleştir. `KFM_THEME_TOKENS_V1` kanonik bloğu açık/koyu/auto paletleri tek token setinde topladı; durum rozetleri ve odak halkası sabit renk yerine token kullanıyor. Sözleşme testi ve tarayıcı denetimi başarılı.
- [x] GitHub başarılı yazma mesajını gerçek Pages/CDN yayını, commit ve canlı dosya doğrulamasıyla eşleştir; diğer cihazların eski katalog görmesini cache/version kontrolüyle gider. Yayın sonrası canlı URL doğrulaması (`KFM_PUBLISH_VERIFY_V1`) eklendi; sözleşme testi başarılı.
- [x] Çoklu cihaz ve tema regresyonlarını test edip düzeltmeyi GitHub `main` dalına gönder. 17 sözleşme testi geçti; değişiklikler `main` dalına gönderildi.

- [x] Menüyü hızlandır: ürün listesini aşamalı yükle (`kfmRenderProductsChunked`) ve kart görsellerini önbellekli URL ile yükle. Menü sonu kartı korunur; 6 sözleşme testi ve tarayıcı denetimi başarılı.
- [x] Ürün detayına yönetilebilir açıklama, içerik ve alerjen etiketleri ekle; yönetim panelinde düzenlenebilir yap. `kfmUrunIcerikEtiketleri`/`kfmUrunAlerjenEtiketleri` alanları detay penceresinde rozet olarak gösterilir; sözleşme testi ve tarayıcı doğrulaması başarılı.
- [x] Favoriler ve son seçilenler şeridi ile sipariş takip görünümü ekle. Ürün kartlarında kalp düğmesi, `localStorage` tabanlı favori/son seçilen saklama, sipariş gönderiminde takip kodu saklama ve Relay `GET /api/orders/track/:kod` uçlu durum sorgulama çalışıyor; sözleşme testleri (Web + Relay) başarılı.

- [x] Wi‑Fi şifresi kopyalama düğmesinin maskeli yıldızları değil gerçek parola değerini panoya vermesini sağla; bağlantı akışını doğrula. Yayınlanan JSON gerçek parolayı taşır, yerel dışa aktarım dosyası güvenlik için maskeli kalır.
- [x] Sepet içinde ürün adı, alt seçenek ve not alanlarında anlık arama/filtreleme ekle; sonuç sayısını, boş sonucu ve temizleme akışını erişilebilir hâle getir. Türkçe karakter duyarlı arama, Esc ile temizleme ve görünür sonuç sayacı eklendi.
- [x] Wi‑Fi kopyalama ve sepet içi arama/filtreleme için sözleşme testleri yaz, tarayıcıda doğrula ve değişiklikleri GitHub `main` dalına gönder. Sözleşme testleri ile tarayıcıdaki eşleşen/boş sonuç kontrolleri başarılı.

- [x] Wi‑Fi bilgi kartına SSID/parola içeren güvenli QR kod üretimi, indirilebilir/yazdırılabilir kart ve mobil uyumlu gösterim ekle. WPA Wi‑Fi metni QR’a dönüştürülür; modalda görüntüleme, indirme ve yazdırma çalışır.
- [x] Sepet filtresine kategori seçimi, minimum/maksimum fiyat aralığı, aktif filtre özeti ve temizleme akışı ekle; toplam tutarı değiştirmeden yalnız görünür satırları filtrele. Kategori ve fiyat koşulları anlık çalışır; filtre temizleme ve sonuç sayacı doğrulandı.
- [x] Wi‑Fi QR ve sepet gelişmiş filtrelerini sözleşme testleri ve tarayıcı doğrulamasıyla kontrol edip GitHub `main` dalına gönder. Web sözleşme testleri, JavaScript ayrıştırması ve gerçek tarayıcı kontrolleri başarılı.
