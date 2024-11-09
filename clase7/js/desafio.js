class Post {
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }

    validarId() {        
        if (typeof (this.id) == "number") {
            return "ID - Está OK!"
        } else {
            return "ID - NO ESTÁ OK!"
        }
    }

    validarTitle() {
        if (typeof (this.title) == "string") {
            return "Title - Está OK!"
        } else {
            return "Title - NO ESTÁ OK!"
        }
    }

    validarBody() {
        if (typeof (this.body) == "string") {
            return "Body - Está OK!"
        } else {
            return "Body - NO ESTÁ OK!"
        }
    }

    TypeCheck() {
        console.log(this.validarId());
        console.log(this.validarTitle());
        console.log(this.validarBody());
    }
}