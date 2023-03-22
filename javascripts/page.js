function createPost() {
/*

<div class="post">

    <div class="votes">
        <button type="button">+</button>
        <p><span class="count">123</span><br />votes</p>
        <button type="button">-</button>
    </div>
    <div class="content">
        <h3><a href="post">This is a post</a></h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus, lorem non varius consequat, ipsum magna vestibulum lectus, et fringilla tellus augue id nisl. Donec tempus est a hendrerit ornare. Phasellus blandit est in malesuada interdum. Mauris finibus vehicula turpis vel lobortis. Phasellus tempor elit massa. Morbi vulputate leo a neque mollis varius. Donec ultricies aliquam vulputate. Nunc dapibus lectus a risus rutrum pulvinar.</p>
        <span class="tag">Tag1</span><span class="tag">Tag2</span><span class="date">Date blah</span>
    </div>

    <section>
        <h2>Ask a Question</h2>
        <input id="post-title" type="text" placeholder="Title" /><br />
        <textarea id="post-content" placeholder="Details..." ></textarea><br />
        <input id="post-tags" type="text"  placeholder="Tags" /><br />
        <button type="button" onclick="createPost();">Create Post</button>
    </section>
</div>

*/

// Create HTML component
let post_div = document.createElement('DIV');
let content_div = document.createElement('DIV');
let votes_div = document.createElement('DIV');

let button_up = document.createElement('BUTTON');
let votes_br = document.createElement('BR');
let button_down = document.createElement('BUTTON');

let votes_para = document.createElement('P');
let votes_span = document.createElement('SPAN');

let post_head = document.createElement('H3');
let post_link = document.createElement('A');
let post_content = document.createElement('P');

let post_date = document.createElement('SPAN');

// Body
post_div.appendChild(votes_div);
post_div.appendChild(content_div);

post_div.classList.add("post");
content_div.classList.add("content");
votes_div.classList.add("votes");

// Votes
votes_div.appendChild(button_up);
votes_div.appendChild(votes_para);
votes_para.appendChild(votes_span);
votes_para.appendChild(votes_br);
votes_div.appendChild(button_down);

button_up.innerText = "+";
button_up.type = 'button';

button_down.innerText = "-";
button_down.type = "button";

votes_span.innerText = '0';
votes_span.classList.add("count");

let votes_para_text = document.createTextNode("votes");
votes_para.appendChild(votes_para_text);

// Post
content_div.appendChild(post_head);
post_head.appendChild(post_link);
content_div.appendChild(post_content);

post_link.href = "post";
post_link.innerText = document.getElementById("post-title").value;

post_content.innerText = document.getElementById("post-content").value;

post_date.classList.add('date');
post_date.innerText = (new Date().toLocaleString());

let tags = document.getElementById("post-tags").value;
let tagsArr = tags.split(' ');

for (let t of tagsArr) {
    let tag = document.createElement("SPAN");
    tag.innerText = t;
    tag.classList.add('tag');
    content_div.appendChild(tag);
}

content_div.appendChild(post_date);

document.querySelector("main").appendChild(post_div);

}