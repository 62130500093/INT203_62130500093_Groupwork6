var constraints = {
    fullname: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    password: {
        format: {
            pattern: "[a-zA-z0-9\\S]+",
            message: "doesn't except whitespace"
        }
    },
    username: {
        format: {
            pattern: "[a-z0-9\\S]+",
            message: "doesn't except whitespace"
        }
    },

}
const app = Vue.createApp({
    data() {
        return {
            showEmail: "sahachai.kmutt@mail.kmutt.ac.th",
            showTitle: "sophomore SIT KMUTT",
            showFullname: "Sahachai Senarak",
            showImage: "./images/profilekmutt.jpg",
            username: null,
            fullname: null,
            email: null,
            image: null,
            password: null,
            title: null,
            chosenlanguage: null,
            languages: [{ lang_id: 1, lang_name: "English" },
            { lang_id: 2, lang_name: "Thai" },
            { lang_id: 3, lang_name: "Swedish" }],
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                username: this.username,
                fullname: this.fullname,
                email: this.email,
                password: this.password,
                title: this.title,
                chosenlanguage: this.chosenlanguage
            },
                constraints);
            if (!this.errors) {
                if (!this.title) {
                    this.errors = [];
                    this.errors.push('the title won\'t change until you put a info.');
                }
                this.updateProfile();
                alert("Your profile is updated successfully.");
            }

        },
        updateProfile() {
            if (this.email) {
                this.showEmail = this.email;

            }
            if (this.fullname) {
                this.showFullname = this.fullname;

            }
            if (this.title) {
                this.showTitle = this.title;
            }
        }
        ,
        addFile(e) {
            let dropfile = e.dataTransfer.files[0];
           let reader = new FileReader();
           reader.readAsDataURL(dropfile);
           reader.onloadend = function(){
               let showImage = document.getElementById("showImage");
               showImage.src = reader.result;
           }
            alert("Your image profile is updated successfully.");
        }
    }
});
app.mount('#app');