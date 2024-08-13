// modifiers
const modifiers = {
    siteHeaderCartModalOpen: 'site-header__cart-modal--open',
    imgThumbnailActive: 'img-showcase__thumbnail--active',
    lightboxOpen: 'lightbox--open'
};

// Shopping cart
const elSiteHeaderCartLink = document.querySelector('.js-site-cart-link');
const elSiteHeaderCartModal = document.querySelector('.js-site-header-cart-modal');

if (elSiteHeaderCartLink) {
    elSiteHeaderCartLink.addEventListener('click', (evt) => {
        evt.preventDefault();

        elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open')
    })
}

// Showcase images

const elProductPageGallery = document.querySelector('.product-page__galery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');

elsImgShowcaseThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // Remove active state from all buttons
        elsImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });

        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

        // Update active image src accordingly
        elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});

// Lightbox

const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightboxClose = document.querySelector('.js-lightbox-close');

if (elLightboxToggler) {
    elLightboxToggler.addEventListener('click', function () {
        elLightbox.classList.add(modifiers.lightboxOpen);
    });
}

if (elLightboxClose) {
    elLightboxClose.addEventListener('click', function () {
        elLightbox.classList.remove(modifiers.lightboxOpen);
    });
}

// Lightbox showcase
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail');


elsImgLightboxThumbnailButton.forEach(function (elButton) {
    elButton.addEventListener('click', function () {
        // Remove active state from all buttons
        elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
            elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
        });

        // Add active state to clicked button
        elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

        // Update active image src accordingly
        elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    });
});
