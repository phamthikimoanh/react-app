const sumary_infos = [
  {
    title: "info_detail",
    child: {
      image: require("../public/girl.jpg"),
      title: "thông tin cá nhân",
      bd: "12-10-1990",
      gt: "nữ",
      mail: "kimoanh2613@gmail.com",
      dt: "123456789",
      dc: "123 Điện Biên Phủ"
    }
  },
  {
    title: "info_job",
    child: {
      name: "Phạm Thị Kim Oanh",
      job: "Nhân viên kinh doanh",
      detail: [
        {
          mtnn: "Mục tiêu nghề nghiệp",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
        },
        {
          mtnn: "Học vấn",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet"
        }
      ]
    }
  }
];

export default sumary_infos;
