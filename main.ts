namespace SpriteKind {
    export const Portal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const GravityFlip = SpriteKind.create()
    export const EndPortal = SpriteKind.create()
    export const RocketTile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EndPortal, function (sprite, otherSprite) {
    otherSprite.destroy()
    setDefaultMode()
    buildLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GravityFlip, function (sprite, otherSprite) {
    gravitySign = gravitySign * -1
    mySprite.ay = gravitySign * gravityValue
    otherSprite.destroy(effects.trail, 500)
})
function createGravityFlip () {
    gravityFlip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . 8 9 9 9 9 9 9 8 . . . . 
        . . . 8 9 9 9 9 9 9 9 9 8 . . . 
        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        . . 8 9 9 9 9 9 9 9 9 9 9 8 . . 
        . 8 5 9 9 9 9 9 9 9 9 9 9 5 8 . 
        8 5 8 9 9 9 9 9 9 9 9 9 9 8 5 8 
        8 5 8 9 9 9 9 9 9 9 9 9 9 8 5 8 
        . 8 5 5 5 5 5 9 9 5 5 5 5 5 8 . 
        . . 8 9 9 9 9 5 5 9 9 9 9 8 . . 
        . . . 8 9 9 9 9 9 9 9 9 8 . . . 
        . . . . 8 9 9 9 9 9 9 8 . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.GravityFlip)
    gravityFlip.z = 10
    return gravityFlip
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.confetti, 500)
})
function createTilemapSprites () {
    for (let tileLocationSmallTriangle of tiles.getTilesByType(assets.tile`Temporary asset`)) {
        tiles.setTileAt(tileLocationSmallTriangle, assets.tile`transparency16`)
        tiles.placeOnTile(createTriangleSmall(), tileLocationSmallTriangle)
    }
    for (let tileLocationBigTriangle of tiles.getTilesByType(assets.tile`tile3`)) {
        tiles.setTileAt(tileLocationBigTriangle, assets.tile`transparency16`)
        tiles.placeOnTile(createTriangleBig(), tileLocationBigTriangle)
    }
    for (let tileLocationPortal of tiles.getTilesByType(assets.tile`tile4`)) {
        tiles.setTileAt(tileLocationPortal, assets.tile`transparency16`)
        tiles.placeOnTile(createEndPortal(), tileLocationPortal)
    }
    for (let tileLocationMonster of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(tileLocationMonster, assets.tile`transparency16`)
        tiles.placeOnTile(createMonster(), tileLocationMonster)
    }
    for (let tileLocationCoin of tiles.getTilesByType(assets.tile`tile7`)) {
        tiles.setTileAt(tileLocationCoin, assets.tile`transparency16`)
        tiles.placeOnTile(createCoin(), tileLocationCoin)
    }
    for (let tileLocationGravityFlip of tiles.getTilesByType(assets.tile`tile9`)) {
        tiles.setTileAt(tileLocationGravityFlip, assets.tile`transparency16`)
        tiles.placeOnTile(createGravityFlip(), tileLocationGravityFlip)
    }
    for (let tileLocationRocket of tiles.getTilesByType(assets.tile`tile10`)) {
        tiles.setTileAt(tileLocationRocket, assets.tile`transparency16`)
        tiles.placeOnTile(createRocket(), tileLocationRocket)
    }
}
function createCoin () {
    coin = sprites.create(img`
        . . . . . . f f f . . . . . . . 
        . . . . f f 4 4 4 f f . . . . . 
        . . . f 4 4 4 4 4 4 4 f . . . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . f 4 4 4 4 4 4 4 4 4 4 4 f . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . . 
        . . f 4 4 4 4 4 4 4 4 4 f . . . 
        . . . f 4 4 4 4 4 4 4 f . . . . 
        . . . . f f 4 4 4 f f . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    coin.z = 20
    return coin
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (allowDoubleJump) {
        mySprite.vy = gravitySign * jumpValue
    } else {
        if (mySprite.vy == 0) {
            mySprite.vy = gravitySign * jumpValue
        }
    }
})
function createTriangleBig () {
    triangle = sprites.create(img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Enemy)
    triangle.z = 10
    return triangle
}
function buildLevel () {
    if (nextLevel == levels.length) {
        game.over(true)
    }
    destroyTilemapSprites()
    tiles.loadMap(levels[nextLevel])
    createTilemapSprites()
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
    nextLevel += 1
}
function createMonster () {
    monster = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . f 
        . . . f f 2 2 f f f f . . . f f 
        . . f f f 2 f f f f f f f . f . 
        . . 1 f 1 f f f f f f f f f f . 
        . . 1 f 1 f f f f f f f f f . . 
        . . 1 f f f f f f f f f f f f . 
        . . . . f f f f f f f f f f f f 
        . . . . . . f f f f f f . f f f 
        . . . . . . . . . . . . . . 3 f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    monster.z = 10
    return monster
}
function createTriangleSmall () {
    triangle = sprites.create(assets.image`Tri Small`, SpriteKind.Enemy)
    triangle.z = 10
    return triangle
}
function createEndPortal () {
    thisPortal = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 3 3 3 3 3 3 3 7 . . . . 
        . . . 3 7 . . . . . . 3 7 . . . 
        . . 3 7 4 4 4 4 4 4 4 . 3 7 . . 
        . 3 7 4 . . 5 5 5 5 5 4 . 3 7 . 
        . 3 7 4 . 5 f f f f . 4 . 3 7 . 
        . 3 7 4 . 5 . . . f . 4 . 3 7 . 
        . 3 7 4 . 5 . . . f . 4 . 3 7 . 
        . 3 7 4 . 5 . . . f . 4 . 3 3 . 
        . 3 7 4 . 5 f f f f . 4 . 3 7 . 
        . 3 7 4 . . 5 5 5 5 5 4 . 3 7 . 
        . . 3 7 4 4 4 4 4 4 4 . 3 7 . . 
        . . . 3 7 . . . . . . 3 7 . . . 
        . . . . 3 3 3 3 3 3 3 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.EndPortal)
    thisPortal.z = 10
    return thisPortal
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RocketTile, function (sprite, otherSprite) {
    setRocketMode()
    otherSprite.destroy(effects.trail, 500)
})
function setRocketMode () {
    gravityValue = 100
    jumpValue = -50
    gravitySign = 1
    allowDoubleJump = true
    mySprite.ay = gravitySign * gravityValue
}
function createRocket () {
    rocket = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . 6 a a a a a 6 . . . . 
        . . . . . 6 a 6 6 6 a 6 . . . . 
        . . . . . 6 a 6 a 6 a 6 . . . . 
        . . . . . 6 a 3 6 6 a 6 . . . . 
        . . . . . 6 a a a a a 6 . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.RocketTile)
    rocket.z = 10
    return rocket
}
function destroyTilemapSprites () {
    for (let spriteEnemy of sprites.allOfKind(SpriteKind.Enemy)) {
        spriteEnemy.destroy()
    }
    for (let spritePortal of sprites.allOfKind(SpriteKind.EndPortal)) {
        spritePortal.destroy()
    }
    for (let spriteCoin of sprites.allOfKind(SpriteKind.Coin)) {
        spriteCoin.destroy()
    }
    for (let spriteGravityFlip of sprites.allOfKind(SpriteKind.GravityFlip)) {
        spriteGravityFlip.destroy()
    }
    for (let spriteRocket of sprites.allOfKind(SpriteKind.RocketTile)) {
        spriteRocket.destroy()
    }
}
function setDefaultMode () {
    gravityValue = 600
    jumpValue = -200
    gravitySign = 1
    allowDoubleJump = false
    mySprite.ay = gravitySign * gravityValue
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let rocket: Sprite = null
let thisPortal: Sprite = null
let monster: Sprite = null
let triangle: Sprite = null
let jumpValue = 0
let allowDoubleJump = false
let coin: Sprite = null
let gravityFlip: Sprite = null
let gravityValue = 0
let gravitySign = 0
let nextLevel = 0
let mySprite: Sprite = null
let levels: tiles.WorldMap[] = []
levels = [tiles.createMap(tilemap`level_1`), tiles.createMap(tilemap`level_2`), tiles.createMap(tilemap`level_3`)]
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . 6 a a a a a a a a a a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a 6 6 6 7 7 6 6 6 a 6 . . 
    . . 6 a 6 6 6 7 7 6 6 6 a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a 6 6 6 6 6 6 6 6 a 6 . . 
    . . 6 a a a a a a a a a a 6 . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
setDefaultMode()
let xVelDefault = 100
nextLevel = 0
mySprite.ay = gravitySign * gravityValue
mySprite.setVelocity(xVelDefault, 0)
scene.setBackgroundColor(10)
buildLevel()
game.onUpdate(function () {
    if (mySprite.vx == 0) {
        mySprite.vx = xVelDefault
    }
})
