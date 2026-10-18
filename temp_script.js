
    /* KFM_I18N_MOBILE_V16 */
    /* KFM_LANGUAGE_CLEANUP_V17_1 */
    /* KFM_LANGUAGE_CLEANUP_V17 */
    /* KFM_I18N_MODAL_V16_1 */
    // ══════════════════════════════════════════════════════════════
    // ── AÇILIŞ ANİMASYONU ──
    // ══════════════════════════════════════════════════════════════
    window.addEventListener('load', () => {
        const ws = document.getElementById('welcomeScreen');
        window.setTimeout(() => {
            if (!ws) return;
            ws.style.opacity = '0';
            ws.style.visibility = 'hidden';
            ws.setAttribute('aria-hidden', 'true');
        }, 3200);
    });

    // ══════════════════════════════════════════════════════════════
    // ── ÇEVİRİ SİSTEMİ (TR / EN) ──
    // ══════════════════════════════════════════════════════════════
    const i18n = {
	        tr: {
	            welcome_eyebrow: "KAHVE · SOHBET · KEYİF",
	            welcome_ready: "Sizin için hazır",
	            welcome_title: "Keyfinin başladığı yer",
	            welcome_sub: "Menü, misafir Wi-Fi ve garson çağrısı tek noktada.",
	            welcome_note_title: "Keyfimce deneyimi",
	            welcome_note_text: "İhtiyacınız olan her şey, birkaç dokunuş uzakta.",
	            welcome_pill_menu: "Menüyü keşfet",
	            welcome_pill_service: "Tek dokunuşla destek",
	            welcome_pill_wifi: "Misafir Wi-Fi",
	            welcome_tip: "Menünüz hazırlanıyor",
            wifi_sub: "Misafir Wi-Fi — bağlan veya şifreyi kopyala",
            wifi_title: "Misafir Wi-Fi",
            wifi_ssid_label: "Ağ Adı (SSID)",
            wifi_pass_label: "Şifre",
            copy_btn: "Kopyala",
            wifi_connect_btn: "Şifreyi Kopyala ve Bağlan",
            wifi_hint: "Şifre kopyalanır; ayarlardan Wi-Fi ağına yapıştırabilirsiniz.",
            review_title: "Öneri-İstek Kutusu",
            review_name_label: "İsminiz (İsteğe Bağlı)",
            review_name_ph: "Adınız",
            review_msg_label: "Görüşünüz",
            review_msg_ph: "Fikirleriniz değerlidir...",
            review_score_label: "Puanınız",
            review_send_btn: "Gönder",
            auth_title: "Yetkili Girişi",
            cancel_btn: "İptal",
            login_btn: "Giriş",
            admin_title: "Yönetim Paneli",
            back_to_menu: "Menüye Dön",
            nav_menu: "Menü",
            search_placeholder: "Ne aramıştınız?",
            all_menu: "✨ Tüm Menü",
            out_of_stock: "TÜKENDİ",
            no_product: "Ürün bulunamadı",
            detail_btn: "Detay",
            extra_options: "seçenek",
            modal_close: "Kapat",
            view_menu: "Menüyü Görüntüle",
            more_category: "Daha Fazla",
            theme_label: "Tema",
            theme_auto: "Otomatik tema",
            theme_light: "Açık tema",
            theme_dark: "Koyu tema",
            theme_now_dark: "şu an koyu",
            theme_now_light: "şu an açık",
            theme_change_hint: "Değiştirmek için tıklayın.",
            search_clear: "Aramayı temizle",
            category_menu_label: "Kategori menüsü",
            wheel_sound_off: "Çark seslerini kapat",
            wheel_sound_on: "Çark seslerini aç",
            review_nav_default: "Öneri-İstek",
            toast_wifi_copied: "📋 Şifre kopyalandı!",
            toast_wifi_updated: "✅ Wi-Fi bilgileri güncellendi",
            toast_pass_updated: "✅ Giriş şifresi güncellendi",
            toast_header_updated: "✅ Header arka planı güncellendi",
            toast_product_added: "✅ Ürün eklendi",
            toast_product_deleted: "🗑️ Ürün silindi",
            toast_extra_added: "✅ Ekstra eklendi",
            toast_review_sent: "✅ Geri bildirim alındı, teşekkürler!",
            toast_json_downloaded: "💾 JSON dosyası indirildi!",
            toast_json_loaded: "✅ JSON verileri sisteme başarıyla yüklendi!",
            toast_wrong_pass: "❌ Hatalı şifre",
            toast_cat_added: "✅ Kategori eklendi",
            toast_cat_deleted: "🗑️ Kategori silindi",
            toast_cat_has_products: "❌ Ürün içeren kategori silinemez",
            toast_cat_exists: "❌ Bu ID zaten mevcut",
            toast_cat_empty: "❌ Kategori ID ve adı boş olamaz",
            toast_cat_invalid_id: "❌ Kategori ID boşluk içeremez",
            toast_gh_settings_saved: "✅ GitHub ayarları kaydedildi",
            toast_gh_push_ok: "✅ GitHub'a başarıyla push edildi!",
            toast_gh_push_fail: "❌ GitHub push başarısız",
            toast_gh_no_settings: "❌ Önce GitHub ayarlarını kaydedin",
            gh_publish_btn: "GitHub JSON’a Kaydet ve Yayınla",
            gh_publish_note: "Paneldeki ürün, kategori, çeviri, stok ve çerçeve değişikliklerini aynı JSON şemasını koruyarak tek düğmeyle GitHub’a kaydedin. GitHub ayarları kayıtlıysa form kaydetme işlemleri otomatik senkronizasyonu da tetikler.",
            quick_order: "⚡ Hızlı Sipariş",
            quick_order_en: "⚡ Quick Order",
	            call_waiter: "Garson Çağır",
	            call_waiter_en: "Call Waiter",
	            waiter_called: "✅ Garson çağrıldı!",
	            waiter_called_en: "✅ Waiter called!",
	            waiter_modal_title: "Garson Çağır",
	            waiter_modal_description: "Masa numaranızı yazın; çağrınız doğrudan ekibe iletilsin.",
	            waiter_table_label: "Masa numaranız",
	            waiter_table_placeholder: "Örn. 12 veya Teras 3",
	            waiter_table_hint: "Masa numaranız çağrının doğru ekibe ulaşmasını sağlar.",
	            waiter_type_label: "Çağrı türü",
	            waiter_type_hint: "İhtiyacınızı seçin; ekibimiz daha hızlı yardımcı olsun.",
	            waiter_type_general: "Genel çağrı",
	            waiter_type_order: "Sipariş",
	            waiter_type_bill: "Hesap",
	            waiter_note_label: "Notunuz",
	            waiter_optional: "(isteğe bağlı)",
	            waiter_note_placeholder: "Örn. Hesap rica ediyorum",
	            waiter_submit: "Garson Çağır",
	            waiter_security_hint: "Çağrılar güvenli olarak iletilir. Aynı cihazdan kısa sürede en fazla 3 çağrı gönderilebilir.",
	            waiter_table_required: "Lütfen geçerli bir masa numarası girin.",
	            waiter_sending: "Çağrınız gönderiliyor…",
	            waiter_sent: "✅ Çağrınız ekibe iletildi. Garsonumuz kısa süre içinde yanınızda olacak.",
	            quick_order_title: "Hızlı Sipariş Yönetimi",
            quick_order_title_en: "Quick Order Management",
            quick_order_desc: "En çok satan ürünleri buraya ekleyin, müşteriler kısayol olarak hızlıca sipariş verebilir.",
            quick_order_desc_en: "Add best-selling products here, customers can order quickly as shortcuts.",
            add_to_quick: "Hızlı Siparişe Ekle",
            add_to_quick_en: "Add to Quick Order",
            remove_from_quick: "Kaldır",
            remove_from_quick_en: "Remove",
            no_quick_products: "Henüz hızlı sipariş ürünü yok.",
            no_quick_products_en: "No quick order products yet.",
            pair_label: "Mükemmel İkili",
            pair_detail: "Birlikte daha keyifli",
            suggestion_view_detail: "Detayı gör"
        },
        ar: {
            welcome_eyebrow: "قهوة · محادثة · راحة",
            welcome_ready: "جاهز لك",
            welcome_title: "حيث تبدأ لحظتك",
            welcome_sub: "القائمة وضيف Wi-Fi خدمة النادل في مكان واحد.",
            welcome_note_title: "تجربة Keyfimce",
            welcome_note_text: "كل ما تحتاجه على بعد بضع نقرات.",
            welcome_pill_menu: "استكشف القائمة",
            welcome_pill_service: "الخدمة بنقرة واحدة",
            welcome_pill_wifi: "ضيف Wi-Fi",
            welcome_tip: "جاري تحضير قائمتك",
            wifi_sub: "ضيف Wi-Fi — اتصل أو انسخ كلمة المرور",
            wifi_title: "ضيف Wi-Fi",
            wifi_ssid_label: "اسم الشبكة (SSID)",
            wifi_pass_label: "كلمة المرور",
            copy_btn: "نسخ",
            wifi_connect_btn: "نسخ كلمة المرور والاتصال",
            wifi_hint: "تم نسخ كلمة المرور؛ يمكنك لصقها في إعدادات Wi-Fi.",
            review_title: "الاقتراحات والطلبات",
            review_name_label: "اسمك (اختياري)",
            review_name_ph: "اسمك",
            review_msg_label: "ملاحظاتك",
            review_msg_ph: "أفكارك قيمة...",
            review_score_label: "تقييمك",
            review_send_btn: "إرسال",
            auth_title: "تسجيل دخول المسؤول",
            cancel_btn: "إلغاء",
            login_btn: "تسجيل الدخول",
            admin_title: "لوحة التحكم",
            back_to_menu: "العودة إلى القائمة",
            nav_menu: "القائمة",
            search_placeholder: "ماذا كنت تبحث؟",
            all_menu: "✨ القائمة الكاملة",
            out_of_stock: "نفذت الكمية",
            no_product: "لم يتم العثور على منتجات",
            detail_btn: "عرض التفاصيل",
            extra_options: "خيارات",
            modal_close: "إغلاق",
            view_menu: "عرض القائمة",
            more_category: "المزيد",
            theme_label: "المظهر",
            theme_auto: "مظهر تلقائي",
            theme_light: "مظهر فاتح",
            theme_dark: "مظهر داكن",
            theme_now_dark: "حالياً داكن",
            theme_now_light: "حالياً فاتح",
            theme_change_hint: "انقر للتغيير.",
            search_clear: "مسح البحث",
            category_menu_label: "قائمة الفئات",
            wheel_sound_off: "كتم أصوات العجلة",
            wheel_sound_on: "تفعيل أصوات العجلة",
            review_nav_default: "الاقتراحات",
            toast_wifi_copied: "📋 تم نسخ كلمة المرور!",
            toast_wifi_updated: "✅ تم تحديث معلومات Wi-Fi",
            toast_pass_updated: "✅ تم تحديث كلمة مرور المسؤول",
            toast_header_updated: "✅ تم تحديث خلفية الرأس",
            toast_product_added: "✅ تمت إضافة المنتج",
            toast_product_deleted: "🗑️ تم حذف المنتج",
            toast_extra_added: "✅ تمت إضافة إضافي",
            toast_review_sent: "✅ تم استلام ملاحظاتك، شكراً لك!",
            toast_json_downloaded: "💾 تم تنزيل ملف JSON!",
            toast_json_loaded: "✅ تم تحميل بيانات JSON بنجاح!",
            toast_wrong_pass: "❌ كلمة مرور خاطئة",
            toast_cat_added: "✅ تمت إضافة الفئة",
            toast_cat_deleted: "🗑️ تم حذف الفئة",
            toast_cat_has_products: "❌ لا يمكن حذف فئة تحتوي على منتجات",
            toast_cat_exists: "❌ هذا المعرف موجود بالفعل",
            toast_cat_empty: "❌ لا يمكن أن يكون معرف الفئة واسمها فارغين",
            toast_cat_invalid_id: "❌ لا يمكن أن يحتوي معرف الفئة على مسافات",
            toast_gh_settings_saved: "✅ تم حفظ إعدادات GitHub",
            toast_gh_push_ok: "✅ تم الدفع إلى GitHub بنجاح!",
            toast_gh_push_fail: "❌ فشل الدفع إلى GitHub",
            toast_gh_no_settings: "❌ يرجى حفظ إعدادات GitHub أولاً",
            gh_publish_btn: "حفظ ونشر JSON إلى GitHub",
            gh_publish_note: "احفظ تغييرات المنتج والفئة والترجمة والمخزون والإطار إلى GitHub بزر واحد مع الحفاظ على مخطط JSON الحالي. الإعدادات المحفوظة لـ GitHub تتيح أيضًا المزامنة التلقائية بعد حفظ النموذج.",
            quick_order: "⚡ طلب سريع",
            quick_order_en: "⚡ Quick Order",
            call_waiter: "استدعاء النادل",
            call_waiter_en: "Call Waiter",
            waiter_called: "✅ تم استدعاء النادل!",
            waiter_called_en: "✅ Waiter called!",
            waiter_modal_title: "استدعاء نادل",
            waiter_modal_description: "أدخل رقم طاولتك وأرسل طلبك مباشرة إلى الفريق.",
            waiter_table_label: "رقم طاولتك",
            waiter_table_placeholder: "مثال: 12 أو تراس 3",
            waiter_table_hint: "رقم طاولتك يساعد طلبك في الوصول إلى الفريق الصحيح.",
            waiter_type_label: "نوع الطلب",
            waiter_type_hint: "اختر ما تحتاجه حتى يتمكن الفريق من مساعدتك بشكل أسرع.",
            waiter_type_general: "طلب عام",
            waiter_type_order: "طلب",
            waiter_type_bill: "الفاتورة",
            waiter_note_label: "ملاحظتك",
            waiter_optional: "(اختياري)",
            waiter_note_placeholder: "مثال: أرجو الفاتورة، من فضلك",
            waiter_submit: "استدعاء نادل",
            waiter_security_hint: "يتم إرسال الطلبات بشكل آمن. يمكن إرسال 3 طلبات كحد أقصى من نفس الجهاز خلال فترة قصيرة.",
            waiter_table_required: "الرجاء إدخال رقم طاولة صالح.",
            waiter_sending: "جاري إرسال طلبك…",
            waiter_sent: "✅ وصل طلبك إلى الفريق. سيكون النادل معك قريباً.",
            quick_order_title: "إدارة الطلبات السريعة",
            quick_order_title_en: "Quick Order Management",
            quick_order_desc: "أضف المنتجات الأكثر مبيعاً هنا، يمكن للعملاء الطلب بسرعة كاختصارات.",
            quick_order_desc_en: "Add best-selling products here, customers can order quickly as shortcuts.",
            add_to_quick: "إضافة للطلب السريع",
            add_to_quick_en: "Add to Quick Order",
            remove_from_quick: "إزالة",
            remove_from_quick_en: "Remove",
            no_quick_products: "لا توجد منتجات للطلب السريع بعد.",
            no_quick_products_en: "No quick order products yet.",
            pair_label: "زوج مثالي",
            pair_detail: "أفضل معاً",
            suggestion_view_detail: "عرض التفاصيل"
        },
        en: {
	            welcome_eyebrow: "COFFEE · CONVERSATION · COMFORT",
	            welcome_ready: "Ready for you",
	            welcome_title: "Where your moment begins",
	            welcome_sub: "Menu, guest Wi-Fi and waiter service, in one place.",
	            welcome_note_title: "The Keyfimce experience",
	            welcome_note_text: "Everything you need is just a few taps away.",
	            welcome_pill_menu: "Explore the menu",
	            welcome_pill_service: "Service in one tap",
	            welcome_pill_wifi: "Guest Wi-Fi",
	            welcome_tip: "Preparing your menu",
	            wifi_sub: "Guest Wi-Fi — connect or copy password",
	            wifi_title: "Guest Wi-Fi",
	            wifi_ssid_label: "Network Name (SSID)",
	            wifi_pass_label: "Password",
	            copy_btn: "Copy",
	            wifi_connect_btn: "Copy Password & Connect",
	            wifi_hint: "Password is copied; paste it in your Wi-Fi settings.",
	            review_title: "Suggestions & Requests",
	            review_name_label: "Your Name (Optional)",
	            review_name_ph: "Your name",
	            review_msg_ph: "Your thoughts are valuable...",
	            review_msg_label: "Your Feedback",
	            review_score_label: "Your Rating",
	            review_send_btn: "Send",
	            auth_title: "Admin Login",
	            cancel_btn: "Cancel",
	            login_btn: "Login",
	            admin_title: "Admin Panel",
	            back_to_menu: "Back to Menu",
	            nav_menu: "Menu",
	            search_placeholder: "Search...",
	            all_menu: "✨ Full Menu",
	            out_of_stock: "SOLD OUT",
	            no_product: "No products found",
	            detail_btn: "View details",
	            extra_options: "options",
	            modal_close: "Close",
	            view_menu: "View Menu",
	            more_category: "More",
	            theme_label: "Theme",
	            theme_auto: "Auto theme",
	            theme_light: "Light theme",
	            theme_dark: "Dark theme",
	            theme_now_dark: "currently dark",
	            theme_now_light: "currently light",
	            theme_change_hint: "Click to change.",
	            search_clear: "Clear search",
	            category_menu_label: "Category menu",
	            wheel_sound_off: "Mute wheel sounds",
	            wheel_sound_on: "Enable wheel sounds",
	            review_nav_default: "Suggestions",
	            toast_wifi_copied: "📋 Password copied!",
	            toast_wifi_updated: "✅ Wi-Fi info updated",
	            toast_pass_updated: "✅ Admin password updated",
	            toast_header_updated: "✅ Header background updated",
	            toast_product_added: "✅ Product added",
	            toast_product_deleted: "🗑️ Product deleted",
	            toast_extra_added: "✅ Extra added",
	            toast_review_sent: "✅ Feedback received, thank you!",
	            toast_json_downloaded: "💾 JSON file downloaded!",
	            toast_json_loaded: "✅ JSON data loaded successfully!",
	            toast_wrong_pass: "❌ Wrong password",
	            toast_cat_added: "✅ Category added",
	            toast_cat_deleted: "🗑️ Category deleted",
	            toast_cat_has_products: "❌ Cannot delete a category with products",
	            toast_cat_exists: "❌ This ID already exists",
	            toast_cat_empty: "❌ Category ID and name cannot be empty",
	            toast_cat_invalid_id: "❌ Category ID cannot contain spaces",
	            toast_gh_settings_saved: "✅ GitHub settings saved",
	            toast_gh_push_ok: "✅ Successfully pushed to GitHub!",
	            toast_gh_push_fail: "❌ GitHub push failed",
	            toast_gh_no_settings: "❌ Please save GitHub settings first",
	            gh_publish_btn: "Save and Publish JSON to GitHub",
	            gh_publish_note: "Save product, category, translation, stock, and frame changes to GitHub with one button while preserving the existing JSON schema. Saved GitHub settings also enable automatic sync after form saves.",
	            quick_order: "⚡ Quick Order",
	            quick_order_en: "⚡ Quick Order",
	            call_waiter: "Call Waiter",
	            call_waiter_en: "Call Waiter",
	            waiter_called: "✅ Waiter called!",
	            waiter_called_en: "✅ Waiter called!",
	            waiter_modal_title: "Call a Waiter",
	            waiter_modal_description: "Enter your table number and send your request directly to the team.",
	            waiter_table_label: "Your table number",
	            waiter_table_placeholder: "For example: 12 or Terrace 3",
	            waiter_table_hint: "Your table number helps your request reach the right team.",
	            waiter_type_label: "Request type",
	            waiter_type_hint: "Choose what you need so the team can help you faster.",
	            waiter_type_general: "General request",
	            waiter_type_order: "Order",
	            waiter_type_bill: "Bill",
	            waiter_note_label: "Your note",
	            waiter_optional: "(optional)",
	            waiter_note_placeholder: "For example: May I have the bill, please?",
	            waiter_submit: "Call a Waiter",
	            waiter_security_hint: "Requests are sent securely. A maximum of 3 requests can be sent from the same device within a short period.",
	            waiter_table_required: "Please enter a valid table number.",
	            waiter_sending: "Sending your request…",
	            waiter_sent: "✅ Your request has reached the team. A waiter will be with you shortly.",
	            quick_order_title: "Quick Order Management",
	            quick_order_title_en: "Quick Order Management",
	            quick_order_desc: "Add best-selling products here, customers can order quickly as shortcuts.",
	            quick_order_desc_en: "Add best-selling products here, customers can order quickly as shortcuts.",
	            add_to_quick: "Add to Quick Order",
	            add_to_quick_en: "Add to Quick Order",
	            remove_from_quick: "Remove",
	            remove_from_quick_en: "Remove",
	            no_quick_products: "No quick order products yet.",
	            no_quick_products_en: "No quick order products yet.",
	            pair_label: "Perfect Pair",
	            pair_detail: "Better together",
	            suggestion_view_detail: "View details"
        }
    };

    // Telefon diline göre otomatik dil seçimi
    function getBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage || 'tr';
        const langCode = browserLang.split('-')[0].toLowerCase();
        const supportedLangs = ['tr', 'en', 'ar'];
        return supportedLangs.includes(langCode) ? langCode : 'tr';
    }

    let aktifDil = localStorage.getItem('kfm_lang') || getBrowserLanguage();

    function t(key) {
        return (i18n[aktifDil] && i18n[aktifDil][key]) ? i18n[aktifDil][key] : (i18n['tr'][key] || key);
    }

    const translationsDict = {
    "🥛 İçecek": "🥛 Beverages",
    "☕ Kahve": "☕ Coffee",
    "🥛 Sütlü Kahve": "🥛 Milk Coffee",
    "❄️ Soğuk Kahve": "❄️ Cold Coffee",
    "💨 Nargile": "💨 Hookah",
    "🍰 Tatlı": "🍰 Dessert",
    "🥪 Yiyecek": "🥪 Food",
    "🧃 Soğuk İçecek": "🧃 Cold Beverage",
    "🫖 Çay": "🫖 Tea",
    "Köpüklü Süt": "Foamed Milk",
    "Su (0.5 L)": "Water (0.5 L)",
    "Americano": "Americano",
    "Dibek Kahvesi": "Dibek Coffee",
    "Doppio": "Doppio",
    "Filtre Kahve": "Filter Coffee",
    "Lungo": "Lungo",
    "Menengiç Kahvesi": "Menengic Coffee",
    "Osmanlı Kahvesi": "Ottoman Coffee",
    "Ristretto": "Ristretto",
    "Türk Kahvesi": "Turkish Coffee",
    "Uzun Kahve": "Long Coffee",
    "Klasik Hazır Kahve": "Classic Instant Coffee",
    "Cafe Latte": "Cafe Latte",
    "Cappuccino": "Cappuccino",
    "Espresso Latte Macchiato": "Espresso Latte Macchiato",
    "Flat White": "Flat White",
    "Italian Cappuccino": "Italian Cappuccino",
    "Italian Macchiato": "Italian Macchiato",
    "Soğuk Affa Gato": "Iced Affogato",
    "Soğuk Cappuccino": "Iced Cappuccino",
    "Soğuk Chilled Coffe": "Chilled Coffee",
    "Soğuk Coffe Latte": "Iced Coffee Latte",
    "Soğuk Espresso": "Iced Espresso",
    "Soğuk Frappe": "Iced Frappe",
    "Soğuk Italian Cappuccino": "Iced Italian Cappuccino",
    "Soğuk Latte Macchiato": "Iced Latte Macchiato",
    "Soğuk Nitro Coffe": "Iced Nitro Coffee",
    "Soğuk Uzun Kahve": "Iced Long Coffee",
    "Dejavu Nargile": "Dejavu Hookah",
    "Dominik Nargile": "Dominic Hookah",
    "Ezgotica Nargile": "Exotica Hookah",
    "Elma-Nane Nargile": "Apple-Mint Hookah",
    "Laddy Killer Nargile": "Lady Killer Hookah",
    "Love66 Nargile": "Love66 Hookah",
    "Nakhla Nargile": "Nakhla Hookah",
    "Red Dream Nargile": "Red Dream Hookah",
    "Sakız Nargile": "Gum Hookah",
    "Tatlı Cadı Nargile": "Sweet Witch Hookah",
    "Yeşil Peri Nargile": "Green Fairy Hookah",
    "Chees Kek": "Cheesecake",
    "Cup Tatlı": "Cup Dessert",
    "Profiterol": "Profiterole",
    "Tost Karışık": "Mixed Toast",
    "Tost Kaşar": "Cheese Toast",
    "Tost Sucuk": "Sausage Toast",
    "Bursa Gazozu": "Bursa Soda",
    "Didi Bergamot": "Didi Bergamot",
    "Didi Limon": "Didi Lemon",
    "Didi Çilek": "Didi Strawberry",
    "Didi Şeftali": "Didi Peach",
    "Kızılay Limon": "Kızılay Lemon",
    "Kızılay Sade": "Kızılay Plain",
    "Niğde Gazozu": "Nigde Soda",
    "Sarıyer Portakal": "Sarıyer Orange",
    "Sarıyer Siyah Kola": "Sarıyer Black Cola",
    "Uludağ Limonata": "Uludağ Lemonade",
    "Bitki Çayı Adaçayı": "Herbal Tea Sage",
    "Bitki Çayı Atom": "Herbal Tea Atom",
    "Bitki Çayı Ihlamur": "Herbal Tea Linden",
    "Bitki Çayı Papatya": "Herbal Tea Chamomile",
    "Elma Çay": "Apple Tea",
    "Kekik Çay": "Thyme Tea",
    "Kivi Çay": "Kiwi Tea",
    "Kuşburnu Çay": "Rosehip Tea",
    "Limon Çay": "Lemon Tea",
    "Nane Limon Çay": "Mint Lemon Tea",
    "Oralet Portakal Çay": "Orange Oralet Tea",
    "Çay": "Tea",
    "Dimes Ananas": "Dimes Pineapple",
    "Dimes Karışık": "Dimes Mixed",
    "Dimes Şeftali": "Dimes Peach",
    "Dimes Vişne": "Dimes Sour Cherry",
    "Kızılay Elma": "Kızılay Apple",
    "Kızılay Guava": "Kızılay Guava",
    "Kızılay Karpuz Çilek": "Kızılay Watermelon Strawberry",
    "Fındık Aromalı": "Hazelnut Flavored",
    "Karamel Aromalı": "Caramel Flavored",
    "Vanilya Aromalı": "Vanilla Flavored",
    "Çikolata": "Chocolate",
    "Fıstık": "Pistachio",
    "çilek": "Strawberry",
    "vanilya": "Vanilla",
    "Vanilya": "Vanilla",
    "Ekstra Çikolata": "Extra Chocolate",
    "Süt": "Milk",
    "Karamel": "Caramel",
    "Fındık Şurubu": "Hazelnut Syrup"
};

    function localizedExtraName(extra) {
        if (!extra) return '';
        if (aktifDil === 'en') return extra.isim_en || translationsDict[extra.isim] || extra.isim || '';
        return extra.isim || '';
    }

    function localizedCategoryName(category, fallback = '') {
        if (!category) return fallback;
        if (aktifDil === 'en') return category.isim_en || translationsDict[category.isim] || category.isim || fallback;
        return category.isim || fallback;
    }

    function localizedProductName(product) {
        if (!product) return '';
        if (aktifDil === 'en') return product.ad_en || translationsDict[product.ad] || product.ad || '';
        return product.ad || '';
    }

    function localizedProductDescription(product, fallback = '') {
        if (!product) return fallback;
        if (aktifDil === 'en') return product.aciklama_en || fallback;
        return product.aciklama || fallback;
    }

    function refreshLocalizedControls() {
        const searchClear = document.getElementById('searchClearBtn');
        if (searchClear) {
            searchClear.setAttribute('aria-label', t('search_clear'));
            searchClear.title = t('search_clear');
        }
        const categoryWheel = document.getElementById('catNav');
        if (categoryWheel) categoryWheel.setAttribute('aria-label', t('category_menu_label'));
        const detailModal = document.getElementById('productDetailModal');
        if (detailModal) {
            const closeIcon = detailModal.querySelector('.detail-close');
            if (closeIcon) closeIcon.setAttribute('aria-label', t('modal_close'));
            const softAction = detailModal.querySelector('.detail-action-soft');
            if (softAction) softAction.textContent = t('modal_close');
            const mainAction = document.getElementById('detailMainAction');
            if (mainAction) mainAction.innerHTML = `<i class="fa-solid fa-check"></i> ${escapeHtml(t('view_menu'))}`;
            if (typeof refreshDetailCategoryAction === 'function') refreshDetailCategoryAction();
        }
        if (typeof temaArayuzunuGuncelle === 'function') temaArayuzunuGuncelle();
        if (typeof window.__refreshWheelSoundToggle === 'function') window.__refreshWheelSoundToggle();
    }

    function dilUygula() {
        // data-i18n elementleri
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = t(key);
        });
        // data-i18n-placeholder elementleri
	        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
	            const key = el.getAttribute('data-i18n-placeholder');
	            el.placeholder = t(key);
	        });
	        document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
	            const key = el.getAttribute('data-i18n-aria-label');
	            el.setAttribute('aria-label', t(key));
	        });
        // Dil butonu etiketi
        const langLabels = { tr: 'EN', en: 'AR', ar: 'TR' };
        document.getElementById('langBtnLabel').textContent = langLabels[aktifDil] || 'EN';
        // html lang attr
        document.getElementById('htmlRoot').lang = aktifDil;
        // RTL/LTR direction
        document.getElementById('htmlRoot').dir = aktifDil === 'ar' ? 'rtl' : 'ltr';
        document.getElementById('htmlRoot').setAttribute('data-dir', aktifDil === 'ar' ? 'rtl' : 'ltr');
        const menuHint = document.getElementById('menuAccessHintText');
        if (menuHint) {
            const hints = {
                tr: 'Menüye ulaşmak için tıklayınız',
                en: 'Click to access the menu',
                ar: 'انقر للوصول إلى القائمة'
            };
            menuHint.textContent = hints[aktifDil] || hints['tr'];
        }
        const categoryWheel = document.getElementById('catNav');
        if (categoryWheel) {
            categoryWheel.dataset.lang = aktifDil;
            categoryWheel.setAttribute('aria-label', t('category_menu_label'));
        }
        refreshLocalizedControls();
        // Tüm dinamik bileşenleri yenile
        buildNav();
        renderProducts();
        if (document.getElementById('productDetailModal')?.classList.contains('open')) {
            if (window.__activeDetailProduct) openProductDetail(null, { product: window.__activeDetailProduct, recordInteraction: false });
            else if (aktifDetayIndex !== null) openProductDetail(aktifDetayIndex, { recordInteraction: false });
        }
        skorGuncelle();
        if (document.getElementById('adminPanel').style.display === 'block') {
            apUrunListesiYenile();
            apKategoriListesiYenile();
            apYorumlariYenile();
        }
    }

    function dilDegistir() {
        const languages = ['tr', 'en', 'ar'];
        const currentIndex = languages.indexOf(aktifDil);
        const nextIndex = (currentIndex + 1) % languages.length;
        aktifDil = languages[nextIndex];
        localStorage.setItem('kfm_lang', aktifDil);
        dilUygula();
    }

    // ══════════════════════════════════════════════════════════════
    // ── VARSAYILAN VERİLER ──
    // ══════════════════════════════════════════════════════════════
    const varsayilanHeaderBg = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80';
    const varsayilanMenu = {
        "cat-kahve": {
            isim: "☕ Kahveler",
            urunler: [
                { id: 1, ad: "Türk Kahvesi", ad_en: "Turkish Coffee", aciklama: "Bol köpüğü ve yoğun aromasıyla geleneksel Türk kahvesi keyfi.", aciklama_en: "Traditional Turkish coffee with a rich aroma and a generous crema.", fiyat: 65, gorsel: "", stoktaVar: true, ekstralar: [] },
                { id: 2, ad: "Filtre Kahve", ad_en: "Filter Coffee", aciklama: "Dengeli gövdesi ve temiz bitişiyle gün boyu keyifle içilen filtre kahve.", aciklama_en: "A filter coffee with balanced body and a clean finish for all-day enjoyment.", fiyat: 75, gorsel: "", stoktaVar: true, ekstralar: [{ isim: "Süt", fiyat: 15 }] }
            ]
        },
        "cat-sutlu": {
            isim: "🥛 Sütlü Kahveler",
            urunler: [
                { id: 3, ad: "Latte Macchiato", ad_en: "Latte Macchiato", aciklama: "Katmanlı süt ve espresso görünümüyle hafif, zarif ve yumuşak içimli kahve.", aciklama_en: "A light, elegant coffee with layered milk and espresso and a smooth finish.", fiyat: 90, gorsel: "", stoktaVar: true, ekstralar: [{ isim: "Karamel", fiyat: 20 }, { isim: "Vanilya", fiyat: 20 }] }
            ]
        },
        "cat-soguk-kahve": {
            isim: "❄️ Soğuk Kahveler",
            urunler: [
                { id: 4, ad: "Iced Latte", ad_en: "Iced Latte", aciklama: "Sütlü ve yumuşak içimiyle sıcak günler için ideal soğuk latte.", aciklama_en: "An ideal iced latte for warm days, with a smooth and milky finish.", fiyat: 95, gorsel: "", stoktaVar: true, ekstralar: [{ isim: "Fındık Şurubu", fiyat: 20 }] }
            ]
        },
        "cat-tatli": {
            isim: "🍰 Tatlılar",
            urunler: [
                { id: 5, ad: "San Sebastian", ad_en: "San Sebastian Cheesecake", aciklama: "Kremamsı dokusu ve dengeli tatlılığıyla kahvenize eşlik eden özel cheesecake.", aciklama_en: "A special cheesecake with creamy texture and balanced sweetness to accompany your coffee.", fiyat: 130, gorsel: "", stoktaVar: true, ekstralar: [{ isim: "Ekstra Çikolata", fiyat: 35 }] }
            ]
        },
        "cat-cay": { isim: "🫖 Çaylar", urunler: [] },
        "cat-soguk-icecek": { isim: "🧃 İçecekler", urunler: [] },
        "cat-yiyecek": { isim: "🥪 Yiyecekler", urunler: [] }
    };
    const varsayilanWifi = { ad: "Keyfimce_WiFi", sifre: "keyfimce2024" };
    const varsayilanSifre = "1999";
    const PRESS_MS = 10000;
    const gorselHavuzu = {
        "cat-kahve": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
        "cat-sutlu": "https://images.unsplash.com/photo-1593444201283-e02abb57c568?auto=format&fit=crop&w=400&q=80",
        "cat-soguk-kahve": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80",
        "cat-tatli": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
        "cat-cay": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
        "cat-soguk-icecek": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
        "cat-yiyecek": "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=400&q=80",
        "cat-nargile": "hookah-welcome-3d-clean.png"
    };

    // ══════════════════════════════════════════════════════════════
    // ── LOCALSTORAGE ──
    // ══════════════════════════════════════════════════════════════
    function ls(key, def) {
        try {
            const raw = localStorage.getItem(key);
            if (raw === null) return def;
            const parsed = JSON.parse(raw);
            return parsed === null || parsed === undefined ? def : parsed;
        } catch { return def; }
    }

    function lsSave(key, val) {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
    }

    if (!localStorage.getItem('kfm_menu')) lsSave('kfm_menu', varsayilanMenu);
    if (!localStorage.getItem('kfm_yorumlar')) lsSave('kfm_yorumlar', []);
    if (!localStorage.getItem('kfm_wifi')) lsSave('kfm_wifi', varsayilanWifi);
    if (!localStorage.getItem('kfm_asifre')) lsSave('kfm_asifre', varsayilanSifre);
    if (!localStorage.getItem('kfm_headerBg')) lsSave('kfm_headerBg', varsayilanHeaderBg);
    if (!localStorage.getItem('kfm_hizliSiparis')) lsSave('kfm_hizliSiparis', []);

    let menuData    = ls('kfm_menu', varsayilanMenu);
    let yorumData   = ls('kfm_yorumlar', []);
    let wifiData    = ls('kfm_wifi', varsayilanWifi);
    let adminSifre  = ls('kfm_asifre', varsayilanSifre);
    let headerBgUrl = ls('kfm_headerBg', varsayilanHeaderBg);
    let hizliSiparis = ls('kfm_hizliSiparis', []);
    const KFM_STOCK_VISIBILITY_VERSION = 26;
    let hideOutOfStock = ls('kfm_hide_out_of_stock', true);
    if (Number(ls('kfm_stock_visibility_version', 0)) < KFM_STOCK_VISIBILITY_VERSION) {
        hideOutOfStock = true;
        lsSave('kfm_hide_out_of_stock', true);
        lsSave('kfm_stock_visibility_version', KFM_STOCK_VISIBILITY_VERSION);
    }
    let apStokFiltresi = 'all';

    // GitHub ayarları (localStorage'da şifreli değil, kullanıcı kendi cihazında saklıyor)
    let ghSettings = ls('kfm_gh', { token: '', user: '', repo: '', file: 'keyfimce_menu_ayarlar.json' });

    function saveAll() {
        lsSave('kfm_menu', menuData);
        lsSave('kfm_yorumlar', yorumData);
        lsSave('kfm_wifi', wifiData);
        lsSave('kfm_asifre', adminSifre);
        lsSave('kfm_headerBg', headerBgUrl);
        lsSave('kfm_hizliSiparis', hizliSiparis);
        lsSave('kfm_frame_settings', kfmFrameSettings);
        lsSave('kfm_hide_out_of_stock', hideOutOfStock);
        if (document.getElementById('adminPanel')?.style.display !== 'none') kfmAdminPublishMetricsGuncelle();
        // GitHub ayarları mevcutsa otomatik push
        if (ghSettings.token && ghSettings.user && ghSettings.repo && ghSettings.file) {
            githubPush();
        }
    }

    function headerBgUygula() {
        document.getElementById('mainHeader').style.backgroundImage = `url('${headerBgUrl}')`;
    }

    let aktifKat = "cat-all";
    let aktifDetayIndex = null;
    let secilenPuan = 5;

    function tumMenudeAra() {
      if (aktifKat === 'cat-all') return;
      kategoriGit('cat-all');
      const input = document.getElementById('searchInput');
      input?.focus({ preventScroll: true });
    }

    // ══════════════════════════════════════════════════════════════
    // ── TOAST ──
    // ══════════════════════════════════════════════════════════════
	    function toast(msg, dur = 2500) {
	        const el = document.getElementById('toast');
	        if (!el) return;
	        el.textContent = String(msg || '');
	        el.classList.add('show');
	        clearTimeout(el._t);
	        el._t = setTimeout(() => el.classList.remove('show'), dur);
	    }

        function kfmCartAddToast(productName, quantity) {
            const el = document.getElementById('cartAddToast');
            const label = document.getElementById('cartAddToastProduct');
            if (!el || !label) return;
            const count = Math.max(1, Number(quantity) || 1);
            const name = String(productName || (aktifDil === 'en' ? 'Product' : 'Ürün'));
            label.textContent = count > 1
                ? `${name} · ${count} adet sepette`
                : name;
            kfmCartIconBounce();
            el.classList.add('is-visible');
            clearTimeout(el._t);
            el._t = setTimeout(() => el.classList.remove('is-visible'), 2800);
        }

        function kfmCartIconBounce() {
            const icon = document.getElementById('cartAddToastIcon');
            if (!icon || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            icon.classList.remove('is-bouncing');
            void icon.offsetWidth;
            icon.classList.add('is-bouncing');
        }

    function modalAc(id)   { document.getElementById(id).classList.add('open'); }
    function modalKapat(id){ document.getElementById(id).classList.remove('open'); }

    // ══════════════════════════════════════════════════════════════
    // ── TEMA SİSTEMİ: OTOMATİK / AÇIK / KOYU ──
    // ══════════════════════════════════════════════════════════════
    const TEMA_KEY = 'keyfimce-theme-mode';
    let temaModu = localStorage.getItem(TEMA_KEY) || 'auto';

    // Otomatik mod saat bazlıdır: 07:00-18:59 açık, 19:00-06:59 koyu tema.
    function otomatikKoyuZamanMi() {
        const saat = new Date().getHours();
        return saat >= 19 || saat < 7;
    }

    function temaArayuzunuGuncelle() {
        const root = document.documentElement;
        const otomatikGece = temaModu === 'auto' && otomatikKoyuZamanMi();
        const uygulananTema = temaModu === 'dark' || otomatikGece ? 'dark' : 'light';
        root.setAttribute('data-theme', uygulananTema);
        root.setAttribute('data-theme-mode', temaModu);
        const icon = document.getElementById('themeToggleIcon');
        const btn = document.getElementById('themeToggleBtn');
        if (!icon || !btn) return;
        const names = { auto: t('theme_auto'), light: t('theme_light'), dark: t('theme_dark') };
        const icons = { auto: 'fa-circle-half-stroke', light: 'fa-sun', dark: 'fa-moon' };
        icon.className = `fa-solid ${icons[temaModu]}`;
        const durum = temaModu === 'auto' ? (uygulananTema === 'dark' ? t('theme_now_dark') : t('theme_now_light')) : '';
        btn.title = `${t('theme_label')}: ${names[temaModu]}${durum ? ` (${durum})` : ''}`;
        btn.setAttribute('aria-label', `${names[temaModu]}${durum ? `, ${durum}` : ''}. ${t('theme_change_hint')}`);
    }

    function temaDegistir() {
        const modes = ['auto', 'dark', 'light'];
        temaModu = modes[(modes.indexOf(temaModu) + 1) % modes.length];
        localStorage.setItem(TEMA_KEY, temaModu);
        temaArayuzunuGuncelle();
        renderProducts();
    }
    temaArayuzunuGuncelle();
    setInterval(() => {
        if (temaModu === 'auto') temaArayuzunuGuncelle();
    }, 60 * 1000);

    // ══════════════════════════════════════════════════════════════
    // ── DEBOUNCE ARAMA (300ms) ──
    // ══════════════════════════════════════════════════════════════
    let _aramaTimer = null;
    function debounceArama() {
        clearTimeout(_aramaTimer);
        _aramaTimer = setTimeout(() => renderProducts(), 300);
    }

    // ══════════════════════════════════════════════════════════════
    // ── GITHUB WRITEBACK ──
    // ══════════════════════════════════════════════════════════════
    function ghSetStatus(durum, mesaj) {
        const ikonlar = { idle: 'fa-circle-check', saving: 'fa-spinner fa-spin', error: 'fa-circle-xmark' };
        const ikon = ikonlar[durum] || 'fa-circle-check';
        const badge = document.getElementById('ghStatusBadge');
        if (badge) {
            badge.className = 'gh-status ' + durum;
            badge.innerHTML = `<i class="fa-solid ${ikon}"></i> ${mesaj}`;
        }
        const quick = document.getElementById('adminPublishQuickStatus');
        if (quick) {
            quick.dataset.state = durum;
            quick.innerHTML = `<i class="fa-solid ${ikon}"></i> ${mesaj}`;
        }
    }

    function kfmAdminPublishMetricsGuncelle() {
        const categories = Object.values(menuData || {});
        const products = categories.flatMap(category => Array.isArray(category?.urunler) ? category.urunler : []);
        const missing = products.filter(product => !String(product?.gorsel || '').trim()).length;
        const setText = (id, value) => {
            const element = document.getElementById(id);
            if (element) element.textContent = String(value);
        };
        setText('adminPublishProductCount', products.length);
        setText('adminPublishCategoryCount', categories.length);
        setText('adminPublishMissingImageCount', missing);
        const summary = document.getElementById('adminPublishSummary');
        if (!summary) return;
        summary.textContent = missing
            ? `${products.length} ürün ve ${categories.length} kategori hazır · ${missing} üründe görsel eksik; yayın yine yapılabilir.`
            : `${products.length} ürün ve ${categories.length} kategori hazır · görsel ön kontrolü temiz.`;
    }

    function kfmAdminGitHubAyarlarinaGit() {
        const section = document.getElementById('ghPublishBtn')?.closest('.admin-accordion-section');
        if (section && !section.classList.contains('active')) section.classList.add('active');
        section?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.setTimeout(() => document.getElementById('apGhToken')?.focus({ preventScroll: true }), 180);
    }

    async function kfmAdminHerkeseYayinla() {
        kfmAdminPublishMetricsGuncelle();
        if (!ghSettings.token || !ghSettings.user || !ghSettings.repo || !ghSettings.file) {
            ghSetStatus('error', 'Yayın ayarı eksik');
            kfmAdminGitHubAyarlarinaGit();
            toast('Yayın için önce GitHub ayarlarını kaydedin.');
            return false;
        }
        const button = document.getElementById('adminPublishQuickBtn');
        const original = button?.innerHTML || '';
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Yayınlanıyor...';
        }
        ghSetStatus('saving', 'Yayınlanıyor...');
        const ok = await githubPush({ manual: true });
        if (button) {
            button.disabled = false;
            button.innerHTML = original || '<i class="fa-solid fa-cloud-arrow-up mr-2"></i>Herkese Yayınla';
        }
        if (ok) {
            ghSetStatus('idle', 'Herkese yayınlandı');
            toast('Değişiklikler herkese açık siteye gönderildi.');
        } else {
            ghSetStatus('error', 'Yayın başarısız');
            toast('Yayın tamamlanamadı. Ayarları ve bağlantıyı kontrol edin.');
        }
        return ok;
    }

    /* KFM_V24_GITHUB_JSON_PUBLISH
       JSON şemasını koruyan, UTF-8 güvenli ve tek seferde yayınlanan GitHub akışı. */
    let ghPushInFlight = null;
    let ghPushQueued = false;

    // KFM_PUBLISH_VERIFY_V1 — Yayın sonrası gerçek Pages/CDN kontrolü.
    // 1) Pages üretim alan adından no-store ile dosya okunur; GitHub commit
    //    SHA’sı ile karşılaştırılır. Eski dosya geldiyse 2 denemede kısa
    //    beklemeyle tekrar bakılır.
    // 2) Doğrulama, kullanıcının yayını engellemez; sonucu rozet ve konsolda bildirir.
    async function kfmGithubPublishDogrula(file, expectedContent) {
        const { user, repo } = ghSettings;
        const result = { ok: false, cdnSawCommit: false, commit: null, error: null };
        try {
            const headers = { 'Accept': 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
            const apiUrl = `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}/commits?path=${encodeURIComponent(file)}&per_page=1`;
            const commitResp = await fetch(apiUrl, { headers, cache: 'no-store' });
            if (commitResp.ok) {
                const commits = await commitResp.json();
                result.commit = commits?.[0]?.sha || null;
            }
            const liveFileUrl = `https://${encodeURIComponent(user)}.github.io/${encodeURIComponent(repo)}/${file.split('/').map(encodeURIComponent).join('/')}`;
            for (let attempt = 0; attempt < 2; attempt++) {
                if (attempt > 0) await new Promise(resolve => window.setTimeout(resolve, 2500));
                try {
                    const bustUrl = new URL(liveFileUrl, window.location.href);
                    bustUrl.searchParams.set('dogrula', `${Date.now()}-${attempt}`);
                    const liveResp = await fetch(bustUrl.toString(), { cache: 'no-store', headers: { 'Accept': 'application/json' } });
                    if (!liveResp.ok) continue;
                    const liveText = await liveResp.text();
                    if (liveText.trim() === expectedContent.trim()) { result.ok = true; result.cdnSawCommit = true; return result; }
                } catch (liveErr) {
                    result.error = liveErr;
                }
            }
            // İçerik eşleşmedi ama yazma başarılı: Pages yayını genelde birkaç
            // dakikada tamamlanır; ok=true ile “sürüyor” durumuna düşer.
            result.ok = true;
            return result;
        } catch (err) {
            result.error = err;
            result.ok = true; // doğrulama altyapısı başarısız olsa da yazma başarılıdır
            return result;
        }
    }

    function kfmGithubEncodeUtf8(value) {
        const bytes = new TextEncoder().encode(value);
        let binary = '';
        for (let i = 0; i < bytes.length; i += 0x8000) {
            binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
        }
        return btoa(binary);
    }

    function kfmGithubDecodeUtf8(base64) {
        const clean = String(base64 || '').replace(/\\s/g, '');
        const binary = atob(clean);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return new TextDecoder('utf-8').decode(bytes);
    }

    function kfmGithubPayloadFromState(remotePayload = {}) {
        // Uzak JSON’daki bilinmeyen alanları koru; bilinen alanları güncel panel verisiyle değiştir.
        return Object.assign({}, remotePayload, {
            menuYedek: menuData,
            // Bağlantı/kopyalama için gerçek Wi-Fi parolasını taşı; admin parolası ve token dahil edilmez.
            wifiYedek: { ad: wifiData?.ad || '', sifre: String(wifiData?.sifre || '') },
            headerBgYedek: headerBgUrl,
            hizliSiparisYedek: hizliSiparis,
            frameYedek: kfmFrameSettings
        });
    }

    async function githubPush(options = {}) {
        const { token, user, repo, file } = ghSettings;
        if (!token || !user || !repo || !file) return false;

        // Formda art arda kaydetmeye basılırsa aynı dosyaya paralel PUT gönderme.
        if (ghPushInFlight) {
            ghPushQueued = true;
            if (options.manual) ghSetStatus('saving', 'Sıraya alındı...');
            return ghPushInFlight;
        }

        ghPushInFlight = (async () => {
            ghSetStatus('saving', 'Kaydediliyor...');
            const apiUrl = `https://api.github.com/repos/${encodeURIComponent(user)}/${encodeURIComponent(repo)}/contents/${file.split('/').map(encodeURIComponent).join('/')}`;
            const headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/vnd.github+json',
                'X-GitHub-Api-Version': '2022-11-28'
            };

            try {
                // SHA ve mevcut içeriği al: böylece JSON’daki bilinmeyen alanlar ve yazım düzeni korunur.
                let sha = null;
                let remotePayload = {};
                const getResp = await fetch(apiUrl, { headers });
                if (getResp.ok) {
                    const getData = await getResp.json();
                    sha = getData.sha || null;
                    if (getData.content) {
                        try {
                            remotePayload = JSON.parse(kfmGithubDecodeUtf8(getData.content));
                        } catch (decodeError) {
                            console.warn('GitHub JSON okunamadı; güncel panel verisiyle yeni gövde oluşturulacak.', decodeError);
                        }
                    }
                } else if (getResp.status !== 404) {
                    throw new Error(`GitHub dosya okuma hatası: ${getResp.status}`);
                }

                const payload = kfmGithubPayloadFromState(remotePayload);
                const content = JSON.stringify(payload, null, 2);
                const body = {
                    message: `Keyfimce Kafem: menü ve çerçeve ayarlarını güncelle — ${new Date().toLocaleString('tr-TR')}`,
                    content: kfmGithubEncodeUtf8(content),
                    branch: 'main'
                };
                if (sha) body.sha = sha;

                const putResp = await fetch(apiUrl, {
                    method: 'PUT',
                    headers: { ...headers, 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                if (!putResp.ok) {
                    const errData = await putResp.json().catch(() => ({}));
                    console.error('GitHub push hatası:', putResp.status, errData);
                    ghSetStatus('error', putResp.status === 409 ? 'Çakışma; tekrar deneyin' : 'Push hatası!');
                    return false;
                }

                // KFM_PUBLISH_VERIFY_V1 — GitHub başarılı yazma mesajı tek başına
                // yeterli değildir; Pages/CDN’in gerçekten güncel dosyayı
                // yayınladığı canlı URL okumayla doğrulanır.
                const verify = await kfmGithubPublishDogrula(file, content);
                if (verify.ok) {
                    ghSetStatus('idle', verify.cdnSawCommit
                        ? 'Senkronize ✓ (canlı doğrulandı)'
                        : 'Senkronize ✓ (canlı doğrulama sürüyor)');
                    console.log(`GitHub JSON senkronizasyonu başarılı: ${file} · commit ${verify.commit?.slice(0, 7) || '?'} · canlı doğrulama: ${verify.cdnSawCommit ? 'güncel' : 'CDN henüz eski'}`);
                } else {
                    // Yazma başarılı, yalnızca canlı yayın doğrulaması tamamlanamadı:
                    // kullanıcıya hata değil, açık durum bildirilir.
                    ghSetStatus('idle', 'Kaydedildi; canlı yayın kontrol ediliyor');
                    console.warn('GitHub yazıldı ama canlı yayın doğrulaması tamamlanamadı.', verify.error);
                }
                return true;
            } catch (err) {
                console.error('GitHub push exception:', err);
                ghSetStatus('error', 'Bağlantı hatası!');
                return false;
            } finally {
                ghPushInFlight = null;
                if (ghPushQueued) {
                    ghPushQueued = false;
                    window.setTimeout(() => githubPush(), 80);
                }
            }
        })();

        return ghPushInFlight;
    }

    function ghAyarKaydet() {
        const token = document.getElementById('apGhToken').value.trim();
        const user  = document.getElementById('apGhUser').value.trim();
        const repo  = document.getElementById('apGhRepo').value.trim();
        const file  = document.getElementById('apGhFile').value.trim() || 'keyfimce_menu_ayarlar.json';
        if (!token || !user || !repo) {
            toast('❌ Token, kullanıcı adı ve repo adı zorunlu');
            return;
        }
        ghSettings = { token, user, repo, file };
        lsSave('kfm_gh', ghSettings);
        toast(t('toast_gh_settings_saved'));
        ghSetStatus('idle', 'Hazır');
    }

    async function ghManuelPush() {
        if (!ghSettings.token || !ghSettings.user || !ghSettings.repo || !ghSettings.file) {
            toast(t('toast_gh_no_settings'));
            return;
        }
        const button = document.getElementById('ghPublishBtn');
        if (button) {
            button.disabled = true;
            button.classList.add('opacity-70');
        }
        const ok = await githubPush({ manual: true });
        if (button) {
            button.disabled = false;
            button.classList.remove('opacity-70');
        }
        toast(t(ok ? 'toast_gh_push_ok' : 'toast_gh_push_fail'));
    }

    // ══════════════════════════════════════════════════════════════
    // ── JSON EXPORT & IMPORT ──
    // ══════════════════════════════════════════════════════════════
    function sistemiDisariAktarJSON() {
        const tumSistemYedek = {
            menuYedek: menuData,
            wifiYedek: { ad: wifiData.ad, sifre: "********" }, // Yerel dışa aktarma dosyasında parolayı gizle
            headerBgYedek: headerBgUrl,
            hizliSiparisYedek: hizliSiparis,
            frameYedek: kfmFrameSettings
            // Güvenlik nedeniyle admin şifresi ve GitHub token yedeğe dahil edilmedi.
        };
        const veriStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tumSistemYedek, null, 2));
        const a = document.createElement('a');
        a.setAttribute("href", veriStr);
        a.setAttribute("download", "keyfimce_menu_ayarlar.json");
        document.body.appendChild(a);
        a.click();
        a.remove();
        toast(t('toast_json_downloaded'));
    }

    function sistemiIceriAktarJSON(event) {
        const dosya = event.target.files[0];
        if (!dosya) return;
        const okuyucu = new FileReader();
        okuyucu.onload = function(e) {
            try {
                const yuklenenVeri = JSON.parse(e.target.result);
                if (yuklenenVeri.menuYedek) {
                    menuData    = yuklenenVeri.menuYedek;
                    if (yuklenenVeri.wifiYedek) {
                        wifiData.ad = yuklenenVeri.wifiYedek.ad || wifiData.ad;
                        if (yuklenenVeri.wifiYedek.sifre && yuklenenVeri.wifiYedek.sifre !== "********") {
                            wifiData.sifre = yuklenenVeri.wifiYedek.sifre;
                        }
                    }
                    if (yuklenenVeri.headerBgYedek) headerBgUrl = yuklenenVeri.headerBgYedek;
                    headerBgUrl = yuklenenVeri.headerBgYedek || varsayilanHeaderBg;
                    if (yuklenenVeri.hizliSiparisYedek) hizliSiparis = yuklenenVeri.hizliSiparisYedek;
                    if (yuklenenVeri.frameYedek) kfmFrameSettings = kfmCloneFrameSettings(yuklenenVeri.frameYedek);
                    saveAll();
                    buildNav();
                    renderProducts();
                    wifiEkraniGuncelle();
                    apWifiDoldur();
                    apUrunListesiYenile();
                    apKategoriListesiYenile();
                    apFrameLibraryYenile();
                    apYeniUrunOnizlemeGuncelle();
                    apQuickKategorileriDoldur();
                    apQuickListesiYenile();
                    headerBgUygula();
                    document.getElementById('apAdminSifre').value = adminSifre;
                    document.getElementById('apHeaderBg').value   = headerBgUrl;
                    toast(t('toast_json_loaded'));
                } else { toast('❌ Hatalı veya eksik JSON formatı.'); }
            } catch { toast('❌ Dosya okunurken bir hata oluştu.'); }
        };
        okuyucu.readAsText(dosya);
        event.target.value = '';
    }

    // ══════════════════════════════════════════════════════════════
    // ── HEADER BG ──
    // ══════════════════════════════════════════════════════════════
    function headerBgKaydet() {
        const yeniUrl = document.getElementById('apHeaderBg').value.trim();
        if (!yeniUrl) { toast('❌ Lütfen geçerli bir görsel URL girin'); return; }
        headerBgUrl = yeniUrl;
        saveAll();
        headerBgUygula();
        toast(t('toast_header_updated'));
    }

    // ══════════════════════════════════════════════════════════════
    // ── WiFi ──
    // ══════════════════════════════════════════════════════════════
    function wifiEkraniGuncelle() {
        document.getElementById('wifiDisplayName').textContent = wifiData.ad;
        document.getElementById('wifiNameDisplay').textContent = wifiData.ad;
        document.getElementById('wifiPassDisplay').textContent = wifiData.sifre;
    }

    // wifiModalAc QR üreten güncel tanımla aşağıda verilmiştir.

    function kfmGercekWifiSifresi() {
        const sifre = String(wifiData?.sifre || '').trim();
        return /^(\*{3,}|•{3,})$/.test(sifre) ? '' : sifre;
    }

    function wifiSifreyiKopyala() {
        const sifre = kfmGercekWifiSifresi();
        if (!sifre) { toast('Wi-Fi şifresi henüz yayınlanmamış.'); return; }
        if (navigator.clipboard) {
            navigator.clipboard.writeText(sifre)
                .then(() => toast(t('toast_wifi_copied')))
                .catch(() => fallbackKopyala(sifre));
        } else { fallbackKopyala(sifre); }
    }

    function fallbackKopyala(text) {
        const el = document.createElement("textarea");
        el.value = text;
        el.style.position = 'fixed';
        el.style.opacity = '0';
        document.body.appendChild(el);
        el.focus();
        el.select();
        try { document.execCommand('copy'); toast(t('toast_wifi_copied')); }
        catch { toast('Şifre: ' + text, 4000); }
        document.body.removeChild(el);
    }

    function kfmWifiQrMetni() {
        const escapeWifi = value => String(value || '').replace(/[\\;,:]/g, '\\$&');
        const ssid = String(wifiData?.ad || '').trim();
        const password = kfmGercekWifiSifresi();
        return ssid && password ? `WIFI:T:WPA;S:${escapeWifi(ssid)};P:${escapeWifi(password)};;` : '';
    }
    function wifiQrUret() {
        const box = document.getElementById('wifiQrCode');
        if (!box) return;
        box.replaceChildren();
        const text = kfmWifiQrMetni();
        if (!text || typeof QRCode === 'undefined') {
            box.textContent = 'QR hazır değil';
            return;
        }
        new QRCode(box, { text, width: 112, height: 112, colorDark: '#2c1a12', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
    }
    function wifiQrGorselUrl() {
        const box = document.getElementById('wifiQrCode');
        return box?.querySelector('canvas')?.toDataURL('image/png') || box?.querySelector('img')?.src || '';
    }
    function wifiQrIndir() {
        const url = wifiQrGorselUrl();
        if (!url) return toast('Önce geçerli Wi-Fi bilgisiyle QR kodu oluşturun.');
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'keyfimce-wifi-qr.png';
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
    }
    function wifiQrYazdir() {
        const url = wifiQrGorselUrl();
        if (!url) return toast('Önce geçerli Wi-Fi bilgisiyle QR kodu oluşturun.');
        const popup = window.open('', '_blank', 'noopener,noreferrer,width=420,height=520');
        if (!popup) return toast('Yazdırma penceresi engellendi.');
        popup.document.write(`<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>Keyfimce Wi-Fi</title><style>body{font-family:Arial;text-align:center;padding:28px;color:#2c1a12}img{width:280px;height:280px}h2{font-size:20px}</style></head><body><h2>${escapeHtml(wifiData.ad)} Wi-Fi</h2><img src="${url}" alt="Wi-Fi QR kodu"><p>Kameranızla okutun ve ağa bağlanın.</p><script>window.onload=()=>window.print()<\/script></body></html>`);
        popup.document.close();
    }
    function wifiModalAc() {
        wifiEkraniGuncelle();
        wifiQrUret();
        modalAc('wifiModal');
    }
    function wifiBaglan() {
        const sifre = kfmGercekWifiSifresi();
        if (!sifre) { toast('Wi-Fi şifresi henüz yayınlanmamış.'); return; }
        if (navigator.clipboard) navigator.clipboard.writeText(sifre).catch(() => {});
        toast('📋 ' + (aktifDil === 'en' ? 'Password copied! Connect via Wi-Fi settings.' : 'Şifre kopyalandı! Cihazınızın Wi-Fi ayarlarından ağa bağlanabilirsiniz.'), 3500);
    }

    const KFM_TABLE_NAME_PATTERN = /^[A-Za-z0-9ÇĞİÖŞÜçğıöşü _-]{1,32}$/;

    function kfmMasaParametresiniUygula() {
        const masa = String(new URLSearchParams(window.location.search).get('masa') || '').trim();
        if (!masa || !KFM_TABLE_NAME_PATTERN.test(masa)) return;
        ['orderTableNumber', 'waiterTableNumber'].forEach(id => {
            const input = document.getElementById(id);
            if (input) input.value = masa;
        });
        document.documentElement.dataset.kfmMasa = masa;
    }

    function kfmMasaQrUrl(masa) {
        const url = new URL(window.location.href);
        url.hash = '';
        url.searchParams.set('masa', masa);
        return url.toString();
    }

    function kfmMasaQrOlustur() {
        const input = document.getElementById('apQrTableNumber');
        const status = document.getElementById('apQrStatus');
        const masa = String(input?.value || '').trim();
        if (!KFM_TABLE_NAME_PATTERN.test(masa)) {
            status.textContent = 'Masa adı 1–32 karakter olmalı; yalnız harf, sayı, boşluk, tire ve alt çizgi kullanılabilir.';
            status.style.color = '#b42318';
            return;
        }
        if (typeof QRCode === 'undefined') {
            status.textContent = 'QR kod kütüphanesi yüklenemedi. İnternet bağlantısını kontrol edip tekrar deneyin.';
            status.style.color = '#b42318';
            return;
        }
        const url = kfmMasaQrUrl(masa);
        const canvas = document.getElementById('apTableQrCanvas');
        canvas.replaceChildren();
        new QRCode(canvas, { text: url, width: 240, height: 240, colorDark: '#2c1a12', colorLight: '#ffffff', correctLevel: QRCode.CorrectLevel.M });
        document.getElementById('apQrTableLabel').textContent = `Masa ${masa}`;
        document.getElementById('apQrUrlText').textContent = url;
        document.getElementById('apTableQrOutput').hidden = false;
        status.textContent = 'QR kod hazır. İndirerek masaya koyabilir veya yazdırabilirsiniz.';
        status.style.color = '#316e49';
    }

    function kfmMasaQrGorselUrl() {
        const container = document.getElementById('apTableQrCanvas');
        const canvas = container?.querySelector('canvas');
        const image = container?.querySelector('img');
        return canvas?.toDataURL('image/png') || image?.src || '';
    }

    function kfmMasaQrIndir() {
        const imageUrl = kfmMasaQrGorselUrl();
        const label = String(document.getElementById('apQrTableLabel')?.textContent || 'masa').replace(/[^A-Za-z0-9ÇĞİÖŞÜçğıöşü_-]+/g, '-');
        if (!imageUrl) return toast('⚠️ Önce bir masa QR kodu oluşturun.');
        const anchor = document.createElement('a');
        anchor.href = imageUrl;
        anchor.download = `keyfimce-${label.toLocaleLowerCase('tr-TR')}-qr.png`;
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();
    }

    function kfmMasaQrYazdir() {
        const imageUrl = kfmMasaQrGorselUrl();
        const label = String(document.getElementById('apQrTableLabel')?.textContent || '').trim();
        if (!imageUrl || !label) return toast('⚠️ Önce bir masa QR kodu oluşturun.');
        const popup = window.open('', '_blank', 'noopener,noreferrer,width=420,height=540');
        if (!popup) return toast('⚠️ Yazdırma penceresi engellendi. Tarayıcı açılır pencere izni verin.');
        popup.document.write(`<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>${label} QR</title><style>body{font-family:Arial,sans-serif;text-align:center;padding:28px;color:#2c1a12}img{width:280px;height:280px}p{font-size:16px;font-weight:700}</style></head><body><p>${label}</p><img src="${imageUrl}" alt="${label} QR kodu"><p>Menüyü açmak ve sipariş vermek için okutun</p><script>window.onload=()=>window.print()<\/script></body></html>`);
        popup.document.close();
    }

    function wifiKaydet() {
        const ad    = document.getElementById('apWifiAd').value.trim();
        const sifre = document.getElementById('apWifiSifre').value.trim();
        if (!ad || !sifre) { toast('❌ Ad ve şifre boş olamaz'); return; }
        wifiData = { ad, sifre };
        saveAll();
        wifiEkraniGuncelle();
        toast(t('toast_wifi_updated'));
    }

    function sifreKaydet() {
        const yeniSifre = document.getElementById('apAdminSifre').value.trim();
        if (!yeniSifre) { toast('❌ Şifre alanı boş bırakılamaz'); return; }
        adminSifre = yeniSifre;
        saveAll();
        toast(t('toast_pass_updated'));
    }

    // ══════════════════════════════════════════════════════════════
    // ── DİNAMİK KATEGORİ YÖNETİMİ ──
    // ══════════════════════════════════════════════════════════════
    function kategoriEkle() {
        const id   = document.getElementById('apYeniKatId').value.trim().toLowerCase();
        const isim = document.getElementById('apYeniKatIsim').value.trim();
        if (!id || !isim) { toast(t('toast_cat_empty')); return; }
        if (/\s/.test(id)) { toast(t('toast_cat_invalid_id')); return; }
        if (menuData[id]) { toast(t('toast_cat_exists')); return; }
        menuData[id] = { isim, isim_en: translationsDict[isim] || isim, urunler: [] };
        saveAll();
        buildNav();
        apKategoriListesiYenile();
        document.getElementById('apYeniKatId').value   = '';
        document.getElementById('apYeniKatIsim').value = '';
        toast(t('toast_cat_added'));
    }

    function kategoriSil(id) {
        if (!menuData[id]) return;
        if (menuData[id].urunler && menuData[id].urunler.length > 0) {
            toast(t('toast_cat_has_products'));
            return;
        }
        const onay = aktifDil === 'en'
            ? `Delete category "${menuData[id].isim}"?`
            : `"${menuData[id].isim}" kategorisi silinecek. Emin misiniz?`;
        if (!confirm(onay)) return;
        delete menuData[id];
        // Aktif kategori silindiyse sıfırla
        if (aktifKat === id) aktifKat = 'cat-all';
        saveAll();
        buildNav();
        apKategoriListesiYenile();
        apUrunListesiYenile();
        toast(t('toast_cat_deleted'));
    }

    function apKategoriListesiYenile() {
        const box = document.getElementById('apKategoriListesi');
        if (!box) return;
        box.innerHTML = '';
        const keys = Object.keys(menuData);
        if (!keys.length) {
            box.innerHTML = '<p class="italic text-xs font-medium py-2" style="color:var(--muted2);">Henüz kategori yok.</p>';
            return;
        }
        keys.forEach(k => {
            const urunSayisi = menuData[k].urunler ? menuData[k].urunler.length : 0;
            box.insertAdjacentHTML('beforeend', `
              <div class="flex items-center justify-between glass border p-3 rounded-2xl shadow-sm">
                <div>
                  <p class="font-bold text-[13px]" style="color:var(--ink);">${escapeHtml((aktifDil === 'en' && menuData[k].isim_en) ? menuData[k].isim_en : menuData[k].isim)}</p>
                  <p class="text-[11px] font-medium" style="color:var(--muted2);">ID: ${escapeHtml(k)} · ${urunSayisi} ürün</p>
                </div>
                <button onclick="kategoriSil('${escapeHtml(k)}')"
                  class="px-3 py-2 rounded-xl text-[11px] font-bold active:scale-95 transition-transform shadow-sm flex-shrink-0"
                  style="background:#fef2f2; border:1px solid #fca5a5; color:#b91c1c;"
                  ${urunSayisi > 0 ? 'disabled title="Önce ürünleri silin" style="background:#f5f5f5;border-color:#e5e5e5;color:#aaa;cursor:not-allowed;"' : ''}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>`);
        });
    }

    // ══════════════════════════════════════════════════════════════
    // ── NAV ──
    // ══════════════════════════════════════════════════════════════
    function setTab(tab) {
        document.getElementById('bnav-menu').className = 'bnav-btn' + (tab === 'menu' ? ' active' : '');
        kategoriGit(aktifKat);
        if (tab === 'menu') {
            // Force scroll to menu start immediately
            scrollToMenuStart();
            // Fallback attempts
            setTimeout(function() {
                scrollToMenuStart();
            }, 100);
            setTimeout(function() {
                scrollToMenuStart();
            }, 300);
        }
    }

    function kategoriSeciciKapat(focusTrigger = false) {
        const picker = document.getElementById('categoryPicker');
        const trigger = document.getElementById('categoryPickerTrigger');
        const panel = document.getElementById('categoryPickerPanel');
        const searchInput = document.getElementById('categoryPickerSearch');
        const searchResults = document.getElementById('categoryPickerSearchResults');
        if (!picker || !trigger || !panel) return;
        picker.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
        if (searchInput) searchInput.value = '';
        if (searchResults) {
            searchResults.hidden = true;
            searchResults.innerHTML = '';
        }
        if (focusTrigger) trigger.focus();
    }

    function kategoriUrunAramaMetni(value) {
        return String(value || '')
            .toLocaleLowerCase(aktifDil === 'en' ? 'en-US' : 'tr-TR')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ı/g, 'i');
    }

    function kategoriUrunAramaSonuclariniGoster(rawQuery) {
        const results = document.getElementById('categoryPickerSearchResults');
        const status = document.getElementById('categoryPickerSearchStatus');
        const options = document.getElementById('categoryPickerOptions');
        if (!results || !status || !options) return;
        const query = kategoriUrunAramaMetni(rawQuery).trim();
        if (!query) {
            results.hidden = true;
            results.innerHTML = '';
            options.hidden = false;
            status.textContent = '';
            return;
        }
        const matches = [];
        Object.entries(menuData).forEach(([categoryKey, category]) => {
            const categoryName = (aktifDil === 'en' && category.isim_en) ? category.isim_en : category.isim;
            (category.urunler || []).forEach(product => {
                if (hideOutOfStock && product.stoktaVar === false) return;
                const productName = (aktifDil === 'en' && product.ad_en) ? product.ad_en : product.ad;
                const searchable = [product.ad, product.ad_en, productName, categoryName, ...(product.ekstralar || []).map(extra => extra.isim || extra.name)].join(' ');
                if (kategoriUrunAramaMetni(searchable).includes(query)) {
                    matches.push({ categoryKey, categoryName, product, productName });
                }
            });
        });
        const visibleMatches = matches.slice(0, 8);
        options.hidden = true;
        results.hidden = false;
        status.textContent = aktifDil === 'en'
            ? `${matches.length} matching products found.`
            : `${matches.length} eşleşen ürün bulundu.`;
        if (!visibleMatches.length) {
            results.innerHTML = `<div class="category-picker-search-empty">${aktifDil === 'en' ? 'No products found. Try another name.' : 'Ürün bulunamadı. Başka bir ad deneyin.'}</div>`;
            return;
        }
        results.innerHTML = '';
        visibleMatches.forEach(record => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'category-picker-search-result';
            button.innerHTML = `<span><strong>${escapeHtml(record.productName)}</strong><small>${escapeHtml(record.categoryName)}</small></span><span class="category-picker-search-price">${escapeHtml(String(record.product.fiyat))}₺</span>`;
            button.addEventListener('click', () => {
                kategoriSeciciKapat();
                setNavActive(record.categoryKey);
                kategoriGit(record.categoryKey);
                window.setTimeout(() => openProductDetail(null, { product: { ...record.product, catKey: record.categoryKey } }), 180);
            });
            results.appendChild(button);
        });
    }

    function kategoriSeciciKur() {
        const picker = document.getElementById('categoryPicker');
        const trigger = document.getElementById('categoryPickerTrigger');
        const panel = document.getElementById('categoryPickerPanel');
        const searchInput = document.getElementById('categoryPickerSearch');
        if (!picker || !trigger || !panel || picker.dataset.ready === 'true') return;
        picker.dataset.ready = 'true';
        trigger.addEventListener('click', () => {
            const willOpen = panel.hidden;
            picker.classList.toggle('is-open', willOpen);
            panel.hidden = !willOpen;
            trigger.setAttribute('aria-expanded', String(willOpen));
            if (willOpen) {
                picker.classList.remove('needs-attention');
                // Menü açılışı ekran klavyesini tetiklemez. Arama alanı yalnız kullanıcı dokunursa odaklanır.
            }
        });
        searchInput?.addEventListener('input', () => kategoriUrunAramaSonuclariniGoster(searchInput.value));
        document.addEventListener('click', event => {
            if (!picker.contains(event.target)) kategoriSeciciKapat();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape') kategoriSeciciKapat(true);
        });
    }

    function buildNav() {
        const nav   = document.getElementById('catNav');
        const pickerOptions = document.getElementById('categoryPickerOptions');
        const pickerTitle = document.getElementById('categoryPickerTitle');
        const pickerEyebrow = document.getElementById('categoryPickerEyebrow');
        const pickerHelp = document.getElementById('categoryPickerHelp');
        const pickerInstruction = document.getElementById('categoryPickerInstruction');
        const pickerTapHint = document.getElementById('categoryPickerTapHint');
        const pickerSearch = document.getElementById('categoryPickerSearch');
        kategoriSeciciKur();
        nav.dataset.lang = aktifDil;
        const apKat = document.getElementById('apKat');
        const apFil = document.getElementById('apMevcutKatFiltre');
        nav.innerHTML   = '';
        pickerOptions.innerHTML = '';
        apKat.innerHTML = '';
        apFil.innerHTML = `<option value="hepsi">✨ ${aktifDil === 'en' ? 'All Categories' : 'Tüm Kategoriler'}</option>`;
        if (aktifDil === 'en') {
            pickerEyebrow.textContent = 'TO SEE PRODUCTS';
            pickerTitle.textContent = 'MENU CATEGORIES';
            pickerHelp.textContent = 'Tap here to open coffee and other menus';
            pickerInstruction.textContent = 'Choose a category; products appear right below.';
            pickerTapHint.innerHTML = '<i class="fa-solid fa-hand-pointer" aria-hidden="true"></i> TAP HERE';
            pickerSearch.placeholder = 'Search products: latte, tea, dessert...';
            pickerSearch.setAttribute('aria-label', 'Search menu products');
        } else {
            pickerEyebrow.textContent = 'ÜRÜNLERİ GÖRMEK İÇİN';
            pickerTitle.textContent = 'MENÜ KATEGORİLERİ';
            pickerHelp.textContent = 'Buraya dokunun, kahve ve diğer menüler açılır';
            pickerInstruction.textContent = 'Bir kategori seçin; ürünler hemen aşağıda gösterilir.';
            pickerTapHint.innerHTML = '<i class="fa-solid fa-hand-pointer" aria-hidden="true"></i> DOKUNUN';
            pickerSearch.placeholder = 'Ürün ara: latte, çay, tatlı...';
            pickerSearch.setAttribute('aria-label', 'Menüde ürün ara');
        }
        if (pickerSearch?.value) kategoriUrunAramaSonuclariniGoster(pickerSearch.value);

        const pickerOptionEkle = (key, label, count) => {
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'category-picker-option' + (window.kfmLiveMenuSettings?.featured_category_id === key ? ' remote-featured' : '');
            option.dataset.categoryPickerKey = key;
            option.setAttribute('aria-pressed', String(key === aktifKat));
            option.innerHTML = `<span>${escapeHtml(label)}</span><span class="category-picker-count">${count}</span>`;
            option.onclick = () => {
                setNavActive(key);
                kategoriGit(key);
                kategoriSeciciKapat(true);
            };
            pickerOptions.appendChild(option);
        };

        const totalProducts = Object.values(menuData).reduce((sum, cat) => sum + ((cat && cat.urunler) ? cat.urunler.filter(item => !hideOutOfStock || item.stoktaVar !== false).length : 0), 0);
        const allBtn = document.createElement('div');
        allBtn.className = 'cat-pill' + (aktifKat === 'cat-all' ? ' active' : '');
        allBtn.id = 'cp-cat-all';
        allBtn.innerHTML = `<span class="cat-pill-label">${escapeHtml(t('all_menu'))}</span><span class="cat-pill-count">${totalProducts}</span>`;
        allBtn.onclick = () => { setNavActive('cat-all'); kategoriGit('cat-all'); };
        nav.appendChild(allBtn);
        pickerOptionEkle('cat-all', t('all_menu'), totalProducts);

        for (let k in menuData) {
            const btn = document.createElement('div');
            const count = (menuData[k].urunler || []).filter(item => !hideOutOfStock || item.stoktaVar !== false).length;
            const label = (aktifDil === 'en' && menuData[k].isim_en) ? menuData[k].isim_en : menuData[k].isim;
            btn.className = 'cat-pill' + (k === aktifKat ? ' active' : '') + (window.kfmLiveMenuSettings?.featured_category_id === k ? ' remote-featured' : '');
            btn.id = 'cp-' + k;
            btn.innerHTML = `<span class="cat-pill-label">${escapeHtml(label)}</span><span class="cat-pill-count">${count}</span>`;
            btn.onclick = () => { setNavActive(k); kategoriGit(k); };
            nav.appendChild(btn);
            pickerOptionEkle(k, label, count);

            const opt = document.createElement('option');
            opt.value = k;
            opt.textContent = (aktifDil === 'en' && menuData[k].isim_en) ? menuData[k].isim_en : menuData[k].isim;
            apKat.appendChild(opt.cloneNode(true));
            apFil.appendChild(opt);
        }
    }

    function setNavActive(k) {
        document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('[data-category-picker-key]').forEach(option => {
            option.setAttribute('aria-pressed', String(option.dataset.categoryPickerKey === k));
        });
        const el = document.getElementById('cp-' + k);
        if (el) {
            el.classList.add('active');
            if (window.__wheelGoToKey) window.__wheelGoToKey(k);
        }
    }


    // KFM_V15_ATMOSPHERE helpers
    const kfmV15ToneMap = {
        warm: new Set(['cat-kahve','cat-sutlu-kahve','cat-cay','cat-yiyecek','cat-icecek']),
        cool: new Set(['cat-soguk-kahve','cat-soguk-icecek','cat-smoothie','cat-milkshake']),
        sweet: new Set(['cat-tatli']),
        hookah: new Set(['cat-nargile'])
    };
    function getToneForCategory(catKey) {
        if (kfmV15ToneMap.cool.has(catKey)) return 'cool';
        if (kfmV15ToneMap.sweet.has(catKey)) return 'sweet';
        if (kfmV15ToneMap.hookah.has(catKey)) return 'hookah';
        return 'warm';
    }
    const kfmV15AtmosphereIntensity = { warm: '.48', cool: '.50', sweet: '.47', hookah: '.50' };
    function setCategoryAtmosphere(catKey) {
        const body = document.getElementById('pageBody') || document.body;
        if (!body) return;
        const tone = getToneForCategory(catKey);
        body.dataset.catTone = tone;
        body.dataset.catKey = catKey || 'cat-all';
        body.classList.add('kfm-atmosphere-ready');
        let layer = document.getElementById('kfmAtmosphereLayer');
        if (!layer) {
            layer = document.createElement('div');
            layer.id = 'kfmAtmosphereLayer';
            layer.setAttribute('aria-hidden', 'true');
            body.prepend(layer);
        }
        layer.dataset.tone = tone;
        layer.dataset.category = catKey || 'cat-all';
        layer.style.setProperty('--atmo-layer-opacity', kfmV15AtmosphereIntensity[tone] || '.46');
    }
    const kfmV15SceneMap = {
        warm: "url('category-scene-warm-clean.png')",
        cool: "url('category-scene-cool-clean.png')",
        sweet: "url('category-scene-sweet-clean.png')",
        hookah: "url('category-scene-sweet-clean.png')"
    };
    function getDetailSceneImage(catKey) {
        return kfmV15SceneMap[getToneForCategory(catKey)] || kfmV15SceneMap.warm;
    }

    function kategoriGit(k) {
        aktifKat = k;
        setCategoryAtmosphere(k);
        setNavActive(k);
        renderProducts();
        // Kategori seçimi ürünleri yeniler; sayfanın konumu kesinlikle değiştirilmez.
    }

    // ══════════════════════════════════════════════════════════════
    // ── ÜRÜNLER ──
    // ══════════════════════════════════════════════════════════════
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/\//g, '&#x2F;');
    }


    // UX PREMIUM PACKAGE V8
    function highlightSearchTerm(value, term) {
        const source = String(value || '');
        const query = String(term || '').trim();
        if (!query) return escapeHtml(source);
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const matcher = new RegExp(escapedQuery, 'gi');
        let output = '';
        let lastIndex = 0;
        source.replace(matcher, (match, offset) => {
            output += escapeHtml(source.slice(lastIndex, offset));
            output += `<mark class="search-highlight">${escapeHtml(match)}</mark>`;
            lastIndex = offset + match.length;
            return match;
        });
        output += escapeHtml(source.slice(lastIndex));
        return output;
    }

    // KFM_SMART_SUGGESTION_V14
    // Canlı hava verisi istemeden; gün saati, hafta tipi, mevsim hissi, stok,
    // son öneriler ve kullanıcının incelediği kategorileri dengeli biçimde kullanır.
    function readSuggestionList(key, fallback = []) {
        try {
            const value = JSON.parse(localStorage.getItem(key) || 'null');
            return Array.isArray(value) ? value : fallback;
        } catch (_) { return fallback; }
    }

    function productSuggestionKey(catKey, item) {
        return `${catKey}|${item?.ad || ''}|${item?.fiyat || ''}`;
    }

    function recordDailySuggestionInteraction(product) {
        if (!product) return;
        const catKey = product.catKey || aktifKat;
        if (!catKey || catKey === 'cat-all') return;
        const interaction = { catKey, key: productSuggestionKey(catKey, product), at: Date.now() };
        const current = readSuggestionList('kfm_suggestion_interactions');
        const next = [interaction, ...current.filter(item => item?.key !== interaction.key)].slice(0, 10);
        try { localStorage.setItem('kfm_suggestion_interactions', JSON.stringify(next)); } catch (_) { /* Depolama kapalıysa öneri varsayılan dengesiyle çalışır. */ }
    }

    function getDailySuggestion() {
        const now = new Date();
        const minutes = now.getHours() * 60 + now.getMinutes();
        const day = now.getDay();
        const isWeekend = day === 0 || day === 6;
        const month = now.getMonth() + 1;
        const isWarmSeason = month >= 5 && month <= 9;
        const isCoolSeason = month === 11 || month === 12 || month <= 2;
        const slotDefinitions = [
            { start: 360, end: 510, key: 'early', icon: 'fa-sun', categories: ['cat-kahve','cat-sutlu-kahve','cat-cay'], window: '06:00–08:29', tr: { label: 'Şu anın önerisi · Erken gün', detail: 'Güne sıcak ve dengeli bir başlangıç' }, en: { label: 'For now · Early day', detail: 'A warm, balanced start to the day' } },
            { start: 510, end: 660, key: 'morning', icon: 'fa-mug-hot', categories: ['cat-kahve','cat-sutlu-kahve','cat-kahve','cat-tatli'], window: '08:30–10:59', tr: { label: 'Şu anın önerisi · Sabah', detail: 'Sabah ritmine uygun seçilmiş bir eşlik' }, en: { label: 'For now · Morning', detail: 'Chosen to match the morning rhythm' } },
            { start: 660, end: 840, key: 'lunch', icon: 'fa-utensils', categories: ['cat-yiyecek','cat-icecek','cat-yiyecek','cat-soguk-icecek'], window: '11:00–13:59', tr: { label: 'Şu anın önerisi · Öğle', detail: 'Öğle molası için dengeli bir tercih' }, en: { label: 'For now · Lunch', detail: 'A balanced choice for the lunch break' } },
            { start: 840, end: 1020, key: 'afternoon', icon: 'fa-glass-water', categories: ['cat-soguk-kahve','cat-smoothie','cat-soguk-kahve','cat-milkshake','cat-tatli'], window: '14:00–16:59', tr: { label: 'Şu anın önerisi · Öğleden sonra', detail: 'Günün temposuna ferah bir ara' }, en: { label: 'For now · Afternoon', detail: 'A refreshing pause for the day' } },
            { start: 1020, end: 1200, key: 'sunset', icon: 'fa-mug-saucer', categories: ['cat-cay','cat-tatli','cat-cay','cat-nargile'], window: '17:00–19:59', tr: { label: 'Şu anın önerisi · Akşamüstü', detail: 'Gün batımına keyifli bir eşlik' }, en: { label: 'For now · Sunset', detail: 'A fitting companion for the evening' } },
            { start: 1200, end: 1380, key: 'evening', icon: 'fa-cloud', categories: ['cat-nargile','cat-cay','cat-nargile','cat-kahve'], window: '20:00–22:59', tr: { label: 'Şu anın önerisi · Akşam', detail: 'Akşam keyfi için özenle dengelendi' }, en: { label: 'For now · Evening', detail: 'Balanced for an unhurried evening' } }
        ];
        const slot = slotDefinitions.find(item => minutes >= item.start && minutes < item.end) || {
            key: 'night', icon: 'fa-moon', categories: ['cat-cay','cat-kahve','cat-cay','cat-tatli'], window: '23:00–05:59',
            tr: { label: 'Şu anın önerisi · Gece', detail: 'Gece sohbetlerine sakin bir eşlik' }, en: { label: 'For now · Night', detail: 'A calm companion for late conversations' }
        };
        const allAvailable = Object.keys(menuData).filter(catKey => catKey !== 'cat-all' && (menuData[catKey]?.urunler || []).some(item => item.stoktaVar !== false));
        if (!allAvailable.length) return null;

        const categoryWeight = new Map();
        const addWeight = (catKey, amount) => {
            if (!allAvailable.includes(catKey)) return;
            categoryWeight.set(catKey, (categoryWeight.get(catKey) || 0) + amount);
        };
        slot.categories.forEach(catKey => addWeight(catKey, 3));
        // Hafta sonu, brunch/atıştırmalık tarafını; hafta içi ise ritim içeceklerini dengeler.
        (isWeekend ? ['cat-yiyecek','cat-tatli','cat-kahve'] : ['cat-kahve','cat-cay','cat-soguk-kahve']).forEach(catKey => addWeight(catKey, 1.35));
        // Mevsim hissi gerçek hava durumu iddiası taşımaz; sıcak/soğuk sezon dengesidir.
        (isWarmSeason ? ['cat-soguk-kahve','cat-soguk-icecek','cat-smoothie','cat-milkshake'] : isCoolSeason ? ['cat-kahve','cat-sutlu-kahve','cat-cay','cat-tatli'] : ['cat-kahve','cat-cay','cat-tatli']).forEach(catKey => addWeight(catKey, 1.05));
        if (typeof aktifKategori === 'string' && aktifKategori !== 'cat-all') addWeight(aktifKategori, .55);

        const interactions = readSuggestionList('kfm_suggestion_interactions').filter(item => item && item.catKey && (Date.now() - Number(item.at || 0)) < 1000 * 60 * 60 * 48);
        interactions.slice(0, 4).forEach((item, index) => addWeight(item.catKey, Math.max(.35, 1.1 - index * .2)));

        const rawHistory = readSuggestionList('kfm_suggestion_history');
        const history = rawHistory.map(item => typeof item === 'string' ? { key: item, catKey: item.split('|')[0] } : item).filter(item => item && item.key);
        const recentProductKeys = new Set(history.slice(0, 14).map(item => item.key));
        const recentCategoryKeys = new Set(history.slice(0, 2).map(item => item.catKey).filter(Boolean));
        const dateKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        const bucket = Math.floor(minutes / 75);
        const selectionKey = `${dateKey}-${bucket}-${slot.key}-${isWeekend ? 'weekend' : 'weekday'}-${isWarmSeason ? 'warm' : isCoolSeason ? 'cool' : 'mild'}`;
        const hashFor = value => Array.from(value).reduce((total, char) => ((total * 33) ^ char.charCodeAt(0)) >>> 0, 5381);
        const hash = hashFor(selectionKey);

        const rankedCategories = allAvailable.map(catKey => {
            const noise = (hashFor(`${selectionKey}|${catKey}`) % 1000) / 1000;
            const repeatPenalty = recentCategoryKeys.has(catKey) ? 2.5 : 0;
            return { catKey, score: (categoryWeight.get(catKey) || .3) + noise - repeatPenalty };
        }).sort((a, b) => b.score - a.score);
        const categoryPool = rankedCategories.slice(0, Math.min(3, rankedCategories.length));
        const selectedCategory = categoryPool[hash % categoryPool.length]?.catKey || rankedCategories[0]?.catKey;
        const available = (menuData[selectedCategory]?.urunler || []).filter(item => item.stoktaVar !== false);
        if (!available.length) return null;
        const fresh = available.filter(item => !recentProductKeys.has(productSuggestionKey(selectedCategory, item)));
        const candidates = fresh.length ? fresh : available;
        const product = candidates[(hashFor(`${selectionKey}|${selectedCategory}`) + interactions.length * 7) % candidates.length];
        const selectedKey = productSuggestionKey(selectedCategory, product);
        const seasonNote = isWarmSeason ? (aktifDil === 'en' ? 'seasonal cool balance' : 'mevsimsel ferahlık dengesi') : isCoolSeason ? (aktifDil === 'en' ? 'seasonal warm balance' : 'mevsimsel sıcak denge') : (isWeekend ? (aktifDil === 'en' ? 'weekend rhythm' : 'hafta sonu ritmi') : (aktifDil === 'en' ? 'daily rhythm' : 'günün ritmi'));
        try {
            if (localStorage.getItem('kfm_suggestion_last_bucket') !== selectionKey) {
                const nextHistory = [{ key: selectedKey, catKey: selectedCategory, at: Date.now() }, ...history.filter(item => item.key !== selectedKey)].slice(0, 18);
                localStorage.setItem('kfm_suggestion_history', JSON.stringify(nextHistory));
                localStorage.setItem('kfm_suggestion_last_bucket', selectionKey);
            }
        } catch (_) { /* Depolama kapalıysa seçim yine güvenle yapılır. */ }
        const copy = slot[aktifDil] || slot.tr;
        const nextCopy = { ...copy, detail: `${copy.detail} · ${seasonNote}` };
        return { ...slot, [aktifDil]: nextCopy, tr: aktifDil === 'tr' ? nextCopy : slot.tr, en: aktifDil === 'en' ? nextCopy : slot.en, catKey: selectedCategory, product, context: { isWeekend, isWarmSeason, isCoolSeason, interactionCount: interactions.length } };
    }


    const kfmComplementaryCategoryMap = {
        'cat-kahve': ['cat-tatli'], 'cat-sutlu-kahve': ['cat-tatli'], 'cat-cay': ['cat-tatli','cat-yiyecek'],
        'cat-soguk-kahve': ['cat-yiyecek','cat-tatli'], 'cat-soguk-icecek': ['cat-yiyecek','cat-tatli'],
        'cat-smoothie': ['cat-yiyecek','cat-tatli'], 'cat-milkshake': ['cat-tatli','cat-yiyecek'],
        'cat-tatli': ['cat-kahve','cat-cay'], 'cat-yiyecek': ['cat-icecek','cat-kahve'],
        'cat-icecek': ['cat-yiyecek','cat-kahve'], 'cat-nargile': ['cat-cay']
    };

    function getComplementaryProduct(item) {
        if (!item?.catKey) return null;
        const candidates = (kfmComplementaryCategoryMap[item.catKey] || ['cat-cay','cat-kahve'])
            .flatMap(catKey => (menuData[catKey]?.urunler || [])
                .filter(candidate => candidate.stoktaVar !== false)
                .map(candidate => ({ ...candidate, catKey })));
        if (!candidates.length) return null;
        const itemKey = productSuggestionKey(item.catKey, item);
        const fresh = candidates.filter(candidate => productSuggestionKey(candidate.catKey, candidate) !== itemKey);
        const pool = fresh.length ? fresh : candidates;
        const seed = `${new Date().toDateString()}|detail|${itemKey}|${pool.length}`;
        const hash = Array.from(seed).reduce((total, char) => ((total * 33) ^ char.charCodeAt(0)) >>> 0, 5381);
        return pool[hash % pool.length] || null;
    }

    function getDailySuggestionPair() {
        const primary = getDailySuggestion();
        if (!primary || !primary.product) return primary;
        const candidates = (kfmComplementaryCategoryMap[primary.catKey] || ['cat-cay','cat-kahve'])
            .flatMap(key => (menuData[key]?.urunler || []).filter(item => item.stoktaVar !== false).map(item => ({ ...item, catKey: key })));
        if (!candidates.length) return { ...primary, secondary: null, pairLabel: { tr: 'Günün seçimi', en: 'Today’s pick' } };
        const seed = `${new Date().toDateString()}|${primary.catKey}|${primary.product.ad}|${candidates.length}`;
        const hash = Array.from(seed).reduce((total, char) => ((total * 33) ^ char.charCodeAt(0)) >>> 0, 5381);
        const fresh = candidates.filter(item => productSuggestionKey(item.catKey, item) !== productSuggestionKey(primary.catKey, primary.product));
        const pool = fresh.length ? fresh : candidates;
        const secondary = pool[hash % pool.length];
        return { ...primary, secondary, pairLabel: { tr: 'Mükemmel İkili', en: 'Perfect Pair' }, pairDetail: { tr: 'Birlikte daha keyifli', en: 'Better together' } };
    }

    function renderDailySuggestion() {
        const grid = document.getElementById('productGrid');
        const suggestion = getDailySuggestionPair();
        window.__dailySuggestion = suggestion;
        if (!grid || !suggestion || !suggestion.product) return;
        const langCopy = suggestion[aktifDil] || suggestion.tr;
        const secondary = suggestion.secondary;
        const primaryName = localizedProductName(suggestion.product);
        const secondaryName = secondary ? (localizedProductName(secondary)) : '';
        const primaryCat = localizedCategoryName(menuData[suggestion.catKey], 'Keyfimce');
        const secondaryCat = secondary && localizedCategoryName(menuData[secondary.catKey], '');
        const primaryImg = kfmV21ProductImage(suggestion.product, suggestion.catKey);
        const secondaryImg = secondary ? kfmV21ProductImage(secondary, secondary.catKey) : primaryImg;
        const cta = t('suggestion_view_detail');
        const pairLabel = t('pair_label');
        const pairDetail = t('pair_detail');
        grid.insertAdjacentHTML('beforeend', `
          <section class="daily-pair-card" aria-label="${escapeHtml(pairLabel)}">
            <div class="daily-pair-heading"><div><small>${escapeHtml(langCopy.label)} · ${escapeHtml(suggestion.window || '')}</small><strong>${escapeHtml(pairLabel)}</strong></div><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i></div>
            <div class="daily-pair-item" data-kfm-fallback="${escapeHtml(kfmV21FallbackFor(suggestion.product, suggestion.catKey))}" role="button" tabindex="0" aria-label="${escapeHtml(primaryName)}" onclick="openDailySuggestionProduct('primary')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDailySuggestionProduct('primary')}">
              <img class="daily-pair-image" src="${escapeHtml(primaryImg)}" alt="${escapeHtml(primaryName)}" loading="lazy" onload="kfmPremiumFitImage(this)" onerror="kfmHandleProductImageErrorV21(this,'${escapeHtml(kfmV21FallbackFor(suggestion.product, suggestion.catKey))}')">
              <span>${escapeHtml(primaryCat)}</span><strong>${escapeHtml(primaryName)}</strong><em>${suggestion.product.fiyat}₺</em>
            </div>
            ${secondary ? `<div class="daily-pair-item" data-kfm-fallback="${escapeHtml(kfmV21FallbackFor(secondary, secondary.catKey))}" role="button" tabindex="0" aria-label="${escapeHtml(secondaryName)}" onclick="openDailySuggestionProduct('secondary')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openDailySuggestionProduct('secondary')}">
              <img class="daily-pair-image" src="${escapeHtml(secondaryImg)}" alt="${escapeHtml(secondaryName)}" loading="lazy" onload="kfmPremiumFitImage(this)" onerror="kfmHandleProductImageErrorV21(this,'${escapeHtml(kfmV21FallbackFor(secondary, secondary.catKey))}')">
              <span>${escapeHtml(secondaryCat)}</span><strong>${escapeHtml(secondaryName)}</strong><em>${secondary.fiyat}₺</em>
            </div>` : `<div class="daily-pair-item"><span>${escapeHtml(primaryCat)}</span><strong>${escapeHtml(primaryName)}</strong><em>${suggestion.product.fiyat}₺</em></div>`}
            <div class="daily-pair-join"><i class="fa-solid fa-link" aria-hidden="true"></i> ${escapeHtml(pairDetail || cta)}</div>
          </section>`);
    }

    function openDailySuggestionProduct(which = 'primary') {
        const suggestion = window.__dailySuggestion;
        if (!suggestion) return;
        const chosen = which === 'secondary' ? suggestion.secondary : suggestion.product;
        const chosenCat = which === 'secondary' ? suggestion.secondary?.catKey : suggestion.catKey;
        if (!chosen) return;
        const rendered = window.__renderedProducts;
        window.__renderedProducts = [{ ...chosen, catKey: chosenCat }];
        openProductDetail(0);
        window.__renderedProducts = rendered;
    }
    function openDailySuggestion() { openDailySuggestionProduct('primary'); }


    function updateSearchSummary(visibleCount, scopedCount, arama) {
        const summary = document.getElementById('searchSummary');
        const clear = document.getElementById('searchClearBtn');
      const allMenu = document.getElementById('searchAllMenuBtn');
        if (!summary) return;
        if (clear) clear.hidden = !arama;
      if (allMenu) {
        const categoryFiltered = aktifKat !== 'cat-all';
        allMenu.hidden = !categoryFiltered;
        allMenu.setAttribute('aria-label', aktifDil === 'en' ? 'Search entire menu' : 'Tüm menüde ara');
        allMenu.title = aktifDil === 'en' ? 'Search entire menu' : 'Tüm menüde ara';
        const buttonLabel = allMenu.querySelector('span');
        if (buttonLabel) buttonLabel.textContent = aktifDil === 'en' ? 'Search all menu' : 'Tüm menüde ara';
      }
        const label = aktifDil === 'en' ? 'products' : 'ürün';
        const shown = aktifDil === 'en' ? `${visibleCount} ${label} shown` : `${visibleCount} ${label} gösteriliyor`;
        const scope = arama && scopedCount !== visibleCount ? (aktifDil === 'en' ? `of ${scopedCount}` : `${scopedCount} içinden`) : '';
        summary.innerHTML = `<span><strong>${shown}</strong> ${scope}</span>`;
    }
    function aramaTemizle() {
        const input = document.getElementById('searchInput');
        if (!input) return;
        input.value = '';
        renderProducts();
        input.focus({ preventScroll: true });
    }


