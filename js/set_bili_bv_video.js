window.onload = function () {
    var bili_bv_list = document.querySelectorAll("video[data-bili-bv]"),
        bili_bv_list_m = 0;
    setbilivideourl();
    function setbilivideourl() {
        if (bili_bv_list_m < bili_bv_list.length) {
            if (bili_bv_list[bili_bv_list_m].getAttribute('data-bili-p') == null) {
                bili_bv_list[bili_bv_list_m].setAttribute('data-bili-p', 1);
            }
            fetch(`https://api.dyqvideo.com/download/url/get`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "https://bilibili.dyqvideo.com"
                },
                body: JSON.stringify({
                    "url": `https://www.bilibili.com/video/${bili_bv_list[bili_bv_list_m].getAttribute('data-bili-bv')}`,
                    "videoChannel": "BILI_BILI"
                })
            })
                .then(response => response.json())
                .then(CNZW => {
                    bili_bv_url = CNZW['data']['downloadUrl'];
                    bili_bv_list[bili_bv_list_m].innerHTML = `<source src="${CNZW['data']['downloadUrl']}">`;
                    bili_bv_list[bili_bv_list_m].setAttribute('src', CNZW['data']['downloadUrl']);
                    bili_bv_list_m += 1;
                    setbilivideourl();
                })
        }
    }
}