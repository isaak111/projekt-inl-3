export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|iPad/i.test(navigator.userAgent);
};

export function deviceType() {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test((navigator.userAgent))) {
        console.info("tablet");
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test((navigator.userAgent))) {
        console.info("mobile");
        return "mobile";
    }
    console.info("true");
    return "desktop";
};
