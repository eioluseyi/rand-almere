import { last } from "lodash";

const BASE = "/assets";

export default class ImageAssets {
  //
  static webAssets(fileName: string, ext = "png") {
    const _ext = (() => {
      const $fileExt = last(fileName) || "";
      if (["png", "jpg", "jpeg"].includes($fileExt)) {
        return "";
      }

      return `.${ext}`;
    })();

    return `${BASE}/${fileName}${_ext}`;
  }
  // Landing page
  static LOGO = `${BASE}/logo.png`;
}

// Example usage
// <img src={ImageAssets.LOGO} />;
// OR
// <img src={ImageAssets.webAssets('logo.png')} />;
