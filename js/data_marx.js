const marxScenes = [

{
 id:0,
 image:"assets/scenes/marx/trier.png",
 text:
 "Trier, nước Phổ, năm 1835. Bạn là sinh viên trẻ Karl Marx, vừa rời gia đình để lên đại học.",
 knowledge:
 "BỐI CẢNH LỊCH SỬ:\nĐầu thế kỷ 19, châu Âu chuyển mình bởi Cách mạng Công nghiệp và biến động chính trị sau Cách mạng Pháp.\n\nKarl Marx (1818–1883) sinh tại Trier, Đức, trong gia đình trí thức.",
 choices:[
  {text:"Học triết học", next:1},
  {text:"Học luật", next:1},
  {text:"Bỏ học đi làm sớm", next:99}
 ]
},

{
 id:1,
 image:"assets/scenes/marx/berlin_university.png",
 text:
 "Tại Đại học Berlin, bạn tiếp xúc triết học Hegel.",
 knowledge:
 "ẢNH HƯỞNG HỌC THUẬT:\nHegel cho rằng lịch sử vận động bằng mâu thuẫn và phủ định biện chứng.\n\nMarx sau này 'đặt phép biện chứng Hegel xuống đất', biến nó thành duy vật.",
 choices:[
  {text:"Theo nhóm triết gia trẻ", next:2},
  {text:"Chỉ học để lấy bằng", next:99},
  {text:"Quan tâm đến chính trị xã hội", next:2}
 ]
},

{
 id:2,
 image:"assets/scenes/marx/newspaper.png",
 text:
 "Bạn làm nhà báo, viết bài phê phán chính quyền Phổ.",
 knowledge:
 "SỰ KIỆN THẬT:\nNăm 1842–1843, Marx làm tổng biên tập báo Rheinische Zeitung và bị kiểm duyệt, đóng cửa.",
 choices:[
  {text:"Tiếp tục viết chống kiểm duyệt", next:3},
  {text:"Im lặng để giữ an toàn", next:99}
 ]
},

{
 id:3,
 image:"assets/scenes/marx/paris.png",
 text:
 "Bạn sang Paris — trung tâm tư tưởng cách mạng châu Âu.",
 knowledge:
 "TẠI PARIS:\nMarx tiếp xúc công nhân, phong trào xã hội chủ nghĩa và kinh tế chính trị Anh.",
 choices:[
  {text:"Quan sát đời sống công nhân", next:4},
  {text:"Chỉ giao lưu giới học thuật", next:4},
  {text:"Rời Paris sớm", next:99}
 ]
},

{
 id:4,
 image:"assets/scenes/marx/factory.png",
 text:
 "Bạn bước vào khu nhà máy. Công nhân làm việc kiệt sức.",
 knowledge:
 "CÁCH MẠNG CÔNG NGHIỆP:\nMáy móc tăng năng suất nhưng tạo ra tầng lớp công nhân bị bóc lột nặng nề.",
 choices:[
  {text:"Trò chuyện với công nhân", next:5},
  {text:"Chỉ quan sát từ xa", next:5},
  {text:"Bỏ qua cảnh tượng", next:99}
 ]
},

{
 id:5,
 image:"assets/scenes/marx/factory.png",
 text:
 "Một công nhân nói: 'Chúng tôi làm 14 giờ mỗi ngày nhưng vẫn đói.'",
 knowledge:
 "KHÁI NIỆM: LAO ĐỘNG BỊ THA HÓA\n\nTrong chủ nghĩa tư bản:\n- Công nhân không sở hữu sản phẩm\n- Lao động trở thành gánh nặng\n\n→ Con người bị tha hóa khỏi bản chất sáng tạo.",
 choices:[
  {text:"Hỏi vì sao xảy ra tha hóa", next:6},
  {text:"Thương cảm nhưng bất lực", next:6}
 ]
},

{
 id:6,
 image:"assets/scenes/marx/engels.png",
 text:
 "Bạn gặp Friedrich Engels — người bạn tri kỷ.",
 knowledge:
 "SỰ KIỆN THẬT:\nMarx gặp Engels tại Paris năm 1844. Hai người hợp tác suốt đời.",
 choices:[
  {text:"Cùng nghiên cứu kinh tế", next:7},
  {text:"Chỉ làm bạn xã giao", next:99}
 ]
},

{
 id:7,
 image:"assets/scenes/marx/british_museum.png",
 text:
 "Bạn đến London, ngày ngày nghiên cứu tại Thư viện British Museum.",
 knowledge:
 "SỰ KIỆN THẬT:\nMarx sống ở London từ 1849 đến cuối đời, viết 'Tư bản luận' tại đây.",
 choices:[
  {text:"Nghiên cứu hàng hóa", next:8},
  {text:"Nghiên cứu tiền tệ", next:8},
  {text:"Nghiên cứu lịch sử xã hội", next:8}
 ]
},

{
 id:8,
 image:"assets/scenes/marx/commodity.png",
 text:
 "Marx hỏi: 'Theo bạn, hàng hóa có gì đặc biệt?'",
 knowledge:
 "KHÁI NIỆM: HÀNG HÓA\n\nMọi hàng hóa có:\n- Giá trị sử dụng\n- Giá trị trao đổi\n\nGiá trị trao đổi do lao động xã hội cần thiết tạo ra.",
 choices:[
  {text:"Hỏi về giá trị lao động", next:9},
  {text:"Hỏi về tiền lương", next:9}
 ]
},

{
 id:9,
 image:"assets/scenes/marx/surplus.png",
 text:
 "Marx vẽ sơ đồ tiền → hàng → tiền nhiều hơn.",
 knowledge:
 "KHÁI NIỆM TRUNG TÂM: GIÁ TRỊ THẶNG DƯ\n\nCông nhân tạo ra giá trị lớn hơn tiền lương họ nhận.\nPhần chênh lệch = lợi nhuận tư bản.",
 choices:[
  {text:"Hỏi vì sao công nhân chấp nhận", next:10},
  {text:"Hỏi hệ quả xã hội", next:10},
  {text:"Hỏi cách thay đổi", next:10}
 ]
},

{
 id:10,
 image:"assets/scenes/marx/class.png",
 text:
 "Marx nói: 'Lịch sử mọi xã hội là lịch sử đấu tranh giai cấp.'",
 knowledge:
 "KHÁI NIỆM: ĐẤU TRANH GIAI CẤP\n\n- Tư sản sở hữu tư liệu sản xuất\n- Vô sản chỉ có sức lao động\n\nMâu thuẫn lợi ích → xung đột lịch sử.",
 choices:[
  {text:"Hỏi nguồn gốc giai cấp", next:11},
  {text:"Hỏi tương lai xã hội", next:11}
 ]
},

{
 id:11,
 image:"assets/scenes/marx/dialectic.png",
 text:
 "Marx giải thích phép biện chứng duy vật.",
 knowledge:
 "DUY VẬT LỊCH SỬ:\n\n- Cơ sở kinh tế quyết định chính trị và tư tưởng\n- Khi lực lượng sản xuất phát triển → quan hệ sản xuất cũ trở thành xiềng xích",
 choices:[
  {text:"Hiểu cách lịch sử thay đổi", next:12},
  {text:"Chưa hiểu muốn nghe lại", next:12}
 ]
},

{
 id:12,
 image:"assets/scenes/marx/revolution.png",
 text:
 "Marx kết luận: 'Vô sản sẽ đứng lên lật đổ tư sản.'",
 knowledge:
 "CÁCH MẠNG VÔ SẢN:\n\nKhi mâu thuẫn giai cấp đạt đỉnh → cách mạng xảy ra → xã hội mới ra đời.",
 choices:[
  {text:"Hỏi xã hội mới ra sao", next:13},
  {text:"Hỏi Marx có chắc không", next:13}
 ]
},

{
 id:13,
 image:"assets/scenes/marx/communism.png",
 text:
 "Marx mô tả xã hội cộng sản tương lai.",
 knowledge:
 "CHỦ NGHĨA CỘNG SẢN:\n\n- Không còn giai cấp\n- Không còn sở hữu tư nhân tư liệu sản xuất\n- 'Mỗi người làm theo năng lực, hưởng theo nhu cầu'",
 choices:[
  {text:"Đồng ý với lý tưởng", next:14},
  {text:"Hoài nghi về khả năng thực hiện", next:14}
 ]
},

{
 id:14,
 image:"assets/scenes/marx/book.png",
 text:
 "Năm 1867, quyển I 'Tư bản luận' được xuất bản.",
 knowledge:
 "SỰ KIỆN THẬT:\nQuyển I Das Kapital xuất bản tại Hamburg năm 1867.",
 choices:[
  {text:"Đọc cuốn sách", next:15},
  {text:"Chỉ nghe danh tiếng", next:15}
 ]
},

{
 id:15,
 image:"assets/scenes/marx/london_sunset.png",
 text:
 "Marx nói câu cuối cùng với bạn: 'Các triết gia chỉ giải thích thế giới, vấn đề là cải tạo nó.'",
 knowledge:
 "TRÍCH DẪN THẬT:\nLuận cương về Feuerbach – luận cương số 11.",
 choices:[
  {text:"Kết thúc hành trình", next:100}
 ]
},

{
 id:99,
 image:"assets/scenes/marx/factory.png",
 text:
 "Bạn chọn tránh né hiện thực xã hội.",
 knowledge:
 "BÀI HỌC NGƯỢC:\nKhông dám nhìn vào bất công → không thể hiểu triết học Marx.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
},

{
 id:100,
 image:"assets/scenes/marx/london_sunset.png",
 text:
 "Bạn đã hiểu con đường tư tưởng Marx.",
 knowledge:
 "TÓM TẮT KIẾN THỨC MARX:\n\n- Lao động bị tha hóa\n- Hàng hóa và giá trị lao động\n- Giá trị thặng dư\n- Giai cấp và đấu tranh giai cấp\n- Duy vật lịch sử\n- Cách mạng vô sản\n- Lý tưởng cộng sản\n\nBạn đã hoàn thành tuyến Marx.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
}

];
