const formFields = document.querySelector('form');
const newsForm = document.getElementById('news-form-overlay');

//functions to open/close form-overlay
const openNewsForm = ()=>{
    newsForm.style.display = 'flex';
} 

const closeNewsForm = ()=>{
    newsForm.style.display = 'none';
}

// Function to delete Links data

const deleteNews = async(id)=>{
    if(confirm('Are you sure you want to delete this News ? ') == true ){
        const data = await fetch(`/deleteQuickLinks/${id}`,{
            method: 'DELETE',
            headers: {
                contentType: 'application/json'
            }
        });
        const result = await data.json();
        if(result.message == "deleted"){
            window.location.reload();
        }
    }

}

//function to create a QuickLink

const postBlog = async() => {
    formFields.addEventListener('submit', async(e) => {
        e.preventDefault();
        const formData = new FormData(document.getElementById("form"));

        try {
            const res = await fetch(`/managePanelPost/2`, {
                method: 'POST',
                body: formData
            })
            const data = await res.json();
            if(data){
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    })
}

postBlog();