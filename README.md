خوشحالم که راهنمایی‌ام برای ساخت `README.md` به زبان فارسی مفید باشه! در ادامه یک نسخه حرفه‌ای و کامل بر اساس اطلاعات پروژه آماده کردم که هم راهنمای نصب و استفاده رو پوشش میده و هم جذاب و کاربردی هست:

---

```markdown
<div align="right" dir="rtl">

<div align="center">
  <br />
  <a href="https://youtu.be/y5vE8y_f_OM" target="_blank">
    <img src="https://github.com/user-attachments/assets/eaaeb1f0-22da-46be-9e29-9bef70e0039d" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">📝 LiveDocs - ویرایشگر مشارکتی اسناد</h3>
  
  <div align="center">
    نسخه فارسی شده | پروژه آموزشی 
    <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank">
      <b>JavaScript Mastery</b>
    </a>
  </div>
</div>

## فهرست مطالب
1. [معرفی پروژه](#معرفی-پروژه)
2. [پیش‌نیازها](#پیشنیازها)
3. [نصب و راه‌اندازی](#نصب-و-راهاندازی)
4. [تنظیمات ضروری](#تنظیمات-ضروری)
5. [استفاده از برنامه](#استفاده-از-برنامه)
6. [مشخصات فنی](#مشخصات-فنی)
7. [پشتیبانی](#پشتیبانی)
8. [لینک‌های مفید](#لینکهای-مفید)

## معرفی پروژه <a name="معرفی-پروژه"></a>
**LiveDocs** یک ویرایشگر اسناد مشارکتی هم‌زمان (Real-time) شبیه Google Docs است که با فناوری‌های مدرن توسعه داده شده. این پروژه امکان همکاری چند کاربر به صورت زنده روی یک سند را فراهم می‌کند.

🎯 **ویژگی‌های کلیدی**:
- ویرایش هم‌زمان اسناد با چند کاربر
- سیستم احراز هویت با GitHub
- مدیریت اسناد (ایجاد، حذف، اشتراک‌گذاری)
- کامنت‌گذاری هوشمند
- نمایش همکاران فعال در لحظه

## پیش‌نیازها <a name="پیشنیازها"></a>
- [Node.js](https://nodejs.org/) (نسخه 18 یا بالاتر)
- [Git](https://git-scm.com/)
- حساب [GitHub](https://github.com/) برای احراز هویت
- حساب‌های رایگان در:
  - [Clerk](https://clerk.com/) (برای احراز هویت)
  - [Liveblocks](https://liveblocks.io/) (برای همکاری زنده)

## نصب و راه‌اندازی <a name="نصب-و-راهاندازی"></a>
1. **کلون کردن مخزن**:
   ```bash
   git clone https://github.com/adrianhajdin/collaborative-editor.git
   cd collaborative-editor
   ```

2. **نصب وابستگی‌ها**:
   ```bash
   npm install
   ```

3. **اجرای برنامه**:
   ```bash
   npm run dev
   ```

4. **دسترسی به برنامه**:
   مرورگر خود را باز کرده و به آدرس زیر بروید:
   ```
   http://localhost:3000
   ```

## تنظیمات ضروری <a name="تنظیمات-ضروری"></a>
1. فایل `.env` را در ریشه پروژه ایجاد کنید
2. محتوای زیر را با اطلاعات حساب‌های خود پر کنید:

```env
# تنظیمات Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=کلید_عمومی_خود_را_اینجا_وارد_کنید
CLERK_SECRET_KEY=کلید_خصوصی_خود_را_اینجا_وارد_کنید

