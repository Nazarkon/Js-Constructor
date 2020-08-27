import {col, row} from "../utils";

class Block {
    constructor(value,options) {
        this.value = value;
        this.options = options;
    }

    toHTML(){
        throw new Error('Метод toHTML повинен бути реалізований')
    }
}

export class CardBlock extends Block {
    constructor(value,options) {
        super(value,options);
    }

    toHTML() {
        const {title , value} = this.options
        console.log(this.value)
        console.log(this.options)

        return `
       <div class="card" style="width: 18rem;">
            <img src="${this.value}" class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${value}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
</div>`
    }
}

export class  TitleBlock extends Block{
    constructor(value, options) {
        super(value,options);
    }

    toHTML() {

        const {tag = 'h2' , styles} = this.options;
        return row(col(`
           <${tag}>${this.value}</${tag}>
        `),styles)
    }

}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value,options);
    }
    toHTML() {
        const {alt , styles, imageStyles} = this.options;
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`
        return row(html,styles)
    }
}

export class TextColumnsBlock extends Block{
    constructor(value, options) {
        super(value,options);
    }
    toHTML() {
        const { styles }  = this.options;
        const html = this.value.map(item => col(`${item}`))
        return row(html.join(''),styles)
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value,options);
    }
    toHTML() {
        const {  styles }  = this.options;
        return row(col(`
         <div class="col-sm">
           <p style="margin-bottom: 0">${this.value}</p>
           </div>
        `),styles)
    }
}