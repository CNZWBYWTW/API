window.onload = function () {
    var bili_id_list = document.querySelectorAll("video[data-bili-id]"),
        bili_id_list_m = 0,
        bili_id_list_m_t = 0;
    while (bili_id_list_m < bili_id_list.length && bili_id_list_m_t != 1) {
        bili_id_list[bili_id_list_m].setAttribute('src', 'CNZW');
        bili_id_list_m++;
        if (bili_id_list_m < bili_id_list.length) {
            bili_id_list_m = 0;
            bili_id_list_m_t = 1;
        }
    }
    setbilivideourl();
    function setbilivideourl() {
        if (bili_id_list_m < bili_id_list.length) {
            fetch(`https://api.dyqvideo.com/download/url/get`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "url": `https://www.bilibili.com/video/${bili_id_list[bili_id_list_m].getAttribute('data-bili-id')}`,
                    "videoChannel": "BILI_BILI"
                })
            })
                .then(response => response.json())
                .then(CNZW => {
                    bili_id_url = CNZW['data']['downloadUrl'];
                    bili_id_list[bili_id_list_m].innerHTML = `<source src="${CNZW['data']['downloadUrl']}">`;
                    bili_id_list[bili_id_list_m].setAttribute('src', CNZW['data']['downloadUrl']);
                    bili_id_list_m++;
                    setbilivideourl();
                })
        }
    }
}