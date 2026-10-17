/* Retina @2x image handling.
 *
 * Any image whose filename contains "@2x" is treated as a 2x-density
 * capture: it is displayed at half its pixel dimensions while the full
 * resolution is retained for sharp rendering on high-DPI (Retina) screens.
 *
 * This gives us a simple authoring workflow: capture a screenshot on a
 * Retina display, name it e.g. "1-Band EQ@2x.png", and it shows at true
 * on-screen size automatically. Non-@2x images are left untouched.
 */
(function () {
    function halveRetinaImages() {
        var imgs = document.querySelectorAll('img[src*="@2x"], img[src*="%402x"]');
        imgs.forEach(function (img) {
            function apply() {
                if (img.naturalWidth)
                    img.style.width = (img.naturalWidth / 2) + 'px';
            }
            if (img.complete)
                apply();
            else
                img.addEventListener('load', apply);
        });
    }

    // Material's instant navigation (if enabled) emits document$; otherwise
    // fall back to a normal page load.
    if (window.document$ && typeof window.document$.subscribe === 'function')
        window.document$.subscribe(halveRetinaImages);
    else
        document.addEventListener('DOMContentLoaded', halveRetinaImages);
})();
