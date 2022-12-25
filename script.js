const fillHeadings = () => {
    let codeBlock = document.getElementById("headings");
    for (let i = 1; i <= 6; i++) {
        codeBlock.innerHTML += `<h3>&lt;h${i}&gt; Tag</h3>
        <pre class="language-html"><code>&lt;h${i}&gt;Heading ${i}&lt;/h${i}&gt;</code>`
    }
}

// fillHeadings()

const run = () => {
    let heading = document.getElementById("heading-section");
    for (let i = 1; i <= 6; i++) {

        heading.innerHTML += `<div class="code-block"><h3>&lt;h${i}&gt; Tag</h3>
        <pre class="language-html"><code>&lt;h${i}&gt;Heading ${i}&lt;/h${i}&gt;</code></div>`
    }
}

run();