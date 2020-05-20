class ElementObserver {
    constructor(id){
        this.element = document.getElementById(id);
    }

    update(model){
        this.element.innerHTML = model.number;
        this.element.style.backgroundColor  = model.color;
    }
}