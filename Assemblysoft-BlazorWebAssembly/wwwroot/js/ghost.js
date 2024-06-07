var parameterUrl = document.getElementById('parameterUrl').value;
var parameterKey = document.getElementById('parameterKey').value;
var parameterVersion = document.getElementById('parameterVersion').value;

export const api = new GhostContentAPI({
    url: parameterUrl,
    key: parameterKey,
    version: parameterVersion
});

api.posts.browse({
    limit: '5',
    filter: 'tag:blog'
}).then(posts => {
    let postList = document.querySelector('#post-list');
    posts.forEach(post => {
        let postDiv = document.createElement('div');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.excerpt}</p>`;
        postList.appendChild(postDiv);
    });
}).catch(err => {
    console.error(err);
});
