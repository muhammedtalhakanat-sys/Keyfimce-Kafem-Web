# Çark hareket doğrulama kaydı

Tarih: 16 Ağustos 2026

Yerel statik önizlemede açık kategori çarkı masaüstünde kontrol edildi. Sürükleme simülasyonu sonrasında görünür beş kategori kartının tamamı çark kapsayıcısının yatay sınırları içinde kaldı. Kapsayıcı `overflow: hidden`, `transform: matrix(1, 0, 0, 1, 0, 0)` değerleriyle yatay eğimsiz göründü; geçici yakınlık etiketi `display: none` oldu.

| Ölçüm | Sonuç |
|---|---|
| Çark yatay sınırları | 203–1063 px |
| Görünür kartların yatay taşması | Yok |
| Geçici sağ/sol kategori etiketi | Kapalı |
| Çark kapsayıcı yatay dönüşü | Yok |

Bu kayıt, `tests/wheel-motion-contract.test.mjs` ile birlikte kaynak davranışını doğrular.

## Mobil doğrulama

390 × 844 px mobil görünümde test sayfası çarkı açtı ve sürükleme simülasyonunu uyguladı. Açık çarkın kategori kartları merkezde, yalnızca dikey bir sıra olarak kaldı. Çarkın sağında kayan ek etiket, eğik 3B katman veya yatay taşma görülmedi.

| Ölçüm | Sonuç |
|---|---|
| Mobil görünüm | 390 × 844 px |
| Açık çarkta sağa kayan öğe | Yok |
| Kart hizası | Merkezli, dikey |
| Alt gezinme ile çakışma | Görsel taşma yok |
