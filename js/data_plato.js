const platoScenes = [

{
 id:0,
 image:"assets/scenes/plato/athens.png",
 text:
 "Athens, khoảng năm 399 TCN. Bạn là một thanh niên tò mò về triết học. Thành phố đang xôn xao vì phiên tòa xét xử Socrates.",
 knowledge:
 "SỰ KIỆN LỊCH SỬ:\nNăm 399 TCN, Socrates – thầy của Plato – bị kết án tử vì 'làm hư thanh niên' và 'không tôn kính thần linh'.\n\nẢNH HƯỞNG:\nCái chết của Socrates khiến Plato rời Athens và sau này xây dựng hệ thống triết học riêng.",
 choices:[
  {text:"Đến quảng trường xem phiên tòa", next:1}
 ]
},

{
 id:1,
 image:"assets/scenes/plato/socrates_trial.png",
 text:
 "Bạn nghe Socrates bình thản nói rằng: 'Một đời sống không được khảo sát thì không đáng sống.'",
 knowledge:
 "TƯ TƯỞNG GỐC:\nSocrates cho rằng chân lý phải được truy vấn bằng lý trí, không chấp nhận niềm tin mù quáng.\n\nĐây là nền tảng khiến Plato phát triển học thuyết về tri thức lý tính.",
 choices:[
  {text:"Theo Plato rời Athens", next:2}
 ]
},

{
 id:2,
 image:"assets/scenes/plato/plato_travel.png",
 text:
 "Plato rời Athens, du hành nhiều năm rồi trở về lập Học viện (Academy). Bạn xin gia nhập làm học trò.",
 knowledge:
 "SỰ KIỆN LỊCH SỬ:\nKhoảng năm 387 TCN, Plato thành lập Học viện Athens – trường triết học đầu tiên ở phương Tây.",
 choices:[
  {text:"Bước vào Học viện", next:3}
 ]
},

{
 id:3,
 image:"assets/scenes/plato/academy.png",
 text:
 "Plato hỏi bạn: 'Theo con, cái gì là tồn tại thật sự?'",
 knowledge:
 "MỞ ĐẦU HỌC THUYẾT:\nPlato cho rằng phải phân biệt giữa:\n- Thế giới cảm tính (những gì ta thấy)\n- Thế giới ý niệm (bản thể thật sự)\n\nNguồn gốc: Học thuyết Ý niệm – nền tảng triết học Plato. :contentReference[oaicite:1]{index=1}",
 choices:[
  {text:"Những gì ta nhìn thấy là thật", next:4},
  {text:"Có một thực tại cao hơn giác quan", next:4}
 ]
},

{
 id:4,
 image:"assets/scenes/plato/forms.png",
 text:
 "Plato mỉm cười và giảng về 'Thế giới Ý niệm'.",
 knowledge:
 "KHÁI NIỆM: HỌC THUYẾT Ý NIỆM\n\nTheo Plato:\n- Ý niệm là tồn tại thực sự, bất biến và vĩnh viễn.\n- Sự vật ta thấy chỉ là 'bóng' của ý niệm.\n\nVí dụ: mọi chiếc bàn vật chất chỉ là bản sao của 'Ý niệm Bàn' hoàn hảo.\n\nKẾT LUẬN:\n→ Tri thức thật không đến từ giác quan, mà từ lý trí.\n\nNguồn: Học thuyết Ý niệm trong tài liệu Plato. :contentReference[oaicite:2]{index=2}",
 choices:[
  {text:"Hỏi: Vì sao giác quan không đáng tin?", next:5}
 ]
},

{
 id:5,
 image:"assets/scenes/plato/cave.png",
 text:
 "Plato kể bạn nghe câu chuyện về những người bị xích trong hang chỉ thấy bóng trên vách.",
 knowledge:
 "ẨN DỤ HANG ĐỘNG\n\n- Bóng trên vách = thế giới cảm giác (ảo ảnh)\n- Vật ngoài hang = thế giới ý niệm (chân lý)\n- Người ra khỏi hang = triết gia giác ngộ\n\nBÀI HỌC:\n→ Con người phải vượt khỏi ảo ảnh giác quan để đạt tri thức thật.\n\nNguồn: 'Cộng hòa', Quyển VII.",
 choices:[
  {text:"Muốn ra khỏi hang tìm chân lý", next:6},
  {text:"Ở lại tin vào bóng", next:99}
 ]
},

{
 id:6,
 image:"assets/scenes/plato/soul.png",
 text:
 "Plato hỏi: 'Con nghĩ linh hồn có chết cùng thể xác không?'",
 knowledge:
 "HỌC THUYẾT LINH HỒN\n\nPlato cho rằng:\n- Con người gồm thể xác và linh hồn\n- Linh hồn thuộc thế giới ý niệm → bất tử\n- Nhận thức là 'hồi tưởng' những chân lý linh hồn từng biết\n\nNguồn: Lý luận về nhận thức và linh hồn Plato. :contentReference[oaicite:3]{index=3}",
 choices:[
  {text:"Linh hồn bất tử", next:7},
  {text:"Linh hồn chết theo thân xác", next:7}
 ]
},

{
 id:7,
 image:"assets/scenes/plato/chariot.png",
 text:
 "Plato ví linh hồn như cỗ xe song mã.",
 knowledge:
 "ĐẠO ĐỨC PLATO\n\nBa phần linh hồn:\n- Lý trí → Thông thái\n- Ý chí → Dũng cảm\n- Dục vọng → Cần được kiềm chế\n\nKhi lý trí dẫn dắt → đạt Đức hạnh và Công chính.\n\nNguồn: Quan niệm đạo đức Plato. :contentReference[oaicite:4]{index=4}",
 choices:[
  {text:"Hỏi về xã hội lý tưởng", next:8}
 ]
},

{
 id:8,
 image:"assets/scenes/plato/republic.png",
 text:
 "Plato giảng về nhà nước lý tưởng.",
 knowledge:
 "NHÀ NƯỚC LÝ TƯỞNG\n\nBa tầng lớp:\n1) Triết gia cai trị (lý trí)\n2) Chiến binh bảo vệ (ý chí)\n3) Nông dân – thợ thủ công (lao động)\n\nCông bằng xã hội = mỗi tầng lớp làm đúng vai trò.\n\nNguồn: Quan niệm nhà nước Plato. :contentReference[oaicite:5]{index=5}",
 choices:[
  {text:"Hỏi mục tiêu cuối cùng của triết học", next:9}
 ]
},

{
 id:9,
 image:"assets/scenes/plato/good.png",
 text:
 "Plato chỉ lên bầu trời: 'Ý niệm tối cao là Cái Thiện.'",
 knowledge:
 "Ý NIỆM TỐI CAO: CÁI THIỆN\n\n- Là nguồn gốc của mọi chân lý và đạo đức\n- Triết gia phải hướng đến Cái Thiện\n\nMỤC ĐÍCH TRIẾT HỌC:\n→ Dẫn dắt linh hồn thoát vô minh và xây dựng xã hội công chính.",
 choices:[
  {text:"Kết thúc hành trình", next:100}
 ]
},

{
 id:99,
 image:"assets/scenes/plato/cave.png",
 text:
 "Bạn chọn ở lại trong hang, tin vào bóng.",
 knowledge:
 "BÀI HỌC NGƯỢC:\nAi chỉ tin giác quan sẽ không đạt tri thức thật – đúng như Plato cảnh báo.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
},

{
 id:100,
 image:"assets/scenes/plato/left_academy.png",
 text:
 "Bạn rời Học viện, mang theo tri thức Plato.",
 knowledge:
 "TÓM TẮT KIẾN THỨC PLATO:\n\n- Thế giới Ý niệm là thực tại thật\n- Thế giới cảm giác chỉ là bóng\n- Linh hồn bất tử, nhận thức là hồi tưởng\n- Đức hạnh do lý trí dẫn dắt\n- Nhà nước lý tưởng do triết gia cai trị\n- Mục tiêu: đạt Cái Thiện\n\nBạn đã hoàn thành tuyến Plato.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
}

];
