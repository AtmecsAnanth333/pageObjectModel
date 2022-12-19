import { Page } from "@playwright/test";

export default class sandBoxPage{

    private page:Page;
    constructor(page:Page){
        this.page=page;
    }

    public get sandBox(){
        return this.page.$('//*[@id="post-399"]/div/div[3]/div/div[1]/div[1]/div/a');
    }
    public async jscriptDelay(){
        const ele=await this.sandBox;
        await ele?.click();
    
}
}