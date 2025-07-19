let obj = document.querySelector('.contact-form');

if (obj){
    obj.addEventListener('submit', function(e){
        e.preventDefault();

        let action = e.currentTarget.getAttribute('action');
		let form = e.currentTarget;
		
        let formData = new FormData(form);
		
		formData.set('name', form.elements.name.value);
		formData.set('email', form.elements.email.value);
		formData.set('msg', form.elements.msg.value);
		
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log('Отправлено');
                }
            }
        }

        xhr.open('POST', action, true);
        xhr.send(formData);

        form.reset();
    });
}