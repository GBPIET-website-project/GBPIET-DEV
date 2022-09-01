const formFields = document.querySelector('form');

//function to create a news


const postBlog = async() => {
    formFields.addEventListener('submit', async(e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("form"));

        try {
            const res = await fetch(`/managePanelPost`, {
                method: 'POST',
                body: formData
            })
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    })
}

postBlog();