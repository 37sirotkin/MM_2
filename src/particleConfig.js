import rainParticle from '../dist/images/rain.png';
import snowParcirle from '../dist/images/snow100.png'

export default {
    "lifetime": {
        "min": 4,
        "max": 4
    },
    "ease": [
        {
            "s": 0,
            "cp": 0.379,
            "e": 0.548
        },
        {
            "s": 0.548,
            "cp": 0.717,
            "e": 0.676
        },
        {
            "s": 0.676,
            "cp": 0.635,
            "e": 1
        }
    ],
    "frequency": 0.004,
    "emitterLifetime": 0,
    "maxParticles": 1000,
    "addAtBack": false,
    "pos": {
        "x": 0,
        "y": 0
    },
    "behaviors": [
        {
            "type": "alpha",
            "config": {
                "alpha": {
                    "list": [
                        {
                            "time": 0,
                            "value": 0.73
                        },
                        {
                            "time": 1,
                            "value": 0.46
                        }
                    ]
                }
            }
        },
        {
            "type": "moveSpeedStatic",
            "config": {
                "min": 200,
                "max": 200
            }
        },
        {
            "type": "scale",
            "config": {
                "scale": {
                    "list": [
                        {
                            "time": 0,
                            "value": 0.2
                        },
                        {
                            "time": 1,
                            "value": 0.1
                        }
                    ]
                },
                "minMult": 0.5
            }
        },
        {
            "type": "rotation",
            "config": {
                "accel": 0,
                "minSpeed": 0,
                "maxSpeed": 200,
                "minStart": 50,
                "maxStart": 70
            }
        },
        {
            "type": "textureRandom",
            "config": {
                "textures": [
                    snowParcirle
                ]
            }
        },
        {
            "type": "spawnShape",
            "config": {
                "type": "rect",
                "data": {
                    "x": -50,
                    "y": 0,
                    "w": window.innerWidth * 4,
                    "h": window.innerHeight * 4
                }
            }
        }
    ]
}