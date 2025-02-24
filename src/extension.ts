import { Extension } from '@girs/gnome-shell/extensions/extension';

export default class hello extends Extension {
    override enable() {
        console.log('Hello, World!');
    }

    override disable() {
        console.log('Goodbye, World!');
    }
}
