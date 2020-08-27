import {row,col} from './utils'

function title(block) {
    const { tag , styles }  = block.options;

    console.log(block)
    return row(col(`
           <${tag}>${block.value}</${tag}>
        `),styles)
}

function text(block) {
    const {  styles }  = block.options;
    return row(col(`
         <div class="col-sm">
           <p style="margin-bottom: 0">${block.value}</p>
           </div>
        `),styles)
}
function textColumns(block) {
    const { styles }  = block.options;
    const html = block.value.map(item => col(`${item}`))
    return row(html.join(''),styles)

}
function image(block) {
    const {alt , styles, imageStyles} = block.options;
    const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}"/>`
    return row(html,styles)
}
function card(block){
    return `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}
export const templates = {title, text, textColumns ,image , card}