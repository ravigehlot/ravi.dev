import createNewNodeLink from '../utils/createNode';

function swapCSSLink() {
    const cssPath = 'css/themes';

    const CSSLinks = [
        `${cssPath}/green-white.css`,
        `${cssPath}/indigo-white.css`,
        `${cssPath}/red-white.css`,
        `${cssPath}/white-blue.css`,
        `${cssPath}/white-grey.css`,
        `${cssPath}/white-indigo.css`,
        `${cssPath}/white-red.css`,
        `${cssPath}/yellow-black.css`
    ];

    let randCSSLink = CSSLinks[Math.floor(Math.random() * CSSLinks.length)];


    document.head.appendChild(createNewNodeLink('link', randCSSLink));
}

swapCSSLink();