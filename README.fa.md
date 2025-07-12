<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇬🇧 English-0d6efd?style=for-the-badge&logo=googletranslate&logoColor=white" alt="English Version">
  </a>
  <a href="README.fa.md">
    <img src="https://img.shields.io/badge/🇮🇷 Persian-198754?style=for-the-badge&logo=googletranslate&logoColor=white" alt="نسخه فارسی">
  </a>
</p>

---

<h1 align="center">🌌 نبولا ورکز - داشبورد مدیریت کهکشانی</h1>

<p align="center">
  یک داشبورد مدیریتی آینده‌نگر، واکنش‌گرا و انیمیشنی که فقط با HTML، CSS و JavaScript خالص ساخته شده است.
</p>

<p align="center">
  <img src="https://github.com/VIDAKHOSHPEY22/Nebula-Works/blob/0367949e5698d76b91e1cb960868d3e865e309f5/assets/signup-preview.png" alt="پیش‌نمایش نبولا" width="80%">
</p>

<p align="center">
  🌠 ارسال شده برای <a href="https://dev.to/page/fontend-challenge-axero-contest-rules">چالش فرانت‌اند توسط Dev.to و Axero</a>
</p>

---

## 🚀 نسخه‌ی زنده

> ⚙️ [صفحه زنده در گیت‌هاب](https://vidakhoshpey22.github.io/Nebula-Works)  
> 🎥 [تماشای ویدیو دمو در یوتیوب](https://youtube.com/your-demo-link)

---

## 📦 ویژگی‌های پروژه

| دسته‌بندی         | توضیحات                                                                    |
|------------------|-----------------------------------------------------------------------------|
| ✨ صفحه ورود     | خوش‌آمدگویی داینامیک همراه با API آب‌و‌هوا و پیام کاربرمحور               |
| 🔐 احراز هویت    | فرم عضویت (`signup.html`) + ورود سفارشی برای ادمین                         |
| 📊 داشبورد       | چندین صفحه پیوسته: پیام‌ها، پروژه‌ها، تقویم، تیم، تنظیمات و ...            |
| 👩‍🚀 بخش ادمین     | فضای مستقل برای تنظیمات امنیتی و شبکه                                        |
| 🌍 مدل‌های سه‌بعدی | مدل‌های Earth، Mars و Jupiter با فرمت `.glb` برای افکت بصری فضایی           |
| 🎨 تم‌بندی        | سوئیچ بین تم روشن و تاریک برای تجربه کاربری بهتر                          |
| 📱 واکنش‌گرا      | طراحی سازگار با موبایل، تبلت و دسکتاپ                                     |

---

## 🧠 فناوری‌های استفاده‌شده

- HTML5
- CSS3 (استایل‌سازی سفارشی و ترنزیشن‌ها)
- JavaScript خالص (برای تعاملات)
- فایل‌های `.glb` برای مدل‌های سه‌بعدی (سازگار با Three.js)
- بدون استفاده از هیچ فریم‌ورک یا کتابخانه‌ای

---

## 🧑‍💻 تیم و مشارکت‌ها

| نام               | نقش پروژه                      | گیت‌هاب                                              |
|-------------------|----------------------------------|-------------------------------------------------------|
| **ویدا خوش‌پی**   | توسعه‌دهنده کامل پروژه (تسک ۱)  | [@VIDAKHOSHPEY22](https://github.com/VIDAKHOSHPEY22) |
| **یلدا خوش‌پی**   | طراحی CSS و استایل‌دهی (تسک ۲)  | [@YALDAKHOSHPEY](https://github.com/YALDAKHOSHPEY)   |

🎯 **تسک ۱ (منطق، عملکرد، طراحی و ساختار):** ویدا  
🎨 **تسک ۲ (استایل‌دهی و انیمیشن):** یلدا  
هر یک از اعضا پروژه را از طریق حساب شخصی خود در گیت‌هاب ارسال کرده‌اند (طبق قوانین مسابقه).

---

## 🗂 ساختار پوشه‌ها
```
nebula-works/
│
├── index.html                ← صفحه‌ی اصلی با پیام خوش‌آمدگویی و API شبیه‌سازی‌شده‌ی آب‌وهوا
├── signup.html               ← فرم عضویت کاربران
├── style.css                 ← تمام استایل‌های سفارشی پروژه
├── script.js                 ← اسکریپت‌های مربوط به تعاملات کاربر با صفحه
├── LICENCE                   ← مجوز استفاده از پروژه (MIT)
├── README.md                 ← فایل راهنمای اصلی (در حال حاضر این فایل را می‌خوانید!)
│
├── /admin                    ← صفحات مخصوص مدیریت (ورود، تنظیمات، پیکربندی سیستم)
│   ├── index.html            ← صفحه اصلی پنل مدیریت
│   ├── user.html             ← مدیریت کاربران ادمین
│   ├── system.html           ← تنظیمات سیستم
│   ├── security.html         ← تنظیمات امنیتی سیستم
│   ├── network.html          ← مدیریت شبکه و اتصال‌ها
│   ├── event.html            ← رویدادها و هشدارها در سیستم
│   ├── settings-admin.html   ← تنظیمات پیشرفته برای ادمین
│
├── /dashboard                ← بخش اصلی داشبورد کاربران
│   ├── index.html            ← صفحه اصلی داشبورد
│   ├── project.html          ← مدیریت پروژه‌ها
│   ├── team.html             ← اطلاعات اعضای تیم
│   ├── calendar.html         ← تقویم و زمان‌بندی رویدادها
│   ├── messages.html         ← پیام‌ها و ارتباطات داخلی
│   ├── resources.html        ← منابع و فایل‌های مرتبط
│   ├── settings.html         ← تنظیمات شخصی داشبورد
│
└── /assets                   ← فایل‌های رسانه‌ای و سه‌بعدی پروژه
    ├── logo.png              ← لوگوی پروژه
    └── /3d/                  ← مدل‌های سه‌بعدی با تم فضایی
        ├── earth.glb         ← مدل سه‌بعدی زمین
        ├── mars.glb          ← مدل سه‌بعدی مریخ
        └── jupiter.glb       ← مدل سه‌بعدی مشتری
```

---

## 🖼 گالری پیش‌نمایش

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/VIDAKHOSHPEY22/Nebula-Works/blob/main/assets/home-preview.png" width="360px"><br>
      <b>🌌 صفحه اصلی</b>
    </td>
    <td align="center">
      <img src="https://github.com/VIDAKHOSHPEY22/Nebula-Works/blob/main/assets/dashboard-preview.png" width="360px"><br>
      <b>🛸 داشبورد</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/VIDAKHOSHPEY22/Nebula-Works/blob/main/assets/calendar-preview.png" width="360px"><br>
      <b>📅 تقویم</b>
    </td>
    <td align="center">
      <img src="https://github.com/VIDAKHOSHPEY22/Nebula-Works/blob/main/assets/team-preview.png" width="360px"><br>
      <b>👨‍👩‍👧‍👦 تیم</b>
    </td>
  </tr>
</table>

</div>

---

## 📜 مجوز استفاده

این پروژه تحت مجوز [MIT](./LICENCE) منتشر شده است.

---

## ✨ تقدیر و تشکر

- با تشکر ویژه از **Axero** و **Dev.to** برای برگزاری این رقابت
- مدل‌های فضایی الهام‌گرفته از منابع آزاد ناسا
- طراحی رابط کاربری با دست و عشق ❤️

---

ساخته شده 💫 توسط **ویدا خوش‌پی**  
و طراحی شده ⭐ توسط **یلدا خوش‌پی**
