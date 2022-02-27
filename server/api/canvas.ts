import { appendHeader, useQuery } from 'h3'

import konva from 'konva'
import canvas from 'canvas'

const { loadImage } = canvas;

const BGCall = [
    `./bg1.jpeg`,
    `./bg2.jpeg`,
    `./bg3.jpeg`,
]

export default async (req, res) => {
    // const
    const BG = BGCall[BGCall.length * Math.random() | 0]
    const lc = 'making with <3 by katchan'

    const w = 800;
    const h  = 600;

    // Stage setting up 
    let stage = new konva.Stage({
        container: undefined,
        width: w,
        height: h
    })

    let layer = new konva.Layer()

    // Bg
    let bgPrint: konva.Image;
    let image = await loadImage(BG) as any;
    bgPrint = new konva.Image({
        x: 0,
        y: 0,
        image,
        width: w,
        height: h
    });

    layer.add(bgPrint);

    // Frame

    // Logo

    // Bottom Text

    // Buffer
    const mail = await new Promise<string>((resolve, reject) => {
        stage.toDataURL({
            pixelRatio: 1,
            callback: (str) => {
                resolve(str.replace(/^data:image\/png;base64,/, ""))
            },
        })
    })

    // Kill Process

    // RSP
    appendHeader(res, 'content-type', 'image/png');
    return Buffer.from(mail, 'base64');
}