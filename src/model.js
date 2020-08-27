import image from './assets/image.png'
import {TitleBlock ,ImageBlock , TextColumnsBlock ,TextBlock , CardBlock} from './classes/blocks'
import {css} from "./utils";

export const model = [
    new TitleBlock( 'Test title',  {
        styles: css({
            background:'linear-gradient(to right, #ff0099, #493240)',
            color:'#fff',
            padding: '1.5rem',
            'text-align': 'center',
        }),
        tag:'h2',
    }),

    new TextBlock('\'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim molestiae non quidem quo sit. ',   {
    styles: 'background: darkblue; font-size: 20px; color: yellow; padding: 50px 50px 50px 50px'
    }),

    new TextColumnsBlock(['1 text', '2 text', '3 text', '4 text'],{styles: 'padding: 5px 5px 5px 5px; text-align:center; background-color: green; font-size: 15px; font-weight: 700;'}),

    new ImageBlock( image ,{styles: 'padding: 2rem 0; display:flex; justify-content:center',
    alt: 'my image',
    imageStyles: 'width:500px; height:auto'
    }),
    new CardBlock( image , {
        title:'Title',
        value:'brwfwufhoewfwofhpew',
        style: css({
            background: 'red',
            color:'blue',
            'text-align': 'center'
        })
    }),
]