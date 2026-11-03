# Keyfimce Kafem — Cloudflare Pages Yayını

## Kullanıcılar İçin Ana Adres

Menü QR kodu ve müşterilerle paylaşılacak ana menü adresi şudur:

https://muhammedtalhakanat-sys.github.io/Keyfimce-Kafem-Web/

Bu adres, kullanıcı cihazındaki `pages.dev` TLS bağlantı hatasından etkilenmez.

## Cloudflare Pages Kopyası

Cloudflare Pages, aynı `main` dalından aşağıdaki ek yayın kopyasını oluşturur:

https://keyfimce-kafem-web.pages.dev

Bu adres sunucu tarafında çalışır durumdadır; ancak kullanıcının gerçek cihazında `ERR_SSL_PROTOCOL_ERROR` görüldüğü için müşterilerle ana bağlantı olarak paylaşılmamalıdır.

## Yayın Akışı

Cloudflare Pages, bu deponun `main` dalını kaynak olarak kullanır. `main` dalına gönderilen her değişiklik otomatik olarak yeni üretim yayını başlatır.

Garson çağrısı istemci yapılandırması `waiter_relay_config.json` dosyasındadır ve güvenli Cloudflare Worker adresini kullanır. Gizli anahtarlar bu depoda saklanmaz.

## Ürün ve kategori çevirileri

Menü JSON'unda Türkçe kaynak metinlerini `ad`, `isim` ve `aciklama` alanlarında; isteğe bağlı İngilizce/Arapça karşılıklarını sırasıyla `ad_en`/`ad_ar`, `isim_en`/`isim_ar` ve `aciklama_en`/`aciklama_ar` alanlarında saklayın. D1 yayın API'sinde kategori çevirileri `name_en`/`name_ar` olarak gelir; web bunları `isim_en`/`isim_ar` alanlarına dönüştürür. Ekstra ve varyant metinleri de `isim_en`, `isim_ar`, `grup_en` ve `grup_ar` alanlarını kullanabilir. Ürün detayındaki içerik, alerjenler ve alerjen notları için `icerik_en`/`icerik_ar`, `alerjenler_en`/`alerjenler_ar` ve `alerjen_notu_en`/`alerjen_notu_ar` alanları desteklenir.

Yeni ürün/kategori eklerken paneldeki İngilizce ve Arapça alanları doldurun; boş bırakılan çeviriler otomatik uydurulmaz. Bilinen menü terimleri güvenli sözlükten çevrilir; bilinmeyen metin kaynak haliyle gösterilir. Canlı katalog yayıncısı çeviri alanlarını D1 kataloğuna ve web görünümüne taşır.
