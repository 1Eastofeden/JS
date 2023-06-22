
const usernameoremailInput = document.querySelector('#usernameoremail')
const passwordInput = document.querySelector('#password')

document.querySelector('#sendbutton').addEventListener('click', (event) => {

    event.preventDefault()

    let counter = 0

    const VAluesusername = localStorage.getItem('username')
    const VAluesemail = localStorage.getItem('email')
    const VAluespassword = localStorage.getItem('password')

    const age = localStorage.getItem('age')
    const year = localStorage.getItem('year')
    const mounth = localStorage.getItem('mounth')
    const day = localStorage.getItem('day')
    const hourse = localStorage.getItem('hourse')
    const minutes = localStorage.getItem('minutes')
    const seconds = localStorage.getItem('seconds')
    
        const enterEmailandUsernameValue = usernameoremailInput.value.trim()
        const enterPasswordValue = passwordInput.value.trim()
    
        if (enterEmailandUsernameValue === VAluesusername || enterEmailandUsernameValue === VAluesemail) {
            if (enterEmailandUsernameValue === VAluesusername) {
                counter++
            } else if (enterEmailandUsernameValue === VAluesemail) {
                counter++
            } else {
                console.log('bir hata oluştu')
            }
        } else {
            console.log('yanlış username ya da email bilgisi')
        } if (enterPasswordValue === VAluespassword) {
            counter++
        } else {
            console.log('yanlış password bilgisi')
        }

        if (counter === 2) {

            const userInfo = {
              Username: `${VAluesusername}`,
              Email: `${VAluesemail}`,
              Password: `${VAluespassword}`,
              Age: `${age}`,
              Year: `${year}`,
              Mounth: `${mounth}`,
              Day: `${day}`,
              Hourse: `${hourse}`,
              Minutes: `${minutes}`,
              Seconds: `${seconds}`, 
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            .then(response => {
                if (response.ok) {
                    console.log('bilgi başarıyla gönderildi :', userInfo)
                } else {
                    console.log('Veri gönderme hatası :', response.status);
                }
            }).catch(error => {
                console.log('Hata:', error);
            });
        }
})