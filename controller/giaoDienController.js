// const taiKhoanModel = require("../models/taiKhoanModel");
module.exports.getHome = async (req, res) => {
  const hi = "hello ban hoang";
  res.render("home", { hi });
};
module.exports.getCodeBocPage = async (req, res) => {
  const banner1 = "../public/images/boc-club-banner.png";
  const tenGame = "Bốc Club";
  const banner2 = "../public/images/boc-club-banner2.png";
  const tenCode = "Bcl0";
  const triGia = "Bốc";
  const linkpage = "./code-boc-club";
  const content = `– Bốc Club phiên bản giàu siêu tốc. Tỷ lệ nổ hũ được gia tăng
  đáng kể ở hầu hết các phòng chơi, nâng mức trả thưởng cho tất cả các hình thức quy đổi. Đặc
  biệt, Bốc Vip Club giải quyết 100% tình trạng nghẽn mạng, giật lag hay mất kết nối.`;

  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodego88 = async (req, res) => {
  const banner1 = "../public/images/banner-go88.png";
  const tenGame = "Go88";
  const banner2 = "../public/images/footer-go88.png";
  const tenCode = "Go";
  const triGia = "GO";
  const linkpage = "./nhan-code-go88";
  const content = `– là một trong 10 game đánh bài uy tín bậc nhất Việt Nam hiện nay. Nhà cái này được mệnh danh là một “thiên đường cờ bạc online” với vô vàn trò chơi online khác nhau như đánh bài casino trực tuyến, mậu binh, phỏm, sâm lốc…`;

  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodesunwin = async (req, res) => {
  const banner1 = "../public/images/banner-sunwin.png";
  const tenGame = "SunWin";
  const content = `– là một siêu phẩm đổi thưởng tuyệt vời của tập đoàn Suncity, một tập đoàn Casino hàng đầu đến từ Macao. Người chơi sẽ yên tâm hơn nữa khi chứng kiến Suncity được trao chứng nhận Tập đoàn Casino Uy Tín của Thế giới vào năm 2013. Đứng trước thị trường game bài đổi thưởng, SunWin Club tự tin khi được “sản sinh” ra từ nhà phát hành đẳng cấp, uy tín.`;
  const tenCode = "SW0";
  const triGia = "SUN";
  const linkpage = "./nhan-code-sunwin";
  const banner2 = "../public/images/footer-sunwin.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCode88vin = async (req, res) => {
  const banner1 = "../public/images/banner-88vin.png";
  const tenGame = "88Vin";
  const content = `xuất hiện trên thị trường game bài với nhiều phiên bản như 1g88, w365, m365, r88,…đây là cổng game quốc tế được đầu từ bài bản. Vì thế chẳng có gì khó hiểu khi bạn thấy nhiều người đến với hệ thống này liền nhanh chóng gắn bó dài lâu.`;
  const tenCode = "88V";
  const triGia = "VIN";
  const linkpage = "./nhan-code-88vin";
  const banner2 = "../public/images/footer-88vin.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodesunbet = async (req, res) => {
  const banner1 = "../public/images/sunbet-banner.png";
  const tenGame = "Sunbet Vin";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Sunbet sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Sunbet Vin bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "S";
  const linkpage = "./nhan-code-sun-bet";
  const banner2 = "../public/images/footer-sunbet.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodeb99 = async (req, res) => {
  const banner1 = "../public/images/BANNER-B99.png";
  const tenGame = "B99 Win";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH B99 Win sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ B99 Win bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "B";
  const linkpage = "./nhan-code-b99";
  const banner2 = "../public/images/FOOTER-B99.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodebayvip = async (req, res) => {
  const banner1 = "../public/images/link-tai-bayvip-2.jpg";
  const tenGame = "BayVip";
  const content = `– Cổng game BayVip đánh bài online có tỷ lệ thắng cao nhất, với đầy đủ các game đang hot hiện nay như: Tài xỉu… | BayVip`;
  const tenCode = "BVNC";
  const triGia = "BAY";
  const linkpage = "./nhan-code-bayvip";
  const banner2 = "../public/images/footer-bayvip.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodenohuclub = async (req, res) => {
  const banner1 = "../public/images/nohu-club-banner.jpg";
  const tenGame = "Nổ Hũ Club";
  const content = `Sieuno.win – Cổng game săn hũ siêu hot và chỉ cần nghe cái tên nổ hũ chúng ta cũng đã biết cổng game cung cấp các dòng game gì rồi. Tại nohu club | Nổ hũ Vip bạn sẽ được trải nghiệm chơi những game đổi thẻ cào, đang hot nhất hiện nay.`;
  const tenCode = "NHCB";
  const triGia = "Nổ";
  const linkpage = "./nhan-code-no-hu-club";
  const banner2 = "../public/images/nohu-club-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodelocclub = async (req, res) => {
  const banner1 = "../public/images/banner-loc-club.png";
  const tenGame = "Lộc Club";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Lộc Club sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Loc club bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "L";
  const linkpage = "./nhan-code-loc-club";
  const banner2 = "../public/images/FOOTER-LOC-CLUB.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodeb52club = async (req, res) => {
  const banner1 = "../public/images/b52-club-banner-2.jpg";
  const tenGame = "B52 Club";
  const content = `chính là một cổng game đánh bài trực tuyến sở hữu đầy đủ những tính năng đa dạng, hấp dẫn và phong phú về trò chơi. Khi tham ra tại cổng game này, anh em sẽ sở hữu nhiều trò chơi mới lạ trên thị trường.`;
  const tenCode = "BCB";
  const triGia = "B";
  const linkpage = "./nhan-code-b52-club";
  const banner2 = "../public/images/b52-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodechoangclub = async (req, res) => {
  const banner1 = "../public/images/choang-club-banner2.jpg";
  const tenGame = "Choáng Club";
  const content = `là cổng game bài đổi thưởng chỉ mới ra mắt. Nhưng ngay lập tức đã gây được ấn tượng từ những ngày đầu ra mắt đã nhanh chóng thu hút được số lượng người chơi khủng. Sở hữu một kho trò chơi hấp dẫn, mới lạ cùng với lối chơi đơn giản tỷ lệ chiến thắng cao.`;
  const tenCode = "BCB";
  const triGia = "C";
  const linkpage = "./nhan-code-benvip-club";
  const banner2 = "../public/images/choang-club-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCode789club = async (req, res) => {
  const banner1 = "../public/images/789-club-banner2-1.jpg";
  const tenGame = "789 Club";
  const content = `là cổng game đổi thưởng lấy tiền thật nổi tiếng được nhiều người biết đến. Nhà cái này được đánh giá cao sự đầu tư kỹ lưỡng về hệ thống game, chất lượng dịch vụ tốt và mạng lưới bảo mật an toàn.`;
  const tenCode = "BCB";
  const triGia = "Gold";
  const linkpage = "./nhan-code-789-club";
  const banner2 = "../public/images/789-club-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodebenvipclub = async (req, res) => {
  const banner1 = "../public/images/yo88baner1.jpg";
  const tenGame = "YO88";
  const content = `có thiết kế đồ họa mượt mà với chất liệu hình ảnh màu xanh dương vô cùng sướng mắt. Âm thanh quay hũ hay hiệu ứng của những phòng chơi chính như Tài Xỉu, Vương Quốc Ben… cũng sẽ khiến bạn hoàn toàn bị chinh phục bởi sự huyền bí và chân thực đến từng chi tiết nhỏ.`;
  const tenCode = "YO";
  const triGia = "YO";
  const linkpage = "./nhan-code-yo88";
  const banner2 = "../public/images/nha-cai-yo88.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCoderikvip = async (req, res) => {
  const banner1 = "../public/images/rik-vip-banner.jpg";
  const tenGame = "RikVIP";
  const content = `có thiết kế đồ họa mượt mà với chất liệu hình ảnh màu xanh dương vô cùng sướng mắt. Âm thanh quay hũ hay hiệu ứng của những phòng chơi chính như Tài Xỉu, Vương Quốc Ben… cũng sẽ khiến bạn hoàn toàn bị chinh phục bởi sự huyền bí và chân thực đến từng chi tiết nhỏ.`;
  const tenCode = "BCB";
  const triGia = "RIK";
  const linkpage = "./nhan-code-rik-vip";
  const banner2 = "../public/images/rik-vip-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCoderio66 = async (req, res) => {
  const banner1 = "../public/images/BANNER-RIO66.png";
  const tenGame = "Rio66";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Rio66 sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Rio66 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip ";
  const triGia = "B";
  const linkpage = "./nhan-code-rio66";
  const banner2 = "../public/images/FOOTER-RIO66.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodebinh88 = async (req, res) => {
  const banner1 = "../public/images/binh88-banner.jpg";
  const tenGame = "Binh88 ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Binh88 sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Binh88 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "B88";
  const triGia = "$";
  const linkpage = "./code-binh88";
  const banner2 = "../public/images/binh88-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodebum68 = async (req, res) => {
  const banner1 = "../public/images/BANNER-bum68.png";
  const tenGame = "Bum68";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Bum68sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Bum68 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Bum";
  const triGia = "B";
  const linkpage = "./nhan-code-bum68";
  const banner2 = "../public/images/footer-bum68.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodeb29 = async (req, res) => {
  const banner1 = "../public/images/BANNER-B29.png";
  const tenGame = "B29 ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH B29 sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ B29 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "B";
  const linkpage = "./nhan-code-b29";
  const banner2 = "../public/images/FOOTER-B29.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodenhatvip = async (req, res) => {
  const banner1 = "../public/images/nhatvip-banner.png";
  const tenGame = "NhatVip ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH NhatVip sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ NhatVip bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "Nhất";
  const linkpage = "./code-nhatvip";
  const banner2 = "../public/images/nhat-vip-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodex8 = async (req, res) => {
  const banner1 = "../public/images/x8-banner.jpg";
  const tenGame = "X8 ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH X8 sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ X8 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "xum";
  const linkpage = "./nhan-code-x8";
  const banner2 = "../public/images/x8-footer.jfif";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCodeHit = async (req, res) => {
  const banner1 = "../public/images/banner-hit.png";
  const tenGame = "HIT ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH HIT sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ X8 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "HIT";
  const triGia = "";
  const linkpage = "./nhan-code-hit";
  const banner2 = "../public/images/banner-hit2.png";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};

module.exports.getCodetop88 = async (req, res) => {
  const banner1 = "../public/images/top88-banner.jpg";
  const tenGame = "Top88 ";
  const content = `hỗ trợ người chơi tải game về cho điện thoại máy tính, chơi trực tiếp trên web. Theo thông tin mới từ NPH Top88 sẽ thực hiện Big Update khoảng mỗi tháng 1 lần. Những thay đổi từ Top88 bổ sung như tỷ giá nạp, rút nhằm mang đến chất lượng dịch vụ nhất cho người chơi.`;
  const tenCode = "Vip";
  const triGia = "top";
  const linkpage = "./nhan-code-top88";
  const banner2 = "../public/images/top88-footer.jpg";
  res.render("gamepage", {
    data: {
      banner1,
      tenGame,
      banner2,
      tenCode,
      triGia,
      content,
      linkpage,
    },
  });
};
module.exports.getCode = async (req, res) => {
  res.render("codepage");
};
