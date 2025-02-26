class Subscription {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}

class Video {
  constructor(linkImage, linkImageChannel, titleVideo, nameOfChannel, viewsOfVideo, timeCreateThatVideo ) {
    this.linkImage = linkImage;
    this.linkImageChannel = linkImageChannel;
    this.titleVideo = titleVideo;
    this.nameOfChannel = nameOfChannel;
    this.viewsOfVideo = viewsOfVideo;
    this.timeCreateThatVideo = timeCreateThatVideo;
  }
}

let subscriptions = [];
let videos = [];

function createFiveInstance() {
  let i1 = new Subscription(
    "Godeik",
    "https://yt3.googleusercontent.com/ytc/AIdro_kIDBIHz8-XjFb76VQ2D_45W4kmFEuV02RxN72-0QyQ4Q=s176-c-k-c0x00ffffff-no-rj-mo"
  );
  let i2 = new Subscription(
    "Mr.Beast",
    "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s176-c-k-c0x00ffffff-no-rj-mo"
  );
  let i3 = new Subscription(
    "T-Series",
    "https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s176-c-k-c0x00ffffff-no-rj-mo"
  );
  let i4 = new Subscription(
    "PewDiePie",
    "https://yt3.ggpht.com/vik8mAiwHQbXiFyKfZ3__p55_VBdGvwxPpuPJBBwdbF0PjJxikXhrP-C3nLQAMAxGNd_-xQCIg=s176-c-k-c0x00ffffff-no-rj-mo"
  );
  let i5 = new Subscription(
    "Fedewolf",
    "https://yt3.googleusercontent.com/ytc/AIdro_lkP2acLLShEwqF_wWyEE_3E1g77xcm4BhPnEEuWkfng_w=s176-c-k-c0x00ffffff-no-rj-mo"
  );
  subscriptions.push(i1);
  subscriptions.push(i2);
  subscriptions.push(i3);
  subscriptions.push(i4);
  subscriptions.push(i5);
}

function createThreeVideos() {
  let i1 = new Video(
    "https://people.com/thmb/9GtytrvyUHpN21-rZsIgIiT_EbM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(744x301:746x303)/elon-musk-tesla-cybertruck-041924-2-f76292da92b0415aa5251ad8f3f86f19.jpg",
    "https://yt3.googleusercontent.com/G3gLy3HBgiZ21mEt1uzR0VPA6VXpsgJReuD7Z91nHwcgyFVu_QpHNpxuULN1D0YEQBwD0F1HwQ=s160-c-k-c0x00ffffff-no-rj",
    "La fasinante historia de que como se le ocurrio a Elon Musk crear Tesla",
    "Fox News Channel",
    "503K views",
    "3 days ago"
  );
  let i2 = new Video(
    "https://people.com/thmb/9GtytrvyUHpN21-rZsIgIiT_EbM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(744x301:746x303)/elon-musk-tesla-cybertruck-041924-2-f76292da92b0415aa5251ad8f3f86f19.jpg",
    "https://yt3.googleusercontent.com/G3gLy3HBgiZ21mEt1uzR0VPA6VXpsgJReuD7Z91nHwcgyFVu_QpHNpxuULN1D0YEQBwD0F1HwQ=s160-c-k-c0x00ffffff-no-rj",
    "La fasinante historia de que como se le ocurrio a Elon Musk crear Tesla",
    "Fox News Channel",
    "503K views",
    "3 days ago"
  );
  let i3 = new Video(
    "https://people.com/thmb/9GtytrvyUHpN21-rZsIgIiT_EbM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(744x301:746x303)/elon-musk-tesla-cybertruck-041924-2-f76292da92b0415aa5251ad8f3f86f19.jpg",
    "https://yt3.googleusercontent.com/G3gLy3HBgiZ21mEt1uzR0VPA6VXpsgJReuD7Z91nHwcgyFVu_QpHNpxuULN1D0YEQBwD0F1HwQ=s160-c-k-c0x00ffffff-no-rj",
    "La fasinante historia de que como se le ocurrio a Elon Musk crear Tesla",
    "Fox News Channel",
    "503K views",
    "3 days ago"
  );
  videos.push(i1);
  videos.push(i2);
  videos.push(i3);
}

function showSubscriptions() {
  let HTML_SUBSCRIPTIONS = document.getElementById("subscriptions");
  for (let i = 0; i < subscriptions.length; i++) {
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-light", "btn-zone-two");
    let btn_img = document.createElement("img");
    btn_img.src = subscriptions[i].img;
    btn_img.classList.add("container-img");
    btn.appendChild(btn_img);
    let name = document.createElement("label");
    name.textContent = subscriptions[i].name;
    btn.appendChild(name);
    HTML_SUBSCRIPTIONS.appendChild(btn);
  }
}

function showVideos() {
  let zone_videos = document.getElementById("zone-videos");
  for (let i = 0; i < videos.length; i++) {
    let div_col = document.createElement("div");
    div_col.classList.add("col-4");
    let div_container_img_video = document.createElement("div");
    let img_video = document.createElement("img");
    img_video.src = videos[i].linkImage;
    img_video.classList.add("container-video-img");
    div_container_img_video.appendChild(img_video);
    div_col.appendChild(div_container_img_video);
    let div_container_img_channel = document.createElement("div");
    let img_channel = document.createElement("img");
    img_channel.src = videos[i].linkImageChannel;
    img_channel.classList.add("container-channel-img");
    let title_video =  document.createElement("b");
    title_video.textContent = videos[i].titleVideo;
    let btn_three_dots = document.createElement("button");
    btn_three_dots.classList.add("three-dots", "btn", "btn-light");
    let icon_three_dots = document.createElement("i");
    icon_three_dots.classList.add("bi", "bi-three-dots-vertical");
    btn_three_dots.appendChild(icon_three_dots);
    div_container_img_channel.appendChild(img_channel);
    div_container_img_channel.appendChild(title_video);
    div_container_img_channel.appendChild(btn_three_dots);
    div_col.appendChild(div_container_img_channel);
    let div_container_name_channel = document.createElement("div");
    let name_channel = document.createElement("p");
    let icon_check_channel = document.createElement("i");
    icon_check_channel.classList.add("bi", "bi-check-circle-fill");
    name_channel.textContent = videos[i].nameOfChannel, icon_check_channel;
    name_channel.appendChild(icon_check_channel);
    div_container_name_channel.appendChild(name_channel);
    div_col.appendChild(div_container_name_channel);
    let div_container_data_video = document.createElement("div");
    let data_video_one = document.createElement("label");
    data_video_one.textContent = videos[i].viewsOfVideo + " -  " + videos[i].timeCreateThatVideo;  
    div_container_data_video.appendChild(data_video_one);
    div_col.appendChild(div_container_data_video);
    zone_videos.appendChild(div_col);
  }
}

createFiveInstance();
createThreeVideos();
showSubscriptions();
showVideos();
