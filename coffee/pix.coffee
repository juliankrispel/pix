class Px
    constructor: (@.height, @.width) ->


##Probably usage

px('canvas').eachPixel((pixel, x, y, i)->
    surroundingPixels = @.getArea(--x, --y, ++x, ++y)

    #Oder vielleicht doch
    surroundingPixels = @.surrounding(1)

    #Oder
    surroundingPixels = [
        @.getRelativePixel(-1, 1)
        @.getRelativePixel(0, 1)
        @.getRelativePixel(1, 1)
        @.getRelativePixel(1, 0)
        @.getRelativePixel(1, -1)
        @.getRelativePixel(0, -1)
        @.getRelativePixel(-1, -1)
        @.getRelativePixel(-1, 0)
        ]

    #Man könnte auch so einen Pixel hernehmen
    leftPixel = @.leftPixel()
    rightPixel = @.rightPixel()

    #pixel from another canvas
    otherPixel = px('otherCanvas').getPixel x,y

    surroundingPixels.push(otherPixel)

    average = _(surroundingPixels).reduce (memo, num) -> memo + num / surroundingPixels.length
)


