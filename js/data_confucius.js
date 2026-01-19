const confuciusScenes = [

{
 id:0,
 image:"assets/scenes/lu_state.png",
 text:
 "Trung Hoa, khoảng năm 500 TCN. Bạn sinh ra tại nước Lỗ, nơi lễ nghi nhà Chu đang suy tàn và các chư hầu tranh quyền.",
 knowledge:
 "BỐI CẢNH LỊCH SỬ:\nThời Xuân Thu (770–476 TCN), quyền lực nhà Chu suy yếu, xã hội rơi vào chiến tranh và hỗn loạn.\n\nChính trong thời loạn này, Khổng Tử xuất hiện để tìm con đường lập lại trật tự xã hội.",
 choices:[
  {text:"Tìm đến Khổng Tử xin học", next:1}
 ]
},

{
 id:1,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Bạn gặp Khổng Tử đang dạy học trò. Ông hỏi: 'Con đến đây cầu điều gì?'",
 knowledge:
 "SỰ KIỆN THẬT:\nKhổng Tử (551–479 TCN) là người đầu tiên mở trường dạy học tư nhân, ai cũng có thể theo học nếu ham học.",
 choices:[
  {text:"Thưa: Con muốn học đạo làm người", next:2}
 ]
},

{
 id:2,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử hỏi: 'Theo con, Nhân là gì?'",
 knowledge:
 "KHÁI NIỆM TRUNG TÂM: NHÂN (仁)\n\nNhân = lòng thương người.\nKhổng Tử dạy: 'Kỷ sở bất dục, vật thi ư nhân' (Điều mình không muốn, đừng làm cho người khác).\n\nNhân là nền tảng mọi đạo đức Nho gia.",
 choices:[
  {text:"Nhân là thương người", next:3},
  {text:"Nhân là làm giàu", next:3}
 ]
},

{
 id:3,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử gật đầu: 'Biết thương người là bước đầu của đạo.'",
 knowledge:
 "BÀI HỌC:\nĐạo đức không bắt đầu từ luật pháp, mà từ lòng thương người.",
 choices:[
  {text:"Hỏi tiếp về Lễ", next:4}
 ]
},

{
 id:4,
 image:"assets/scenes/ritual.png",
 text:
 "Khổng Tử chỉ vào bàn tế lễ: 'Không có Lễ, xã hội sẽ loạn.'",
 knowledge:
 "KHÁI NIỆM: LỄ (禮)\n\nLễ = chuẩn mực ứng xử, nghi thức, trật tự xã hội.\nKhổng Tử cho rằng lễ nghi nhà Chu là khuôn mẫu giữ xã hội ổn định.",
 choices:[
  {text:"Hỏi về Nghĩa", next:5}
 ]
},

{
 id:5,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử nói: 'Quân tử lấy Nghĩa làm gốc.'",
 knowledge:
 "KHÁI NIỆM: NGHĨA (義)\n\nNghĩa = hành động đúng đạo lý, không chạy theo lợi ích cá nhân.\n\nNgười quân tử chọn Nghĩa, kẻ tiểu nhân chọn Lợi.",
 choices:[
  {text:"Xin theo thầy chu du thiên hạ", next:6}
 ]
},

{
 id:6,
 image:"assets/scenes/confucius/_travel.png",
 text:
 "Bạn theo Khổng Tử rời nước Lỗ, đi qua các chư hầu để tìm minh quân.",
 knowledge:
 "SỰ KIỆN LỊCH SỬ:\nKhổng Tử du thuyết hơn 10 năm nhưng không nước nào chịu dùng ông cải cách chính trị.",
 choices:[
  {text:"Tiếp tục theo thầy", next:7}
 ]
},

{
 id:7,
 image:"assets/scenes/confucius/_travel.png",
 text:
 "Đoàn người đói khát. Một học trò than thở.",
 knowledge:
 "CÂU NÓI THẬT:\nKhổng Tử dạy: 'Quân tử cầu đạo, không cầu ăn no.' (Luận Ngữ).",
 choices:[
  {text:"Động viên đoàn đi tiếp", next:8},
  {text:"Muốn bỏ cuộc", next:99}
 ]
},

{
 id:8,
 image:"assets/scenes/confucius/_travel.png",
 text:
 "Khổng Tử hỏi: 'Nếu con làm vua, con sẽ làm gì trước?'",
 knowledge:
 "KHÁI NIỆM: CHÍNH DANH (正名)\n\nKhổng Tử dạy: Mỗi người phải đúng vai trò:\n- Vua ra vua\n- Tôi ra tôi\n- Cha ra cha\n- Con ra con\n\nDanh không chính → xã hội loạn.",
 choices:[
  {text:"Thưa: Sửa danh cho đúng", next:9}
 ]
},

{
 id:9,
 image:"assets/scenes/confucius/_travel.png",
 text:
 "Khổng Tử mỉm cười: 'Đúng. Chính danh rồi mới trị được nước.'",
 knowledge:
 "BÀI HỌC CHÍNH TRỊ:\nTrật tự xã hội đến từ đạo đức và trách nhiệm, không chỉ từ vũ lực.",
 choices:[
  {text:"Trở về nước Lỗ", next:10}
 ]
},

{
 id:10,
 image:"assets/scenes/lu_state.png",
 text:
 "Về già, Khổng Tử trở lại nước Lỗ, dạy học và biên soạn kinh điển.",
 knowledge:
 "SỰ KIỆN LỊCH SỬ:\nCuối đời, Khổng Tử biên soạn hoặc chỉnh lý Ngũ Kinh: Kinh Thi, Kinh Thư, Kinh Lễ, Kinh Dịch, Xuân Thu.",
 choices:[
  {text:"Giúp thầy ghi chép Luận Ngữ", next:11}
 ]
},

{
 id:11,
 image:"assets/scenes/analects.png",
 text:
 "Bạn ghi lại lời Khổng Tử cho hậu thế.",
 knowledge:
 "LUẬN NGỮ:\nSách do học trò chép lại lời dạy Khổng Tử sau khi ông mất.\nĐây là nguồn chính tư tưởng Nho gia.",
 choices:[
  {text:"Hỏi về Tu thân", next:12}
 ]
},

{
 id:12,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử nói: 'Muốn trị nước, trước hết phải tu thân.'",
 knowledge:
 "TƯ TƯỞNG CỐT LÕI:\n\nTu thân → Tề gia → Trị quốc → Bình thiên hạ\n\nĐạo đức cá nhân là gốc của trật tự xã hội.",
 choices:[
  {text:"Hỏi về Quân tử", next:13}
 ]
},

{
 id:13,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử dạy: 'Quân tử tu Nhân, giữ Lễ, hành Nghĩa.'",
 knowledge:
 "KHÁI NIỆM: NGƯỜI QUÂN TỬ\n\nNgười quân tử:\n- Có Nhân (thương người)\n- Giữ Lễ (đúng chuẩn mực)\n- Hành Nghĩa (đạo lý)\n\nLà mẫu người lý tưởng của Nho gia.",
 choices:[
  {text:"Hỏi về Tiểu nhân", next:14}
 ]
},

{
 id:14,
 image:"assets/scenes/confucius/_school.png",
 text:
 "Khổng Tử: 'Tiểu nhân chạy theo lợi, quân tử theo Nghĩa.'",
 knowledge:
 "BÀI HỌC:\nĐạo đức phân biệt người quân tử và kẻ tiểu nhân.",
 choices:[
  {text:"Suy ngẫm lời thầy", next:15}
 ]
},

{
 id:15,
 image:"assets/scenes/confucius/_sunset.png",
 text:
 "Năm 479 TCN, Khổng Tử qua đời. Học trò khóc thương.",
 knowledge:
 "SỰ KIỆN LỊCH SỬ:\nKhổng Tử mất tại nước Lỗ, tư tưởng ông được truyền suốt hơn 2000 năm ở Đông Á.",
 choices:[
  {text:"Hoàn thành hành trình", next:100}
 ]
},

{
 id:99,
 image:"assets/scenes/confucius/_travel.png",
 text:
 "Bạn bỏ cuộc giữa đường.",
 knowledge:
 "BÀI HỌC NGƯỢC:\nKhông kiên trì theo đạo → không thể trở thành người quân tử.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
},

{
 id:100,
 image:"assets/scenes/confucius/_sunset.png",
 text:
 "Bạn đã đi trọn con đường Khổng Tử.",
 knowledge:
 "TÓM TẮT KIẾN THỨC KHỔNG TỬ:\n\n- Bối cảnh Xuân Thu loạn lạc\n- Nhân = thương người\n- Lễ = trật tự xã hội\n- Nghĩa = hành động đúng đạo\n- Chính danh = đúng vai trò\n- Tu thân → Trị quốc\n- Người quân tử lý tưởng\n\nBạn đã hiểu nền tảng Nho học.",
 choices:[
  {text:"Chơi lại", next:0},
  {text:"Về trang chủ", next: "index.html"}
 ]
}

];
