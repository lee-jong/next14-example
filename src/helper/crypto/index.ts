import CryptoJS from "crypto";
const KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY ?? "";
const IV = process.env.NEXT_PUBLIC_CRYPTO_IV ?? "";
const ALGORITHM = "aes-256-cbc";

class Crypto {
  encrypt = (data: string) => {
    try {
      const CIPHER = CryptoJS.createCipheriv(ALGORITHM, KEY, IV);
      let encrypt = CIPHER.update(data, "utf8", "base64");
      encrypt += CIPHER.final("base64");
      return encrypt;
    } catch (e) {
      console.log("crypto encrypt error");
    }
  };
}

export default new Crypto();