// KFM_V23_ADMIN_FRAME_MANAGER
// Çerçeveler localStorage + JSON/GitHub yedeğiyle yönetilir.
const kfmDefaultFrameSettings = {
    frames: {
        warm:  { name: 'Sıcak / Kahve', url: 'product-frame-3d-transparent.png' },
        cold:  { name: 'Soğuk İçecek', url: 'product-frame-cold-transparent.png' },
        sweet: { name: 'Tatlı / Milkshake', url: 'product-frame-sweet-transparent.png' },
        food:  { name: 'Yiyecek / Tost', url: 'product-frame-food-transparent.png' },
        hookah:{ name: 'Nargile', url: 'product-frame-hookah-transparent.png' }
    },
    categoryMap: {}
};
function kfmCloneFrameSettings(value) {
    const base = JSON.parse(JSON.stringify(kfmDefaultFrameSettings));
    if (!value || typeof value !== 'object') return base;
    if (value.frames && typeof value.frames === 'object') {
        Object.keys(value.frames).forEach(key => {
            const item = value.frames[key] || {};
            base.frames[key] = { name: String(item.name || key), url: String(item.url || '') };
        });
    }
    if (value.categoryMap && typeof value.categoryMap === 'object') base.categoryMap = { ...value.categoryMap };
    return base;
}
let kfmFrameSettings = kfmCloneFrameSettings(ls('kfm_frame_settings', null));
function kfmFrameThemeForProduct(product, catKey) {
    const category = String(catKey || product?.catKey || '');
    const mapped = kfmFrameSettings?.categoryMap?.[category];
    if (mapped && kfmFrameSettings.frames[mapped]) return mapped;
    return kfmV21ProductTheme(product || { catKey: category }, category);
}
function kfmFrameUrl(theme) {
    const item = kfmFrameSettings?.frames?.[theme];
    return String(item?.url || kfmDefaultFrameSettings.frames[theme]?.url || kfmDefaultFrameSettings.frames.warm.url);
}
function kfmFrameName(theme) {
    return String(kfmFrameSettings?.frames?.[theme]?.name || kfmDefaultFrameSettings.frames[theme]?.name || theme);
}
function kfmFrameApplyToElement(element, theme) {
    if (!element) return;
    element.dataset.frameTheme = theme || 'warm';
    element.style.backgroundImage = `url(${JSON.stringify(kfmFrameUrl(theme || 'warm'))})`;
}
function kfmApplyCustomFrameStyles(root = document) {
    root.querySelectorAll('.product-card-frame-art, .ap-frame-preview-art').forEach(element => {
        const theme = element.dataset.frameTheme || 'warm';
        kfmFrameApplyToElement(element, theme);
    });
}
function kfmFrameCategoryOptions(selected = '') {
    return Object.keys(menuData).map(key => `<option value="${escapeHtml(key)}" ${key === selected ? 'selected' : ''}>${escapeHtml(menuData[key]?.isim || key)}</option>`).join('');
}
function kfmFrameManagerPreview(theme, id) {
    const fallback = gorselHavuzu['cat-kahve'] || kfmV20LocalFallbacksV21.warm;
    return `<div class="ap-frame-preview ap-frame-manager-preview" id="${id}" data-frame-theme="${escapeHtml(theme)}"><img src="${escapeHtml(fallback)}" alt="${escapeHtml(kfmFrameName(theme))}" class="ap-preview-contain"><span class="ap-frame-preview-art" data-frame-theme="${escapeHtml(theme)}"></span></div>`;
}
function apFrameLibraryYenile() {
    const box = document.getElementById('apFrameLibrary');
    if (!box) return;
    const entries = Object.entries(kfmFrameSettings.frames || {});
    box.innerHTML = entries.map(([theme, item]) => {
        const assigned = Object.keys(kfmFrameSettings.categoryMap || {}).filter(key => kfmFrameSettings.categoryMap[key] === theme)[0] || '';
        return `<div class="ap-frame-manager-card" data-frame-editor="${escapeHtml(theme)}">
            ${kfmFrameManagerPreview(theme, `apFramePreview_${theme}`)}
            <div class="ap-frame-manager-fields">
              <div><strong style="color:var(--ink);font-size:12px;">${escapeHtml(item.name || theme)}</strong><span class="ap-frame-manager-note" style="display:block;">${escapeHtml(theme)}</span></div>
              <input class="ap-input text-xs font-medium" id="apFrameUrl_${escapeHtml(theme)}" value="${escapeHtml(item.url || '')}" placeholder="Çerçeve görsel URL’si">
              <input class="ap-file-input" type="file" accept="image/*" onchange="apFrameDosyaSecildi(event,'${escapeHtml(theme)}')">
              <div class="ap-frame-manager-actions"><select class="ap-input text-xs font-medium" id="apFrameCat_${escapeHtml(theme)}"><option value="">Kategoriye atama yok</option>${kfmFrameCategoryOptions(assigned)}</select><button type="button" onclick="apFrameKaydet('${escapeHtml(theme)}')"><i class="fa-solid fa-check"></i> Kaydet</button></div>
            </div></div>`;
    }).join('') + `<div class="ap-frame-manager-card" style="grid-template-columns:1fr;">
        <div><strong style="color:var(--rust);font-size:12px;"><i class="fa-solid fa-plus-circle mr-1"></i> Yeni çerçeve ekle</strong><p class="ap-frame-manager-note">Bir ad, görsel URL’si veya dosya seçin; ardından çerçeveyi bir kategoriye atayın.</p></div>
        <div class="ap-frame-manager-fields"><input id="apNewFrameName" class="ap-input text-xs font-medium" placeholder="Çerçeve adı (örn. Yaz İçecekleri)"><input id="apNewFrameUrl" class="ap-input text-xs font-medium" placeholder="https://..."><input id="apNewFrameFile" class="ap-file-input" type="file" accept="image/*" onchange="apNewFrameDosyaSecildi(event)"><select id="apNewFrameCategory" class="ap-input text-xs font-medium"><option value="">Kategori seçin</option>${kfmFrameCategoryOptions()}</select><button type="button" onclick="apYeniFrameEkle()" style="padding:10px;border-radius:12px;color:#fff;background:var(--rust);font-size:11px;font-weight:900;"><i class="fa-solid fa-plus"></i> Çerçeveyi ekle ve ata</button></div>
    </div>`;
    window.setTimeout(() => { kfmApplyCustomFrameStyles(box); }, 0);
}
function apFramePreviewGuncelle(theme, url) {
    const editor = document.querySelector(`[data-frame-editor="${CSS.escape(theme)}"]`);
    const image = editor?.querySelector('img');
    const art = editor?.querySelector('.ap-frame-preview-art');
    if (art) { art.dataset.frameTheme = theme; art.style.backgroundImage = `url(${JSON.stringify(String(url || kfmFrameUrl(theme)))})`; }
    if (image) image.onerror = () => { image.onerror = null; image.src = gorselHavuzu['cat-kahve'] || kfmV20LocalFallbacksV21.warm; };
}
function apFrameDosyaSecildi(event, theme) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const input = document.getElementById(`apFrameUrl_${theme}`); if (input) { input.value = reader.result; apFramePreviewGuncelle(theme, reader.result); } };
    reader.readAsDataURL(file);
}
function apNewFrameDosyaSecildi(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const input = document.getElementById('apNewFrameUrl'); if (input) input.value = reader.result; };
    reader.readAsDataURL(file);
}
function apFrameKaydet(theme) {
    const input = document.getElementById(`apFrameUrl_${theme}`);
    const category = document.getElementById(`apFrameCat_${theme}`)?.value || '';
    const url = String(input?.value || '').trim();
    if (!url) { toast('❌ Çerçeve URL’si veya dosyası gerekli.'); return; }
    kfmFrameSettings.frames[theme] = { name: kfmFrameSettings.frames[theme]?.name || theme, url };
    Object.keys(kfmFrameSettings.categoryMap || {}).forEach(key => { if (kfmFrameSettings.categoryMap[key] === theme && key !== category) delete kfmFrameSettings.categoryMap[key]; });
    if (category) kfmFrameSettings.categoryMap[category] = theme;
    saveAll();
    apFrameLibraryYenile(); renderProducts(); apUrunListesiYenile();
    toast('✅ Çerçeve kaydedildi ve önizlemeler güncellendi.');
}
function apYeniFrameEkle() {
    const name = String(document.getElementById('apNewFrameName')?.value || '').trim();
    const url = String(document.getElementById('apNewFrameUrl')?.value || '').trim();
    const category = String(document.getElementById('apNewFrameCategory')?.value || '').trim();
    if (!name || !url || !category) { toast('❌ Çerçeve adı, görseli ve kategori seçimi zorunlu.'); return; }
    const theme = `custom-${Date.now()}`;
    kfmFrameSettings.frames[theme] = { name, url };
    kfmFrameSettings.categoryMap[category] = theme;
    saveAll(); buildNav(); apFrameLibraryYenile(); renderProducts(); apUrunListesiYenile();
    ['apNewFrameName','apNewFrameUrl','apNewFrameFile'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    const cat = document.getElementById('apNewFrameCategory'); if (cat) cat.value = '';
    toast('✅ Yeni çerçeve eklendi ve kategoriye atandı.');
}
function apYeniUrunOnizlemeGuncelle() {
    const category = document.getElementById('apKat')?.value || Object.keys(menuData)[0] || 'cat-kahve';
    const theme = kfmFrameThemeForProduct({ catKey: category }, category);
    const url = String(document.getElementById('apGorsel')?.value || '').trim();
    const image = document.getElementById('apNewProductPreviewImage');
    const art = document.getElementById('apNewProductPreviewArt');
    const fallback = kfmV20LocalFallbacksV21[theme] || kfmV20LocalFallbacksV21.warm;
    if (image) {
        image.onerror = () => { image.onerror = null; image.classList.remove('ap-preview-cover'); image.src = fallback; };
        image.src = url || fallback;
        image.classList.toggle('ap-preview-cover', !!url);
    }
    if (art) { art.dataset.frameTheme = theme; art.style.backgroundImage = `url(${JSON.stringify(kfmFrameUrl(theme))})`; }
}
function apYeniUrunDosyaSecildi(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const input = document.getElementById('apGorsel'); if (input) input.value = reader.result; apYeniUrunOnizlemeGuncelle(); };
    reader.readAsDataURL(file);
}
function apEditorGorselOnizle(url, previewId, fallback, theme) {
    const image = document.getElementById(previewId);
    if (!image) return;
    const source = String(url || '').trim();
    const editor = image.closest('.ap-product-editor');
    const currentTheme = theme || 'warm';
    const setStatus = (message, state = 'loading') => editor?.querySelectorAll(`[data-ap-preview-status-for="${CSS.escape(previewId)}"]`).forEach(node => { node.textContent = message; node.dataset.state = state; });
    const allImages = [image, ...document.querySelectorAll(`[data-ap-live-preview-for="${CSS.escape(previewId)}"]`)];
    setStatus(source ? 'Görsel yükleniyor…' : 'Kategori görseli kullanılıyor', source ? 'loading' : 'fallback');
    allImages.forEach(node => {
        node.dataset.apFallback = '';
        node.onload = () => { if (node.dataset.apFallback !== '1') setStatus(source ? 'Görsel kartta hazır' : 'Kategori görseli kullanılıyor', source ? 'ready' : 'fallback'); };
        node.onerror = () => { node.onerror = null; node.dataset.apFallback = '1'; node.classList.remove('ap-preview-cover'); node.src = fallback; setStatus('URL açılamadı · yedek görsel', 'fallback'); };
        node.classList.toggle('ap-preview-cover', !!source);
        node.src = source || fallback;
    });
    editor?.querySelectorAll('.ap-frame-preview-art, .product-card-frame-art').forEach(art => kfmFrameApplyToElement(art, currentTheme));
    editor?.querySelectorAll('.ap-live-product-card').forEach(card => {
        card.dataset.frameTheme = currentTheme;
        card.dataset.frameTone = currentTheme === 'cold' ? 'cool' : (currentTheme === 'sweet' ? 'sweet' : (currentTheme === 'hookah' ? 'night' : (currentTheme === 'food' ? 'herbal' : 'warm')));
    });
}
function apUrunDosyaSecildi(event, catKey, id) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { gorselGuncelle(catKey, id, reader.result); apUrunListesiYenile(); toast('✅ Ürün görseli güncellendi.'); };
    reader.readAsDataURL(file);
}


    // KFM_V18_PRODUCT_FRAMES: keep decorative motifs semantically relevant to each product.
    // KFM_V20_2_THEME_FIX: explicit category first, product wording only for mixed beverage category.
    // KFM_V20_3_IMAGE_REPAIR
    // Ürün kategorisi önceliklidir; özellikle cat-icecek boş/gazlı içecekleri cold olarak işler.
    const kfmV20LocalFallbacksV21 = {
        warm: 'product-fallback-warm-coffee.png',
        cold: 'product-fallback-cold-drink.png',
        sweet: 'product-fallback-sweet-dessert.png',
        food: 'product-fallback-food-toast.png',
        hookah: 'product-fallback-hookah.png'
    };
    function kfmV21ProductTheme(product, catKey) {
        const cat = String(catKey || product?.catKey || '').trim().toLowerCase();
        const source = [product?.ad, product?.ad_en, product?.aciklama, product?.aciklama_en].filter(Boolean).join(' ').toLowerCase();
        if (cat === 'cat-nargile' || /nargile|hookah|shisha/.test(source)) return 'hookah';
        if (cat === 'cat-yiyecek') return 'food';
        if (cat === 'cat-tatli' || cat === 'cat-milkshake') return 'sweet';
        if (cat === 'cat-kahve' || cat === 'cat-sutlu-kahve' || cat === 'cat-cay') return 'warm';
        if (cat === 'cat-soguk-kahve' || cat === 'cat-soguk-icecek' || cat === 'cat-smoothie') return 'cold';
        if (cat === 'cat-icecek') {
            if (/sıcak süt|sicak sut|warm milk|foamed milk|salep|hot chocolate|sıcak çikolata|hot beverage/.test(source)) return 'warm';
            return 'cold';
        }
        if (/didi|gazoz|soda|kola|cola|limonata|lemonade|iced|soğuk içecek|cold beverage|meyve suyu|fruit juice/.test(source)) return 'cold';
        if (/tost|toast|sandviç|sandwich|patates|pizza|burger|wrap|yiyecek|food/.test(source)) return 'food';
        if (/tatlı|dessert|cake|cheesecake|brownie|waffle|milkshake|macaron|dondurma|ice cream/.test(source)) return 'sweet';
        return 'warm';
    }
    function getProductFrameTheme(product) {
        return kfmFrameThemeForProduct(product, product?.catKey);
    }
    function kfmV21FallbackFor(product, catKey) {
        const source = [product?.ad, product?.ad_en, product?.aciklama, product?.aciklama_en].filter(Boolean).join(' ').toLowerCase();
        if (/italian cappuccino|italyan cappuccino|italian macchiato|italyan macchiato/.test(source)) return 'product-fallback-italian-cappuccino-clean.png';
        const theme = kfmV21ProductTheme(product, catKey);
        return kfmV20LocalFallbacksV21[theme] || kfmV20LocalFallbacksV21.warm;
    }
    function kfmV21ProductImage(product, catKey) {
        const explicit = String(product?.gorsel || '').trim();
        const source = [product?.ad, product?.ad_en].filter(Boolean).join(' ').toLowerCase();
        const fallback = kfmV21FallbackFor(product, catKey);
        // KFM_MENU_IMAGES_V28: Doğrudan HTTPS URL'yi tarayıcıya bırak;
        // erişilemiyorsa onerror yolu güvenli kategori fallback'i uygular.
        // Google thumbnail URL'lerini burada peşinen düşürmek, masaüstünde
        // çalışan ürün görsellerinin Web'de hiç denenmeden kaybolmasına neden olur.
        if (!explicit || explicit.startsWith('file:') || /category-scene-|hookah-welcome-3d-clean/.test(explicit)) return fallback;
        return explicit;
    }
    // KFM_MENU_SPEED_V1 — Güvenli yerel görsel önbelleği (hizmet işçisi olmadan).
    // Yalnız https: kaynaklar saklanır (data:, blob:, file: ve göreli yollar
    // önbelleğe girmez); localStorage kotası aşılırsa en eski kayıtlar düşer.
    // URL önbellekten verilir; tarayıcının kendi HTTP önbelleği resmi indirir.
    const KFM_IMAGE_CACHE_KEY = 'kfm_image_cache_v1';
    const KFM_IMAGE_CACHE_MAX = 400;
    function kfmImageCacheOku() {
        try { const raw = localStorage.getItem(KFM_IMAGE_CACHE_KEY); const data = raw ? JSON.parse(raw) : {}; return data && typeof data === 'object' ? data : {}; }
        catch { return {}; }
    }
    function kfmImageCacheYaz(cache) {
        try { localStorage.setItem(KFM_IMAGE_CACHE_KEY, JSON.stringify(cache)); }
        catch { try { const entries = Object.entries(cache).sort((a, b) => (a[1].t || 0) - (b[1].t || 0)).slice(Math.floor(KFM_IMAGE_CACHE_MAX / 2)); localStorage.setItem(KFM_IMAGE_CACHE_KEY, JSON.stringify(Object.fromEntries(entries))); } catch { /* kota dolu: önbellek opsiyoneldir */ } }
    }
    function kfmCachedProductImageUrl(url) {
        const clean = String(url || '').trim();
        if (!clean.startsWith('https://')) return clean; // data:/blob:/göreli yollar dokunulmadan kalır
        const cache = kfmImageCacheOku();
        const entry = cache[clean];
        if (entry?.ok) {
            entry.t = Date.now(); // LRU: kullanılan kayıt öne alınır
            kfmImageCacheYaz(cache);
            return clean;
        }
        kfmCachedImageRefresh(clean);
        return clean;
    }
    function kfmCachedImageRefresh(url, imgEl) {
        const cache = kfmImageCacheOku();
        if (cache[url]?.pending) return;
        cache[url] = { ...(cache[url] || {}), pending: true };
        kfmImageCacheYaz(cache);
        const probe = imgEl && imgEl.tagName === 'IMG' ? imgEl : new Image();
        const finalize = ok => {
            const c = kfmImageCacheOku();
            const current = c[url] || {};
            delete current.pending;
            if (ok) c[url] = { ...current, ok: true, t: Date.now() };
            else if (!current.ok) c[url] = { ...current, ok: false, t: Date.now() };
            const keys = Object.keys(c);
            if (keys.length > KFM_IMAGE_CACHE_MAX) {
                keys.sort((a, b) => (c[a].t || 0) - (c[b].t || 0)).slice(0, keys.length - KFM_IMAGE_CACHE_MAX).forEach(k => delete c[k]);
            }
            kfmImageCacheYaz(c);
        };
        probe.addEventListener('load', () => finalize(true), { once: true });
        probe.addEventListener('error', () => finalize(false), { once: true });
        if (probe !== imgEl) probe.src = url;
    }
    function kfmHandleProductImageErrorV21(img, fallback) {
        if (!img || img.dataset.kfmFallbackApplied === 'true') return;
        img.dataset.kfmFallbackApplied = 'true';
        img.onerror = null;
        img.classList.add('kfm-fallback-image');
        img.dataset.kfmFit = 'contain';
        img.src = fallback || 'product-fallback-warm-coffee.png';
    }
    // KFM_V21_PREMIUM_PRODUCT_FIT
    // JSON'dan gelen uzak görselleri çerçeve içini dolduracak şekilde; fallback görselleri ise kırpmadan yerleştirir.
    function kfmPremiumFitImage(img) {
        if (!img) return;
        const source = String(img.currentSrc || img.src || '');
        const isFallback = img.classList.contains('kfm-fallback-image') || source.includes('product-fallback-');
        // İlk paint güvenli contain ile başlar; gerçek ölçü geldiğinde yalnızca makul oranlı
        // kullanıcı fotoğrafları çerçeveyi dolduracak kadar cover'a alınır.
        if (!img.naturalWidth || !img.naturalHeight) {
            img.dataset.kfmFit = isFallback ? 'contain' : 'contain';
            return;
        }
        const ratio = img.naturalWidth / img.naturalHeight;
        const extremeRatio = ratio < 0.68 || ratio > 1.82;
        const fit = isFallback || extremeRatio ? 'contain' : 'cover';
        img.dataset.kfmFit = fit;
        img.dataset.kfmAspect = ratio.toFixed(3);
        // Aşırı dikey/yatay fotoğraflarda ürünün bir kısmını kesmemek için merkeze yakın odak.
        img.style.objectPosition = ratio < 0.72 ? '50% 43%' : (ratio > 1.75 ? '50% 48%' : '50% 50%');
    }
    function kfmPremiumFitRenderedImages() {
        document.querySelectorAll('#productGrid .product-card-image, .daily-pair-image').forEach(kfmPremiumFitImage);
    }

    function kfmV21RepairRenderedImages() {
        document.querySelectorAll('#productGrid .product-card-image, .daily-pair-image').forEach((img) => {
            const card = img.closest('.prod-card, .daily-pair-item');
            const fallback = card?.dataset?.kfmFallback || 'product-fallback-warm-coffee.png';
            const src = String(img.getAttribute('src') || '');
            if (/category-scene-|hookah-welcome-3d-clean/.test(src)) img.classList.add('kfm-fallback-image');
            if (img.complete && img.naturalWidth === 0) kfmHandleProductImageErrorV21(img, fallback);
            kfmPremiumFitImage(img);
        });
    }
    function kfmV21ScheduleImageRepair() {
        const repair = () => kfmV21RepairRenderedImages();
        [450, 1100, 2200, 4200].forEach(delay => window.setTimeout(repair, delay));
        if (!window.__kfmImageRepairObserver && 'MutationObserver' in window) {
            window.__kfmImageRepairObserver = new MutationObserver(repair);
            window.__kfmImageRepairObserver.observe(document.getElementById('productGrid') || document.body, { childList: true, subtree: true });
        }
    }

    function renderProducts() {
        const grid  = document.getElementById('productGrid');
        const arama = document.getElementById('searchInput').value.toLowerCase().trim();
        grid.innerHTML = '';
        let list = [];

        if (aktifKat === "cat-all") {
            for (let catKey in menuData)
                (menuData[catKey]?.urunler || []).forEach(u => list.push({ ...u, catKey }));
        } else {
            (menuData[aktifKat]?.urunler || []).forEach(u => list.push({ ...u, catKey: aktifKat }));
        }

        if (hideOutOfStock) list = list.filter(u => u.stoktaVar);

        const categoryScopedCount = list.length;
        if (arama) {
            list = list.filter(u => {
                const name = localizedProductName(u);
                const description = localizedProductDescription(u, '');
                const category = localizedCategoryName(menuData[u.catKey], '');
                const searchTerm = arama.toLowerCase();
                const searchableText = [name, description, category].join(' ').toLowerCase();
                return searchableText.includes(searchTerm);
            });
        }
        window.__renderedProducts = list;
        updateSearchSummary(list.length, categoryScopedCount, arama);
        if (!list.length) {
            const title = arama ? (aktifDil === 'en' ? 'No matching products' : 'Eşleşen ürün bulunamadı') : t('no_product');
            const detail = arama ? (aktifDil === 'en' ? 'Try another product, category or description.' : 'Başka bir ürün adı, kategori veya açıklama deneyin.') : (aktifDil === 'en' ? 'There are no visible products in this category.' : 'Bu kategoride gösterilecek ürün bulunmuyor.');
            grid.innerHTML = `<div class="search-empty"><i class="fa-solid fa-mug-hot"></i><strong>${escapeHtml(title)}</strong><span>${escapeHtml(detail)}</span>${arama ? `<button type="button" onclick="aramaTemizle()">${aktifDil === 'en' ? 'Clear search' : 'Aramayı temizle'}</button>` : ''}</div>`;
            return;
        }

        if (!arama) { renderDailySuggestion(); }

        kfmRenderProductsChunked(grid, list, arama);
    }

    // KFM_MENU_SPEED_V1 — Kart üretimi aşamalıdır: ilk aşama seçili kategori
    // görünümünü anında doldurur; kalan kartlar sonraki aşamalarda eklenir ve
    // her aşamadan sonra tarayıcıya nefes payı verilir. Böylece telefonlarda
    // uzun menülerde ilk çizim gecikmez. “Menü sonu” kartı son aşamada eklenir.
    const KFM_MENU_SPEED_FIRST_CHUNK = 12;
    const KFM_MENU_SPEED_CHUNK = 10;
    const KFM_MENU_SPEED_STEP_DELAY_MS = 0;
    let kfmMenuRenderToken = 0;

    function kfmCancelPendingProductRender() {
        kfmMenuRenderToken++;
    }

    function kfmProductCardHtml(u, idx, arama) {
        const name = localizedProductName(u);
        const description = localizedProductDescription(u, '');
        const safeDescription = description || (aktifDil === 'en' ? 'Carefully prepared for your enjoyment.' : 'Keyfiniz için özenle hazırlanır.');
            const categoryName = localizedCategoryName(menuData[u.catKey], '');
            const fallbackImg = kfmV21FallbackFor(u, u.catKey);
            const img = kfmV21ProductImage(u, u.catKey);
            const extrasCount = u.ekstralar?.length || 0;
            const stokOverlay = !u.stoktaVar ? `<div class="stok-overlay"><span class="stok-badge">${t('out_of_stock')}</span></div>` : '';
            const stokMiktar = u.stokMiktar === null || u.stokMiktar === undefined ? null : Number(u.stokMiktar);
            const stokMiktarMetni = Number.isFinite(stokMiktar) ? ` · ${aktifDil === 'en' ? 'Left' : 'Kalan'}: ${new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(stokMiktar)} ${escapeHtml(u.birim || 'adet')}` : '';
            const stokUyariRozeti = u.stoktaVar && u.stokUyari ? `<span class="product-card-stock-warning"><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>${aktifDil === 'en' ? 'Low stock' : 'Stok eşiğinde'}${stokMiktarMetni}</span>` : '';
            const delay = Math.min(idx, 8) * 0.055;
            const frameTheme = getProductFrameTheme(u);
            const frameTone = frameTheme === 'cold' ? 'cool' : (frameTheme === 'sweet' ? 'sweet' : (frameTheme === 'hookah' ? 'night' : (frameTheme === 'food' ? 'herbal' : 'warm')));
            return `
              <article class="prod-card product-entry ${!u.stoktaVar ? 'is-out-of-stock' : ''}" data-frame-tone="${frameTone}" data-frame-theme="${frameTheme}" style="animation-delay:${delay}s;" data-product-index="${idx}" data-kfm-fallback="${escapeHtml(fallbackImg)}" onclick="openProductDetail(${idx})" tabindex="0" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openProductDetail(${idx})}">
                ${stokOverlay}
                                <div class="product-card-image-wrap" data-image-state="loading" aria-busy="true">
		                  <img class="product-card-image" src="${kfmCachedProductImageUrl(img)}" alt="${escapeHtml(name)}" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="kfmPremiumFitImage(this)" onerror="kfmHandleProductImageErrorV21(this,'${escapeHtml(fallbackImg)}')">
	                  ${kfmFavToggleHtml({ ...u, catKey: u.catKey })}

	                  <span class="product-card-depth-plane" aria-hidden="true"></span>
	                  <span class="product-card-frame-art" data-frame-theme="${frameTheme}" aria-hidden="true"></span>
	                  ${stokUyariRozeti}
	                  ${!u.stoktaVar ? `<span class="product-card-badge">${t('out_of_stock')}</span>` : ''}
                </div>
                <div class="product-card-body">
                  <div class="product-card-category">${escapeHtml(categoryName || 'Keyfimce')}</div>
                  <h3 class="product-card-title">${highlightSearchTerm(name, arama)}</h3>
                  <p class="product-card-description">${escapeHtml(safeDescription)}</p>
                  ${extrasCount ? `<div class="extra-pill" style="align-self:flex-start;margin-top:8px;">+${extrasCount} ${escapeHtml(t('extra_options'))}</div>` : ''}
	                  <div class="product-card-footer">
	                    <strong class="product-card-price">${u.fiyat}₺</strong>
	                    <button class="product-detail-btn" type="button" onclick="event.stopPropagation();openProductDetail(${idx})">
	                      <i class="fa-solid fa-eye"></i><span>${escapeHtml(t('detail_btn'))}</span>
	                    </button>
	                    ${u.stoktaVar ? `<button class="product-cart-btn" type="button" aria-label="${escapeHtml(name)} sepete ekle" title="Sepete ekle" onclick="event.stopPropagation();kfmGorunenUrunuSepeteEkle(${idx})"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>` : ''}
	                  </div>
                </div>
              </article>`;
    }

    function kfmRenderProductsChunked(grid, list, arama) {
        kfmCancelPendingProductRender();
        const renderToken = kfmMenuRenderToken;
        let cursor = 0;
        let endCardAppended = false;

        const appendEndCard = () => {
            if (endCardAppended) return;
            endCardAppended = true;
            const endTitle = aktifDil === 'en' ? 'You have reached the end of the menu' : 'Menünün sonuna geldiniz';
        const endText = aktifDil === 'en' ? 'Take a quick look at the essentials or return to the menu wheel.' : 'Kısa bilgileri görüntüleyebilir veya kategori çarkına geri dönebilirsiniz.';
        const topLabel = aktifDil === 'en' ? 'Back to menu' : 'Menüye dön';
        const wifiLabel = aktifDil === 'en' ? 'Wi-Fi details' : 'Wi-Fi bilgisi';
        const hoursLabel = aktifDil === 'en' ? 'Hours' : 'Çalışma saatleri';
        const dailyHours = aktifDil === 'en' ? 'Every day · 09:00–00:00' : 'Her gün · 09:00–00:00';
        const wifiName = document.getElementById('wifiDisplayName')?.textContent?.trim() || 'Keyfimce_WiFi';
        grid.insertAdjacentHTML('beforeend', `
          <section class="menu-end-card" aria-label="${escapeHtml(endTitle)}">
            <div class="menu-end-card-main">
              <div class="menu-end-card-copy"><i class="fa-solid fa-mug-hot" aria-hidden="true"></i><div><strong>${escapeHtml(endTitle)}</strong><span>${escapeHtml(endText)}</span></div></div>
              <ul class="menu-end-card-info" aria-label="${aktifDil === 'en' ? 'Cafe information' : 'Kafe bilgileri'}">
                <li><i class="fa-regular fa-clock" aria-hidden="true"></i><span>${escapeHtml(hoursLabel)}</span><strong>${escapeHtml(dailyHours)}</strong></li>
                <li><i class="fa-solid fa-wifi" aria-hidden="true"></i><span>Wi-Fi</span><strong>${escapeHtml(wifiName)}</strong></li>
              </ul>
            </div>
            <div class="menu-end-card-actions"><button type="button" onclick="scrollToMenuStart()"><i class="fa-solid fa-arrow-up"></i> ${escapeHtml(topLabel)}</button><button type="button" onclick="wifiModalAc()"><i class="fa-solid fa-wifi"></i> ${escapeHtml(wifiLabel)}</button></div>
          </section>`);
        };

        const finishCardDecorations = () => {
            setupCardParallax();
            setupPremiumMotionLayer();
            kfmV21RepairRenderedImages();
            kfmPremiumFitRenderedImages();
            kfmApplyCustomFrameStyles(grid);
            kfmV21ScheduleImageRepair();
            setupCardImageReveal();
            setupTactileFeedback();
            kfmFavToggleBagla(grid);
            kfmFavoritesStripGuncelle();
        };

        const renderStep = () => {
            if (renderToken !== kfmMenuRenderToken) return; // güncel olmayan render
            const size = cursor === 0 ? KFM_MENU_SPEED_FIRST_CHUNK : KFM_MENU_SPEED_CHUNK;
            const slice = list.slice(cursor, cursor + size);
            const start = cursor;
            grid.insertAdjacentHTML('beforeend', slice.map((u, offset) => kfmProductCardHtml(u, start + offset, arama)).join(''));
            cursor += slice.length;
            if (cursor < list.length) {
                window.setTimeout(renderStep, KFM_MENU_SPEED_STEP_DELAY_MS);
            } else {
                appendEndCard();
                finishCardDecorations();
                window.__refreshScrollSyncNav?.();
            }
        };
        renderStep();
    }

    function setupCardParallax() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;
        document.querySelectorAll('#productGrid > .prod-card').forEach(card => {
            let raf = 0;
            let lastX = 0;
            let lastY = 0;
            let pointerType = 'mouse';
            const reset = () => {
                if (raf) cancelAnimationFrame(raf);
                card.style.setProperty('--px-rotate-x', '0deg');
                card.style.setProperty('--px-rotate-y', '0deg');
                card.style.setProperty('--px-lift', pointerType === 'touch' ? '-1px' : '-4px');
                card.style.setProperty('--px-scale', pointerType === 'touch' ? '.998' : '1.01');
                card.classList.remove('parallax-active');
                if (pointerType === 'touch') window.setTimeout(() => {
                    card.style.setProperty('--px-lift', '0px');
                    card.style.setProperty('--px-scale', '1');
                }, 120);
            };
            const apply = (clientX, clientY) => {
                const rect = card.getBoundingClientRect();
                const x = Math.max(-1, Math.min(1, (clientX - rect.left) / rect.width * 2 - 1));
                const y = Math.max(-1, Math.min(1, (clientY - rect.top) / rect.height * 2 - 1));
                lastX = x;
                lastY = y;
                if (raf) return;
                raf = requestAnimationFrame(() => {
                    raf = 0;
                    card.classList.add('parallax-active');
                    card.style.setProperty('--px-rotate-y', `${(lastX * 4.2).toFixed(2)}deg`);
                    card.style.setProperty('--px-rotate-x', `${(-lastY * 3.2).toFixed(2)}deg`);
                    card.style.setProperty('--px-lift', pointerType === 'touch' ? '-2px' : '-5px');
                    card.style.setProperty('--px-scale', pointerType === 'touch' ? '1.004' : '1.012');
                });
            };
            card.addEventListener('pointerenter', event => { pointerType = event.pointerType || 'mouse'; apply(event.clientX, event.clientY); });
            card.addEventListener('pointermove', event => {
                pointerType = event.pointerType || pointerType;
                apply(event.clientX, event.clientY);
            }, { passive: true });
            card.addEventListener('pointerleave', reset, { passive: true });
            card.addEventListener('pointercancel', reset, { passive: true });
            card.addEventListener('pointerup', event => {
                if (event.pointerType === 'touch') reset();
            }, { passive: true });
        });
    }

    function refreshDetailCategoryAction() {
        const button = document.getElementById('detailCategoryAction');
        const modal = document.getElementById('productDetailModal');
        if (!button || !modal) return;
        const key = modal.dataset.categoryKey || '';
        const category = menuData[key];
        const categoryName = localizedCategoryName(category, aktifDil === 'en' ? 'Category' : 'Kategori');
        const prefix = t('more_category');
        button.innerHTML = `<i class="fa-solid fa-layer-group"></i><span>${escapeHtml(prefix)} ${escapeHtml(categoryName)}</span>`;
        button.disabled = !key || !category;
        button.setAttribute('aria-label', `${prefix} ${categoryName}`);
    }

    function detailKategoriyeGit() {
        const modal = document.getElementById('productDetailModal');
        const key = modal?.dataset?.categoryKey || '';
        if (!key || !menuData[key]) return;
        modalKapat('productDetailModal');
        window.setTimeout(() => {
            setNavActive(key);
            kategoriGit(key);
            const navItem = document.getElementById('cp-' + key);
            if (navItem) navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            window.setTimeout(() => scrollToMenuStart(), 40);
        }, 40);
    }

    function kfmSetDetailImage(item, name) {
        const img = document.getElementById('detailImage');
        if (!img || !item) return;
        const fallback = kfmV21FallbackFor(item, item.catKey);
        const source = kfmV21ProductImage(item, item.catKey);
        img.classList.remove('kfm-fallback-image', 'image-ready');
        img.dataset.kfmFit = 'contain';
        img.dataset.kfmFallbackApplied = 'false';
        img.alt = name || '';
        img.onerror = function() {
            kfmHandleProductImageErrorV21(this, fallback);
            this.onload = () => { kfmPremiumFitImage(this); this.classList.add('image-ready'); };
            kfmPremiumFitImage(this);
        };
        img.onload = function() {
            kfmPremiumFitImage(this);
            this.classList.add('image-ready');
        };
        img.src = source || fallback;
    }

    function renderDetailPairSuggestion(item) {
        const container = document.getElementById('detail-pair-suggestions');
        if (!container) return;
        const suggestion = getComplementaryProduct(item);
        if (!suggestion) {
            container.innerHTML = '';
            container.hidden = true;
            return;
        }
        const name = localizedProductName(suggestion);
        const category = localizedCategoryName(menuData[suggestion.catKey], 'Keyfimce');
        const image = kfmV21ProductImage(suggestion, suggestion.catKey);
        const fallback = kfmV21FallbackFor(suggestion, suggestion.catKey);
        const copy = aktifDil === 'en'
            ? { kicker: 'Perfect pair', detail: 'Discover this match', action: `View ${name}` }
            : { kicker: 'Mükemmel ikili', detail: 'Bu eşleşmeyi keşfedin', action: `${name} detayını aç` };
        container.hidden = false;
        container.innerHTML = `
          <div class="detail-pair-card">
            <img class="detail-pair-thumb" src="${escapeHtml(image)}" alt="${escapeHtml(name)}" loading="eager" decoding="async" referrerpolicy="no-referrer">
            <div class="detail-pair-copy">
              <span class="detail-pair-kicker">${escapeHtml(copy.kicker)}</span>
              <strong>${escapeHtml(name)}</strong>
              <span>${escapeHtml(category)} · ${escapeHtml(copy.detail)}</span>
            </div>
            <button class="detail-pair-open" type="button" aria-label="${escapeHtml(copy.action)}" title="${escapeHtml(copy.action)}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          </div>`;
        const imageEl = container.querySelector('.detail-pair-thumb');
        if (imageEl) imageEl.onerror = () => kfmHandleProductImageErrorV21(imageEl, fallback);
        container.querySelector('.detail-pair-open')?.addEventListener('click', () => openProductDetail(null, { product: suggestion }));
    }

    // KFM_DETAIL_TAGS_V1 — Yönetilebilir içerik ve alerjen etiketleri.
    // Ürün kaydındaki isteğe bağlı alanlar: icerik (dizi veya virgüllü metin),
    // alerjenler (dizi veya virgüllü metin), alerjen_notu (serbest metin).
    // Etiketler yalnız dolu alanla bölüm gösterir; alt seçenek/stok/sepet
    // davranışına dokunmaz.
    const KFM_YAYGIN_ALERJENLER = [
        { eslesme: /\b(gluten|buğday|bugday|wheat)\b/i, etiket_tr: 'Gluten', etiket_en: 'Gluten', ikon: 'fa-wheat-awn' },
        { eslesme: /\b(süt|sut|sütc|laktoz|milk|süt ürünleri)\b/i, etiket_tr: 'Süt ürünleri', etiket_en: 'Dairy', ikon: 'fa-jar' },
        { eslesme: /\b(fındık|findik|badem|ceviz|fıstık|fistik|nut|nuts|peanut|almond|walnut|hazelnut)\b/i, etiket_tr: 'Kuruyemiş', etiket_en: 'Nuts', ikon: 'fa-seedling' },
        { eslesme: /\b(yumurta|egg|eggs)\b/i, etiket_tr: 'Yumurta', etiket_en: 'Egg', ikon: 'fa-egg' },
        { eslesme: /\b(soya|soya fasulyesi|soy)\b/i, etiket_tr: 'Soya', etiket_en: 'Soy', ikon: 'fa-seedling' },
        { eslesme: /\b(balık|balik|karides|deniz ürünleri|fish|shrimp|seafood)\b/i, etiket_tr: 'Deniz ürünleri', etiket_en: 'Seafood', ikon: 'fa-fish' },
        { eslesme: /\b(sesam|susam)\b/i, etiket_tr: 'Susam', etiket_en: 'Sesame', ikon: 'fa-seedling' },
        { eslesme: /\b(kafein|caffeine|kahve içeriği)\b/i, etiket_tr: 'Kafein', etiket_en: 'Caffeine', ikon: 'fa-mug-hot' },
        { eslesme: /\b(tütün|nikotin|tobacco|nicotine)\b/i, etiket_tr: 'Tütün ürünü', etiket_en: 'Tobacco', ikon: 'fa-smoking' },
    ];

    function kfmAlanDizisineDonustur(value) {
        if (Array.isArray(value)) return value.map(v => String(v || '').trim()).filter(Boolean);
        return String(value || '').split(/[,\n]+/).map(v => v.trim()).filter(Boolean);
    }

    function kfmAlerjenEtiketi(metin) {
        const eslesen = KFM_YAYGIN_ALERJENLER.find(a => a.eslesme.test(String(metin || '')));
        if (aktifDil === 'en') return eslesen ? eslesen.etiket_en : String(metin || '').trim();
        return eslesen ? eslesen.etiket_tr : String(metin || '').trim();
    }

    function kfmUrunIcerikEtiketleriniGoster(item) {
        const section = document.getElementById('detailContentTags');
        if (!section) return;
        const icerik = kfmAlanDizisineDonustur(item?.icerik);
        const alerjenler = kfmAlanDizisineDonustur(item?.alerjenler);
        const not = String(item?.alerjen_notu || '').trim();
        const pills = document.getElementById('detailContentPills');
        const notice = document.getElementById('detailAllergenNotice');
        const heading = document.getElementById('detailTagsHeading');
        const toggle = document.getElementById('detailContentToggle');
        const toggleText = document.getElementById('detailContentToggleText');
        if (heading) heading.textContent = aktifDil === 'en' ? 'Ingredients & Allergens' : 'İçerik & Alerjenler';
        if (toggleText) toggleText.textContent = aktifDil === 'en' ? 'Product Contents' : 'Ürün İçeriği';
        if (!icerik.length && !alerjenler.length && !not) {
            section.hidden = true;
            if (toggle) { toggle.hidden = true; toggle.setAttribute('aria-expanded', 'false'); }
            pills.innerHTML = '';
            notice.hidden = true;
            return;
        }
        section.hidden = true;
        if (toggle) { toggle.hidden = false; toggle.setAttribute('aria-expanded', 'false'); }
        pills.innerHTML = [
            ...icerik.map(entry => `<span class="detail-content-tag"><i class="fa-solid fa-bowl-food" aria-hidden="true"></i>${escapeHtml(entry)}</span>`),
            ...alerjenler.map(entry => `<span class="detail-content-tag is-allergen"><i class="fa-solid ${escapeHtml(KFM_YAYGIN_ALERJENLER.find(a => a.eslesme.test(String(entry)))?.ikon || 'fa-triangle-exclamation')}" aria-hidden="true"></i>${escapeHtml(kfmAlerjenEtiketi(entry))}</span>`),
        ].join('');
        if (notice) {
            notice.textContent = not;
            notice.hidden = !not;
        }
    }

    function kfmUrunIcerikBolumunuDegistir() {
        const toggle = document.getElementById('detailContentToggle');
        const section = document.getElementById('detailContentTags');
        if (!toggle || !section || toggle.hidden) return;
        const acik = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!acik));
        section.hidden = acik;
    }

    function openProductDetail(index, options = {}) {
        const item = options.product || window.__renderedProducts?.[index];
        if (!item) return;
        aktifDetayIndex = options.product ? null : index;
        window.__activeDetailProduct = { ...item };
        const interactionProduct = item;
        if (interactionProduct && options.recordInteraction !== false) recordDailySuggestionInteraction(interactionProduct);
        if (interactionProduct && options.recordInteraction !== false) kfmRecentEkle({ ...interactionProduct });
        const name = localizedProductName(item);
        const description = localizedProductDescription(item, '');
        const categoryName = localizedCategoryName(menuData[item.catKey], '');
        const image = kfmV21ProductImage(item, item.catKey);
        const fallback = kfmV21FallbackFor(item, item.catKey);
        const categoryScene = {
            'cat-kahve': { glow: 'rgba(165,84,41,.65)', depth: 'rgba(72,34,19,.64)', rim: 'rgba(255,205,151,.74)' },
            'cat-soguk': { glow: 'rgba(54,154,211,.58)', depth: 'rgba(11,63,113,.62)', rim: 'rgba(163,232,255,.70)' },
            'cat-tatli': { glow: 'rgba(225,127,155,.58)', depth: 'rgba(111,35,66,.57)', rim: 'rgba(255,207,220,.72)' },
            'cat-milkshake': { glow: 'rgba(224,126,170,.56)', depth: 'rgba(105,38,77,.55)', rim: 'rgba(255,211,236,.72)' },
            'cat-smoothie': { glow: 'rgba(94,174,113,.54)', depth: 'rgba(26,88,62,.56)', rim: 'rgba(194,255,213,.67)' },
            'cat-meyve': { glow: 'rgba(239,143,71,.56)', depth: 'rgba(132,58,20,.56)', rim: 'rgba(255,225,168,.70)' },
            'cat-cay': { glow: 'rgba(190,132,63,.54)', depth: 'rgba(105,65,18,.58)', rim: 'rgba(255,233,161,.70)' },
            'cat-nargile': { glow: 'rgba(113,93,183,.54)', depth: 'rgba(44,31,106,.62)', rim: 'rgba(211,194,255,.72)' }
        };
        const scene = categoryScene[item.catKey] || { glow: 'rgba(185,100,56,.55)', depth: 'rgba(70,33,20,.56)', rim: 'rgba(255,219,183,.68)' };
        const detailModal = document.getElementById('productDetailModal');
        detailModal.dataset.categoryKey = item.catKey || '';
        const detailHero = detailModal.querySelector('.detail-hero');
        detailHero.style.setProperty('--category-glow', scene.glow);
        detailHero.style.setProperty('--category-depth', scene.depth);
        detailHero.style.setProperty('--category-rim', scene.rim);
        detailHero.style.setProperty('--detail-scene-img', getDetailSceneImage(item.catKey));
        detailModal.style.setProperty('--category-glow', scene.glow);
        detailModal.style.setProperty('--category-depth', scene.depth);
        detailModal.style.setProperty('--category-rim', scene.rim);
        detailModal.classList.remove('detail-scene-refresh');
        void detailModal.offsetWidth;
        detailModal.classList.add('detail-scene-refresh');
        kfmSetDetailImage(item, name);
        const gallery = document.getElementById('detailGallery');
        const galleryImages = [...new Set([image, ...(Array.isArray(item.galeri_gorselleri) ? item.galeri_gorselleri : [])]
            .filter(url => typeof url === 'string' && /^https:\/\//.test(url)))];
        if (gallery) {
            gallery.hidden = galleryImages.length < 2;
            gallery.innerHTML = galleryImages.map((url, galleryIndex) => `<button type="button" class="detail-gallery-thumb ${galleryIndex === 0 ? 'is-active' : ''}" aria-label="${galleryIndex + 1}. görsel"><img src="${escapeHtml(url)}" alt="${escapeHtml(name)} ${galleryIndex + 1}" loading="lazy"></button>`).join('');
            gallery.querySelectorAll('.detail-gallery-thumb').forEach((button, galleryIndex) => button.addEventListener('click', () => {
                const imageElement = document.getElementById('detailImage');
                if (imageElement) imageElement.src = galleryImages[galleryIndex];
                gallery.querySelectorAll('.detail-gallery-thumb').forEach((thumb, index) => thumb.classList.toggle('is-active', index === galleryIndex));
            }));
        }
        document.getElementById('detailCategory').textContent = categoryName || 'Keyfimce';
        refreshDetailCategoryAction();
        document.getElementById('detailTitle').textContent = name;
        document.getElementById('detailDescription').textContent = description || (aktifDil === 'en' ? 'Carefully prepared for your enjoyment.' : 'Keyfiniz için özenle hazırlanır.');
        kfmUrunIcerikEtiketleriniGoster(item);
        document.getElementById('detailPrice').textContent = `${item.fiyat}₺`;
        const stock = document.getElementById('detailStock');
        const detailStockAmount = item.stokMiktar === null || item.stokMiktar === undefined ? null : Number(item.stokMiktar);
        const detailStockAmountText = Number.isFinite(detailStockAmount) ? ` · ${aktifDil === 'en' ? 'Left' : 'Kalan'}: ${new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(detailStockAmount)} ${item.birim || 'adet'}` : '';
        stock.textContent = !item.stoktaVar ? `${t('out_of_stock')}${detailStockAmountText}` : (item.stokUyari ? `${aktifDil === 'en' ? 'Low stock' : 'Stok eşiğinde'}${detailStockAmountText}` : `${aktifDil === 'en' ? 'Available' : 'Stokta mevcut'}${detailStockAmountText}`);
        stock.classList.toggle('out', !item.stoktaVar);
        stock.classList.toggle('warning', item.stoktaVar && item.stokUyari);
        const badge = document.getElementById('detailBadge');
        badge.textContent = t('out_of_stock');
        badge.style.display = item.stoktaVar ? 'none' : 'inline-flex';
	        const extras = document.getElementById('detailExtras');
        extras.innerHTML = (item.ekstralar || []).map(ex => {
            const exName = localizedExtraName(ex);
            return `<span class="extra-pill">+${escapeHtml(exName)} ${ex.fiyat}₺</span>`;
	        }).join('');
	        const variants = kfmOrderProductVariants(item);
	        const variantsSection = document.getElementById('detailVariants');
	        const variantOptions = document.getElementById('detailVariantOptions');
	        window.__activeDetailVariantNames = [];
	        window.__activeDetailVariantSelections = [];
	        if (variantsSection && variantOptions) {
	            variantsSection.hidden = variants.length === 0;
	            variantOptions.innerHTML = '';
	            const selectionsSync = () => {
	                window.__activeDetailVariantSelections = [...variantOptions.querySelectorAll('input:checked')]
	                    .map(input => ({ isim: String(input.dataset.variantName || '').trim(), grup: String(input.dataset.variantGroup || '').trim() }))
	                    .filter(selection => selection.isim && selection.grup);
	                window.__activeDetailVariantNames = window.__activeDetailVariantSelections.map(selection => selection.isim);
	                variantOptions.querySelectorAll('[data-variant-selection-counter]').forEach(counter => {
	                    const groupName = String(counter.dataset.variantSelectionCounter || '');
	                    const limit = Number(counter.dataset.selectionLimit || 0);
                    if (!groupName) return;
                    const selected = [...variantOptions.querySelectorAll('input:checked')]
                        .filter(input => input.dataset.variantGroup === groupName).length;
                    const remaining = Math.max(0, limit - selected);
                    const required = counter.dataset.selectionRequired === 'true';
                    const counterText = limit ? (remaining ? `${selected}/${limit} seçildi · ${remaining} kaldı` : `${selected}/${limit} seçildi · Limit doldu`) : (selected ? `${selected} seçildi` : 'Henüz seçim yok');
                    counter.textContent = required ? (selected ? `✓ Seçim tamam · ${counterText}` : `● Seçim gerekli · ${counterText}`) : counterText;
                    counter.classList.toggle('is-full', limit > 0 && remaining === 0);
                    counter.classList.toggle('is-required', required && selected === 0);
                    counter.classList.toggle('is-complete', required && selected > 0);
	                });
	            };
			            kfmOrderVariantGroups(variants).forEach(group => {
	                const groupEl = document.createElement('section');
	                groupEl.className = 'detail-variant-group';
	                const title = document.createElement('div');
	                title.className = 'detail-variant-group-title';
	                const titleText = document.createElement('span');
	                titleText.textContent = group.grup;
	                const rule = document.createElement('small');
	                rule.textContent = `${group.zorunlu ? 'Seçim gerekli' : 'İsteğe bağlı'} · ${group.secim_tipi === 'tekli' ? 'Tek seçim' : (group.max_secim ? `En fazla ${group.max_secim} seçim` : 'Birden fazla seçilebilir')}`;
	                title.append(titleText, rule);
                if (group.max_secim || group.zorunlu) {
                    const counter = document.createElement('small');
                    counter.className = 'detail-variant-selection-counter';
                    counter.dataset.variantSelectionCounter = group.grup;
                    counter.dataset.selectionLimit = String(group.max_secim);
                    counter.dataset.selectionRequired = String(group.zorunlu);
                    title.appendChild(counter);
	                }
	                groupEl.appendChild(title);
			                group.varyantlar.forEach(variant => {
			                    const option = document.createElement('label');
			                    option.className = 'detail-variant-option';
			                    option.classList.toggle('is-unavailable', !variant.stokta_var);
			                    const input = document.createElement('input');
	                    input.type = group.secim_tipi === 'tekli' ? 'radio' : 'checkbox';
	                    input.name = `variant-${group.grup}`;
	                    input.value = kfmOrderVariantKey(variant);
	                    input.dataset.variantName = variant.isim;
			                    input.dataset.variantGroup = variant.grup;
			                    input.setAttribute('aria-label', `${variant.isim} alt seçeneğini ekle`);
			                    input.disabled = !variant.stokta_var;
	                    input.addEventListener('change', () => {
	                        if (input.checked && input.type === 'checkbox' && group.max_secim) {
	                            const selectedInGroup = [...variantOptions.querySelectorAll('input:checked')]
	                                .filter(candidate => candidate.dataset.variantGroup === group.grup);
	                            if (selectedInGroup.length > group.max_secim) {
	                                input.checked = false;
	                                toast(`⚠️ ${group.grup} için en fazla ${group.max_secim} seçim yapabilirsiniz.`);
	                            }
	                        }
	                        selectionsSync();
	                    });
	                    const main = document.createElement('span');
	                    main.className = 'detail-variant-option-main';
                    const variantStockAmount = variant.stok_miktar === null || variant.stok_miktar === undefined ? null : Number(variant.stok_miktar);
                    const variantStockText = Number.isFinite(variantStockAmount) ? ` · Kalan: ${new Intl.NumberFormat('tr-TR', { maximumFractionDigits: 2 }).format(variantStockAmount)} ${variant.stok_birim || 'adet'}` : '';
                    main.append(input, document.createTextNode(!variant.stokta_var ? `${variant.isim} (Stokta yok${variantStockText})` : (variant.stok_uyari ? `${variant.isim} (Stok eşiğinde${variantStockText})` : variant.isim)));
	                    const price = document.createElement('span');
	                    price.className = 'detail-variant-option-price';
	                    price.textContent = variant.ek_fiyat ? `+${variant.ek_fiyat}₺` : 'Dahil';
	                    option.append(main, price);
	                    groupEl.appendChild(option);
	                });
	                variantOptions.appendChild(groupEl);
	            });
	            selectionsSync();
	        }
	        const addToCartButton = document.getElementById('detailAddToCart');
	        if (addToCartButton) {
	            addToCartButton.disabled = !item.stoktaVar;
	            addToCartButton.innerHTML = item.stoktaVar
	                ? '<i class="fa-solid fa-bag-shopping"></i> Sepete Ekle'
	                : '<i class="fa-solid fa-ban"></i> Stokta Yok';
	        }
	        renderDetailPairSuggestion(item);
        modalAc('productDetailModal');
    }

    // ══════════════════════════════════════════════════════════════
    // ── YORUM & EMAILJS ──
    // ══════════════════════════════════════════════════════════════
    function yorumModalAc() { modalAc('yorumModal'); }

    function oneriIstekPenceresiAc() {
        const callType = document.getElementById('waiterCallType');
        const note = document.getElementById('waiterCallNote');
        if (callType) callType.value = 'oneri';
        if (note && !note.value.trim()) note.placeholder = 'Örn. Menüye şu ürünü ekleyebilir misiniz?';
        garsonCagriPenceresiAc();
    }

    function setPuan(r) {
        secilenPuan = r;
        document.querySelectorAll('#starContainer i').forEach((s, i) => {
            s.className = i < r ?
                'fa-solid fa-star cursor-pointer transition-transform hover:scale-110' :
                'fa-regular fa-star cursor-pointer text-gray-300 transition-transform hover:scale-110';
        });
    }

    function yorumKaydet() {
        const msg = document.getElementById('txtMesaj').value.trim();
        if (!msg) { toast('❌ ' + (aktifDil === 'en' ? 'Please write your feedback' : 'Lütfen görüşünüzü yazın')); return; }
        const adVerisi   = document.getElementById('txtAd').value.trim() || (aktifDil === 'en' ? 'Visitor' : 'Ziyaretçi');
        const tarihVerisi = new Date().toLocaleDateString('tr-TR');
        yorumData.unshift({ id: Date.now(), isim: adVerisi, mesaj: msg, skor: secilenPuan, tarih: tarihVerisi });
        saveAll();
        const EMAILJS_SERVICE_ID  = "service_r8otkpg";
        const EMAILJS_TEMPLATE_ID = "template_axiuzg4";
        if (window.emailjs) {
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                isim: adVerisi, mesaj: msg, skor: secilenPuan, tarih: tarihVerisi
            }).then(
                r   => console.log("Mail gönderildi!", r.status, r.text),
                err => console.error("Mail hatası:", err)
            );
        }
        document.getElementById('txtMesaj').value = '';
        document.getElementById('txtAd').value    = '';
        setPuan(5);
        modalKapat('yorumModal');
        skorGuncelle();
        toast(t('toast_review_sent'));
    }

    function skorGuncelle() {
        const avg = yorumData.length ?
            (yorumData.reduce((a, c) => a + c.skor, 0) / yorumData.length).toFixed(1) + ' ★' :
            t('review_nav_default');
        document.getElementById('lblSkor').textContent = avg;
    }

    // ══════════════════════════════════════════════════════════════
    // ── GARSON ÇAĞIRMA ──
    // ══════════════════════════════════════════════════════════════
    // KFM_WAITER_RELAY_V31 — Ziyaretçi çağrıları yalnızca HTTPS relay üzerinden iletilir.
    // Bu yapılandırma dosyası herkese açıktır; hiçbir erişim anahtarı içermez.
    const KFM_WAITER_RELAY_CONFIG = 'waiter_relay_config.json';
    // Genel relay adresi gizli değildir; yapılandırma alınamasa da aynı canlı Worker'a hızla geri dönülür.
    const KFM_WAITER_RELAY_FALLBACK_URL = 'https://keyfimce-relay.muhammedtalhakanat-d30.workers.dev';
    const KFM_WAITER_RELAY_CONFIG_TIMEOUT_MS = 3000;
    const KFM_WAITER_MAX_ATTEMPTS = 3;
    const KFM_WAITER_TIMEOUT_MS = 8500;
    let kfmWaiterRelayUrlPromise = null;

    async function getWaiterRelayUrl() {
        if (kfmWaiterRelayUrlPromise) return kfmWaiterRelayUrlPromise;
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), KFM_WAITER_RELAY_CONFIG_TIMEOUT_MS);
        kfmWaiterRelayUrlPromise = fetch(`${KFM_WAITER_RELAY_CONFIG}?v=${Date.now()}`, {
            cache: 'no-store',
            signal: controller.signal,
        })
            .then(response => {
                if (!response.ok) throw new Error('Relay yapılandırması alınamadı.');
                return response.json();
            })
            .then(config => {
                const relayUrl = String(config?.relay_url || '').trim().replace(/\/+$/, '');
                if (!/^https:\/\//i.test(relayUrl)) throw new Error('Garson çağrı servisi henüz yapılandırılmadı.');
                return relayUrl;
            })
            .catch(error => {
                kfmWaiterRelayUrlPromise = null;
                console.warn('Relay yapılandırması alınamadı; canlı güvenli relay adresi kullanılacak.', error);
                return KFM_WAITER_RELAY_FALLBACK_URL;
            })
            .finally(() => {
                window.clearTimeout(timeoutId);
            });
        return kfmWaiterRelayUrlPromise;
    }

    function kfmWaiterDelay(milliseconds) {
        return new Promise(resolve => window.setTimeout(resolve, milliseconds));
    }

    function kfmWaiterRelayCandidates(primaryRelayUrl) {
        return [...new Set([primaryRelayUrl, KFM_WAITER_RELAY_FALLBACK_URL]
            .map(url => String(url || '').trim().replace(/\/+$/, ''))
            .filter(url => /^https:\/\//i.test(url)))];
    }

	    async function kfmWaiterRelayPost(relayUrls, endpoint, requestBody) {
	        let lastNetworkError = null;
	        for (const relayUrl of kfmWaiterRelayCandidates(relayUrls)) {
            for (let attempt = 1; attempt <= KFM_WAITER_MAX_ATTEMPTS; attempt += 1) {
                const controller = new AbortController();
                const timeoutId = window.setTimeout(() => controller.abort(), KFM_WAITER_TIMEOUT_MS);
                try {
	                    const response = await fetch(`${relayUrl}${endpoint}`, {
                        method: 'POST',
                        mode: 'cors',
                        credentials: 'omit',
                        cache: 'no-store',
                        // `text/plain` CORS-safelisted olduğu için bazı ağlarda OPTIONS/preflight engellense bile çağrı doğrudan iletilebilir.
                        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
                        body: JSON.stringify(requestBody),
                        signal: controller.signal,
                    });
                    // 4xx yanıtları kullanıcıya/istemciye ait olduğundan tekrar gönderilmez.
                    if (response.status < 500) return response;
                    lastNetworkError = new Error(`Garson çağrı servisi geçici olarak yanıt veremedi (HTTP ${response.status}).`);
                } catch (error) {
                    lastNetworkError = error;
                } finally {
                    window.clearTimeout(timeoutId);
                }

                // Aynı request_id tekrar kullanıldığı için ilk istek ulaştıysa relay kaydı yinelenmez.
                await kfmWaiterDelay(450 * attempt);
            }
        }
	        throw lastNetworkError || new Error('Garson çağrı servisine ulaşılamadı.');
	    }

	    async function kfmWaiterCallPost(relayUrls, requestBody) {
	        return kfmWaiterRelayPost(relayUrls, '/api/waiter-call', requestBody);
	    }

	    async function kfmOrderPost(relayUrls, requestBody) {
	        return kfmWaiterRelayPost(relayUrls, '/api/orders', requestBody);
	    }

	    function kfmWaiterRequestId() {
	        if (window.crypto?.randomUUID) return window.crypto.randomUUID();
	        return `kfm-${Date.now()}-${Math.random().toString(16).slice(2)}`;
	    }

	    // ── WEB SİPARİŞ SEPETİ ──
	    let kfmOrderCart = [];

	    function kfmFormatOrderTotal(amountInKurus) {
	        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 2 }).format(amountInKurus / 100);
	    }

	    function kfmOrderProductKey(product, name, unitPrice, variantNames = []) {
	        const variantsKey = [...new Set(variantNames.map(name => String(name || '').trim()).filter(Boolean))].sort().join('|');
	        return `${String(product?.id || product?.kod || `${name}__${unitPrice}`)}__${variantsKey}`;
	    }

			    function kfmOrderProductVariants(product) {
	        const seen = new Set();
	        return (Array.isArray(product?.varyantlar) ? product.varyantlar : [])
	            .map(variant => ({
	                isim: String(variant?.isim || '').trim(),
	                ek_fiyat: Math.max(0, Math.round(Number(variant?.ek_fiyat || 0))),
			                grup: String(variant?.grup || 'Alt seçenekler').trim().slice(0, 48) || 'Alt seçenekler',
	                grup_sira: Math.max(0, Math.min(999, Math.round(Number(variant?.grup_sira || 0)))),
	                zorunlu: variant?.zorunlu === true,
	                secim_tipi: String(variant?.secim_tipi || '').toLowerCase() === 'tekli' ? 'tekli' : 'coklu',
	                grup_max_secim: Math.max(0, Math.min(8, Math.round(Number(variant?.grup_max_secim || 0)))),
                        stokta_var: variant?.stokta_var !== false,
                        stok_uyari: variant?.stok_uyari === true,
                        stok_miktar: variant?.stok_miktar !== null && variant?.stok_miktar !== undefined && Number.isFinite(Number(variant.stok_miktar)) ? Number(variant.stok_miktar) : null,
                        stok_birim: String(variant?.stok_birim || 'adet').trim() || 'adet',
	            }))
	            .filter(variant => variant.isim && variant.isim.length <= 72 && !seen.has(kfmOrderVariantKey(variant)) && seen.add(kfmOrderVariantKey(variant)));
	    }

	    function kfmOrderVariantKey(variant) {
	        return `${String(variant?.grup || 'Alt seçenekler').trim()}\u241f${String(variant?.isim || '').trim()}`;
	    }

	    function kfmOrderVariantGroups(variants) {
			        const groups = new Map();
			        variants.forEach(variant => {
	            const group = groups.get(variant.grup) || { grup: variant.grup, grup_sira: variant.grup_sira, zorunlu: false, secim_tipi: 'coklu', max_secim: 0, varyantlar: [] };
			            group.grup_sira = Math.min(group.grup_sira, variant.grup_sira);
	            group.zorunlu ||= variant.zorunlu;
	            if (variant.secim_tipi === 'tekli') group.secim_tipi = 'tekli';
	            group.max_secim = variant.grup_max_secim || group.max_secim;
	            group.varyantlar.push(variant);
	            groups.set(variant.grup, group);
	        });
	        return [...groups.values()].map(group => ({ ...group, max_secim: group.secim_tipi === 'tekli' ? 1 : group.max_secim })).sort((a, b) => a.grup_sira - b.grup_sira || a.grup.localeCompare(b.grup, 'tr'));
	    }

	    function kfmSelectedOrderVariants(product, selectedNames = []) {
	        const requested = new Set((Array.isArray(selectedNames) ? selectedNames : [])
	            .map(name => typeof name === 'object' ? kfmOrderVariantKey(name) : String(name || '').trim())
	            .filter(Boolean));
			        return kfmOrderProductVariants(product).filter(variant => variant.stokta_var && (requested.has(kfmOrderVariantKey(variant)) || requested.has(variant.isim)));
	    }

			    function kfmMissingRequiredVariantGroups(product, selectedNames = []) {
	        const selectedKeys = new Set(kfmSelectedOrderVariants(product, selectedNames).map(kfmOrderVariantKey));
	        return kfmOrderVariantGroups(kfmOrderProductVariants(product))
	            .filter(group => group.zorunlu && !group.varyantlar.some(variant => selectedKeys.has(kfmOrderVariantKey(variant))))
			            .map(group => group.grup);
			    }

	    function kfmUnavailableRequiredVariantGroups(product) {
	        return kfmOrderVariantGroups(kfmOrderProductVariants(product))
	            .filter(group => group.zorunlu && !group.varyantlar.some(variant => variant.stokta_var))
	            .map(group => group.grup);
	    }

	    function kfmExceededVariantGroups(product, selectedNames = []) {
	        const selectedKeys = new Set(kfmSelectedOrderVariants(product, selectedNames).map(kfmOrderVariantKey));
	        return kfmOrderVariantGroups(kfmOrderProductVariants(product))
	            .filter(group => group.max_secim > 0 && group.varyantlar.filter(variant => selectedKeys.has(kfmOrderVariantKey(variant))).length > group.max_secim)
	            .map(group => group.grup);
	    }

	    function kfmAddProductToOrder(product, selectedNames = []) {
	        if (!product || !product.stoktaVar) {
	            toast('⚠️ Bu ürün şu anda siparişe eklenemiyor.');
	            return;
	        }
			        const productName = localizedProductName(product).trim();
			        const baseUnitPrice = Math.round(Number(product.fiyat) * 100);
			        const unavailableGroups = kfmUnavailableRequiredVariantGroups(product);
			        if (unavailableGroups.length) {
			            toast(`⚠️ Stokta seçenek yok: ${unavailableGroups.join(', ')}`);
			            return;
			        }
			        const missingGroups = kfmMissingRequiredVariantGroups(product, selectedNames);
	        if (missingGroups.length) {
	            toast(`⚠️ Önce seçin: ${missingGroups.join(', ')}`);
	            return;
	        }
	        const exceededGroups = kfmExceededVariantGroups(product, selectedNames);
	        if (exceededGroups.length) {
	            toast(`⚠️ Seçim limitini azaltın: ${exceededGroups.join(', ')}`);
	            return;
	        }
	        const selectedVariants = kfmSelectedOrderVariants(product, selectedNames);
	        const variantAmount = selectedVariants.reduce((sum, variant) => sum + variant.ek_fiyat, 0) * 100;
	        const unitPrice = baseUnitPrice + variantAmount;
	        const variantNames = selectedVariants.map(variant => variant.isim);
	        const name = `${productName}${variantNames.length ? ` (${variantNames.join(', ')})` : ''}`;
	        if (!productName || !Number.isSafeInteger(unitPrice) || unitPrice < 0) {
	            toast('⚠️ Ürün bilgisi siparişe uygun değil.');
	            return;
	        }
	        const productKey = kfmOrderProductKey(product, productName, baseUnitPrice, variantNames);
	        const existing = kfmOrderCart.find(item => item.productKey === productKey);
	        if (existing) existing.quantity = Math.min(99, existing.quantity + 1);
	        else kfmOrderCart.push({
                    productKey, productName, name, unitPrice, quantity: 1,
                    categoryKey: String(product?.catKey || product?.kategori_id || '').trim(),
                    categoryName: String(menuData?.[product?.catKey]?.isim || product?.kategori || '').trim(),
                    alt_secenekler: variantNames,
	            alt_secenek_gruplari: selectedVariants.map(variant => ({ isim: variant.isim, grup: variant.grup })),
		});
		kfmRenderOrderCart();
		kfmOrderBadgePulse();
		kfmCartAddToast(name, existing ? existing.quantity : 1);
	}

        function kfmOrderBadgePulse() {
            const badge = document.getElementById('orderCartBadge');
            if (!badge || badge.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            badge.classList.remove('is-count-pulsing');
            void badge.offsetWidth;
            badge.classList.add('is-count-pulsing');
            clearTimeout(badge._pulseTimer);
            badge._pulseTimer = setTimeout(() => badge.classList.remove('is-count-pulsing'), 320);
        }

	function kfmGorunenUrunuSepeteEkle(index) {
	        const product = window.__renderedProducts?.[index];
	        if (kfmOrderProductVariants(product).length) {
	            openProductDetail(index);
	            toast('Alt seçenekleri seçip ürünü sepetinize ekleyin.');
	            return;
	        }
	        kfmAddProductToOrder(product);
	    }

	    function kfmAktifUrunuSepeteEkle() {
	        kfmAddProductToOrder(window.__activeDetailProduct, window.__activeDetailVariantSelections || []);
	    }

		    function kfmOrderCartChange(index, delta) {
	        const item = kfmOrderCart[index];
	        if (!item || !Number.isInteger(delta) || !delta) return;
	        const nextQuantity = Math.max(0, Math.min(99, item.quantity + delta));
	        if (nextQuantity === item.quantity) {
	            toast('Bu üründen en fazla 99 adet ekleyebilirsiniz.');
	            return;
	        }
	        item.quantity = nextQuantity;
	        if (!item.quantity) {
	            kfmOrderCart.splice(index, 1);
	            kfmRenderOrderCart();
	            toast(`✓ ${item.name} sepetten çıkarıldı.`);
	            return;
	        }
		        kfmRenderOrderCart();
		        toast(`✓ ${item.name} adedi ${item.quantity} oldu.`);
		    }

		    function kfmOrderStatusGuncelle(message, mode = 'idle') {
		        const status = document.getElementById('orderStatusMessage');
		        if (!status) return;
		        status.textContent = String(message || '');
		        status.dataset.mode = mode;
		    }

	    // ── KFM_FAVORITES_V1: cihazda saklanan favoriler ve son seçilenler ──
	    const KFM_FAVORITES_KEY = 'kfm_favorites_v1';
	    const KFM_RECENT_KEY = 'kfm_recent_v1';
	    const KFM_FAVORITES_MAX = 12;
	    const KFM_RECENT_MAX = 8;
	    let kfmFavoritesOpen = false;
	    let kfmRecentOpen = false;

	    function kfmProductRefFromItem(item) {
	        if (!item) return null;
	        const catKey = String(item.catKey || '').trim();
	        const id = String(item.id ?? '').trim();
	        if (!catKey || !id) return null;
	        return { catKey, id };
	    }

	    function kfmProductByRef(ref) {
	        if (!ref?.catKey || !ref?.id) return null;
	        const category = menuData?.[ref.catKey];
	        if (!category) return null;
	        return (category.urunler || []).find(u => String(u.id) === String(ref.id)) || null;
	    }

	    function kfmRefListRead(key, max) {
	        try {
	            const raw = JSON.parse(localStorage.getItem(key) || '[]');
	            return Array.isArray(raw) ? raw.filter(r => r?.catKey && r?.id).slice(0, max) : [];
	        } catch { return []; }
	    }

	    function kfmRefListWrite(key, list) {
	        try { localStorage.setItem(key, JSON.stringify(list.slice(0, 24))); } catch { /* kota dolu: favori opsiyoneldir */ }
	    }

	    function kfmFavoriteRefs() { return kfmRefListRead(KFM_FAVORITES_KEY, KFM_FAVORITES_MAX); }
	    function kfmRecentRefs() { return kfmRefListRead(KFM_RECENT_KEY, KFM_RECENT_MAX); }

	    function kfmIsFavorite(ref) {
	        if (!ref) return false;
	        return kfmFavoriteRefs().some(r => r.catKey === ref.catKey && r.id === ref.id);
	    }

	    function kfmFavoriteToggle(ref) {
	        if (!ref) return false;
	        const list = kfmFavoriteRefs();
	        const index = list.findIndex(r => r.catKey === ref.catKey && r.id === ref.id);
	        if (index >= 0) { list.splice(index, 1); kfmRefListWrite(KFM_FAVORITES_KEY, list); kfmFavoritesStripGuncelle(); return false; }
	        list.unshift({ ...ref, t: Date.now() });
	        kfmRefListWrite(KFM_FAVORITES_KEY, list.slice(0, KFM_FAVORITES_MAX));
	        kfmFavoritesStripGuncelle();
	        return true;
	    }

	    function kfmRecentEkle(item) {
	        const ref = kfmProductRefFromItem(item);
	        if (!ref) return;
	        const list = kfmRecentRefs().filter(r => !(r.catKey === ref.catKey && r.id === ref.id));
	        list.unshift({ ...ref, t: Date.now() });
	        kfmRefListWrite(KFM_RECENT_KEY, list.slice(0, KFM_RECENT_MAX));
	        kfmFavoritesStripGuncelle();
	    }

	    function kfmFavoritesBolumToggle(kind) {
	        if (kind === 'favorites') kfmFavoritesOpen = !kfmFavoritesOpen;
	        else if (kind === 'recent') kfmRecentOpen = !kfmRecentOpen;
	        kfmFavoritesStripGuncelle();
	    }

	    function kfmFavoritesTemizle() {
	        if (!kfmFavoriteRefs().length) return;
	        kfmRefListWrite(KFM_FAVORITES_KEY, []);
	        kfmFavoritesStripGuncelle();
	        toast(aktifDil === 'en' ? 'Favorites cleared on this device.' : 'Favoriler bu cihazdan temizlendi.');
	    }

	    function kfmRecentTemizle() {
	        if (!kfmRecentRefs().length) return;
	        kfmRefListWrite(KFM_RECENT_KEY, []);
	        kfmFavoritesStripGuncelle();
	        toast(aktifDil === 'en' ? 'Recently viewed products cleared on this device.' : 'Son seçilenler bu cihazdan temizlendi.');
	    }

	    function kfmFavChipHtml(ref, isFav) {
	        const product = kfmProductByRef(ref);
	        if (!product || product.stoktaVar === false) return '';
	        const listKey = isFav ? 'fav' : 'recent';
	        const name = localizedProductName(product);
	        const image = kfmCachedProductImageUrl(kfmV21ProductImage(product, ref.catKey));
	        const refJson = escapeHtml(JSON.stringify(ref));
	        return `<div class="fav-chip" role="listitem" data-ref="${refJson}" data-kind="${listKey}">
	            <img src="${escapeHtml(image)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
	            <span><span class="fav-chip-name">${escapeHtml(name)}</span><span class="fav-chip-price">${product.fiyat}₺</span></span>
	            ${isFav ? `<button type="button" class="fav-remove" aria-label="${escapeHtml(name)} favorilerden çıkar" onclick="event.stopPropagation();kfmFavoriteKaldir('${escapeHtml(ref.catKey)}','${escapeHtml(ref.id)}')"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>` : ''}
	        </div>`;
	    }

	    function kfmFavoritesStripGuncelle() {
	        const section = document.getElementById('favoritesSection');
	        const favStrip = document.getElementById('favoritesStrip');
	        const recentStrip = document.getElementById('recentStrip');
	        if (!section || !favStrip || !recentStrip) return;
	        const favRefs = kfmFavoriteRefs();
	        const recentRefs = kfmRecentRefs().filter(r => !favRefs.some(f => f.catKey === r.catKey && f.id === r.id));
	        const favChips = favRefs.map(ref => kfmFavChipHtml(ref, true)).filter(Boolean);
	        const recentChips = recentRefs.map(ref => kfmFavChipHtml(ref, false)).filter(Boolean);
	        section.hidden = favChips.length === 0 && recentChips.length === 0;
	        document.getElementById('favoritesGroup').hidden = favChips.length === 0;
	        document.getElementById('recentGroup').hidden = recentChips.length === 0;
	        favStrip.innerHTML = favChips.join('');
	        recentStrip.innerHTML = recentChips.join('');
	        favStrip.hidden = !kfmFavoritesOpen;
	        recentStrip.hidden = !kfmRecentOpen;
	        const favToggle = document.getElementById('favoritesToggle');
	        const recentToggle = document.getElementById('recentToggle');
	        favToggle.setAttribute('aria-expanded', String(kfmFavoritesOpen));
	        recentToggle.setAttribute('aria-expanded', String(kfmRecentOpen));
	        document.getElementById('favoritesHeading').textContent = aktifDil === 'en' ? 'Favorites' : 'Favorilerim';
	        document.getElementById('recentHeading').textContent = aktifDil === 'en' ? 'Recently viewed' : 'Son Seçilenler';
	        document.getElementById('favoritesCount').textContent = `(${favChips.length})`;
	        document.getElementById('recentCount').textContent = `(${recentChips.length})`;
	        for (const [id, hasItems, label] of [
	            ['favoritesClear', favChips.length > 0, aktifDil === 'en' ? 'Clear favorites' : 'Favorileri temizle'],
	            ['recentClear', recentChips.length > 0, aktifDil === 'en' ? 'Clear recently viewed products' : 'Son seçilenleri temizle'],
	        ]) {
	            const button = document.getElementById(id);
	            button.disabled = !hasItems;
	            button.textContent = aktifDil === 'en' ? 'Clear' : 'Temizle';
	            button.title = label;
	            button.setAttribute('aria-label', label);
	        }
	        favToggle.setAttribute('aria-label', `${document.getElementById('favoritesHeading').textContent}, ${favChips.length}`);
	        recentToggle.setAttribute('aria-label', `${document.getElementById('recentHeading').textContent}, ${recentChips.length}`);
	        favStrip.querySelectorAll('.fav-chip').forEach(chip => chip.addEventListener('click', () => {
	            try {
	                const ref = JSON.parse(chip.dataset.ref || 'null');
	                const product = kfmProductByRef(ref);
	                if (!product) return;
	                const list = window.__renderedProducts || [];
	                const index = list.findIndex(u => String(u.id) === String(product.id) && u.catKey === ref.catKey);
	                if (index >= 0) { openProductDetail(index); return; }
	                openProductDetail(0, { product: { ...product, catKey: ref.catKey }, recordInteraction: false });
	            } catch { /* bozuk referans: yoksay */ }
	        }));
	        recentStrip.querySelectorAll('.fav-chip').forEach(chip => chip.addEventListener('click', () => {
	            try {
	                const ref = JSON.parse(chip.dataset.ref || 'null');
	                const product = kfmProductByRef(ref);
	                if (!product) return;
	                const list = window.__renderedProducts || [];
	                const index = list.findIndex(u => String(u.id) === String(product.id) && u.catKey === ref.catKey);
	                if (index >= 0) { openProductDetail(index); return; }
	                openProductDetail(0, { product: { ...product, catKey: ref.catKey }, recordInteraction: false });
	            } catch { /* bozuk referans: yoksay */ }
	        }));
	        document.querySelectorAll('.fav-toggle').forEach(button => {
	            try {
	                const ref = JSON.parse(button.dataset.favRef || 'null');
	                const isFav = kfmIsFavorite(ref);
	                button.classList.toggle('is-fav', isFav);
	                button.setAttribute('aria-pressed', String(isFav));
	                button.setAttribute('aria-label', isFav ? 'Favorilerden çıkar' : 'Favorilere ekle');
	                button.title = isFav ? 'Favorilerden çıkar' : 'Favorilere ekle';
	                button.querySelector('i')?.classList.toggle('fa-solid', isFav);
	                button.querySelector('i')?.classList.toggle('fa-regular', !isFav);
	            } catch { /* bozuk referans */ }
	        });
	    }

	    function kfmFavoriteKaldir(catKey, id) {
	        kfmFavoriteToggle({ catKey: String(catKey || ''), id: String(id || '') });
	    }

	    function kfmFavToggleHtml(item) {
	        const ref = kfmProductRefFromItem(item);
	        if (!ref) return '';
	        const isFav = kfmIsFavorite(ref);
	        const refJson = escapeHtml(JSON.stringify(ref));
	        return `<button type="button" class="fav-toggle ${isFav ? 'is-fav' : ''}" data-fav-ref="${refJson}" aria-pressed="${isFav}" aria-label="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}" title="${isFav ? 'Favorilerden çıkar' : 'Favorilere ekle'}"><i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart" aria-hidden="true"></i></button>`;
	    }

	    function kfmFavToggleBagla(scope) {
	        (scope || document).querySelectorAll('.fav-toggle:not([data-fav-bound])').forEach(button => {
	            button.dataset.favBound = 'true';
	            button.addEventListener('click', event => {
	                event.stopPropagation();
	                try {
	                    const ref = JSON.parse(button.dataset.favRef || 'null');
	                    const nowFav = kfmFavoriteToggle(ref);
	                    button.classList.toggle('is-fav', nowFav);
	                    button.setAttribute('aria-pressed', String(nowFav));
	                    button.querySelector('i')?.classList.toggle('fa-solid', nowFav);
	                    button.querySelector('i')?.classList.toggle('fa-regular', !nowFav);
	                    toast(nowFav ? '❤️ Favorilere eklendi.' : 'Favorilerden çıkarıldı.');
	                } catch { /* bozuk referans */ }
	            });
	        });
	    }

	    // ── KFM_ORDER_TRACKING_V1: sipariş durumu takip görünümü ──
	    const KFM_TRACKING_KEY = 'kfm_order_tracking_v1';
	    const KFM_TRACKING_LABELS = {
	        bekliyor: { tr: 'Ekibe iletildi', en: 'Sent to team' },
	        alindi: { tr: 'Alındı', en: 'Received' },
	        hazirlaniyor: { tr: 'Hazırlanıyor', en: 'Preparing' },
	        hazir: { tr: 'Hazır', en: 'Ready' },
	        iptal: { tr: 'İptal edildi', en: 'Cancelled' },
	    };

	    function kfmOrderTrackingKaydet(tracking) {
	        if (!tracking?.kod) return;
	        try { localStorage.setItem(KFM_TRACKING_KEY, JSON.stringify({ kod: String(tracking.kod), masa: String(tracking.masa || ''), kayit: Date.now() })); } catch { /* opsiyonel */ }
	    }

	    function kfmOrderTrackingOku() {
	        try {
	            const data = JSON.parse(localStorage.getItem(KFM_TRACKING_KEY) || 'null');
	            if (!data?.kod) return null;
	            if (Date.now() - (data.kayit || 0) > 24 * 60 * 60 * 1000) return null; // bir günlük takip ömrü
	            return data;
	        } catch { return null; }
	    }

	    async function kfmOrderTrackingYenile() {
	        const tracking = kfmOrderTrackingOku();
	        const panel = document.getElementById('orderTrackingPanel');
	        const meta = document.getElementById('orderTrackingMeta');
	        if (!tracking || !panel) { if (panel) panel.hidden = true; return; }
	        panel.hidden = false;
	        if (meta) meta.textContent = 'Durum sorgulanıyor…';
	        try {
	            const relayUrl = await getWaiterRelayUrl();
	            const candidates = kfmWaiterRelayCandidates(relayUrl);
	            let lastError = null;
	            for (const base of candidates) {
	                try {
	                    const response = await fetch(`${base}/api/orders/track/${encodeURIComponent(tracking.kod)}`, { cache: 'no-store', headers: { 'Accept': 'application/json' } });
	                    if (response.status === 404) { kfmOrderTrackingPaneliniGizle(); return; }
	                    if (!response.ok) throw new Error(`HTTP ${response.status}`);
	                    const data = await response.json();
	                    kfmOrderTrackingGoster(data?.siparis || {});
	                    return;
	                } catch (error) { lastError = error; }
	            }
	            throw lastError || new Error('Takip servisine ulaşılamadı.');
	        } catch (error) {
	            if (meta) meta.textContent = 'Sipariş durumu şu anda okunamadı; birazdan tekrar deneyin.';
	            console.warn('Sipariş takip sorgusu başarısız:', error);
	        }
	    }

	    function kfmOrderTrackingPaneliniGizle() {
	        try { localStorage.removeItem(KFM_TRACKING_KEY); } catch { }
	        const panel = document.getElementById('orderTrackingPanel');
	        if (panel) panel.hidden = true;
	    }

	    function kfmOrderTrackingPaneliniTazeleGuvenli() {
	        window.setTimeout(() => { kfmOrderTrackingYenile().catch(() => {}); }, 600);
	    }

	    function kfmOrderTrackingGoster(siparis) {
	        const panel = document.getElementById('orderTrackingPanel');
	        const steps = document.getElementById('orderTrackingSteps');
	        const meta = document.getElementById('orderTrackingMeta');
	        const title = document.getElementById('orderTrackingTitle');
	        if (!panel || !steps) return;
	        panel.hidden = false;
	        const durum = String(siparis?.durum || 'bekliyor');
	        if (title) title.textContent = aktifDil === 'en' ? 'Order Tracking' : 'Sipariş Takibi';
	        if (durum === 'iptal') {
	            steps.querySelectorAll('li').forEach(li => { li.classList.remove('is-done', 'is-active'); li.classList.add('is-cancelled'); });
	            if (meta) meta.textContent = aktifDil === 'en' ? 'This order was cancelled. Please contact the team.' : 'Bu sipariş iptal edildi. Ekip ile iletişime geçin.';
	            return;
	        }
	        const siralama = ['alindi', 'hazirlaniyor', 'hazir'];
	        const aktifIndex = Math.max(0, siralama.indexOf(durum));
	        steps.querySelectorAll('li').forEach((li, index) => {
	            li.classList.remove('is-cancelled');
	            li.classList.toggle('is-done', index < aktifIndex || durum === 'hazir');
	            li.classList.toggle('is-active', index === aktifIndex && durum !== 'hazir');
	        });
	        const readyAt = siparis?.tahmini_hazir_zamani ? new Date(siparis.tahmini_hazir_zamani) : null;
	        const readyText = readyAt && Number.isFinite(readyAt.getTime())
	            ? (aktifDil === 'en' ? ` · Estimated ready ${readyAt.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}` : ` · Tahmini hazır: ${readyAt.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}`)
	            : '';
	        const label = KFM_TRACKING_LABELS[durum] || KFM_TRACKING_LABELS.bekliyor;
	        if (meta) meta.textContent = (aktifDil === 'en' ? label.en : label.tr) + readyText;
	    }

		    function kfmRenderOrderCart() {
	        const list = document.getElementById('orderCartList');
	        const count = kfmOrderCart.reduce((sum, item) => sum + item.quantity, 0);
	        const total = kfmOrderCart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
	        const badge = document.getElementById('orderCartBadge');
	        const countLabel = document.getElementById('orderCartCount');
		        const totalLabel = document.getElementById('orderCartTotal');
		        const submit = document.getElementById('webOrderSubmit');
		        const quickGo = document.getElementById('orderCartQuickGo');
		        const quickGoLabel = document.getElementById('orderCartQuickGoLabel');
		        if (badge) { badge.hidden = count === 0; badge.textContent = count > 99 ? '99+' : String(count); }
		        if (countLabel) countLabel.textContent = `${count} ürün`;
		        if (totalLabel) totalLabel.textContent = kfmFormatOrderTotal(total);
		        if (submit) submit.disabled = count === 0;
		        if (quickGo) {
		            quickGo.hidden = count === 0;
		            quickGo.classList.toggle('is-visible', count > 0);
		            quickGo.setAttribute('aria-label', count ? `${count} ürün, ${kfmFormatOrderTotal(total)}. Sepete git.` : 'Sepete git');
		        }
		        if (quickGoLabel) quickGoLabel.textContent = `${count} ürün · ${kfmFormatOrderTotal(total)}`;
		        kfmOrderStatusGuncelle(
		            count ? `${count} ürün seçildi. Tahmini toplam ${kfmFormatOrderTotal(total)}.` : 'Sepetiniz boş. Menüden ürün seçebilirsiniz.',
		            count ? 'ready' : 'idle',
		        );
        if (!list) return;
        if (!kfmOrderCart.length) {
            list.innerHTML = '<div class="order-cart-empty"><i class="fa-solid fa-bag-shopping" aria-hidden="true"></i><br>Ürün kartındaki <strong>+</strong> simgesiyle veya ürün detayından sepetinize ürün ekleyebilirsiniz.</div>';
            kfmOrderCartFilterDurumunuSifirla();
			const wasFilled = list.dataset.cartState === 'filled';
			list.dataset.cartState = 'empty';
			if (wasFilled) kfmOrderCartEmptyTransition(list);
			return;
		}
		list.dataset.cartState = 'filled';
		list.classList.remove('is-empty-transition');
        list.innerHTML = kfmOrderCart.map((item, index) => `
                <div class="order-cart-row" role="listitem" data-cart-index="${index}">
	                <div><strong>${escapeHtml(item.name)}</strong><small>${kfmFormatOrderTotal(item.unitPrice)} × ${item.quantity} · ${kfmFormatOrderTotal(item.unitPrice * item.quantity)}</small></div>
	                <div class="order-cart-qty" role="group" aria-label="${escapeHtml(item.name)} miktarı">
	                    <button type="button" onclick="kfmOrderCartChange(${index},-1)" aria-label="${escapeHtml(item.name)} adedini azalt" title="Bir azalt">−</button>
	                    <output aria-label="${item.quantity} adet">${item.quantity}</output>
	                    <button type="button" onclick="kfmOrderCartChange(${index},1)" aria-label="${escapeHtml(item.name)} adedini artır" title="Bir artır">+</button>
	                </div>
	                        </div>`).join('');
        kfmOrderCartFiltreSecenekleriniDoldur();
        kfmOrderCartFilterUygula(document.getElementById('orderCartSearch')?.value || '');
    }
    function kfmOrderCartFiltreSecenekleriniDoldur() {
        const select = document.getElementById('orderCartCategoryFilter');
        if (!select) return;
        const selected = select.value;
        const categories = new Map();
        kfmOrderCart.forEach(item => { if (item.categoryKey || item.categoryName) categories.set(item.categoryKey || item.categoryName, item.categoryName || item.categoryKey); });
        select.innerHTML = '<option value="">Tüm kategoriler</option>' + [...categories.entries()].map(([key, label]) => `<option value="${escapeHtml(key)}">${escapeHtml(label)}</option>`).join('');
        if ([...categories.keys()].includes(selected)) select.value = selected;
    }
    function kfmOrderCartFilterMetni(item) {
        const variants = Array.isArray(item?.alt_secenekler) ? item.alt_secenekler : [];
        const groups = Array.isArray(item?.alt_secenek_gruplari) ? item.alt_secenek_gruplari.flatMap(group => [group?.isim, group?.grup]) : [];
        return [item?.name, item?.productName, item?.not, item?.note, ...variants, ...groups].filter(Boolean).join(' ');
    }
    function kfmOrderCartFilterUygula(rawQuery) {
        const query = kategoriUrunAramaMetni(rawQuery).trim();
        const input = document.getElementById('orderCartSearch');
        const clear = document.getElementById('orderCartSearchClear');
        const category = document.getElementById('orderCartCategoryFilter')?.value || '';
        const minRaw = document.getElementById('orderCartMinPrice')?.value || '';
        const maxRaw = document.getElementById('orderCartMaxPrice')?.value || '';
        const minPrice = minRaw === '' ? null : Math.max(0, Number(minRaw) * 100);
        const maxPrice = maxRaw === '' ? null : Math.max(0, Number(maxRaw) * 100);
        const meta = document.getElementById('orderCartFilterMeta');
        const count = document.getElementById('orderCartFilterCount');
        const rows = [...document.querySelectorAll('#orderCartList .order-cart-row')];
        if (input && input.value !== String(rawQuery || '')) input.value = String(rawQuery || '');
        const hasAdvanced = Boolean(category || minPrice !== null || maxPrice !== null);
        const activeFilter = Boolean(query || hasAdvanced);
        if (clear) clear.hidden = !query;
        if (!rows.length || !activeFilter) {
            rows.forEach(row => row.classList.remove('is-filtered-out'));
            if (meta) meta.hidden = true;
            document.getElementById('orderCartFilterEmpty')?.remove();
            return;
        }
        let visible = 0;
        rows.forEach(row => {
            const item = kfmOrderCart[Number(row.dataset.cartIndex)];
            const itemPrice = Number(item?.unitPrice || 0);
            const itemCategory = String(item?.categoryKey || item?.categoryName || '');
            const matchesText = !query || kategoriUrunAramaMetni(kfmOrderCartFilterMetni(item)).includes(query);
            const matchesCategory = !category || itemCategory === category;
            const matchesMin = minPrice === null || itemPrice >= minPrice;
            const matchesMax = maxPrice === null || itemPrice <= maxPrice;
            const matches = matchesText && matchesCategory && matchesMin && matchesMax;
            row.classList.toggle('is-filtered-out', !matches);
            if (matches) visible += 1;
        });
        if (meta) meta.hidden = false;
        if (count) count.textContent = `${visible} / ${rows.length} ürün gösteriliyor`;
        let empty = document.getElementById('orderCartFilterEmpty');
        if (!visible) {
            if (!empty) {
                empty = document.createElement('div');
                empty.id = 'orderCartFilterEmpty';
                empty.className = 'order-cart-filter-empty';
                document.getElementById('orderCartList')?.appendChild(empty);
            }
            if (empty) empty.textContent = 'Bu aramayla eşleşen ürün yok.';
        } else if (empty) empty.remove();
    }
    function kfmOrderCartFilterTemizle() {
        const input = document.getElementById('orderCartSearch');
        if (input) input.value = '';
        kfmOrderCartFilterUygula('');
        input?.focus();
    }
    function kfmOrderCartGelismisFiltreleriTemizle() {
        const category = document.getElementById('orderCartCategoryFilter');
        const min = document.getElementById('orderCartMinPrice');
        const max = document.getElementById('orderCartMaxPrice');
        if (category) category.value = '';
        if (min) min.value = '';
        if (max) max.value = '';
        kfmOrderCartFilterUygula(document.getElementById('orderCartSearch')?.value || '');
    }
    function kfmOrderCartFilterDurumunuSifirla() {
        const input = document.getElementById('orderCartSearch');
        const clear = document.getElementById('orderCartSearchClear');
        const meta = document.getElementById('orderCartFilterMeta');
        const empty = document.getElementById('orderCartFilterEmpty');
        if (input) input.value = '';
        const advancedClear = document.getElementById('orderCartAdvancedClear');
        const category = document.getElementById('orderCartCategoryFilter');
        const min = document.getElementById('orderCartMinPrice');
        const max = document.getElementById('orderCartMaxPrice');
        if (clear) clear.hidden = true;
        if (advancedClear) advancedClear.hidden = true;
        if (category) category.value = '';
        if (min) min.value = '';
        if (max) max.value = '';
        if (meta) meta.hidden = true;
        empty?.remove();
    }
        function kfmOrderCartEmptyTransition(list) {
            if (!list || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            list.classList.remove('is-empty-transition');
            void list.offsetWidth;
            list.classList.add('is-empty-transition');
            clearTimeout(list._emptyTransitionTimer);
            list._emptyTransitionTimer = setTimeout(() => list.classList.remove('is-empty-transition'), 280);
        }

        function kfmOrderSuccessAnimation() {
            const panel = document.querySelector('.order-cart-panel');
            if (!panel) return Promise.resolve();
            const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            panel.classList.remove('is-order-success');
            if (!reducedMotion) void panel.offsetWidth;
            panel.classList.add('is-order-success');
            return new Promise(resolve => setTimeout(() => {
                panel.classList.remove('is-order-success');
                resolve();
            }, reducedMotion ? 0 : 520));
        }

	function webSiparisPenceresiAc() {
		        kfmRenderOrderCart();
		        modalAc('webOrderModal');
		        kfmOrderTrackingYenile().catch(() => {});
		        kfmOrderStatusGuncelle(
		            kfmOrderCart.length ? 'Sepetiniz hazır. Masa numaranızı yazıp siparişinizi iletebilirsiniz.' : 'Önce menüden ürün ekleyin; sepetiniz burada görünecek.',
		            kfmOrderCart.length ? 'ready' : 'idle',
		        );
		        window.setTimeout(() => document.getElementById('orderTableNumber')?.focus(), 180);
	    }

	    async function webSiparisFormGonder(event) {
	        event.preventDefault();
	        const tableInput = document.getElementById('orderTableNumber');
	        const noteInput = document.getElementById('orderNote');
	        const submitButton = document.getElementById('webOrderSubmit');
	        const masaNo = String(tableInput?.value || '').trim();
	        const note = String(noteInput?.value || '').trim();
	        const tablePattern = /^[A-Za-z0-9ÇĞİÖŞÜçğıöşü _-]{1,32}$/;
	        if (!kfmOrderCart.length) { toast('⚠️ Önce siparişinize en az bir ürün ekleyin.'); return; }
	        if (!tablePattern.test(masaNo)) {
	            tableInput?.setCustomValidity('Geçerli bir masa numarası yazın.');
	            tableInput?.reportValidity();
	            return;
	        }
	        tableInput?.setCustomValidity('');
	        const payload = {
	            masa_no: masaNo,
	            ...(note ? { not: note } : {}),
	            request_id: kfmWaiterRequestId(),
	            items: kfmOrderCart.map(item => ({
	                urun_adi: item.productName || item.name,
	                miktar: item.quantity,
	                birim_fiyat: item.unitPrice,
	                alt_secenekler: Array.isArray(item.alt_secenekler) ? item.alt_secenekler : [],
	                alt_secenek_gruplari: Array.isArray(item.alt_secenek_gruplari) ? item.alt_secenek_gruplari : [],
	            })),
	        };
		        if (submitButton) {
		            submitButton.disabled = true;
		            submitButton.setAttribute('aria-busy', 'true');
		            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i><span>Sipariş iletiliyor…</span>';
		        }
		        kfmOrderStatusGuncelle('Sipariş iletiliyor…', 'loading');
		        try {
	            const relayUrl = await getWaiterRelayUrl();
	            const response = await kfmOrderPost(relayUrl, payload);
	            const data = await response.json().catch(() => ({}));
	            if (!response.ok || !data.ok) throw new Error(data.error || 'Sipariş gönderilemedi.');
			kfmOrderTrackingKaydet({ kod: data.takip?.kod, masa: masaNo });
			kfmOrderTrackingPaneliniTazeleGuvenli();
			kfmOrderStatusGuncelle('Siparişiniz ekibe iletildi. Afiyet olsun!', 'success');
			await kfmOrderSuccessAnimation();
			kfmOrderCart = [];
			kfmRenderOrderCart();
			document.getElementById('webOrderForm')?.reset();
			modalKapat('webOrderModal');
	            toast('✓ Siparişiniz ekibe iletildi. Afiyet olsun!');
		        } catch (error) {
		            console.error('Web sipariş relay hatası:', error);
		            const isNetworkError = /networkerror|failed to fetch|abort/i.test(String(error?.message || ''));
		            kfmOrderStatusGuncelle('Sipariş şu anda iletilemedi. Bağlantınızı kontrol edip tekrar deneyin.', 'error');
	            toast('⚠️ ' + (isNetworkError ? 'Sipariş servisine ulaşılamadı. Bağlantınızı kontrol edip tekrar deneyin.' : (error?.message || 'Sipariş şu anda iletilemedi. Lütfen tekrar deneyin.')));
	        } finally {
	            if (submitButton) {
	                submitButton.removeAttribute('aria-busy');
	                submitButton.innerHTML = '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i><span>Siparişi İlet</span>';
	                submitButton.disabled = kfmOrderCart.length === 0;
	            }
	        }
	    }

		    function garsonCagriPenceresiAc() {
	        const form = document.getElementById('waiterCallForm');
	        const tableInput = document.getElementById('waiterTableNumber');
	        if (form) form.reset();
	        if (tableInput) tableInput.setCustomValidity('');
	        modalAc('waiterCallModal');
	        window.setTimeout(() => tableInput?.focus(), 180);
	    }

	    async function garsonCagriFormGonder(event) {
	        event.preventDefault();
	        const tableInput = document.getElementById('waiterTableNumber');
	        const typeInput = document.getElementById('waiterCallType');
	        const noteInput = document.getElementById('waiterCallNote');
	        const submitButton = document.getElementById('waiterCallSubmit');
	        const masaNo = String(tableInput?.value || '').trim();
	        const callType = String(typeInput?.value || 'genel').trim();
	        const note = String(noteInput?.value || '').trim();
	        const tablePattern = /^[A-Za-z0-9ÇĞİÖŞÜçğıöşü _-]{1,32}$/;
	        const allowedCallTypes = new Set(['genel', 'siparis', 'hesap']);

	        if (!tablePattern.test(masaNo)) {
	            tableInput?.setCustomValidity(t('waiter_table_required'));
	            tableInput?.reportValidity();
	            return;
	        }
	        tableInput?.setCustomValidity('');
	        if (!allowedCallTypes.has(callType)) return;
	        if (submitButton) {
	            submitButton.disabled = true;
	            submitButton.setAttribute('aria-busy', 'true');
	            submitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i><span>${escapeHtml(t('waiter_sending'))}</span>`;
	        }

	        const sent = await garsonCagir(false, { masaNo, note, callType });
	        if (submitButton) {
	            submitButton.disabled = false;
	            submitButton.removeAttribute('aria-busy');
	            submitButton.innerHTML = `<i class="fa-solid fa-bell" aria-hidden="true"></i><span>${escapeHtml(t('waiter_submit'))}</span>`;
	        }
	        if (sent) {
	            modalKapat('waiterCallModal');
	            document.getElementById('waiterCallForm')?.reset();
	        }
	    }

	    async function garsonCagir(testMode = false, callDetails = null) {
	        const promptLabel = testMode
	            ? (aktifDil === 'en' ? 'Test table number:' : 'Test için masa numarası:')
	            : (aktifDil === 'en' ? 'Please enter your table number:' : 'Lütfen masa numaranızı girin:');
	        const masaNo = String(callDetails?.masaNo ?? prompt(promptLabel) ?? '').trim();
	        const note = String(callDetails?.note ?? '').trim();
	        const callType = String(callDetails?.callType ?? 'genel').trim();
	        if (!masaNo) return false;

	        try {
            const relayUrl = await getWaiterRelayUrl();
            const response = await kfmWaiterCallPost(relayUrl, {
                masa_no: masaNo,
	                cagri_turu: testMode ? 'genel' : callType,
                ...(note ? { not: note } : {}),
                request_id: kfmWaiterRequestId(),
            });
	            const data = await response.json().catch(() => ({}));
	            if (!response.ok || !data.ok) throw new Error(data.error || 'Garson çağrısı gönderilemedi.');

	            toast(testMode ? (aktifDil === 'en' ? 'Waiter test request sent.' : 'Garson çağırma test isteği gönderildi.') : t('waiter_sent'));
	            console.log('Garson çağrısı relay üzerinden oluşturuldu:', data.call?.id);
	            return true;
	        } catch (error) {
	            console.error('Garson çağrısı relay hatası:', error);
            const networkError = /networkerror|failed to fetch|abort/i.test(String(error?.message || ''));
            const fallbackMessage = aktifDil === 'en'
                ? 'The waiter service could not be reached. Please turn off VPN/proxy or ad-blocking temporarily, then try again.'
                : 'Garson çağrı servisine ulaşılamadı. VPN/proxy veya reklam engelleme açıksa kapatıp tekrar deneyin.';
            toast('⚠️ ' + (networkError ? fallbackMessage : (error?.message || (aktifDil === 'en' ? 'Waiter service is temporarily unavailable. Please try again.' : 'Garson çağrı servisine şu anda ulaşılamıyor. Lütfen tekrar deneyin.'))));
            return false;
	        }
	    }

    function yorumlariSil() {
        const onay = aktifDil === 'en' ? 'All reviews will be deleted. Are you sure?' : 'Tüm yorumlar silinecek. Emin misiniz?';
        if (!confirm(onay)) return;
        yorumData = [];
        saveAll();
        apYorumlariYenile();
        skorGuncelle();
    }

    // ══════════════════════════════════════════════════════════════
    // ── ADMİN PANEL ──
    // ══════════════════════════════════════════════════════════════
    function authKontrol() {
        const v = document.getElementById('authPass').value;
        if (v === adminSifre) {
            modalKapat('authModal');
            document.getElementById('authPass').value = '';
            adminAc();
        } else {
            document.getElementById('authPass').value = '';
            toast(t('toast_wrong_pass'));
        }
    }

    function adminAc() {
        document.getElementById('adminPanel').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.getElementById('apAdminSifre').value = adminSifre;
        document.getElementById('apHeaderBg').value   = headerBgUrl;
        // GitHub ayarlarını doldur
        document.getElementById('apGhToken').value = ghSettings.token || '';
        document.getElementById('apGhUser').value  = ghSettings.user  || '';
        document.getElementById('apGhRepo').value  = ghSettings.repo  || '';
        document.getElementById('apGhFile').value  = ghSettings.file  || 'keyfimce_menu_ayarlar.json';
        apWifiDoldur();
        apUrunListesiYenile();
        apYorumlariYenile();
        apKategoriListesiYenile();
        apFrameLibraryYenile();
        apYeniUrunOnizlemeGuncelle();
        apQuickKategorileriDoldur();
        apQuickListesiYenile();
        const hideBox = document.getElementById('apHideOutStock');
        if (hideBox) hideBox.checked = hideOutOfStock;
        apAdminOzetGuncelle();
        kfmAdminPublishMetricsGuncelle();
    }

    function adminKapat() {
        document.getElementById('adminPanel').style.display = 'none';
        document.body.style.overflow = '';
        renderProducts();
    }

    function apWifiDoldur() {
        document.getElementById('apWifiAd').value    = wifiData.ad;
        document.getElementById('apWifiSifre').value = wifiData.sifre;
    }

    function urunEkle() {
        const cat    = document.getElementById('apKat').value;
        const ad     = document.getElementById('apAd').value.trim();
        const fiyat  = parseInt(document.getElementById('apFiyat').value);
        const gorsel = document.getElementById('apGorsel').value.trim();
        const exRaw  = document.getElementById('apEkstra').value.trim();
        if (!cat || !menuData[cat]) { toast('❌ Lütfen önce bir kategori seçin'); return; }
        if (!ad || !fiyat) { toast('❌ Ad ve fiyat zorunlu'); return; }
        const ekstralar = [];
        if (exRaw) exRaw.split(',').forEach(item => {
            const [isim, f] = item.split(':');
            if (isim && f) ekstralar.push({ isim: isim.trim(), fiyat: parseInt(f.trim()) || 0 });
        });
        const ad_en = translationsDict[ad] || ad;
        const ekstralar_en = ekstralar.map(ex => ({ ...ex, isim_en: translationsDict[ex.isim] || ex.isim }));
        menuData[cat].urunler.push({ id: Date.now(), ad, ad_en, fiyat, gorsel, stoktaVar: true, ekstralar: ekstralar_en });
        saveAll();
        ['apAd', 'apFiyat', 'apGorsel', 'apEkstra', 'apYeniGorselDosya'].forEach(i => { const el = document.getElementById(i); if (el) el.value = ''; });
        apYeniUrunOnizlemeGuncelle();
        apUrunListesiYenile();
        apKategoriListesiYenile();
        toast(t('toast_product_added'));
    }

    function fiyatGuncelle(catKey, id, val) {
        menuData[catKey].urunler.forEach(u => { if (u.id === id) u.fiyat = parseInt(val) || 0; });
        saveAll();
    }

    function gorselGuncelle(catKey, id, val) {
        menuData[catKey].urunler.forEach(u => { if (u.id === id) u.gorsel = val.trim(); });
        saveAll();
    }

    function stokDegistir(catKey, id) {
        menuData[catKey].urunler.forEach(u => { if (u.id === id) u.stoktaVar = !u.stoktaVar; });
        saveAll(); apUrunListesiYenile(); renderProducts(); toast('Stok durumu güncellendi.');
    }

    function urunSil(catKey, id) {
        const onay = aktifDil === 'en' ? 'Delete this product?' : 'Ürün silinecek?';
        if (!confirm(onay)) return;
        menuData[catKey].urunler = menuData[catKey].urunler.filter(u => u.id !== id);
        saveAll();
        apUrunListesiYenile();
        apKategoriListesiYenile();
        toast(t('toast_product_deleted'));
    }

    function ekstraSil(catKey, id, isim) {
        menuData[catKey].urunler.forEach(u => { if (u.id === id) u.ekstralar = u.ekstralar.filter(ex => ex.isim !== isim); });
        saveAll();
        apUrunListesiYenile();
    }

    function ekstraEkle(catKey, id) {
        const inputEl = document.getElementById('ekstraInput_' + id);
        if (!inputEl) return;
        const raw = inputEl.value.trim();
        if (!raw) { toast('❌ Ekstra adı ve fiyat girin'); return; }
        const parts = raw.split(':');
        if (parts.length < 2) { toast('❌ Format: Karamel:20'); return; }
        const isim  = parts[0].trim();
        const fiyat = parseInt(parts[1]) || 0;
        if (!isim) { toast('❌ Format: Karamel:20'); return; }
        menuData[catKey].urunler.forEach(u => { if (u.id === id) u.ekstralar.push({ isim, fiyat }); });
        saveAll();
        apUrunListesiYenile();
        toast(t('toast_extra_added'));
    }


    function apAdminOzetGuncelle() {
        const all = [];
        Object.keys(menuData).forEach(k => (menuData[k].urunler || []).forEach(u => all.push(u)));
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('apStatProducts', all.length); set('apStatCategories', Object.keys(menuData).length); set('apStatOut', all.filter(u => !u.stoktaVar).length); set('apStatMissingImage', all.filter(u => !u.gorsel || !u.gorsel.trim()).length);
    }
    function apStokFiltresiAyarla(value) { apStokFiltresi = value; document.querySelectorAll('[data-stock-filter]').forEach(b => b.classList.toggle('active', b.dataset.stockFilter === value)); apUrunListesiYenile(); }
    function stokDisiGizlemeAyarla(value) { hideOutOfStock = !!value; saveAll(); renderProducts(); toast(hideOutOfStock ? 'Stok dışı ürünler web sitesinde gizlendi.' : 'Stok dışı ürünler web sitesinde gösteriliyor.'); }
    function apGorselOnizle(url, previewId, fallback) { const img = document.getElementById(previewId); if (!img) return; img.onerror = () => { img.onerror = null; img.src = fallback; }; img.src = String(url || '').trim() || fallback; }
    function apAciklamaGuncelle(catKey, id, value) { menuData[catKey].urunler.forEach(u => { if (u.id === id) u.aciklama = String(value || '').trim(); }); saveAll(); renderProducts(); }
    // KFM_DETAIL_TAGS_V1 — içerik, alerjen ve alerjen notu yönetimi.
    function apIcerikGuncelle(catKey, id, value) { menuData[catKey].urunler.forEach(u => { if (u.id === id) u.icerik = String(value || '').trim(); }); saveAll(); toast('İçerik bilgisi güncellendi.'); }
    function apAlerjenGuncelle(catKey, id, value) { menuData[catKey].urunler.forEach(u => { if (u.id === id) u.alerjenler = String(value || '').trim(); }); saveAll(); toast('Alerjen bilgisi güncellendi.'); }
    function apAlerjenNotuGuncelle(catKey, id, value) { menuData[catKey].urunler.forEach(u => { if (u.id === id) u.alerjen_notu = String(value || '').trim(); }); saveAll(); toast('Alerjen notu güncellendi.'); }
    function urunKategoriDegistir(catKey, id, newCatKey) { if (!menuData[catKey] || !menuData[newCatKey] || catKey === newCatKey) return; const i = menuData[catKey].urunler.findIndex(u => u.id === id); if (i < 0) return; menuData[newCatKey].urunler.push(menuData[catKey].urunler.splice(i, 1)[0]); saveAll(); buildNav(); apKategoriListesiYenile(); apUrunListesiYenile(); renderProducts(); toast('Ürün kategorisi güncellendi.'); }

    function apUrunListesiYenile() {
        const box = document.getElementById('apUrunListesi');
        const filtreKat = document.getElementById('apMevcutKatFiltre').value;
        const aramaKel = document.getElementById('apUrunAraInput').value.toLowerCase().trim();
        box.innerHTML = ''; let count = 0;
        for (const catKey in menuData) {
            if (filtreKat !== 'hepsi' && filtreKat !== catKey) continue;
            (menuData[catKey].urunler || []).forEach(u => {
                const name = localizedProductName(u); const desc = localizedProductDescription(u, '');
                if (aramaKel && !(name + ' ' + desc).toLowerCase().includes(aramaKel)) return;
                if (apStokFiltresi === 'in' && !u.stoktaVar) return; if (apStokFiltresi === 'out' && u.stoktaVar) return; count++;
                const frameTheme = kfmFrameThemeForProduct(u, catKey); const fallback = gorselHavuzu[catKey] || gorselHavuzu['cat-kahve']; const image = u.gorsel && u.gorsel.trim() ? u.gorsel : fallback;
                const options = Object.keys(menuData).map(k => `<option value="${escapeHtml(k)}" ${k === catKey ? 'selected' : ''}>${escapeHtml(menuData[k].isim)}</option>`).join('');
                const extraHtml = (u.ekstralar || []).map(ex => `<span class="extra-pill">${escapeHtml(ex.isim)} ${ex.fiyat}₺</span>`).join('');
                box.insertAdjacentHTML('beforeend', `<article class="ap-product-editor"><div class="ap-product-head"><div class="ap-frame-preview ap-product-preview" id="apFramePreview_${u.id}" data-frame-theme="${escapeHtml(frameTheme)}"><img id="apPreview_${u.id}" src="${escapeHtml(image)}" alt="${escapeHtml(name)}" class="${u.gorsel && u.gorsel.trim() ? 'ap-preview-cover' : ''}" onerror="this.onerror=null;this.classList.remove('ap-preview-cover');this.src='${escapeHtml(fallback)}'"><span class="ap-frame-preview-art" data-frame-theme="${escapeHtml(frameTheme)}" aria-hidden="true"></span></div><div><div class="ap-product-title">${escapeHtml(name)}</div><div class="ap-product-category">${escapeHtml(menuData[catKey].isim)}</div><div class="ap-save-hint">Değişiklikler otomatik kaydedilir</div></div><button type="button" class="ap-stock-toggle ${u.stoktaVar ? 'on' : ''}" onclick="stokDegistir('${catKey}',${u.id})"><span class="ap-stock-dot"></span>${u.stoktaVar ? 'Stokta' : 'Stok dışı'}</button></div><div class="ap-product-fields"><div><label>Fiyat (₺)</label><input type="number" min="0" value="${u.fiyat}" onchange="fiyatGuncelle('${catKey}',${u.id},this.value)" class="ap-input text-xs font-medium"></div><div><label>Kategori değiştir</label><select class="ap-input text-xs font-medium" onchange="urunKategoriDegistir('${catKey}',${u.id},this.value)">${options}</select></div><div class="ap-field-wide"><label>Görsel URL · kart önizlemesi</label><input type="text" value="${escapeHtml(u.gorsel || '')}" oninput="apEditorGorselOnizle(this.value,'apPreview_${u.id}','${escapeHtml(fallback)}','${escapeHtml(frameTheme)}')" onchange="gorselGuncelle('${catKey}',${u.id},this.value)" class="ap-input text-xs font-medium" placeholder="https://..."><input class="ap-file-input" type="file" accept="image/*" onchange="apUrunDosyaSecildi(event,'${catKey}',${u.id})"><span class="ap-preview-link"><i class="fa-solid fa-eye"></i> Görsel ve kategori çerçevesi kartta anlık olarak önizlenir</span></div><div class="ap-field-wide"><label>Kısa açıklama · kartta görünen metin</label><textarea class="ap-input text-xs font-medium" onchange="apAciklamaGuncelle('${catKey}',${u.id},this.value)" placeholder="Ürünü kısa ve iştah açıcı şekilde anlatın...">${escapeHtml(desc)}</textarea></div><div class="ap-field-wide"><label>İçerik · virgülle ayırın (ürün detayında etiket olarak görünür)</label><input type="text" value="${escapeHtml(Array.isArray(u.icerik) ? u.icerik.join(', ') : (u.icerik || ''))}" onchange="apIcerikGuncelle('${catKey}',${u.id},this.value)" class="ap-input text-xs font-medium" placeholder="Örn. espresso, süt, kakao"></div><div class="ap-field-wide"><label>Alerjenler · virgülle ayırın (kırmızı etiketle işaretlenir)</label><input type="text" value="${escapeHtml(Array.isArray(u.alerjenler) ? u.alerjenler.join(', ') : (u.alerjenler || ''))}" onchange="apAlerjenGuncelle('${catKey}',${u.id},this.value)" class="ap-input text-xs font-medium" placeholder="Örn. süt, fındık, gluten"></div><div class="ap-field-wide"><label>Alerjen notu · serbest metin</label><input type="text" value="${escapeHtml(u.alerjen_notu || '')}" onchange="apAlerjenNotuGuncelle('${catKey}',${u.id},this.value)" class="ap-input text-xs font-medium" placeholder="Örn. Mutfağımızda gluten içeren ürünler hazırlanır."></div></div><div class="ap-live-product-preview"><div class="ap-live-product-preview-head"><span><i class="fa-solid fa-eye mr-1"></i> Ziyaretçi kartı · canlı görsel önizleme</span><span class="ap-preview-status" data-ap-preview-status-for="apPreview_${u.id}" data-state="ready">Kart görünümü hazır</span></div><div class="ap-live-product-card" data-frame-theme="${escapeHtml(frameTheme)}" data-frame-tone="${escapeHtml(frameTheme === 'cold' ? 'cool' : (frameTheme === 'sweet' ? 'sweet' : (frameTheme === 'hookah' ? 'night' : (frameTheme === 'food' ? 'herbal' : 'warm'))))}"><div class="product-card-image-wrap"><img data-ap-live-preview-for="apPreview_${u.id}" src="${escapeHtml(image)}" alt="${escapeHtml(name)}" class="product-card-image ${u.gorsel && u.gorsel.trim() ? 'ap-preview-cover' : ''}" onerror="this.onerror=null;this.classList.remove('ap-preview-cover');this.src='${escapeHtml(fallback)}'"><span class="product-card-depth-plane" aria-hidden="true"></span><span class="product-card-frame-art" data-frame-theme="${escapeHtml(frameTheme)}" aria-hidden="true"></span></div><div class="product-card-body"><div class="product-card-category">${escapeHtml(menuData[catKey].isim)}</div><h3 class="product-card-title">${escapeHtml(name)}</h3><p class="product-card-description">${escapeHtml(desc || 'Ürün açıklaması burada görünür.')}</p><div class="product-card-footer"><strong class="product-card-price">${escapeHtml(String(u.fiyat))}₺</strong><span class="ap-live-card-tag"><i class="fa-solid fa-image mr-1"></i> Kart görünümü</span></div></div></div></div><div class="mt-3"><label>Ekstralar</label><div class="flex flex-wrap gap-1.5">${extraHtml || '<span class="italic text-[11px]" style="color:var(--muted2);">Ekstra yok</span>'}</div></div><div class="ap-product-actions"><button type="button" onclick="urunSil('${catKey}',${u.id})" style="color:#b91c1c;background:#fef2f2;border:1px solid #fca5a5;"><i class="fa-solid fa-trash mr-1"></i>Sil</button></div></article>`);
            });
        }
        if (!count) box.innerHTML = '<div class="ap-admin-empty"><i class="fa-solid fa-filter-circle-xmark mb-2"></i><br>Bu filtreye uygun ürün bulunamadı.</div>';
        apAdminOzetGuncelle();
    }

    function apYorumlariYenile() {
        const box = document.getElementById('apYorumListesi');
        box.innerHTML = '';
        if (!yorumData.length) {
            box.innerHTML = '<p class="italic text-sm font-medium py-2" style="color:var(--muted2);">Henüz yorum yok.</p>';
            return;
        }
        yorumData.forEach(y => {
            box.insertAdjacentHTML('beforeend', `
          <div class="glass border p-3 rounded-2xl text-[12px] shadow-sm mb-2">
            <div class="flex justify-between font-bold mb-1" style="color:var(--rust);">
              <span class="text-[13px]">${escapeHtml(y.isim)}</span>
              <span class="font-medium text-[11px]" style="color:var(--muted2);">${escapeHtml(y.tarih)}</span>
            </div>
            <div class="text-amber-500 text-[13px] mb-1.5">${'★'.repeat(y.skor)}</div>
            <p class="font-medium" style="color:var(--ink);">${escapeHtml(y.mesaj)}</p>
          </div>`);
        });
    }

    // ══════════════════════════════════════════════════════════════
    // ── HIZLI SIPARIŞ YÖNETİMİ ──
    // ══════════════════════════════════════════════════════════════
    function apQuickKategorileriDoldur() {
        const select = document.getElementById('apQuickKat');
        if (!select) return;
        select.innerHTML = '';
        for (let k in menuData) {
            const opt = document.createElement('option');
            opt.value = k;
            opt.textContent = (aktifDil === 'en' && menuData[k].isim_en) ? menuData[k].isim_en : menuData[k].isim;
            select.appendChild(opt);
        }
        apQuickUrunleriDoldur();
    }

    function apQuickUrunleriDoldur() {
        const katSelect = document.getElementById('apQuickKat');
        const urunSelect = document.getElementById('apQuickUrun');
        if (!katSelect || !urunSelect) return;
        const catKey = katSelect.value;
        urunSelect.innerHTML = '';
        if (menuData[catKey]?.urunler) {
            menuData[catKey].urunler.forEach(u => {
                const opt = document.createElement('option');
                opt.value = u.id;
                opt.textContent = localizedProductName(u);
                urunSelect.appendChild(opt);
            });
        }
    }

    async function hizliSipariseEkle() {
        const urunId = parseInt(document.getElementById('apQuickUrun').value);
        if (!urunId) { toast('❌ Lütfen bir ürün seçin'); return; }
        
        const url = await getServerIpFromGitHub();
        
        // API'ye istek gönder
        fetch(`${url}/api/quick-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urun_id: urunId, islem: 'ekle' })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast('✅ Ürün hızlı siparişe eklendi');
                apQuickListesiYenile();
            } else {
                toast('❌ ' + (data.error || 'Bir hata oluştu'));
            }
        })
        .catch(error => {
            console.error('Hızlı sipariş hatası:', error);
            toast('⚠️ Sunucuya ulaşılamadı. kafe.py çalışıyor mu?');
        });
    }

    async function hizliSiparistenKaldir(id) {
        const url = await getServerIpFromGitHub();
        
        // API'ye istek gönder
        fetch(`${url}/api/quick-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ urun_id: id, islem: 'sil' })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                toast('🗑️ Ürün hızlı siparişten kaldırıldı');
                apQuickListesiYenile();
            } else {
                toast('❌ ' + (data.error || 'Bir hata oluştu'));
            }
        })
        .catch(error => {
            console.error('Hızlı sipariş silme hatası:', error);
            toast('⚠️ Sunucuya ulaşılamadı. kafe.py çalışıyor mu?');
        });
    }

    async function apQuickListesiYenile() {
        const box = document.getElementById('apQuickListesi');
        if (!box) return;
        box.innerHTML = '<p class="text-xs font-medium py-2" style="color:var(--muted2);">Yükleniyor...</p>';
        
        const url = await getServerIpFromGitHub();
        
        // API'den hızlı siparişleri al
        fetch(`${url}/api/quick-order`)
        .then(response => response.json())
        .then(data => {
            box.innerHTML = '';
            if (!data.items || !data.items.length) {
                box.innerHTML = `<p class="italic text-xs font-medium py-2" style="color:var(--muted2);">${aktifDil === 'en' ? t('no_quick_products_en') : t('no_quick_products')}</p>`;
                return;
            }
            
            data.items.forEach(item => {
                box.insertAdjacentHTML('beforeend', `
              <div class="flex items-center justify-between glass border p-3 rounded-2xl shadow-sm">
                <div>
                  <p class="font-bold text-[13px]" style="color:var(--ink);">${escapeHtml(item.ad)}</p>
                  <p class="text-[11px] font-medium" style="color:var(--muted2);">${escapeHtml(item.kategori)} · ${item.fiyat}₺</p>
                </div>
                <button onclick="hizliSiparistenKaldir(${item.urun_id})"
                  class="px-3 py-2 rounded-xl text-[11px] font-bold active:scale-95 transition-transform shadow-sm flex-shrink-0"
                  style="background:#fef2f2; border:1px solid #fca5a5; color:#b91c1c;">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>`);
            });
        })
        .catch(error => {
            console.error('Hızlı sipariş listesi hatası:', error);
            box.innerHTML = `<p class="italic text-xs font-medium py-2" style="color:var(--muted2);">Sunucuya ulaşılamadı</p>`;
        });
    }

    // ══════════════════════════════════════════════════════════════
    // ── SECRET TRIGGER (uzun basma ile yönetim girişi) ──
    // ══════════════════════════════════════════════════════════════
    let pressTimer = null;
    const trigger  = document.getElementById('secretTrigger');

    function startPress(e) {
        e.preventDefault();
        if (pressTimer) return;
        pressTimer = setTimeout(() => {
            pressTimer = null;
            modalAc('authModal');
            document.getElementById('authPass').focus();
        }, PRESS_MS);
    }

    function cancelPress() { clearTimeout(pressTimer); pressTimer = null; }

    trigger.addEventListener('mousedown',  startPress,   { passive: false });
    trigger.addEventListener('mouseup',    cancelPress);
    trigger.addEventListener('mouseleave', cancelPress);
    trigger.addEventListener('touchstart', startPress,   { passive: false });
    trigger.addEventListener('touchend',   cancelPress,  { passive: false });
    trigger.addEventListener('touchcancel',cancelPress,  { passive: false });

    // ══════════════════════════════════════════════════════════════
    // ── GITHUB FETCH (sayfa yüklenince) ──
    // ══════════════════════════════════════════════════════════════
    const githubKullaniciAdi = "muhammedtalhakanat-sys";
    const repoAdi            = "Keyfimce-Kafem-Web";
    const jsonDosyaAdi       = "keyfimce_menu_ayarlar.json";

    // KFM_V22_1_LOCAL_IMAGE_GUARD: GitHub yedeği boş bir gorsel alanı taşıyorsa,
    // kullanıcının aynı üründe tarayıcıya kaydettiği gerçek fotoğrafı ezme.
    const kfmLocalMenuSnapshot = (() => {
        try {
            const raw = localStorage.getItem('kfm_menu');
            return raw ? JSON.parse(raw) : null;
        } catch (_) { return null; }
    })();
    function kfmImageKey(product) {
        if (!product) return '';
        const id = String(product.id ?? '').trim();
        const name = String(product.ad_en || product.ad || '').trim().toLocaleLowerCase('tr-TR');
        return id ? `id:${id}` : `name:${name}`;
    }
    function kfmKnownBrokenRemote(product, url) {
        const value = String(url || '').toLowerCase();
        const name = String(product?.ad_en || product?.ad || '').toLowerCase();
        return (name.includes('italian cappuccino') || name.includes('italian macchiato')) && value.includes('encrypted-tbn0.gstatic.com');
    }
    function kfmMergeUserImages(remoteMenu, localMenu) {
        if (!remoteMenu || !localMenu) return remoteMenu;
        const merged = JSON.parse(JSON.stringify(remoteMenu));
        const remoteIndex = new Map();
        Object.values(merged).forEach(cat => (cat?.urunler || []).forEach(product => {
            remoteIndex.set(kfmImageKey(product), product);
        }));
        Object.values(localMenu).forEach(cat => (cat?.urunler || []).forEach(localProduct => {
            const localImage = String(localProduct?.gorsel || '').trim();
            if (!localImage) return;
            const target = remoteIndex.get(kfmImageKey(localProduct));
            if (!target) return;
            const remoteImage = String(target.gorsel || '').trim();
            if (!remoteImage || kfmKnownBrokenRemote(target, remoteImage)) target.gorsel = localImage;
        }));
        return merged;
    }

    function kfmStaticImageKey(product) {
        const raw = String(product?.ad_en || product?.ad || '').trim().toLocaleLowerCase('tr-TR');
        return raw.replace(/\s+/g, ' ').replace(/[()]/g, '').trim();
    }
    function kfmStaticInternetGorselleriniUygula(remoteMenu, staticMenu) {
        if (!remoteMenu || !staticMenu) return remoteMenu;
        const merged = JSON.parse(JSON.stringify(remoteMenu));
        const staticByName = new Map();
        Object.values(staticMenu).forEach(category => (category?.urunler || []).forEach(product => {
            const image = String(product?.gorsel || '').trim();
            if (image.startsWith('https://')) staticByName.set(kfmStaticImageKey(product), image);
        }));
        Object.values(merged).forEach(category => (category?.urunler || []).forEach(product => {
            const current = String(product?.gorsel || '').trim();
            const fallback = staticByName.get(kfmStaticImageKey(product));
            if (fallback && (!current || kfmKnownBrokenRemote(product, current))) product.gorsel = fallback;
        }));
        return merged;
    }
    async function kfmStatikMenuGorselleriniYukle() {
        try {
            // GitHub Pages/ara proxy, no-store talebine rağmen aynı URL’yi tutabildiği
            // için her açılışta değişen bir sorgu anahtarı kullanılır.
            const settingsUrl = new URL(jsonDosyaAdi, window.location.href);
            settingsUrl.searchParams.set('v', `${Date.now()}-${Math.random().toString(36).slice(2)}`);
            const response = await fetch(settingsUrl.toString(), {
                cache: 'no-store',
                headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' },
            });
            if (!response.ok) throw new Error(`Statik menü HTTP ${response.status}`);
            const payload = await response.json();
            return payload && typeof payload === 'object' ? payload : null;
        } catch (error) {
            console.warn('GitHub statik menü yedeği okunamadı; tarayıcı yedeği kullanılacak.', error);
            return null;
        }
    }

    function kfmUzakYedekAyarlariniUygula(payload) {
        if (!payload || typeof payload !== 'object') return;
        if (payload.wifiYedek && typeof payload.wifiYedek === 'object') {
            const remotePassword = String(payload.wifiYedek.sifre || '').trim();
            const hasRealPassword = remotePassword && !/^(\*{3,}|•{3,})$/.test(remotePassword);
            if (hasRealPassword) {
                wifiData = { ...wifiData, ad: String(payload.wifiYedek.ad || wifiData.ad || ''), sifre: remotePassword };
                lsSave('kfm_wifi', wifiData);
            }
        }
        if (typeof payload.headerBgYedek === 'string' && payload.headerBgYedek.trim()) {
            headerBgUrl = payload.headerBgYedek.trim();
            lsSave('kfm_headerBg', headerBgUrl);
        }
        if (Array.isArray(payload.hizliSiparisYedek)) {
            hizliSiparis = payload.hizliSiparisYedek;
            lsSave('kfm_hizliSiparis', hizliSiparis);
        }
        if (payload.frameYedek && typeof payload.frameYedek === 'object' && typeof kfmCloneFrameSettings === 'function') {
            kfmFrameSettings = kfmCloneFrameSettings(payload.frameYedek);
            lsSave('kfm_frame_settings', kfmFrameSettings);
        }
    }

    const KFM_LIVE_CATALOG_CACHE_KEY = 'kfm_live_menu_catalog';
    const KFM_LIVE_CATALOG_CLIENT_BUILD = '2026.09.01-image-sync.13';
    const KFM_LIVE_CATALOG_TIMEOUT_MS = 5500;
    const KFM_LIVE_MENU_SETTINGS_DEFAULTS = Object.freeze({ schema_version: 1, theme_mode: 'auto', featured_category_id: '', announcement: '' });
    window.kfmLiveMenuSettings = { ...KFM_LIVE_MENU_SETTINGS_DEFAULTS };

    function kfmCanliMenuAyarlariniNormalizeEt(input) {
        const source = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
        const theme = ['auto', 'light', 'dark'].includes(String(source.theme_mode || '').trim().toLowerCase())
            ? String(source.theme_mode).trim().toLowerCase() : 'auto';
        const featured = String(source.featured_category_id || '').trim();
        const announcement = String(source.announcement || '').trim().replace(/\s+/g, ' ').slice(0, 180);
        return {
            schema_version: 1,
            theme_mode: theme,
            featured_category_id: /^cat-[a-z0-9][a-z0-9_-]{0,47}$/.test(featured) ? featured : '',
            announcement,
        };
    }

    function kfmCanliMenuAyarlariniUygula(input) {
        const settings = kfmCanliMenuAyarlariniNormalizeEt(input);
        window.kfmLiveMenuSettings = settings;
        const announcement = document.getElementById('remoteMenuAnnouncement');
        const announcementText = document.getElementById('remoteMenuAnnouncementText');
        if (announcement && announcementText) {
            announcementText.textContent = settings.announcement;
            announcement.hidden = !settings.announcement;
        }
        if (!localStorage.getItem(TEMA_KEY)) {
            temaModu = settings.theme_mode;
            temaArayuzunuGuncelle();
        }
        return settings;
    }

    function kfmLiveCatalogToMenu(catalog) {
        if (!catalog || !Array.isArray(catalog.categories) || !catalog.categories.length) return null;
        const converted = {};
        for (const category of catalog.categories) {
            const categoryId = String(category?.id || '').trim();
            const categoryName = String(category?.name || '').trim();
            if (!categoryId || !categoryName || !Array.isArray(category.products)) continue;
            const icon = String(category.icon || '📋').trim();
            converted[categoryId] = {
                isim: `${icon} ${categoryName}`.trim(),
                urunler: category.products.map(product => ({
                    id: String(product?.id || '').trim(),
                    ad: String(product?.ad || '').trim(),
                    ad_en: String(product?.ad || '').trim(),
                    aciklama: String(product?.aciklama || '').trim(),
                    aciklama_en: String(product?.aciklama_en || product?.aciklama || '').trim(),
                    fiyat: Number(product?.fiyat || 0),
                    gorsel: String(product?.gorsel_url || '').trim(),
                    icerik: typeof product?.icerik === 'string' || Array.isArray(product?.icerik) ? product.icerik : '',
                    alerjenler: Array.isArray(product?.alerjenler) || typeof product?.alerjenler === 'string' ? product.alerjenler : [],
                    alerjen_notu: String(product?.alerjen_notu || '').trim(),
                    galeri_gorselleri: Array.isArray(product?.galeri_gorselleri) ? product.galeri_gorselleri.filter(url => typeof url === 'string' && /^https:\/\//.test(url)) : [],
                    stoktaVar: product?.stoktaVar !== false,
                    stokTakibi: product?.stok_takibi === true,
                    stokMiktar: product?.stok_miktar !== null && product?.stok_miktar !== undefined && Number.isFinite(Number(product.stok_miktar)) ? Number(product.stok_miktar) : null,
                    stokUyari: product?.stok_uyari === true,
                    birim: String(product?.birim || 'adet').trim() || 'adet',
                    ekstralar: Array.isArray(product?.ekstralar) ? product.ekstralar : [],
                    varyantlar: Array.isArray(product?.varyantlar) ? product.varyantlar : [],
                })).filter(product => product.id && product.ad)
            };
        }
        return Object.values(converted).some(category => category.urunler.length) ? converted : null;
    }

    async function kfmCanliKatalogYukle() {
        const relayUrl = await getWaiterRelayUrl();
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), KFM_LIVE_CATALOG_TIMEOUT_MS);
        try {
            // Worker yanıtı no-store olsa bile aradaki CDN/proxy eski anahtarı tutabilir;
            // her açılışta istemci sürümü ve zaman damgası ile katalog anahtarını yenile.
            const catalogUrl = new URL(`${relayUrl}/api/menu-catalog`);
            catalogUrl.searchParams.set('client_build', KFM_LIVE_CATALOG_CLIENT_BUILD);
            catalogUrl.searchParams.set('t', String(Date.now()));
            const response = await fetch(catalogUrl.toString(), {
                method: 'GET',
                mode: 'cors',
                credentials: 'omit',
                cache: 'no-store',
                headers: { 'Accept': 'application/json' },
                signal: controller.signal,
            });
            if (!response.ok) throw new Error(`Canlı katalog HTTP ${response.status}`);
            const payload = await response.json();
            const menu = kfmLiveCatalogToMenu(payload?.catalog);
            if (!menu) throw new Error('Canlı katalog geçerli ve görünür ürün içermiyor.');
            const settings = kfmCanliMenuAyarlariniNormalizeEt(payload?.web_settings);
            // Canlı yanıt başarılıysa eski offline snapshot’ı önce sil; yalnız güncel
            // sürümün güvenli yedeğini sonraki çevrimdışı açılış için sakla.
            lsSave(KFM_LIVE_CATALOG_CACHE_KEY, { version: payload?.version || null, menu, settings, cachedAt: Date.now(), client_build: KFM_LIVE_CATALOG_CLIENT_BUILD });
            return { menu, version: payload?.version || null, settings };
        } finally {
            window.clearTimeout(timeoutId);
        }
    }

    window.addEventListener("load", async () => {
        const staticPayload = await kfmStatikMenuGorselleriniYukle();
        const staticImageMenu = staticPayload?.menuYedek && typeof staticPayload.menuYedek === 'object'
            ? staticPayload.menuYedek : null;
        try {
            const liveCatalog = await kfmCanliKatalogYukle();
            // Relay’deki canlı katalog ürün/stok kaynağıdır; GitHub yedeği yayınlanmış
            // görselleri ve menü dışı görünüm ayarlarını tamamlar.
            menuData = kfmMergeUserImages(kfmStaticInternetGorselleriniUygula(liveCatalog.menu, staticImageMenu), kfmLocalMenuSnapshot);
            kfmUzakYedekAyarlariniUygula(staticPayload);
            kfmCanliMenuAyarlariniUygula(liveCatalog.settings);
            lsSave('kfm_menu', menuData);
            console.info(`✓ Canlı D1 menü ve görünüm ayarları (sürüm ${liveCatalog.version || '?'}) yüklendi.`);
        } catch (err) {
            const cachedCatalog = ls(KFM_LIVE_CATALOG_CACHE_KEY, null);
            if (staticImageMenu && Object.keys(staticImageMenu).length) {
                // Diğer cihazlarda relay erişilemese bile GitHub Pages’e yayımlanan
                // son menü gösterilir; eski localStorage sadece eksik görselleri korur.
                menuData = kfmMergeUserImages(staticImageMenu, kfmLocalMenuSnapshot);
                kfmUzakYedekAyarlariniUygula(staticPayload);
                kfmCanliMenuAyarlariniUygula(staticPayload?.web_settings || KFM_LIVE_MENU_SETTINGS_DEFAULTS);
                lsSave(KFM_LIVE_CATALOG_CACHE_KEY, { version: staticPayload?.publishedAt || null, menu: menuData, settings: window.kfmLiveMenuSettings, cachedAt: Date.now(), client_build: KFM_LIVE_CATALOG_CLIENT_BUILD });
                console.warn('Canlı relay alınamadı; GitHub Pages’teki güncel statik yayın kullanılıyor.', err);
            } else if (cachedCatalog?.menu && typeof cachedCatalog.menu === 'object') {
                menuData = kfmMergeUserImages(kfmStaticInternetGorselleriniUygula(cachedCatalog.menu, staticImageMenu), kfmLocalMenuSnapshot);
                kfmCanliMenuAyarlariniUygula(cachedCatalog.settings);
                console.warn('Canlı katalog alınamadı; güvenli son katalog anlık görüntüsü kullanılıyor.', err);
            } else {
                // İlk çevrimdışı açılışta mevcut yerel menü, o da yoksa varsayılan menü kullanılır.
                menuData = menuData && Object.keys(menuData).length ? menuData : varsayilanMenu;
                kfmCanliMenuAyarlariniUygula(KFM_LIVE_MENU_SETTINGS_DEFAULTS);
                console.warn('Canlı katalog alınamadı; yerel/statik menü yedeği kullanılıyor.', err);
            }
        }

        // Arayüzü güncelle
        headerBgUygula();
        buildNav();
        renderProducts();
        skorGuncelle();
        wifiEkraniGuncelle();
        dilUygula();
        kfmMasaParametresiniUygula();
        
        // Gizli sekme veya ilk yükleme için ekstra kontrol
        if (Object.keys(menuData).length === 0) {
            console.warn("⚠️ Menü verisi hala boş, varsayılanlar yükleniyor...");
            // Eğer hala boşsa bir kez daha render dene
            setTimeout(() => {
                buildNav();
                renderProducts();
            }, 500);
        }
    });


    setupImmersive3DEnhancements();

    // Admin Accordion Toggle
    function toggleAdminAccordion(el) {
        const section = el.closest('.admin-accordion-section');
        if (section) {
            section.classList.toggle('active');
        }
    }


    function setupImmersive3DEnhancements() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const header = document.getElementById('mainHeader');
        if (header && !header.querySelector('.header-ambient-3d')) {
            header.insertAdjacentHTML('afterbegin', '<div class="header-ambient-3d" aria-hidden="true"><span class="header-orbit-a"></span><span class="header-orbit-b"></span><span class="header-steam-a"></span><span class="header-steam-b"></span><span class="header-steam-c"></span></div>');
        }
        if (reduceMotion) return;

        const bindTilt = (element, xVar, yVar, maxY, maxX, activeClass) => {
            if (!element || element.dataset.tiltReady === 'true') return;
            element.dataset.tiltReady = 'true';
            let raf = 0;
            let px = 0;
            let py = 0;
            const reset = () => {
                if (raf) cancelAnimationFrame(raf);
                element.style.setProperty(xVar, '0deg');
                element.style.setProperty(yVar, '0deg');
                element.classList.remove(activeClass);
            };
            const update = (clientX, clientY) => {
                const rect = element.getBoundingClientRect();
                px = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width) * 2 - 1));
                py = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height) * 2 - 1));
                if (raf) return;
                raf = requestAnimationFrame(() => {
                    raf = 0;
                    element.classList.add(activeClass);
                    element.style.setProperty(xVar, `${(-py * maxX).toFixed(2)}deg`);
                    element.style.setProperty(yVar, `${(px * maxY).toFixed(2)}deg`);
                });
            };
            element.addEventListener('pointermove', e => update(e.clientX, e.clientY), { passive: true });
            element.addEventListener('pointerleave', reset, { passive: true });
            element.addEventListener('pointercancel', reset, { passive: true });
            element.addEventListener('pointerup', e => { if (e.pointerType === 'touch') reset(); }, { passive: true });
        };

        const welcomeCard = document.querySelector('.welcome-card');
        bindTilt(welcomeCard, '--welcome-rx', '--welcome-ry', 4.5, 3.5, 'welcome-tilt-active');
        const detailHero = document.querySelector('.detail-hero');
        bindTilt(detailHero, '--detail-rx', '--detail-ry', 3.2, 2.4, 'detail-parallax-active');
    }

    // Profesyonel sabit merkezli kategori çarkı.
    // Serbest scroll yerine kontrollü drag + tek-adım snap modeli kullanır.
    (function initProfessionalCategoryWheel() {
        const nav = document.getElementById('catNav');
        if (!nav) return;

        const STEP = 68;
        let currentIndex = 0;
        let dragStartY = 0;
        let dragStartIndex = 0;
        let dragging = false;
        let suppressClick = false;
        let wheelLock = false;
        let dwellTimer = null;
        let dwellArmed = false;
        let raf = 0;
        let wheelOpenAnimationTimer = null;
        let mobileWheelPositionedForOpen = false;


        /* V12 — Web Audio API ile kullanıcı etkileşimine bağlı, dosyasız hafif çark sesleri. */
        const WHEEL_DWELL_MS = 1500;
        const WHEEL_SOUND_STORAGE_KEY = 'kfm_wheel_sound_enabled';
        let wheelAudioContext = null;
        let wheelSoundEnabled = (() => { try { return localStorage.getItem(WHEEL_SOUND_STORAGE_KEY) !== 'off'; } catch (_) { return true; } })();
        let lastWheelSoundAt = 0;
        let lastSoundFocusId = '';

        function getWheelAudioContext() {
            if (!wheelSoundEnabled) return null;
            const AudioCtor = window.AudioContext || window.webkitAudioContext;
            if (!AudioCtor) return null;
            if (!wheelAudioContext) wheelAudioContext = new AudioCtor();
            if (wheelAudioContext.state === 'suspended') wheelAudioContext.resume().catch(() => {});
            return wheelAudioContext;
        }
        function playWheelTone(fromHz, toHz, duration, volume, type = 'sine') {
            const ctx = getWheelAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(fromHz, now);
            osc.frequency.exponentialRampToValueAtTime(Math.max(24, toHz), now + duration);
            gain.gain.setValueAtTime(0.0001, now);
            gain.gain.exponentialRampToValueAtTime(volume, now + Math.min(.018, duration * .32));
            gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            osc.connect(gain).connect(ctx.destination);
            osc.start(now); osc.stop(now + duration + .025);
        }
        function playWheelTick() {
            const now = performance.now();
            if (now - lastWheelSoundAt < 66) return;
            lastWheelSoundAt = now;
            playWheelTone(430, 330, .042, .018, 'triangle');
        }
        function playWheelConfirm() {
            playWheelTone(420, 625, .09, .032, 'sine');
            setTimeout(() => playWheelTone(625, 760, .075, .022, 'sine'), 58);
        }
        function ensureWheelSoundToggle() {
            if (document.getElementById('wheelSoundToggle')) return;
            const button = document.createElement('button');
            button.type = 'button'; button.id = 'wheelSoundToggle'; button.className = 'wheel-sound-toggle';
            button.setAttribute('aria-pressed', String(wheelSoundEnabled));
            const update = () => {
                button.classList.toggle('is-muted', !wheelSoundEnabled);
                button.innerHTML = `<i class="fa-solid ${wheelSoundEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}" aria-hidden="true"></i>`;
                const soundLabel = wheelSoundEnabled ? t('wheel_sound_off') : t('wheel_sound_on');
                button.setAttribute('aria-label', soundLabel);
                button.title = soundLabel;
                button.setAttribute('aria-pressed', String(wheelSoundEnabled));
            };
            button.addEventListener('click', event => {
                event.preventDefault(); event.stopPropagation();
                wheelSoundEnabled = !wheelSoundEnabled;
                try { localStorage.setItem(WHEEL_SOUND_STORAGE_KEY, wheelSoundEnabled ? 'on' : 'off'); } catch (_) {}
                update();
                if (wheelSoundEnabled) playWheelConfirm();
            });
            nav.appendChild(button); window.__refreshWheelSoundToggle = update; update();
        }
        ensureWheelSoundToggle();
        // Kategori değişimlerinde çark içeriği yeniden oluşturulduğunda ses denetimini koru.
        const wheelSoundObserver = new MutationObserver(() => {
            if (!document.getElementById('wheelSoundToggle')) ensureWheelSoundToggle();
        });
        wheelSoundObserver.observe(nav, { childList: true });

        const getItems = () => [...nav.querySelectorAll('.cat-pill')];
        const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

        function activeIndex(items = getItems()) {
            const active = items.findIndex(item => item.classList.contains('active'));
            return active >= 0 ? active : 0;
        }

        function clearDwell() {
            clearTimeout(dwellTimer);
            dwellTimer = null;
            nav.classList.remove('wheel-dwell');
            nav.classList.remove('wheel-awaiting-selection');
        }

        function selectItem(item) {
            if (!item) return;
            const key = item.id.replace(/^cp-/, '');
            if (!key) return;
            playWheelConfirm();
            kategoriGit(key);
            closeWheel();
        }

        function startDwell() {
            clearDwell();
            if (!dwellArmed || dragging || nav.classList.contains('wheel-collapsed')) return;
            const item = getItems()[Math.round(currentIndex)];
            if (!item) return;
            nav.classList.add('wheel-awaiting-selection');
            dwellTimer = setTimeout(() => {
                if (!dragging && !nav.classList.contains('wheel-collapsed')) {
                    nav.classList.add('wheel-dwell');
                    selectItem(item);
                }
            }, WHEEL_DWELL_MS);
        }

        function render(index, animate = true) {
            const items = getItems();
            if (!items.length) return;
            currentIndex = clamp(index, 0, items.length - 1);
            nav.classList.toggle('wheel-dragging', dragging);

            items.forEach((item, i) => {
                const distance = i - currentIndex;
                const absolute = Math.abs(distance);
                const isClosedActive = nav.classList.contains('wheel-collapsed') && item.classList.contains('active');
                const visible = nav.classList.contains('wheel-collapsed') ? isClosedActive : absolute <= 3.2;
                item.style.display = visible ? 'flex' : 'none';
                if (!visible) return;

                const scale = absolute < .08 ? 1.06 : Math.max(.80, 1 - absolute * .10);
                const opacity = absolute < .08 ? 1 : Math.max(.20, 1 - absolute * .24);
                const blur = absolute < .08 ? 0 : Math.min(2.2, absolute * .65);
                const y = distance * STEP;
                item.style.opacity = opacity.toFixed(2);
                item.style.setProperty('--wheel-live-blur', `${blur.toFixed(1)}px`);
                item.style.filter = `blur(${blur.toFixed(1)}px)`;
                // Çark öğeleri yalnızca dikey eksende ilerler. Bu, sürüklemede sağa
                // kayan/taşan 3B katman hissini kaldırırken odak ölçeğini korur.
                item.style.transform = `translate(-50%, -50%) translateY(${y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
                item.style.transitionDuration = animate ? '.26s' : '0s';
                item.classList.toggle('wheel-focus', absolute < .08);
                item.classList.toggle('wheel-near', absolute >= .08 && absolute < 1.1);
                item.classList.toggle('wheel-far', absolute >= 1.1);
            });
            updateWheelProximityPreview(items, currentIndex);
            const focusItem = items.find(item => item.classList.contains('wheel-focus'));
            if (focusItem && !nav.classList.contains('wheel-collapsed') && window.__lastWheelFocusId !== focusItem.id) {
                window.__lastWheelFocusId = focusItem.id;
                if (lastSoundFocusId !== focusItem.id) { playWheelTick(); lastSoundFocusId = focusItem.id; }
            }
            if (!dragging && !settling) startDwell();
        }


        function updateWheelProximityPreview() {
            // Kategori adı her zaman kartın üzerinde sabit kalır. Eski sürümlerden
            // kalmış tüm geçici/yatay etiket düğümleri tekrar oluşsa bile temizlenir.
            nav.querySelectorAll('.wheel-proximity-preview, .wheel-preview-item, [data-wheel-transient-label]')
                .forEach(element => element.remove());
        }

        function scheduleRender() {
            if (!raf) raf = requestAnimationFrame(() => {
                raf = 0;
                render(currentIndex);
            });
        }

        function syncWheelInteractionMode() {
            nav.style.touchAction = nav.classList.contains('wheel-collapsed') ? 'pan-y' : 'none';
        }

        function playWheelOpenAnimation() {
            clearTimeout(wheelOpenAnimationTimer);
            nav.classList.remove('wheel-opening');
            if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
            requestAnimationFrame(() => {
                if (nav.classList.contains('wheel-collapsed')) return;
                nav.classList.add('wheel-opening');
                wheelOpenAnimationTimer = setTimeout(() => nav.classList.remove('wheel-opening'), 300);
            });
        }

        function centerMobileWheelForOpen() {
            const isMobile = window.matchMedia?.('(max-width: 680px)').matches;
            if (!isMobile || mobileWheelPositionedForOpen) return;
            mobileWheelPositionedForOpen = true;
            const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
            document.body.classList.add('wheel-mobile-centering');
            const alignOpenWheel = () => {
                if (nav.classList.contains('wheel-collapsed')) return;
                const box = nav.getBoundingClientRect();
                const targetTop = Math.max(0, window.scrollY + box.top + box.height / 2 - window.innerHeight / 2);
                if (Math.abs(targetTop - window.scrollY) >= 10) {
                    window.scrollTo({ top: targetTop, behavior: reduceMotion ? 'auto' : 'smooth' });
                }
            };
            // Açık çarkın yüksekliği kısa bir geçişle oluşur. Ölçümü geçişten sonra
            // almak, hedefin yarım açık görünüm yerine gerçek merkeze gitmesini sağlar.
            if (reduceMotion) alignOpenWheel();
            else window.setTimeout(alignOpenWheel, 260);
        }

        function openWheel() {
            const wasCollapsed = nav.classList.contains('wheel-collapsed');
            nav.classList.remove('wheel-collapsed');
            nav.setAttribute('aria-expanded', 'true');
            syncWheelInteractionMode();
            currentIndex = activeIndex();
            dwellArmed = false;
            lastSoundFocusId = '';
            if (wasCollapsed) {
                playWheelOpenAnimation();
                centerMobileWheelForOpen();
            }
            render(currentIndex, true);
        }

        function closeWheel() {
            clearDwell();
            nav.classList.add('wheel-collapsed');
            nav.setAttribute('aria-expanded', 'false');
            syncWheelInteractionMode();
            currentIndex = activeIndex();
            dwellArmed = false;
            mobileWheelPositionedForOpen = false;
            document.body.classList.remove('wheel-mobile-centering');
            render(currentIndex, true);
        }

        function moveOneStep(direction) {
            const items = getItems();
            if (!items.length) return;
            openWheel();
            dwellArmed = true;
            clearDwell();
            render(Math.round(currentIndex) + direction, true);
        }

        window.__wheelGoToKey = function(key) {
            const items = getItems();
            const index = items.findIndex(item => item.id === 'cp-' + key);
            if (index >= 0) {
                currentIndex = index;
                render(currentIndex, true);
            }
        };

        nav.addEventListener('click', (event) => {
            if (!nav.classList.contains('wheel-collapsed')) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            openWheel();
        }, true);

        // Sürekli mouse-wheel akışı: delta biriktirilir, tek kilit uygulanmaz.
        let wheelDeltaBuffer = 0;
        let wheelFrame = 0;
        const WHEEL_STEP_UNIT = 70;

        function flushWheelDelta() {
            wheelFrame = 0;
            if (nav.classList.contains('wheel-collapsed') || settling) {
                wheelDeltaBuffer = 0;
                return;
            }
            const rawSteps = Math.trunc(wheelDeltaBuffer / WHEEL_STEP_UNIT);
            if (!rawSteps) return;
            const stepCount = Math.sign(rawSteps) * Math.min(2, Math.abs(rawSteps));
            wheelDeltaBuffer -= stepCount * WHEEL_STEP_UNIT;
            dwellArmed = true;
            clearDwell();
            render(clamp(Math.round(currentIndex) + stepCount, 0, getItems().length - 1), true);
        }

        nav.addEventListener('wheel', (event) => {
            // Kapalı çarkta preventDefault yok; sayfa normal şekilde kayar.
            if (nav.classList.contains('wheel-collapsed')) return;
            event.preventDefault();
            const baseDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
            if (Math.abs(baseDelta) < 0.5) return;
            const modeMultiplier = event.deltaMode === 1 ? 20 : (event.deltaMode === 2 ? 80 : 1);
            wheelDeltaBuffer = Math.max(-240, Math.min(240, wheelDeltaBuffer + baseDelta * modeMultiplier));
            if (!wheelFrame) wheelFrame = requestAnimationFrame(flushWheelDelta);
        }, { passive: false });


        /* WHEEL SENSITIVITY V6 */
        // WHEEL INTERACTION V7
        let settling = false;
        let dragPointerType = 'touch';
        let dragThreshold = 10;
        let dragGain = .94;
        let dragMoved = false;
        let filteredDistance = 0;
        let lastPointerY = 0;
        let motionSamples = [];
        let magneticRaf = 0;

        function configureDragProfile(pointerType) {
            dragPointerType = pointerType || 'touch';
            const coarse = dragPointerType === 'touch' || dragPointerType === 'pen' || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
            dragThreshold = coarse ? 10 : 6;
            dragGain = coarse ? .94 : 1.02;
        }

        function resetMotionFilter() {
            filteredDistance = 0;
            lastPointerY = 0;
            motionSamples = [];
        }

        function sampleMotion(distance) {
            const now = performance.now();
            motionSamples.push({ distance, time: now });
            if (motionSamples.length > 5) motionSamples.shift();
            return now;
        }

        function getFilteredDistance(rawDistance) {
            const target = rawDistance * dragGain;
            const smoothing = dragPointerType === 'mouse' ? .62 : .48;
            filteredDistance += (target - filteredDistance) * smoothing;
            return filteredDistance;
        }

        function getMotionVelocity() {
            if (motionSamples.length < 2) return 0;
            const first = motionSamples[0];
            const last = motionSamples[motionSamples.length - 1];
            return (last.distance - first.distance) / Math.max(1, last.time - first.time);
        }

        function magneticSnap(targetIndex) {
            cancelAnimationFrame(magneticRaf);
            clearDwell();
            const from = currentIndex;
            const to = clamp(Math.round(targetIndex), 0, getItems().length - 1);
            const distance = to - from;
            if (Math.abs(distance) < .001) {
                settling = false;
                render(to, true);
                return;
            }
            settling = true;
            nav.classList.add('wheel-settling');
            const duration = dragPointerType === 'mouse' ? 210 : 255;
            const start = performance.now();
            const ease = t => 1 - Math.pow(1 - t, 3);
            const tick = now => {
                const progress = Math.min(1, (now - start) / duration);
                currentIndex = from + distance * ease(progress);
                render(currentIndex, false);
                if (progress < 1) {
                    magneticRaf = requestAnimationFrame(tick);
                } else {
                    currentIndex = to;
                    settling = false;
                    nav.classList.remove('wheel-settling');
                    render(to, true);
                }
            };
            magneticRaf = requestAnimationFrame(tick);
        }

        nav.addEventListener('pointerdown', (event) => {
            if (nav.classList.contains('wheel-collapsed') || settling) return;
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            // Bazı başlangıç akışlarında çark açık kalabilir. Bu durumda ilk gerçek
            // dokunuş da yalnızca bir kez mobil ortalamayı başlatır; sürükleme boyunca
            // tekrar kaydırma veya yatay hareket oluşmaz.
            centerMobileWheelForOpen();
            configureDragProfile(event.pointerType);
            dragging = true;
            dragMoved = false;
            suppressClick = false;
            dragStartY = event.clientY;
            lastPointerY = event.clientY;
            dragStartIndex = currentIndex;
            resetMotionFilter();
            clearDwell();
            nav.classList.add('wheel-dragging');
            if (event.isTrusted) nav.setPointerCapture?.(event.pointerId);
            event.preventDefault();
        }, { passive: false });

        nav.addEventListener('pointermove', (event) => {
            if (!dragging) return;
            const rawDistance = dragStartY - event.clientY;
            sampleMotion(rawDistance);
            const filtered = getFilteredDistance(rawDistance);
            const crossedThreshold = Math.abs(rawDistance) >= dragThreshold;
            if (!crossedThreshold && !dragMoved) {
                lastPointerY = event.clientY;
                return;
            }
            if (crossedThreshold) {
                dragMoved = true;
                dwellArmed = true;
                suppressClick = true;
            }
            const liveIndex = dragStartIndex + filtered / STEP;
            render(liveIndex, false);
            lastPointerY = event.clientY;
            event.preventDefault();
        }, { passive: false });

        function endDrag(event) {
            if (!dragging) return;
            const clientY = Number.isFinite(event?.clientY) ? event.clientY : lastPointerY;
            const rawDistance = dragStartY - clientY;
            const distance = dragMoved ? filteredDistance : 0;
            const velocity = getMotionVelocity();
            dragging = false;
            nav.classList.remove('wheel-dragging');
            nav.style.setProperty('--wheel-gesture-tilt', '0deg');
            if (event?.isTrusted && event.pointerId != null) nav.releasePointerCapture?.(event.pointerId);
            if (!dragMoved) {
                render(Math.round(currentIndex), true);
                resetMotionFilter();
                return;
            }
            const inertiaMs = dragPointerType === 'mouse' ? 115 : 85;
            const inertiaDistance = clamp(velocity * inertiaMs, -38, 38);
            const projectedIndex = dragStartIndex + (distance + inertiaDistance) / STEP;
            magneticSnap(projectedIndex);
            setTimeout(() => { suppressClick = false; }, 170);
            resetMotionFilter();
        }
        nav.addEventListener('pointerup', endDrag, { passive: true });
        nav.addEventListener('pointercancel', endDrag, { passive: true });

        nav.addEventListener('keydown', (event) => {
            if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
            event.preventDefault();
            moveOneStep(event.key === 'ArrowDown' ? 1 : -1);
        });

        nav.addEventListener('click', (event) => {
            const item = event.target.closest('.cat-pill');
            if (!item || nav.classList.contains('wheel-collapsed') || suppressClick) return;
            selectItem(item);
        });

        const observer = new MutationObserver(() => {
            const items = getItems();
            if (!items.length) return;
            if (!dragging) currentIndex = activeIndex(items);
            scheduleRender();
        });
        observer.observe(nav, { childList: true });

        nav.classList.add('wheel-pro-mode', 'wheel-collapsed');
        nav.setAttribute('aria-expanded', 'false');
        syncWheelInteractionMode();
        currentIndex = activeIndex();
        render(currentIndex, false);
    })();


    // One-shot sheen avoids a continuously flashing product grid while retaining a premium feedback cue.
    function setupOneShotCardSheen() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;
        document.querySelectorAll('#productGrid > .prod-card').forEach(card => {
            if (card.dataset.sheenReady === 'true') return;
            card.dataset.sheenReady = 'true';
            let timer = null;
            const showSheen = () => {
                if (timer) clearTimeout(timer);
                card.classList.remove('card-sheen-once');
                void card.offsetWidth;
                card.classList.add('card-sheen-once');
                timer = window.setTimeout(() => card.classList.remove('card-sheen-once'), 680);
            };
            card.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') showSheen(); }, { passive: true });
            card.addEventListener('pointerdown', event => { if (event.pointerType === 'touch') showSheen(); }, { passive: true });
        });
    }

    // Premium motion layer: pointer-aware but deliberately restrained for mobile performance.
    function setupPremiumMotionLayer() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;

        const header = document.getElementById('mainHeader');
        if (header && header.dataset.premiumMotionReady !== 'true') {
            header.dataset.premiumMotionReady = 'true';
            let raf = 0, lastX = 0, lastY = 0;
            const resetHeader = () => {
                if (raf) cancelAnimationFrame(raf);
                header.classList.remove('header-tilting');
                header.style.setProperty('--hero-tilt-x', '0deg');
                header.style.setProperty('--hero-tilt-y', '0deg');
            };
            const tiltHeader = (clientX, clientY) => {
                const rect = header.getBoundingClientRect();
                lastX = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width) * 2 - 1));
                lastY = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height) * 2 - 1));
                if (raf) return;
                raf = requestAnimationFrame(() => {
                    raf = 0;
                    header.classList.add('header-tilting');
                    header.style.setProperty('--hero-tilt-x', `${(-lastY * 1.15).toFixed(2)}deg`);
                    header.style.setProperty('--hero-tilt-y', `${(lastX * 1.4).toFixed(2)}deg`);
                });
            };
            header.addEventListener('pointermove', event => tiltHeader(event.clientX, event.clientY), { passive: true });
            header.addEventListener('pointerleave', resetHeader, { passive: true });
            header.addEventListener('pointercancel', resetHeader, { passive: true });
            header.addEventListener('pointerup', event => { if (event.pointerType === 'touch') resetHeader(); }, { passive: true });
        }

        const wifiBar = document.querySelector('.wifi-bar');
        if (wifiBar && wifiBar.dataset.premiumMotionReady !== 'true') {
            wifiBar.dataset.premiumMotionReady = 'true';
            wifiBar.addEventListener('click', () => {
                wifiBar.classList.remove('wifi-pulse');
                void wifiBar.offsetWidth;
                wifiBar.classList.add('wifi-pulse');
            }, { passive: true });
        }
        setupOneShotCardSheen();
    }


    // PROFESSIONAL MOTION POLISH V2
    // Image reveal is bound once per card and uses transform/opacity only for low-cost rendering.
    function setupCardImageReveal() {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        document.querySelectorAll('.product-card-image-wrap .product-card-image').forEach(img => {
            if (img.dataset.imageRevealReady === 'true') return;
            img.dataset.imageRevealReady = 'true';
            const wrap = img.closest('.product-card-image-wrap');
            if (!wrap) return;
            const reveal = () => {
                wrap.classList.remove('image-ready');
                wrap.dataset.imageState = 'ready';
                wrap.setAttribute('aria-busy', 'false');
                if (!reduceMotion) void wrap.offsetWidth;
                wrap.classList.add('image-ready');
            };
            if (reduceMotion || (img.complete && img.naturalWidth > 0)) {
                requestAnimationFrame(reveal);
            } else {
                img.addEventListener('load', reveal, { once: true });
                img.addEventListener('error', reveal, { once: true });
            }
        });
    }



    function setupScrollSyncNav() {
        const menuButton = document.getElementById('bnav-menu');
        const wheel = document.getElementById('catNav');
        const grid = document.getElementById('productGrid');
        if (!menuButton || !wheel || !grid || menuButton.dataset.scrollSyncReady === 'true') return;
        menuButton.dataset.scrollSyncReady = 'true';
        let raf = 0;
        const update = () => {
            raf = 0;
            const line = Math.min(window.innerHeight * .58, 420);
            const wheelBox = wheel.getBoundingClientRect();
            const gridBox = grid.getBoundingClientRect();
            const inMenuArea = wheelBox.top <= line && gridBox.bottom >= line;
            menuButton.classList.toggle('active', inMenuArea);
            menuButton.classList.toggle('scroll-active', inMenuArea);
            menuButton.setAttribute('aria-current', inMenuArea ? 'page' : 'false');
        };
        const requestUpdate = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        window.__refreshScrollSyncNav = requestUpdate;
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        requestUpdate();
    }

    function setupTactileFeedback(root = document) {
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;
        root.querySelectorAll('#productGrid > .prod-card, .product-detail-btn, .daily-suggestion-card, .menu-end-card button, .wifi-bar, #catNav .cat-pill, #bottomNav .bnav-btn').forEach(element => {
            if (element.dataset.tactileReady === 'true') return;
            element.dataset.tactileReady = 'true';
            let releaseTimer = 0;
            const release = () => {
                window.clearTimeout(releaseTimer);
                releaseTimer = window.setTimeout(() => element.classList.remove('tactile-press'), 105);
            };
            element.addEventListener('pointerdown', event => {
                if (event.pointerType === 'mouse') return;
                element.classList.add('tactile-press');
            }, { passive: true });
            element.addEventListener('pointerup', release, { passive: true });
            element.addEventListener('pointercancel', release, { passive: true });
            element.addEventListener('pointerleave', release, { passive: true });
        });
    }


    // Fixed reading progress gives orientation in long menus without occupying usable space.
    function setupPageProgress() {
        if (document.getElementById('pageProgress')) return;
        const bar = document.createElement('div');
        bar.id = 'pageProgress';
        bar.setAttribute('aria-hidden', 'true');
        bar.innerHTML = '<span></span>';
        document.body.appendChild(bar);
        const fill = bar.firstElementChild;
        let raf = 0;
        const update = () => {
            raf = 0;
            const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            const progress = Math.max(0, Math.min(1, window.scrollY / max));
            fill.style.setProperty('--page-progress', progress.toFixed(4));
        };
        const requestUpdate = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        window.addEventListener('scroll', requestUpdate, { passive: true });
        window.addEventListener('resize', requestUpdate, { passive: true });
        requestUpdate();
    }


    // CINEMATIC WELCOME & MENU RETURN V3
    function scrollToMenuStart() {
        // Find the actual menu target - check multiple possible elements
        const catNav = document.getElementById('catNav');
        const categoryPicker = document.getElementById('categoryPicker');
        const productGrid = document.getElementById('productGrid');
        
        let target = null;
        
        // Priority: category picker > cat nav > product grid
        if (categoryPicker && categoryPicker.offsetParent !== null) {
            target = categoryPicker;
        } else if (catNav && catNav.offsetParent !== null && catNav.style.display !== 'none') {
            target = catNav;
        } else if (productGrid) {
            target = productGrid;
        }
        
        if (!target) return;
        
        const menuButton = document.getElementById('bnav-menu');
        if (menuButton) {
            menuButton.classList.remove('menu-button-ring');
            void menuButton.offsetWidth;
            menuButton.classList.add('menu-button-ring');
            window.setTimeout(() => menuButton.classList.remove('menu-button-ring'), 1260);
        }
        
        const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        // Direct scroll using getBoundingClientRect calculation
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetTop = scrollTop + rect.top - 20; // 20px offset from top
        
        window.scrollTo({
            top: targetTop,
            behavior: reduceMotion ? 'auto' : 'smooth'
        });
        
        target.classList.remove('menu-return-focus');
        if (!reduceMotion) {
            requestAnimationFrame(() => target.classList.add('menu-return-focus'));
            window.setTimeout(() => target.classList.remove('menu-return-focus'), 840);
        }
    }

    setupPremiumMotionLayer();
    setupPageProgress();
    setupScrollSyncNav();
    setupTactileFeedback();

