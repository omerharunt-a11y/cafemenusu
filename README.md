# ☕ Kahve Durağı - Dijital Menü

Modern ve şık bir kafe dijital menü websitesi. QR kod ile müşterilere gösterilebilir.

## 📁 Dosya Yapısı

```
kafe_menusu/
├── index.html      # Ana HTML sayfası
├── style.css       # Stil dosyası
├── script.js       # JavaScript (menü verileri burada)
└── README.md       # Bu dosya
```

## 🚀 Kurulum

### XAMPP ile Kullanım

1. `kafe_menusu` klasörünü XAMPP'ın `htdocs` klasörüne kopyalayın:
   ```
   C:\xampp\htdocs\kafe_menusu
   ```

2. XAMPP Control Panel'den Apache'yi başlatın

3. Tarayıcıda açın:
   ```
   http://localhost/kafe_menusu
   ```

### Direkt Açma

Sunucu olmadan da çalışır. `index.html` dosyasını tarayıcıda açmanız yeterli.

## ✏️ Menüyü Düzenleme

### Fiyat ve Ürün Değişikliği

`script.js` dosyasını açın. Tüm ürünler `menuData` objesi içinde:

```javascript
const menuData = {
    sicakIcecekler: [
        {
            isim: "Espresso",
            aciklama: "Yoğun aromali, geleneksel İtalyan kahvesi",
            fiyat: "45",      // ← Fiyatı değiştirin
            emoji: "☕"
        },
        // ... diğer ürünler
    ],
    // ... diğer kategoriler
};
```

### Yeni Ürün Ekleme

İlgili kategoriye yeni bir obje ekleyin:

```javascript
{
    isim: "Yeni Ürün Adı",
    aciklama: "Ürün açıklaması",
    fiyat: "99",
    emoji: "☕"  // Uygun emoji seçin
}
```

### Ürün Silme

Silmek istediğiniz ürün objesini kaldırın.

## 🎨 Görünümü Özelleştirme

### Kafe Adını Değiştirme

`index.html` dosyasında:
```html
<h1>Kahve Durağı</h1>  <!-- İstediğiniz ismi yazın -->
```

### Renkleri Değiştirme

`style.css` dosyasının başındaki `:root` bölümünde:

```css
:root {
    --primary-color: #6B4423;     /* Ana renk */
    --secondary-color: #8B5A2B;   /* İkincil renk */
    --accent-color: #D4A574;      /* Vurgu rengi */
    --bg-light: #FDF8F3;          /* Arka plan */
    /* ... */
}
```

### İletişim Bilgilerini Değiştirme

`index.html` dosyasının alt kısmındaki (footer) bölümü düzenleyin.

## 📱 QR Kod Oluşturma

1. Site'yi sunucunuza yükleyin
2. Site adresinizle QR kod oluşturun:
   - [qr-code-generator.com](https://www.qr-code-generator.com/)
   - [goqr.me](https://goqr.me/)
3. QR kodu yazdırıp masalara yerleştirin

## ✨ Özellikler

- ✅ Tam mobil uyumlu (responsive)
- ✅ Smooth scroll navigasyon
- ✅ Hover animasyonları
- ✅ Kolay düzenlenebilir yapı
- ✅ Modern ve şık tasarım
- ✅ Hızlı yükleme
- ✅ SEO uyumlu

## 🆘 Sorun Giderme

**Ürünler görünmüyor:**
- `script.js` dosyasının doğru yolda olduğundan emin olun
- Tarayıcı konsolunda hata var mı kontrol edin (F12)

**Türkçe karakterler bozuk:**
- Dosyaların UTF-8 formatında kaydedildiğinden emin olun

**Stiller yüklenmiyor:**
- `style.css` dosyasının aynı klasörde olduğundan emin olun

---

© 2026 - Dijital Menü Sistemi