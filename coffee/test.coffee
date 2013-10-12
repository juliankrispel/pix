## Probably usage

px('canvas').eachPixel((r,g,b,a)->
    console.log r,g,b,a
).eachPixelRow((row)->
    console.log row
)


