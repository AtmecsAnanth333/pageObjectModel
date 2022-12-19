import { Page } from "@playwright/test";

export default class HeaderPage{
    private page:Page;
    constructor(page: Page){
this.page=page;
    }
    public get elementHomepage(){
      const Homepage=  this.page.$('//*[@id="menu-item-7303"]/a/span');
      if(Homepage !=null){
        return Homepage;
      }else throw new Error("No Element")
    }
    public get elementTrainingpage(){
        const Trainingpage=  this.page.$('//*[@id="menu-item-2995"]/a/span');
        if(Trainingpage !=null){
          return Trainingpage;
        }else throw new Error("No Element")
      }

public get elementsandBoxpage(){
  const sandBoxpage=  this.page.$('//*[@id="menu-item-420"]/a/span');
  if(sandBoxpage !=null){
    return sandBoxpage;
  }else throw new Error("No Element")
}
public async clicksandboxLink(){
  const ele=await this.elementsandBoxpage;
  await ele?.click();
}

}