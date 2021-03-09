namespace SpriteKind {
    export const Portal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const GravityFlip = SpriteKind.create()
    export const EndPortal = SpriteKind.create()
    export const RocketTile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EndPortal, function (sprite, otherSprite) {
    otherSprite.destroy()
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
    for (let value of tiles.getTilesByType(assets.tile`tile3`)) {
        tiles.setTileAt(value, assets.tile`tile5`)
        tiles.placeOnTile(createTriangle(), value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile4`)) {
        tiles.setTileAt(value2, assets.tile`tile5`)
        tiles.placeOnTile(createEndPortal(), value2)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value3, assets.tile`tile5`)
        tiles.placeOnTile(createMonster(), value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`tile7`)) {
        tiles.setTileAt(value4, assets.tile`tile5`)
        tiles.placeOnTile(createCoin(), value4)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile9`)) {
        tiles.setTileAt(value5, assets.tile`tile5`)
        tiles.placeOnTile(createGravityFlip(), value5)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile10`)) {
        tiles.setTileAt(value6, assets.tile`tile5`)
        tiles.placeOnTile(createRocket(), value6)
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
function createTriangle () {
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (allowDoubleJump) {
        mySprite.vy = gravitySign * jumpValue
    } else {
        if (mySprite.vy == 0) {
            mySprite.vy = gravitySign * jumpValue
        }
    }
})
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
        . . . . . . . . . . . . . . f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    monster.z = 10
    return monster
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
        . 3 7 4 . 5 . . . f . 4 . 3 7 . 
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
    gravityValue = 100
    jumpValue = -50
    allowDoubleJump = true
    mySprite.ay = gravitySign * gravityValue
    otherSprite.destroy(effects.trail, 500)
})
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
        . . . . . 6 a 6 6 6 a 6 . . . . 
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
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.EndPortal)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.GravityFlip)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.RocketTile)) {
        value.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let rocket: Sprite = null
let thisPortal: Sprite = null
let monster: Sprite = null
let triangle: Sprite = null
let coin: Sprite = null
let gravityFlip: Sprite = null
let nextLevel = 0
let allowDoubleJump = false
let gravitySign = 0
let jumpValue = 0
let gravityValue = 0
let mySprite: Sprite = null
let levels: tiles.WorldMap[] = []
levels = [tiles.createMap(tilemap`level5`), tiles.createMap(tilemap`level2`), tiles.createMap(tilemap`level0`)]
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
gravityValue = 400
jumpValue = -200
gravitySign = 1
allowDoubleJump = false
nextLevel = 0
mySprite.ay = gravitySign * gravityValue
mySprite.setVelocity(70, 0)
buildLevel()
game.onUpdate(function () {
    if (mySprite.vx == 0) {
        mySprite.vx = 50
    }
})
