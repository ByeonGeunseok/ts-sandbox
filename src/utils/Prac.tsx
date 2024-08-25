let ret:string = '';
let typeSelect:string|null = '';
let stringTray:string = '';

const _HEADER: string = '{';
const _FOOTER: string = '}';

function SelectMenu() {
    ret = '';
    typeSelect = '';
    stringTray = '';

    while(typeSelect !== 'x') {
        typeSelect = prompt('1: name, 2: address, x: exit');
        
        switch(typeSelect) {
            case '1':
                stringTray += "'name'"; 
                continue;
    
            case '2':
                stringTray += "'address'"; 
                continue;
    
            case 'x':
                break;
        }
    }

    ret += _HEADER + stringTray + _FOOTER;
}

export function Prac() {
    SelectMenu();
    return console.log(ret);
}
