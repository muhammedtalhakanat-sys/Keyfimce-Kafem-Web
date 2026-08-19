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
