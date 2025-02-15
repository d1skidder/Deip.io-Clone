/*const textures = [];

//? Render on invisible canvas, and copy result to the webgl context.
const canv = document.createElement("canvas");
const ctx = canv.getContext("2d");

async function loadTexture(url: string) {
    const img = new Image().src = url;
    await new Promise((res) => img.onload = res);

    canv.width = img.width;
    canv.height = img.height;

    ctx?.drawImage(img, 0, 0);
}

interface ImageType {
    onload: Function;
    src: string;
    width: number;
    height: number;
}*/