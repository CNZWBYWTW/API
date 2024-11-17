window.onload = function () {
    var bili_bv_list = document.querySelectorAll("video[data-bili-bv]"),
        bili_bv_list_m = 0;
    setbilivideourl();
    function setbilivideourl() {
        if (bili_bv_list_m < bili_bv_list.length) {
            if (bili_bv_list[bili_bv_list_m].getAttribute('data-bili-p') == null) {
                bili_bv_list[bili_bv_list_m].setAttribute('data-bili-p', 1);
            }
            fetch(`https://api.injahow.cn/bparse/?bv=${bili_bv_list[bili_bv_list_m].getAttribute('data-bili-bv')}&p=${bili_bv_list[bili_bv_list_m].getAttribute('data-bili-p')}&otype=json&q=80`)
                .then(response => response.json())
                .then(CNZW => {
                    bili_bv_url = CNZW['url'];
                    bili_bv_list[bili_bv_list_m].innerHTML = `<source src="${CNZW['url']}">`;
                    bili_bv_list[bili_bv_list_m].setAttribute('src', CNZW['url']);
                    bili_bv_list_m += 1;
                    setbilivideourl();
                })
        }
    }
}
