import { appendHeader, useQuery } from 'h3'

import canvas from 'canvas'
import konva from 'konva'

// const { pixelRatio } = canvas;

export default async (req, res) => {
    // const
    const BG = ''
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