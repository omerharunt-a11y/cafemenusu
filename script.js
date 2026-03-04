/**
 * Kahve Durağı - Dijital Menü
 * ===========================================
 * Bu dosyada menü verilerini kolayca düzenleyebilirsiniz.
 * Her kategorideki ürünleri aşağıdaki formatta ekleyin/düzenleyin.
 */

// ===== MENÜ VERİLERİ =====
// Fiyat ve ürün değişikliklerini buradan yapın

const menuData = {
    // ☕ SICAK İÇECEKLER
    sicakIcecekler: [
        {
            isim: "Espresso",
            aciklama: "Yoğun aromali, geleneksel İtalyan kahvesi",
            fiyat: "45",
            emoji: "☕"
        },
        {
            isim: "Cappuccino",
            aciklama: "Espresso, buharla ısıtılmış süt ve süt köpüğü",
            fiyat: "65",
            emoji: "☕"
        },
        {
            isim: "Latte",
            aciklama: "Espresso ve bol miktarda buharla ısıtılmış süt",
            fiyat: "70",
            emoji: "☕"
        },
        {
            isim: "Türk Kahvesi",
            aciklama: "Geleneksel usulde pişirilmiş, köpüklü Türk kahvesi",
            fiyat: "50",
            emoji: "☕"
        },
        {
            isim: "Filtre Kahve",
            aciklama: "Taze çekilmiş çekirdeklerden demlenmiş filtre kahve",
            fiyat: "55",
            emoji: "☕"
        },
        {
            isim: "Mocha",
            aciklama: "Espresso, çikolata sosu, süt ve krema",
            fiyat: "75",
            emoji: "☕"
        },
        {
            isim: "Americano",
            aciklama: "Espresso ve sıcak su ile hazırlanan hafif kahve",
            fiyat: "50",
            emoji: "☕"
        },
        {
            isim: "Sıcak Çikolata",
            aciklama: "Kremalı, yoğun sıcak çikolata",
            fiyat: "60",
            emoji: "🍫"
        }
    ],

    // 🥤 SOĞUK İÇECEKLER
    sogukIcecekler: [
        {
            isim: "Ice Latte",
            aciklama: "Buzlu espresso ve soğuk süt",
            fiyat: "75",
            emoji: "🧊"
        },
        {
            isim: "Frappe",
            aciklama: "Buzlu karışık kahve, süt ve krema",
            fiyat: "80",
            emoji: "🥤"
        },
        {
            isim: "Ice Mocha",
            aciklama: "Buzlu espresso, çikolata ve süt",
            fiyat: "85",
            emoji: "🧊"
        },
        {
            isim: "Limonata",
            aciklama: "Taze sıkılmış limon, nane yaprakları",
            fiyat: "45",
            emoji: "🍋"
        },
        {
            isim: "Çilekli Milkshake",
            aciklama: "Taze çilek, süt ve dondurma",
            fiyat: "70",
            emoji: "🍓"
        },
        {
            isim: "Çikolatalı Milkshake",
            aciklama: "Çikolata, süt ve vanilyalı dondurma",
            fiyat: "70",
            emoji: "🍫"
        },
        {
            isim: "Cold Brew",
            aciklama: "24 saat soğuk demlenen özel kahve",
            fiyat: "70",
            emoji: "☕"
        },
        {
            isim: "Smoothie",
            aciklama: "Mevsim meyveleri ile hazırlanan smoothie",
            fiyat: "65",
            emoji: "🥤"
        }
    ],

    // 🍰 TATLILAR
    tatlilar: [
        {
            isim: "Cheesecake",
            aciklama: "New York usulü kremalı cheesecake",
            fiyat: "95",
            emoji: "🍰"
        },
        {
            isim: "Brownie",
            aciklama: "Sıcak çikolatalı brownie, dondurma ile",
            fiyat: "85",
            emoji: "🍫"
        },
        {
            isim: "Tiramisu",
            aciklama: "Geleneksel İtalyan tiramisu",
            fiyat: "90",
            emoji: "🍰"
        },
        {
            isim: "San Sebastian",
            aciklama: "Karamelize yüzeyli Bask cheesecake",
            fiyat: "100",
            emoji: "🧀"
        },
        {
            isim: "Cookie",
            aciklama: "Taze pişmiş çikolatalı kurabiye",
            fiyat: "40",
            emoji: "🍪"
        },
        {
            isim: "Magnolia",
            aciklama: "Muzlu, pudingli magnolia tatlısı",
            fiyat: "80",
            emoji: "🍮"
        }
    ],

    // 🥪 ATIŞTIRMALIKLAR
    atistirmaliklar: [
        {
            isim: "Tost",
            aciklama: "Kaşar peyniri, domates, salatalık",
            fiyat: "70",
            emoji: "🥪"
        },
        {
            isim: "Sandviç",
            aciklama: "Hindi füme, marul, domates, mayonez",
            fiyat: "90",
            emoji: "🥪"
        },
        {
            isim: "Waffle",
            aciklama: "Taze waffle, çikolata sosu ve meyve",
            fiyat: "95",
            emoji: "🧇"
        },
        {
            isim: "Kruvasan",
            aciklama: "Tereyağlı, taze pişmiş kruvasan",
            fiyat: "55",
            emoji: "🥐"
        },
        {
            isim: "Çikolatalı Kruvasan",
            aciklama: "İçi çikolata dolgulu kruvasan",
            fiyat: "65",
            emoji: "🥐"
        },
        {
            isim: "Açma",
            aciklama: "Taze pişmiş, yumuşacık açma",
            fiyat: "35",
            emoji: "🥯"
        },
        {
            isim: "Poğaça",
            aciklama: "Peynirli veya zeytinli poğaça",
            fiyat: "40",
            emoji: "🥐"
        },
        {
            isim: "Simit",
            aciklama: "Taze simit, peynir ve zeytin ile",
            fiyat: "45",
            emoji: "🥯"
        }
    ]
};

