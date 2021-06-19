  
/** 
 * Contains the links that are inserted into the HTML on load for documentation website
 */

let legend = `
<h3>Getting Started</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/index.html">Introduction</a></li>
        <li><a href="${lp}/docs/contributing.html">Contributing</a></li>
        <li><a href="${lp}/docs/contributors.html">Contributors</a></li>
        <li><a href="${lp}/docs/azurite-style.html">Code Style Guidelines</a></li>
    </ul>
</nav>
<h3>Working In Azurite</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/how-engine-works.html">How the engine works</a></li>
        <li><a href="${lp}/docs/structure.html">Structure of Azurite</a></li>
    </ul>
</nav>
<h3>Components</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/SpriteRenderer.html">How the engine works</a></li>
    </ul>
</nav>

<h3>Generated</h3>
<nav>
    <ul>
        <!-- Pages -->
        <li><a href="${lp}/docs/SpriteRenderer.html">SpriteRenderer</a></li>
        <li><a href="${lp}/docs/AABB.html">AABB</a></li>
        <li><a href="${lp}/docs/Events.html">Events</a></li>
        <li><a href="${lp}/docs/SpriteRenderer.html">SpriteRenderer</a></li>
    </ul>
</nav>
`;

function add (selector, html) {
    document.querySelector(selector).innerHTML += html;
}


add('.legend-card', legend);