
function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


let navbar = `
<!-- Top navbar navigation thing -->
<div class="navbar">
    <div class="container flexbox">
        <div class="logo">
            <h1><a href="${lp}/index.html">Azurite <span>Engine</span></a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="https://azurite-engine.github.io/Azurite-Docs/">Documentation</a></li>
                <li><a href="https://discord.gg/GGYgsszjka">Discord</a></li>
                <li><a href="https://github.com/azurite-engine" target="_blank">GitHub</a></li>
            </ul>
        </nav>
    </div>
</div>
`;

add("body", navbar);
