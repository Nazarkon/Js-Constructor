import { model } from './model';
import { Site } from './classes/site';
import { Sidebar } from "./classes/sidebar";
import './styles/main.css';

const site = new Site('#site');

const updateCallBack = newBlock => {
    model.push(newBlock)
    site.render(model)
}

new Sidebar('#panel',updateCallBack );

site.render(model)
