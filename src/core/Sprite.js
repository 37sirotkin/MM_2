import { log } from '../const';
import { PLATFORMS } from '../const';
import gsap from 'gsap';

export class Sprite extends PIXI.Sprite {
    constructor(config) {
        super(config.texture);
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.alpha = config.alpha === 0 ? 0 : config.alpha;
        if (config.anchor) this.anchor.set(config.anchor.x, config.anchor.y);
        if (config.scale) this.scale.set(config.scale.x, config.scale.y);
        this.objectId = config.objectId || null;
        this.portraitX = config.portraitX || this.x;
        this.portraitY = config.portraitY || this.y;
        this.adaptivePosition = config.adaptivePosition || false;
        window.addEventListener('orientationchange', () =>
            this._changeOrientation(this.x, this.y, config.portraitX, config.portraitY)
        );
    }

    onClick(func) { //по клику на спрайт, выполняется функция func
        this.interactive = true;
        this.buttonMode = true;
        this.on('pointerdown', func);
    }

    _changeOrientation(x, y, portraitX, portraitY) {
        if (this.adaptivePosition) {
            if (window.innerWidth < window.innerHeight) {
                this.x = portraitX;
                this.y = portraitY;
            } else {
                this.x = x;
                this.y = y;
            }
        }
    }

    getAnchor() {
        return { x: this.anchor.x, y: this.anchor.y };
    }

    show() { //плавное появление спрайта
        gsap.to(
            this,
            {
                alpha: 1,
                duration: 0.3,
                ease: 'easeInOut',
                onComplete: () => (this.visible = true),
            }
        );
    }

    hide() { //плавное исчезновение спрайта
        gsap.to(
            this,
            {
                alpha: 0,
                duration: 0.3,
                ease: 'easeInOut',
                onComplete: () => (this.visible = false),
            }
        );
    }

    toStore(platform, appStore, playMarket) {
        switch (platform) {
            case PLATFORMS.fb:
                FbPlayableAd.onCTAClick();
                break;
            case PLATFORMS.unity:
                var userAgent = navigator.userAgent || navigator.vendor;
                var url = appStore;
                var android = playMarket;
                if (/android/i.test(userAgent)) {
                    url = android;
                }
                mraid.open(url);
                break;
            case PLATFORMS.al:
                var userAgent = navigator.userAgent || navigator.vendor;
                var url = appStore;
                var android = playMarket;
                if (/android/i.test(userAgent)) {
                    url = android;
                }
                mraid.open(url);
                break;
            case PLATFORMS.is:
                dapi.openStoreUrl();
                break;
            case PLATFORMS.tt:
                window.openAppStore();
        }
    }
}
