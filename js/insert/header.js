//Inserter for documentation website

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}

var welcomeHeader = "";
function setHeader (header, subheader) {
    
    welcomeHeader = `
    <!-- Welcome Sign -->
    <div class="welcomeParent">
    <div class="welcome">
        <h1>` + header + `</h1>
        <div style="text-align: center; width:100%;"><a class="button c2a" target="_blank" href="https://azurite-engine.github.io/Azurite-Docs/tutorials/set-a-project.html">Start using Azurite!</a></div>
    </div>
    </div>
    `;

    add("body", welcomeHeader);
}


