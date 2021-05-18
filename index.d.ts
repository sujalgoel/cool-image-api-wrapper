declare module "cool-image-api" {
  export class API {
    public achievement(text: string): Promise<Buffer>;
    public alwayshasbeen(
      text: string,
      earth: string,
      image: string
    ): Promise<Buffer>;
    public amiajoke(image: string): Promise<Buffer>;
    public bad(image: string): Promise<Buffer>;
    public beautiful(image: string): Promise<Buffer>;
    public bed(image: string, image2: string): Promise<Buffer>;
    public birb(): Promise<Buffer>;
    public blur(image: string): Promise<Buffer>;
    public calling(text: string): Promise<Buffer>;
    public captcha(text: string): Promise<Buffer>;
    public cats(): Promise<Buffer>;
    public challenge(text: string): Promise<Buffer>;
    public changemymind(text: string): Promise<Buffer>;
    public clyde(text: string): Promise<Buffer>;
    public communist(image: string): Promise<Buffer>;
    public didyoumean(text: string, text2: string): Promise<Buffer>;
    public discord_message(
      text: string,
      color: string,
      username: string,
      image: string
    ): Promise<Buffer>;
    public dissapointed(text: string, text2: string): Promise<Buffer>;
    public dogs(): Promise<Buffer>;
    public drake(text: string, text2: string): Promise<Buffer>;
    public facepalm(image: string): Promise<Buffer>;
    public facts(text: string): Promise<Buffer>;
    public gay(image: string): Promise<Buffer>;
    public gun(image: string): Promise<Buffer>;
    public hitler(image: string): Promise<Buffer>;
    public invert(image: string): Promise<Buffer>;
    public jail(image: string): Promise<Buffer>;
    public jokeoverhead(image: string): Promise<Buffer>;
    public meme(): Promise<Buffer>;
    public play_store(
      text: string,
      author: string,
      image: string
    ): Promise<Buffer>;
    public presentation(text: string): Promise<Buffer>;
    public random_captcha(): Promise<Object>;
    public rip(image: string): Promise<Buffer>;
    public salty(image: string): Promise<Buffer>;
    public scroll(text: string): Promise<Buffer>;
    public shame(image: string): Promise<Buffer>;
    public ship(image: string, image2: string): Promise<Buffer>;
    public shit(image: string): Promise<Buffer>;
    public simp(image: string): Promise<Buffer>;
    public spank(image: string, image2: string): Promise<Buffer>;
    public trash(image: string): Promise<Buffer>;
    public triggered(image: string): Promise<Buffer>;
    public wanted(image: string): Promise<Buffer>;
    public wasted(image: string): Promise<Buffer>;
    public weather_card(location: string, image: string): Promise<Buffer>;
    public what(image: string): Promise<Buffer>;
  }
  export const version: string;
}
