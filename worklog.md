---
Task ID: 1
Agent: Main Agent
Task: تطبيق مشروع UAE Cycling Routes من GitHub

Work Log:
- استنساخ المستودع من GitHub: https://github.com/a88li/-UAE-Cycling-Routes-.git
- تهيئة بيئة التطوير باستخدام fullstack-dev skill
- نسخ جميع الصور والموارد الثابتة إلى مجلد public
- تثبيت مكتبات leaflet و react-leaflet و @types/leaflet
- كتابة ملف globals.css بألوان UAE Cycling Theme (أزرق داكن + برتقالي)
- كتابة ملف layout.tsx بخط Cairo العربي و إعدادات PWA
- كتابة ملف InteractiveMap.tsx مع خريطة Leaflet تفاعلية
- كتابة ملف SmartTools.tsx مع حاسبة السعرات والماء
- كتابة ملف VirtualTour.tsx مع جولات 360 درجة
- كتابة ملف WeatherWidget.tsx مع بيانات الطقس الحية
- نسخ ملف page.tsx الرئيسي (أكثر من 900 سطر)
- تحديث next.config.ts لدعم الصور الخارجية و allowedDevOrigins
- إصلاح أخطاء lint (استبدال useEffect+useState بـ useSyncExternalStore و useMemo)
- تشغيل المشروع بنجاح على المنفذ 3000

Stage Summary:
- المشروع يعمل بنجاح على http://localhost:3000
- الصفحة الرئيسية تعرض كل المحتوى: Hero, Why UAE, Interactive Map, Routes, Equipment, Smart Tools, Virtual Tours, Contact
- دعم ثنائي اللغة (عربي/إنجليزي) مع RTL
- دعم الوضع الداكن
- خريطة Leaflet تفاعلية مع 10 مواقع مسارات
- بيانات الطقس الحية من Open-Meteo API
- حاسبة ذكية للسعرات والماء
- جولات افتراضية 360 درجة
