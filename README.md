# 👤 Angular User Management App

Modern Angular 19 ile geliştirilmiş kullanıcı yönetim uygulaması. JSONPlaceholder API'sini kullanarak kullanıcı listesi görüntüleme ve detay sayfası özelliklerini içerir.

## 🚀 Özellikler

- ✅ **Kullanıcı Listesi**: Tüm kullanıcıları grid layout'ta görüntüleme
- 🔍 **Gelişmiş Arama**: İsim, kullanıcı adı ve email'e göre filtreleme
- 👁️ **Kullanıcı Detayı**: Detaylı kullanıcı bilgileri sayfası
- 📱 **Responsive Design**: Mobil ve desktop uyumlu tasarım
- 🎨 **Modern UI**: Clean ve professional görünüm
- ⚡ **Fast Loading**: Optimize edilmiş performans
- 🏗️ **Component Architecture**: Reusable componentler

## 🛠️ Teknolojiler

- **Angular 19**: Latest version ile standalone components
- **TypeScript**: Type safety ve modern JavaScript features
- **RxJS**: Reactive programming patterns
- **Angular Router**: SPA navigation
- **HttpClient**: RESTful API communication
- **CSS Grid & Flexbox**: Modern layout systems

## 📁 Proje Yapısı

```
src/app/
├── components/           # 🔄 Reusable Components
│   ├── user-card/        # 👤 User card component
│   └── search-box/       # 🔍 Search functionality
├── pages/                # 📄 Page Components
│   ├── user-list/        # 📋 User list page
│   └── user-detail/      # 🔍 User detail page
├── models/               # 📊 TypeScript Models
│   └── user.model.ts     # User interface definitions
├── services/             # ⚙️ Business Logic
│   └── user.service.ts   # API communication service
└── app.routes.ts         # 🛣️ Routing configuration
```

## 🎯 Component Architecture

### 📄 Pages (Smart Components)
- **UserListComponent**: Ana sayfa, kullanıcı listesi ve arama
- **UserDetailComponent**: Kullanıcı detay sayfası

### 🔄 Components (Reusable)
- **UserCardComponent**: Tekrar kullanılabilir kullanıcı kartı
- **SearchBoxComponent**: Arama kutusu componenti

### ⚙️ Services
- **UserService**: API iletişimi ve data management

## 🌐 API Integration

JSONPlaceholder REST API kullanılmıştır:
- **GET /users**: Tüm kullanıcıları listele
- **GET /users/:id**: Specific kullanıcı detayı

## 🚦 Getting Started

### Gereksinimler
- Node.js (v18+)
- npm (v9+)
- Angular CLI (v19+)

### Kurulum

1. **Repository'yi klonla**
```bash
git clone [repository-url]
cd angular-case-app
```

2. **Dependencies'leri yükle**
```bash
npm install
```

3. **Development server'ı başlat**
```bash
npm start
# veya
ng serve
```

4. **Tarayıcıda aç**
```
http://localhost:4200
```

## 📚 Kullanım

### Ana Sayfa
- Tüm kullanıcıları görebilirsiniz
- Arama kutusundan filtreleme yapabilirsiniz
- Kullanıcı kartına tıklayarak detaya gidebilirsiniz

### Kullanıcı Detayı
- Kullanıcının tüm bilgilerini görüntüleyin
- Kişisel bilgiler, adres ve şirket bilgileri
- "Geri" butonu ile ana sayfaya dönün

### Arama Özellikleri
- İsme göre arama
- Kullanıcı adına göre arama  
- Email adresine göre arama
- Gerçek zamanlı filtreleme
- Arama temizleme butonu

## 🎨 Design System

### Color Palette
- **Primary**: Linear gradients (blue to purple)
- **Background**: Clean white with subtle shadows
- **Text**: Professional dark grays
- **Accent**: Hover effects and interactions

### Typography
- **Headers**: Bold, clear hierarchy
- **Body**: Readable sans-serif
- **Links**: Accessible blue colors

### Layout
- **Grid System**: CSS Grid for responsive layouts
- **Cards**: Modern shadow-based design
- **Navigation**: Clean and intuitive

## 🔧 Development Commands

```bash
# Development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## ⚡ Performance Features

- **Lazy Loading**: Route-based code splitting
- **OnPush Strategy**: Optimize change detection
- **Standalone Components**: Tree-shakable imports
- **Efficient API Calls**: Smart caching and error handling

## 🏗️ Architecture Patterns

### Separation of Concerns
- **Pages**: Route management ve data orchestration
- **Components**: Reusable UI elements
- **Services**: Business logic ve API communication
- **Models**: Type definitions

### Modern Angular Patterns
- **Standalone Components**: No module dependencies
- **Reactive Forms**: Type-safe form handling
- **RxJS Operators**: Efficient data transformations
- **Angular Router**: Declarative routing

## 👥 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API
- [Angular Team](https://angular.io/) - Amazing framework
- Modern web development community

---

**Built with ❤️ using Angular 19**
