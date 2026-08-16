# Canlı GitHub Pages çark doğrulama kaydı

Tarih: 16 Ağustos 2026

| Kontrol | Kanıt |
|---|---|
| Depo commit’i | `9748d0496902cbbd6c947930cf6bf244d52938ca` |
| GitHub Pages derleme durumu | `built` |
| Derleme güncelleme zamanı | 2026-08-16T13:32:37Z |
| Canlı adres | `https://muhammedtalhakanat-sys.github.io/Keyfimce-Kafem-Web/?verify=9748d04-live2` |
| Önbelleksiz HTML denetimi | Dikey çark dönüş betiği bulundu; önceki taban stilindeki 3B tanım da kaynakta kaldığı için yalnızca çalışma zamanı dönüşü esas alındı. |

Canlı HTML, aşağıdaki çalışma zamanı dönüşünü içerir:

```js
translate(-50%, -50%) translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)})
```

Bu dönüş yalnızca merkezleme, dikey konumlandırma ve ölçek uygular. Çark kartları için yatay konum veya `rotateX`/`rotateY` hesabı içermez. Eski sekme önbelleği farklı bir betiği çalıştırabildiğinden, doğrulama yeni sorgu parametresiyle yapılan sayfa yüklemesinden alınmıştır.

Canlı görünümde çark yeni doğrulama parametresiyle açıldı. Merkez kart, alt-üst komşu kartlar ve çark kabı aynı dikey eksende kaldı; önceki sürümün sağ tarafa kayan ayrı etiket katmanı görünmedi.

Ek son düzeltmede, yardımcı önizleme elemanının çalışma zamanında yeniden oluşturulması durduruldu; varsa doğrudan DOM'dan kaldırıldı. Merkez kartın sağa kayan ışık şeridi de devre dışı bırakıldı. Yerel önizleme adresi: `http://127.0.0.1:4173/?wheel-fix=final`.

Yerel açık çark denetimi sonucu: `previewCount = 0`, merkez kartın `::after` içeriği `none`, ilk dört kategori kartının yatay merkez farkı `0 px`. Kart dönüşleri yalnızca `translateY` ve `scale` matris bileşenleri içeriyor.

GitHub Pages dağıtımı: `01119f7f6db24b56767ee1aca23c12ca462b194f` commit'i `built` durumunda yayımlandı. Canlı sayfa önbellek kırıcı sorguyla açıldı: `?wheel-fix=01119f7`.

Canlı açık çark ölçümü: `sourceHasFinalFix = true`, `previewCount = 0`, merkez kart `::after = none` ve ilk dört kartın yatay merkez farkı `[0, 0, 0, 0] px` olarak doğrulandı.
