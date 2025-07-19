# Express + TypeScript + Prisma ORM API

## 📦 Proje Hakkında

Bu proje, **Express.js**, **TypeScript** ve **Prisma ORM** kullanılarak hazırlanmış basit bir Node.js uygulamasıdır. Temel amacı, veri tabanı ile Prisma ORM aracılığıyla iletişim kurmak ve Express üzerinden endpoint’ler oluşturmaktır.

## 🎯 Amaç

- Express ile TypeScript ortamı kurmak
- Prisma ORM kullanarak veri tabanına bağlanmak ve sorgular yapmak
- Basit bir HTTP endpoint’i tanımlamak (`GET /`)

## 🔧 Kurulum Adımları

### 1. Bağımlılıkları Kurun

```bash
npm install
```

### 2. TypeScript ve Prisma Yapılandırması

```bash
npx tsc --init
npx prisma init
```

### 3. .env Dosyasını Oluşturun

Prisma'nın bağlanacağı veritabanını tanımlayın:

```
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

### 4. Prisma Şeması Tanımlayın

`prisma/schema.prisma` dosyasına modelinizi ekleyin.

### 5. Veritabanını ve Prisma Client'i Oluşturun

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Sunucuyu Başlatın

```bash
npx ts-node src/index.ts
```

## 📁 Proje Yapısı

```bash
project-root/
│
├── node_modules/
├── prisma/
│   ├── schema.prisma           # Veritabanı şeması
│   └── .env                    # Ortam değişkenleri
├── src/
│   └── index.ts                # Express uygulaması
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Örnek Endpoint

```http
GET /
```
Yanıt:
```
Hello typescript
```

## 🧠 Kullanılan Teknolojiler.

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL (veya desteklenen başka bir veritabanı)

## ✍️ Geliştirici Notu

Bu proje, TypeScript ortamında Prisma ile nasıl çalışılacağını öğrenmek için örnek olarak hazırlanmıştır. Geliştirmeye açık ve büyütülebilir bir yapıya sahiptir.