# تنظیمات Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=کلید_عمومی_خود_را_اینجا_وارد_کنید
LIVEBLOCKS_SECRET_KEY=کلید_خصوصی_خود_را_اینجا_وارد_کنید
```

> **نکته مهم**: کلیدهای مورد نیاز را از پنل مدیریت [Clerk](https://clerk.com/) و [Liveblocks](https://liveblocks.io/) دریافت کنید.

## استفاده از برنامه <a name="استفاده-از-برنامه"></a>
1. **ورود به سیستم**:
   - با حساب GitHub خود وارد شوید
   
2. **ایجاد سند جدید**:
   - روی دکمه ➕ "سند جدید" کلیک کنید
   - نام سند را وارد کنید
   
3. **اشتراک‌گذاری سند**:
   - روی آیکون اشتراک‌گذاری (👥) کلیک کنید
   - ایمیل همکاران را وارد کنید
   - سطح دسترسی (ویرایش/مشاهده) را انتخاب کنید
   
4. **ویرایش مشارکتی**:
   - همزمان با همکاران خود محتوا ویرایش کنید
   - تغییرات به صورت لحظه‌ای نمایش داده می‌شوند
   
5. **کامنت‌گذاری**:
   - متن مورد نظر را انتخاب کنید
   - روی آیکون کامنت (💬) کلیک کنید
   - نظر خود را وارد نمایید

## مشخصات فنی <a name="مشخصات-فنی"></a>
### فناوری‌های اصلی
| تکنولوژی | کاربرد |
|----------|--------|
| **Next.js 14** | چارچوب اصلی برنامه |
| **TypeScript** | افزودن نوع‌دهی ایمن |
| **Tailwind CSS** | استایل‌دهی مدرن |
| **Liveblocks** | همکاری زنده |
| **Lexical Editor** | ویرایشگر متن |

### ساختار پروژه
```
├── components/    # کامپوننت‌های ری‌اکت
├── lib/           # توابع و ابزارهای کمکی
├── styles/        # فایل‌های استایل
├── types/         # تعریف انواع TypeScript
└── app/           # صفحات اصلی برنامه
```

## پشتیبانی <a name="پشتیبانی"></a>
برای پرسش‌ها و مشکلات فنی به منابع زیر مراجعه کنید:

- [جامعه Discord](https://discord.com/invite/n6EdbFJ) (بیش از ۳۴ هزار عضو)
- [کانال YouTube آموزشی](https://www.youtube.com/@javascriptmastery/videos)
- [مستندات Liveblocks](https://liveblocks.io/docs)

## لینک‌های مفید <a name="لینکهای-مفید"></a>
- [آموزش کامل پروژه در یوتیوب](https://youtu.be/y5vE8y_f_OM)
- [مخزن اصلی پروژه](https://github.com/adrianhajdin/collaborative-editor)
- [دانلود فایل‌های گرافیکی پروژه](https://drive.google.com/file/d/1MCQaP-imgDdopwcUn4CN_D-WglDc--Ho/view)

<div align="center">
  <sub>ساخته شده با ❤️ برای توسعه‌دهندگان فارسی زبان</sub>
</div>
</div>
```

---

### ویژگی‌های این فایل README:
1. **راست‌چین کامل** برای نمایش صحیح فارسی
2. **راهنمای گام به گام** با توضیحات ساده
3. **جدول مشخصات فنی** برای درک بهتر معماری
4. **پشتیبانی از خط‌های دستوری** با هایلایت مناسب
5. **لینک‌های مفید** به منابع آموزشی
6. **نکات مهم** با آیکون‌های گرافیکی
7. **طراحی واکنش‌گرا** برای نمایش در همه دستگاه‌ها

### نکات مهم برای کاربران فارسی:
1. **احراز هویت**: حتماً از حساب GitHub معتبر استفاده کنید
2. **متغیرهای محیطی**: کلیدهای Clerk و Liveblocks را دقیق وارد کنید
3. **اشتراک‌گذاری**: برای همکاری حتماً ایمیل همکاران را صحیح وارد نمایید
4. **مشکلات اجرا**: اگر با خطا مواجه شدید `node_modules` را پاک کرده و مجدداً `npm install` را اجرا کنید

اگر نیاز به توضیح بیشتری درباره هر بخش دارید یا می‌خواین نسخه انگلیسی هم آماده کنم، خوشحال می‌شم کمک کنم! 😊