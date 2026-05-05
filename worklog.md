---
Task ID: 1
Agent: Main Agent
Task: تطبيق مشروع UAE Cycling Routes من مستودع GitHub

Work Log:
- استنساخ المستودع من https://github.com/a88li/-UAE-Cycling-Routes-
- إعداد بيئة التطوير Next.js 16
- نسخ 71 صورة إلى مجلد public/images/
- نسخ المكونات المخصصة: InteractiveMap, SmartTools, WeatherWidget, VirtualTour
- نسخ ملفات الصفحة الرئيسية (page.tsx) والتنسيقات (globals.css) والتخطيط (layout.tsx)
- نسخ ملفات PWA (manifest.json, sw.js, robots.txt)
- تثبيت التبعيات: framer-motion, react-leaflet, leaflet
- إصلاح أخطاء lint: تحويل useEffect+setState إلى useMemo في SmartTools
- إصلاح خطأ useSyncExternalStore في InteractiveMap بدلاً من useEffect+useState
- إزالة Google Tag Manager script غير المستخدم من layout.tsx
- حذف مجلد المستودع القديم
- التحقق من عمل الموقع بنجاح (HTTP 200)

Stage Summary:
- الموقع يعمل بنجاح على المنفذ 3000
- جميع الميزات الرئيسية تعمل: خريطة تفاعلية، حاسبة ذكية، طقس، جولات افتراضية
- دعم ثنائي اللغة (عربي/إنجليزي)
- دعم الوضع الداكن
- لا توجد أخطاء في lint
