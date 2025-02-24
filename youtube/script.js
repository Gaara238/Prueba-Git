class Subscription {
    constructor (name, img) {
        this.name = name;
        this.img = img;
    }
}

let subscriptions = [];

function createFiveInstance() {
    let i1 = new Subscription ("Godeik", "https://yt3.googleusercontent.com/ytc/AIdro_kIDBIHz8-XjFb76VQ2D_45W4kmFEuV02RxN72-0QyQ4Q=s176-c-k-c0x00ffffff-no-rj-mo");
    let i2 = new Subscription ("Mr.Beast", "https://yt3.ggpht.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s176-c-k-c0x00ffffff-no-rj-mo");
    let i3 = new Subscription ("T-Series", "https://yt3.ggpht.com/VunTf0NzCeboiPjbesBdnQuxaF3Lja7UGRbBGQAWRJgMSTj9TTLO3pS1X9qPOJGCNnmPrXeY=s176-c-k-c0x00ffffff-no-rj-mo");
    let i4 = new Subscription ("PewDiePie", "https://yt3.ggpht.com/vik8mAiwHQbXiFyKfZ3__p55_VBdGvwxPpuPJBBwdbF0PjJxikXhrP-C3nLQAMAxGNd_-xQCIg=s176-c-k-c0x00ffffff-no-rj-mo");
    let i5 = new Subscription ("Fedewolf", "https://yt3.googleusercontent.com/ytc/AIdro_lkP2acLLShEwqF_wWyEE_3E1g77xcm4BhPnEEuWkfng_w=s176-c-k-c0x00ffffff-no-rj-mo");
    subscriptions.push(i1);
    subscriptions.push(i2);
    subscriptions.push(i3);
    subscriptions.push(i4);
    subscriptions.push(i5);
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

createFiveInstance();
showSubscriptions();

console.log("fjjhgdhjgjdg");
