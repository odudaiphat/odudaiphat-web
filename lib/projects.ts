/**
 * Code by Chung Ước Lễ
 * Bản quyền thuộc về Ô Dù Đại Phát
 * Hotline: 0349596898
 * © 2026 Ô Dù Đại Phát. All rights reserved.
 */
import { FALLBACK_IMAGE, products } from "./products"

function imageAt(productSlug: string, index: number) {
  return (
    products.find((product) => product.slug === productSlug)?.images.gallery[index] ||
    FALLBACK_IMAGE
  )
}

export const projects = [
  {
    title: "Gợi ý ứng dụng cho cafe sân vườn",
    area: "Không gian vừa và nhỏ",
    location: "Không gian tham khảo",
    type: "Dù lệch tâm 2m5",
    goal:
      "Phù hợp khu bàn ngoài trời cần che nắng gọn, thoáng lối đi và dễ bố trí trong sân vườn hoặc cafe mini.",
    image: imageAt("du-lech-tam-2m5-khung-sat-son-tinh-dien", 3),
  },
  {
    title: "Mẫu không gian hồ bơi và villa",
    area: "Không gian rộng",
    location: "Gợi ý ứng dụng",
    type: "Dù lệch tâm vuông 3m",
    goal:
      "Tạo vùng che lớn cho lounge ngoài trời, hồ bơi, villa hoặc quán cafe có khu vực sân rộng.",
    image: imageAt("du-lech-tam-vuong-3m-hop-kim-nhom", 4),
  },
  {
    title: "Tham khảo bố trí sân vườn nghỉ dưỡng",
    area: "Không gian thư giãn",
    location: "Không gian tham khảo",
    type: "Dù lệch tâm chỉnh nghiêng 2m5",
    goal:
      "Gợi ý cách che nắng linh hoạt cho patio, terrace, sân vườn nhà phố hoặc khu ngồi ngoài trời cần chỉnh hướng nắng.",
    image: imageAt("du-lech-tam-chinh-nghieng-2m5-khung-sat-trang", 5),
  },
]
