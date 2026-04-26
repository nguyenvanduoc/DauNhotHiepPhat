// --- DỮ LIỆU SẢN PHẨM DẦU NHỚT HIỆP PHÁT ---

// Danh sách các nhóm danh mục
const categories = [
    { id: 1, name: 'Dầu Nhớt Xe Máy' },
    { id: 2, name: 'Dầu Nhớt Xe Ô Tô' },
    { id: 3, name: 'Mỡ Bò & Phụ Gia' },
    { id: 4, name: 'Dầu Công Nghiệp' }
];

const coffees = [
    // ========== 1. NHÓM DẦU NHỚT XE MÁY ==========
    {
        id: 'castrol-power-1-ultimate',
        name: 'Castrol POWER1 Ultimate',
        price: 155000,
        categoryId: 1,
        category: 'Dầu Nhớt Xe Máy',
        desc: 'Dầu nhớt tổng hợp toàn phần 5 trong 1 giúp tối ưu hóa hiệu suất động cơ, tăng tốc vượt trội và bảo vệ tối đa.',
        ingredients: ['Cấp nhớt: 10W-40', 'Tiêu chuẩn: JASO MA2', 'Dung tích: 0.8L/1L', 'Công nghệ: 5-in-1 Formula'],
        image: 'https://images.unsplash.com/photo-1635811760636-6e9f5ed5d9c2?auto=format&fit=crop&w=600&q=80',
        featured: true
    },
    {
        id: 'motul-7100-4t',
        name: 'Motul 7100 4T 10W40',
        price: 285000,
        categoryId: 1,
        category: 'Dầu Nhớt Xe Máy',
        desc: 'Dầu nhớt 100% tổng hợp với công nghệ Ester giúp giảm ma sát, tối ưu hóa công suất động cơ và sang số êm ái.',
        ingredients: ['Cấp nhớt: 10W-40', 'Tiêu chuẩn: API SN / JASO MA2', 'Dung tích: 1L', 'Công nghệ: Ester Technology'],
        image: 'https://images.unsplash.com/photo-1598209279122-8541213a0387?auto=format&fit=crop&w=600&q=80',
        featured: true
    },
    {
        id: 'shell-advance-ultra',
        name: 'Shell Advance Ultra 10W40',
        price: 245000,
        categoryId: 1,
        category: 'Dầu Nhớt Xe Máy',
        desc: 'Dầu nhớt tổng hợp cao cấp giúp duy trì công suất tối đa và bảo vệ động cơ trong mọi điều kiện vận hành.',
        ingredients: ['Cấp nhớt: 10W-40', 'Tiêu chuẩn: API SN / JASO MA2', 'Dung tích: 1L', 'Công nghệ: PurePlus'],
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80',
        featured: true
    },

    // ========== 2. NHÓM DẦU NHỚT XE Ô TÔ ==========
    {
        id: 'castrol-magnatec-5w30',
        name: 'Castrol MAGNATEC 5W-30',
        price: 850000,
        categoryId: 2,
        category: 'Dầu Nhớt Xe Ô Tô',
        desc: 'Các phân tử thông minh bám dính vào bề mặt động cơ như nam châm, hình thành lớp màng bảo vệ vượt trội ngay từ khi khởi động.',
        ingredients: ['Cấp nhớt: 5W-30', 'Tiêu chuẩn: API SN', 'Dung tích: 4L', 'Công nghệ: Dualock'],
        image: 'https://images.unsplash.com/photo-1486006396193-47106858c656?auto=format&fit=crop&w=600&q=80',
        featured: true
    },
    {
        id: 'motul-h-tech-100-plus',
        name: 'Motul H-Tech 100 Plus 5W30',
        price: 920000,
        categoryId: 2,
        category: 'Dầu Nhớt Xe Ô Tô',
        desc: 'Dầu nhớt 100% tổng hợp được thiết kế đặc biệt cho các dòng xe ô tô đời mới, giúp tiết kiệm nhiên liệu hiệu quả.',
        ingredients: ['Cấp nhớt: 5W-30', 'Tiêu chuẩn: API SP-RC / ILSAC GF-6A', 'Dung tích: 4L', 'Công nghệ: High-Tech'],
        image: 'https://images.unsplash.com/photo-1595152230535-0902d64183b2?auto=format&fit=crop&w=600&q=80',
        featured: false
    },

    // ========== 3. NHÓM MỠ BÒ & PHỤ GIA ==========
    {
        id: 'mo-bo-chi-nhiet-castrol',
        name: 'Mỡ bò chịu nhiệt Castrol Spheerol',
        price: 120000,
        categoryId: 3,
        category: 'Mỡ Bò & Phụ Gia',
        desc: 'Mỡ bôi trơn chất lượng cao, chịu nhiệt tốt, giúp bảo vệ vòng bi và các khớp nối khỏi mài mòn và rỉ sét.',
        ingredients: ['Độ nhỏ giọt: >180°C', 'Chất làm đặc: Lithium', 'Dung tích: 500g', 'Màu sắc: Vàng trong'],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80',
        featured: false
    },
    {
        id: 've-sinh-kim-phun-liqui-moly',
        name: 'Vệ sinh kim phun Liqui Moly',
        price: 185000,
        categoryId: 3,
        category: 'Mỡ Bò & Phụ Gia',
        desc: 'Phụ gia pha xăng giúp làm sạch hệ thống phun nhiên liệu, loại bỏ cặn bẩn và giúp động cơ vận hành mượt mà hơn.',
        ingredients: ['Dung tích: 300ml', 'Cách dùng: Pha trực tiếp vào bình xăng', 'Định kỳ: 2000-3000km/lần', 'Xuất xứ: Đức'],
        image: 'https://images.unsplash.com/photo-1635811760636-6e9f5ed5d9c2?auto=format&fit=crop&w=600&q=80',
        featured: true
    },

    // ========== 4. NHÓM DẦU CÔNG NGHIỆP ==========
    {
        id: 'dau-thuy-luc-68',
        name: 'Dầu thủy lực Castrol Hyspin AWS 68',
        price: 1250000,
        categoryId: 4,
        category: 'Dầu Công Nghiệp',
        desc: 'Dầu thủy lực cao cấp với đặc tính chống mài mòn ưu việt, thích hợp cho các hệ thống thủy lực công nghiệp nặng.',
        ingredients: ['Độ nhớt: ISO VG 68', 'Chỉ số nhớt: >95', 'Dung tích: 18L / 20L', 'Tiêu chuẩn: DIN 51524 Part 2'],
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        featured: false
    }
];
