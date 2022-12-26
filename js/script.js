const fillHeadings = () => {
    let heading = document.getElementById("heading-section");
    for (let i = 1; i <= 6; i++) {

        heading.innerHTML += `<div class="code-block"><h3>&lt;h${i}&gt; Tag</h3>
        <pre class="language-html"><code>&lt;h${i}&gt;Heading ${i}&lt;/h${i}&gt;</code></div>`
    }
}

fillHeadings();