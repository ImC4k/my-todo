export const reverseContrast = (colorInHex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorInHex);
    const colorInRgb = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
    const brightness = Math.round(((parseInt(colorInRgb.r) * 299) +
                  (parseInt(colorInRgb.g) * 587) +
                  (parseInt(colorInRgb.b) * 114)) / 1000);
    return (brightness > 126) ? 'black' : 'white';
}