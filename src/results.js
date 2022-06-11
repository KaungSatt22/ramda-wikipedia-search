export default ([query,names,summaries,links]) => `
    <h2>Searching For "${query}"<h2>
    <ul class='link-group'>
        ${names.map(
            (name,index)=>`
                <li class="list-group-item">
                    <a href=${links[index]} target="_blank">
                        <h4>${name}</h4>
                        <p>${summaries[index]}</p>
                    </a>
                </li>
            `
        ).join('')}
    </ul>
`