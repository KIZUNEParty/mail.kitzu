import { appendHeader, useQuery } from 'h3'

import konva from 'konva'
import canvas from 'canvas'

const { loadImage } = canvas;

const BGCall = [
    `https://raw.githubusercontent.com/KIZUNEParty/mail.kitzu/main/public/bg1.jpeg`,
    `https://raw.githubusercontent.com/KIZUNEParty/mail.kitzu/main/public/bg2.jpeg`,
    `https://raw.githubusercontent.com/KIZUNEParty/mail.kitzu/main/public/bg3.jpeg`,
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

    stage.add(layer)

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

    console.log(BG);
    
    layer.add(bgPrint);

    // Frame
    let top = new konva.Rect({
        x: 10,
        y: 10,
        width: w - 20,
        height: 3,
        fill: 'white'
    })

    let bottom = new konva.Rect({
        x: 10,
        y: h - 10,
        width: w - 20,
        height: 3,
        fill: 'white'
    })

    let left = new konva.Rect({
        x: 10,
        y: 10,
        height: h-20,
        width: 3,
        fill: 'white'
    })

    let right = new konva.Rect({
        x: w-10,
        y: 10,
        height: h-20,
        width: 3,
        fill: 'white'
    })

    layer.add(top);
    layer.add(bottom);
    layer.add(left);
    layer.add(right);

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