// const e = require("express");

const form = document.getElementById('blog-form')


const updateButtonHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-name').value.trim();
    const body = document.querySelector('#blog-desc').value.trim();
    const blogID = document.querySelector('#post-id').value.trim();

    if (blogID) {
        const response = await fetch(`/api/blog/${blogID}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to update project');
        }
    }
};

document.querySelector('#blog-form').addEventListener('submit', updateButtonHandler);

// document.querySelector('').addEventListener('submit', updateButtonHandler)