namespace SpriteKind {
    export const Portal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const GravityFlip = SpriteKind.create()
    export const EndPortal = SpriteKind.create()
    export const RocketTile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.EndPortal, function (sprite, otherSprite) {
    game.over(true)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let rocket: Sprite = null
let thisPortal: Sprite = null
let monster: Sprite = null
let triangle: Sprite = null
let coin: Sprite = null
let gravityFlip: Sprite = null
let allowDoubleJump = false
let gravitySign = 0
let jumpValue = 0
let gravityValue = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`50000800080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080805050505050505050505050505050505050505050905050505050605050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050405050505050505050505050505050507050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050903050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050505050501010101010505050505050a0505050505010101010101050505030505050505030505050501010101010105050505050505050505050505050505010101010101010101010101010101010101010101020202020201010101010101010101010102020202020201010101010101010101010101010202020202020101010101010101010101010101010102020202020202020202020202020202020202020202020202020202`, img`
    22222222222222222222222222222222222222222222222222222222222222222222222222222222
    ................................................................................
    ................................................................................
    ................................................................................
    ................................................................................
    .........................................................................22222..
    ..........222222..............222222................2222222222222222222222222222
    22222222222222222222222222222222222222222222222222222222222222222222222222222222
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10], TileScale.Sixteen))
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
gravityValue = 400
jumpValue = -200
gravitySign = 1
allowDoubleJump = false
mySprite.ay = gravitySign * gravityValue
mySprite.setVelocity(70, 0)
for (let value of tiles.getTilesByType(myTiles.tile3)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createTriangle(), value)
}
for (let value of tiles.getTilesByType(myTiles.tile4)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createEndPortal(), value)
}
for (let value of tiles.getTilesByType(myTiles.tile6)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createMonster(), value)
}
for (let value of tiles.getTilesByType(myTiles.tile7)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createCoin(), value)
}
for (let value of tiles.getTilesByType(myTiles.tile9)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createGravityFlip(), value)
}
for (let value of tiles.getTilesByType(myTiles.tile10)) {
    tiles.setTileAt(value, myTiles.tile5)
    tiles.placeOnTile(createRocket(), value)
}
game.onUpdate(function () {
    if (mySprite.vx == 0) {
        mySprite.vx = 50
    }
})
