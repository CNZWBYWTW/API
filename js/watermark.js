fetch('https://f27-preview.runhosting.com/host-1.cnzw.us.kg/api/ip/')
    .then(response => response.json())
    .then(IP_INFO => {
        if(innerWidth / innerHeight > 1.2){
            font_size = 0.5;
            font_p = 0.05;
        }else{
            font_size = 0.8;
            font_p = 0.03;
        }
        CNZW_Watermark_Code = `data:image/svg+xml;charset=UTF-8,<svg role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 14' xml:space='preserve' width='300' height='100'><title>WaterMark by CNZW</title><text font-size='${font_size}px' fill='rgba(0, 0, 0, ${font_p})' stroke-width='0.01px' stroke='rgba(255, 255, 255, 0.03)'><tspan dx='0' dy='0.8'>IP: ${IP_INFO['ip']}</tspan><tspan dx='0' dy='0.6'>Host: ${location.host}</tspan><tspan dx='0' dy='0.6'>Time: ${new Date().toUTCString()}</tspan></text></svg>`;
        CNZW_watermark_code_content = document.createElement("div");
        CNZW_watermark_code_content.id = 'CNZW_Watermark';
        CNZW_watermark_code_content.innerHTML += `<style>#CNZW_Watermark{height:100%;width:100%;z-index:2147483647;position:fixed;top:0;left:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat;background-position:0 0,-100px 100px,-200px 200px,left top,center center,right bottom;background-size:1000px;pointer-events:none;}</style>`;
        document.querySelector("body").appendChild(CNZW_watermark_code_content);
        document.querySelector("#CNZW_Watermark").style = `background-image: url("${CNZW_Watermark_Code}"), url("${CNZW_Watermark_Code}"), url("${CNZW_Watermark_Code}")`;
    });