// ===== ÜRÜN KARTI OLUŞTURMA =====
function createMenuItem(item, kategori) {
    return `
        <div class="menu-item">
            <div class="item-image ${kategori}">
                ${item.emoji}
            </div>
            <div class="item-content">
                <h3 class="item-name">${item.isim}</h3>
                <p class="item-description">${item.aciklama}</p>
                <span class="item-price">${item.fiyat}</span>
            </div>
        </div>
    `;
}

// ===== MENÜYÜ SAYFAYA YÜKLEME =====
function loadMenu() {
    // Sıcak İçecekler
    const sicakGrid = document.getElementById('sicak-icecekler-grid');
    if (sicakGrid) {
        sicakGrid.innerHTML = menuData.sicakIcecekler
            .map(item => createMenuItem(item, 'sicak'))
            .join('');
    }

    // Soğuk İçecekler
    const sogukGrid = document.getElementById('soguk-icecekler-grid');
    if (sogukGrid) {
        sogukGrid.innerHTML = menuData.sogukIcecekler
            .map(item => createMenuItem(item, 'soguk'))
            .join('');
    }

    // Tatlılar
    const tatliGrid = document.getElementById('tatlilar-grid');
    if (tatliGrid) {
        tatliGrid.innerHTML = menuData.tatlilar
            .map(item => createMenuItem(item, 'tatli'))
            .join('');
    }

    // Atıştırmalıklar
    const atistirmalikGrid = document.getElementById('atistirmaliklar-grid');
    if (atistirmalikGrid) {
        atistirmalikGrid.innerHTML = menuData.atistirmaliklar
            .map(item => createMenuItem(item, 'atistirmalik'))
            .join('');
    }
}

// ===== NAVİGASYON AKTİF LİNK =====
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.menu-section');

    // Scroll ile aktif bölümü belirleme
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollPos >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Tıklama ile smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav-menu').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SAYFA YÜKLENDIĞINDE =====
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    handleNavigation();
});